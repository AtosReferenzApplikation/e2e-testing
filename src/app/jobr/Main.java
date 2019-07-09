package app.jobr;

import java.math.BigDecimal;

public class Main
{
    /**
     * Does a simple mathematical calculation using the BigDecimal number format to prevent floating point inaccuracy.
     * Supported: +, -, *, /, %. Result is printed in the command line.
     *
     * @param args The arguments given to the calculator. Expected format: number, operator, number
     */
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
            try
            {
                BigDecimal value1 = new BigDecimal(args[0]);
                BigDecimal value2 = new BigDecimal(args[2]);

                char operator = args[1].charAt(0);

                BigDecimal result = new BigDecimal(0);

                switch (operator)
                {
                    case '+':
                        result = value1.add(value2);
                        break;

                    case '-':
                        result = value1.subtract(value2);
                        break;

                    case '*':
                        result = value1.multiply(value2);
                        break;

                    case '/':
                        result = value1.divide(value2);
                        break;

                    case '%':
                        result = value1.remainder(value2);
                        break;

                    default:
                        System.out.println("Operation not supported.");
                        System.exit(0);
                }

                System.out.println(value1 + " " + operator + " " + value2 + " = " + result);
            }
            catch (NumberFormatException e)
            {
                System.out.println("At least one argument is not a number.");
            }
        }
    }
}
