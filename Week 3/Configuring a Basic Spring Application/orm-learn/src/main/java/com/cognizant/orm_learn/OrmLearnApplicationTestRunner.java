package com.cognizant.orm_learn;

import org.springframework.boot.CommandLineRunner;
import org.springframework.stereotype.Component;
import org.springframework.beans.factory.annotation.Autowired;
import com.cognizant.ormlearn.model.Country;
import com.cognizant.ormlearn.service.CountryService;

@Component
public class OrmLearnApplicationTestRunner implements CommandLineRunner {

    @Autowired
    private CountryService countryService;

    @Override
    public void run(String... args) throws Exception {
        System.out.println("Testing started...");

        // Get all countries
        System.out.println("All countries:");
        for (Country country : countryService.getAllCountries()) {
            System.out.println(country);
        }

        // Get country by code
        System.out.println("Country with code IN:");
        Country country = countryService.getCountryByCode("IN");
        System.out.println(country);

        // Add a new country
        Country newCountry = new Country();
        newCountry.setCode("JP");
        newCountry.setName("Japan");
        countryService.addCountry(newCountry);
        System.out.println("Added JP");

       

        System.out.println("Testing completed.");
    }
}
