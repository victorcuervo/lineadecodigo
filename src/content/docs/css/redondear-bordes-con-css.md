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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPDAPJVK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiiaHyA5zStfNlmm0P3j0OURT9FNpNrGaDl%2Fss9tpdIAIhAPnSgZMUrG661BrNpvV6CHk4GRmZcf8yFWgr5RbFN0KSKv8DCE8QABoMNjM3NDIzMTgzODA1Igwlnrlmd2zLKiiiBcgq3AM2TbbbWwKXufGkUtYLFblcQF5zF3CTNoZN1ogp86Q0PZRZAQabvAcwmHsWhD9L4jBXoQHR%2BPYdYf4%2FvZ5mh5Ljkj7BnhKkeVDWl%2BCJZIO2JPneg37%2BFa3dOeg0t0QvYKzLOTCxVjKhs3KOxwu3SmiR8s1Wt92DOsWxcW9vNU8XFWwOWuet%2FDKguDFBE3GLLA0A1jZyGCpT5nqpdWs8pY15dkqAKQ7%2BHt4Ya56TeOYxIPxhqrlkcW%2FPTiQVbP7tGNLZ3C8Kg7H3lrtFEtmvyEKeneyiaql8CI17Fo1m6lPMt03iamW5VUU6vHwYqaSEcNGl2fRisgFNbM83wmPm2r7WRfnR6CbJNGAM2TQxbWhocW3jApK6QuwnGppfMSn77HJMpzSBozNVkNy44X5YrzM1Y1h%2FQApgmiO8dr4f0V1WQaK%2F77IQvW%2FuZv7I%2BzNxq4CAc%2FyBKt6WHxPUV8mppUdM6Ww%2F6gxc68Y7JlyxI0nZU3wantU5FKfWq%2F3tVAq8fypGvSRW2hbCNT2ADj2McXmAc1jWPI%2F80BW5LkkLKoHsDSHpg5nh8klrBbuKlN0MBYUVGO%2BTGp%2FlQjh259T%2B%2B0Tivah1Kz6B6o1SZuS2iGe7MWcRH7yqLDBv9CMcSjDwjMjJBjqkAYP5MJfc5NrZvi%2BEcseFkXbtcjUjNov16bLu6IcnjTP5nahfnnXuZ1pG0niR2ZmkV9Mw695oQfma%2FgZpViJVvoaGnXPv3BUtPQRmepFIIGgl1avMU6fYC86fjHUYmXNg13H%2F3Hu4213YIkodR3RS8JlJZjRKnYzmQglCYwHG0V5NY7aKEg%2BYN7lOk40lPaUkCn0Z%2B4%2F2WQpzSu1YFSoESYmkKMHm&X-Amz-Signature=286a4f949fdc7ae9e7139fcaf6602a772d53988c7cb66121de65951098ac16b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPDAPJVK%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T040055Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiiaHyA5zStfNlmm0P3j0OURT9FNpNrGaDl%2Fss9tpdIAIhAPnSgZMUrG661BrNpvV6CHk4GRmZcf8yFWgr5RbFN0KSKv8DCE8QABoMNjM3NDIzMTgzODA1Igwlnrlmd2zLKiiiBcgq3AM2TbbbWwKXufGkUtYLFblcQF5zF3CTNoZN1ogp86Q0PZRZAQabvAcwmHsWhD9L4jBXoQHR%2BPYdYf4%2FvZ5mh5Ljkj7BnhKkeVDWl%2BCJZIO2JPneg37%2BFa3dOeg0t0QvYKzLOTCxVjKhs3KOxwu3SmiR8s1Wt92DOsWxcW9vNU8XFWwOWuet%2FDKguDFBE3GLLA0A1jZyGCpT5nqpdWs8pY15dkqAKQ7%2BHt4Ya56TeOYxIPxhqrlkcW%2FPTiQVbP7tGNLZ3C8Kg7H3lrtFEtmvyEKeneyiaql8CI17Fo1m6lPMt03iamW5VUU6vHwYqaSEcNGl2fRisgFNbM83wmPm2r7WRfnR6CbJNGAM2TQxbWhocW3jApK6QuwnGppfMSn77HJMpzSBozNVkNy44X5YrzM1Y1h%2FQApgmiO8dr4f0V1WQaK%2F77IQvW%2FuZv7I%2BzNxq4CAc%2FyBKt6WHxPUV8mppUdM6Ww%2F6gxc68Y7JlyxI0nZU3wantU5FKfWq%2F3tVAq8fypGvSRW2hbCNT2ADj2McXmAc1jWPI%2F80BW5LkkLKoHsDSHpg5nh8klrBbuKlN0MBYUVGO%2BTGp%2FlQjh259T%2B%2B0Tivah1Kz6B6o1SZuS2iGe7MWcRH7yqLDBv9CMcSjDwjMjJBjqkAYP5MJfc5NrZvi%2BEcseFkXbtcjUjNov16bLu6IcnjTP5nahfnnXuZ1pG0niR2ZmkV9Mw695oQfma%2FgZpViJVvoaGnXPv3BUtPQRmepFIIGgl1avMU6fYC86fjHUYmXNg13H%2F3Hu4213YIkodR3RS8JlJZjRKnYzmQglCYwHG0V5NY7aKEg%2BYN7lOk40lPaUkCn0Z%2B4%2F2WQpzSu1YFSoESYmkKMHm&X-Amz-Signature=1d8d0b92237fc76c4ed6224383e2169dbe9e2ba38f89dffa82e6fd66673dfc81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
