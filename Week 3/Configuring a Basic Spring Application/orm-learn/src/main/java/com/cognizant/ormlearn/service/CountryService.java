package com.cognizant.ormlearn.service;

import com.cognizant.ormlearn.model.Country;
import java.util.List;

public interface CountryService {
    List<Country> getAllCountries();
    Country getCountryByCode(String code);
    void addCountry(Country country);
}
