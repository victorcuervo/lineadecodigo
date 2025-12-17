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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMHUDE6X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1WbtgMI3KRD2oH%2FKTFbb4HTffQcOq%2FJFBLtkqrwYbeAiEA6F7DwLWydDf4eDWJq5KjVHlfXJtUMcdv%2B%2Fz66ki1uKEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFJhVieDiG1%2BW87wEircA%2FRm0k7ktQCz%2BZxaDiL%2BfVukexLAkXFDHuvU3DnOT2wlKOCMRatEdeKOuFXM0A8lviCJL5bZwDjlazJRsOKYHYwqigDAWGQ1QbmEpDde%2BZnxOgFjm%2FI7xWU%2FvoRGrOKwQj3QyCuvVuqT6kjRIKllopLGvv3%2Fv7OaCrj7B6N7CEETJzxEDWOER0q0S1fjFTH%2BZCkQcTGYLJh7HN%2BtDWQBpLdG%2BirRyJ7lzb326gDapHr7lmaIWc8awXb%2FWufZlH460JJhWd3u%2F7lsNzQ90iLG5upLCqx7eZ4wxgAKdpxf%2BuA%2FriIC85TnCdlQ6wUcnIvYBrR%2Fm9KJKYCe0dziXFVVG%2BHpcmW%2FDPb9k6UUDsP%2BP3OP4o7rWduH3L%2Bnq5O7Urc3O0v8mr59F7GWT4uRXGf3yBna64KZQ34eMAR3Ua2m3e8nJwMsQPKnUn0WIbLheGMyutf%2Bykwlxg5aPN21%2FNmcUXVXfMBjCxmbNsNws1rbIcFAX%2Ft%2BPtTzc%2Fj2hO9jwb0b9rDkKpg3G2SPjAx%2BzI%2F72hQqawSPbnDNc8z6xnvLDelYUUbI8RYduoIhfxPTcxUQvfsRH6J6V4zW2v8MvE8tCJ71jF%2BiC0YsU83BaSdJMS72gagtdwN8RVkeWUbwMPzOiMoGOqUBIp8vYATwvqvNQ%2By%2FrJ4pwiDdpSV5cWBGSAm0FmGwbbe4m3U8ZXmBUXwsusqEFCJaL2R%2FmN0Ba2tZcuGUqg5%2F%2BCIiZx7kIJes23cWaeT4JoZ3OIyj25CTMcaVWFq3sJklnGlCESr1rLsraSXbN%2BRMQTbBve9ahmNNKWlFZpJXBDJ6AHDpjEPQgdlthprX3cDw4yLRkVYX4pT0OqeAmxwlHB18SKZr&X-Amz-Signature=210ba1ee1f9e166af5d3ef8e6cb2812e5a66f54624baeb644fadf033eb3cfbb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZMHUDE6X%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T040947Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE1WbtgMI3KRD2oH%2FKTFbb4HTffQcOq%2FJFBLtkqrwYbeAiEA6F7DwLWydDf4eDWJq5KjVHlfXJtUMcdv%2B%2Fz66ki1uKEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDFJhVieDiG1%2BW87wEircA%2FRm0k7ktQCz%2BZxaDiL%2BfVukexLAkXFDHuvU3DnOT2wlKOCMRatEdeKOuFXM0A8lviCJL5bZwDjlazJRsOKYHYwqigDAWGQ1QbmEpDde%2BZnxOgFjm%2FI7xWU%2FvoRGrOKwQj3QyCuvVuqT6kjRIKllopLGvv3%2Fv7OaCrj7B6N7CEETJzxEDWOER0q0S1fjFTH%2BZCkQcTGYLJh7HN%2BtDWQBpLdG%2BirRyJ7lzb326gDapHr7lmaIWc8awXb%2FWufZlH460JJhWd3u%2F7lsNzQ90iLG5upLCqx7eZ4wxgAKdpxf%2BuA%2FriIC85TnCdlQ6wUcnIvYBrR%2Fm9KJKYCe0dziXFVVG%2BHpcmW%2FDPb9k6UUDsP%2BP3OP4o7rWduH3L%2Bnq5O7Urc3O0v8mr59F7GWT4uRXGf3yBna64KZQ34eMAR3Ua2m3e8nJwMsQPKnUn0WIbLheGMyutf%2Bykwlxg5aPN21%2FNmcUXVXfMBjCxmbNsNws1rbIcFAX%2Ft%2BPtTzc%2Fj2hO9jwb0b9rDkKpg3G2SPjAx%2BzI%2F72hQqawSPbnDNc8z6xnvLDelYUUbI8RYduoIhfxPTcxUQvfsRH6J6V4zW2v8MvE8tCJ71jF%2BiC0YsU83BaSdJMS72gagtdwN8RVkeWUbwMPzOiMoGOqUBIp8vYATwvqvNQ%2By%2FrJ4pwiDdpSV5cWBGSAm0FmGwbbe4m3U8ZXmBUXwsusqEFCJaL2R%2FmN0Ba2tZcuGUqg5%2F%2BCIiZx7kIJes23cWaeT4JoZ3OIyj25CTMcaVWFq3sJklnGlCESr1rLsraSXbN%2BRMQTbBve9ahmNNKWlFZpJXBDJ6AHDpjEPQgdlthprX3cDw4yLRkVYX4pT0OqeAmxwlHB18SKZr&X-Amz-Signature=ba1082b4e054e1a51d768d3ba22d3e9ec57c6c5a411495f2921a13d4b8a81f67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
