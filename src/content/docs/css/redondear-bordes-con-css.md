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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXS2XUGW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFiY2rW%2BinlxIt8xRROgo9Ho5jvfHYK1fbwfNhDCeH%2FAIge1vAHDAFwjt5rYL%2BVLcCD%2Bn%2B3YQEdrlFrLxb66FPo5oq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNoqbon7ozWWmVcBYCrcA8XZlrv%2BHDtU3MUPYZanC3mdsAZmlZVdqweZE6p9AzMdpCCmZlVdT9yUP8VrfDVB6oUdSxgmH9OpJopu%2BZ1roR9%2BczxwBeorle5xBSe7B%2B4rDE8UuOBPZEkdKut5yAKn5UJFZCx1uZE8qX%2FxZJ0qdVQg96Z65MSU6Qto7tHIkF3lHZ7erkmBvJLXQFCzIla78yBTOfAYzlhH%2Fqueq9lEjzqNGuxKFx2q7YFek18TmqAIEwIRVUZQf4toI6pl5uGrP8fo1BprRrWJEU2rtfqnsN6%2FfVev%2FRpqMilTd7Luffwplgw9K3Q6Jsl%2Fnykpk7Dp2rc2iB7kaafTex9hofx9RU90irA%2BYIjQDKXpNbxZXgYxcapnXbGcNZZkUSJjEZfmRvt4rG%2BkopwsEJiebWYEm4Ftzv%2FhZxheQPQsrm77mNKJDLPN37RQN1WGqrLRMltusQlu9XC%2B1ofXFTUZou%2FpnDO%2FirdRkk3N%2Flk%2BxJ663HnQsn8lm1dAoYUyAxOxThFxjREkn5471cNhxnuVhJCMvL0pEk0xcM%2BzeY2%2FdQPcdv4voYS2e0GdPbFGRDiUSCDETXmExHvkKu5RLTwO0cpNQtpIHKaM7P7BrWlTOY1cUjRMj8Ru4Gohyn19MGFDMIrezskGOqUBU9lrtsQBGLl5G%2F7gkAdl6L958iJvkqCdaD%2Fw7IJaWsHlRFNfD0XEIVwLTaVlr%2BJ0F733mTgomvH5vRWnibJV%2B8VaXP40jyK8vsKRpwZpzGjzB1mf%2BLxbdkk0lt8LJ%2FHBf3mcs%2BVqXcIlhgdm3wH9fx8ri0oNMPdcOPT9GADp8VXKu46JWPLd6%2BLyYPS%2FtwTpwYviDd%2FTYYSZFpIyeZ52uf8xwiGw&X-Amz-Signature=eae6a496e04d7c2b9ed593060b6327d1b8e3cb107f2fa1c0f1b63c13f5442dc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXS2XUGW%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T045759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFiY2rW%2BinlxIt8xRROgo9Ho5jvfHYK1fbwfNhDCeH%2FAIge1vAHDAFwjt5rYL%2BVLcCD%2Bn%2B3YQEdrlFrLxb66FPo5oq%2FwMIbRAAGgw2Mzc0MjMxODM4MDUiDNoqbon7ozWWmVcBYCrcA8XZlrv%2BHDtU3MUPYZanC3mdsAZmlZVdqweZE6p9AzMdpCCmZlVdT9yUP8VrfDVB6oUdSxgmH9OpJopu%2BZ1roR9%2BczxwBeorle5xBSe7B%2B4rDE8UuOBPZEkdKut5yAKn5UJFZCx1uZE8qX%2FxZJ0qdVQg96Z65MSU6Qto7tHIkF3lHZ7erkmBvJLXQFCzIla78yBTOfAYzlhH%2Fqueq9lEjzqNGuxKFx2q7YFek18TmqAIEwIRVUZQf4toI6pl5uGrP8fo1BprRrWJEU2rtfqnsN6%2FfVev%2FRpqMilTd7Luffwplgw9K3Q6Jsl%2Fnykpk7Dp2rc2iB7kaafTex9hofx9RU90irA%2BYIjQDKXpNbxZXgYxcapnXbGcNZZkUSJjEZfmRvt4rG%2BkopwsEJiebWYEm4Ftzv%2FhZxheQPQsrm77mNKJDLPN37RQN1WGqrLRMltusQlu9XC%2B1ofXFTUZou%2FpnDO%2FirdRkk3N%2Flk%2BxJ663HnQsn8lm1dAoYUyAxOxThFxjREkn5471cNhxnuVhJCMvL0pEk0xcM%2BzeY2%2FdQPcdv4voYS2e0GdPbFGRDiUSCDETXmExHvkKu5RLTwO0cpNQtpIHKaM7P7BrWlTOY1cUjRMj8Ru4Gohyn19MGFDMIrezskGOqUBU9lrtsQBGLl5G%2F7gkAdl6L958iJvkqCdaD%2Fw7IJaWsHlRFNfD0XEIVwLTaVlr%2BJ0F733mTgomvH5vRWnibJV%2B8VaXP40jyK8vsKRpwZpzGjzB1mf%2BLxbdkk0lt8LJ%2FHBf3mcs%2BVqXcIlhgdm3wH9fx8ri0oNMPdcOPT9GADp8VXKu46JWPLd6%2BLyYPS%2FtwTpwYviDd%2FTYYSZFpIyeZ52uf8xwiGw&X-Amz-Signature=70cf0a07c908a504fd92d829c249e466cc89592427b6d6c94bd246a5a1617723&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
