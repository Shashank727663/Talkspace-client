import React, { useEffect } from 'react'
import axios from 'axios';
import { useState } from 'react';
import { ChatState } from '../Context/ChatProvider';
import { Box } from '@chakra-ui/react';
import SideDrawer from '../Components/Authentication/miscellaneous/SideDrawer';
import MyChats from '../Components/MyChats';
import ChatBox from '../Components/ChatBox';
import { Flex } from "@chakra-ui/react";

export default function ChatPage() {
  const [fetchAgain, setFetchAgain] = useState(false);
  const { user } = ChatState();

  return (
    <div style={{ width: "100%" }} d="flex" flexDirection="row" justifyContent="space-between">
      {user && <SideDrawer />}
      <Flex justifyContent="space-between" w="100%" h="91.5vh" p="10px">
  {user && <MyChats fetchAgain={fetchAgain} />}
  {user && <ChatBox fetchAgain={fetchAgain} setFetchAgain={setFetchAgain} />}
</Flex>

    </div>

  )
}
