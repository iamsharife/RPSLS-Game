package sharif.elborgi;

import java.util.List;

/**
 * Creates an object that maps a given Gesture with the Gestures it can beat.
 */
public class GestureSetting {

    public static int DRAWN = 0;
    public static int WINNER = 1;
    public static int LOSER = 2;

    private Gesture gesture;
    private List<Gesture> gestureListCanBeat;

    /**
     * Creates an object that maps a given Gesture with the Gestures it can beat.
     *
     * @param gesture            the main gesture
     * @param gestureListCanBeat a list of gestures that the main gesture can beat
     */
    public GestureSetting(Gesture gesture, List<Gesture> gestureListCanBeat) {
        this.gesture = gesture;
        this.gestureListCanBeat = gestureListCanBeat;
    }

    /**
     * Retrieves the main gesture
     *
     * @return the image at the specified URL
     */
    public Gesture getGesture() {
        return this.gesture;
    }

    /**
     * Checks to see if the gesture provided can be be beaten by the main gesture in this setting.
     *
     * @param gesture the gesture that is to be compared
     * @return an static int that represt DRAWN, WINNER or LOSER
     */
    public int getOutcome(Gesture gesture) {
        if (this.gesture.equals(gesture)) {
            return DRAWN;
        }

        if (gestureListCanBeat.contains(gesture)) {
            return WINNER;
        }

        return LOSER;
    }

}
