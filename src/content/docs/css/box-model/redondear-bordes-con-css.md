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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGE5MV4T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbzbCQEi3AjhdqyuEGJVKs0wCogfH8yCGtc7KtM899sAiEA3rugWsJt%2B4DGr63eIDB1nbigfLkXwm0V2y3LPL0Pujgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJXQlNweo0zmvZ447yrcAwq4jQ7LHQK2GN5tnuYJADZm5pi1XRv6VrAGL6EM5ge6t0pDPpkHDtJmKTxX4bQdLq1YqO43MadvQgVhyG3DP7AOM2aJ3vc6xLWLCYqUdoncGK%2FtNRSZ5Gm8o7MkIpCWW8uXfZyn0BCJE1xUiggAcs0UaCihYRWpJxOz7cOkRARxMSqMwFVFeI0OS4liEBg%2FFEh4ztSsMnuQ1v812rrvQFLwutkJywkqPhlZcpos%2F5ouTZjMa8iwrst1gff157cvjuZ%2Fsw5Ah%2Bt39mqj2dUuh5eLzUj4XxPny0OeQklzX88cg8uXTekNYANltbk4j1Q9n7uA%2Fo7fMDEWwwDbiOa9z%2FCcKkpCZzxB2RAtPzkNmBdnlfOm6W7yxvOXK9LbJ71yFBLb72g%2Be1Nw%2Bd2eniku91TbweFFZ1NtcAP8KizjC0MZ%2Fmrb0oK2N9VG2tFFeyFo02Ls6tfpc1a2i77SOpRgrJKhW2zFH29yd56RvNHQc9dW4eTgrVCGHMqDqMqyaQYNJW8IJVeB%2Fyh93J8eC2Rh%2Bp%2FGnKpJlu%2BwVG%2B7tBdXTo550NTF5FPN7K47BSWRYGcEEwvqnI0Ue3NcElyE7yn6FPtRGSAV5VGDhBUG9pzEQ36argJhcSFWjcKt9OyeMMvpiMoGOqUBCSFaL5ISYb7ohWMqey8N1dVZAYTeiaPyP%2BbXl9D%2BrhvfhzBLdLivSDkuZatgMThqlvCjNS3ZYLYLPrIiIEePjv5kUT%2FRQNgBQrboNm%2FmG6nGe1g0EA4%2Bc6MS8gbQByurPQNsamrQ4bfK8zqzDP3tRsU1Cn5zCShR6WaffYNQnHETIRlaAYaCHUWsPM144JIiDQenG%2BE0AtKy8mikihs4AVT9suGi&X-Amz-Signature=07969542dbb6b45006a65b8155df9edb10df54f50f30c9698ef349c439813436&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGE5MV4T%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICbzbCQEi3AjhdqyuEGJVKs0wCogfH8yCGtc7KtM899sAiEA3rugWsJt%2B4DGr63eIDB1nbigfLkXwm0V2y3LPL0Pujgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDJXQlNweo0zmvZ447yrcAwq4jQ7LHQK2GN5tnuYJADZm5pi1XRv6VrAGL6EM5ge6t0pDPpkHDtJmKTxX4bQdLq1YqO43MadvQgVhyG3DP7AOM2aJ3vc6xLWLCYqUdoncGK%2FtNRSZ5Gm8o7MkIpCWW8uXfZyn0BCJE1xUiggAcs0UaCihYRWpJxOz7cOkRARxMSqMwFVFeI0OS4liEBg%2FFEh4ztSsMnuQ1v812rrvQFLwutkJywkqPhlZcpos%2F5ouTZjMa8iwrst1gff157cvjuZ%2Fsw5Ah%2Bt39mqj2dUuh5eLzUj4XxPny0OeQklzX88cg8uXTekNYANltbk4j1Q9n7uA%2Fo7fMDEWwwDbiOa9z%2FCcKkpCZzxB2RAtPzkNmBdnlfOm6W7yxvOXK9LbJ71yFBLb72g%2Be1Nw%2Bd2eniku91TbweFFZ1NtcAP8KizjC0MZ%2Fmrb0oK2N9VG2tFFeyFo02Ls6tfpc1a2i77SOpRgrJKhW2zFH29yd56RvNHQc9dW4eTgrVCGHMqDqMqyaQYNJW8IJVeB%2Fyh93J8eC2Rh%2Bp%2FGnKpJlu%2BwVG%2B7tBdXTo550NTF5FPN7K47BSWRYGcEEwvqnI0Ue3NcElyE7yn6FPtRGSAV5VGDhBUG9pzEQ36argJhcSFWjcKt9OyeMMvpiMoGOqUBCSFaL5ISYb7ohWMqey8N1dVZAYTeiaPyP%2BbXl9D%2BrhvfhzBLdLivSDkuZatgMThqlvCjNS3ZYLYLPrIiIEePjv5kUT%2FRQNgBQrboNm%2FmG6nGe1g0EA4%2Bc6MS8gbQByurPQNsamrQ4bfK8zqzDP3tRsU1Cn5zCShR6WaffYNQnHETIRlaAYaCHUWsPM144JIiDQenG%2BE0AtKy8mikihs4AVT9suGi&X-Amz-Signature=b7a4eafbfd0e3eb7f00018349b5254e483a5780290073e850e1503a2d623c219&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
