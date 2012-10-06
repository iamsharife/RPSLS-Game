package sharif.elborgi;

import junit.framework.Assert;
import junit.framework.TestSuite;
import org.junit.Before;
import org.junit.Test;

import java.util.ArrayList;
import java.util.List;

public class PaperGestureSettingTest extends TestSuite {

    Gesture rock = new Gesture("Rock");
    Gesture paper = new Gesture("Paper");
    Gesture scissor = new Gesture("Scissor");
    Gesture lizard = new Gesture("Lizard");
    Gesture spock = new Gesture("Spock");

    GestureSetting setting;

    @Before
    public void setup() {
        List<Gesture> paperBeats = new ArrayList<Gesture>();
        paperBeats.add(rock);
        paperBeats.add(spock);
        setting = new GestureSetting(paper, paperBeats);
    }

    @Test
    public void testPaperBeatsRock() {
        Assert.assertEquals("paper should beat rock", setting.getOutcome(rock), GestureSetting.WINNER);
    }

    @Test
    public void testPaperBeatsSpock() {
        Assert.assertEquals("paper should beat spock", setting.getOutcome(spock), GestureSetting.WINNER);
    }

    @Test
    public void testPaperLosesToScissor() {
        Assert.assertEquals("paper should lose to scissor", setting.getOutcome(scissor), GestureSetting.LOSER);
    }

    @Test
    public void testPaperLosesToLizard() {
        Assert.assertEquals("paper should lose to lizard", setting.getOutcome(lizard), GestureSetting.LOSER);
    }

    @Test
    public void testPaperDrawsWithPaper() {
        Assert.assertEquals("paper should draw with Paper", setting.getOutcome(paper), GestureSetting.DRAWN);
    }
}