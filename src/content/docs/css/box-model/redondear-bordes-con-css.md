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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSLZS2K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrRhmvFmrlv4%2FjYyjIkdOtTAbrilBfcgnmbZV8IOCUTAiBR9lsjk%2FSH%2FhBWa%2Bf0eG%2FmTkqbFB%2BWJW8p8CPrgQ2uESr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMX8YVdPdAz6ROtQNDKtwDGsE8hL95GoyWCy1Dp0QVMEJIKZJ%2F3G%2BqQsd9WckNC%2FGD%2Bxy6VRI%2B15LdAYSHN6cx%2FEENjcl%2BA80gcb%2BtYrPBxlYwfgOd02dtKGkBCeoJ1M33kbbkWA80D%2FwCrvHyCD7g%2Bp6J7941CU3zkLkVKXitYmk0YSn6X8wJb8j4t5h0WESklt0wpvm7CRJLemf%2FagwVSdocN%2Bj%2FnCBw1ttPxykoGzD9W5a3bDsHXCLIoBBF%2FzwEfFUhty%2Fy5DI6ydOpHlt7TZNaz2Ul1Yr%2B%2BfKdaQb2F5ohWeKa0gamP%2FQlanxiA9YUV9ogzVuIA%2BLVR4oPhH%2F0TuhfjCj%2FWk73JKlXXZtH1RJvSiVz%2BJmOj4RQg5fcRNFg91SgiiZD9vDOYrsnUEMTqk567bF4GC4V6pXx9o%2F6nBi%2FhgKIGSjrJbPyikXIpTpyDw%2Bj0W1QUoAGMe2934T%2B3xHLpyhTtBbBk%2B6CpAa5SBGgqqh7egZTIca8e8A6lT%2BheFgtpbe46P4m4wHM%2F%2BMiyRlL1ifJtPsf%2BbaxkFNvmM1WZ0MQ1q6S6dsdDo2P%2Bv6CSz8g%2BWdq3cYtWtMETc5Xtz4TRtE7gn8aqRkIOypgf0w1yb4aLrW69Q7inc7Zh8LLJZiQ9u0IXg6Ds3QwpOGKygY6pgGZe2aJsv8zEGjAZOf3QICKHqAuEjF1BETtbqGY%2BZiAdcCHa%2BS9LxGVWV%2BZFfwpXrWFziv4EAlMTIfzJEWHaKa6BdXsz5%2B%2F%2Fr5gZve9lxuGd7sc8S2X%2FXGcjbz%2B%2BlAGMi%2BwDcrb0IoTYun14oFM2RRZQ7AB0ywIDk3uzihoWm%2Bd6Wq97yOug78w290vNTi%2B0XZHriTYQFcaA3bCTBE8x6brppnj8nVd&X-Amz-Signature=6abe1fdce6ac6ab89f728714fdf8683dc4661cdd548de014c1d2180a35b7c632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SSLZS2K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrRhmvFmrlv4%2FjYyjIkdOtTAbrilBfcgnmbZV8IOCUTAiBR9lsjk%2FSH%2FhBWa%2Bf0eG%2FmTkqbFB%2BWJW8p8CPrgQ2uESr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMX8YVdPdAz6ROtQNDKtwDGsE8hL95GoyWCy1Dp0QVMEJIKZJ%2F3G%2BqQsd9WckNC%2FGD%2Bxy6VRI%2B15LdAYSHN6cx%2FEENjcl%2BA80gcb%2BtYrPBxlYwfgOd02dtKGkBCeoJ1M33kbbkWA80D%2FwCrvHyCD7g%2Bp6J7941CU3zkLkVKXitYmk0YSn6X8wJb8j4t5h0WESklt0wpvm7CRJLemf%2FagwVSdocN%2Bj%2FnCBw1ttPxykoGzD9W5a3bDsHXCLIoBBF%2FzwEfFUhty%2Fy5DI6ydOpHlt7TZNaz2Ul1Yr%2B%2BfKdaQb2F5ohWeKa0gamP%2FQlanxiA9YUV9ogzVuIA%2BLVR4oPhH%2F0TuhfjCj%2FWk73JKlXXZtH1RJvSiVz%2BJmOj4RQg5fcRNFg91SgiiZD9vDOYrsnUEMTqk567bF4GC4V6pXx9o%2F6nBi%2FhgKIGSjrJbPyikXIpTpyDw%2Bj0W1QUoAGMe2934T%2B3xHLpyhTtBbBk%2B6CpAa5SBGgqqh7egZTIca8e8A6lT%2BheFgtpbe46P4m4wHM%2F%2BMiyRlL1ifJtPsf%2BbaxkFNvmM1WZ0MQ1q6S6dsdDo2P%2Bv6CSz8g%2BWdq3cYtWtMETc5Xtz4TRtE7gn8aqRkIOypgf0w1yb4aLrW69Q7inc7Zh8LLJZiQ9u0IXg6Ds3QwpOGKygY6pgGZe2aJsv8zEGjAZOf3QICKHqAuEjF1BETtbqGY%2BZiAdcCHa%2BS9LxGVWV%2BZFfwpXrWFziv4EAlMTIfzJEWHaKa6BdXsz5%2B%2F%2Fr5gZve9lxuGd7sc8S2X%2FXGcjbz%2B%2BlAGMi%2BwDcrb0IoTYun14oFM2RRZQ7AB0ywIDk3uzihoWm%2Bd6Wq97yOug78w290vNTi%2B0XZHriTYQFcaA3bCTBE8x6brppnj8nVd&X-Amz-Signature=2ae07e3a8a4c402f6b7fa287d66cdfa589330fb2f2f0d15ebeb8d5f9d87daad6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
