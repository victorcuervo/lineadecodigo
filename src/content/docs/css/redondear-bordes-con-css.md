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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXW3FDJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqGcR3pypcR14z2Gou7IdN0Y2Y4woYhGgkspbKUHQR%2FAiA17UAQP06fSw6oP%2FRqurJJtTzC6r9GCQtI0Hi3HHoeOyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFbnN2%2F30qCDKHUZNKtwDgi8sCVuwaqOC8NdUYveQzd%2BxnohEytv2Ji%2FLJVe6c1ScxdCt8h4%2FoVc8C58qXlrwGTPQb3tVNn2FTH39qS1bDAveiLCorXgNLlWkN9mxtcfHFs9g1hqVPFjX8h%2Fw1JgRD3guC0e5aZYHqC%2FNDsI7ugwYsUKAflERxd9IJJRVEY7GBzJoaaaW20MLlt33CuJ5UkSzy%2BeC56P4%2BswT4rK5159cxCgXfj8pZK1r0QNzNcgxuH6lHfztC5hmXBom9UFs%2Bp1XQ6hiDG5YuRWX4S05R4TGtz%2BXzMCj8XC3WQ6UvRz%2B6S1qKcJHg0m%2F0qDtujdK2RGqRjPN9aPga1GqqNbcSMbBTCibpj50Ai4yAE8qO0toDM8xekkx%2F8zrY698nEr1pkVMp%2FVRHVAIwZaiFWkTR1c1jYWBLyHx7XuiVqjE8SDC9VWhG6WfLZVipmoK%2F3nRe35qWenKxrlU%2BCaqSXAyNqM9tYFOWJfP4y4%2FT7ZW%2BVk7p1G2HTHY%2BX6cWyraVONo8ggfAcmekeFax2TRWcEniZdQjhNVAAksPZS11Jx4PYFbWgmesPuGQ2%2BI6iiaICeCScMSozRVgaadz%2FfwpZ2PL0x5FfRabnZiwQniuqdWKvVGLvxRjYwu%2BxGw0nEwlrjWyQY6pgHkm%2BYuWUNUs6NBSvZvgzJ5ZfCFiOQpii11Tb0tDNRQ0hQUlVSTlFW%2F6Td9zdPWZwgoXSJ4x0PXE0PmHn%2FW2nC76JXsyGIib%2Fk%2FRFJmCfLs%2Bys3kEiLWFgLB6kDqjgw44qVZcwhM22AjSin8ihNKSUwX3A5%2FVA4YsoSw5Sg4ow5uIP4P3v0fTYRYqI%2FysW9FSN1KCSoXjEW1age3aepIezYBl5Dj7UI&X-Amz-Signature=72829be74927a928b69f8dada193226d1598178aef7ba43b45b6292d41446fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXW3FDJT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T190207Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFqGcR3pypcR14z2Gou7IdN0Y2Y4woYhGgkspbKUHQR%2FAiA17UAQP06fSw6oP%2FRqurJJtTzC6r9GCQtI0Hi3HHoeOyqIBAiR%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMFbnN2%2F30qCDKHUZNKtwDgi8sCVuwaqOC8NdUYveQzd%2BxnohEytv2Ji%2FLJVe6c1ScxdCt8h4%2FoVc8C58qXlrwGTPQb3tVNn2FTH39qS1bDAveiLCorXgNLlWkN9mxtcfHFs9g1hqVPFjX8h%2Fw1JgRD3guC0e5aZYHqC%2FNDsI7ugwYsUKAflERxd9IJJRVEY7GBzJoaaaW20MLlt33CuJ5UkSzy%2BeC56P4%2BswT4rK5159cxCgXfj8pZK1r0QNzNcgxuH6lHfztC5hmXBom9UFs%2Bp1XQ6hiDG5YuRWX4S05R4TGtz%2BXzMCj8XC3WQ6UvRz%2B6S1qKcJHg0m%2F0qDtujdK2RGqRjPN9aPga1GqqNbcSMbBTCibpj50Ai4yAE8qO0toDM8xekkx%2F8zrY698nEr1pkVMp%2FVRHVAIwZaiFWkTR1c1jYWBLyHx7XuiVqjE8SDC9VWhG6WfLZVipmoK%2F3nRe35qWenKxrlU%2BCaqSXAyNqM9tYFOWJfP4y4%2FT7ZW%2BVk7p1G2HTHY%2BX6cWyraVONo8ggfAcmekeFax2TRWcEniZdQjhNVAAksPZS11Jx4PYFbWgmesPuGQ2%2BI6iiaICeCScMSozRVgaadz%2FfwpZ2PL0x5FfRabnZiwQniuqdWKvVGLvxRjYwu%2BxGw0nEwlrjWyQY6pgHkm%2BYuWUNUs6NBSvZvgzJ5ZfCFiOQpii11Tb0tDNRQ0hQUlVSTlFW%2F6Td9zdPWZwgoXSJ4x0PXE0PmHn%2FW2nC76JXsyGIib%2Fk%2FRFJmCfLs%2Bys3kEiLWFgLB6kDqjgw44qVZcwhM22AjSin8ihNKSUwX3A5%2FVA4YsoSw5Sg4ow5uIP4P3v0fTYRYqI%2FysW9FSN1KCSoXjEW1age3aepIezYBl5Dj7UI&X-Amz-Signature=868f2c4d6325a8620b5318519fbe643b73a537ba87f1ed008af09af62e2cc24b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
