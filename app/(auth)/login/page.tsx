import Container from "@/components/shared/container";

import { LoginForm } from "../components/login-form";

export default function Login() {
  return (
    <Container className="min-h-screen">
      <div className="w-full max-w-xs">
        <LoginForm />
      </div>
    </Container>
  );
}
