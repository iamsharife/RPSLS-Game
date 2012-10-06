package sharif.elborgi;

import junit.framework.Assert;
import junit.framework.TestSuite;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class SpockGestureSettingTest extends TestSuite {

    Gesture rock = new Gesture("Rock");
    Gesture paper = new Gesture("Paper");
    Gesture scissor = new Gesture("Scissor");
    Gesture lizard = new Gesture("Lizard");
    Gesture spock = new Gesture("Spock");

    GestureSetting setting;

    @Before
    public void setup() {
        List<Gesture> spockBeats = new ArrayList<Gesture>();
        spockBeats.add(rock);
        spockBeats.add(scissor);
        setting = new GestureSetting(spock, spockBeats);
    }

    @Test
    public void testSpockBeatsRock() {
        Assert.assertEquals("spock should beat rock", setting.getOutcome(rock), GestureSetting.WINNER);
    }

    @Test
    public void testSpockBeatsScissor() {
        Assert.assertEquals("spock should beat scissor", setting.getOutcome(scissor), GestureSetting.WINNER);
    }

    @Test
    public void testSpockLosesToLizard() {
        Assert.assertEquals("spock should lose to lizard", setting.getOutcome(lizard), GestureSetting.LOSER);
    }

    @Test
    public void testSpockLosesToPaper() {
        Assert.assertEquals("spock should lose to paper", setting.getOutcome(paper), GestureSetting.LOSER);
    }

    @Test
    public void testSpockDrawsWithSpock() {
        Assert.assertEquals("spock should draw with spock", setting.getOutcome(spock), GestureSetting.DRAWN);
    }
}