---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
slug: /css/redondear-bordes-con-css/
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZHQZIH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAK1h3DmuZpNrYSZyDpbcM9%2BBIbHotjBFrhGWARCMoQpAiBvIs0r%2FCwnqpEpH2xbx7%2FHH8hfRlrltSEuiAA0dvZcRyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM77nGYZV26Sa81RtCKtwDB7TmfHTItILigO86IUGBVQEt%2Fu2bmtb42OqsKQFKIcO%2F928QcEo9iztJlCTNalKMW5vRXU2VKsCimLh4KiQ7MDr5lhIL5%2BlVcoSIZ0kvf8aU5n7VtWXirZ%2F9rYDPsIP%2Bc61MCglFZNPaX62KB3rJiE6B9VZQZtbVNUIzXXLEIP9nxRG%2BZ%2FcNhFSfyNF6JU0xeqoK4ZB%2Fhu16HV1pZWRiOJNcpEQ%2BlQIqPEVOkv5DNw9Y9ehKlVzrOxpxpQRYIxiWXbQX93wRX2XldU8WrARUeFdfP4KETzxoZIlTSqUObsNI6sDD7AqcoR%2Bl9l7dyou2kK8noVxQfGgO3mASjzYoRIiQrwrcYFKnpyDOLPiS86pCXZoOReuyb%2FLV21zcpecNNImImbX9kRo1eDHufplx7pc%2BuPnIZX4a%2FqdKcJv6YEwFgR%2FwYN3XrHoWYLu%2FR9IQ9B5TyipaoDk%2BeAneweCTReHK5PJZVHfSe1znTMMcvrHxEOauxUwJzy1d1AEz2P%2Flu2jvaPEmtfqumpFeJYCZDeaGvW8iELPtOja5%2FYuzIpOC2uDCnVvDUPfwG7xrSFoqMka45nUOdxUPH3OP5KSC5pGIEOijQjln7mdIwwo4EU4K2Tf%2FuqL99xHtbwAwm9TSyQY6pgEDaw599ddXa9QwmJOqQJRTj36r2u6qgHysI2qP8sFiUzqsNlFGdSByfaW%2Fof%2F%2Bk5ooT7I8%2FySm%2FQZRiT1bTIf3J8Xt%2BfxSs6OuluHuJS4EqbJUY%2FALziyo2HTDi%2BLh6oc14OqYjU5j6WWU%2BZ1ocABYV20IddDkIYO1Gwst9x2zF9XcH80rZICkl6FBq4AW%2FnQF19IjQnp%2BYpqXbqAiZdG6paNk0Ji8&X-Amz-Signature=26885428d6fac38efb2db6e7c2146ae90bcd2b54d0ff2f15da122426999a0e0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EZHQZIH%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T222601Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAK1h3DmuZpNrYSZyDpbcM9%2BBIbHotjBFrhGWARCMoQpAiBvIs0r%2FCwnqpEpH2xbx7%2FHH8hfRlrltSEuiAA0dvZcRyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIM77nGYZV26Sa81RtCKtwDB7TmfHTItILigO86IUGBVQEt%2Fu2bmtb42OqsKQFKIcO%2F928QcEo9iztJlCTNalKMW5vRXU2VKsCimLh4KiQ7MDr5lhIL5%2BlVcoSIZ0kvf8aU5n7VtWXirZ%2F9rYDPsIP%2Bc61MCglFZNPaX62KB3rJiE6B9VZQZtbVNUIzXXLEIP9nxRG%2BZ%2FcNhFSfyNF6JU0xeqoK4ZB%2Fhu16HV1pZWRiOJNcpEQ%2BlQIqPEVOkv5DNw9Y9ehKlVzrOxpxpQRYIxiWXbQX93wRX2XldU8WrARUeFdfP4KETzxoZIlTSqUObsNI6sDD7AqcoR%2Bl9l7dyou2kK8noVxQfGgO3mASjzYoRIiQrwrcYFKnpyDOLPiS86pCXZoOReuyb%2FLV21zcpecNNImImbX9kRo1eDHufplx7pc%2BuPnIZX4a%2FqdKcJv6YEwFgR%2FwYN3XrHoWYLu%2FR9IQ9B5TyipaoDk%2BeAneweCTReHK5PJZVHfSe1znTMMcvrHxEOauxUwJzy1d1AEz2P%2Flu2jvaPEmtfqumpFeJYCZDeaGvW8iELPtOja5%2FYuzIpOC2uDCnVvDUPfwG7xrSFoqMka45nUOdxUPH3OP5KSC5pGIEOijQjln7mdIwwo4EU4K2Tf%2FuqL99xHtbwAwm9TSyQY6pgEDaw599ddXa9QwmJOqQJRTj36r2u6qgHysI2qP8sFiUzqsNlFGdSByfaW%2Fof%2F%2Bk5ooT7I8%2FySm%2FQZRiT1bTIf3J8Xt%2BfxSs6OuluHuJS4EqbJUY%2FALziyo2HTDi%2BLh6oc14OqYjU5j6WWU%2BZ1ocABYV20IddDkIYO1Gwst9x2zF9XcH80rZICkl6FBq4AW%2FnQF19IjQnp%2BYpqXbqAiZdG6paNk0Ji8&X-Amz-Signature=0bb189c1200223834f518e42ad9bc33c72c69dbcb32649118263f2ee34a11979&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```text
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


```text
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
