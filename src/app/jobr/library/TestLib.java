package app.jobr.library;

import app.jobr.Taschenrechner;

import java.math.BigDecimal;

public class TestLib
{
	Object target;

	public void starteAnwendung(Object target)
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
				}
			}
		}
	}

	public void waehleAus(String locator, String setzWert)
	{
		if (target != null)
		{
			if (target instanceof Taschenrechner)
			{
				switch (locator)
				{
					case "operation":
						((Taschenrechner) target).setOperation(setzWert);
						break;

					// Switch-case für spätere Werte
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
					assert (zielWert.equals(((Taschenrechner) target).getResult().toString()));
				}
			}
		}
	}
}
