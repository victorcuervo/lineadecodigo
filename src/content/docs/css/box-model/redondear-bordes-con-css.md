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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKPX7ZO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ8Qmd06aKhm8a4M0srAYuASLCpDJwfxnh6VBejIJ9WQIhAOkeEwbg6TP%2BeXItDc8JpgmJkz7nuFoeNp3oGMD3l0F7Kv8DCH8QABoMNjM3NDIzMTgzODA1IgyPY6Qr0uJKa8HfVqsq3ANnC72752%2BZ%2F%2F%2BL7uchoIW6cPzg%2Bzs%2F5EezP71zU6%2FWteksxbiXEXrQrqJhhDIY7TaodECIfP6VIwZPXAnXWTsAvzfXbz4fWPen4nxz8y0PrPXFFIJ%2BJKjAldoffnFY2OFnkX4nVV4%2FXoKgSq%2FDxm%2BcVbmqSCR9NMrMzA%2BvTP5V4vOI7SHUVVBQ51YvAMApQTksUgWheRe6CYj136uwBrjP%2FYOLQAlQ2JuM%2BZZMaHFjwQ7efxSW4Cktjli0dqedgZTscv7i4WAhisOx%2FFFiK5OGf%2BUfY%2BGjdP%2B64KUUsiEVcvr6n7JoMtj2UY89UvOePUcv130pGldxVTMgrxLfXxOerxoqwRVHtYx1VT0bIl7QkgLGP2SzyddHQd%2F3hG%2BbbPR7ogiP35fw6Fk5RPXqWYevbILs2q53NLmPFureGYfOONOVLNqKZUv9X1HeSEHoe7v5JmJRe8dRhqsqZ%2FxfG%2FPDckoz%2BuHxWOON%2FtcbzySw8UTh3e0UKfcyrXXGTdccnLwKycuAxi6v3AHGF5Ad%2F%2Bg5mKxfhREc2y3Mq2nmaTBPBEWYADQpAnhp%2B4Fv2YGJVjuaVsSeLPD2%2BWhgQYbt0Oz6EcYB9VLuj7qMAkhxIKgQEZ%2B1mEVCn%2BOagizE0jDf4YrKBjqkAfL5Z7RWYo%2BfnRhnSJZeJv82r1a%2BuZQFm1DbUVIIo5OSX9cBdt9i4Plsc21WZe9UWUXZSc0myQvqxJKIa4%2BO21NZ2ZidsfuRa6cATPBw58q2SNxEpSL7055RQIMq%2BDFcoKEAeR3Im4ycrl0h8L8MlvkQsP6nsMTkdSNSStrSI%2Fz%2Bfsu23mk%2BzRoZmhfLqdSTz4jDAwrNXPKphU5NwfUXyIujkpef&X-Amz-Signature=09b39c5d7973dd602f6cb98234b7dfec8d200be66cc680e17fc75e18a0032d7f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666CKPX7ZO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCZ8Qmd06aKhm8a4M0srAYuASLCpDJwfxnh6VBejIJ9WQIhAOkeEwbg6TP%2BeXItDc8JpgmJkz7nuFoeNp3oGMD3l0F7Kv8DCH8QABoMNjM3NDIzMTgzODA1IgyPY6Qr0uJKa8HfVqsq3ANnC72752%2BZ%2F%2F%2BL7uchoIW6cPzg%2Bzs%2F5EezP71zU6%2FWteksxbiXEXrQrqJhhDIY7TaodECIfP6VIwZPXAnXWTsAvzfXbz4fWPen4nxz8y0PrPXFFIJ%2BJKjAldoffnFY2OFnkX4nVV4%2FXoKgSq%2FDxm%2BcVbmqSCR9NMrMzA%2BvTP5V4vOI7SHUVVBQ51YvAMApQTksUgWheRe6CYj136uwBrjP%2FYOLQAlQ2JuM%2BZZMaHFjwQ7efxSW4Cktjli0dqedgZTscv7i4WAhisOx%2FFFiK5OGf%2BUfY%2BGjdP%2B64KUUsiEVcvr6n7JoMtj2UY89UvOePUcv130pGldxVTMgrxLfXxOerxoqwRVHtYx1VT0bIl7QkgLGP2SzyddHQd%2F3hG%2BbbPR7ogiP35fw6Fk5RPXqWYevbILs2q53NLmPFureGYfOONOVLNqKZUv9X1HeSEHoe7v5JmJRe8dRhqsqZ%2FxfG%2FPDckoz%2BuHxWOON%2FtcbzySw8UTh3e0UKfcyrXXGTdccnLwKycuAxi6v3AHGF5Ad%2F%2Bg5mKxfhREc2y3Mq2nmaTBPBEWYADQpAnhp%2B4Fv2YGJVjuaVsSeLPD2%2BWhgQYbt0Oz6EcYB9VLuj7qMAkhxIKgQEZ%2B1mEVCn%2BOagizE0jDf4YrKBjqkAfL5Z7RWYo%2BfnRhnSJZeJv82r1a%2BuZQFm1DbUVIIo5OSX9cBdt9i4Plsc21WZe9UWUXZSc0myQvqxJKIa4%2BO21NZ2ZidsfuRa6cATPBw58q2SNxEpSL7055RQIMq%2BDFcoKEAeR3Im4ycrl0h8L8MlvkQsP6nsMTkdSNSStrSI%2Fz%2Bfsu23mk%2BzRoZmhfLqdSTz4jDAwrNXPKphU5NwfUXyIujkpef&X-Amz-Signature=2d50a709662fcaa9741605bfb51192f3ece2057bbeed9bc92f32312c8345ae2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
