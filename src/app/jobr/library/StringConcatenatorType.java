package app.jobr.library;

import app.jobr.StringConcatenator;

import static app.jobr.library.TestLib.FIELD_NOT_FOUND_MESSAGE;

public class StringConcatenatorType implements IProgramType
{
	private StringConcatenator target = new StringConcatenator();

	@Override
	public void start()	{}

	@Override
	public void insert(String locator, String value)
	{
		switch (locator)
		{
			case "input":
				target.enterText(value);
				break;

			// Switch-case für spätere andere Optionen

			default:
				throw new AssertionError(FIELD_NOT_FOUND_MESSAGE);
		}
	}

	@Override
	public void select(String locator, String value)
	{
		switch (locator)
		{
			case "hinzufuegen":
				target.appendText();
				break;

			// Switch-case für spätere andere Optionen

			default:
				throw new AssertionError(FIELD_NOT_FOUND_MESSAGE);
		}
	}

	@Override
	public void check(String locator, String value)
	{
		switch (locator)
		{
			case "text":
				assert (value.equals(target.getText()));
				break;

			default:
				throw new AssertionError(FIELD_NOT_FOUND_MESSAGE);
		}
	}
}
