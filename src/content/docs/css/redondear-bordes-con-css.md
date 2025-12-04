---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DEQXRL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCTvv5UQ5hRur9a%2FYtI%2FfzAG9rcMfkiSa23QXK%2BN%2B79%2FgIhAOnNpqTjX9ZcMLf0Rgq0NZ0yuP%2F%2BGMnHuvnKxwGo3ttEKv8DCEIQABoMNjM3NDIzMTgzODA1IgwRO0WM2HnFgFFR1YIq3APYA5RCcyB2TnOU2Vl8opf1zQIrEqk29KQQiEPEKo1Oi%2FFfgsE25VjaO7ESIFBUVm%2Bh4WsXT%2B3lkCfHqlx38xJN4fkhWX%2B1g6vup4uIU0S5%2BLFo5kbgya9Wt5NRR38HW14yJeRYpcotEXb5L%2FD98aW0oZKlfFs6zxIKOmIsFvW0A%2BlbBL7LHSir2ZHGKoFueDmZFpqu%2BuI04awb0%2F6V%2BSD2TErGgBbCd7qu3qUdHCLSDkM%2FCLtOWyzlRvjEByZyzyEh2LlOGGRop%2Ff56R1lCAGRfJnwHK4HiMdga1%2BCy35ENmfmqCICYM6TLcIpnsv5ownfkNM59o1jFyDfXm0BJ%2BVz8tz%2BG5Hkn%2FJ%2BwqqhDw37KzDVizITwmnLZh44jYQMKYOeeJZf7wESt2ywYTlx12oZyH1EVJqfKnRYAhyk0yuxtktoKb4c3Pgac5qnoOxGd6u%2F%2B4M9yAYhRIRelJRZHV6EFJ%2Fq4KUFfJUXOjxuF3zqHKr1XwOjyvgs9fzgHHORbmQL4coC5oo02aOiWS6B%2BPh07NuEzjmioW9c%2BaCwKTVwBJ%2FUDxVb%2BiT0emjpMzIeTcpQNqNmYP%2Byv8EqIShlVIpxImCIXvjVeilmIsN63QomBzt0%2FOg1z0PUj3p9FDD1q8XJBjqkAaaIGu8cm1L3EgjvdOGqcgxlwGYK5XxrY7DmFAeBffkyKWmVSTahNhEPsroBftJmHnbKRP%2B%2BSfV5dwugequuhSCusmM3s%2BbGv%2BXyZEze%2FEXN4tSn0hb5fWFig4OaaUCz5SuFlFg22Y6Tdr%2F6%2BnnlckxKcNEjBzXOiZxiGG%2BnmKkUp082oYOMesNV1EBKpXxrAO5cIE2DLTeMPyEKC7XNNE%2Bu3hYI&X-Amz-Signature=cb45345ac661f80d73b8991f1a151a9374b98325902165350d85d12b49add6ca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R5DEQXRL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJIMEYCIQCTvv5UQ5hRur9a%2FYtI%2FfzAG9rcMfkiSa23QXK%2BN%2B79%2FgIhAOnNpqTjX9ZcMLf0Rgq0NZ0yuP%2F%2BGMnHuvnKxwGo3ttEKv8DCEIQABoMNjM3NDIzMTgzODA1IgwRO0WM2HnFgFFR1YIq3APYA5RCcyB2TnOU2Vl8opf1zQIrEqk29KQQiEPEKo1Oi%2FFfgsE25VjaO7ESIFBUVm%2Bh4WsXT%2B3lkCfHqlx38xJN4fkhWX%2B1g6vup4uIU0S5%2BLFo5kbgya9Wt5NRR38HW14yJeRYpcotEXb5L%2FD98aW0oZKlfFs6zxIKOmIsFvW0A%2BlbBL7LHSir2ZHGKoFueDmZFpqu%2BuI04awb0%2F6V%2BSD2TErGgBbCd7qu3qUdHCLSDkM%2FCLtOWyzlRvjEByZyzyEh2LlOGGRop%2Ff56R1lCAGRfJnwHK4HiMdga1%2BCy35ENmfmqCICYM6TLcIpnsv5ownfkNM59o1jFyDfXm0BJ%2BVz8tz%2BG5Hkn%2FJ%2BwqqhDw37KzDVizITwmnLZh44jYQMKYOeeJZf7wESt2ywYTlx12oZyH1EVJqfKnRYAhyk0yuxtktoKb4c3Pgac5qnoOxGd6u%2F%2B4M9yAYhRIRelJRZHV6EFJ%2Fq4KUFfJUXOjxuF3zqHKr1XwOjyvgs9fzgHHORbmQL4coC5oo02aOiWS6B%2BPh07NuEzjmioW9c%2BaCwKTVwBJ%2FUDxVb%2BiT0emjpMzIeTcpQNqNmYP%2Byv8EqIShlVIpxImCIXvjVeilmIsN63QomBzt0%2FOg1z0PUj3p9FDD1q8XJBjqkAaaIGu8cm1L3EgjvdOGqcgxlwGYK5XxrY7DmFAeBffkyKWmVSTahNhEPsroBftJmHnbKRP%2B%2BSfV5dwugequuhSCusmM3s%2BbGv%2BXyZEze%2FEXN4tSn0hb5fWFig4OaaUCz5SuFlFg22Y6Tdr%2F6%2BnnlckxKcNEjBzXOiZxiGG%2BnmKkUp082oYOMesNV1EBKpXxrAO5cIE2DLTeMPyEKC7XNNE%2Bu3hYI&X-Amz-Signature=ae56c6fb3abe0f5485b5a1ab857a765f95fe397d64f283a52c7da6ec55bbd16f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
