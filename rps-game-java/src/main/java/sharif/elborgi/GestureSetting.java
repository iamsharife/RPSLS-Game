package sharif.elborgi;

import java.util.List;

public class GestureSetting {

    public static int DRAWN = 0;
    public static int WINNER = 1;
    public static int LOSER = 2;

    private Gesture gesture;
    private List<Gesture> gestureListCanBeat;

    public GestureSetting(Gesture gesture, List<Gesture> gestureListCanBeat) {
        this.gesture = gesture;
        this.gestureListCanBeat = gestureListCanBeat;
    }

    public Gesture getGesture() {
        return this.gesture;
    }

    public int getOutcome(Gesture gesture) {
        if (this.gesture.equals(gesture)){
            return DRAWN;
        }

        if (gestureListCanBeat.contains(gesture)) {
            return WINNER;
        }

        return LOSER;
    }

}
