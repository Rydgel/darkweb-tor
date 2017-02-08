// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Deck,
  Heading,
  ListItem,
  List,
  Slide,
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
  darkWebRatio: require("../assets/darkWebRatio.png"),
  torLogo: require("../assets/tor.svg"),
  reseauTor: require("../assets/ReseauTOR2.svg"),
  routageOignon: require("../assets/routage.png"),
  torBrowser: require("../assets/torBrowser.svg"),
  torBrowserHome: require("../assets/tor_browser_home.png"),
  torBrowser2: require("../assets/torBrowser2.png"),
  torCircuit: require("../assets/circuit.png"),
  wikileaks1: require("../assets/wikileaks1.png"),
  wikileaks2: require("../assets/wikileaks2.png"),
  doll: require("../assets/doll.jpg"),
  tails: require("../assets/tails-sticker.svg")
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
            <span style={{ opacity: .5 }}>{"{"}</span>Deep/Dark<span style={{ opacity: .5 }}>{"}"}</span> Web &amp; le réseau TOR
          </Heading>
          <Text margin="10px 0 0" textColor="tertiary" size={3} bold>
            Le Dark Web, ami ou ennemi ?
          </Text>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="secondary" textColor="primary">
          <Heading textAlign="left" margin="0 0 80px 0" textColor="primary" size={3}>
            whoami(1)
          </Heading>
          <CodePane lang="bash" source={sourceCodeWhoAmI} textSize="33px" bgColor="primary"/>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="primary" textColor="secondary">
          <Heading margin="0 0 80px 0" textColor="secondary" size={3}>
            Deepweb ?
          </Heading>
          <Text textColor="secondary" lineHeight="1.8">
            Tout ce qui n'est pas visible par les moteurs de recherches
          </Text>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="primary" textColor="secondary">
          <Image src={images.darkWebRatio.replace("/", "")} height="650px" />
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="primary" textColor="secondary">
          <Heading margin="0 0 80px 0" textColor="secondary" size={3}>
            Dark Web
          </Heading>
          <List margin="100px 0">
            <ListItem>Petite partie du Deep Web</ListItem>
            <ListItem>Nécessite logiciels pour y accéder</ListItem>
            <ListItem>Ex: TOR, Freenet, I2P</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="secondary">
          <Image src={images.torLogo.replace("/", "")} height="500px" />
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="purple">
          <Heading textColor="secondary" size={3}>TOR</Heading>
          <List margin="100px 0">
            <ListItem><u>T</u>he <u>O</u>nion <u>R</u>outer</ListItem>
            <ListItem>Anonymat de la source</ListItem>
            <ListItem>Contourne la cyber-censure</ListItem>
            <ListItem>Logiciel open-source</ListItem>
          </List>
          <Heading textColor="secondary" size={6}>
            <Link href="http://TorProject.org" textColor="secondary">TorProject.org</Link>
          </Heading>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="purple">
          <Heading textColor="secondary" size={3}>Qui utilise TOR ?</Heading>
          <List margin="100px 0" textColor="secondary">
            <ListItem textSize="2rem">Les gens voulant protéger leur vie privée</ListItem>
            <ListItem textSize="2rem">Journalistes</ListItem>
            <ListItem textSize="2rem">Activistes</ListItem>
            <ListItem textSize="2rem">Armées / Polices</ListItem>
            <ListItem textSize="2rem">…</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="purple">
          <Heading textColor="secondary" size={3}>TOR</Heading>
          <List margin="100px 0" textColor="secondary">
            <ListItem>Wikileaks</ListItem>
            <ListItem>Outre-passer le pare-feu chinois</ListItem>
            <ListItem>Soutien au Printemps arabe de 2011</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="secondary">
          <Heading textColor="purple" size={3}>Principe de fonctionnement</Heading>
          <Image bgColor="secondary" src={images.reseauTor.replace("/", "")} height="500px" />
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="secondary">
          <Heading textColor="purple" size={3}>Routage oignon</Heading>
          <Image margin="100px 0" bgColor="secondary" src={images.routageOignon.replace("/", "")} height="250px" />
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="secondary">
          <Heading textColor="purple" size={3}>Routage oignon</Heading>
          <Image margin="100px 0" bgColor="secondary" src={images.doll.replace("/", "")} height="350px" />
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
          <Heading margin="0 0 50px 0" textColor="secondary" size={3}>Navigateur TOR</Heading>
          <Image bgColor="purple" src={images.torBrowserHome.replace("/", "")} height="700px" />
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="purple">
          <Heading margin="0 0 50px 0" textColor="secondary" size={3}>Navigateur TOR</Heading>
          <Image bgColor="purple" src={images.torBrowser2.replace("/", "")} height="600px" />
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="purple">
          <Heading margin="0 0 50px 0" textColor="secondary" size={3}>Navigateur TOR</Heading>
          <Image bgColor="purple" src={images.torCircuit.replace("/", "")} height="500px" />
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="purple">
          <Heading margin="0 0 50px 0" textColor="secondary" size={3}>.onions urls</Heading>
          <List>
            <ListItem>Code de 16 caractères</ListItem>
            <ListItem>Remplace URLs traditionnelles</ListItem>
            <ListItem>Sécurité ++ : on reste dans le TOR</ListItem>
            <ListItem>C'est un Service caché</ListItem>
            <ListItem>Ex: wlupld3ptjvsgwqw.onion</ListItem>
          </List>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="purple">
          <Heading margin="0 0 100px 0" textColor="secondary" size={3}>Wikileaks</Heading>
          <Text margin="0 0 50px 0" textColor="secondary" size={3}>wlupld3ptjvsgwqw.onion</Text>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="purple">
          <Heading margin="0 0 50px 0" textColor="secondary" size={3}>Wikileaks</Heading>
          <Image bgColor="purple" src={images.wikileaks1.replace("/", "")} height="420px" />
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="purple">
          <Heading margin="0 0 50px 0" textColor="secondary" size={3}>Wikileaks</Heading>
          <Image bgColor="purple" src={images.wikileaks2.replace("/", "")} height="550px" />
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="purple">
          <Heading margin="0 0 0 0" textColor="secondary" size={3}>Tails</Heading>
          <Image bgColor="purple" src={images.tails.replace("/", "")} height="550px" />
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="purple">
          <Heading margin="0 0 50px 0" textColor="secondary" size={3}>Tails</Heading>
            <List>
              <ListItem textSize="36px">Système d'exploitation basé sur GNU/Linux</ListItem>
              <ListItem textSize="36px">Utilisé en live-system</ListItem>
              <ListItem textSize="36px">Outils d'anonymisation</ListItem>
              <ListItem textSize="36px">TOR, emails, clef usb cryptés…</ListItem>
              <ListItem textSize="36px">Ex: utilisation dans un cyber-café</ListItem>
            </List>
        </Slide>

        <Slide transition={["zoom", "slide"]} bgColor="purple">
          <Heading margin="0 0 30px 0" textColor="secondary" size={3}>Conclusion</Heading>
          <Heading margin="0 0 50px 0" textColor="secondary" size={4}>Darkweb, ami ou ennemi ?</Heading>
          <Text textColor="secondary" lineHeight="1.5">
            Nous pouvons nous approprier les outils qui propulsent le Darkweb à des fins de contrôle de notre vie
            privée et de sécurité.
          </Text>
        </Slide>

      </Deck>
    );
  }
}
