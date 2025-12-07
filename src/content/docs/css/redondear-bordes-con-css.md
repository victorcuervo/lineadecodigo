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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPP7OK2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAq5ykwHuqo0W65VOHFMFJJvJRnZxWIFXJQI2uqbOs3cAiAGT5pR4gyO80YTA7Q793BLL%2FSkYiPUtfc0LlT8i%2FBKZSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Ye8h9QXSE6nvuS2KtwDnLo%2FqGT67CUXldQiJaUdM%2BjJQKTDx3lpco3CdhT%2BCQbneA%2Fmz%2FUjKu6vQBzUQNG8GHGBXO1%2BhFBKwAQS84nBBjGMI9647czRAMCH5J7V5WMl6bi5BxZJRtUYXkPZEZtw%2B15rN5Ug8QxmzCIfycWS7QqcVNVpsOsLdfPjAYNbDGgyOqRkEV8PhUje0qpWhC6G3LgFKJf9B5qjYfSqlvFbsEXvgnfGVEqCHBatHgHcUyiT5fK2n3adSPvHxa%2FfBk56Ft5YmJqd1aOeRVWgWDrL7QiB%2BHQ5GnZLVPTvkKw73nYmFgbiD4TGxSDaQDSC3CrxuuN%2Fnp6NBM5V%2BGWOtehcjUGuK%2B7u8p3l89tc6aFWRZrLwKoZcoanlRq2OE6IMipO0uCFweq8tcvFowJ7v6moS1vbG1xV2z55YgXP1YJ3SejSUx21dSGnuN9RQbmPf1bHx7Jmz7RUeYhqvOmJSrEsAkC%2FJr%2FXxyA7xPfAhxg%2BBFCDLeUmht1%2FduALdzkimgz80PuKCPfEY0Q%2FntppbI9VcRM6WjmsNB6YjFvImipdsXkPPJiW3EZt4GSENqH%2BdnX4Xa7nnXD50Zn%2BerFnW77XgxTxYW%2Bh4kZyxJUNto0EGkJ6oD3%2B5LlqCxlBFzww%2FJnVyQY6pgHEenwazgSJbdgq0rD6n4%2BDdEF2ags5IiG3S53fRnfJfor0EzsZsLvDo%2FYVmo7GPqVAKduRmrF1zUyXpTqZQvrq5fud%2Bt72bSU3EJ9IxtAVOSKLRiFLirysw5h35rUNqloCR3m6rP%2F3uKCYZxNCiYQsKB6Eif288hqKiW9G6Oysj%2BvufZGpDtGa8kETEZGYpMi0bRTXhzJBzovEXrvE2PV4f4zOEZuv&X-Amz-Signature=b64337eb0d9a78956fd10c77603aed1f03921594158b9690a7003ba5bb5d1e4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBPP7OK2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132051Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAq5ykwHuqo0W65VOHFMFJJvJRnZxWIFXJQI2uqbOs3cAiAGT5pR4gyO80YTA7Q793BLL%2FSkYiPUtfc0LlT8i%2FBKZSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM8Ye8h9QXSE6nvuS2KtwDnLo%2FqGT67CUXldQiJaUdM%2BjJQKTDx3lpco3CdhT%2BCQbneA%2Fmz%2FUjKu6vQBzUQNG8GHGBXO1%2BhFBKwAQS84nBBjGMI9647czRAMCH5J7V5WMl6bi5BxZJRtUYXkPZEZtw%2B15rN5Ug8QxmzCIfycWS7QqcVNVpsOsLdfPjAYNbDGgyOqRkEV8PhUje0qpWhC6G3LgFKJf9B5qjYfSqlvFbsEXvgnfGVEqCHBatHgHcUyiT5fK2n3adSPvHxa%2FfBk56Ft5YmJqd1aOeRVWgWDrL7QiB%2BHQ5GnZLVPTvkKw73nYmFgbiD4TGxSDaQDSC3CrxuuN%2Fnp6NBM5V%2BGWOtehcjUGuK%2B7u8p3l89tc6aFWRZrLwKoZcoanlRq2OE6IMipO0uCFweq8tcvFowJ7v6moS1vbG1xV2z55YgXP1YJ3SejSUx21dSGnuN9RQbmPf1bHx7Jmz7RUeYhqvOmJSrEsAkC%2FJr%2FXxyA7xPfAhxg%2BBFCDLeUmht1%2FduALdzkimgz80PuKCPfEY0Q%2FntppbI9VcRM6WjmsNB6YjFvImipdsXkPPJiW3EZt4GSENqH%2BdnX4Xa7nnXD50Zn%2BerFnW77XgxTxYW%2Bh4kZyxJUNto0EGkJ6oD3%2B5LlqCxlBFzww%2FJnVyQY6pgHEenwazgSJbdgq0rD6n4%2BDdEF2ags5IiG3S53fRnfJfor0EzsZsLvDo%2FYVmo7GPqVAKduRmrF1zUyXpTqZQvrq5fud%2Bt72bSU3EJ9IxtAVOSKLRiFLirysw5h35rUNqloCR3m6rP%2F3uKCYZxNCiYQsKB6Eif288hqKiW9G6Oysj%2BvufZGpDtGa8kETEZGYpMi0bRTXhzJBzovEXrvE2PV4f4zOEZuv&X-Amz-Signature=6095e6a418084d1b9fd5780fd2190c5124e3c46325974e6df0df199e9fdf85ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
