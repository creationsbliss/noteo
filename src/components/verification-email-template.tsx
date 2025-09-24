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

type VerificationEmailType = {
  userName: string;
  verificationUrl: string;
};

const VerificationEmail = ({
  userName,
  verificationUrl,
}: VerificationEmailType) => {
  return (
    <Html lang="en" dir="ltr">
      <Tailwind>
        <Head />
        <Body className="bg-gray-100 font-sans py-[40px]">
          <Container className="bg-white mx-auto px-[40px] py-[40px] rounded-[8px] max-w-[600px]">
            {/* Header */}
            <Section>
              <Text className="text-[32px] font-bold text-gray-900 mb-[32px] text-center">
                Verify Your Email Address
              </Text>
            </Section>

            {/* Main Content */}
            <Section>
              <Text className="text-[16px] text-gray-700 mb-[24px] leading-[24px]">
                Hello {userName},
              </Text>

              <Text className="text-[16px] text-gray-700 mb-[24px] leading-[24px]">
                Thank you for signing up! To complete your registration and
                secure your account, please verify your email address by
                clicking the button below.
              </Text>

              <Text className="text-center mb-[32px]">
                <Button
                  href={verificationUrl}
                  className="bg-blue-600 text-white px-[32px] py-[16px] rounded-[8px] text-[16px] font-medium box-border inline-block text-center no-underline"
                >
                  Verify Email Address
                </Button>
              </Text>

              <Text className="text-[14px] text-gray-600 mb-[24px] leading-[20px]">
                This verification link will expire in 24 hours for security
                purposes.
              </Text>

              <Text className="text-[14px] text-gray-600 mb-[24px] leading-[20px]">
                If you didn&apos;t create an account with us, please ignore this
                email or contact our support team if you have concerns.
              </Text>
            </Section>

            <Hr className="border-gray-200 my-[32px]" />

            {/* Footer */}
            <Section>
              <Text className="text-[12px] text-gray-500 leading-[16px] mb-[8px]">
                Need help? Contact us at support@noteo.com
              </Text>

              <Text className="text-[12px] text-gray-500 leading-[16px] mb-[8px] m-0">
                noteo
                <br />
                123 Business Street
                <br />
                City, State 12345
              </Text>

              <Text className="text-[12px] text-gray-500 leading-[16px] m-0">
                © {new Date().getFullYear()} Noteo. All rights reserved.
              </Text>
            </Section>
          </Container>
        </Body>
      </Tailwind>
    </Html>
  );
};

export default VerificationEmail;
