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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DSR6CJF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyWx5j%2BCk2GVw5r0sw3EoCCVSD0uIqRYHDorqZoQcBSAiBqP1%2FMo3ehj9dVCPf74%2FA0z6ZcYuIQ1ABuswJxWkOwsSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2FQXoPtwOJ%2BxyPGsKtwDK6HJB4SzJHb6LjteRxiTa4jJIMu5CLIb4ZekALy3iBXGc7wJgdl0z1cxrFHAJvqcaLnqj4gPHfjUwbkNWkV4gMAEwEqLL23cnGXgOnhj7gdXLCS3o5V454XMIl50oxKM3u4JZKQVmdtVaTYAf%2BD%2F4yD0FEnBWTyq8ZX1jqDJ8J5fVC%2B7NGWbBNc4dTUiFW2IonJqP6SxlBjoExyqEfMQ65ASSPw1SKLncx3lC%2Bi%2BHV4F2wSX4w2wJtdLgrtikYeOA6Db2JJxFoAegFM%2FNYcQy9lOZMZQXmDly%2FgG3n8WzXEtgoMCleCZ6E1ceLwdVDJFu9iAXwMCCpHmxhYFidgj7nMMAPjkjYv1RprrXsVQNztVeFjgExvPOfJX2KnnHBtIL9cIEyVKkSmidOWoaJO6KywOeXRB%2FUNQgOMw30dQ9CPOiAq7uhJbpk05XXsaXDBWMTYXps2Gp7TKI5BioqdnPPB%2FmDA1AivFPisQo0parsv0H6UZ8JJHqEd50J%2FNri5r7R66HBi3IZEjYiEy7nNQ%2Fx%2B7v%2Fgo7ScbLnqDwPJTrqmHp9u0FP7aqOgv0ijyNvMgmvXSRx8MoxUtliWXsR1fdxIE18PbhfS62uuH2rVE16YXm19fnOUzdfI95S0wl8LbyQY6pgG7n8rgKKsgMvv2hnmY3Ulzq6IbA%2FrhUYgBqcjiRBeQMMqYSSyZke6Cmg6%2BtXsAl1sKK8FWGiatzVp3DAE8Wsy9MeFfz3NomejhPgFxp6izU9ofz%2BJ4AiTNKTfqOUsxYZcYmzR1qTV0Ldztf%2FNRX9JazETv%2F5pbU2AGIZAGBdQx4PT037zZpleOKn%2B10Mt0AROSR%2FgtXWunEfR%2B3wQw8%2F5cVX3nZwkh&X-Amz-Signature=f66fc6514df5ed4cc21681d5e558c2ce69763708169d52664f6111c5b54c1078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664DSR6CJF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154615Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyWx5j%2BCk2GVw5r0sw3EoCCVSD0uIqRYHDorqZoQcBSAiBqP1%2FMo3ehj9dVCPf74%2FA0z6ZcYuIQ1ABuswJxWkOwsSqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMQ%2FQXoPtwOJ%2BxyPGsKtwDK6HJB4SzJHb6LjteRxiTa4jJIMu5CLIb4ZekALy3iBXGc7wJgdl0z1cxrFHAJvqcaLnqj4gPHfjUwbkNWkV4gMAEwEqLL23cnGXgOnhj7gdXLCS3o5V454XMIl50oxKM3u4JZKQVmdtVaTYAf%2BD%2F4yD0FEnBWTyq8ZX1jqDJ8J5fVC%2B7NGWbBNc4dTUiFW2IonJqP6SxlBjoExyqEfMQ65ASSPw1SKLncx3lC%2Bi%2BHV4F2wSX4w2wJtdLgrtikYeOA6Db2JJxFoAegFM%2FNYcQy9lOZMZQXmDly%2FgG3n8WzXEtgoMCleCZ6E1ceLwdVDJFu9iAXwMCCpHmxhYFidgj7nMMAPjkjYv1RprrXsVQNztVeFjgExvPOfJX2KnnHBtIL9cIEyVKkSmidOWoaJO6KywOeXRB%2FUNQgOMw30dQ9CPOiAq7uhJbpk05XXsaXDBWMTYXps2Gp7TKI5BioqdnPPB%2FmDA1AivFPisQo0parsv0H6UZ8JJHqEd50J%2FNri5r7R66HBi3IZEjYiEy7nNQ%2Fx%2B7v%2Fgo7ScbLnqDwPJTrqmHp9u0FP7aqOgv0ijyNvMgmvXSRx8MoxUtliWXsR1fdxIE18PbhfS62uuH2rVE16YXm19fnOUzdfI95S0wl8LbyQY6pgG7n8rgKKsgMvv2hnmY3Ulzq6IbA%2FrhUYgBqcjiRBeQMMqYSSyZke6Cmg6%2BtXsAl1sKK8FWGiatzVp3DAE8Wsy9MeFfz3NomejhPgFxp6izU9ofz%2BJ4AiTNKTfqOUsxYZcYmzR1qTV0Ldztf%2FNRX9JazETv%2F5pbU2AGIZAGBdQx4PT037zZpleOKn%2B10Mt0AROSR%2FgtXWunEfR%2B3wQw8%2F5cVX3nZwkh&X-Amz-Signature=23667fe96f1ce0c0f7501c004fa6b6f0f2b2ab24661e80ca6817a05965cefd80&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
