---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
author: victor_cuervo
---

Gracias a [CSS3](https://www.manualweb.net/css/) podemos redondear los bordes de los elementos. Y es que para redondear bordes con [CSS3](https://www.manualweb.net/css/) utilizaremos la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/).


La sintaxis general de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) es la siguiente:


```css
border-radius: [tamaño|porcentaje];
```


De esta forma podemos indicar **el tamaño o porcentaje** en el que se redondeará cada una de las esquinas de la capa. El valor corresponde con el radio de la circunferencia trazada en la esquina.


Así, si utilizamos:


```css
border-radius: 15px;
```


Veremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUIZLDZB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSKSCe9pg7RRDig1LQuvN0Li%2FVEi%2FxcUe4%2FdoGa8rsEAiEAgXK3N4U3Ld0hs1ofp0DtIW5ssbDh6CKSTgcA2kGBm3sq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNwtCNh5lD36DuTCUyrcAysOHwS2VJGvpZtPE4GvPmOozoJ107bUG10hJLYMh41DOxQCyvtoNMf3LazDAMLBcoRebfQA1h7HfSULIAy8YfMvJIdB0qm1%2Bh8XQuhQN3BlI411Ssi1XzS6U%2F6JOliF4OrV4NXlY2RDxJd1vXhms26Dh6z0gOpk8kn5wu0NSG%2BpSdBqPH4vbzRedYJ2J06L%2BLNuHY4petFaGGumc0c4JEQPXB9A7WeJ30NLr2rO8ug8nLV4CimeCX7GUtW3nHSpkaFwoJVDubGtz4BxlPI7HGuyteN7lBdyhjYGuTOyRqdljyTpASdukkfSEiiZHI%2FspfE4RbEpBTIMU8cMf%2FrElvEZUNAmOGnXr%2F6gHFexfyglIvUMKA1SPJLjWeb53%2BTBVQ%2FOEYVWMG4fE45GZjanT1VhUbc02GuWhAZh%2BHNW2HNngFkEGWZknjYWJnGB%2BgW2HT1k4Uq2p0y0kip4dz0yGK2WBuwBNzyHJh6xYeiCFJjdhqSv2%2FcvTKF4HPNS8Re1%2FhR1pTujhEUDyI7SHJLT%2FeegVd8OVfxzaJNgeRRhnh1dlOKBPyGSSEfMElMECta3DrQh3CF5ulb4xRjYfswU5KGJB3FYzhoMTcPgM2SFm%2FEFSFpeTNLnkegVQuatMNrpiMoGOqUBvCtn4m7c4hL5L9Cz7JeHRSaotrixZlBKA3IwPv3rbebiv6MUzVFlv0Ex%2Ftwgf797ZExBQuRnwkD9%2FOkX05OgoC%2BxtL9Qqaj7%2B8Km5VPW8gVNebrazgDhUQDugj%2F6qjA7xPOPEwDjHoeYeuI41sWVxlsXwAs%2FXsb3Y4tcerGl2lOxqMIwwOAzGn0vk1hn4AA34ALBhtpWO1duCO7BzfaE05sQNcOF&X-Amz-Signature=36cb4828aa3e04881da66bd2b89ee3d3f898cf422722021de50fa37e5a78786a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Podemos especificar un radio para cada una de las esquinas. En este caso se aplicará el orden de las agujas del reloj, empezado por la esquina superior izquierda, siguiendo por la esquina superior derecha, esquina inferior derecha y esquina inferior izquierda.


```css
border-radius: 5px 30px 45px 60px;
```


Si bien tenemos la capacidad de indicar el tamaño de cada de las esquinas por separado mediante las propiedades: border-top-left-radius, border-bottom-left-radius, border-top-right-radius y border-bottom-right-radius.


