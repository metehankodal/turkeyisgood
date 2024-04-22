package healthscanner.repository;

import healthscanner.entities.district.DistrictItem;
import org.springframework.data.mongodb.repository.MongoRepository;

/**
 * @Author meteh
 * @create 17.04.2024 20:42
 */
public interface DistrictRepository extends MongoRepository<DistrictItem, String> {

}
