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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTTBI7DM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHye3vrODYsuhoGGaM%2Flpp5Uwj%2B81JPnIO%2BCyp%2FNZNpSAiEA6lkL%2BqN079X09e4vfsKHy6lM7O4dRxzPrWGntKCluTIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDA6gx8kQTHF44X%2BrrSrcA4yztzaFYnseIkcNgljEkxER9oYQf6LanY5K8fARSE%2F7zoJiGGUUfGrTN81lUO4KNf%2B0ICiTELT5fSI7klpkp996eYCKu1g6DKGvzi6ZxZ9hkxl9Z8v2%2B0aSvzqGBcBqk5U3Xb9uqxw%2BofJfKC7e4gKdBGre%2BURRDvJ1GxmsMeSTKzOwczFEKHAmyRVL4buuM7k0zYx%2FPsRAvpexQRTpIQgR4t%2FgQ9%2Bq6U7JNsAVtPoou4m%2BGJ7sPfFhcRCFyyEZcDe0C832MOV2YnsNoVf1kaHXbMCRu2%2B15lZ4%2BuymvD4v78nq4U%2BsQriT1jD7WkXnW8WXXrh%2FrUSweA7h6D1qaPwttVe33demqIcwnxZaAWew9ObPMOyVHYd1jLa8pACMR%2Bwp6ftexTC1PIj5z47Zi5L9sbRvBXzfEoZ3lnIfE5m9aOVuobyMFCJTnCtkWscB5QT6Rshyd%2F9HGtdC7GIcWzOITLIJFoGdwMy4DfClxlaSREomxoNHAs42Z6aRPhged9IX4lw5si3h%2Fvf71441t0KYmxF9Gvxz9qxIN1YQeZOk57YJpqHVBySTNFJ9CN%2BwqD78BEZyYPCjXxd6qodNcquGl1zHcZqj1QYH4PMbs56uO8ynAINQZaDzQnDCMN2CicoGOqUBF3tjR5hRHoeiNLNvbdJbSomOVCMxpYYHA3j8N2qVKqA7fAn0ZJw%2BKvltJL0Gvi3z8ldc3%2FbWq4topVZwapXp63EkO9DGQcxXzt%2FOgfKHSnFczw%2BpAKTSdGNaphEOtUwDxILhRTBbnl3NAYkuQXS0Y3LQhdE3awg2rwR7sR%2BnJr8IaH0%2FQiIBwMQHAI5PfUmOfyTNdm8fs2PPnkw9pjrHnQwZo3AB&X-Amz-Signature=3ca3f4d3c157e2794d2c95be75102eb0093470e86c7b6fea26b87d3ed189dd2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTTBI7DM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T063257Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHye3vrODYsuhoGGaM%2Flpp5Uwj%2B81JPnIO%2BCyp%2FNZNpSAiEA6lkL%2BqN079X09e4vfsKHy6lM7O4dRxzPrWGntKCluTIq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDA6gx8kQTHF44X%2BrrSrcA4yztzaFYnseIkcNgljEkxER9oYQf6LanY5K8fARSE%2F7zoJiGGUUfGrTN81lUO4KNf%2B0ICiTELT5fSI7klpkp996eYCKu1g6DKGvzi6ZxZ9hkxl9Z8v2%2B0aSvzqGBcBqk5U3Xb9uqxw%2BofJfKC7e4gKdBGre%2BURRDvJ1GxmsMeSTKzOwczFEKHAmyRVL4buuM7k0zYx%2FPsRAvpexQRTpIQgR4t%2FgQ9%2Bq6U7JNsAVtPoou4m%2BGJ7sPfFhcRCFyyEZcDe0C832MOV2YnsNoVf1kaHXbMCRu2%2B15lZ4%2BuymvD4v78nq4U%2BsQriT1jD7WkXnW8WXXrh%2FrUSweA7h6D1qaPwttVe33demqIcwnxZaAWew9ObPMOyVHYd1jLa8pACMR%2Bwp6ftexTC1PIj5z47Zi5L9sbRvBXzfEoZ3lnIfE5m9aOVuobyMFCJTnCtkWscB5QT6Rshyd%2F9HGtdC7GIcWzOITLIJFoGdwMy4DfClxlaSREomxoNHAs42Z6aRPhged9IX4lw5si3h%2Fvf71441t0KYmxF9Gvxz9qxIN1YQeZOk57YJpqHVBySTNFJ9CN%2BwqD78BEZyYPCjXxd6qodNcquGl1zHcZqj1QYH4PMbs56uO8ynAINQZaDzQnDCMN2CicoGOqUBF3tjR5hRHoeiNLNvbdJbSomOVCMxpYYHA3j8N2qVKqA7fAn0ZJw%2BKvltJL0Gvi3z8ldc3%2FbWq4topVZwapXp63EkO9DGQcxXzt%2FOgfKHSnFczw%2BpAKTSdGNaphEOtUwDxILhRTBbnl3NAYkuQXS0Y3LQhdE3awg2rwR7sR%2BnJr8IaH0%2FQiIBwMQHAI5PfUmOfyTNdm8fs2PPnkw9pjrHnQwZo3AB&X-Amz-Signature=92f5b2f124b978a980fca6b30b7a8aabbb291253ced6dcf300b61d54d33841fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
