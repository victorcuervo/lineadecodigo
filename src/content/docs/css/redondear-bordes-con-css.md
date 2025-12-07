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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA37PASO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAzGYPTnOuyNBV16JBRiw1UkQmlJ%2BWbQNCwd69w3fEEAIgZnXtidMRBB9%2FcshQhkcEkxunDS8%2BMB%2BSGcdRcfauZGAqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJooUIWpnoDMGOlxKircA7TrJ6jaxnpiAgQxFDwZWsRLlF3JLDNNcAlgHmmx83Y9TZh3ZNhx3D5xAL7OzUB7yrw3DYLDxhypwJ6YwCO0i0R%2BYqkvxC4gEwzFjhYo1Spa1psdWz5V3H17ICGhDmP%2BJxJxVC3kJCaC%2FuIfTahOXoYLKg5TlmYdCjAERwEeN%2FuSxpuAYqLD%2FqtAAGt8TDyV8xVD%2FYJfoRSuTERIx4fsaV6CkI%2FKMMlJmQCj2EjIHqPYztU%2BI0XkXZIpkTi2YljMe7H90WUn5Dfz4ssg%2FPkMWIp4WV2nxxcMKDQN7fWNqshTgIqr5pHvrdAiRbsqZCRJvLgoJuzMWeMCXc9doTwYZgpA8uTBjLPwW%2Fdor7YYyU%2BXqkRw7KFLPbrv8HLy3aTcg%2Bs%2FnHpmYktiNxHiGPfsY5Jq6PkT1t0XFny%2Fm1qm1Eruec3uPTU5QRbhgrhasV4ajDqs4yndNcIoWAaWckMRx5k6rWBye0BzCwhrmGwnQsqkRkIT2DF5AvQpeYUw2qN%2FS5XaU08DErnnAhHSSw6k5UvIhsWOkflK321d%2FQv71%2Bw%2FRXRVvLYiiC%2F6cFPqLgVD6SIJwT2AlcCJd3OI709M2EHXHJ4PAQq2p5VKnx21fOg1JGWGLBLUykxThM8dMJyF2MkGOqUB2JsIutdmYluoq9XP1MajWz4boyvJZxl3ZCYyLo0kPQ71t9Gv23QxlEeHPwSIjn3%2FqiKruGH4iSL6Ds7wEKuFtlMWh%2FvPuFmVGGdFKgb19fffIMLjP9OdPoAsNtguGZdHHo0errwF3DGCnE6X7oPbEHf0ynujaizYVAJxVHTMSIgaiZaBLdDR0eYbYF%2FKY2ZVs6XQUeqUwgAVQqfQqVoSo%2FwU9kSG&X-Amz-Signature=a2e4b3253b1bc20513d825c195ec4d4c6f381decd62c8b34ea3ce992d9fe421f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WA37PASO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T230244Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDAzGYPTnOuyNBV16JBRiw1UkQmlJ%2BWbQNCwd69w3fEEAIgZnXtidMRBB9%2FcshQhkcEkxunDS8%2BMB%2BSGcdRcfauZGAqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJooUIWpnoDMGOlxKircA7TrJ6jaxnpiAgQxFDwZWsRLlF3JLDNNcAlgHmmx83Y9TZh3ZNhx3D5xAL7OzUB7yrw3DYLDxhypwJ6YwCO0i0R%2BYqkvxC4gEwzFjhYo1Spa1psdWz5V3H17ICGhDmP%2BJxJxVC3kJCaC%2FuIfTahOXoYLKg5TlmYdCjAERwEeN%2FuSxpuAYqLD%2FqtAAGt8TDyV8xVD%2FYJfoRSuTERIx4fsaV6CkI%2FKMMlJmQCj2EjIHqPYztU%2BI0XkXZIpkTi2YljMe7H90WUn5Dfz4ssg%2FPkMWIp4WV2nxxcMKDQN7fWNqshTgIqr5pHvrdAiRbsqZCRJvLgoJuzMWeMCXc9doTwYZgpA8uTBjLPwW%2Fdor7YYyU%2BXqkRw7KFLPbrv8HLy3aTcg%2Bs%2FnHpmYktiNxHiGPfsY5Jq6PkT1t0XFny%2Fm1qm1Eruec3uPTU5QRbhgrhasV4ajDqs4yndNcIoWAaWckMRx5k6rWBye0BzCwhrmGwnQsqkRkIT2DF5AvQpeYUw2qN%2FS5XaU08DErnnAhHSSw6k5UvIhsWOkflK321d%2FQv71%2Bw%2FRXRVvLYiiC%2F6cFPqLgVD6SIJwT2AlcCJd3OI709M2EHXHJ4PAQq2p5VKnx21fOg1JGWGLBLUykxThM8dMJyF2MkGOqUB2JsIutdmYluoq9XP1MajWz4boyvJZxl3ZCYyLo0kPQ71t9Gv23QxlEeHPwSIjn3%2FqiKruGH4iSL6Ds7wEKuFtlMWh%2FvPuFmVGGdFKgb19fffIMLjP9OdPoAsNtguGZdHHo0errwF3DGCnE6X7oPbEHf0ynujaizYVAJxVHTMSIgaiZaBLdDR0eYbYF%2FKY2ZVs6XQUeqUwgAVQqfQqVoSo%2FwU9kSG&X-Amz-Signature=fc8ca1e38f4aae0ff6794bf24fca30567532974b7ac7a16d5ad68cd8ae9655d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
