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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX55IOGF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgxk2mtOQ1Oa8FYj3pP5PB73h3yaC7ia3QV1Z8ARKngAIgSsPDuhmRXiC11zw0pp0obzJT2D2%2BINxtoS55XMAc4bwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzsMRP8oCkZLVbtFCrcA4XFkT4wITyC2loqRpG3N7r4mnWWSuOHwhDnpVssvxRC%2FN3bwjhbqKBvATHmVRJRSFy%2BZZU3ydtfSJfoyrcA%2BphIF76vqs8O5DMzRoKtx0gCJ9lE5P5Ye6GL2ac2ModOXXwpulrS5xYAbUc%2FDmFI15HvIOfYTfJgKQaaCNP%2FS89uIE9UEtx0LH5jZMjAHL8Kkjbg%2BNpFkcyChZG4ykSYPZubHnK2GF%2BQ0mr9kxFR%2BxjirzEYFGssqAAYSpST4sNLuSIwHpTwQ6WW5Lq8rEzkvkTRPNA6noP%2FG49TdlOykJ%2B0grY%2Brin92viIySaKfElU%2BZXEg142EgrFvmslwR2ODYPncB%2B1qmGUb0aGS8ywXYF3kdF7QoQCDeo5rJyIyc9uF7ol5iDnxtkoPrfBwR0ipn4oLufP0iwd3GpPLRTXofjhDJk6imrgQAI2wNadG8NUc9bXSwKzBf2EHQVCwmv6AGDbHsv9EWqouUiZ73XQocvezGuroUDeTxCg18kQtOf689%2BZWZCvjEqMNGyduChxoFKv%2FEruKbtZ6vT7zKOoMvxoC7uh%2BaEPoczeb%2Bj%2F%2BdludoeQhYNCWpPeIQAi3F22Sdlxj9xh1oldg%2F17TalWN8Emxud0idHq%2Bo6xmGonMLzt2ckGOqUBYEsG56AHCs9DJyE6vVfMaUSSZFxqG4cqmImkaY2TVy1pnMqlNx5kDXDXhdtEuMUh1WFpNorF%2BvLTphzz3RmznrXZrpyZYYbV2YErOOmNVB2RWxOqVDMj1N13xtvzyoFkXzYLeS38AARbl5TseVzAobxWc8zDV21WFMTgymhTmrs2Ti1R6GQvGfLLd5lerDBqImnZvgcjVj0Z%2FJkbMaO0G2OAmpUt&X-Amz-Signature=24e6544b594cba7a6860beebeaec09360c95dcb794b1a4a2e3d6aea587da4632&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX55IOGF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T092410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgxk2mtOQ1Oa8FYj3pP5PB73h3yaC7ia3QV1Z8ARKngAIgSsPDuhmRXiC11zw0pp0obzJT2D2%2BINxtoS55XMAc4bwqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEzsMRP8oCkZLVbtFCrcA4XFkT4wITyC2loqRpG3N7r4mnWWSuOHwhDnpVssvxRC%2FN3bwjhbqKBvATHmVRJRSFy%2BZZU3ydtfSJfoyrcA%2BphIF76vqs8O5DMzRoKtx0gCJ9lE5P5Ye6GL2ac2ModOXXwpulrS5xYAbUc%2FDmFI15HvIOfYTfJgKQaaCNP%2FS89uIE9UEtx0LH5jZMjAHL8Kkjbg%2BNpFkcyChZG4ykSYPZubHnK2GF%2BQ0mr9kxFR%2BxjirzEYFGssqAAYSpST4sNLuSIwHpTwQ6WW5Lq8rEzkvkTRPNA6noP%2FG49TdlOykJ%2B0grY%2Brin92viIySaKfElU%2BZXEg142EgrFvmslwR2ODYPncB%2B1qmGUb0aGS8ywXYF3kdF7QoQCDeo5rJyIyc9uF7ol5iDnxtkoPrfBwR0ipn4oLufP0iwd3GpPLRTXofjhDJk6imrgQAI2wNadG8NUc9bXSwKzBf2EHQVCwmv6AGDbHsv9EWqouUiZ73XQocvezGuroUDeTxCg18kQtOf689%2BZWZCvjEqMNGyduChxoFKv%2FEruKbtZ6vT7zKOoMvxoC7uh%2BaEPoczeb%2Bj%2F%2BdludoeQhYNCWpPeIQAi3F22Sdlxj9xh1oldg%2F17TalWN8Emxud0idHq%2Bo6xmGonMLzt2ckGOqUBYEsG56AHCs9DJyE6vVfMaUSSZFxqG4cqmImkaY2TVy1pnMqlNx5kDXDXhdtEuMUh1WFpNorF%2BvLTphzz3RmznrXZrpyZYYbV2YErOOmNVB2RWxOqVDMj1N13xtvzyoFkXzYLeS38AARbl5TseVzAobxWc8zDV21WFMTgymhTmrs2Ti1R6GQvGfLLd5lerDBqImnZvgcjVj0Z%2FJkbMaO0G2OAmpUt&X-Amz-Signature=732dd1fcc7752924cdc05f8dec7e41a8d27c3645ac90f30fb52ae92098daa62c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
