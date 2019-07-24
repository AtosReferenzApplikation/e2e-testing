package app.jobr.library;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.math.BigDecimal;
import java.util.List;

import static app.jobr.library.TestLib.FIELD_NOT_FOUND_MESSAGE;

public class WebTaschenrechnerType implements IProgramType
{
	WebDriver driver;

	@Override
	public void start()
	{
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe"); // Same location as jar file
		driver = new ChromeDriver();
		driver.get("http://juliemr.github.io/protractor-demo/");
		pause(3000);
	}

	@Override
	public void insert(String locator, String value)
	{
		switch (locator)
		{
			case "zahl1":
				WebElement inputField1 = driver.findElement(By.xpath("/html/body/div/div/form/input[1]"));
				inputField1.sendKeys(value);
				break;

			case "zahl2":
				WebElement inputField2 = driver.findElement(By.xpath("/html/body/div/div/form/input[2]"));
				inputField2.sendKeys(value);
				break;

			default:
				throw new AssertionError(FIELD_NOT_FOUND_MESSAGE);
		}
		pause(100);
	}

	@Override
	public void select(String locator, String value)
	{
		switch (locator)
		{
			case "operation":
				WebElement operatorSelector = driver.findElement(By.tagName("select"));
				operatorSelector.click();
				pause(100);
				List<WebElement> optionsList = operatorSelector.findElements(By.tagName("option"));
				for (WebElement option : optionsList)
				{
					if (option.getText().equals(value))
					{
						option.click();
						break;
					}
				}
				pause(100);
				break;

			case "berechnen":
				driver.findElement(By.xpath("/html/body/div/div/form/button")).click();
				break;

			default:
				throw new AssertionError(FIELD_NOT_FOUND_MESSAGE);
		}
	}

	@Override
	public void check(String locator, String value)
	{
		switch (locator)
		{
			case "ergebnis":
				WebElement resultsHeader = driver.findElement(By.xpath("/html/body/div/div/form/h2"));

				boolean isNumber = false;
				int counter = 0;
				while (!isNumber)
				{
					pause(500);
					try
					{
						Integer.parseInt(resultsHeader.getText());
						isNumber = true;
						if (++counter >= 10)
						{
							throw new AssertionError("Not finding any numeric result!");
						}
					}
					catch (NumberFormatException e)	{}
				}

				assert (resultsHeader.getText().equals(value));

				pause(3000);
				driver.quit();
				break;

			default:
				throw new AssertionError(FIELD_NOT_FOUND_MESSAGE);
		}


	}

	private void pause(int ms)
	{
		try
		{
			Thread.sleep(ms);
		}
		catch (InterruptedException e) {}
	}
}
