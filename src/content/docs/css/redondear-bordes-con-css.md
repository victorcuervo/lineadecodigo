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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZNOGTS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ll%2FrK5e46oBPQ%2FizfzVZjCLwu9h6qV37l2EdJN760QIgFMHua346tV0jbN03Kl8r16SOji3LIxSs50g6zgSY0XIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOl05HpqqLRo5bldYircA%2B34gR84C6p3iwvm%2B0KfSM41tvZtKj%2FJndqdIje%2B7cHDxOGHfH3B6cjyk%2B3vx7wj%2BHOu2Sz%2FrpKvwBUrvwaXZ0shEPWZ25fh2fLQ8WnqMkts%2BmaepFNBNCt%2FG%2Bw7QTos20eCwwM53HbndbAJFub3b8QXDiws1cjd6aV4MaBpeACWutYE2tP6ucPk9mRdcgWZyLuQEFasJ3QtY2qKgz5m2EyjA%2BEAre4%2BI6mpz1azkbFyo8DbZ7GDs7DedcTMuJcAFO8b4L0jxx5Ohl0Q3tveupzp8GeC60fty%2BCvdeX1loiwnM8udKYWdN6Vrmm5FqSHrBrD%2BH9Nmr%2BspD%2F5ONcYZJ5ajvpu6QswBlg%2F8E00V%2B%2FR3IHPM22ZqMeYZQMe9LXMaQ5LE4QZJa64Ilvj%2FFStMpoL55Rdn4wVL1pqPfGyRc5PNbqTMVXi7edB4X5sdzX0oVe7y9gL23iprZZoZA0JuHPKVFQdTxwGIs1NhYCcHS6IGpKuCHRHt7B%2Fug4ye2dPm%2F5Vw%2F2BBX%2Fd0YaPU6WBqyaT%2FbQRKbCTtz4TKewF%2Bnn7D1P1NTiNiyQpcofnR76KPqA075gUF9%2FUyI2zQ7rm98IFSodu%2BzAEHHjontpBdCdP%2FPknwrJRL3nKa4LeMKWm0MkGOqUBvUqFkXFF5Dk0Dc8M0BnbKd%2FfAZ%2BBwkxhu3HoM16zneJOVRW%2Fvmy49lnuDhM68qQo8Nk1PIvbFZ8p5CwHlyCJD%2FTug%2F%2F3VDRlm0DYyW4GqwyR7ewaPJ3iefbFY%2B3%2Fg9JSfeUjXWhbrlpzH6MgACViJQqapcnJIRcMfRJGTn%2Fpj5mJePJ1AvZ14aoQLgkeKvoQSFiQRDHcq%2BXSEnjdWOSU7I9py85m&X-Amz-Signature=4b2062e7607590ab149b8c910e82bbbdfae13e72413eaae354e49fbe3db3cd62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WZNOGTS%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T155626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8ll%2FrK5e46oBPQ%2FizfzVZjCLwu9h6qV37l2EdJN760QIgFMHua346tV0jbN03Kl8r16SOji3LIxSs50g6zgSY0XIq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOl05HpqqLRo5bldYircA%2B34gR84C6p3iwvm%2B0KfSM41tvZtKj%2FJndqdIje%2B7cHDxOGHfH3B6cjyk%2B3vx7wj%2BHOu2Sz%2FrpKvwBUrvwaXZ0shEPWZ25fh2fLQ8WnqMkts%2BmaepFNBNCt%2FG%2Bw7QTos20eCwwM53HbndbAJFub3b8QXDiws1cjd6aV4MaBpeACWutYE2tP6ucPk9mRdcgWZyLuQEFasJ3QtY2qKgz5m2EyjA%2BEAre4%2BI6mpz1azkbFyo8DbZ7GDs7DedcTMuJcAFO8b4L0jxx5Ohl0Q3tveupzp8GeC60fty%2BCvdeX1loiwnM8udKYWdN6Vrmm5FqSHrBrD%2BH9Nmr%2BspD%2F5ONcYZJ5ajvpu6QswBlg%2F8E00V%2B%2FR3IHPM22ZqMeYZQMe9LXMaQ5LE4QZJa64Ilvj%2FFStMpoL55Rdn4wVL1pqPfGyRc5PNbqTMVXi7edB4X5sdzX0oVe7y9gL23iprZZoZA0JuHPKVFQdTxwGIs1NhYCcHS6IGpKuCHRHt7B%2Fug4ye2dPm%2F5Vw%2F2BBX%2Fd0YaPU6WBqyaT%2FbQRKbCTtz4TKewF%2Bnn7D1P1NTiNiyQpcofnR76KPqA075gUF9%2FUyI2zQ7rm98IFSodu%2BzAEHHjontpBdCdP%2FPknwrJRL3nKa4LeMKWm0MkGOqUBvUqFkXFF5Dk0Dc8M0BnbKd%2FfAZ%2BBwkxhu3HoM16zneJOVRW%2Fvmy49lnuDhM68qQo8Nk1PIvbFZ8p5CwHlyCJD%2FTug%2F%2F3VDRlm0DYyW4GqwyR7ewaPJ3iefbFY%2B3%2Fg9JSfeUjXWhbrlpzH6MgACViJQqapcnJIRcMfRJGTn%2Fpj5mJePJ1AvZ14aoQLgkeKvoQSFiQRDHcq%2BXSEnjdWOSU7I9py85m&X-Amz-Signature=841c080e131ac4f172f31be2f3fc612abf6dac0f229db4bb882cc4f1295e26c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
