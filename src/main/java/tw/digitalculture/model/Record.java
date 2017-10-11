package tw.digitalculture.model;

import static def.jquery.Globals.$;
import static def.js.Globals.decodeURIComponent;
import java.util.ArrayList;
import java.util.List;

/**
 *
 * @author Jonathan
 */
public class Record {

    public String identifier;
    public String title;
    public List<String> subjects = new ArrayList<>();
    public String description;
    public String link;
    public String filetype;

    public Record(Object header, Object metadata) {
        this.identifier = $(header).find("identifier").text();
        this.title = $(metadata).find("dc\\:title").text();
        $(metadata).find("dc\\:subject").each((i, s) -> {
            return subjects.add(s.toString());
        });
        this.description = $(metadata).find("dc\\:description").filter((i, o) -> {
            return (!o.toString().startsWith("http://"));
        }).text().replaceAll("\n", ";");
        this.link = decodeURIComponent($(metadata).find("dc\\:description").filter((i, o) -> {
            return (o.toString().startsWith("http://"));
        }).text());
        this.filetype = this.link.split(".")[this.link.split(".").length - 1];

    }

    public String contains(String keyword) {

        String result = "";
        if (this.subjects.size() > 0) {
            for (int index = 0; index < this.subjects.size(); index++) {
                if (this.subjects.get(index).contains(keyword)) {
                    result = this.subjects.get(index);
                }
            }
            if (!result.isEmpty()) {
                result += ':' + this.title + '。' + this.description;
            }
        }
        if (this.title.contains(keyword)) {
            result = this.title + '。' + this.description;
        } else if (this.description.contains(keyword)) {
            result = this.description;
        }
        return result;
    }
}
