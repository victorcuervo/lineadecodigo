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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SB2FMLL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUJPhLySaeSlqpT4MxWT7BBYZpR7sQ81FT5BEjwLNKDAiBA%2Fp8ScVIkkPEX1RiWgRhneGXUp0A42l35IUvkD1GXAiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWA8GTNhrCIicaZ6iKtwDGmrS6MbjJiVSUCFtXUeqNNbK4CIAV7V%2BbAJDt%2BtFjkNk1H7AzqtpvVtDozbA6%2F0at%2BNnOmqa2GBhprGL3v6QYYy3qsfl4Yx8jM6gkviD2C%2FDFlSnIJxNE8Em%2Bj1ewVfv4GKE5pZ5gKT4vmHesOnyJpecbXeziuInW42xOrlmwEK9MQ%2B2T7KQyN%2BrJQYr1ZH8RmEfmbQ5RyOImDJ2Y00jHaeEVSvSrZCTDf9dOPBzvzH0554KlNPCC0PnneXiaKS%2Fdtr3gnxtIC1Ed8OM%2BSTiT6WZrg7kZhnnEpQa8JAAW8UWXRybfQlrZi%2F%2F6y3LMMjrHb4YsRJkIY8GWt0uWGxDkq20r%2FLIvmIEnESzFeW%2BkKVoqPZMtNCGbW48g%2BSknKf8vPOu8K8hkOFIQkcmi4EIUo8lt8HYWw5P5GQ6wbUp%2Bp8WtLjTAp2X4GoN5qXsVMEptxoQyF7X1%2FfgZFF1%2FZPE9VKgfCwf5KiK5bPkC0410sTLRNXxYqrjY61WqA%2Bu9LcGne3LY1YAbMX5cVefRd7jLtZmQYgoQKhLz2F8mIUyOUxuCqVFov2ffo6%2BdJ9QujHtUm5Dn7IxIZ42B8sRAWY1TWehfQZsuFUplF32BZsg5hDuZVbFg660L1bzVz4wq5%2BLygY6pgHEXZO%2BCa9xmEgdQN7HcjdEPchJrpFDCAGZEwsBX%2B9d%2BtdrRxT4J31BDSXX4OG6O0xveVlbL0z6qGAKOMadCd0yVuYdtRBPbLrXijl2z0hOGVMCD6Z6i%2BeW9SIzcT7ZMIPBducfM18D8%2F70zzutuWL6%2BK6Jcm2NChtNspmmgy6aGRvRtB1w%2F1eeBZLv2Lt3VWX1%2F%2BZwJZMsGZJLZQAkhZ%2FBPk3rUXn%2B&X-Amz-Signature=a0b5fadfb677f8514c2229ef13d3eb6f274cb29640bfae5210a13251fd2ef270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662SB2FMLL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T173240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEUJPhLySaeSlqpT4MxWT7BBYZpR7sQ81FT5BEjwLNKDAiBA%2Fp8ScVIkkPEX1RiWgRhneGXUp0A42l35IUvkD1GXAiqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWA8GTNhrCIicaZ6iKtwDGmrS6MbjJiVSUCFtXUeqNNbK4CIAV7V%2BbAJDt%2BtFjkNk1H7AzqtpvVtDozbA6%2F0at%2BNnOmqa2GBhprGL3v6QYYy3qsfl4Yx8jM6gkviD2C%2FDFlSnIJxNE8Em%2Bj1ewVfv4GKE5pZ5gKT4vmHesOnyJpecbXeziuInW42xOrlmwEK9MQ%2B2T7KQyN%2BrJQYr1ZH8RmEfmbQ5RyOImDJ2Y00jHaeEVSvSrZCTDf9dOPBzvzH0554KlNPCC0PnneXiaKS%2Fdtr3gnxtIC1Ed8OM%2BSTiT6WZrg7kZhnnEpQa8JAAW8UWXRybfQlrZi%2F%2F6y3LMMjrHb4YsRJkIY8GWt0uWGxDkq20r%2FLIvmIEnESzFeW%2BkKVoqPZMtNCGbW48g%2BSknKf8vPOu8K8hkOFIQkcmi4EIUo8lt8HYWw5P5GQ6wbUp%2Bp8WtLjTAp2X4GoN5qXsVMEptxoQyF7X1%2FfgZFF1%2FZPE9VKgfCwf5KiK5bPkC0410sTLRNXxYqrjY61WqA%2Bu9LcGne3LY1YAbMX5cVefRd7jLtZmQYgoQKhLz2F8mIUyOUxuCqVFov2ffo6%2BdJ9QujHtUm5Dn7IxIZ42B8sRAWY1TWehfQZsuFUplF32BZsg5hDuZVbFg660L1bzVz4wq5%2BLygY6pgHEXZO%2BCa9xmEgdQN7HcjdEPchJrpFDCAGZEwsBX%2B9d%2BtdrRxT4J31BDSXX4OG6O0xveVlbL0z6qGAKOMadCd0yVuYdtRBPbLrXijl2z0hOGVMCD6Z6i%2BeW9SIzcT7ZMIPBducfM18D8%2F70zzutuWL6%2BK6Jcm2NChtNspmmgy6aGRvRtB1w%2F1eeBZLv2Lt3VWX1%2F%2BZwJZMsGZJLZQAkhZ%2FBPk3rUXn%2B&X-Amz-Signature=018d178cd1ac8eea2bd774db008b97a526086d0dd4e677f82f9d1381879caf0e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
