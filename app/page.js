import { Typography, Button, Row, Col, Image } from 'antd';
import Title from 'antd/es/typography/Title';
import Paragraph from 'antd/es/typography/Paragraph';

export default function Home() {
  return (
    <div style={{ padding: '50px', textAlign: 'center' }}>
      {/* Hero Section */}
      <div style={{ backgroundImage: 'url(https://source.unsplash.com/random/1600x900?technology)', backgroundSize: 'cover', padding: '100px 0', color: '#fff' }}>
        <Title level={1} style={{ color: '#fff' }}>Welcome to WhatsApp</Title>
        <Paragraph style={{ color: '#fff' }}>
          Simple. Secure. Reliable messaging. With WhatsApp, you&apos;ll get fast, simple, secure messaging and calling for free*, available on phones all over the world.
        </Paragraph>
        <Button type="primary" style={{ marginBottom: '20px' }}>Download Now</Button>
      </div>

      {/* Features Section */}
      <div style={{ padding: '50px', textAlign: 'center' }}>
        <Row gutter={[16, 16]}>
          <Col span={8}>
            <Image
              src="https://source.unsplash.com/random/300x200?chat"
              alt="Chat Image"
              style={{ width: '100%' }}
            />
            <Title level={3}>Chat with Friends</Title>
            <Paragraph>Stay connected with your friends and family through our seamless chat feature.</Paragraph>
          </Col>
          <Col span={8}>
            <Image
              src="https://source.unsplash.com/random/300x200?video"
              alt="Video Call Image"
              style={{ width: '100%' }}
            />
            <Title level={3}>Video Calls</Title>
            <Paragraph>Enjoy high-quality video calls with your loved ones, no matter where they are.</Paragraph>
          </Col>
          <Col span={8}>
            <Image
              src="https://source.unsplash.com/random/300x200?security"
              alt="Security Image"
              style={{ width: '100%' }}
            />
            <Title level={3}>Secure Messaging</Title>
            <Paragraph>Your privacy is our priority. All your messages are end-to-end encrypted.</Paragraph>
          </Col>
        </Row>
      </div>
    </div>
  );
}
