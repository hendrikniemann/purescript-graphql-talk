/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import {
  CodePane,
  Table,
  Image,
  Deck,
  Heading,
  ListItem,
  List,
  TableRow,
  Slide,
  Text,
  TableItem
} from "spectacle";
import styled from "react-emotion";
import profilePic from "./profile.jpg";
import twitterLogo from "./twitter.svg";
import meme from "./meme.jpg";
import createTheme from "spectacle/lib/themes/default";
require("normalize.css");

const theme = createTheme(
  {
    primary: "white",
    secondary: "#1F2022",
    tertiary: "#03A9FC",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const MemeFrame = styled(Table)`
  width: 717px;
  height: 717px;
`;

const Meme = ({ good, bad }) => (
  <MemeFrame bgImage={meme}>
    <TableRow>
      <TableItem style={{ width: "50%" }} />
      <TableItem style={{ width: "50%" }}>{bad}</TableItem>
    </TableRow>
    <TableRow>
      <TableItem style={{ width: "50%" }} />
      <TableItem style={{ width: "50%" }}>{good}</TableItem>
    </TableRow>
  </MemeFrame>
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            PureScript GraphQL
          </Heading>
          <Text margin="50px 0 0" textColor="tertiary" size={1} fit bold>
            a PureScript wrapper around GraphQL.js
          </Text>
        </Slide>
        <Slide transition={["zoom"]}>
          <Image
            style={{ borderRadius: 75 }}
            width={150}
            height={150}
            src={profilePic}
          />
          <Heading margin="40px 0" size={5}>
            Hendrik Niemann
          </Heading>
          <Text>
            <Image
              display="inline"
              width={70}
              height={70}
              src={twitterLogo}
              margin="-20px 0"
            />
            @hendrik_niemann
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="primary" caps>
            So what is this GraphQL?
          </Heading>
          <Text margin="50px 0 0" size={6} textColor="secondary">
            A query language for APIs!
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={5} textColor="secondary" caps>
            Why GraphQL?
          </Heading>
          <List>
            <ListItem>Statically typed API 🔥</ListItem>
            <ListItem>
              Easily evolve your API without breaking clients 📱
            </ListItem>
            <ListItem>Optimised for low bandwith and high latency 📶</ListItem>
            <ListItem>Awesome Developer Experience 🤓</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Demo!
          </Heading>
        </Slide>
        <Slide transition={["fade"]} textColor="primary">
          <Heading size={3} textColor="tertiary">
            How to execute queries?
          </Heading>
          <Text margin="20px 0 0">
            Most popular aproach is to write field resolvers. A field resolver
            gets called every time the execution engine walks over a certain
            field.
          </Text>
        </Slide>
        <Slide>
          <CodePane
            lang="haskell"
            textSize={22}
            source={`resolver :: PostsParent -> PostsArgs -> Context -> Aff (Array Post)
resolver parent args ctx = readPosts ctx.store`}
          />
        </Slide>
        <Slide>
          <Meme bad="Promise" good="Aff" />
        </Slide>
        <Slide>
          <Meme bad="null" good="Maybe" />
        </Slide>
        <Slide>
          <Meme bad="Config objects" good="Functions" />
        </Slide>
        <Slide>
          <Heading size={1}>❤️</Heading>
          <Heading size={2}>Row Types and RowToList</Heading>
        </Slide>
      </Deck>
    );
  }
}
