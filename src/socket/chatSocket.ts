// socket example

const chatSocket = (socket: any) => {
  // opening conversation
  socket.on('open-chat', async (arg: any) => {
    // const foundConversation = await ConvService.findConversationForChat(
    //   arg.productId,
    //   arg.userId,
    //   arg.sellerId,
    // );
    // if (!foundConversation) {
    //   const newConversation = await ConvService.createConversationForChat(
    //     arg.productId,
    //     arg.userId,
    //     arg.sellerId,
    //   );
    //   socket.join(newConversation?._id);
    //   socket.emit('returned-conversation', newConversation);
    // } else {
    //   socket.join(foundConversation?._id);
    //   socket.emit('returned-conversation', foundConversation);
    // }
  });

  // sending the message

  socket.on('chatting', (arg: any) => {
    socket.to(arg.conversationId).broadcast.emit(arg.message);
  });
};

export default chatSocket;