```css
border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Cuando identificamos los radios de las esquinas por separado podemos indicar de forma diferente los dos radios que conforman la esquina. Por ejemplo, podríamos modificar la esquina superior izquierda de la siguiente forma:


```css
border-top-left-radius: 400px 200px;
```


Y obtendremos el siguiente resultado:


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UUIZLDZB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045529Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGSKSCe9pg7RRDig1LQuvN0Li%2FVEi%2FxcUe4%2FdoGa8rsEAiEAgXK3N4U3Ld0hs1ofp0DtIW5ssbDh6CKSTgcA2kGBm3sq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDNwtCNh5lD36DuTCUyrcAysOHwS2VJGvpZtPE4GvPmOozoJ107bUG10hJLYMh41DOxQCyvtoNMf3LazDAMLBcoRebfQA1h7HfSULIAy8YfMvJIdB0qm1%2Bh8XQuhQN3BlI411Ssi1XzS6U%2F6JOliF4OrV4NXlY2RDxJd1vXhms26Dh6z0gOpk8kn5wu0NSG%2BpSdBqPH4vbzRedYJ2J06L%2BLNuHY4petFaGGumc0c4JEQPXB9A7WeJ30NLr2rO8ug8nLV4CimeCX7GUtW3nHSpkaFwoJVDubGtz4BxlPI7HGuyteN7lBdyhjYGuTOyRqdljyTpASdukkfSEiiZHI%2FspfE4RbEpBTIMU8cMf%2FrElvEZUNAmOGnXr%2F6gHFexfyglIvUMKA1SPJLjWeb53%2BTBVQ%2FOEYVWMG4fE45GZjanT1VhUbc02GuWhAZh%2BHNW2HNngFkEGWZknjYWJnGB%2BgW2HT1k4Uq2p0y0kip4dz0yGK2WBuwBNzyHJh6xYeiCFJjdhqSv2%2FcvTKF4HPNS8Re1%2FhR1pTujhEUDyI7SHJLT%2FeegVd8OVfxzaJNgeRRhnh1dlOKBPyGSSEfMElMECta3DrQh3CF5ulb4xRjYfswU5KGJB3FYzhoMTcPgM2SFm%2FEFSFpeTNLnkegVQuatMNrpiMoGOqUBvCtn4m7c4hL5L9Cz7JeHRSaotrixZlBKA3IwPv3rbebiv6MUzVFlv0Ex%2Ftwgf797ZExBQuRnwkD9%2FOkX05OgoC%2BxtL9Qqaj7%2B8Km5VPW8gVNebrazgDhUQDugj%2F6qjA7xPOPEwDjHoeYeuI41sWVxlsXwAs%2FXsb3Y4tcerGl2lOxqMIwwOAzGn0vk1hn4AA34ALBhtpWO1duCO7BzfaE05sQNcOF&X-Amz-Signature=47ea935ebcc30b72bc30dc9dd2405651aef62f323649559888d7c841fd567899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
border-radius: [tamaño|porcentaje] {1,4} [tamaño|porcentaje] {1,4};
```


Por último tenemos que ser conscientes del soporte de la propiedad [`border-radius`](https://w3api.com/CSS/border-radius/) de [CSS3](https://www.manualweb.net/css/). Ya que no todos los navegadores van a poder ejecutarla. En esos casos, los bordes que hayamos redondeado no se verán.


La implementación de [`border-radius`](https://w3api.com/CSS/border-radius/) que hemos visto es la de la [W3C](https://w3.org/). Hay implementaciones propietarias en los motores de renderizado de los browsers. Este es el caso de [Mozilla Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/). Dónde las propiedades para redondear los borders con [CSS](https://www.manualweb.net/css/) están especificadas como:


```css
-moz-border-radius: [tamaño|porcentaje];
-moz-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-moz-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


En el caso de Webkit (sería, por ejemplo, para versiones antiguas de [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/)) se soportaba mediante el prefijo `-webkit`:


```css
-webkit-border-radius: [tamaño|porcentaje];
-webkit-border-top-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-left-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-top-right-radius: [tamaño|porcentaje] [tamaño|porcentaje];
-webkit-border-bottom-right-radius: [tamaño|porcentaje] [tamaño|porcentaje;
```


Por lo cual, si queremos buscar compatibilidad con nuestros ejemplos anteriores podemos poner lo siguiente:


```css
border-radius: 15px;
-moz-border-radius: 15px;
-webkit-border-radius: 15px;
```


```css
border-radius: 5px 30px 45px 60px;
-moz-border-radius: 5px 30px 45px 60px;
-webkit-border-radius: 15px;
```


```css
border-top-left-radius: 400px 200px;
-moz-border-top-left-radius: 400px 200px;
-webkit-border-radius: 15px;
```


Los navegadores a partir de los cuales se empezó a dar soporte a [`border-radius`](https://w3api.com/CSS/border-radius/) son:

- [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 0.2 (con -webkit) y [Chrome](https://ayudaenlaweb.com/navegadores/que-es-chrome/) 4.0 (con el estándar)
- [Opera](https://ayudaenlaweb.com/navegadores/que-es-opera/) 10.5
- [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 3.0 (con -webkit) y [Safari](https://ayudaenlaweb.com/navegadores/que-es-safari/) 5.0 (con el estándar)
- [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 1.0 (con -moz) y [Firefox](https://www.ayudaenlaweb.com/navegadores/que-es-firefox/) 4.0 (con el estándar)
- [Internet Explorer](https://ayudaenlaweb.com/navegadores/que-es-internet-explorer/) 9
