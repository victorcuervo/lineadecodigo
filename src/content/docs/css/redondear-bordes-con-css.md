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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDX6QTL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpeRDCsBokM5FV8dncoHVGCPeMsqblEfsc3B5UZM9XNAiEAxZylqnuUPWNWzZKhkW5qZKOBgAs1zyng%2BuQR%2FYsLmTUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDt0bbNJxQ1vs2sPHSrcA9SwKlV%2B9jsIZtyYHHBeGzRtDpmmrPvtXR%2F%2FiaK1Ing%2BIgK0iwLH71%2Bstx8j9YL3xJ4SUvc7FcK9oBgmwXDU2HB31ko32n4SsZev3yLVNB54lmuPWaPQE2Hf4Hn9iu5A%2BKiiMVf2BYOK9G%2FYmoAt2GRGWryafiL7ZEcIMviUuC9Zs18ywkHHM0%2BF0CSZhP0mzI0XJdFW9JQkWs2eqgrp8bbXE7P%2FdK6QwyES7pFP%2Bly3pKwEuLYQcadr%2Bx8U5oLFeWEK7miogoMnojmm7rdZdbLx40nXd%2Bue1AkeyEb9Q9K0vSBF3%2FGwuYQUy2EotrMT%2BMEKP4AMHSlgVvzf2f%2BOuPDJxctSopX%2Ft6Ftju9QLuTrpYk%2FazjbkLGRIXN%2B5x%2B4kligiW2AncwjLRx6WLQNX9SwjnWnVSydwqmwToQVRQaHjiHkKdlG2viXpemn56%2B9%2F1Gx%2B7tBbhTVhX0hECp6j6m%2F2OpS0g6Felx%2FluHJQ9dpu52PWIDA9Z%2F3ctrE3SyfiHmteEubmfFYBpZai4F4Z9PrJHwNwh0b3E4XXuTkfvVowCgaletrAF0y86TWJxZ7LygzqEW0Zt7LK%2FHpntZMNiNnw9moX0Q76Q%2FgX4FwynB26Ll8XdAafdoB128CMI%2Bp18kGOqUBSW8lMmy0pSkVuJFOdcNogL99S%2F3fzw2gDfaJKPiygBUxnEInNmI8fLv3LkX905DN024WfttmP%2FvxODGw3d78Ldz9dOY0DMVmsrpVCAhUqlAWhmcEjLxRmIFckL%2FqFlkQm0Olbp7X7B5uJqBgJT3jERjOU%2FcQU4AAtzHbnGlAx6CgI%2Frf4ZUb2bMJ7wyQQgQ6CfYQnfFEghsj7iobgU3DqbkKbfIb&X-Amz-Signature=51359827e87f2c3d7a9fdeabfae17725c77e36b30a74f2aa1a9a33fbd5903738&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFDX6QTL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194539Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHpeRDCsBokM5FV8dncoHVGCPeMsqblEfsc3B5UZM9XNAiEAxZylqnuUPWNWzZKhkW5qZKOBgAs1zyng%2BuQR%2FYsLmTUqiAQIlP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDt0bbNJxQ1vs2sPHSrcA9SwKlV%2B9jsIZtyYHHBeGzRtDpmmrPvtXR%2F%2FiaK1Ing%2BIgK0iwLH71%2Bstx8j9YL3xJ4SUvc7FcK9oBgmwXDU2HB31ko32n4SsZev3yLVNB54lmuPWaPQE2Hf4Hn9iu5A%2BKiiMVf2BYOK9G%2FYmoAt2GRGWryafiL7ZEcIMviUuC9Zs18ywkHHM0%2BF0CSZhP0mzI0XJdFW9JQkWs2eqgrp8bbXE7P%2FdK6QwyES7pFP%2Bly3pKwEuLYQcadr%2Bx8U5oLFeWEK7miogoMnojmm7rdZdbLx40nXd%2Bue1AkeyEb9Q9K0vSBF3%2FGwuYQUy2EotrMT%2BMEKP4AMHSlgVvzf2f%2BOuPDJxctSopX%2Ft6Ftju9QLuTrpYk%2FazjbkLGRIXN%2B5x%2B4kligiW2AncwjLRx6WLQNX9SwjnWnVSydwqmwToQVRQaHjiHkKdlG2viXpemn56%2B9%2F1Gx%2B7tBbhTVhX0hECp6j6m%2F2OpS0g6Felx%2FluHJQ9dpu52PWIDA9Z%2F3ctrE3SyfiHmteEubmfFYBpZai4F4Z9PrJHwNwh0b3E4XXuTkfvVowCgaletrAF0y86TWJxZ7LygzqEW0Zt7LK%2FHpntZMNiNnw9moX0Q76Q%2FgX4FwynB26Ll8XdAafdoB128CMI%2Bp18kGOqUBSW8lMmy0pSkVuJFOdcNogL99S%2F3fzw2gDfaJKPiygBUxnEInNmI8fLv3LkX905DN024WfttmP%2FvxODGw3d78Ldz9dOY0DMVmsrpVCAhUqlAWhmcEjLxRmIFckL%2FqFlkQm0Olbp7X7B5uJqBgJT3jERjOU%2FcQU4AAtzHbnGlAx6CgI%2Frf4ZUb2bMJ7wyQQgQ6CfYQnfFEghsj7iobgU3DqbkKbfIb&X-Amz-Signature=815a42976ff5794c11ba020864eabafa56e6e9754ccae6f41cca12c21b8a02f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
