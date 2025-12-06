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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBA7LC22%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOPxlKA7blPIt0kB2%2FG%2BUpCC00hPw%2BvJrnqrumGmzPiAiEA8iiPcksSGEiAAhuPo9UwQvuGdlQyxNAL%2Fp4gdm2XFvUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDG3qHdTRGHpPyWHjpCrcA7trmma4QCXoyzkfxfsKP87x9do%2F%2FW1TFHirGW8og7BUVEOxw0TgoKpefdZISnFlqHwatf1pD24t2KIShn7v333qSm7IicYohgHtP%2BTnH3DUndepXgxNpke7sIbLLx2VUMEFvnuNmSGIFih%2FvczzQD3fd0X%2FsbND9ZmaS4T9Bp1W7VjPtVbpgRPiq2xAFAXXbRPQkm3A9JPs%2F4J4asL0yiyGVBCJM%2BJLWPNBrdsxrxhAnbE%2FLLSR1cqAFCIF97gRx3PoBbEWq8QbAuOg2i9guT1WoaPWWnAL6ik6pVpNOD9f5tw2joHokfZ3mJnls0J2JVYae3qxgr11%2F3tWNdE38AEVLAkwSvaSLUq%2BxArnCGPnRhuF4x8LmSz4RsQmEmEXG6myBTH%2Bx6N7q0GhrHWSGTt9AAadBJMCpKDCM8x%2FYNTFScp31miwqPMwePxQG%2Br91FaWUHINlwKIeEXMn7bg6mdNpYjZn1xZRBW3khMfhy1OYLmBp319BwOIkIXDDwyUtaiRJpkYy4JE2NBL9wYA6BzP8vIOVs5GUkMv7nVw5QtW1ZQdxMaOkDyKixKHUtawb7xz%2FRDQC7tY3UJQWvt8oroO7tC2zes7G%2BeC%2FTa65mL%2BIU2WUkHJKJ7bWR3ZMKHG0ckGOqUBGnnDIGN%2FaveM0s4RSOUNY8QeMDCk1aTJJfEo5ChzjPmbiYmL2LGqmT1o5BkVLUSmK9WhRMbgI2LsJggtOlrQE%2F4pm82wKNv8kZFIWVXMDNN7JtK8J80i9VrpAeZBF5LXlDfsMhrwU7ePPxfK8oqOYmKjEJF3bWDz3sZ3MXHR5nFRH32L%2B4T5a51oxURjMZgziXUyUtFX9NjgG6h3bxheLb5kCRIJ&X-Amz-Signature=61ca980ee9cf628c9336d99b8f958bff719a12b6db5f88036d11255257c80084&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBA7LC22%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T210929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDOPxlKA7blPIt0kB2%2FG%2BUpCC00hPw%2BvJrnqrumGmzPiAiEA8iiPcksSGEiAAhuPo9UwQvuGdlQyxNAL%2Fp4gdm2XFvUq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDG3qHdTRGHpPyWHjpCrcA7trmma4QCXoyzkfxfsKP87x9do%2F%2FW1TFHirGW8og7BUVEOxw0TgoKpefdZISnFlqHwatf1pD24t2KIShn7v333qSm7IicYohgHtP%2BTnH3DUndepXgxNpke7sIbLLx2VUMEFvnuNmSGIFih%2FvczzQD3fd0X%2FsbND9ZmaS4T9Bp1W7VjPtVbpgRPiq2xAFAXXbRPQkm3A9JPs%2F4J4asL0yiyGVBCJM%2BJLWPNBrdsxrxhAnbE%2FLLSR1cqAFCIF97gRx3PoBbEWq8QbAuOg2i9guT1WoaPWWnAL6ik6pVpNOD9f5tw2joHokfZ3mJnls0J2JVYae3qxgr11%2F3tWNdE38AEVLAkwSvaSLUq%2BxArnCGPnRhuF4x8LmSz4RsQmEmEXG6myBTH%2Bx6N7q0GhrHWSGTt9AAadBJMCpKDCM8x%2FYNTFScp31miwqPMwePxQG%2Br91FaWUHINlwKIeEXMn7bg6mdNpYjZn1xZRBW3khMfhy1OYLmBp319BwOIkIXDDwyUtaiRJpkYy4JE2NBL9wYA6BzP8vIOVs5GUkMv7nVw5QtW1ZQdxMaOkDyKixKHUtawb7xz%2FRDQC7tY3UJQWvt8oroO7tC2zes7G%2BeC%2FTa65mL%2BIU2WUkHJKJ7bWR3ZMKHG0ckGOqUBGnnDIGN%2FaveM0s4RSOUNY8QeMDCk1aTJJfEo5ChzjPmbiYmL2LGqmT1o5BkVLUSmK9WhRMbgI2LsJggtOlrQE%2F4pm82wKNv8kZFIWVXMDNN7JtK8J80i9VrpAeZBF5LXlDfsMhrwU7ePPxfK8oqOYmKjEJF3bWDz3sZ3MXHR5nFRH32L%2B4T5a51oxURjMZgziXUyUtFX9NjgG6h3bxheLb5kCRIJ&X-Amz-Signature=a6228a5bda60e500170fb9266c3630874157d103715b33a88cbfe822d3694d67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
