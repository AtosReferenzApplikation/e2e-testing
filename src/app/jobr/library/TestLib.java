package app.jobr.library;

import com.sun.istack.internal.Nullable;

public class TestLib
{
	IProgramType target;

	public static final String FIELD_NOT_FOUND_MESSAGE = "Kein passendes Feld gefunden!";
	public static final String PROGRAM_NOT_FOUND_MESSAGE = "Das angegebene Programm ist nicht bekannt!";

	public void starteAnwendung(String anwendung)
	{
		switch (anwendung)
		{
			case "Taschenrechner":
				target = new TaschenrechnerType();
				break;

			case "StringConcatenator":
				target = new StringConcatenatorType();
				break;

			case "Web-Taschenrechner":
				target = new WebTaschenrechnerType();
				break;

			default:
				throw new AssertionError(PROGRAM_NOT_FOUND_MESSAGE);
		}
		target.start();
	}

	public void gibEin(String locator, String setzWert)
	{
		if (target != null)
		{
			target.insert(locator, setzWert);
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
			target.select(locator, setzWert);
		}
	}

	public void pruefeWert(String locator, String zielWert)
	{
		if (target != null)
		{
			target.check(locator, zielWert);
		}
	}
}
