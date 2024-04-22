package healthscanner.entities.cities;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * @Author meteh
 **/

@Document("Cities")
@Getter
@Setter
@ToString
public class CitiesItem {


    private String cityName;

    private String cityCode;

    public CitiesItem( String cityName, String cityCode){
        super();
        this.cityName = cityName;
        this.cityCode = cityCode;

    }

}

