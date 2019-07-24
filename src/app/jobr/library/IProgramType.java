package app.jobr.library;

public interface IProgramType
{
	public void start();
	public void insert(String locator, String value);
	public void select(String locator, String value);
	public void check(String locator, String value);
}
