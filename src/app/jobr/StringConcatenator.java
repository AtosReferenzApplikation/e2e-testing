package app.jobr;

public class StringConcatenator
{
	private String text = "";
	private String input = "";

	public void enterText(String input)
	{
		this.input = input;
	}

	public void appendText()
	{
		text = text.concat(input);
	}

	public String getText()
	{
		return text;
	}
}
