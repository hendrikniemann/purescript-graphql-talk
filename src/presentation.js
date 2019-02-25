/* eslint-disable jsx-a11y/accessible-emoji */
import React from "react";
import {
  CodePane,
  Image,
  Deck,
  Heading,
  Slide,
  Text,
  List,
  ListItem,
  S,
  Appear,
  Anim
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import styled from "react-emotion";
import profilePic from "./profile.jpg";
import twitterLogo from "./twitter.svg";

require("normalize.css");

const theme = createTheme(
  {
    primary: "#a63a50",
    secondary: "#f0e7d8",
    tertiary: "#f7f5fb",
    quaternary: "#343434",
    highlight: "#5c164e"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const HL = props => <S type="italic" color="highlight" {...props} />;

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
            Typed Resolvers
          </Heading>
          <Text margin="50px 0 0" textColor="tertiary" size={1} fit bold>
            and an introduction to PureScript GraphQL
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Image
            style={{ borderRadius: 75 }}
            width={150}
            height={150}
            src={profilePic}
          />
          <Heading textColor="quaternary" margin="40px 0" size={4}>
            Hendrik Niemann
          </Heading>
          <Text textColor="quaternary">
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
            What is a resolver?
          </Heading>
          <Text margin="50px 0 0" size={6} textColor="quaternary">
            A (pure) function that computes the value of a field given certain
            parameters.
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={2} textColor="quaternary" caps>
            I ❤️ resolvers
          </Heading>
          <Appear order={1}>
            <Text textColor="primary">
              Because resolvers let me compose my API of functions.
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="quaternary" caps>
            FP = 😍
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="quaternary" caps>
            JS + FP = 😑
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={3} textColor="quaternary" caps>
            But resolvers are not perfect:
          </Heading>
          <List textColor="quaternary">
            <ListItem>Resolvers are missing types</ListItem>
            <ListItem>Sharing logic between resolvers is hard</ListItem>
            <ListItem>Resolvers are missing types</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="secondary">
          <Heading size={4} textColor="primary">
            Example
          </Heading>
          <CodePane
            lang="js"
            textSize={28}
            source={`function resolve(parent, arguments, context) {
  return context.db.LoadUserById.load(arguments.id);
}`}
          />
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Problems with GraphQL.js
          </Heading>
          <List>
            <ListItem>Verbose declaration</ListItem>
            <ListItem>Missing type safety</ListItem>
            <ListItem>Difficult to share logic between resolvers</ListItem>
          </List>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} lineHeight={1} textColor="secondary">
            What is PureScript?
          </Heading>
          <Text margin="40px 0 0">
            PureScript is a <HL>statically typed</HL>, <HL>pure</HL>,{" "}
            <HL>functional</HL> programming language that compiles to
            JavaScript.
          </Text>
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
          <Heading size={1}>❤️</Heading>
          <Heading size={2}>Row Types and RowToList</Heading>
        </Slide>
        <Slide>
          <Heading>So whats next?</Heading>
        </Slide>
      </Deck>
    );
  }
}
