package healthscanner.repository;

import healthscanner.entities.cities.CitiesItem;
import org.springframework.data.mongodb.repository.MongoRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

/**
 * @Author meteh
 */

@Repository
public interface CityRepository extends MongoRepository<CitiesItem,String> {


}
