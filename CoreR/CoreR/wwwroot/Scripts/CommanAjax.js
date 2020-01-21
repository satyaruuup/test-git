var commonAjax = (function () {

    return {
        GetPropertyType: function (propertyId) {
        
            var dataToServer = {"propertyId": propertyId};
            var propertyType = 0;

            $.ajax({
                type: "GET",
                url: "/Property/GetPropertyType",
                async: false,
                data: dataToServer,
                success: function (response) {
                    propertyType = response;
                },
                failure: function (response) {
                    propertyType = -1;
                }
            });

            return propertyType;
        }
    }
}());