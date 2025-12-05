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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662MNM3HA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC94%2BnozmmRGFrHzQRkRVlk0r54icKNjwTYHPZ6BAUTPwIgQKPJjK0cW0aiVSPRVXVm%2BiSlugZ0WWHxF4vy4N1q8dwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIQxyLEJL2XyBwWKpCrcA%2F6D3a%2F3%2BdTy3eB9PYFH9bcQc2qD7AU7hU3lqyrULA6aXRZH%2Bhe%2B%2FWa6DQ%2BSi6oc%2BztDUguipVHLpCKnUzW02nCTZnTZN28SNtSgtsWKDa4wfS0czHWdeyhjx6yN30WWgtGiLJ%2FBpMrUIH0HUjnAlwa8cdfAF1LFs8X0PodSx8K27eqR6ky%2FYQG%2BCCZFmBZHqgFXWRlAN8mr9ZrifE5lZNNdoPvDi%2BRNy6f%2BSSKmPKNLAwIYOQEaPS56v54f0IYpPrR9kk%2FDUdxw4ZRgOWdW6mKZV7mmfQXtMVvgZzdcN6%2Bq4lm6LCuv5UEEmlATyU70cDijcgcd%2BoJ8THRRJmnUUBPJI3Xlt3at6eDgukRSqhZj3r4DpD9EHM7JdsplNrFl3F6nkxjSbWUR2O6Ap1NhktMtEPlfTkPANb5pNVw%2ByI27efs6LCTTrvUaHZGxvzeEw7rV4TX0fmrhUVxLfsW%2FRoHayRwkBzeRdJnYYpF86pcFmSU3mNArll0dFlWYtqPdBdB3gNnjCN3j4IiT7RTgV4Tn0uwRVNMOst%2F5h3rjQBU9EO37QNNFMRZjwdScW1TnXIVXv5iFenEXkonRLzWgWYXK8THZgS4MOt1vFZwS96mMaIY7boDZLmFmjpZ5MJ7UyskGOqUBqBNFfngv9ANL%2FtZWBPL4BFqPCvaUT4WLdE14kLydkqhzTZV1aVxZp5AW797UQdYUChuCYA1ixSgFykx9hKHBcGzNzwHTUc10M%2FTQUYSGnKMw1intoZPAX3aTfzLgnKAOloGABiafGkO0IsmnFqX%2BkYv%2FKCf9j4lVTxzRnvSOM3CafcNkDFbZir3jgiEZDV2L4xiSLd1U0ayc8R8X73NkuWHsjSvN&X-Amz-Signature=10458461c4b6d8afeafba04b5f59c13139e78b33e6a6c676abb3213860e964b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662MNM3HA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC94%2BnozmmRGFrHzQRkRVlk0r54icKNjwTYHPZ6BAUTPwIgQKPJjK0cW0aiVSPRVXVm%2BiSlugZ0WWHxF4vy4N1q8dwq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDIQxyLEJL2XyBwWKpCrcA%2F6D3a%2F3%2BdTy3eB9PYFH9bcQc2qD7AU7hU3lqyrULA6aXRZH%2Bhe%2B%2FWa6DQ%2BSi6oc%2BztDUguipVHLpCKnUzW02nCTZnTZN28SNtSgtsWKDa4wfS0czHWdeyhjx6yN30WWgtGiLJ%2FBpMrUIH0HUjnAlwa8cdfAF1LFs8X0PodSx8K27eqR6ky%2FYQG%2BCCZFmBZHqgFXWRlAN8mr9ZrifE5lZNNdoPvDi%2BRNy6f%2BSSKmPKNLAwIYOQEaPS56v54f0IYpPrR9kk%2FDUdxw4ZRgOWdW6mKZV7mmfQXtMVvgZzdcN6%2Bq4lm6LCuv5UEEmlATyU70cDijcgcd%2BoJ8THRRJmnUUBPJI3Xlt3at6eDgukRSqhZj3r4DpD9EHM7JdsplNrFl3F6nkxjSbWUR2O6Ap1NhktMtEPlfTkPANb5pNVw%2ByI27efs6LCTTrvUaHZGxvzeEw7rV4TX0fmrhUVxLfsW%2FRoHayRwkBzeRdJnYYpF86pcFmSU3mNArll0dFlWYtqPdBdB3gNnjCN3j4IiT7RTgV4Tn0uwRVNMOst%2F5h3rjQBU9EO37QNNFMRZjwdScW1TnXIVXv5iFenEXkonRLzWgWYXK8THZgS4MOt1vFZwS96mMaIY7boDZLmFmjpZ5MJ7UyskGOqUBqBNFfngv9ANL%2FtZWBPL4BFqPCvaUT4WLdE14kLydkqhzTZV1aVxZp5AW797UQdYUChuCYA1ixSgFykx9hKHBcGzNzwHTUc10M%2FTQUYSGnKMw1intoZPAX3aTfzLgnKAOloGABiafGkO0IsmnFqX%2BkYv%2FKCf9j4lVTxzRnvSOM3CafcNkDFbZir3jgiEZDV2L4xiSLd1U0ayc8R8X73NkuWHsjSvN&X-Amz-Signature=663e891db8aa9aef797a2a3d134e55a989be2f453f79a57dcd2b6e82fad66e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
