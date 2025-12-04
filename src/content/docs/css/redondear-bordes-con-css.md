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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVZDVMYK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCUOm5hOqA%2FKAHTeOj%2B0G6f5cYwaSE87XIjf4O14Jy71AIgG%2FxLp4XmQVy0rmXZ1pDyHyN0q%2Bp08I8Y4IQQeyjy8nkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDF%2BQfXDNW2K%2BzeevNCrcA%2FOPBGytdwDT4eU4%2FtLTgiyJ%2FDhsTat1qwolfpIRy8ZeKc1BMtXoebcFIZHSEqlIu5quXfQVl7iAl2CcRWGgD9mpOrysF45qudJiOLjKEGBa2gzNdK51pacnvN3u0%2FeHjdI8Sp0iwkbswZ%2FxDBju8X0XzO5BOKfJCi52Q%2FfuTWxZ48hocu%2Fvr%2FYgNiprRYXwgwMXu31v3HSiqM4YT2n0IcLMtZUWfUL4oguQOsCd5dp%2B9LA48ETNOSYGFWI9BZn6IZNcLATTHqdOFOgafEQEGEsa74ylIVAPjTPPFjuTM1QzYVNEiyRNcavCJHRYyfievpAG38PXZCFqHDi4WBz7p2qDn82y0umWq2XRkANmCoWcKSq9EcvefscvZJQqfXcnsvkr3eft9fR8F8Juj9F%2FCWs7YmpxAje%2BNGuievk%2Fv0wMRbGjaSkkK6o0fTSuCVXyBvJNfo1o7BZ6YvAhPsX2MuIrWLXJhKUDNwIZhP7dQ83A%2BrUwO6eTChvjfxXgG5iTzXowlJpG7%2Bt7KeGslNeU%2FbemJV4x6o2RuKf9Qun0Qa0DbefD1w22FVIqniftHpxB%2FJK4IOBRnDPtaA%2FgkaDiWAEeruQWB8aISg8vHZihHN53ULtfKeXi5661SzCHMLq%2FxskGOqUBILSa4lDwHWlKNnwEHTQWg54K30ZrXfrPXjV7JEesq3KJ5MMWQlckeSY0ix9M1wnuVqceGyC7rfwgTuvrmzIHISc8INtQoDL7SLWJ6Rl8%2Bvue8W%2BkTz9Cuw2bpe8vz401wG74yx9dupdhkWTjZc9RV4lahCeUo95RUxaRX2NErAqD24Bd80lt%2Bh9XZ%2B1bsev%2F%2F15BH%2F66%2BZKXWNZHQV%2FyjeTuL8yy&X-Amz-Signature=6a11a95b00361d37da80d155202224cd803cd130666f7a4e1f3e5153b3aea912&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YVZDVMYK%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T153557Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQCUOm5hOqA%2FKAHTeOj%2B0G6f5cYwaSE87XIjf4O14Jy71AIgG%2FxLp4XmQVy0rmXZ1pDyHyN0q%2Bp08I8Y4IQQeyjy8nkq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDF%2BQfXDNW2K%2BzeevNCrcA%2FOPBGytdwDT4eU4%2FtLTgiyJ%2FDhsTat1qwolfpIRy8ZeKc1BMtXoebcFIZHSEqlIu5quXfQVl7iAl2CcRWGgD9mpOrysF45qudJiOLjKEGBa2gzNdK51pacnvN3u0%2FeHjdI8Sp0iwkbswZ%2FxDBju8X0XzO5BOKfJCi52Q%2FfuTWxZ48hocu%2Fvr%2FYgNiprRYXwgwMXu31v3HSiqM4YT2n0IcLMtZUWfUL4oguQOsCd5dp%2B9LA48ETNOSYGFWI9BZn6IZNcLATTHqdOFOgafEQEGEsa74ylIVAPjTPPFjuTM1QzYVNEiyRNcavCJHRYyfievpAG38PXZCFqHDi4WBz7p2qDn82y0umWq2XRkANmCoWcKSq9EcvefscvZJQqfXcnsvkr3eft9fR8F8Juj9F%2FCWs7YmpxAje%2BNGuievk%2Fv0wMRbGjaSkkK6o0fTSuCVXyBvJNfo1o7BZ6YvAhPsX2MuIrWLXJhKUDNwIZhP7dQ83A%2BrUwO6eTChvjfxXgG5iTzXowlJpG7%2Bt7KeGslNeU%2FbemJV4x6o2RuKf9Qun0Qa0DbefD1w22FVIqniftHpxB%2FJK4IOBRnDPtaA%2FgkaDiWAEeruQWB8aISg8vHZihHN53ULtfKeXi5661SzCHMLq%2FxskGOqUBILSa4lDwHWlKNnwEHTQWg54K30ZrXfrPXjV7JEesq3KJ5MMWQlckeSY0ix9M1wnuVqceGyC7rfwgTuvrmzIHISc8INtQoDL7SLWJ6Rl8%2Bvue8W%2BkTz9Cuw2bpe8vz401wG74yx9dupdhkWTjZc9RV4lahCeUo95RUxaRX2NErAqD24Bd80lt%2Bh9XZ%2B1bsev%2F%2F15BH%2F66%2BZKXWNZHQV%2FyjeTuL8yy&X-Amz-Signature=72dfab6757d297dadbb661a659623e7a88ffc81600034a3ab3a03f1b9a1063e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
