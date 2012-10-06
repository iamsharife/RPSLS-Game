package sharif.elborgi;

import java.util.ArrayList;
import java.util.List;
import java.util.Random;

public class Game {

    private List<GestureSetting> settingList = new ArrayList<GestureSetting>();

    private Random randomGenerator = new Random();

    public void addSetting(GestureSetting setting) {
        settingList.add(setting);
    }

    public int getWinner(Gesture gestureOne, Gesture gestureTwo) {
        for (GestureSetting setting : settingList) {
            if (setting.getGesture().equals(gestureOne)) {
                return setting.getOutcome(gestureTwo);
            }
        }
        return -1;
    }

    public Gesture getComputerGesture() {
        int idx = randomGenerator.nextInt(settingList.size());
        return settingList.get(idx).getGesture();
    }
}
