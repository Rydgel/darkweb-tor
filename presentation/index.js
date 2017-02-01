// Import React
import React from "react";

// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  ListItem,
  List,
  Quote,
  Slide,
  Appear,
  Image,
  CodePane,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");


const images = {
  logo: require("../assets/cryptoparty.svg"),
  torLogo: require("../assets/tor.svg")
};

preloader(images);

const theme = createTheme({
  primary: "#454C72",   // purple
  secondary: "#FEF6E2", // yellowish
  tertiary: "#28B58F",  // green
  quartenary: "#FF7900"
}, {
  primary: "Montserrat",
  secondary: "Helvetica"
});

const sourceCodeWhoAmI = [
  "/home/rydgel $ whoami\n\n",
  "Jérôme Mahuet\n",
  "Developer\n",
  "Limoges\n\n",
  "/home/rydgel $ _\n"
].join("");

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["zoom", "slide"]} transitionDuration={300} theme={theme} progress="bar">
        <Slide transition={["zoom"]} bgColor="primary">
          <Image src={images.logo.replace("/", "")} margin="0px auto 40px" height="293px" />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            <span style={{ opacity: .5 }}>{"{"}</span>Deep/Dark<span style={{ opacity: .5 }}>{"}"}</span>web &amp; le réseau TOR
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3} bold>
            Le Darkweb, ami ou ennemi ?
          </Text>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="secondary" textColor="primary">
          <Heading textAlign="left" margin="0 0 100px 0" textColor="primary" size={3}>
            whoami(1)
          </Heading>
          <CodePane lang="bash" source={sourceCodeWhoAmI} textSize="33px" bgColor="primary"/>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="secondary">
          <Image src={images.torLogo.replace("/", "")} height="500px" />
        </Slide>

        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>Standard List</Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>

        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite>Author</Cite>
          </BlockQuote>
        </Slide>

      </Deck>
    );
  }
}
