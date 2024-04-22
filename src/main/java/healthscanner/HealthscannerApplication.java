package healthscanner;

import healthscanner.controller.CityController;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.ComponentScan;

@SpringBootApplication
public class HealthscannerApplication {

	public static void main(String[] args) {
		SpringApplication.run(HealthscannerApplication.class, args);
	}

}
