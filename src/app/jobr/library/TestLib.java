package app.jobr.library;

import app.jobr.Taschenrechner;
import org.junit.jupiter.api.Assertions;

import java.math.BigDecimal;

public class TestLib
{
	Object target;

	public void waehle_aus(Object target)
	{
		this.target = target;
	}

	public void gibEin(String locator, String setzWert)
	{
		if (target != null)
		{
			if (target instanceof Taschenrechner)
			{
				switch (locator)
				{
					case "zahl1":
						((Taschenrechner) target).setZahl1(new BigDecimal(setzWert));
						break;

					case "zahl2":
						((Taschenrechner) target).setZahl2(new BigDecimal(setzWert));
						break;

					case "operation":
						((Taschenrechner) target).setOperation(setzWert);
						break;
				}
			}
		}
	}

	public void pruefeWert(String locator, String zielWert)
	{
		if (target != null)
		{
			if (target instanceof Taschenrechner)
			{
				if (locator.equals("result"))
				{
					((Taschenrechner) target).doCalculation();
					Assertions.assertEquals(zielWert, ((Taschenrechner) target).getResult().toString());
				}
			}
		}
	}
}
