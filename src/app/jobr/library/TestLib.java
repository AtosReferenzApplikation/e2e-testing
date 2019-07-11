package app.jobr.library;

import app.jobr.StringConcatenator;
import app.jobr.Taschenrechner;
import com.sun.istack.internal.Nullable;

import java.math.BigDecimal;

public class TestLib
{
	Object target;
	private static final String FIELD_NOT_FOUND_MESSAGE = "No matching field found!";

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

					default:
						throw new AssertionError(FIELD_NOT_FOUND_MESSAGE);
				}
			}
			else if (target instanceof StringConcatenator)
			{
				switch (locator)
				{
					case "input":
						((StringConcatenator) target).enterText(setzWert);
						break;

					// Switch-case für spätere andere Optionen

					default:
						throw new AssertionError(FIELD_NOT_FOUND_MESSAGE);
				}
			}
		}
	}

	public void waehleAus(String locator)
	{
		waehleAus(locator, null);
	}

	public void waehleAus(String locator, @Nullable String setzWert)
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

					// Switch-case für spätere andere Optionen

					default:
						throw new AssertionError(FIELD_NOT_FOUND_MESSAGE);
				}
			}
			else if (target instanceof StringConcatenator)
			{
				switch (locator)
				{
					case "hinzufuegen":
						((StringConcatenator) target).appendText();
						break;

					// Switch-case für spätere andere Optionen

					default:
						throw new AssertionError(FIELD_NOT_FOUND_MESSAGE);
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
				switch (locator)
				{
					case "result":
						((Taschenrechner) target).doCalculation();
						assert (zielWert.equals(((Taschenrechner) target).getResult().toString()));
						break;

					default:
						throw new AssertionError(FIELD_NOT_FOUND_MESSAGE);
				}
			}
			else if (target instanceof StringConcatenator)
			{
				switch (locator)
				{
					case "text":
						assert (zielWert.equals(((StringConcatenator) target).getText()));
						break;

					default:
						throw new AssertionError(FIELD_NOT_FOUND_MESSAGE);
				}
			}
		}
	}
}
