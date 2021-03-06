sap.ui.define(['sap/ui/core/XMLComposite'],
	function (XMLComposite) {
		"use strict";
		var MySelect3 = sap.ui.core.XMLComposite.extend("composites.MySelect3", {
			metadata: {
				aggregations: {
					myItems: {
						type: "sap.ui.core.Item",
						multiple: true,
						bindable: "bindable"
					}
				},
				defaultAggregation: "myItems"
			}
		});

		return MySelect3;
	}, /* bExport= */true);
