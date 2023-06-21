import { useState } from "react";
import {
  Tooltip,
  Box,
  Text,
  Button,
  Center,
  Menu,
  MenuButton,
  MenuList,
  Avatar,
  MenuItem,
  MenuDivider,
  Drawer,
  DrawerOverlay,
  DrawerContent,
  DrawerBody,
  Input,
  useToast
} from "@chakra-ui/react";
import axios from 'axios'
import { BellIcon } from "@chakra-ui/icons";
import { ChatState } from "./../../../Context/ChatProvider";
import { useHistory } from "react-router-dom";
import { useDisclosure } from '@chakra-ui/hooks'
import UserListItem from "../../UserListItem";
import ChatLoading  from './../../ChatLoading';
import { Spinner } from "@chakra-ui/react";
const SideDrawer = () => {
  const [search, setSearch] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [loading, setLoading] = useState(false);
  const [loadingChat, setLoadingChat] = useState(false);
  const { user ,setSelectedChat , chats , setChats} = ChatState();
  const history = useHistory()
  const { isOpen, onOpen, onClose } = useDisclosure()
  const toast = useToast()
  const logoutHandler=()=>{
    localStorage.removeItem("userInfo");
    history.push("/")
  }
  const accessChat = async (userId) => {
    console.log(userId);

    try {
      setLoadingChat(true);
      const config = {
        headers: {
          "Content-type": "application/json",
          Authorization: `Bearer ${user.token}`,
        },
      };
      const { data } = await axios.post(`/api/chat`, { userId }, config);

      if (!chats.find((c) => c._id === data._id)) setChats([data, ...chats]);
      setSelectedChat(data);
      setLoadingChat(false);
      onClose();
    } catch (error) {
      toast({
        title: "Error fetching the chat",
        description: error.message,
        status: "error",
        duration: 5000,
        isClosable: true,
        position: "bottom-left",
      });
    }
  };

  const handleSearch=async () =>{
    if(!search) {
      toast({
        title: 'enter values.',
        status: 'warning',
        position:"top-left",
        duration: 9000,
        isClosable: true,
      })
      return;
    }

    try{
      setLoading(true);

      const config = {
        headers:{
          Authorization:`Bearer ${user.token}`
        }
      }

      const {data} = await axios.get(`/api/user?search=${search}`,config)
      setLoading(false)
      setSearchResult(data)
    } catch(err) {
      toast({
        title: 'error occured .',
        status: 'error',
        position:"top-left",
        duration: 9000,
        isClosable: true,
      })
    }

  }
  return (
    <>
      <Box
        d="flex"
        justifyContent="space-between"
        alignItems="center"
        bg="white"
        w="100%"
        p="5px 10px 5px 10px"
        borderWidth="5px"
      >
        <Tooltip label="Search Users to chat" hasArrow placement="bottom-end">
          <Box>
            <Button
              position="absolute"
              top="0"
              left="0"
              zIndex="1"
              size="sm"
              variant="ghost" onClick={onOpen}>
              <Text>🔍</Text>
            </Button>
          </Box>
        </Tooltip>
        <Box display="flex" justifyContent="center">
          <Text>Talkspace</Text>
          <Box
            position="fixed"
            top={0}
            right={0}
            p={0}
            fontSize="2xl"
            overflow="hidden"
          >
            <Menu>
              <MenuButton p={1}>
                <BellIcon m={1} />
              </MenuButton>

              <MenuList></MenuList>
            </Menu>
            <Menu>
              <Button colorScheme="teal" variant="outline" onClick={logoutHandler}>
                logout
              </Button>
              <Avatar size="sm" cursor="pointer" name={user.name} />
            </Menu>
          </Box>
        </Box>
      </Box>

      <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
      <DrawerOverlay/>
      <DrawerContent borderBottomWidth={"1px"}>search users
      <DrawerBody>
        <Box d='flex' pb={2}> 
        <Input placeholder="search by name/email" value={search} onChange={(e) => setSearch(e.target.value)}></Input>
        <Button colorScheme="blue" variant="outline" onClick={handleSearch}>go</Button>
        </Box>
        {loading ? (
              <ChatLoading />
            ) : (
              searchResult?.map((user) => (
                <UserListItem
                  key={user._id}
                  user={user}
                  handleFunction={() => accessChat(user._id)}
                />
              ))
            )}
            {loading && <Spinner ml="auto" d="flex" />}
      </DrawerBody>
      </DrawerContent>
      
      </Drawer>
    </>
  );
};

export default SideDrawer;
