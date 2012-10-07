package sharif.elborgi;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

/**
 * Creates an object that maintains the gesture settings list,
 * and the game information, as well as execute a match
 */
public class Game {

    private List<GestureSetting> settingList = new ArrayList<GestureSetting>();

    private Random randomGenerator = new Random();

    private int playerScore = 0;
    private int computerScore = 0;

    /**
     * Adds a new gesture setting
     *
     * @param setting that maps a given Gesture with the Gestures it can beat.
     */
    public void addSetting(GestureSetting setting) {
        settingList.add(setting);
    }

    /**
     * Compares two gesture objects and returns the result of the outcome
     *
     * @param gestureOne a gesture object to compare
     * @param gestureTwo a gesture object to compare
     * @return an int representing the outcome of the round
     */
    public int getWinner(Gesture gestureOne, Gesture gestureTwo) {
        for (GestureSetting setting : settingList) {
            if (setting.getGesture().equals(gestureOne)) {
                return setting.getOutcome(gestureTwo);
            }
        }
        return -1;
    }

    /**
     * Randomly chooses a gesture for the computer
     *
     * @return the gesture object chosen for the computer
     */
    public Gesture getComputerGesture() {
        int idx = randomGenerator.nextInt(settingList.size());
        return settingList.get(idx).getGesture();
    }

    /**
     * Increment player score by 1
     */
    public void updatePlayerScore() {
        playerScore++;
    }

    /**
     * Increment computer score by 1
     */
    public void updateComputerScore() {
        computerScore++;
    }

    /**
     * gets the current score
     *
     * @return return a string represent the current score
     */
    public String getScore() {
        return playerScore + " - " + computerScore;
    }
}
