---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645MSUN6T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuLnKNED2N%2F9oj5rKIHd0gZGoPgYEH%2FTXyaqKdDQhbqQIgGP2IInyaDhOSqzS%2BJXre92QGYB5E6lK2%2F8wj%2BdZtTnAq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDAKcH6bSGGnKfiSX6ircA9wNuxpZcSKy%2B0001tRZhaT3FR1%2FdQARfoGMWqON6O0MUiTpVtMrTrftNmwpR68IlL6CAP2lr1lf3rxx6xmk5axqmDrXeZq7UtG5JoE0nDEpcGgTeRzd5L7%2B7qdfQ%2BABg8PR6LJD4yJTIFPqNM4ravFRLtRFAAc%2BRLj2Sds1ldCePr9kdwiLqnLYgL%2BZqPy9%2F3Kc9uIkFGVJqnKa%2FzIUCccDxf5sg1jVUgZs4aig2wY9IB8wEZcoNpG5ug25GNVDXldJTtup13PEdFDlmfWrJY%2FSM8oGHXRrYD%2FIapUu%2Fz2cylXinQQzA0z5By3RpeZBq59qywMu%2B2wIEfgCTbSZbdboYwzmx005sTPatGJrWM55aeyut8yMKDozj8M%2B8Y%2B5oLQaZftk39gXrnEcL7vxR7IGo8sczM%2BfBBRiN1C0dW%2BpViruEq%2BcuckCgZVxZafQ2n6n5HPvvlFTJ8KogiThUt9w7RIVGZRsQ7pqdOuqienHj2bUlMcNwCYTVs11B%2FKVGJeKd0wJOoNZLDiXQQ1E2F9fWltnh5agLqhxyUZM4N8cSpGf%2BEmQ0j7mIqjOcruEpVGo2M%2F29OLQvQqt21%2BKui27PfH%2Bhhuo%2BxTD%2BWpnuziU0osvVcLBzACGGmwvMM%2FbxskGOqUBd32qaZpL6ZzwLinTuyyOzouYiN8iighZvZqZtowEOhYzZHozqJfTsLxGLeK%2FT8ureTqXI3WdkVBdoGFfS01lgjCDSdqa6a4nHtiTHDvLZ2sMmGpNdC0x0oehegWpkrl0KUu2BSnk5XABreE%2Fca4M4UP84hv0iOrPyD3iP1fwwDUkrfe6KPIuDGDDchNLDy0AkJwKFva7DItwym8HtioOy%2FQ%2FqIcl&X-Amz-Signature=0c8b95a9f3c3abc0f752af707047049bc5231b0b129ea0610f4e5a31617a7e1f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645MSUN6T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T155746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuLnKNED2N%2F9oj5rKIHd0gZGoPgYEH%2FTXyaqKdDQhbqQIgGP2IInyaDhOSqzS%2BJXre92QGYB5E6lK2%2F8wj%2BdZtTnAq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDAKcH6bSGGnKfiSX6ircA9wNuxpZcSKy%2B0001tRZhaT3FR1%2FdQARfoGMWqON6O0MUiTpVtMrTrftNmwpR68IlL6CAP2lr1lf3rxx6xmk5axqmDrXeZq7UtG5JoE0nDEpcGgTeRzd5L7%2B7qdfQ%2BABg8PR6LJD4yJTIFPqNM4ravFRLtRFAAc%2BRLj2Sds1ldCePr9kdwiLqnLYgL%2BZqPy9%2F3Kc9uIkFGVJqnKa%2FzIUCccDxf5sg1jVUgZs4aig2wY9IB8wEZcoNpG5ug25GNVDXldJTtup13PEdFDlmfWrJY%2FSM8oGHXRrYD%2FIapUu%2Fz2cylXinQQzA0z5By3RpeZBq59qywMu%2B2wIEfgCTbSZbdboYwzmx005sTPatGJrWM55aeyut8yMKDozj8M%2B8Y%2B5oLQaZftk39gXrnEcL7vxR7IGo8sczM%2BfBBRiN1C0dW%2BpViruEq%2BcuckCgZVxZafQ2n6n5HPvvlFTJ8KogiThUt9w7RIVGZRsQ7pqdOuqienHj2bUlMcNwCYTVs11B%2FKVGJeKd0wJOoNZLDiXQQ1E2F9fWltnh5agLqhxyUZM4N8cSpGf%2BEmQ0j7mIqjOcruEpVGo2M%2F29OLQvQqt21%2BKui27PfH%2Bhhuo%2BxTD%2BWpnuziU0osvVcLBzACGGmwvMM%2FbxskGOqUBd32qaZpL6ZzwLinTuyyOzouYiN8iighZvZqZtowEOhYzZHozqJfTsLxGLeK%2FT8ureTqXI3WdkVBdoGFfS01lgjCDSdqa6a4nHtiTHDvLZ2sMmGpNdC0x0oehegWpkrl0KUu2BSnk5XABreE%2Fca4M4UP84hv0iOrPyD3iP1fwwDUkrfe6KPIuDGDDchNLDy0AkJwKFva7DItwym8HtioOy%2FQ%2FqIcl&X-Amz-Signature=041605212088adbe0c53911b95ca1dde03e389bd0295cda7cc99165428a5845e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
