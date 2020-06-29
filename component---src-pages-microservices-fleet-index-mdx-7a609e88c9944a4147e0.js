(window.webpackJsonp=window.webpackJsonp||[]).push([[33],{mKPe:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return u}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var a=n("7ljp"),r=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e}).apply(this,arguments)}var i={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(a.b)("div",t)}},p=l("InlineNotification"),c=l("PageDescription"),b=l("AnchorLinks"),s=l("AnchorLink"),m={_frontmatter:i},d=r.a;function u(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(a.b)(d,o({},m,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)(p,{kind:"warning",mdxType:"InlineNotification"},"UNDER CONSTRUCTION - TBD Needs Topic & Event Specifics"),Object(a.b)(c,{mdxType:"PageDescription"},'This microservice is responsible to support simulation of fleet of container carrier vessels. It used for demonstration purpose, but it is still using an event-driven microservice implementation approach. It supports the event, actors, and commands discovered during the event storming workshop and illustrated by the following figure for the "ship actor".'),Object(a.b)(b,{mdxType:"AnchorLinks"},Object(a.b)(s,{mdxType:"AnchorLink"},"Overview"),Object(a.b)(s,{mdxType:"AnchorLink"},"Build"),Object(a.b)(s,{mdxType:"AnchorLink"},"Run"),Object(a.b)(s,{mdxType:"AnchorLink"},"Usage Details")),Object(a.b)("h2",null,"Overview"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Description:")," The service exposes simple a REST API to support acquiring ship and fleet information, while also providing simulation control to emulate ship movements and container metrics event generation. When a ship leaves or enters a port, it will also generate the events as listed in the ",Object(a.b)("a",o({parentName:"p"},{href:"/refarch-kc/implementation/event-storming-analysis/"}),"Event Storming Analysis")," and ",Object(a.b)("a",o({parentName:"p"},{href:"/refarch-kc/implementation/domain-driven-design/"}),"Domain-Driven Design")," results."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Github repository:")," ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-ms"}),"refarch-kc-ms")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Folder:")," ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-ms/tree/master/fleet-ms"}),"fleet-ms")),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kafka topics consumed from:")," TBD"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Kafka topics produced to:")," TBD"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events reacted to:")," TBD"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Events produced:")," TBD"),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"EDA Patterns implemented:")," TBD"),Object(a.b)("h2",null,"Build"),Object(a.b)("p",null,"This microservice is built using the ",Object(a.b)("a",o({parentName:"p"},{href:"https://appsody.dev/"}),"Appsody")," development framework. The ",Object(a.b)("a",o({parentName:"p"},{href:"https://appsody.dev/docs/installing/installing-appsody"}),"Appsody CLI")," is a required prerequisite for building the application locally."),Object(a.b)("p",null,"Appsody will build the application by pulling the contents of the Appsody Stack it is based on and then performing the local application build inside the containerized environment:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"appsody build -t <yournamespace>/kcontainer-fleet-ms[:tag] [--push]")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can optionally specify a container tag. If left blank, ",Object(a.b)("inlineCode",{parentName:"li"},"latest")," will be used."),Object(a.b)("li",{parentName:"ul"},"You can optionally supply the ",Object(a.b)("inlineCode",{parentName:"li"},"--push")," flag to automatically push the built image to specified remote repository.")),Object(a.b)("p",null,"Performing an Appsody build will update the ",Object(a.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")," file in the same directory with current information for the application image, labels, and annotations fields."),Object(a.b)("h2",null,"Run"),Object(a.b)("h3",null,"Deployment parameters"),Object(a.b)("p",null,"The following deployment parameters are defined in the ",Object(a.b)("inlineCode",{parentName:"p"},"app-deploy.yaml")," file:"),Object(a.b)("table",null,Object(a.b)("thead",{parentName:"table"},Object(a.b)("tr",{parentName:"thead"},Object(a.b)("th",o({parentName:"tr"},{align:null}),"Name"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Required"),Object(a.b)("th",o({parentName:"tr"},{align:null}),"Description"))),Object(a.b)("tbody",{parentName:"table"},Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"KAFKA_BROKERS"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"YES"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Comma-separated list of Kafka brokers to connect to")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"KAFKA_APIKEY"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"NO"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"API Key used to connect to SASL-secured Kafka brokers. This is required when connecting to IBM Event Streams clusters.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"TRUSTSTORE_ENABLED"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"NO"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"Required to be set to ",Object(a.b)("inlineCode",{parentName:"td"},"true")," when connecting to IBM Event Streams on the IBM Cloud Pak for Integration (CP4I).")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"TRUSTSTORE_PATH"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"NO"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"The local path to the required truststore file when connecting to IBM Event Streams on CP4I. See ",Object(a.b)("a",o({parentName:"td"},{href:"#volume-mounts"}),Object(a.b)("strong",{parentName:"a"},"Volume Mounts"))," below.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"TRUSTSTORE_PWD"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"NO"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"The password for the truststore file used for IBM Event Streams server verification.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"KAFKA_SHIP_TOPIC_NAME"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"YES"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"The topic name used for communication relating to the ship  entity.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"KAFKA_CONTAINER_TOPIC_NAME"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"YES"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"The topic name used for communication relating to the containers entity.")),Object(a.b)("tr",{parentName:"tbody"},Object(a.b)("td",o({parentName:"tr"},{align:null}),"KAFKA_BW_PROBLEM_TOPIC_NAME"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"YES"),Object(a.b)("td",o({parentName:"tr"},{align:null}),"The topic name used for communication relating to the bluewater problems domain.")))),Object(a.b)("h3",null,"Volume Mounts"),Object(a.b)("p",null,"The Fleet Management microservice requires up to one file to be injected at runtime for proper operation. As noted in the ",Object(a.b)("inlineCode",{parentName:"p"},"TRUSTSTORE_PATH")," parameter above, these files are SSL-based certificates which are required to verfiy the identity of the external service when calling it. These files are provided as ",Object(a.b)("inlineCode",{parentName:"p"},'--docker-options "-v host-src:container-dest ..."')," when running the microservice locally and as a Volume Mount when running the microservice on a Kubernetes cluster."),Object(a.b)("p",null,"The ",Object(a.b)("inlineCode",{parentName:"p"},"TRUSTSTORE_PATH")," parameter is documented in the ",Object(a.b)("strong",{parentName:"p"},"Event Streams Certificates")," section of the ",Object(a.b)("a",o({parentName:"p"},{href:"/refarch-kc/microservices/prereqs/#ibm-event-streams-on-redhat-openshift-container-platform"}),"Prerequisites")," page. The Appsody run command should include a parameter similar to ",Object(a.b)("inlineCode",{parentName:"p"},"-v /Users/myuser/Downloads/es-cert.jks:/config/resources/security/es-ssl/es-cert.jks")," in its ",Object(a.b)("inlineCode",{parentName:"p"},"--docker-options")," string to run this microservice locally."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example:")," ",Object(a.b)("inlineCode",{parentName:"p"},'appsody run --docker-options "-v /Users/myuser/Downloads/es-cert.jks:/config/resources/security/es-ssl/es-cert.jks " ...')),Object(a.b)("h3",null,"Running the microservice locally"),Object(a.b)("p",null,"When running the microservice locally, you must specify all the required ",Object(a.b)("a",o({parentName:"p"},{href:"#deployment-parameters"}),"deployment parameters")," from above as environment variables via the ",Object(a.b)("inlineCode",{parentName:"p"},"--docker-options")," flag being passed in from the Appsody CLI command."),Object(a.b)("p",null,Object(a.b)("strong",{parentName:"p"},"Example:")," ",Object(a.b)("inlineCode",{parentName:"p"},'appsody run --docker-options "-e KAFKA_BROKERS=remotebroker1:9092,remotebroker2:9092 -e KAFKA_SHIP_TOPIC_NAME=ships -e KAFKA_CONTAINER_TOPIC_NAME=containers -v /Users/myuser/Downloads/es-cert.jks:/config/resources/security/es-ssl/es-cert.jks" ...')),Object(a.b)("p",null,"For more details on running the microservice locally, consult the ",Object(a.b)("a",o({parentName:"p"},{href:"https://appsody.dev/docs/using-appsody/local-development#appsody-local-development"}),"Appsody run documentation")," as well as the deployment information contained in the ",Object(a.b)("a",o({parentName:"p"},{href:"https://github.com/ibm-cloud-architecture/refarch-kc-ms/blob/master/fleet-ms/app-deploy.yaml"}),Object(a.b)("inlineCode",{parentName:"a"},"app-deploy.yaml"))," file."),Object(a.b)("h3",null,"Running the microservice remotely"),Object(a.b)("p",null,"The ",Object(a.b)("a",o({parentName:"p"},{href:"https://appsody.dev/docs/reference/appsody-operator/"}),"Appsody Operator")," is a required prerequisite for deploying the microservice to a remote Kubernetes or OpenShift cluster."),Object(a.b)("p",null,"To deploy the microservice to a remote cluster:"),Object(a.b)("p",null,Object(a.b)("inlineCode",{parentName:"p"},"appsody deploy <yournamespace>/kcontainer-fleet-ms[:tag] --no-build")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"You can omit the ",Object(a.b)("inlineCode",{parentName:"li"},"--no-build")," flag to have Appsody perform a build before deploying the application."),Object(a.b)("li",{parentName:"ul"},Object(a.b)("em",{parentName:"li"},Object(a.b)("strong",{parentName:"em"},"Note:"))," Performing a build at deploy time requires specifying the absolute container reference path, as well as the ",Object(a.b)("inlineCode",{parentName:"li"},"--push")," flag."),Object(a.b)("li",{parentName:"ul"},"The neccesary deployment parameter information will be read from the ",Object(a.b)("inlineCode",{parentName:"li"},"app-deploy.yaml")," file in the same directory.")),Object(a.b)("h2",null,"Usage Details"),Object(a.b)("h3",null,"REST APIs"),Object(a.b)("p",null,"TBD REST APIs documenation…"))}u.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-microservices-fleet-index-mdx-7a609e88c9944a4147e0.js.map