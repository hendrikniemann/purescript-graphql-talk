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
  Appear
} from "spectacle";
import createTheme from "spectacle/lib/themes/default";
import profilePic from "./profile.jpg";
import twitterLogo from "./twitter.svg";
import "prismjs/components/prism-graphql";
import "prismjs/components/prism-haskell";

require("normalize.css");
require("./theme.css");

const examples = {
  "User.js": require("./examples/User.js.example"),
  "User.purs": require("./examples/User.purs.example"),
  "TypedUser.js": require("./examples/TypedUser.js.example"),
  "resolver.js": require("./examples/resolver.js.example")
};

const theme = createTheme(
  {
    primary: "#f7f5fb",
    secondary: "#343434",
    tertiary: "#a63a50",
    quaternary: "#5c164e",
    highlight: "#f0e7d8"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const HL = props => <S type="italic" color="highlight" {...props} />;

const SolutionSlide = ({ children, desc = "" }) => (
  <Slide>
    <Heading size={2} textColor="tertiary">
      {children}
    </Heading>
    {desc !== "" && <Text margin="15px auto">{desc}</Text>}
  </Slide>
);

const CodeSlide = ({ example }) => (
  <Slide transition={["zoom"]} bgColor="primary">
    <CodePane
      textFont='"Dank Mono"'
      theme="external"
      lang="js"
      textSize={22}
      source={examples[example]}
    />
  </Slide>
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
          <Image
            style={{ borderRadius: 75 }}
            width={150}
            height={150}
            src={profilePic}
          />
          <Heading textColor="secondary" margin="40px 0" size={4}>
            Hendrik Niemann
          </Heading>
          <Text textColor="secondary">
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
        <Slide transition={["zoom"]} bgColor="tertiary">
          <Heading size={1} fit caps lineHeight={1} textColor="primary">
            Typed Resolvers
          </Heading>
          <Text margin="50px 0 0" textColor="highlight" size={1} fit bold>
            and an introduction to PureScript GraphQL
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={3} textColor="tertiary" caps>
            What is a resolver?
          </Heading>
          <Text margin="50px 0 0" size={6} textColor="secondary">
            A (pure) function that computes the value of a field given certain
            parameters.
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <CodePane
            theme="external"
            lang="graphql"
            textSize={48}
            source={`query loadUser {
  user(id: 1337) {
    id
  }
}`}
          />
        </Slide>
        <CodeSlide example="resolver.js" />
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={2} textColor="secondary" caps>
            I ❤️ resolvers
          </Heading>
          <Appear>
            <Text textColor="tertiary" margin="30px auto">
              Because resolvers let me compose my API of functions.
            </Text>
          </Appear>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={1} textColor="secondary" caps>
            FP = 😍
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>
            So what is all the fuss around resolvers about?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="secondary">
            Pain points of resolvers in GraphQL.js:
          </Heading>
          <List textColor="secondary">
            <ListItem>Resolvers are missing types</ListItem>
            <ListItem>Sharing logic between resolvers is hard</ListItem>
            <ListItem>
              Resolvers are colocated with the API definition configuration
            </ListItem>
          </List>
        </Slide>
        <CodeSlide example="User.js" />
        <CodeSlide example="TypedUser.js" />
        <SolutionSlide desc="Generate types from SDL">
          GraphQL Gen
        </SolutionSlide>
        <SolutionSlide desc="Typesafe resolvers">GraphQL Nexus</SolutionSlide>
        <SolutionSlide desc="Middleware for resolvers">
          GraphQL Middleware
        </SolutionSlide>
        <SolutionSlide desc="Compose GraphQL schemas through mutation">
          GraphQL Compose
        </SolutionSlide>
        <Slide bgColor="tertiary">
          <Heading size={1} textColor="primary" caps>
            Introducing PureScript GraphQL
          </Heading>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={3} lineHeight={1} textColor="secondary">
            What is PureScript?
          </Heading>
          <Text margin="40px 0 0">
            PureScript is a <HL>statically typed</HL>, <HL>pure</HL>,{" "}
            <HL>functional</HL> programming language that compiles to
            JavaScript.
          </Text>
        </Slide>
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={3} lineHeight={1} textColor="secondary">
            What is PureScript GraphQL?
          </Heading>
          <Text margin="40px 0 0">
            PureScript GraphQL is a typesafe wrapper around GraphQL.js.
          </Text>
        </Slide>
        <CodeSlide example="User.purs" />
        <Slide transition={["fade"]} textColor="primary">
          <Heading size={3} textColor="tertiary">
            So what can we do with it?
          </Heading>
        </Slide>
        <Slide transition={["fade"]} textColor="primary">
          <Heading size={3} textColor="tertiary">
            Get resolvers fully type inferred!
          </Heading>
        </Slide>
        <Slide transition={["fade"]} textColor="primary">
          <Heading size={3} textColor="tertiary">
            Get resolvers fully type inferred!
          </Heading>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary">
          <Heading size={4} textColor="secondary">
            What about the pain points?
          </Heading>
          <List textColor="secondary">
            <ListItem>Resolvers are missing types</ListItem>
            <ListItem>Sharing logic between resolvers is hard</ListItem>
            <ListItem>
              Resolvers are colocated with the API definition configuration
            </ListItem>
          </List>
        </Slide>
        <Slide>
          <Heading textColor="secondary">What's next?</Heading>
        </Slide>
      </Deck>
    );
  }
}
