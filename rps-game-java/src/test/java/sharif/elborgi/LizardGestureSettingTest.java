package sharif.elborgi;

import junit.framework.Assert;
import junit.framework.TestSuite;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class LizardGestureSettingTest extends TestSuite {

    Gesture rock = new Gesture("Rock");
    Gesture paper = new Gesture("Paper");
    Gesture scissor = new Gesture("Scissor");
    Gesture lizard = new Gesture("Lizard");
    Gesture spock = new Gesture("Spock");

    GestureSetting setting;

    @Before
    public void setup() {
        List<Gesture> lizardBeats = new ArrayList<Gesture>();
        lizardBeats.add(spock);
        lizardBeats.add(paper);
        setting = new GestureSetting(lizard, lizardBeats);
    }

    @Test
    public void testLizardBeatsPaper() {
        Assert.assertEquals("lizard should beat paper", setting.getOutcome(paper), GestureSetting.WINNER);
    }

    @Test
    public void testLizardBeatsSpock() {
        Assert.assertEquals("lizard should beat spock", setting.getOutcome(spock), GestureSetting.WINNER);
    }

    @Test
    public void testLizardLosesToRock() {
        Assert.assertEquals("lizard should lose to rock", setting.getOutcome(rock), GestureSetting.LOSER);
    }

    @Test
    public void testLizardLosesToScissor() {
        Assert.assertEquals("lizard should lose to scissor", setting.getOutcome(scissor), GestureSetting.LOSER);
    }

    @Test
    public void testLizardDrawsWithLizard() {
        Assert.assertEquals("lizard should draw with lizard", setting.getOutcome(lizard), GestureSetting.DRAWN);
    }
}