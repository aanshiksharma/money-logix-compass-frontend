import Container from "@/components/shared/container";
import ChatContainer from "../components/chat/chat-container";
import { Chat } from "../components/chat/chat";
import { useChat } from "../hooks/use-chat";

type PropTypes = {
  params: Promise<{ slug: string }>;
};

export default async function ChatPage({ params }: PropTypes) {
  const { slug } = await params;
  const { conversations, setCurrentChatMessages } = useChat();

  const currentConversation = conversations.filter(
    (conversation) => conversation.slug === slug,
  );

  //   setCurrentChatMessages(currentConversation[0].messages);

  return (
    <Container>
      <ChatContainer>
        <Chat />
      </ChatContainer>
    </Container>
  );
}
