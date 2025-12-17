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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UELYA2OL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNxkrHgQSJ9GlsHiGpX%2B%2BwnN23tyMUG3ffi8%2FGfpVehwIgUKMvm7Bf%2FkxCSUWQJ0GXDGw3KcGpye%2BeOHQVjv050o4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEPk0aq8ifregBcdJSrcA95BZJL%2Fs80wY1KhLU%2BSE3pqVmSPNt%2FJcyeIwXVSzGbrWt7KOXVXFa4QQCPwk%2Fwj4vtWUFge%2BAMWx%2B%2BFFNvfiCigCtzuXzYU1n33LDbEprkjO5XN4J2CijEcg8eAlCyZvt0i4fusLRAfEmVzekwiWi9sGZAcu2U7s2ee2NVLoixjwGLFaznrCpcG0c6yV7vugJ8XY0RFCpgY32jV4NQSb8lHPauKPYglb8X252qZJkfLAVS%2BaQC3tUna3PtdDcTXHk6lFyvmw37hevh%2BjmO80RzLLapBi4Z8NlscZnPEuzIVIjYWrIiBHpe1CottaANnaEohVBDHdaIkHg8ZjeBsoZvBxcvRnNlQVvHGBl7KIbTUM3E2RsvJFP3gy65qlohryin3RDUOX84AIOclc72T%2BJXDy9m0HFmLDXlJkvH3xKptlrp%2BXL7KpwIRqiigU9zIW9y5kapV%2FQxCudT3fVYfpkgpIyV6UQ6rMHyuvBBastFzso5cfjQJ7kFdI5n7xQ5WWA%2FT9FlBVaS6T5On4wGnOs41ngJU8gNeJtzGP8NBwjEPP5dE1g1YBvGy%2FpoBgPXZiy4G2J%2FncRQ8gDHoh%2FaF1x%2BkoUVUUBw%2FRn2Mi1IjY45dBA2GKFU%2F4N0S3Ki3MI3RicoGOqUBjoCo8Z6FcyN8uRDX77CFqAeFe4lux5XKnP9YNugZg8Iu8Nx9tINoClJTRGPTUxna7KWQ8D3u4aGosrfkMHQO3QE7yeQmp0PtkcqAR%2FyEW82QhaRI3HoJcoonSdnEAg1AMQPlNB6pjI7VEy%2Bbp7LTCk048mLkgNShwkrmBJ5KLCHT4B8gdvOoufym4nmOU07DzcqXoTYnLnqsx81xuzq9tV5M7sJt&X-Amz-Signature=860058239e9abea340d2c476266d7a3c0c8329fdf7ae4eeabddb78a868438949&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UELYA2OL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNxkrHgQSJ9GlsHiGpX%2B%2BwnN23tyMUG3ffi8%2FGfpVehwIgUKMvm7Bf%2FkxCSUWQJ0GXDGw3KcGpye%2BeOHQVjv050o4q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDEPk0aq8ifregBcdJSrcA95BZJL%2Fs80wY1KhLU%2BSE3pqVmSPNt%2FJcyeIwXVSzGbrWt7KOXVXFa4QQCPwk%2Fwj4vtWUFge%2BAMWx%2B%2BFFNvfiCigCtzuXzYU1n33LDbEprkjO5XN4J2CijEcg8eAlCyZvt0i4fusLRAfEmVzekwiWi9sGZAcu2U7s2ee2NVLoixjwGLFaznrCpcG0c6yV7vugJ8XY0RFCpgY32jV4NQSb8lHPauKPYglb8X252qZJkfLAVS%2BaQC3tUna3PtdDcTXHk6lFyvmw37hevh%2BjmO80RzLLapBi4Z8NlscZnPEuzIVIjYWrIiBHpe1CottaANnaEohVBDHdaIkHg8ZjeBsoZvBxcvRnNlQVvHGBl7KIbTUM3E2RsvJFP3gy65qlohryin3RDUOX84AIOclc72T%2BJXDy9m0HFmLDXlJkvH3xKptlrp%2BXL7KpwIRqiigU9zIW9y5kapV%2FQxCudT3fVYfpkgpIyV6UQ6rMHyuvBBastFzso5cfjQJ7kFdI5n7xQ5WWA%2FT9FlBVaS6T5On4wGnOs41ngJU8gNeJtzGP8NBwjEPP5dE1g1YBvGy%2FpoBgPXZiy4G2J%2FncRQ8gDHoh%2FaF1x%2BkoUVUUBw%2FRn2Mi1IjY45dBA2GKFU%2F4N0S3Ki3MI3RicoGOqUBjoCo8Z6FcyN8uRDX77CFqAeFe4lux5XKnP9YNugZg8Iu8Nx9tINoClJTRGPTUxna7KWQ8D3u4aGosrfkMHQO3QE7yeQmp0PtkcqAR%2FyEW82QhaRI3HoJcoonSdnEAg1AMQPlNB6pjI7VEy%2Bbp7LTCk048mLkgNShwkrmBJ5KLCHT4B8gdvOoufym4nmOU07DzcqXoTYnLnqsx81xuzq9tV5M7sJt&X-Amz-Signature=a49220851ca5ba04de53ca8ca60408df5183da519e2cb72902839806812e2bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
