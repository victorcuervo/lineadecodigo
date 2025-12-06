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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEL7EUG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtF8py4tae%2F8Mekv2TV%2FieZR2OTKSshd0os7Ywk12%2FFAiBMpRC65Uw0HzFzntPktwBT77AlI8EQ%2FPnDA%2Fvt6JUjsCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMFANlYfSpv3oklkYMKtwD1Wp%2Bjc2QGw4llv2kcH9HI%2BH9rRFSkhvUnm87v5eI0Pu4ynq5e%2FFbzdB647En%2BqVZdvxTaSKBlpJceTNGjAJEZ45To%2F8YpwThiH%2BnamkwqMxEXRjVM3EivhG059%2FBu2Whx5Ujj43KFoqCt2UkqFdaKjb925YLEjcQfbn7IVNooYbg2MgYzEqmRUGeljH9aPpy1Vbr%2FeoR5uaosg%2B4X60T7kbUCGuQxibRxXFGc0cqr0Kz5RpWkknlExow1yd8vndh04Qk3cJp73anFQoPm49D%2B0z2Z0mBkTSPMdHXpda20etTbBYdC47NRv%2BQ0NAbaT4cV9AtPDuid9VKkyJkfJnOTGrQrivEKvDH%2FbfNz9HEvq8XmnvK0ymMnKY6XVsMS4RQvoSDjv2jO8ESXDnU3i9%2BO7UM%2FIxUbjXLa6AJpvpUzKD8IbSWQLc%2FLgcvP%2BzwkYyWGpo%2FT8i0ZKHa36eQtxu8WLSpONuiCET9DiGqYcJOF4lfUFYLf1Ugo%2BMvAI8BNeDKVB5WRKB7zrDf5oCmmoJ8kgLq1wJ0BI9whPvQq2RiGeXpQH1LO2u96Mt77wJQq0fc2tPSnb5RI3x9SBjjQeRQKFhes8Iz22LxG96zXEU9jQluvoYNrJSYJIC7oEEwq9TSyQY6pgFB0tunw%2B50pKky%2FuubjHyXGjj26E7mm1fuRp3BQoQoJwC4%2FAM%2FLB4qsETbyruSVwP7jemlWVlAq0AEOfC7pRffShFf3p29Nv%2BlAaP4k7GS0zVv0TNJbr51b1O4WIIJMQN9Vo81Ea6Ioqguw3Nc2iJLv9lWkdUn7imjsGay91piS0nyoG4oFHSAALDFHrpEGX7MzIdQPh6vzE0D3IaLCd7gardWCwaR&X-Amz-Signature=90fcfd331abae28207279a0afef75a6910538edfe71fa9c02abb615bffc9dddb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMEL7EUG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T230335Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAtF8py4tae%2F8Mekv2TV%2FieZR2OTKSshd0os7Ywk12%2FFAiBMpRC65Uw0HzFzntPktwBT77AlI8EQ%2FPnDA%2Fvt6JUjsCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMFANlYfSpv3oklkYMKtwD1Wp%2Bjc2QGw4llv2kcH9HI%2BH9rRFSkhvUnm87v5eI0Pu4ynq5e%2FFbzdB647En%2BqVZdvxTaSKBlpJceTNGjAJEZ45To%2F8YpwThiH%2BnamkwqMxEXRjVM3EivhG059%2FBu2Whx5Ujj43KFoqCt2UkqFdaKjb925YLEjcQfbn7IVNooYbg2MgYzEqmRUGeljH9aPpy1Vbr%2FeoR5uaosg%2B4X60T7kbUCGuQxibRxXFGc0cqr0Kz5RpWkknlExow1yd8vndh04Qk3cJp73anFQoPm49D%2B0z2Z0mBkTSPMdHXpda20etTbBYdC47NRv%2BQ0NAbaT4cV9AtPDuid9VKkyJkfJnOTGrQrivEKvDH%2FbfNz9HEvq8XmnvK0ymMnKY6XVsMS4RQvoSDjv2jO8ESXDnU3i9%2BO7UM%2FIxUbjXLa6AJpvpUzKD8IbSWQLc%2FLgcvP%2BzwkYyWGpo%2FT8i0ZKHa36eQtxu8WLSpONuiCET9DiGqYcJOF4lfUFYLf1Ugo%2BMvAI8BNeDKVB5WRKB7zrDf5oCmmoJ8kgLq1wJ0BI9whPvQq2RiGeXpQH1LO2u96Mt77wJQq0fc2tPSnb5RI3x9SBjjQeRQKFhes8Iz22LxG96zXEU9jQluvoYNrJSYJIC7oEEwq9TSyQY6pgFB0tunw%2B50pKky%2FuubjHyXGjj26E7mm1fuRp3BQoQoJwC4%2FAM%2FLB4qsETbyruSVwP7jemlWVlAq0AEOfC7pRffShFf3p29Nv%2BlAaP4k7GS0zVv0TNJbr51b1O4WIIJMQN9Vo81Ea6Ioqguw3Nc2iJLv9lWkdUn7imjsGay91piS0nyoG4oFHSAALDFHrpEGX7MzIdQPh6vzE0D3IaLCd7gardWCwaR&X-Amz-Signature=fd711644eee1743c9c4e425bb85ff38abbc1406ca9fc98271a314794993c690f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
