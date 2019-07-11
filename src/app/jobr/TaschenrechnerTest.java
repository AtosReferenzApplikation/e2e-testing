package app.jobr;

import app.jobr.library.TestLib;
import org.junit.Test;

import java.math.BigDecimal;

public class TaschenrechnerTest
{
	@Test
	public void additionTest()
	{
		Taschenrechner testTr = new Taschenrechner();
		testTr.setZahl1(new BigDecimal(10));
		testTr.setZahl2(new BigDecimal(24.537));
		testTr.setOperation("+");
		testTr.doCalculation();
		assert (34.537 == testTr.getResult().doubleValue());
	}

	@Test
	public void libAdditionTest()
	{
		TestLib tl = new TestLib();
		tl.starteAnwendung(new Taschenrechner());
		tl.gibEin("zahl1", "29.3");
		tl.gibEin("zahl2", "12.44");
		tl.waehleAus("operation", "+");
		tl.pruefeWert("result", "41.74");
	}
}
