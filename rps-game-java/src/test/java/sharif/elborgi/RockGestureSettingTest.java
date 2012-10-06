package sharif.elborgi;

import junit.framework.Assert;
import junit.framework.TestSuite;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class RockGestureSettingTest extends TestSuite {

    Gesture rock = new Gesture("Rock");
    Gesture paper = new Gesture("Paper");
    Gesture scissor = new Gesture("Scissor");
    Gesture lizard = new Gesture("Lizard");
    Gesture spock = new Gesture("Spock");

    GestureSetting setting;

    @Before
    public void setup() {
        List<Gesture> rockBeats = new ArrayList<Gesture>();
        rockBeats.add(scissor);
        rockBeats.add(lizard);
        setting = new GestureSetting(rock, rockBeats);
    }

    @Test
    public void testRockBeatsScissor() {
        Assert.assertEquals("rock should beat scissor", setting.getOutcome(scissor), GestureSetting.WINNER);
    }

    @Test
    public void testRockBeatsLizard() {
        Assert.assertEquals("rock should beat lizard", setting.getOutcome(lizard), GestureSetting.WINNER);
    }

    @Test
    public void testRockLosesToPaper() {
        Assert.assertEquals("rock should lose to paper", setting.getOutcome(paper), GestureSetting.LOSER);
    }

    @Test
    public void testRockLosesToSpock() {
        Assert.assertEquals("rock should lose to spock", setting.getOutcome(spock), GestureSetting.LOSER);
    }

    @Test
    public void testRockDrawsWithRock() {
        Assert.assertEquals("rock should draw with spock", setting.getOutcome(rock), GestureSetting.DRAWN);
    }
}