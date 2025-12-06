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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXW6C4TS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC01GLvcj8ASkZtx%2FcohZo%2BZO0ItT2iFLsQcvfsSI630wIhAI%2B438ciWyXOX8uRZ28khxneGb29t1twx4RHIXR3r1uhKv8DCHIQABoMNjM3NDIzMTgzODA1IgwTAaLD%2Fdnn%2B4BzOKIq3AMPJSRkHGm1AxXOgWFeRHPCmvOkPtPcxMg0C7qpdSkr8xDg1O5bUukrW1sYy4ZltCziJ%2BlScKzP6%2Fnm5wltb1sKFEJ2pz%2BvEuC4%2FihXgF5Qri9lB1Ifa80mxHE%2BSD0lT6HL1ussDIzDUyRzxhA582X7DlHhmIFUePRuosUYcIbBj1PnUmwfnhQzasTDNPT6dYsAMoXcQhQU3%2FeXeQHwXnNL8JJoMfpOTNqoAVftEqKMqk81Pzqjlf56UCbrNJNNQ5SAMruJ7tsj8wejC00N9upM%2FYCkkuAhQznB1nGBj2Jb%2FxFVvAWX6DwLpSmvS7%2FzKwY4Uoo3JLoe7OFSzwyEA3gsyJGSZQ6A6DpuoRmCuWLTNxg6civF5%2FWCzreQCAsBwC1uEcks%2BUerRWeWstXVe5yYpIet%2FnN75B3xmIjgjYPzE12fQGKW3gNCXKzfdLFc9wl1TOgIKKOmdgSlAnhvpbn5PBTpr2HLYmCwgCM2ZQJoTEHgvvjSAJnNPmURT4mRSxwZg%2FaPNP4N%2BMQOsTAYMQnL498%2BHMjROXsa04I4qXJ4jVX0FtaTnSFyKC%2FP7zRafRSuNF%2BYIuBcar9lSXKp02r1rBeElJabySOw5Ik1X%2BPJd23j2vR2%2Bhz1NuI5FjDW68%2FJBjqkAV5vJtawCHgrOQ%2FS87xFeoI53fHDpGIULEE%2BwNrCbaXDb9dWbbx1HP%2BCPNfVWFPzjxcp78zEwTJfWHVP5H9jrkNGAcIKN8Sor9v5BBC4ZoHbaKyVOtFeCEzLQsToZAWr2HNN%2B%2FBvS5xLOM58CIJ8G01Uo45YyhF648hLsnj97L%2BirQMBA1bc3exhNJKnXIb1tmAj4R5SifWsbJkZsSzSczh88Br8&X-Amz-Signature=ae350db3f09c6daa43154234caad3998936451dbfa3418c662fb8a9a7e0b05da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXW6C4TS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102618Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC01GLvcj8ASkZtx%2FcohZo%2BZO0ItT2iFLsQcvfsSI630wIhAI%2B438ciWyXOX8uRZ28khxneGb29t1twx4RHIXR3r1uhKv8DCHIQABoMNjM3NDIzMTgzODA1IgwTAaLD%2Fdnn%2B4BzOKIq3AMPJSRkHGm1AxXOgWFeRHPCmvOkPtPcxMg0C7qpdSkr8xDg1O5bUukrW1sYy4ZltCziJ%2BlScKzP6%2Fnm5wltb1sKFEJ2pz%2BvEuC4%2FihXgF5Qri9lB1Ifa80mxHE%2BSD0lT6HL1ussDIzDUyRzxhA582X7DlHhmIFUePRuosUYcIbBj1PnUmwfnhQzasTDNPT6dYsAMoXcQhQU3%2FeXeQHwXnNL8JJoMfpOTNqoAVftEqKMqk81Pzqjlf56UCbrNJNNQ5SAMruJ7tsj8wejC00N9upM%2FYCkkuAhQznB1nGBj2Jb%2FxFVvAWX6DwLpSmvS7%2FzKwY4Uoo3JLoe7OFSzwyEA3gsyJGSZQ6A6DpuoRmCuWLTNxg6civF5%2FWCzreQCAsBwC1uEcks%2BUerRWeWstXVe5yYpIet%2FnN75B3xmIjgjYPzE12fQGKW3gNCXKzfdLFc9wl1TOgIKKOmdgSlAnhvpbn5PBTpr2HLYmCwgCM2ZQJoTEHgvvjSAJnNPmURT4mRSxwZg%2FaPNP4N%2BMQOsTAYMQnL498%2BHMjROXsa04I4qXJ4jVX0FtaTnSFyKC%2FP7zRafRSuNF%2BYIuBcar9lSXKp02r1rBeElJabySOw5Ik1X%2BPJd23j2vR2%2Bhz1NuI5FjDW68%2FJBjqkAV5vJtawCHgrOQ%2FS87xFeoI53fHDpGIULEE%2BwNrCbaXDb9dWbbx1HP%2BCPNfVWFPzjxcp78zEwTJfWHVP5H9jrkNGAcIKN8Sor9v5BBC4ZoHbaKyVOtFeCEzLQsToZAWr2HNN%2B%2FBvS5xLOM58CIJ8G01Uo45YyhF648hLsnj97L%2BirQMBA1bc3exhNJKnXIb1tmAj4R5SifWsbJkZsSzSczh88Br8&X-Amz-Signature=e88b0a59ba94a7b66b95f29fa1316c836df2ca29e3bd464d1a053ed01def13c0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
