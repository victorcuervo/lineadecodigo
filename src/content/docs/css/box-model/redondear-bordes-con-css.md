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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGGU5D5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHosrRWZVCFN6zlcsYYQFxODbE24FMs01oMhyHE5bt9wIhAM7HJnGDx3eeUnAurjfgF40fpvsXwBzD8K52mUTDILvIKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXCkKnGOPcB%2FER5j0q3AM47v1diTZZhV1jXONzFx7iECoYfiro8gzhdSJr0iMFpKDTmj8Ve3Yh92WjU7S0i25ClIw8OVgL0kW5OwcBvBohcaT7KrpM1hGpqEaUKBYIzTkCOXF1IFHE3ssOG3xGLIWjgNu5sifkD8hBd65u7WSmsDoeRTo1jlXEVmh1A0sbN54kLIBcaHjVA4atBQj1iK7aO0J25hbpJFO3hjvUh0hEy72nfXvhiRYs4JDOr5O%2BobGOk5v9OkBn%2BW%2FBcb1S1F6pfi7Af6VdBbfiRgLr8Puli6Y6IaJhincLZ4o3CzCUUf5pSCEgNuKUc6cUtOTNNgy6yRLJpHJH07t7twVA6gxKS2NMv2WQ99hEczi22MyhAx3nUivaYFc8VmiEEBmQt%2FsnXjm4vxb29UHQnRVrOuSbda5UVe6UPIyodAFBMDn%2BO0N%2B%2FMSg75dVxiqeVBUsRe64N5X6FGsIfEnxasAvgAK%2BMNPp%2BlRb8fppMPtHKGaft5kFUk7w8z8aMy%2BvK8I2fOfnO7Vy6szYFCTQuKiN0et%2FziGOli433RMJn%2FGvkdTncwE0MTeoGyQowJeTVWhsC44OyagCljggEiE21Bow9eYEmEyYr6eEzdryB2O2nYkpHsycg7DS29yyg8PPyDDOrYzKBjqkAfUPBHjSuKO%2BPHGUtbHRm8VDonC5ckP7oqYAaIcFU0WyKP11gZHMuowsLF5U39%2FPEEAsdQPZ6Xh%2BqdGEiE2qYnt%2BNbAuuYyH5dQDdZ050ZEes0lS2C8TKHqF9so3fYRf99TejZjlzjuDMpgf2Jo9ECcS22shGRg%2FHEwZCzg3AxLqDfgfu6BcCPEvxVrJbAB9cVX7D78LbBsahiP8orCfOhj18WzT&X-Amz-Signature=f4032ca97ae01686d364a03470c144888a795abaff809b0644f016c3c697bffd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZGGU5D5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212826Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHosrRWZVCFN6zlcsYYQFxODbE24FMs01oMhyHE5bt9wIhAM7HJnGDx3eeUnAurjfgF40fpvsXwBzD8K52mUTDILvIKogECIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXCkKnGOPcB%2FER5j0q3AM47v1diTZZhV1jXONzFx7iECoYfiro8gzhdSJr0iMFpKDTmj8Ve3Yh92WjU7S0i25ClIw8OVgL0kW5OwcBvBohcaT7KrpM1hGpqEaUKBYIzTkCOXF1IFHE3ssOG3xGLIWjgNu5sifkD8hBd65u7WSmsDoeRTo1jlXEVmh1A0sbN54kLIBcaHjVA4atBQj1iK7aO0J25hbpJFO3hjvUh0hEy72nfXvhiRYs4JDOr5O%2BobGOk5v9OkBn%2BW%2FBcb1S1F6pfi7Af6VdBbfiRgLr8Puli6Y6IaJhincLZ4o3CzCUUf5pSCEgNuKUc6cUtOTNNgy6yRLJpHJH07t7twVA6gxKS2NMv2WQ99hEczi22MyhAx3nUivaYFc8VmiEEBmQt%2FsnXjm4vxb29UHQnRVrOuSbda5UVe6UPIyodAFBMDn%2BO0N%2B%2FMSg75dVxiqeVBUsRe64N5X6FGsIfEnxasAvgAK%2BMNPp%2BlRb8fppMPtHKGaft5kFUk7w8z8aMy%2BvK8I2fOfnO7Vy6szYFCTQuKiN0et%2FziGOli433RMJn%2FGvkdTncwE0MTeoGyQowJeTVWhsC44OyagCljggEiE21Bow9eYEmEyYr6eEzdryB2O2nYkpHsycg7DS29yyg8PPyDDOrYzKBjqkAfUPBHjSuKO%2BPHGUtbHRm8VDonC5ckP7oqYAaIcFU0WyKP11gZHMuowsLF5U39%2FPEEAsdQPZ6Xh%2BqdGEiE2qYnt%2BNbAuuYyH5dQDdZ050ZEes0lS2C8TKHqF9so3fYRf99TejZjlzjuDMpgf2Jo9ECcS22shGRg%2FHEwZCzg3AxLqDfgfu6BcCPEvxVrJbAB9cVX7D78LbBsahiP8orCfOhj18WzT&X-Amz-Signature=f2e6d4a32d963ce9d695f6ea5713d73a487c78155d11b5459c12677ceb1f8d5e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
