package app.jobr;

import app.jobr.library.TestLib;
import org.junit.Test;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.chrome.ChromeDriver;

import java.util.List;

public class SeleniumTest
{
	@Test
	public void seleniumTest() throws InterruptedException
	{
		// Local path for testing, if not specified, PATH variable will be checked instead
		System.setProperty("webdriver.chrome.driver", "chromedriver.exe"); // Same location as jar file
		WebDriver driver = new ChromeDriver();
		driver.get("http://juliemr.github.io/protractor-demo/");

		Thread.sleep(3000);

		WebElement inputField1 = driver.findElement(By.xpath("/html/body/div/div/form/input[1]"));
		inputField1.sendKeys("15");

		Thread.sleep(100);

		WebElement inputField2 = driver.findElement(By.xpath("/html/body/div/div/form/input[2]"));
		inputField2.sendKeys("8");

		Thread.sleep(100);

		WebElement operatorSelector = driver.findElement(By.tagName("select"));
		operatorSelector.click();

		Thread.sleep(100);

		List<WebElement> optionsList = operatorSelector.findElements(By.tagName("option"));
		optionsList.get(3).click(); // Multiply
		operatorSelector.click();

		driver.findElement(By.xpath("/html/body/div/div/form/button")).click();

		WebElement resultsHeader = driver.findElement(By.xpath("/html/body/div/div/form/h2"));
		boolean isNumber = false;
		int result = 0;
		while (!isNumber)
		{
			Thread.sleep(500);
			try
			{
				result = Integer.parseInt(resultsHeader.getText());
				isNumber = true;
			}
			catch (NumberFormatException e)
			{

			}
		}

		assert (result == 120);

		Thread.sleep(3000);
		driver.quit();
	}

	@Test
	public void libSeleniumTest()
	{
		TestLib tl = new TestLib();
		tl.starteAnwendung("Web-Taschenrechner");
		tl.gibEin("zahl1", "12");
		tl.gibEin("zahl2", "8");
		tl.waehleAus("operation", "+");
		tl.waehleAus("berechnen");
		tl.pruefeWert("ergebnis", "20");
	}
}
