import { Button, ButtonGroup, Card, CardBody, CardFooter, Divider, Heading, Image, Stack, Text } from '@chakra-ui/react';
import './styles/CustomCard.css';

function CustomCard(props) {
  return (
    <div className="CustomCard">
      {/* <Card className='card'>
        <CardBody className='card-body'>
          <Image
            src={props.img}
            alt='Green double couch with wooden legs'
            borderRadius='lg'
            className='img'
          />
          <Stack mt='6' spacing='3'>
          <Heading className='card-title' size='md'>{props.title}</Heading>
          <Text>
            {props.subtitle}
          </Text>
          </Stack>
        </CardBody>
      </Card> */}
        <img className='image' src={props.img} alt='Image'></img>
        <div className='title-card'>{props.title}</div>
    </div>
  );
}

export default CustomCard;
