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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPGWXA7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXzho1hgctKf9%2Bc2sIF3LaYE1wZZekXuokKLctXdVEkAIhAJPE8RG3PEipt0cXVFzMoXcUwJABlR4TIyLWk0Yy4nuPKv8DCH8QABoMNjM3NDIzMTgzODA1Igx%2BnBXM1mTWnIG5p8Aq3ANGsYDbre%2F0WZ0XGg9%2F0gN%2F0waG9JSf506KZaAqFMuMXITuftoBZ0ApD%2BoypvgMDv4lbk70iEyQ70WDgT63e7jt%2B2rTP0J9EuQ2pYk86UG7hZt6NXz%2Fsm3PNQ9zEEJrqfIsc%2FmXjDpm1AtnbNSgEh0EFQr0iFqO2C7iDGRa5SBGw7T0dmlnd3k3DDTtQ%2BOs89sdQcht4d78TcZBJOgJgBeJiGcTYDw5J0ZOPUWd28Ihmy%2Fjr6RfBtce9b0jcpgGlpx8Zje9TK70%2BvY2iu%2B9TK4S5cChiBKbgUf8UyQ1usQWLwzCSnFh3nq93Ka%2FeVWRXzua3P%2Fxtk%2BonwHU1Wq4Ipmz4X4i17w4Jp6cjEy10Xjw6JdmhIKTLJ5heqQq5l9zzjdOpiYhi2%2BhC3%2FFtL2wA9EInxcgNbUKXerTNAhYOMgThmioQD8O6Nb11z1y4lHcZQFeo7%2BrXEcysEe3sKHHhD7ATqOByRVG8gZFtLJ8S5Pyjvbbug%2BHvhNrrIGEJoNwsrdg0WiGBSuy5VTB4AescZtDCPxCO5lR0IW8l7x3Zog4ZZFFPYqQpSL4VQtHnjsi11w569B53EBx5gSIJwdVCT6c5pIyO4YJHNfqXSgGAj2jYDUOt97ulPo4PggrSDCh09LJBjqkAUY3%2Fv2Ey3EghbgY8CoRPPPFi7sVh0j%2BIkdwPHeNMpPUIXCS9WgYMOcQr%2FxrZM0%2FYuc0r1qKpxR54LcmCCuhbKIAnyQF8azeqyoscjmWicRtuF1ETzvRbNuvAVPDmP0dbp5OFqZlYTbcEyqnMwdCylGk3Mb5INdxFp%2FBFRqwtXJgGM%2FI8RztQY1MZPuHmdrWEkw%2Bby8mGzX2oPhNMzgWo5DNgjnA&X-Amz-Signature=37cf689ac59dff9d31b161474074ea0cae4d9a9c5f2632cfb1bb506273e709af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663NPGWXA7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T231739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXzho1hgctKf9%2Bc2sIF3LaYE1wZZekXuokKLctXdVEkAIhAJPE8RG3PEipt0cXVFzMoXcUwJABlR4TIyLWk0Yy4nuPKv8DCH8QABoMNjM3NDIzMTgzODA1Igx%2BnBXM1mTWnIG5p8Aq3ANGsYDbre%2F0WZ0XGg9%2F0gN%2F0waG9JSf506KZaAqFMuMXITuftoBZ0ApD%2BoypvgMDv4lbk70iEyQ70WDgT63e7jt%2B2rTP0J9EuQ2pYk86UG7hZt6NXz%2Fsm3PNQ9zEEJrqfIsc%2FmXjDpm1AtnbNSgEh0EFQr0iFqO2C7iDGRa5SBGw7T0dmlnd3k3DDTtQ%2BOs89sdQcht4d78TcZBJOgJgBeJiGcTYDw5J0ZOPUWd28Ihmy%2Fjr6RfBtce9b0jcpgGlpx8Zje9TK70%2BvY2iu%2B9TK4S5cChiBKbgUf8UyQ1usQWLwzCSnFh3nq93Ka%2FeVWRXzua3P%2Fxtk%2BonwHU1Wq4Ipmz4X4i17w4Jp6cjEy10Xjw6JdmhIKTLJ5heqQq5l9zzjdOpiYhi2%2BhC3%2FFtL2wA9EInxcgNbUKXerTNAhYOMgThmioQD8O6Nb11z1y4lHcZQFeo7%2BrXEcysEe3sKHHhD7ATqOByRVG8gZFtLJ8S5Pyjvbbug%2BHvhNrrIGEJoNwsrdg0WiGBSuy5VTB4AescZtDCPxCO5lR0IW8l7x3Zog4ZZFFPYqQpSL4VQtHnjsi11w569B53EBx5gSIJwdVCT6c5pIyO4YJHNfqXSgGAj2jYDUOt97ulPo4PggrSDCh09LJBjqkAUY3%2Fv2Ey3EghbgY8CoRPPPFi7sVh0j%2BIkdwPHeNMpPUIXCS9WgYMOcQr%2FxrZM0%2FYuc0r1qKpxR54LcmCCuhbKIAnyQF8azeqyoscjmWicRtuF1ETzvRbNuvAVPDmP0dbp5OFqZlYTbcEyqnMwdCylGk3Mb5INdxFp%2FBFRqwtXJgGM%2FI8RztQY1MZPuHmdrWEkw%2Bby8mGzX2oPhNMzgWo5DNgjnA&X-Amz-Signature=471e072c92b151cef2bb4868cbc1d06a9cc54688ab14cd840cad06b2e04f942e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
