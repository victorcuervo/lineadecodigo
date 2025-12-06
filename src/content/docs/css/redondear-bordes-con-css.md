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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCEB26H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPjw2pFqf430PndB%2FETEaHnlxmbiiAO2Q7ml6VhnTOnAiBulGrOsbpjUVc2T5pWLT4mILuLd%2FJEi3jicuiztHSOnSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMX4ZyS3tVZpMkDoS6KtwDDXdce3%2FzCA19uDdmqzz8O7A%2BIgj1nbZGrE1Y2%2FixbUOK%2FS9Gmd4c69l7abtsJs6V2FLcwjWmLAusjJWsmp63R32t8MSrkBozLyAqDgOnlb1RrEVA6JikiMKXu9jmzPsVO6wlSNZKqUNuwsH4%2FIGnyxYjkp0uc%2FfKjq53tHkCrWc%2BUyHt6WIkUGjNNgpXMnZtTupqx8FGv%2FoXSDF9nU7dJIKKcwDFvFvpNZUrU5hSKMAPFQ9ucPWqskee%2Bfqzcg7h5aYkXa4Oy42iJ7B2mS%2FE78mVz%2B7Uuz9kM4yNPLCg1B7J0NlrxRR09O43Yp2fm%2FxiK4YVL29emfhTO62K5aPd0VrssxMohW9m3bRnl3WcHmq%2F6EWOoe%2BbOuWbcWiGNpJt3BlEHZI2nlEdp8CjHxUf6Zz0mcESxJ6hVbVWpMCBVb2Ep2X3COQSBOA%2FWZ27%2BXpzdwpMus5aWkHkWBQssY8C068%2Bpu6OXPWqhNZ%2Bf%2BcE%2FqR84r4RXehTUVUnY%2FaQuuLGBO%2BpfehZ0nefrVRtypxu6q%2BSLrWYH3vBAN4F5aUthh8pdsNNRB%2BTTgPeTny9JKYMMa%2BQ3m%2FfRaK7%2BuelgDvFRL1PheXOAncOV0d7W5DHCrEZckPbep8PPKZwIrQw2NPSyQY6pgFuGFx469b4QZpJiqHhuKLj%2B2WY0zADz2BbBT%2B1uz9mOGJ3btKQUC%2Fs2b0n1Hy0C7N8dNpK%2FszTxUrVx0B0UUxq5RgQyPHyswR9vAOCy%2F72j8qKWkKF9hukzeJ11mKIz0njgp%2FOP%2BEcF4QkXfbgmq%2BIhnsS4Mde8yfzR9UJJuhaB4E%2F6X27IETttDFCfdmCuYFhIKbdFCWE4I9vzBmn4ugMuUUT4Cix&X-Amz-Signature=95273df9a793839864521935e5e73abf9db69e3c3859ba0e0fa5296a0aa3fbaf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZZCEB26H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T232738Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICPjw2pFqf430PndB%2FETEaHnlxmbiiAO2Q7ml6VhnTOnAiBulGrOsbpjUVc2T5pWLT4mILuLd%2FJEi3jicuiztHSOnSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMX4ZyS3tVZpMkDoS6KtwDDXdce3%2FzCA19uDdmqzz8O7A%2BIgj1nbZGrE1Y2%2FixbUOK%2FS9Gmd4c69l7abtsJs6V2FLcwjWmLAusjJWsmp63R32t8MSrkBozLyAqDgOnlb1RrEVA6JikiMKXu9jmzPsVO6wlSNZKqUNuwsH4%2FIGnyxYjkp0uc%2FfKjq53tHkCrWc%2BUyHt6WIkUGjNNgpXMnZtTupqx8FGv%2FoXSDF9nU7dJIKKcwDFvFvpNZUrU5hSKMAPFQ9ucPWqskee%2Bfqzcg7h5aYkXa4Oy42iJ7B2mS%2FE78mVz%2B7Uuz9kM4yNPLCg1B7J0NlrxRR09O43Yp2fm%2FxiK4YVL29emfhTO62K5aPd0VrssxMohW9m3bRnl3WcHmq%2F6EWOoe%2BbOuWbcWiGNpJt3BlEHZI2nlEdp8CjHxUf6Zz0mcESxJ6hVbVWpMCBVb2Ep2X3COQSBOA%2FWZ27%2BXpzdwpMus5aWkHkWBQssY8C068%2Bpu6OXPWqhNZ%2Bf%2BcE%2FqR84r4RXehTUVUnY%2FaQuuLGBO%2BpfehZ0nefrVRtypxu6q%2BSLrWYH3vBAN4F5aUthh8pdsNNRB%2BTTgPeTny9JKYMMa%2BQ3m%2FfRaK7%2BuelgDvFRL1PheXOAncOV0d7W5DHCrEZckPbep8PPKZwIrQw2NPSyQY6pgFuGFx469b4QZpJiqHhuKLj%2B2WY0zADz2BbBT%2B1uz9mOGJ3btKQUC%2Fs2b0n1Hy0C7N8dNpK%2FszTxUrVx0B0UUxq5RgQyPHyswR9vAOCy%2F72j8qKWkKF9hukzeJ11mKIz0njgp%2FOP%2BEcF4QkXfbgmq%2BIhnsS4Mde8yfzR9UJJuhaB4E%2F6X27IETttDFCfdmCuYFhIKbdFCWE4I9vzBmn4ugMuUUT4Cix&X-Amz-Signature=097ce32dfd75afa842447c950bab40bd373a69829c941ea74aa79d2619473e56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
