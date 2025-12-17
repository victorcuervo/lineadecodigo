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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNKD64K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYQBZm3jS4w2VqQV9ghyWTaKv4GDpQQw4kQ3%2FXFeUSDAiBDJMY2CCvzzJOya2oNooBXsgAmDPbHX1Jnw%2BzlqKr%2B2yr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMfaTgSktLYOqjfMC9KtwDq5OMskn9tNkXVySGukim6duVhFYMVD9rX0BUhXH5Pie2jTZPmKQjBJ4eniLHgT3GgU9h9HXd7lS8tTKMq3jFczGy5GHRjHRir7sdlycINE1UXBCbN1RdUraVxX2jHUw1v3zR7gghXpowZcuuoFyDMlXrPhVnb76MfXBaWzSFdiICNFaPeXD5tv5wrJd2kfB0ckZ72qeV4m3VcDxUUF0zj2R%2BehRK1Kr%2FbPYvCR0z7fdlmOk3Je8doAj72PMuhRynMa9y%2BKtCsraJsncKvOKch7c9Fx8C3rOR9A72NgyYbJZMZwJRM42dNdGojOOVbZkTFOPEvFHWGnrLWlWso%2FQswDiFqt1ZYNkc12oiKbpvtiL50nON%2Baf70j7JVkyV9gxPnX1Zf8v69OFoMiZhMLVYnIQmSANFP7T35ca5pa6X9%2BTmPZexh74E32lkwcVJn0b8Rhlk3ovPpgcR5atCPPGwAMFzrNCV9oii2oFmvduLeX%2B%2Fm8AoKlU7omvpGogrHOX3pMOpvM%2BEAmudmrEd0z34kQO2AWK8nlf9jzwRc2B2FXMLuHAN66qaFf%2Fzx9%2BDUtZ7b2fmO177Js4lHqZ5XTYYnwaNS6OU50uHKKFoPCSdmby%2F%2B8sf%2BID2T6%2Bv91IwibOIygY6pgFUTFjfJrx32wU1Zux8z5LxTMgxL8%2Fae1B3q88xe9%2Fw98FHCTC0OloLM%2BzaIKUjayO9%2B1OXeRWxc0eB0KnXmqzwVwW8WaEwjKypfj9DU12UbdY59z9TXAaxCR5JiZ%2FpHA9tyYJQlI%2BWlqHntaSG%2BUjf5HcyH0HvqyHv%2FGhW4aumhZmOvitCrTMw15SGWGPRKrCD2wRNa%2F%2F4%2BYgJIBC2G2EfRdIv2ae8&X-Amz-Signature=d86dd9367ce0a4247f5cef055f4117f7ccf6b5905e59524f16e1bf0fd7f454da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUNKD64K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T030746Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFYQBZm3jS4w2VqQV9ghyWTaKv4GDpQQw4kQ3%2FXFeUSDAiBDJMY2CCvzzJOya2oNooBXsgAmDPbHX1Jnw%2BzlqKr%2B2yr%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMfaTgSktLYOqjfMC9KtwDq5OMskn9tNkXVySGukim6duVhFYMVD9rX0BUhXH5Pie2jTZPmKQjBJ4eniLHgT3GgU9h9HXd7lS8tTKMq3jFczGy5GHRjHRir7sdlycINE1UXBCbN1RdUraVxX2jHUw1v3zR7gghXpowZcuuoFyDMlXrPhVnb76MfXBaWzSFdiICNFaPeXD5tv5wrJd2kfB0ckZ72qeV4m3VcDxUUF0zj2R%2BehRK1Kr%2FbPYvCR0z7fdlmOk3Je8doAj72PMuhRynMa9y%2BKtCsraJsncKvOKch7c9Fx8C3rOR9A72NgyYbJZMZwJRM42dNdGojOOVbZkTFOPEvFHWGnrLWlWso%2FQswDiFqt1ZYNkc12oiKbpvtiL50nON%2Baf70j7JVkyV9gxPnX1Zf8v69OFoMiZhMLVYnIQmSANFP7T35ca5pa6X9%2BTmPZexh74E32lkwcVJn0b8Rhlk3ovPpgcR5atCPPGwAMFzrNCV9oii2oFmvduLeX%2B%2Fm8AoKlU7omvpGogrHOX3pMOpvM%2BEAmudmrEd0z34kQO2AWK8nlf9jzwRc2B2FXMLuHAN66qaFf%2Fzx9%2BDUtZ7b2fmO177Js4lHqZ5XTYYnwaNS6OU50uHKKFoPCSdmby%2F%2B8sf%2BID2T6%2Bv91IwibOIygY6pgFUTFjfJrx32wU1Zux8z5LxTMgxL8%2Fae1B3q88xe9%2Fw98FHCTC0OloLM%2BzaIKUjayO9%2B1OXeRWxc0eB0KnXmqzwVwW8WaEwjKypfj9DU12UbdY59z9TXAaxCR5JiZ%2FpHA9tyYJQlI%2BWlqHntaSG%2BUjf5HcyH0HvqyHv%2FGhW4aumhZmOvitCrTMw15SGWGPRKrCD2wRNa%2F%2F4%2BYgJIBC2G2EfRdIv2ae8&X-Amz-Signature=d23cda3189a0a90f5fea8c5fa7a1443270793260c7fdc8ed7370b45399e0ebc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
