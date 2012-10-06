package sharif.elborgi;

import junit.framework.Assert;
import junit.framework.TestSuite;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class ScissorGestureSettingTest extends TestSuite {

    Gesture rock = new Gesture("Rock");
    Gesture paper = new Gesture("Paper");
    Gesture scissor = new Gesture("Scissor");
    Gesture lizard = new Gesture("Lizard");
    Gesture spock = new Gesture("Spock");

    GestureSetting setting;

    @Before
    public void setup() {
        List<Gesture> scissorBeats = new ArrayList<Gesture>();
        scissorBeats.add(paper);
        scissorBeats.add(lizard);
        setting = new GestureSetting(scissor, scissorBeats);
    }

    @Test
    public void testScissorBeatsPaper() {
        Assert.assertEquals("scissor should beat paper", setting.getOutcome(paper), GestureSetting.WINNER);
    }

    @Test
    public void testScissorBeatsLizard() {
        Assert.assertEquals("scissor should beat lizard", setting.getOutcome(lizard), GestureSetting.WINNER);
    }

    @Test
    public void testScissorLosesToRock() {
        Assert.assertEquals("scissor should lose to rock", setting.getOutcome(rock), GestureSetting.LOSER);
    }

    @Test
    public void testScissorLosesToSpock() {
        Assert.assertEquals("scissor should lose to spock", setting.getOutcome(spock), GestureSetting.LOSER);
    }

    @Test
    public void testScissorDrawsWithScissor() {
        Assert.assertEquals("scissor should draw with scissor", setting.getOutcome(scissor), GestureSetting.DRAWN);
    }
}