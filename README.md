# Rock, Paper, Scissors, Lizard game Spock  - Java and Javascript versions #

Don't know the game? [More info...](http://en.wikipedia.org/wiki/Rock-paper-scissors)

Extended to have Spock and Lizard [More info...](http://en.wikipedia.org/wiki/Rock-paper-scissors-lizard-Spock)

## Javascript Version - rps-game-js ##

Jasmine Tests - Open SpecRunner.html in browser

Game - Open Game.html in browser

## Backbone JS Version - rps-game-js-backbone ##

Work In Progress - This isnt complete, but not far off.

## Java Version - rps-game-java ##

Configured using Maven POM, cane be found [here](http://maven.apache.org) - Download and follow instructions on the maven website.

Once Maven is install, open command prompt/terminal and do the following:

To compile/test/install pom to maven repository, run the following command in the folder root - <code>mvn clean install</code>

To run, run the following command in the folder root - <code>mvn exec:java</code>

To generate JavaDoc, run the following command in the folder root - <code>mvn javadoc:javadoc</code> - this will generate <code>/target/site/apidocs/index.html</code> and all its assets

You will also find the target folder after running <code>mvn clean install</code> or <code>mvn javadoc:javadoc</code> contains the artifcats for the application.

