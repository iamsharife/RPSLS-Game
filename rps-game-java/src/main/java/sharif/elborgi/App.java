package sharif.elborgi;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;
import java.util.Scanner;

public class App {

    Gesture rock = new Gesture("Rock");
    Gesture paper = new Gesture("Paper");
    Gesture scissor = new Gesture("Scissor");
    Gesture lizard = new Gesture("Lizard");
    Gesture spock = new Gesture("Spock");

    public static void main(String[] args) {
        System.out.println("======= Welcome to the #1 Game - Waste an Hour Having Fun =======");
        App app = new App();
        app.execute();
    }

    /**
     * This runs the game
     */
    public void execute() {
        Game game = createGame();

        Scanner inputScanner = new Scanner(System.in);
        System.out.print("Make your choice (R)ock, (P)aper, (S)cissor, (L)izard, (SP)ock, or type Exit to quit: ");
        while (inputScanner.hasNextLine()) {
            Gesture computerGesture = game.getComputerGesture();
            String input = inputScanner.nextLine();
            if (input.toUpperCase().equals("EXIT")) {
                System.exit(0);
            }
            Gesture choice;
            try {
                choice = getGesture(input.toUpperCase());
            } catch (IllegalArgumentException ex) {
                System.out.print("Invalid choice, Make another choice: ");
                continue;
            }

            System.out.println("Your chose: " + choice.name);
            System.out.println("Computer chose: " + computerGesture.name);

            int outcome = game.getWinner(choice, computerGesture);

            if (outcome == GestureSetting.DRAWN) {
                System.out.println("Draw! " + game.getScore());
            } else if (outcome == GestureSetting.WINNER) {
                game.updatePlayerScore();
                System.out.println("Your a WINNER! " + game.getScore());
            } else if (outcome == GestureSetting.LOSER) {
                game.updateComputerScore();
                System.out.println("Unlucky! Maybe next time! " + game.getScore());

            }

            System.out.println("");
            System.out.print("Make your choice: ");
        }
    }

    /**
     * Based on the input, will return the gesture mapped to it.
     *
     * @param input a string value representing a given gesture
     * @return the gesture chosen
     * @throws IllegalArgumentException if the input doesnt match anything
     */
    public Gesture getGesture(String input) {
        if (input.equals("R")) {
            return rock;
        } else if (input.equals("P")) {
            return paper;
        } else if (input.equals("S")) {
            return scissor;
        } else if (input.equals("L")) {
            return lizard;
        } else if (input.equals("SP")) {
            return spock;
        }

        throw new IllegalArgumentException();
    }

    /**
     * Creates a game, applies the settings and returns the game object
     *
     * @return a game object with the settings applied
     */
    public Game createGame() {

        Game game = new Game();

        List<Gesture> rockBeats = new ArrayList<Gesture>();
        rockBeats.add(scissor);
        rockBeats.add(lizard);
        game.addSetting(new GestureSetting(rock, rockBeats));

        List<Gesture> paperBeats = new ArrayList<Gesture>();
        paperBeats.add(rock);
        paperBeats.add(spock);
        game.addSetting(new GestureSetting(paper, paperBeats));

        List<Gesture> scissorBeats = new ArrayList<Gesture>();
        scissorBeats.add(paper);
        scissorBeats.add(lizard);
        game.addSetting(new GestureSetting(scissor, scissorBeats));

        List<Gesture> lizardBeats = new ArrayList<Gesture>();
        lizardBeats.add(spock);
        lizardBeats.add(paper);
        game.addSetting(new GestureSetting(lizard, lizardBeats));

        List<Gesture> spockBeats = new ArrayList<Gesture>();
        lizardBeats.add(rock);
        lizardBeats.add(scissor);
        game.addSetting(new GestureSetting(spock, spockBeats));

        return game;
    }

}
