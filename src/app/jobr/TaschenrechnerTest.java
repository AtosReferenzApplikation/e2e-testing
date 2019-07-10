package app.jobr;

import org.junit.jupiter.api.Test;

import java.math.BigDecimal;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TaschenrechnerTest
{
	@Test
	public void additionTest()
	{
		Taschenrechner testTr = new Taschenrechner();
		testTr.setZahl1(new BigDecimal(10.25673));
		testTr.setZahl2(new BigDecimal(24));
		testTr.setOperation("+");
		testTr.doCalculation();
		assertEquals(34.25673, testTr.getResult().doubleValue());
	}
}
