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

    public static void main(String[] args)
    {
	    if (args.length > 3)
        {
            System.out.println("Too many arguments given!");
        }
	    else if (args.length < 3)
        {
            System.out.println("Too few arguments given!");
        }
	    else
        {
        	Taschenrechner tr = new Taschenrechner();

            try
            {
                tr.setZahl1(new BigDecimal(args[0]));
                tr.setZahl2(new BigDecimal(args[2]));
				tr.setOperation(args[1]);
				tr.doCalculation();

                System.out.println(tr.zahl1 + " " + tr.operation + " " + tr.zahl2 + " = " + tr.getResult());
            }
            catch (NumberFormatException e)
            {
                System.out.println("At least one argument is not a number.");
            }
        }
    }

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

			default:
				//System.out.println("Operation not supported.");
				//System.exit(0);
		}
	}
}
