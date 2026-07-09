import Container from "@/components/shared/container";
import ChatContainer from "../components/chat/chat-container";
import { Chat } from "../components/chat/chat";

type PropTypes = {
  params: Promise<{ slug: string }>;
};

export default async function ChatPage({ params }: PropTypes) {
  const { slug } = await params;

  return (
    <Container>
      <ChatContainer>
        <Chat slug={slug} />
      </ChatContainer>
    </Container>
  );
}
