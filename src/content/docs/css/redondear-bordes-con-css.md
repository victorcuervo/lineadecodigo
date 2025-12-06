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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTNQWBMM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD76osr9%2Bp6GnGFxa4LeLE60xcaUwvS%2FpEypA8UzMCqSwIgQYN42Gvv%2FXHbgm0X4g3zy00DIgEfPxy%2FnKiSUzqiPKAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDbFbofShrYVHC%2BD%2ByrcA20LvqZzXO8mPrgvP5nBWskBGohO%2Fo7XdiyGhpc4TAyr1chslyI7tvkw04aPWrcfsYqWLrTMdJv7bwUvHBd4E68YowygE8cRSrbSeAZ3fkizkL1ltM7j5xT6Slp4vzRnjn5%2FBd3VrCu504Ix6IW8juJh6m1xn6%2FHFt423xZ9%2BZ8z2zmuk4xneuIfxNMFpc2uRm8578ua0Sx%2BczEnPP3z1VeMFFxE5wl0%2Fub6WXTiVHKgr2zWX84QmVBzRQlVs9WL70Jt16gg7jYUiCVQm%2BjLUHZ9fa99PMrYAwfTdqL6vBL9UaByZs8jVy%2FgK3YGbKB8YfbjCEcetxxC20lmJuF6Hc4cC60objW%2FdMU%2BckG%2BybMWx54oOUmhbvao0ut3CZfCHPZeG6PLqWYQs58IQxuCTeFHYs9DH9e5dP0unfjT6aMW6tYsHNQh%2BiSfnwr7Rn7jyCBChGVP0IZT%2BjJ0iqojAmp0GUvWzobEKNzfAPh64nhXRG%2BRgrcUHekqRKbGtaC1XLisceKOthLyAfc5zg3oDOgg9Ur4nWONLgwV6FsTiH%2F7hCwhZe1QMZ78%2F%2BqypDBv5s5rWtaHbYiGbViVJUffcgVIog3hrX9FWBmjJYINkyH%2BXDJtVX1NYW53iYv0MKfezskGOqUBEdcurwRQLUDL7EhDxPpPF0pGPK16hCLIh9B6nBq6CLLP0ZWQ04RI2IaGyln67ifF0Om99XygJcq65FBSwgS7AoxxVRixilEoATC41IxJHhgFSXSJgkd%2FkFqVDPlb7a4Kb9RzMGqtRGvB4PoO3jO0qt70x%2BkGoX2inNx7azmKZ8%2FqepzUhvoKYMGLjC6Y%2FwygHIExnB2xi%2BB4%2BAe9T2Xt%2B1PJuXrs&X-Amz-Signature=0f4db0eb3b90d4c5224565c1842741c914b149c43dc64bfbc3a0a2160178cf5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTNQWBMM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T052706Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD76osr9%2Bp6GnGFxa4LeLE60xcaUwvS%2FpEypA8UzMCqSwIgQYN42Gvv%2FXHbgm0X4g3zy00DIgEfPxy%2FnKiSUzqiPKAq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDDbFbofShrYVHC%2BD%2ByrcA20LvqZzXO8mPrgvP5nBWskBGohO%2Fo7XdiyGhpc4TAyr1chslyI7tvkw04aPWrcfsYqWLrTMdJv7bwUvHBd4E68YowygE8cRSrbSeAZ3fkizkL1ltM7j5xT6Slp4vzRnjn5%2FBd3VrCu504Ix6IW8juJh6m1xn6%2FHFt423xZ9%2BZ8z2zmuk4xneuIfxNMFpc2uRm8578ua0Sx%2BczEnPP3z1VeMFFxE5wl0%2Fub6WXTiVHKgr2zWX84QmVBzRQlVs9WL70Jt16gg7jYUiCVQm%2BjLUHZ9fa99PMrYAwfTdqL6vBL9UaByZs8jVy%2FgK3YGbKB8YfbjCEcetxxC20lmJuF6Hc4cC60objW%2FdMU%2BckG%2BybMWx54oOUmhbvao0ut3CZfCHPZeG6PLqWYQs58IQxuCTeFHYs9DH9e5dP0unfjT6aMW6tYsHNQh%2BiSfnwr7Rn7jyCBChGVP0IZT%2BjJ0iqojAmp0GUvWzobEKNzfAPh64nhXRG%2BRgrcUHekqRKbGtaC1XLisceKOthLyAfc5zg3oDOgg9Ur4nWONLgwV6FsTiH%2F7hCwhZe1QMZ78%2F%2BqypDBv5s5rWtaHbYiGbViVJUffcgVIog3hrX9FWBmjJYINkyH%2BXDJtVX1NYW53iYv0MKfezskGOqUBEdcurwRQLUDL7EhDxPpPF0pGPK16hCLIh9B6nBq6CLLP0ZWQ04RI2IaGyln67ifF0Om99XygJcq65FBSwgS7AoxxVRixilEoATC41IxJHhgFSXSJgkd%2FkFqVDPlb7a4Kb9RzMGqtRGvB4PoO3jO0qt70x%2BkGoX2inNx7azmKZ8%2FqepzUhvoKYMGLjC6Y%2FwygHIExnB2xi%2BB4%2BAe9T2Xt%2B1PJuXrs&X-Amz-Signature=ec1f044a9ebf051732e6795334b801c63491bdb5dc65501633550b254ababad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
