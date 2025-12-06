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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6BT73B5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcYVoVBUTAGRqVsU4ieDyFnnCimHPx0DISnUt6FzenUwIhAKEcLWQGXXUMvOlGa24kNR21Sr232cND9HQaTmX2QkJuKv8DCG0QABoMNjM3NDIzMTgzODA1IgwhKJRbkKYFc48V6XMq3APNH21zkzmo4PTapE7Qq%2FkcMNuyjQcNgqpQ2qyZFNf8QueQotPTq47tStSiDfQQPfzK0HaIY3w2YpP%2BAqKMG%2Fyc8x%2BYClfRTsAKcStKNM9mjjNuSfXCxqqzrTMViK%2FxA87D6bjmtwxUN3m%2FP3i1OtO1ynostdcmQG3lCha9c1SGX53ghtU0HxJ%2BD6jBFxFC50PLte9HWDSeBzsD9wHPs81OKQ%2FS4xp3W8yFxD3pZ8maGjwpsmXBFyEIvBx6Zy9thQuOqc9DMpSnhJBQzWNRuhURS6CgkymHPkBL%2B2Yy922bSYyvKkC3Ja%2BEZxFG4%2BSagETQIfzIyBNKxInhDceklT38y5O8xxspIDaiHOknI8cmD8BU9BRIwInabyq8TT%2Bgn%2FRwuPhyqMpb9mlOVAjI8cYKFVsGtgTv9T%2FgU2X5mU3dSxbkDs9iYZDA%2FdZLdSYNteju5t1Y%2F221p0ODDhuJdLEQzAstpmY9sk3EVCh4ugrlETSJz3LymjoISKbJFtJFlfY8HsBn0%2FfijFWCsrbmK3VQnRTVMoz2Abf%2FbG%2BlLs5D%2FVujKQGX0t3qa2lH5OonbQnXNWXNexGBiHahYfnsD6chFQbkaNji6QfBLdu1VLixL%2Fmg%2BYHzOfKIs4rhizDtw87JBjqkAWdQ6kvqyUKq%2BATmaj5kn1ElfiOW6KzOLMgYTGFthzF3SaZjA4MbftReTUKduINjD84gP32BZEk6F7MTXhdE7%2FijeQf0hpp47ORiRrbh5tvJQLiIgXtRil6oXG%2F3Iqrx1qWaQyt%2Fj7YHvDZ14ZeHDuHQ8UEHs%2BcnfltTpDw6JUbi%2BD1uechPuYqE3N2omthNuntqJj2YHLRMFGL6m8u1qG%2FltV3v&X-Amz-Signature=8c4ca8c63aabbd76228366189a8f27e70f74f3ce1e5bcb5a01497a1dfa2c8792&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6BT73B5%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDcYVoVBUTAGRqVsU4ieDyFnnCimHPx0DISnUt6FzenUwIhAKEcLWQGXXUMvOlGa24kNR21Sr232cND9HQaTmX2QkJuKv8DCG0QABoMNjM3NDIzMTgzODA1IgwhKJRbkKYFc48V6XMq3APNH21zkzmo4PTapE7Qq%2FkcMNuyjQcNgqpQ2qyZFNf8QueQotPTq47tStSiDfQQPfzK0HaIY3w2YpP%2BAqKMG%2Fyc8x%2BYClfRTsAKcStKNM9mjjNuSfXCxqqzrTMViK%2FxA87D6bjmtwxUN3m%2FP3i1OtO1ynostdcmQG3lCha9c1SGX53ghtU0HxJ%2BD6jBFxFC50PLte9HWDSeBzsD9wHPs81OKQ%2FS4xp3W8yFxD3pZ8maGjwpsmXBFyEIvBx6Zy9thQuOqc9DMpSnhJBQzWNRuhURS6CgkymHPkBL%2B2Yy922bSYyvKkC3Ja%2BEZxFG4%2BSagETQIfzIyBNKxInhDceklT38y5O8xxspIDaiHOknI8cmD8BU9BRIwInabyq8TT%2Bgn%2FRwuPhyqMpb9mlOVAjI8cYKFVsGtgTv9T%2FgU2X5mU3dSxbkDs9iYZDA%2FdZLdSYNteju5t1Y%2F221p0ODDhuJdLEQzAstpmY9sk3EVCh4ugrlETSJz3LymjoISKbJFtJFlfY8HsBn0%2FfijFWCsrbmK3VQnRTVMoz2Abf%2FbG%2BlLs5D%2FVujKQGX0t3qa2lH5OonbQnXNWXNexGBiHahYfnsD6chFQbkaNji6QfBLdu1VLixL%2Fmg%2BYHzOfKIs4rhizDtw87JBjqkAWdQ6kvqyUKq%2BATmaj5kn1ElfiOW6KzOLMgYTGFthzF3SaZjA4MbftReTUKduINjD84gP32BZEk6F7MTXhdE7%2FijeQf0hpp47ORiRrbh5tvJQLiIgXtRil6oXG%2F3Iqrx1qWaQyt%2Fj7YHvDZ14ZeHDuHQ8UEHs%2BcnfltTpDw6JUbi%2BD1uechPuYqE3N2omthNuntqJj2YHLRMFGL6m8u1qG%2FltV3v&X-Amz-Signature=2de5fd3808ef97dee15b3e935c88057c35c844e9f6b0796f434e4f359067d1b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
