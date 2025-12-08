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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXBEGETP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ%2ByIrHfKOetPXkM9%2BH7388WKLnfSg1pZCmueZc5vmkgIgBhe%2F9jY%2Bfpn1Q%2B2enY3a1UxC7NycYC5LrltfMuKMkfgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF7vOQasR6qh%2BYGCCrcA%2F5NDwePbFsSpykzMv0p5U0Co2pNnbSwXP5EkdZUb0nGQ7d3m2u77mewpwmqZtJwddBMFCMAaIhDu8J%2BdXTc2k1UTU6UUvl7s%2B%2BUTycC05I%2F9Nu34s0G%2FWmQ3iZSLV4%2FDENXZNe1zwplGXWYeewuJ1Xido0VTczIiphh%2F5XVhGqJ2ihXgKVOJRrsmSemdS58EHOkNuDtrKvRm9WmZ4E%2FpEpurZ5eCArwvdtMdmgM7TKzI9ywtBy5Uf10KEHP3NMtd5wS6Av5t9HbTPQjj8KRBa9t%2F3RXEgVnYGxV4LrnTkfqfx6%2BRNR4RWSSIlOnA1zoDdHtef%2FO2wJz5WaJ6zlkNX%2FSiLrNRK9DE3lgCDiHGeMUiNozgl7vX6LwItchnBq89y%2BI%2FDQtz8QDUfwJySzbNm7NGLziaIqCbTToQ5%2FVwSn6tVmMA1ptAkPtU1IR5xkhEEMs2xGitlM7tB1Sl0eq%2Bsq08KyWxT4cO8oiwYmUsI2%2Ff9qKLHWilgPAHhaRcQO7haQg8LdXnC0qNqvtJiB2cZLGsbDpJdHouFqj8jrRkG6MbzHbD5K45nSPe3DjQuzxDYYglOVyai4sYKxkugmEk7QB8vim%2FogFbsxDKkdEAaTnADxBuZBuIdsZuBmZMPvz2skGOqUB76XFQxMGdJeHRa%2FIN7Oceg3%2FGx0xkzx0%2Boai8V6WqbeNkgs1LL5qXis5OCfI8jaW1MRpH6yCaTaWkhLb%2FtYcHbZPp4nm4PBA%2FkqrYgzJ0lmRdPx6qS1PBjUR56Rw5I4e2wKi7e9dR1PLPKPsouzt%2BuV%2FSzJ%2FXCU4gDKsumpjaGm5vMquVpoPA4rzCKh6uR2kJS3iTLZJW3VwqbIM0kDZTq02YZn7&X-Amz-Signature=e98d74ae6862037441607077f8dda3974a249a203f721320b215ca6b8f867b17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXBEGETP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T121140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJ%2ByIrHfKOetPXkM9%2BH7388WKLnfSg1pZCmueZc5vmkgIgBhe%2F9jY%2Bfpn1Q%2B2enY3a1UxC7NycYC5LrltfMuKMkfgqiAQIpf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMF7vOQasR6qh%2BYGCCrcA%2F5NDwePbFsSpykzMv0p5U0Co2pNnbSwXP5EkdZUb0nGQ7d3m2u77mewpwmqZtJwddBMFCMAaIhDu8J%2BdXTc2k1UTU6UUvl7s%2B%2BUTycC05I%2F9Nu34s0G%2FWmQ3iZSLV4%2FDENXZNe1zwplGXWYeewuJ1Xido0VTczIiphh%2F5XVhGqJ2ihXgKVOJRrsmSemdS58EHOkNuDtrKvRm9WmZ4E%2FpEpurZ5eCArwvdtMdmgM7TKzI9ywtBy5Uf10KEHP3NMtd5wS6Av5t9HbTPQjj8KRBa9t%2F3RXEgVnYGxV4LrnTkfqfx6%2BRNR4RWSSIlOnA1zoDdHtef%2FO2wJz5WaJ6zlkNX%2FSiLrNRK9DE3lgCDiHGeMUiNozgl7vX6LwItchnBq89y%2BI%2FDQtz8QDUfwJySzbNm7NGLziaIqCbTToQ5%2FVwSn6tVmMA1ptAkPtU1IR5xkhEEMs2xGitlM7tB1Sl0eq%2Bsq08KyWxT4cO8oiwYmUsI2%2Ff9qKLHWilgPAHhaRcQO7haQg8LdXnC0qNqvtJiB2cZLGsbDpJdHouFqj8jrRkG6MbzHbD5K45nSPe3DjQuzxDYYglOVyai4sYKxkugmEk7QB8vim%2FogFbsxDKkdEAaTnADxBuZBuIdsZuBmZMPvz2skGOqUB76XFQxMGdJeHRa%2FIN7Oceg3%2FGx0xkzx0%2Boai8V6WqbeNkgs1LL5qXis5OCfI8jaW1MRpH6yCaTaWkhLb%2FtYcHbZPp4nm4PBA%2FkqrYgzJ0lmRdPx6qS1PBjUR56Rw5I4e2wKi7e9dR1PLPKPsouzt%2BuV%2FSzJ%2FXCU4gDKsumpjaGm5vMquVpoPA4rzCKh6uR2kJS3iTLZJW3VwqbIM0kDZTq02YZn7&X-Amz-Signature=0f35d753e00446b20e40c795fe5ccab7cef097a0fbc26e3cc208cffb873abf22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
