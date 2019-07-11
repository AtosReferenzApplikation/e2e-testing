package app.jobr;

import app.jobr.library.TestLib;
import org.junit.Test;

public class StringConcatenatorTest
{
	@Test
	public void textAppendingTest()
	{
		TestLib tl = new TestLib();
		tl.starteAnwendung(new StringConcatenator());
		tl.gibEin("input", "hallo!");
		tl.waehleAus("hinzufuegen");
		tl.gibEin("input", "test?");
		tl.waehleAus("hinzufuegen");
		tl.pruefeWert("text", "hallo!test?");
	}
}
