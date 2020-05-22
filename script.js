$.getJSON(
    "https://hpb.health.gov.lk/api/get-current-statistical", function (data) {
        console.log(data);

        var cases = data.data.local_total_cases;
        var active = data.data.local_active_cases;
        var discharge =data.data.local_recovered;
        var death = data.data.local_deaths;

        $('.total-confirm').append(cases);
        $('.active').append(active);
        $('.recover').append(discharge);
        $('.death').append(death);


    });