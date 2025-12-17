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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LYTUDAR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICX2J7hdWKutlk8vgT45ad5uiWKXFnKHP268OY%2BWBAGSAiBmXwFG99dVebp13BSfVQ0tx65CYl4hSoVcLI4V9LHpPir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMeurtS4dX%2FBTtaNryKtwDvnIyFIyO0CbcKXErBs%2F7GtSI3sKjHf952HGIFIEXiPyCK4Soz%2BDzYzKLtSIio3uHtm0FPJeA6c9VPeDgYFb0HAaMhwoQ0GiQVlxxHp2HVtt3SinBSqeb4Co0O4Fpuni8r76DFwKg7Bqk29BzoCkG15inNQCjFPeMdslBz7ewTt0fE9mKcAEsfe9VDezG8qv8v8tTdYCna%2Fbf2MCo6nTV6Yfqjc8jvejteHkanSpcajewRW0TIc%2F2H246OCtqHL93zXWP06N7T39isW35who8t%2BUJslDKqYGUbS2y0cAQhEqClMUIeMBjgbXATn1AACIXb7F5oCKS4bavXcNB3oX84XYnIvZoFJsOXheOEK06SJnRcGWcCNjKIPs1jwTU%2FM8RXsOUbcUCE90kloxq6PTnzGw%2F1gYOBhx6jH6nVmwTCZCrSRL%2BCHNerHigGkIkV6HxAcLdUovAziw9jIHeN7QD82jlwZcqwaV%2BXBSJlxrgvwW40AT7yAbnoFwh6iOqQqj%2FxyuIKs26P56qi8AuMmfuyTfJMMfxis2MpIThZqszyU7Qvxm5qpBdJOyqUwF2M3%2B3pYazqX0ePYbRtnVHWzwzQoTMwROUpGOmF5Uh%2BVf5fYY6jo3QC9EF6T8Uddcw9ZeIygY6pgEFePR91%2Bg7%2BVMtj5k7cWCP6FVwrpBiFl6QvjD4UpvafyFVm5ESA3Yxp4oxjD7wMIVW8vlCwKEV8Lw7%2FP0K8w%2FeHuZ0g7WFANHsOgMQYDeHAB03ElRCtD32LwzLkc8PkTPFzdI5wZAiDWyWw9jaR5EhbWiJ7BPIfZ0zsbmDA2t9DR4HvUuRZBKjUVV25kVXVeSriEGej8gRMcZz6E2hU%2FlcnzZkyZpl&X-Amz-Signature=1023cd7f5de1c6883634caa74ae3e176830d83f0ca63329df1bb5f47c4d3e40c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LYTUDAR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021716Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICX2J7hdWKutlk8vgT45ad5uiWKXFnKHP268OY%2BWBAGSAiBmXwFG99dVebp13BSfVQ0tx65CYl4hSoVcLI4V9LHpPir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMeurtS4dX%2FBTtaNryKtwDvnIyFIyO0CbcKXErBs%2F7GtSI3sKjHf952HGIFIEXiPyCK4Soz%2BDzYzKLtSIio3uHtm0FPJeA6c9VPeDgYFb0HAaMhwoQ0GiQVlxxHp2HVtt3SinBSqeb4Co0O4Fpuni8r76DFwKg7Bqk29BzoCkG15inNQCjFPeMdslBz7ewTt0fE9mKcAEsfe9VDezG8qv8v8tTdYCna%2Fbf2MCo6nTV6Yfqjc8jvejteHkanSpcajewRW0TIc%2F2H246OCtqHL93zXWP06N7T39isW35who8t%2BUJslDKqYGUbS2y0cAQhEqClMUIeMBjgbXATn1AACIXb7F5oCKS4bavXcNB3oX84XYnIvZoFJsOXheOEK06SJnRcGWcCNjKIPs1jwTU%2FM8RXsOUbcUCE90kloxq6PTnzGw%2F1gYOBhx6jH6nVmwTCZCrSRL%2BCHNerHigGkIkV6HxAcLdUovAziw9jIHeN7QD82jlwZcqwaV%2BXBSJlxrgvwW40AT7yAbnoFwh6iOqQqj%2FxyuIKs26P56qi8AuMmfuyTfJMMfxis2MpIThZqszyU7Qvxm5qpBdJOyqUwF2M3%2B3pYazqX0ePYbRtnVHWzwzQoTMwROUpGOmF5Uh%2BVf5fYY6jo3QC9EF6T8Uddcw9ZeIygY6pgEFePR91%2Bg7%2BVMtj5k7cWCP6FVwrpBiFl6QvjD4UpvafyFVm5ESA3Yxp4oxjD7wMIVW8vlCwKEV8Lw7%2FP0K8w%2FeHuZ0g7WFANHsOgMQYDeHAB03ElRCtD32LwzLkc8PkTPFzdI5wZAiDWyWw9jaR5EhbWiJ7BPIfZ0zsbmDA2t9DR4HvUuRZBKjUVV25kVXVeSriEGej8gRMcZz6E2hU%2FlcnzZkyZpl&X-Amz-Signature=2a26ca1179f89e9fd3a2b0861e055a92d1d901ace92615e6d9641bc7d813b023&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
