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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5K5WSAK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn12IkKlGqP9fksZ5%2F2nhJRaz4PuwUEiiGLO6JQR02RQIhAMvKNa%2FMCLJhiE5jLNDHL27%2FfCSWLpUaMrJIUvkO%2FpYQKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkhgNmquHw2TNKURsq3AOZ4cuRYMff21GHshxGr5X7B6JmlI8pf41kXU6MRd813Gkz6Mz%2FIaTFhKjWFJRRm2xGoAzVqrdJzXXlSEpXproVj9flcfdD44reEMwlUBilAFIZVPyHsEahpXGVAviCg1wRCxcttPodht41qLNfIeTtgfmvprMS2Uq2ZQ%2BTOLoNrsMcNPJKSujsPAuNPSS1ncLMJJEskaiB1%2F%2B2%2Bm9HtUJHYeWzcuz2Pj%2BRq1OcY2cAPUS69iOfgWV8v3bDLzBrGKDtaXwSdmn7xlePeBIrXPMmeKgsCZpEuNt%2Bd3i9uHCMEJIN9t3XZDml4QC3RwQBukR6VzIcDIr8nGBtSI7JHy8hGTHYRqtgKWdBgZ%2BDd6pjtbsJyFi3uZnBMDRCeqpJQ68O8x7yUORxwfq2UnCTQ65R1to7WoJX%2BrBrK66BaxTRsLYbfsRU0%2BFYB3ZqiJKdpQ1IrdP7Ell4LrdezHTF8vk5LwKZ3zXwwThgYTSuwGWBuMDrMsU0FmsR7bj5niyMO%2FKxOQmRmD0NYDJDEoIZOie%2BisQ6S3bAA39YSnlNV41nz0zx5jAWJe%2FLl3CSdY7%2Fab87DnZt%2FuNfEDRWhPPioY970BB2QqsZLpOzNIUsGR%2BuApk9FoYmfrbo2uSh%2BDDIn4vKBjqkAf6l46SMtyCKP8UJQst%2BKLDafL1%2FOPAxPzArdyNmgrznEQKYtvQHu1TYI0Hy9o1CF81ujJfcES8YzdAPDWl%2FD9sU0WqNnLq%2BTGkdT6JxARYCHAWZw7TJYUZFSIvRJ9e010TWxF5BAiKv%2BX0x9vsN%2BGdkSpoKaGVTZRyXNmjfqg2Ec6lVv0bXbz54BliUOP0PqoSL7kqjI2m01iDySbIEC0i1uvIA&X-Amz-Signature=e3393c815dfa35d76ef716ab8f2019505cc7cfef921b8f48607dae40f77173e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5K5WSAK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165108Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDn12IkKlGqP9fksZ5%2F2nhJRaz4PuwUEiiGLO6JQR02RQIhAMvKNa%2FMCLJhiE5jLNDHL27%2FfCSWLpUaMrJIUvkO%2FpYQKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzkhgNmquHw2TNKURsq3AOZ4cuRYMff21GHshxGr5X7B6JmlI8pf41kXU6MRd813Gkz6Mz%2FIaTFhKjWFJRRm2xGoAzVqrdJzXXlSEpXproVj9flcfdD44reEMwlUBilAFIZVPyHsEahpXGVAviCg1wRCxcttPodht41qLNfIeTtgfmvprMS2Uq2ZQ%2BTOLoNrsMcNPJKSujsPAuNPSS1ncLMJJEskaiB1%2F%2B2%2Bm9HtUJHYeWzcuz2Pj%2BRq1OcY2cAPUS69iOfgWV8v3bDLzBrGKDtaXwSdmn7xlePeBIrXPMmeKgsCZpEuNt%2Bd3i9uHCMEJIN9t3XZDml4QC3RwQBukR6VzIcDIr8nGBtSI7JHy8hGTHYRqtgKWdBgZ%2BDd6pjtbsJyFi3uZnBMDRCeqpJQ68O8x7yUORxwfq2UnCTQ65R1to7WoJX%2BrBrK66BaxTRsLYbfsRU0%2BFYB3ZqiJKdpQ1IrdP7Ell4LrdezHTF8vk5LwKZ3zXwwThgYTSuwGWBuMDrMsU0FmsR7bj5niyMO%2FKxOQmRmD0NYDJDEoIZOie%2BisQ6S3bAA39YSnlNV41nz0zx5jAWJe%2FLl3CSdY7%2Fab87DnZt%2FuNfEDRWhPPioY970BB2QqsZLpOzNIUsGR%2BuApk9FoYmfrbo2uSh%2BDDIn4vKBjqkAf6l46SMtyCKP8UJQst%2BKLDafL1%2FOPAxPzArdyNmgrznEQKYtvQHu1TYI0Hy9o1CF81ujJfcES8YzdAPDWl%2FD9sU0WqNnLq%2BTGkdT6JxARYCHAWZw7TJYUZFSIvRJ9e010TWxF5BAiKv%2BX0x9vsN%2BGdkSpoKaGVTZRyXNmjfqg2Ec6lVv0bXbz54BliUOP0PqoSL7kqjI2m01iDySbIEC0i1uvIA&X-Amz-Signature=ef3c156f6c92dd40b997943f4f9c3b74d81f9f808851c65f58ebef02817e5989&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
