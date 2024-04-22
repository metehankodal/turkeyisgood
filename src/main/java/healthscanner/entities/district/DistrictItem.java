package healthscanner.entities.district;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;

/**
 * @Author meteh
 *//*
 * @created 04
 * @author meteh
 */

@Document
@Getter
@Setter
@ToString
public class DistrictItem {
    @Id
    private String id;

    private String districtName;

    private String mainCityCode;

    private String districtCode;

    public DistrictItem(String id,String districtName, String mainCityCode,String districtCode){
        super();
        this.id = id;
        this.districtName = districtName;
        this.mainCityCode = mainCityCode;
        this.districtCode = districtCode;
    }
}

