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
  Text,
  Link
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
  torLogo: require("../assets/tor.svg"),
  reseauTor: require("../assets/ReseauTOR2.svg"),
  routageOignon: require("../assets/routage.png"),
  torBrowser: require("../assets/torBrowser.svg"),
  torBrowserHome: require("../assets/tor_browser_home.png")
};

preloader(images);

const theme = createTheme({
  primary: "#454C72",   // blueshi
  secondary: "#FEF6E2", // yellowish
  tertiary: "#28B58F",  // green
  purple: "#7D4299",
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
          <Heading textAlign="left" margin="0 0 80px 0" textColor="primary" size={3}>
            whoami(1)
          </Heading>
          <CodePane lang="bash" source={sourceCodeWhoAmI} textSize="33px" bgColor="primary"/>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="secondary">
          <Image src={images.torLogo.replace("/", "")} height="500px" />
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="purple">
          <Heading textColor="secondary" size={3}>TOR</Heading>
          <List margin="100px 0">
            <ListItem><u>T</u>he <u>O</u>nion <u>R</u>outer</ListItem>
            <ListItem>Anonymat de la source</ListItem>
            <ListItem>Contourne la censure</ListItem>
            <ListItem>Logiciel open-source</ListItem>
          </List>
          <Heading textColor="secondary" size={6}>
            <Link href="http://TorProject.org" textColor="secondary">TorProject.org</Link>
          </Heading>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="secondary">
          <Heading textColor="purple" size={3}>Principe de fonctionnement</Heading>
          <Image bgColor="secondary" src={images.reseauTor.replace("/", "")} height="500px" />
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="secondary">
          <Heading textColor="purple" size={3}>Routage oignon</Heading>
          <Image margin="100px 0" bgColor="secondary" src={images.routageOignon.replace("/", "")} height="250px" />
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="purple">
          <Heading textColor="secondary" size={3}>Navigateur TOR</Heading>
          <Image margin="100px 0 100px 100px" bgColor="purple" src={images.torBrowser.replace("/", "")} height="400px" />
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="purple">
          <Heading textColor="secondary" size={3}>Navigateur TOR</Heading>
          <List margin="100px 0">
            <ListItem>Accessibilité</ListItem>
            <ListItem>Accès au réseau TOR facile</ListItem>
            <ListItem>Basé sur Mozilla Firefox</ListItem>
            <ListItem>Privilégie les connexions sécurisées</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="purple">
          <Heading textColor="secondary" size={3}>Navigateur TOR</Heading>
          <Image bgColor="purple" src={images.torBrowserHome.replace("/", "")} height="700px" />
        </Slide>

      </Deck>
    );
  }
}
