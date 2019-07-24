package app.jobr.library;

import app.jobr.Taschenrechner;

import java.math.BigDecimal;

import static app.jobr.library.TestLib.FIELD_NOT_FOUND_MESSAGE;

public class TaschenrechnerType implements IProgramType
{
	private Taschenrechner target = new Taschenrechner();

	@Override
	public void start()	{}

	@Override
	public void insert(String locator, String value)
	{
		switch (locator)
		{
			case "zahl1":
				target.setZahl1(new BigDecimal(value));
				break;

			case "zahl2":
				target.setZahl2(new BigDecimal(value));
				break;

			default:
				throw new AssertionError(FIELD_NOT_FOUND_MESSAGE);
		}
	}

	@Override
	public void select(String locator, String value)
	{
		switch (locator)
		{
			case "operation":
				target.setOperation(value);
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
			case "result":
				target.doCalculation();
				assert (value.equals(target.getResult().toString()));
				break;

			default:
				throw new AssertionError(FIELD_NOT_FOUND_MESSAGE);
		}
	}
}
