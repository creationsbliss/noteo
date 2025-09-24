import {
  Body,
  Button,
  Container,
  Head,
  Hr,
  Html,
  Section,
  Tailwind,
  Text,
} from "@react-email/components";

type PasswordResetEmailType = {
  userName: string;
  resetUrl: string;
  requestTime: string;
};

const PasswordResetEmail = ({
  userName,
  resetUrl,
  requestTime,
}: PasswordResetEmailType) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white mx-auto px-[40px] py-[40px] rounded-[8px] max-w-[600px]">
            {/* Header */}
            <Section>
              <Text className="text-[32px] font-bold text-gray-900 mb-[32px] text-center">
                Reset Your Password
              </Text>
            </Section>

            {/* Main Content */}
            <Section>
              <Text className="text-[16px] text-gray-700 mb-[24px] leading-[24px]">
                Hello {userName},
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[24px] leading-[24px]">
                We received a request to reset the password for your account. If
                you made this request, click the button below to create a new
                password.
              </Text>

              <Text className="text-center mb-[32px]">
                <Button
                  href={resetUrl}
                  className="bg-red-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-medium box-border inline-block text-center no-underline"
                >
                  Reset Password
                </Button>
              </Text>

              <Text className="text-[14px] text-gray-600 mb-[24px] leading-[20px]">
                This password reset link will expire in 1 hour for security
                purposes.
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[24px] leading-[24px] font-medium">
                Security Notice:
              </Text>

              <Text className="text-[14px] text-gray-600 mb-[16px] leading-[20px]">
                • If you didn&apos;t request a password reset, please ignore
                this email
              </Text>

              <Text className="text-[14px] text-gray-600 mb-[16px] leading-[20px]">
                • Your current password remains unchanged until you create a new
                one
              </Text>

              <Text className="text-[14px] text-gray-600 mb-[24px] leading-[20px]">
                • If you&apos;re concerned about unauthorized access, contact
                our support team immediately
              </Text>

              <Text className="text-[14px] text-gray-600 mb-[24px] leading-[20px]">
                For your security, this request was made: {requestTime}
              </Text>
            </Section>

            <Hr className="border-gray-200 my-[32px]" />

            {/* Footer */}
            <Section>
              <Text className="text-[12px] text-gray-500 leading-[16px] mb-[8px]">
                Need help? Contact us at security@Noteo.com
              </Text>

              <Text className="text-[12px] text-gray-500 leading-[16px] mb-[8px] m-0">
                Noteo
                <br />
                123 Business Street
                <br />
                City, State 12345
              </Text>

              <Text className="text-[12px] text-gray-500 leading-[16px] m-0">
                © {new Date().getDay()} Noteo. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default PasswordResetEmail;
