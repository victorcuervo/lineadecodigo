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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULRNTRY5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoLNehUKSkE45R2eEMV4M%2FzglhtDdwthhve0id0UVbiAIhAKPavJPI5xTq0xSnT0%2FekKoclLsCl4fdLwr4ZC7xdwVwKv8DCHUQABoMNjM3NDIzMTgzODA1IgwW22KMkE7Ui2Be59cq3ANzJhKrnELpHYNtrrK1CX7GP%2FN95FgflnVz%2Bi5HPXG5iXXqudTk583tsCYfdJ4HJCoVuJRn2umguGFmXRnJIWJAKHLec%2FfbshH%2B2QhbAr5S5HEVdrxlbeQiYAas6ilRWTOlZAvmHhLw%2BnevBLE8oNFAt5pdsWwi7%2FZVjdViddmeI0dKTrikJs2NuOLJvFGdDssKe4PydgYDrZyKcnFw8dpCpXxKgb1Ww7Y6A615gGQCav32VfSzcUx%2B8iPOCOy6Ust6OM1KXBZsrXBlyDSRA%2FbJuT8XrlQ8HEIYHx058%2BvAPVF%2B67K2TJQIMzCRurk38UAWhWcvp8HIEe5MVWmiugWNCMpQhl0zCC0XDrQhhb7OMIXCZSF%2FxXV0edCTsM1vOUi9%2BuoP8Wa1LMdMas6043IIw3vstaTyZWmTCFOLgDIKPDsYROsJjhMKzuELsH4NJLb58aanYLEJGMfpWbRQE%2BeLl7FdBHRk5rtnOmRSzgnwPWZMY30Ou%2BDPmakgGRtD2mF1DtiJCm7ZYUnATAk7YfJIw7K5gLYw%2BIg%2FVfrFPAohMCbmC3VyrL42e%2FmqfA26O46sqSXRPExi%2F9DaInq2eSXFlYtByYdr2dWTlksMWlw7PocR4Xy3q1ZVY7EuSTCOzojKBjqkAV2JkKrZW3M8n7PUzHKQNASwgDmwn29%2FhNyhAIf5i3CtjzBXZMkYRjNOser07CmfwCKyDzjgSOIKI2rHEYqdSnL1iF3ocGBfh2tYm4LLMF3GoDQuPhV7dvjiO5l2IOF2qsrcsuYTlbS%2B%2FHhnbGrp8eg%2FNXJk8geghO7poK6Gdyn7FYE2KSTV6m45%2BOt42IMozoERKv5cLvm3VSteqIsKPxrRl1mA&X-Amz-Signature=0103278bb5329760b0c12da3fd7f8d88d67939e1a969df8d6f2e198165110d2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULRNTRY5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041041Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoLNehUKSkE45R2eEMV4M%2FzglhtDdwthhve0id0UVbiAIhAKPavJPI5xTq0xSnT0%2FekKoclLsCl4fdLwr4ZC7xdwVwKv8DCHUQABoMNjM3NDIzMTgzODA1IgwW22KMkE7Ui2Be59cq3ANzJhKrnELpHYNtrrK1CX7GP%2FN95FgflnVz%2Bi5HPXG5iXXqudTk583tsCYfdJ4HJCoVuJRn2umguGFmXRnJIWJAKHLec%2FfbshH%2B2QhbAr5S5HEVdrxlbeQiYAas6ilRWTOlZAvmHhLw%2BnevBLE8oNFAt5pdsWwi7%2FZVjdViddmeI0dKTrikJs2NuOLJvFGdDssKe4PydgYDrZyKcnFw8dpCpXxKgb1Ww7Y6A615gGQCav32VfSzcUx%2B8iPOCOy6Ust6OM1KXBZsrXBlyDSRA%2FbJuT8XrlQ8HEIYHx058%2BvAPVF%2B67K2TJQIMzCRurk38UAWhWcvp8HIEe5MVWmiugWNCMpQhl0zCC0XDrQhhb7OMIXCZSF%2FxXV0edCTsM1vOUi9%2BuoP8Wa1LMdMas6043IIw3vstaTyZWmTCFOLgDIKPDsYROsJjhMKzuELsH4NJLb58aanYLEJGMfpWbRQE%2BeLl7FdBHRk5rtnOmRSzgnwPWZMY30Ou%2BDPmakgGRtD2mF1DtiJCm7ZYUnATAk7YfJIw7K5gLYw%2BIg%2FVfrFPAohMCbmC3VyrL42e%2FmqfA26O46sqSXRPExi%2F9DaInq2eSXFlYtByYdr2dWTlksMWlw7PocR4Xy3q1ZVY7EuSTCOzojKBjqkAV2JkKrZW3M8n7PUzHKQNASwgDmwn29%2FhNyhAIf5i3CtjzBXZMkYRjNOser07CmfwCKyDzjgSOIKI2rHEYqdSnL1iF3ocGBfh2tYm4LLMF3GoDQuPhV7dvjiO5l2IOF2qsrcsuYTlbS%2B%2FHhnbGrp8eg%2FNXJk8geghO7poK6Gdyn7FYE2KSTV6m45%2BOt42IMozoERKv5cLvm3VSteqIsKPxrRl1mA&X-Amz-Signature=e227b379305e5744b858564e8b35a7299a93d2785f08d909ccd1c1a04a487c28&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
