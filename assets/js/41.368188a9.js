(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{283:function(e,t,a){e.exports=a.p+"assets/img/arch.e75ccb9a.png"},458:function(e,t,a){"use strict";a.r(t);var n=a(4),i=Object(n.a)({},(function(){var e=this,t=e._self._c;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"architecture"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#architecture"}},[e._v("#")]),e._v(" Architecture")]),e._v(" "),t("p",[e._v("The openEO API defines a language how clients communicate to back-ends in order to analyze large Earth observation datasets. The API will be implemented by drivers for specific back-ends. Some first architecture considerations are listed below.")]),e._v(" "),t("ol",[t("li",[e._v("The openEO API is a contract between clients and back-ends that describes the communication only")]),e._v(" "),t("li",[e._v("Each back-end runs its own API instance including the specific back-end driver. There is no API instance that runs more than one driver.")]),e._v(" "),t("li",[e._v("Clients in R, Python, and JavaScript connect directly to the back-ends and communicate with the back-ends over "),t("em",[e._v("HTTPS")]),e._v(" according to the openEO API specification.")]),e._v(" "),t("li",[e._v("API instances can run on back-end servers or additional intermediate layers, which then communicate to back-ends in a back-end specific way.")]),e._v(" "),t("li",[e._v("Back-ends may add functionality and extend the API wherever there is need.")]),e._v(" "),t("li",[e._v("There will be a central back-end registry service (openEO Hub), to allow users to search for back-ends with specific functionality and or data.")]),e._v(" "),t("li",[e._v("The openEO API may define "),t("em",[e._v("profiles")]),e._v(" in order to group specific functionality.")])]),e._v(" "),t("p",[t("img",{attrs:{src:a(283),alt:"Architecture - openEO API shown in dark blue"}})]),e._v(" "),t("h1",{attrs:{id:"microservices"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#microservices"}},[e._v("#")]),e._v(" Microservices")]),e._v(" "),t("p",[e._v("To simplify and structure the development, the API is divided into a few microservices.")]),e._v(" "),t("table",[t("thead",[t("tr",[t("th",[e._v("Microservice")]),e._v(" "),t("th",[e._v("Description")])])]),e._v(" "),t("tbody",[t("tr",[t("td",[e._v("Capabilities")]),e._v(" "),t("td",[e._v("This microservice reports on the capabilities of the back-end, i.e. which API endpoints are implemented, which authentication methods are supported, and whether and how UDFs can be executed at the back-end.")])]),e._v(" "),t("tr",[t("td",[e._v("EO Data Discovery")]),e._v(" "),t("td",[e._v("Describes which collections are available at the back-end.")])]),e._v(" "),t("tr",[t("td",[e._v("Process Discovery")]),e._v(" "),t("td",[e._v("Provides services to find out which processes a back-end provides, i.e., what users can do with the available data.")])]),e._v(" "),t("tr",[t("td",[e._v("UDF")]),e._v(" "),t("td",[e._v("Discovery and execution of user-defined functions.")])]),e._v(" "),t("tr",[t("td",[e._v("Batch Job Management")]),e._v(" "),t("td",[e._v("Organizes and manages batch jobs that run processes on back-ends.")])]),e._v(" "),t("tr",[t("td",[e._v("File Management")]),e._v(" "),t("td",[e._v("Organizes and manages user-uploaded files.")])]),e._v(" "),t("tr",[t("td",[e._v("Process Graph Management")]),e._v(" "),t("td",[e._v("Organizes and manages user-defined process graphs.")])]),e._v(" "),t("tr",[t("td",[e._v("Secondary Services Management")]),e._v(" "),t("td",[e._v("External web services to access data and job results such as a OGC WMTS service.")])]),e._v(" "),t("tr",[t("td",[e._v("Account Management")]),e._v(" "),t("td",[e._v("User management, accounting and authentication.")])])])])])}),[],!1,null,null,null);t.default=i.exports}}]);