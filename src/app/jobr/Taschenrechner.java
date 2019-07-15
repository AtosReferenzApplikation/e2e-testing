package app.jobr;

import java.math.BigDecimal;

public class Taschenrechner
{
    /**
     * Does a simple mathematical calculation using the BigDecimal number format to prevent floating point inaccuracy.
     * Supported: +, -, *, /, %. Result is printed in the command line.
     *
     * @param args The arguments given to the calculator. Expected format: number, operator, number
     */
    private BigDecimal zahl1;
	private BigDecimal zahl2;
	private BigDecimal result;
	private String operation;

	public void setZahl1(BigDecimal x)
	{
		zahl1 = x;
	}

	public void setZahl2(BigDecimal x)
	{
		zahl2 = x;
	}

	public BigDecimal getResult()
	{
		return result;
	}

	public void setOperation(String op)
	{
		operation = op;
	}

	public void doCalculation()
	{
		if (zahl1 != null && zahl2 != null)
		{
			switch (operation)
			{
				case "+":
					result = zahl1.add(zahl2);
					break;

				case "-":
					result = zahl1.subtract(zahl2);
					break;

				case "*":
					result = zahl1.multiply(zahl2);
					break;

				case "/":
					result = zahl1.divide(zahl2);
					break;

				case "%":
					result = zahl1.remainder(zahl2);
					break;
			}
		}
	}
}
