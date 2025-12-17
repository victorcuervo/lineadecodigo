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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXAQZ5B7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0Pp4mg1TEz6t9JBXf52GIrwcOalMgcd2Mogcc3oXscAiAYO8EtU2EJnR94AHp0ex5AYIM6Nf4HzoTr8QSqEadGMyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMXzYLodmXGiil3Ca9KtwDubqcFCzvxoaaTqlO37EYZUZhLLQDwHTf%2BY3F%2Fonm3gZkS%2ByDE%2FRnJgWKYxJTbrzDsgmWhKqV51X%2FDYT5WWaeFJzJxgJZyWo9GH%2FpFsnhKnMCi%2F2S0z8sPHx7S7XIJaiH56rt7ynX6xm%2FJVXH4teAN%2B70XKdlDtfqvRtd3InQ9QWWC4GOcWFxhZiTMMeMktvvUI8cM9SMVhATZFXf%2FZo35IYa20u0zSKpxysg1uOuG%2FJaETh1duZMqxVg0Ks0%2BhNJ9lRF7w2vB%2FTF4bBRPAd21tLeeFWZjKZD8ovf18EY8oHFGnuvtPhMX9xb17ibx2%2F9a2G27%2B%2FYLgVblvTRftGePD2myFjeQxqoq5mQDOiQs8zKNIkI6caqv2a6UVhubCaYo2NVKtXchGLTd9PDt0y%2Bp29swmwLuBnbKa%2BzW6FR%2F3S81qY7RB56LkgwrFPFsypaXpl9jCJoqnknSL%2BLh4%2FK4QA6Om1MVi9PPs1f6STuvq1Z2papW47UsM7haC76lQTGr%2FSTAzWiSHhsSbgtWRddTOlqUny1vVlpuJ158MUiE67h0DrtCMQVZddx0TTiu1fbZPq4HAgBBowRthVSBIp7XYhTif%2FX47dA6EEgyiM6wcWJqYNBCpWe%2F0s7v7swy%2FuHygY6pgEwa0qjHE6Vp8oyNZuqqr16so191T81i98oEYjGUsRCggiZWH2nE3evr4xk%2FtlK7gFZfDaySI6GFV0EMJw0YBcLrX%2FaDo3U2Vc9DzRH07awnCwDqvi%2B3lPEhS0mHryVaWEbOZW7KiJ1kgA7s1sCHoJuVW29mF1zpBj64TQVuykkqwUy4ej5xg%2Fm6Zk%2F%2FrpwhgMtp5KWhRB5GmQxAVlzrRZoBy3eI8DW&X-Amz-Signature=3a95a1aa5b765ed81cf60ada99c8cc270ae625195c92c54d965a3551043029f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QXAQZ5B7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013110Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB0Pp4mg1TEz6t9JBXf52GIrwcOalMgcd2Mogcc3oXscAiAYO8EtU2EJnR94AHp0ex5AYIM6Nf4HzoTr8QSqEadGMyr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMXzYLodmXGiil3Ca9KtwDubqcFCzvxoaaTqlO37EYZUZhLLQDwHTf%2BY3F%2Fonm3gZkS%2ByDE%2FRnJgWKYxJTbrzDsgmWhKqV51X%2FDYT5WWaeFJzJxgJZyWo9GH%2FpFsnhKnMCi%2F2S0z8sPHx7S7XIJaiH56rt7ynX6xm%2FJVXH4teAN%2B70XKdlDtfqvRtd3InQ9QWWC4GOcWFxhZiTMMeMktvvUI8cM9SMVhATZFXf%2FZo35IYa20u0zSKpxysg1uOuG%2FJaETh1duZMqxVg0Ks0%2BhNJ9lRF7w2vB%2FTF4bBRPAd21tLeeFWZjKZD8ovf18EY8oHFGnuvtPhMX9xb17ibx2%2F9a2G27%2B%2FYLgVblvTRftGePD2myFjeQxqoq5mQDOiQs8zKNIkI6caqv2a6UVhubCaYo2NVKtXchGLTd9PDt0y%2Bp29swmwLuBnbKa%2BzW6FR%2F3S81qY7RB56LkgwrFPFsypaXpl9jCJoqnknSL%2BLh4%2FK4QA6Om1MVi9PPs1f6STuvq1Z2papW47UsM7haC76lQTGr%2FSTAzWiSHhsSbgtWRddTOlqUny1vVlpuJ158MUiE67h0DrtCMQVZddx0TTiu1fbZPq4HAgBBowRthVSBIp7XYhTif%2FX47dA6EEgyiM6wcWJqYNBCpWe%2F0s7v7swy%2FuHygY6pgEwa0qjHE6Vp8oyNZuqqr16so191T81i98oEYjGUsRCggiZWH2nE3evr4xk%2FtlK7gFZfDaySI6GFV0EMJw0YBcLrX%2FaDo3U2Vc9DzRH07awnCwDqvi%2B3lPEhS0mHryVaWEbOZW7KiJ1kgA7s1sCHoJuVW29mF1zpBj64TQVuykkqwUy4ej5xg%2Fm6Zk%2F%2FrpwhgMtp5KWhRB5GmQxAVlzrRZoBy3eI8DW&X-Amz-Signature=646c1dbe7aa5a95dc1767997279e6c8ca1087e373d4fc9132f25bd57832b245e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
