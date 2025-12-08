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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3USCBLF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRyJeRSg7Dt15U1DOx9dAbQKT9JPGhOKzBrpl2Mi4eZQIhAIz8bqG0vYFqXS9iHX%2F%2Bv6JlUI5phHnkLtabTnM6a2%2BcKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzM1LYBsR2FuUCuxy4q3AMhLaAOT7UCXzQ7VY%2BZRzfmDUJe0xsZmILz3P6WI85qSNcOBR4B0Wy9wtYbeE10E%2Bb3xMiJWCr7ZOa7gTFaD5BZ24oKRpBVdheYBQ27rw1%2F6zRYvTAKpJ3GnOJzADX8clrrUl%2FpiOxUlAHqEdivNJ6iZt8UQWiW95xIWzZa6SeohzJ7AW9zKSX%2FrznrEPEwv7MBG4UvTmDCwuzqKHPXa2HujbUJDwJRLjNxDGn%2FKAhvd6z%2BeP6BI3SSA4KsmMzPZC%2Fyf%2BI%2BTaR2MUqaeqhqkU%2BljO9AEc4OEpuZNwIOCg181oRlALDVbXhkP16Vddf80yivZkbiRCFTjhJJjqFhyPR2Dh2ieyjQWGwJlq3cufYhsoeBoqxGDnGjQloRaC4iyzrQyp3EUUttLzqt%2BFWuw1pXnm2DLGWsITGU3gQ9ihwsjddM6V1jK7BqNnGNElEWnUB1wLgBJQ%2BYhYNcwXQoG1IzquHvKW44yNauYpt%2FpJLME6F7AUlUt1CNqB9Jaugi4l0%2BVk1ZYxRJ9cMYwG60WMeQlgHbrqS1YMmB3UA%2FWA3yB9uEizwJHSh2Th2dJvHbsU%2B2Z17SkX6eYRDy3EGTs5xOE%2BZ0IpfjJm7HkzDTBafF6UMqGI6eFMz1Vl%2BnuTDpodjJBjqkASlQ7LmHwMQDY%2B9CpizoPlnLbIFDsBS%2BBuMimvTARg%2BgHJ551EqqwX49JHg7HWnOxPSd%2FensX9ZFrQuoVcwkJuYB72CoU%2FcRiWbe5XPqJR2AcAUxsW7LHz4VZdIVDstFzMNZLizLB5tDqjqMf74I1UxTv6B%2BrDefYb2h3FUbecfV0owt64qc%2BHeYM4JlyFFw2hrD8D8ItO3mVOqR331mW3LE0F8W&X-Amz-Signature=9dbbc3ddcb3facfc1250d04ecbc07d9968ab54d1fd16f4309ca3e758c69a5ff6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q3USCBLF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T003035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDRyJeRSg7Dt15U1DOx9dAbQKT9JPGhOKzBrpl2Mi4eZQIhAIz8bqG0vYFqXS9iHX%2F%2Bv6JlUI5phHnkLtabTnM6a2%2BcKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzM1LYBsR2FuUCuxy4q3AMhLaAOT7UCXzQ7VY%2BZRzfmDUJe0xsZmILz3P6WI85qSNcOBR4B0Wy9wtYbeE10E%2Bb3xMiJWCr7ZOa7gTFaD5BZ24oKRpBVdheYBQ27rw1%2F6zRYvTAKpJ3GnOJzADX8clrrUl%2FpiOxUlAHqEdivNJ6iZt8UQWiW95xIWzZa6SeohzJ7AW9zKSX%2FrznrEPEwv7MBG4UvTmDCwuzqKHPXa2HujbUJDwJRLjNxDGn%2FKAhvd6z%2BeP6BI3SSA4KsmMzPZC%2Fyf%2BI%2BTaR2MUqaeqhqkU%2BljO9AEc4OEpuZNwIOCg181oRlALDVbXhkP16Vddf80yivZkbiRCFTjhJJjqFhyPR2Dh2ieyjQWGwJlq3cufYhsoeBoqxGDnGjQloRaC4iyzrQyp3EUUttLzqt%2BFWuw1pXnm2DLGWsITGU3gQ9ihwsjddM6V1jK7BqNnGNElEWnUB1wLgBJQ%2BYhYNcwXQoG1IzquHvKW44yNauYpt%2FpJLME6F7AUlUt1CNqB9Jaugi4l0%2BVk1ZYxRJ9cMYwG60WMeQlgHbrqS1YMmB3UA%2FWA3yB9uEizwJHSh2Th2dJvHbsU%2B2Z17SkX6eYRDy3EGTs5xOE%2BZ0IpfjJm7HkzDTBafF6UMqGI6eFMz1Vl%2BnuTDpodjJBjqkASlQ7LmHwMQDY%2B9CpizoPlnLbIFDsBS%2BBuMimvTARg%2BgHJ551EqqwX49JHg7HWnOxPSd%2FensX9ZFrQuoVcwkJuYB72CoU%2FcRiWbe5XPqJR2AcAUxsW7LHz4VZdIVDstFzMNZLizLB5tDqjqMf74I1UxTv6B%2BrDefYb2h3FUbecfV0owt64qc%2BHeYM4JlyFFw2hrD8D8ItO3mVOqR331mW3LE0F8W&X-Amz-Signature=9978fa8fdaed9758abdc8320e8031875b8a04b52231ffab608aa35294c2f4b8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
