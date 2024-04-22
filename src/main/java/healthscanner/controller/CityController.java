package healthscanner.controller;

import healthscanner.entities.cities.CitiesItem;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import healthscanner.services.CityService;

import java.util.List;

/**
 * @Author mete
 *//*
 * @created 04
 * @author meteh
 */
@Controller
@RequestMapping(value = "city")
public class CityController {

    @Autowired
    private CityService cityService;

    @GetMapping("")
    public ResponseEntity<List<CitiesItem>> getCities(){
        return new ResponseEntity<>(cityService.getCities(),HttpStatus.OK);
    }
}

