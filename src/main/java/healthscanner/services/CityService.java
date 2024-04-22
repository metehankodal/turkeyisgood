package healthscanner.services;

import healthscanner.entities.cities.CitiesItem;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import healthscanner.repository.CityRepository;

import java.util.ArrayList;
import java.util.List;

/**
 * @Author meteh
 *//*
 * @created 04
 * @author meteh
 */
@Service
@NoArgsConstructor
@AllArgsConstructor
@Slf4j
public class CityService {

    @Autowired
    private CityRepository cityRepository;

    public List<CitiesItem> getCities(){
        try {
            return cityRepository.findAll();
        }
        catch(Exception e){
            log.error("CityService getCities has exception",e);
            return new ArrayList<>();
        }
    }
}

