(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{278:function(e,t,o){"use strict";o.r(t);var n=o(3),a=Object(n.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("p",[e._v("With openEO, we are digging into new grounds regarding the interoperability of big Earth observation clouds. While we could address a lot of problems that came up, some issues remained that we couldn't solve. This article explains "),o("em",[e._v("some")]),e._v(" of the lessons learned and thus also gives an honest overview about current limitations of the openEO API.")]),e._v(" "),o("h2",{attrs:{id:"_1-collection-names"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_1-collection-names"}},[e._v("#")]),e._v(" 1. Collection Names")]),e._v(" "),o("p",[e._v("The naming of data sets (collections) is different across providers. We thought about recommending to follow lists like the "),o("a",{attrs:{href:"http://database.eohandbook.com/database/missionindex.aspx",target:"_blank",rel:"noopener noreferrer"}},[e._v("CEOS Mission Index"),o("OutboundLink")],1),e._v(", but then the question is what data does it really refer to? It lists "),o("code",[e._v("Sentinel-2 A")]),e._v(" and "),o("code",[e._v("Sentinel-2 B")]),e._v(", but would that be Level 1C or 2A or something completely different? Therefore, openEO decided to not enforce any naming scheme as data sets throughout the affiliated providers were mostly differently pre-processed anyway. To improve the situation, openEO allows to define process parameters. This allows to define algorithms independently of data set names, which can later be assigned when executing the process. Also, openEO recommends to split processing instructions into two parts: data loading/pre-processing and the actual algorithm.")]),e._v(" "),o("p",[e._v("Some more background information can be found in the corresponding "),o("a",{attrs:{href:"https://github.com/Open-EO/openeo-api/issues/52",target:"_blank",rel:"noopener noreferrer"}},[e._v("GitHub issue"),o("OutboundLink")],1),e._v(". In general, many limitations (including the following) concern the data holdings of the providers and may hopefully be solved by initiatives that work on Analysis Ready Data (ARD).")]),e._v(" "),o("h2",{attrs:{id:"_2-other-names"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_2-other-names"}},[e._v("#")]),e._v(" 2. Other Names")]),e._v(" "),o("p",[e._v("Similarly, the naming of bands (and potentially other dimension labels, too) are inconsistent across providers, we faced names such as "),o("code",[e._v("B2")]),e._v(", "),o("code",[e._v("B02")]),e._v(", "),o("code",[e._v("2")]),e._v(" or "),o("code",[e._v("blue")]),e._v(" for Sentinel-2. openEO doesn't enforce any naming scheme, but has found ways to improve the situation for users. First, process parameters can be used (see above). Second, bands can also be specified using the "),o("a",{attrs:{href:"https://github.com/radiantearth/stac-spec/tree/v0.9.0/extensions/eo#common-band-names",target:"_blank",rel:"noopener noreferrer"}},[e._v("common names as specified by STAC"),o("OutboundLink")],1),e._v(" or wavelength ranges. openEO recommends to use common names whenever available.")]),e._v(" "),o("p",[e._v("For example, to avoid specific naming you could filter for Sentinel-2 (A and B) band 2 as follows:")]),e._v(" "),o("ul",[o("li",[e._v("by common name: "),o("code",[e._v("filter_bands(data = cube, bands = ['blue'])")]),e._v(" (blue maps to the wavelength range 0.45 - 0.50 according to STAC)")]),e._v(" "),o("li",[e._v("by wavelength, specified in μm: "),o("code",[e._v("filter_bands(data = cube, wavelength = [[0.49, 0.50]])")]),e._v(" (wavelength is 0.4966 for Sentinel-2A and 0.4921 for Sentinel-2B)")])]),e._v(" "),o("p",[e._v("In general, metadata is aligned for usage in openEO processes by using the "),o("a",{attrs:{href:"https://www.stacspec.org",target:"_blank",rel:"noopener noreferrer"}},[e._v("STAC specification"),o("OutboundLink")],1),e._v(", which improves interoperability.")]),e._v(" "),o("h2",{attrs:{id:"_3-chunked-collections"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_3-chunked-collections"}},[e._v("#")]),e._v(" 3. Chunked Collections")]),e._v(" "),o("p",[e._v("Some providers (for example "),o("a",{attrs:{href:"https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S2_SR",target:"_blank",rel:"noopener noreferrer"}},[e._v("Google Earth Engine"),o("OutboundLink")],1),e._v(") expose data sets such as Sentinel-2 L2A as one large collection. Other providers expose the data sets split into groups, e.g. chunked by CRS and resolution. EURAC has collections such as "),o("code",[e._v("S2_32632_60m_L2A")]),e._v(" or "),o("code",[e._v("S2_32635_10m_L2A")]),e._v(" for example. There are valid "),o("a",{attrs:{href:"https://github.com/Open-EO/openeo-api/issues/180",target:"_blank",rel:"noopener noreferrer"}},[e._v("reasons"),o("OutboundLink")],1),e._v(" for any of the implementations, but to explain them is too much for this article. Unfortunately, those differences decrease the interoperability and in the end the re-usability of the processes. openEO aims to make algorithms re-usable and thus recommends to split processing instructions into two parts: data loading/pre-processing and the actual algorithm. This allows greater re-usability of the algorithms.")]),e._v(" "),o("h2",{attrs:{id:"_4-what-to-specify"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_4-what-to-specify"}},[e._v("#")]),e._v(" 4. What to specify?")]),e._v(" "),o("p",[e._v("The API has a focus on Service and Data Discovery, Data Processing and Result Retrieval/Publishing. Some more customer-oriented tasks such as user registration and payments are not handled through the openEO API. These aspects are too different across providers and can be handled more efficiently through external interfaces. Most providers already offer such services independently of the openEO API implementation anyway to offer their pre-openEO services.")]),e._v(" "),o("p",[e._v("Still, the openEO API uses OpenID Connect as main Authentication and Authorization mechanism (see also point 5). "),o("a",{attrs:{href:"https://openid.net/connect/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenID Connect"),o("OutboundLink")],1),e._v(" has a "),o("a",{attrs:{href:"https://openid.net/specs/openid-connect-prompt-create-1_0.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("User Registration extension draft"),o("OutboundLink")],1),e._v(" that can be used by back-ends and may be adopted in the future. We closely follow upcoming specifications and standards and are happy to adopt anything useful.")]),e._v(" "),o("h3",{attrs:{id:"file-formats"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#file-formats"}},[e._v("#")]),e._v(" File Formats")]),e._v(" "),o("p",[e._v("Similarly, file "),o("a",{attrs:{href:"https://github.com/Open-EO/openeo-api/issues/63",target:"_blank",rel:"noopener noreferrer"}},[e._v("formats"),o("OutboundLink")],1),e._v(" and their "),o("a",{attrs:{href:"https://github.com/Open-EO/openeo-api/issues/32",target:"_blank",rel:"noopener noreferrer"}},[e._v("options"),o("OutboundLink")],1),e._v(' are often very different between processing software. That is why GDAL exists. To improve interoperability, the openEO API just recommends to align them with GDAL, which is used in most relevant software anyway. Unfortunately, this comes with some small inconveniences. For example, most people would probably expect to just specify "GeoTiff" as file format name, but GDAL has named it "GTiff". Another idea was to use '),o("a",{attrs:{href:"https://www.iana.org/assignments/media-types/media-types.xhtml",target:"_blank",rel:"noopener noreferrer"}},[e._v("media types"),o("OutboundLink")],1),e._v(" such as "),o("code",[e._v("application/json")]),e._v(", but then we realized that these are often to broad or not even defined. For example, openEO had to "),o("a",{attrs:{href:"https://github.com/opengeospatial/geotiff/issues/34",target:"_blank",rel:"noopener noreferrer"}},[e._v("push the OGC"),o("OutboundLink")],1),e._v(" to specify an official media type for GeoTiff. But the same issue exists for other file formats, too.")]),e._v(" "),o("h2",{attrs:{id:"_5-authentication"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_5-authentication"}},[e._v("#")]),e._v(" 5. Authentication")]),e._v(" "),o("p",[e._v("One of the most complex issues we faced during the API development was actually not EO or data processing related. It was the Authentication and Authorization mechanism. We quickly decided to use one of the well-established standards available for security reasons. Unfortunately, most of them don't seem to cater very well for our use case where you have a number of different clients and back-ends communicating with each other. Usually in the Web you have multiple clients communicating with a single back-end ("),o("em",[e._v("1:n")]),e._v("), but in openEO we have a "),o("em",[e._v("n:m")]),e._v(" relation. There are CLI tools, web clients and more that need to authenticate against a growing set of independent providers. Therefore, you can't easily ship clients with security measures like Client IDs (and Client Secrets) as required by "),o("a",{attrs:{href:"https://openid.net/connect/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenID Connect"),o("OutboundLink")],1),e._v(" (based on "),o("a",{attrs:{href:"https://oauth.net/2/",target:"_blank",rel:"noopener noreferrer"}},[e._v("OAuth 2"),o("OutboundLink")],1),e._v("). Users need to get those information by themselves and provide it to the clients, which is inconvenient and probably confusing to many non-developers. This issue is probably the thing I dislike most in the current API specification and thus would love to hear from you whether there are good solutions out there that we missed.")]),e._v(" "),o("h2",{attrs:{id:"_6-debugging-experience"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_6-debugging-experience"}},[e._v("#")]),e._v(" 6. Debugging Experience")]),e._v(" "),o("p",[e._v('The logging and debugging experience varies a lot between cloud processing and the "traditional workflow" (you download data and compute locally with your preferred tools). While it\'s "free" on a local machine to just do "trial and error" to check whether something is running, cloud processing usually comes with a cost and you likely don\'t want to work with "trial and error". Also you don\'t directly have access to the hardware and software and thus it is harder to investigate problems. openEO took several measures to mitigate these issues, but it is still a different experience for users. I guess that is a long learning process until it is adopted by users and may need additional effort to implement tools to improve the situation. While many users are getting used to it in situations where a streamlined experience is somewhat possible as only few clients communicate with a single provider (e.g. Google Earth Engine), the issue increases in openEO due to the different infrastructure and software used on back-end side.')]),e._v(" "),o("h2",{attrs:{id:"_7-defining-interoperable-processes"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_7-defining-interoperable-processes"}},[e._v("#")]),e._v(" 7. Defining interoperable Processes")]),e._v(" "),o("p",[e._v("Defining a common set of pre-defined processes was a very long and challenging task.")]),e._v(" "),o("ol",[o("li",[e._v("First, we had to come up with a useful schema that allowed us to describe processes in JSON. We got inspired by different other standards such as "),o("a",{attrs:{href:"https://www.ogc.org/standards/wps",target:"_blank",rel:"noopener noreferrer"}},[e._v("WPS"),o("OutboundLink")],1),e._v(" and "),o("a",{attrs:{href:"http://spec.openapis.org/oas/v3.0.3",target:"_blank",rel:"noopener noreferrer"}},[e._v("OpenAPI"),o("OutboundLink")],1),e._v(".")]),e._v(" "),o("li",[e._v("Second, we had to find what processes are required and which granularity they should have. That quickly led to over "),o("a",{attrs:{href:"https://processes.openeo.org/",target:"_blank",rel:"noopener noreferrer"}},[e._v("a hundred processes"),o("OutboundLink")],1),e._v(", mainly for data cube and math operations. And that was only for mostly raster operations. We still have a big hole in the processes regarding vector related operations, but we aim to close that in the next year(s).")]),e._v(" "),o("li",[e._v("Third, we had to figure out what common processing softwares offered and how to come up with process definitions than can be implemented with those softwares.")]),e._v(" "),o("li",[e._v("Last, we had to specify it in a way that is unambiguous and easy to understand by users.")])]),e._v(" "),o("p",[e._v("All of these tasks took much more time than initially expected. For example, one of the partners reported that the granularity of the processes is not really suited for the underlying processing software. While we couldn't really change the granularity, it was at least not an issue to make openEO work for them. Fortunately, the process part of the openEO API is very flexible and allows providers to change the processes according to their needs or define their own processes. Due to the fact that the actual parameters and return values are described in JSON Schema, clients and back-ends can easily re-use existing JSON Schema implementations and adopt to changes in the process specifications. Thus, if a back-end doesn't support parts of a process, it can just be changed/removed and a client can understand that and cater for it.")]),e._v(" "),o("h2",{attrs:{id:"conclusion"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#conclusion"}},[e._v("#")]),e._v(" Conclusion")]),e._v(" "),o("p",[e._v("This was a deep dive into "),o("em",[e._v("some")]),e._v(" of my challenges during the last years. I hope it is useful for others and I'm hoping to get into discussions with developers facing similar issues. Maybe with joint forces we can solve some of these for a better cloud processing experience in the future. If you have anything to say, please contact me via "),o("a",{attrs:{href:"mailto:m.mohr@uni-muenster.de"}},[e._v("e-mail")]),e._v(", GitHub issues ("),o("a",{attrs:{href:"https://github.com/Open-EO/openeo-api",target:"_blank",rel:"noopener noreferrer"}},[e._v("API"),o("OutboundLink")],1),e._v(", "),o("a",{attrs:{href:"https://github.com/Open-EO/openeo-processes/issues",target:"_blank",rel:"noopener noreferrer"}},[e._v("Processes"),o("OutboundLink")],1),e._v(") or "),o("a",{attrs:{href:"https://twitter.com/matthmohr",target:"_blank",rel:"noopener noreferrer"}},[e._v("Twitter"),o("OutboundLink")],1),e._v(". You can also "),o("RouterLink",{attrs:{to:"/contact.html"}},[e._v("contact openEO")]),e._v(".")],1)])}),[],!1,null,null,null);t.default=a.exports}}]);