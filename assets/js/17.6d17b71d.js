(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{200:function(e,t,a){e.exports=a.p+"assets/img/datacube-example.bab870f7.png"},269:function(e,t,a){"use strict";a.r(t);var s=a(3),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"glossary"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#glossary"}},[e._v("#")]),e._v(" Glossary")]),e._v(" "),s("p",[e._v("This glossary introduces the major technical terms used in the openEO project.")]),e._v(" "),s("h2",{attrs:{id:"general-terms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#general-terms"}},[e._v("#")]),e._v(" General terms")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("EO")]),e._v(": Earth observation")]),e._v(" "),s("li",[s("strong",[e._v("API")]),e._v(": application programming interface ("),s("a",{attrs:{href:"https://en.wikipedia.org/wiki/Application_programming_interface",target:"_blank",rel:"noopener noreferrer"}},[e._v("wikipedia"),s("OutboundLink")],1),e._v("); a communication protocol between client and back-end")]),e._v(" "),s("li",[s("strong",[e._v("client")]),e._v(": software tool or environment that end-users directly interact with, e.g. R (RStudio), Python (Jupyter notebook), and JavaScript (web browser); R and Python are two major data science platforms; JavaScript is a major language for web development")]),e._v(" "),s("li",[s("strong",[e._v("(cloud) back-end")]),e._v(": server; computer infrastructure (one or more physical computers or virtual machines) used for storing EO data and processing it")]),e._v(" "),s("li",[s("strong",[e._v("big Earth observation cloud back-end")]),e._v(": server infrastructure where industry and researchers analyse large amounts of EO data")])]),e._v(" "),s("h2",{attrs:{id:"processes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#processes"}},[e._v("#")]),e._v(" Processes")]),e._v(" "),s("p",[e._v("A "),s("strong",[e._v("process")]),e._v(" is an operation that performs a specific task on a set of parameters and returns a result. An example is computing a statistical operation, such as mean or median, on selected EO data. A process is similar to a function or method in programming languages.")]),e._v(" "),s("p",[e._v("A "),s("strong",[e._v("pre-defined process")]),e._v(" is a process provided by the "),s("em",[e._v("back-end")]),e._v(", often one of the "),s("RouterLink",{attrs:{to:"/documentation/1.0/processes.html"}},[e._v("ones centrally defined by openEO")]),e._v(".")],1),e._v(" "),s("p",[e._v("A "),s("strong",[e._v("user-defined process")]),e._v(" is a process defined by the "),s("em",[e._v("user")]),e._v(". It can directly be part of another process graph or be stored as custom process on a back-end. Internally it is a "),s("em",[e._v("process graph")]),e._v(" with optional additional metadata.")]),e._v(" "),s("p",[e._v("A "),s("strong",[e._v("process graph")]),e._v(" chains specific process calls from the set of pre-defined and user-defined processes together. A process graph itself is a (user-defined) process again. Similarly to scripts in the context of programming, process graphs organize and automate the execution of one or more processes that could alternatively be executed individually. In a process graph, processes need to be specific, i.e. concrete values for input parameters need to be specified. These arguments can again be process graphs, scalar values, arrays or objects.")]),e._v(" "),s("h2",{attrs:{id:"eo-data-collections"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#eo-data-collections"}},[e._v("#")]),e._v(" EO data (Collections)")]),e._v(" "),s("p",[e._v("In our domain, different terms are used to describe EO data(sets). Within openEO, a "),s("strong",[e._v("granule")]),e._v(" (sometimes also called "),s("em",[e._v("item")]),e._v(" or "),s("em",[e._v("asset")]),e._v(" in the specification) typically refers to a limited area and a single overpass leading to a very short observation period (seconds) or a temporal aggregation of such data (e.g. for 16-day MODIS composites). A "),s("strong",[e._v("collection")]),e._v(" is a sequence of granules sharing the same product specification. It typically corresponds to the series of products derived from data acquired by a sensor on board a satellite and having the same mode of operation.")]),e._v(" "),s("p",[e._v("The "),s("a",{attrs:{href:"http://ceos.org/ourwork/workinggroups/wgiss/access/opensearch/",target:"_blank",rel:"noopener noreferrer"}},[e._v("CEOS OpenSearch Best Practice Document v1.2"),s("OutboundLink")],1),e._v(" lists the following synonyms used by other organizations:")]),e._v(" "),s("ul",[s("li",[s("strong",[e._v("granule")]),e._v(": dataset (ESA, ISO 19115), granule (NASA), product (ESA, CNES), scene (JAXA)")]),e._v(" "),s("li",[s("strong",[e._v("collection")]),e._v(": dataset series (ESA, ISO 19115), collection (CNES, NASA), dataset (JAXA), product (JAXA)")])]),e._v(" "),s("p",[e._v("In openEO, a back-end offers a set of collections to be processed. All collections can be requested using a client and are described using the "),s("a",{attrs:{href:"https://github.com/radiantearth/stac-spec",target:"_blank",rel:"noopener noreferrer"}},[e._v("STAC (SpatioTemporal Asset Catalog) metadata specification"),s("OutboundLink")],1),e._v(" as STAC collections. A user can load (a subset of) a collection using a special process, which returns a (spatial) data cube. All further processing is then applied to the data cube on the back-end.")]),e._v(" "),s("h2",{attrs:{id:"spatial-data-cubes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#spatial-data-cubes"}},[e._v("#")]),e._v(" Spatial data cubes")]),e._v(" "),s("p",[e._v("A "),s("em",[e._v("spatiotemporal")]),e._v(" data cube is a multidimensional array with one or more spatial or temporal dimensions.\nIn the EO domain, it is common to be implicit about the temporal dimension and just refer to them as "),s("em",[e._v("spatial")]),e._v(" data cubes in short.\nSpecial cases are raster and vector data cubes.")]),e._v(" "),s("p",[e._v("The figure below shows the data of\na four-dimensional (8 x 8 x 2 x 2) raster data cube, with dimension names\nand labels:")]),e._v(" "),s("table",[s("thead",[s("tr",[s("th",[e._v("#")]),e._v(" "),s("th",[e._v("dimension name")]),e._v(" "),s("th",[e._v("dimension labels")])])]),e._v(" "),s("tbody",[s("tr",[s("td",[e._v("1")]),e._v(" "),s("td",[e._v("x")]),e._v(" "),s("td",[e._v("288790.5, 288819, 288847.5, 288876, 288904.5, 288933, 288961.5, 288990")])]),e._v(" "),s("tr",[s("td",[e._v("2")]),e._v(" "),s("td",[e._v("y")]),e._v(" "),s("td",[e._v("9120747, 9120718, 9120690, 9120661, 9120633, 9120604, 9120576, 9120547")])]),e._v(" "),s("tr",[s("td",[e._v("3")]),e._v(" "),s("td",[e._v("band")]),e._v(" "),s("td",[s("code",[e._v("red")]),e._v(", "),s("code",[e._v("green")])])]),e._v(" "),s("tr",[s("td",[e._v("4")]),e._v(" "),s("td",[e._v("time")]),e._v(" "),s("td",[s("code",[e._v("2018-02-10")]),e._v(", "),s("code",[e._v("2018-02-17")])])])])]),e._v(" "),s("p",[e._v("dimensions x and time are aligned along the x-axis; y and band are aligned along the y-axis.")]),e._v(" "),s("p",[s("img",{attrs:{src:a(200),alt:"Data cube example"}})]),e._v(" "),s("p",[e._v("Data cubes as defined here have a "),s("em",[e._v("single value")]),e._v(" (scalar) for each\nunique combination of dimension labels.  The value pointed to by\narrows corresponds to the combination of x=288847.5 (red arrow),\ny=9120661 (yellow arrow), band=red (blue arrow), time=2018-02-17 (green arrow),\nand its value is 84 (brown arrow).")]),e._v(" "),s("p",[e._v("If the data concerns grayscale imagery, we could call this "),s("em",[e._v("single")]),e._v("\nvalue a "),s("em",[e._v("pixel value")]),e._v(". One should keep in mind that it is "),s("em",[e._v("never")]),e._v("\na tuple of, say, "),s("code",[e._v("{red, green, blue}")]),e._v(' values.  "Cell value of a\nsingle raster layer" would be a better analogy; '),s("em",[e._v("data cube cell\nvalue")]),e._v(" may be a good compromise.")]),e._v(" "),s("p",[e._v("A data cube stores some additional properties per dimension such as:")]),e._v(" "),s("ul",[s("li",[e._v("name")]),e._v(" "),s("li",[e._v("axis / number")]),e._v(" "),s("li",[e._v("type")]),e._v(" "),s("li",[e._v("extents "),s("em",[e._v("or")]),e._v(" nominal dimension labels")]),e._v(" "),s("li",[s("a",{attrs:{href:"#coordinate-reference-system-as-a-data-cube-dimension"}},[e._v("reference systems / projections")])]),e._v(" "),s("li",[e._v("resolutions")])]),e._v(" "),s("p",[e._v("Having these properties available allows to easily resample from one data cube to another for example.")]),e._v(" "),s("p",[e._v("Dimension labels are either of type number or string, including all sub types such as integers or temporal strings. Additional data types may be allowed in the future.")]),e._v(" "),s("h3",{attrs:{id:"apply-processes-that-process-individual-values"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#apply-processes-that-process-individual-values"}},[e._v("#")]),e._v(" apply: processes that process individual values")]),e._v(" "),s("p",[s("code",[e._v("apply")]),e._v(" and the "),s("code",[e._v("apply_*")]),e._v(" processes work on individual values (pixels) and\nusually don't reduce or change the array dimensions much.")]),e._v(" "),s("p",[e._v("The process "),s("RouterLink",{attrs:{to:"/documentation/1.0/processes.html#apply"}},[s("code",[e._v("apply")])]),e._v(" can be used to apply (map) unary functions to all values in\na data cube without changing any dimensions at all.")],1),e._v(" "),s("p",[e._v("The process "),s("RouterLink",{attrs:{to:"/documentation/1.0/processes.html#apply_dimension"}},[s("code",[e._v("apply_dimension")])]),e._v(" applies an n-ary function to a particular\ndimension.")],1),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Examples")]),e._v(" "),s("ul",[s("li",[e._v("Simplified: "),s("code",[e._v("apply([🌽, 🥔, 🐔], cook) => [🍿, 🍟, 🍗]")])]),e._v(" "),s("li",[s("code",[e._v("apply")]),e._v(": Apply a mathematical operation such as "),s("RouterLink",{attrs:{to:"/documentation/1.0/processes.html#absolute"}},[s("code",[e._v("absolute")])]),e._v(", e.g. "),s("code",[e._v("apply([-1, 2, -3], absolute) => [1, 2, 3]")])],1),e._v(" "),s("li",[s("code",[e._v("apply_dimension")]),e._v(": apply a moving average filter along the time dimension to implement temporal smoothing")])])]),e._v(" "),s("h3",{attrs:{id:"filter-subsetting-dimensions-by-dimension-label-selection"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#filter-subsetting-dimensions-by-dimension-label-selection"}},[e._v("#")]),e._v(" filter: subsetting dimensions by dimension label selection")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("filter_*")]),e._v(" processes makes a cube smaller by selecting specific\nvalue ranges for a particular dimension.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Examples")]),e._v(" "),s("ul",[s("li",[e._v("Simplified: "),s("code",[e._v("filter([🌽, 🥔, 🐔], isVegetarian) => [🌽, 🥔]")])]),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/documentation/1.0/processes.html#filter_bands"}},[s("code",[e._v("filter_bands")])]),e._v(": a band filter that selects the "),s("code",[e._v("red")]),e._v(" band")],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/documentation/1.0/processes.html#filter_spatial"}},[s("code",[e._v("filter_spatial")])]),e._v(': a spatial filter that "crops" the data cube to the boundaries of Italy')],1),e._v(" "),s("li",[e._v("["),s("code",[e._v("filter_temporal")]),e._v("](](processes.md#filter_temporal): a temporal filter that retains only the data for 2020")])])]),e._v(" "),s("h3",{attrs:{id:"reduce-removing-dimensions-entirely-by-computation"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#reduce-removing-dimensions-entirely-by-computation"}},[e._v("#")]),e._v(" reduce: removing dimensions entirely by computation")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("reduce_*")]),e._v(' processes remove a dimension by "rolling up" or summarizing\nthe values along that dimension to a single value.')]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Examples")]),e._v(" "),s("ul",[s("li",[e._v("Simplified: "),s("code",[e._v("reduce(🥬, 🥒, 🍅, 🧅) => 🥗")])]),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/documentation/1.0/processes.html#reduce_dimension"}},[s("code",[e._v("reduce_dimension")])]),e._v(":\n"),s("ul",[s("li",[e._v("Eliminate the time dimension by calculating the "),s("RouterLink",{attrs:{to:"/documentation/1.0/processes.html#mean"}},[s("code",[e._v("mean")])])],1),e._v(" "),s("li",[e._v("Eliminate the band dimension by calculating the "),s("RouterLink",{attrs:{to:"/documentation/1.0/processes.html#ndvi"}},[s("code",[e._v("NDVI")])])],1)])],1)])]),e._v(" "),s("h3",{attrs:{id:"aggregate-reducing-resolution"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#aggregate-reducing-resolution"}},[e._v("#")]),e._v(" aggregate: reducing resolution")]),e._v(" "),s("p",[e._v("Aggregation computes new values from sets of values that are assigned to groups. The assignment to the groups is not necessarily unique. It involves a grouping predicate (e.g. monthly, 100 m x 100 m grid cells, or a set of non-overlapping spatial polygons), and an reducer (e.g., "),s("code",[e._v("mean")]),e._v(") that computes one or more new values from the original ones.")]),e._v(" "),s("p",[e._v("In effect, the "),s("code",[e._v("aggregate_*")]),e._v(" processes combine the following three steps:")]),e._v(" "),s("ul",[s("li",[s("em",[e._v("split")]),e._v(" the data cube in groups, based on dimension constraints (time intervals, band groups, spatial polygons)")]),e._v(" "),s("li",[s("em",[e._v("apply")]),e._v(" a reducer to each group (similar to the "),s("code",[e._v("reduce_dimension")]),e._v(" process, but reducing a group rather than an entire dimension)")]),e._v(" "),s("li",[s("em",[e._v("combine")]),e._v(" the result to a new data cube, with some dimensions having reduced resolution (or e.g. raster to vector converted)")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Examples")]),e._v(" "),s("ul",[s("li",[e._v("Simplified: "),s("code",[e._v("aggregate([👪, 👩‍👦, 👨‍👩‍👦‍👦], count) => [3️⃣, 2️⃣, 4️⃣]")])]),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/documentation/1.0/processes.html#aggregate_temporal_period"}},[s("code",[e._v("aggregate_temporal_period")])]),e._v(": a weekly time series may be aggregated to monthly values by computing the "),s("code",[e._v("mean")]),e._v(" for all values in a month (grouping predicate: month)")],1),e._v(" "),s("li",[s("RouterLink",{attrs:{to:"/documentation/1.0/processes.html#aggregate_spatial"}},[s("code",[e._v("aggregate_spatial")])]),e._v(": spatial aggregation that computes "),s("code",[e._v("mean")]),e._v(" pixel values for each country (grouping predicate: country area)")],1)])]),e._v(" "),s("h3",{attrs:{id:"resample-changing-data-cube-geometry"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#resample-changing-data-cube-geometry"}},[e._v("#")]),e._v(" resample: changing data cube geometry")]),e._v(" "),s("p",[e._v("Resampling - using the "),s("code",[e._v("resample_*")]),e._v(" processes - considers the case where we have data at one resolution and coordinate reference system, and need values at another. In case we have values at a 100 m x 100 m grid and need values at a 10 m x 10 m grid, the original values will be reused many times, and may be simply assigned to the nearest high resolution grid cells (nearest neighbor method), or may be interpolated using various methods (e.g. by bilinear interpolation). This is often called "),s("em",[e._v("upsampling")]),e._v(" or "),s("em",[e._v("upscaling")]),e._v(".")]),e._v(" "),s("p",[e._v("Resampling from finer to coarser grid is a special case of aggregation often called "),s("em",[e._v("downsampling")]),e._v(" or "),s("em",[e._v("downscaling")]),e._v(".")]),e._v(" "),s("p",[e._v("When the target grid or time series has a lower resolution (larger grid cells) or lower frequency (longer time intervals) than the source grid, aggregation might be used for resampling. For example, if the resolutions are similar, (e.g. the source collection provides 10 day intervals and the target needs values for 16 day intervals), then some form of interpolation may be more appropriate than aggregation as defined here.")]),e._v(" "),s("p",[e._v("Another use case of resampling in openEO is to change the projection of the data cube.")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Examples")]),e._v(" "),s("ul",[s("li",[e._v("Simplified:\n"),s("ul",[s("li",[s("code",[e._v("resample(🖼️, downscale) =>🟦")])]),e._v(" "),s("li",[s("code",[e._v("resample(🌍, reproject) => 🗺️")])])])]),e._v(" "),s("li",[e._v("Downsample from 1 meter resolution to 100 meter resolution")]),e._v(" "),s("li",[e._v("Upsample from 20 meter resolution to 10 meter resolution")]),e._v(" "),s("li",[e._v("Reproject from WGS84 to Web Mercator projection")])])]),e._v(" "),s("h3",{attrs:{id:"coordinate-reference-system-as-a-data-cube-dimension"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coordinate-reference-system-as-a-data-cube-dimension"}},[e._v("#")]),e._v(" Coordinate reference system as a data cube dimension")]),e._v(" "),s("p",[e._v("In the data cube example above, "),s("em",[e._v("x")]),e._v(" and "),s("em",[e._v("y")]),e._v(" dimension values have a "),s("em",[e._v("unique")]),e._v(" relationship to world coordinates through their coordinate reference system (crs). This implies that a single coordinate reference system is associated with these "),s("em",[e._v("x")]),e._v(" and "),s("em",[e._v("y")]),e._v(" dimensions. If we want to create a data cube from multiple tiles spanning different coordinate reference systems (e.g. Sentinel-2: different UTM zones), we would "),s("em",[e._v("have")]),e._v(" to resample/warp those to a single coordinate reference system. In many cases, this is wanted because we want to be able to "),s("em",[e._v("look")]),e._v(" at the result, meaning it is available in a single coordinate reference system.")]),e._v(" "),s("p",[e._v("Resampling is however costly, involves (some) data loss, and is in general not reversible. Suppose that we want to work only on the spectral and temporal dimensions of a data cube, and do not want to do any resampling. In that case, one could create one data cube for each coordinate reference system. An alternative would be to create one "),s("em",[e._v("single")]),e._v(" data cube containing all tiles that has an "),s("em",[e._v("additional dimension")]),e._v(" with the coordinate reference system. In that data cube, "),s("em",[e._v("x")]),e._v(" and "),s("em",[e._v("y")]),e._v(" no longer point to a unique world coordinate, because identical "),s("em",[e._v("x")]),e._v(" and "),s("em",[e._v("y")]),e._v(" coordinate pairs occur in each UTM zone. Now, only the combination ("),s("em",[e._v("x")]),e._v(", "),s("em",[e._v("y")]),e._v(", "),s("em",[e._v("crs")]),e._v(") has a uniqe relationship to the world coordinates.")]),e._v(" "),s("p",[e._v("On such a "),s("em",[e._v("crs-dimensioned data cube")]),e._v(", several operations make perfect sense, such as "),s("code",[e._v("apply")]),e._v(" or "),s("code",[e._v("reduce_dimension")]),e._v(" on spectral and/or temporal dimensions. A simple reduction over the "),s("code",[e._v("crs")]),e._v(" dimension, using "),s("em",[e._v("sum")]),e._v(" or "),s("em",[e._v("mean")]),e._v(' would typically not make sense. The "reduction" (removal) of the '),s("code",[e._v("crs")]),e._v(" dimension that is meaningful involves the resampling/warping of all sub-cubes for the "),s("code",[e._v("crs")]),e._v(" dimension to a single, common target coordinate reference system.")]),e._v(" "),s("h2",{attrs:{id:"user-defined-function-udf"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#user-defined-function-udf"}},[e._v("#")]),e._v(" User-defined function (UDF)")]),e._v(" "),s("p",[e._v("The abbreviation "),s("strong",[e._v("UDF")]),e._v(" stands for "),s("strong",[e._v("user-defined function")]),e._v(". With this concept, users are able to upload custom code and have it executed e.g. for every pixel of a scene, or applied to a particular dimension or set of dimensions, allowing custom server-side calculations. See the section on "),s("RouterLink",{attrs:{to:"/documentation/1.0/udfs.html"}},[e._v("UDFs")]),e._v(" for more information.")],1),e._v(" "),s("h2",{attrs:{id:"data-processing-modes"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-processing-modes"}},[e._v("#")]),e._v(" Data Processing modes")]),e._v(" "),s("p",[e._v("Processes can run in three different ways:")]),e._v(" "),s("ol",[s("li",[e._v("Results can be pre-computed by creating a "),s("em",[s("strong",[e._v("batch job")])]),e._v(".  They are submitted to the back-end's processing system, but will remain inactive until explicitly put into the processing queue. They will run only once and store results after execution. Results can be downloaded. Batch jobs are typically time consuming and user interaction is not possible although log files are generated for them. This is the only mode that allows to get an estimate about time, volume and costs beforehand.")]),e._v(" "),s("li",[e._v("A more dynamic way of processing and accessing data is to create a "),s("strong",[e._v("secondary web service")]),e._v(". They allow web-based access using different protocols such as "),s("a",{attrs:{href:"http://www.opengeospatial.org/standards/wms",target:"_blank",rel:"noopener noreferrer"}},[e._v("OGC WMS"),s("OutboundLink")],1),e._v(" (Open Geospatial Consortium Web Map Service), "),s("a",{attrs:{href:"http://www.opengeospatial.org/standards/wcs",target:"_blank",rel:"noopener noreferrer"}},[e._v("OGC WCS"),s("OutboundLink")],1),e._v(" (Web Coverage Service) or "),s("a",{attrs:{href:"https://wiki.openstreetmap.org/wiki/Slippy_map_tilenames",target:"_blank",rel:"noopener noreferrer"}},[e._v("XYZ tiles"),s("OutboundLink")],1),e._v(". These protocols usually allow users to change the viewing extent or level of detail (zoom level). Therefore, computations often run "),s("em",[e._v("on demand")]),e._v(" so that the requested data is calculated during the request. Back-ends should make sure to cache processed data to avoid additional/high costs and reduce waiting times for the user.")]),e._v(" "),s("li",[e._v("Processes can also be executed "),s("strong",[e._v("on-demand")]),e._v(" (i.e. synchronously). Results are delivered with the request itself and no job is created. Only lightweight computations, for example previews, should be executed using this approach as timeouts are to be expected for "),s("a",{attrs:{href:"https://www.pubnub.com/blog/2014-12-01-http-long-polling/",target:"_blank",rel:"noopener noreferrer"}},[e._v("long-polling HTTP requests"),s("OutboundLink")],1),e._v(".")])])])}),[],!1,null,null,null);t.default=o.exports}}]);