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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAYBMCX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074520Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEDgQebU8AzrlzTF9WlzFKmLZ2M1eJuYuezfSDK3mUJAiAJvNeIBl7b4QGqu9vfWmbjB9IMx%2B2%2BP50Wb%2BD6LtbGHyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJL33EU3ba47c1O0yKtwDk9fN2U4qZhPaxixTytm8jjeoG4nOLCnnLm0HphbF7nNLUH34qgD%2BMN0A5y8lQ6hR1Eg4%2BEyqon5LDQvNunYN5%2BH9d%2FjRdPF6eCntBqzUAEHQbUep9N9ebYYScdsB%2FydQC83OGK%2FjgcNnZB4DxYF1kRkd%2FFsarxnXtjJ%2F%2BuLgDNHLBtw7EcA20bSBUwSHJeeKB7ow%2BOuBCHBoVKtRBQ1rQ48JWxolWj%2BfBiXFzMHBWsg%2B%2FPYlbZosbQMhdso%2BPkRHPKHVs%2B1KNKRDYwdI6%2BEnFCaEJJ7yLFVptPun49OH15ybAfyzQACI%2BVNjyYaU0FJozjEahYEe%2BOnE0KX%2FKd8%2FH82Ljeg8YAaCXTzKld7kCcJab4aRBMA94ypQRTqD0NOJujjKRScdDKt0Bjwl%2Bs91I6TOOHZHIJ4YxS0GM6xvPu1%2Fd5Ia4U%2B9uGXAk9wGQRNVL1C%2Bf6tunB2%2Bp%2BD7CNBxOQQFK4W7OzD6eNTyIQW5GSjEluXkne1zLuGt5O6xRb0qo2cIJK4fujfiWn4zO245VLVk92r6qQUn7058fm9x92sEdGPuJ0stra9I7u6ilCTZ%2B3h30%2BVhxvw7W9AW54VGXWWFnYTAmf%2F%2Bj1FLWjQSvMPWB873ksHd7XbqtDEwnu3ZyQY6pgFfcD4T2p5GEyORy%2FKrPg6hArhM%2FXffo6S5NVd43KW8iymih6opZ9u4%2FEu%2B09mu2hETzzM%2BCseSkTrP%2B7Y44s9ykMxAuCwa09pAT9tmq34xc4n33uIPZyhuxnPpHNM%2B6t2lLOXvLa7FKEYpwhCKfuQ26TQBIhXas2fOBZD9gthA1PpuEY7kXAr8pieFlD9K65c9gzSq7yqf2f1E3VJvyBF5rCHrVd2C&X-Amz-Signature=4c12cafb409ce185137e501c5fae6b573c454da1ad6a2dfe8af764281cec51d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NAYBMCX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T074521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFEDgQebU8AzrlzTF9WlzFKmLZ2M1eJuYuezfSDK3mUJAiAJvNeIBl7b4QGqu9vfWmbjB9IMx%2B2%2BP50Wb%2BD6LtbGHyqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMJL33EU3ba47c1O0yKtwDk9fN2U4qZhPaxixTytm8jjeoG4nOLCnnLm0HphbF7nNLUH34qgD%2BMN0A5y8lQ6hR1Eg4%2BEyqon5LDQvNunYN5%2BH9d%2FjRdPF6eCntBqzUAEHQbUep9N9ebYYScdsB%2FydQC83OGK%2FjgcNnZB4DxYF1kRkd%2FFsarxnXtjJ%2F%2BuLgDNHLBtw7EcA20bSBUwSHJeeKB7ow%2BOuBCHBoVKtRBQ1rQ48JWxolWj%2BfBiXFzMHBWsg%2B%2FPYlbZosbQMhdso%2BPkRHPKHVs%2B1KNKRDYwdI6%2BEnFCaEJJ7yLFVptPun49OH15ybAfyzQACI%2BVNjyYaU0FJozjEahYEe%2BOnE0KX%2FKd8%2FH82Ljeg8YAaCXTzKld7kCcJab4aRBMA94ypQRTqD0NOJujjKRScdDKt0Bjwl%2Bs91I6TOOHZHIJ4YxS0GM6xvPu1%2Fd5Ia4U%2B9uGXAk9wGQRNVL1C%2Bf6tunB2%2Bp%2BD7CNBxOQQFK4W7OzD6eNTyIQW5GSjEluXkne1zLuGt5O6xRb0qo2cIJK4fujfiWn4zO245VLVk92r6qQUn7058fm9x92sEdGPuJ0stra9I7u6ilCTZ%2B3h30%2BVhxvw7W9AW54VGXWWFnYTAmf%2F%2Bj1FLWjQSvMPWB873ksHd7XbqtDEwnu3ZyQY6pgFfcD4T2p5GEyORy%2FKrPg6hArhM%2FXffo6S5NVd43KW8iymih6opZ9u4%2FEu%2B09mu2hETzzM%2BCseSkTrP%2B7Y44s9ykMxAuCwa09pAT9tmq34xc4n33uIPZyhuxnPpHNM%2B6t2lLOXvLa7FKEYpwhCKfuQ26TQBIhXas2fOBZD9gthA1PpuEY7kXAr8pieFlD9K65c9gzSq7yqf2f1E3VJvyBF5rCHrVd2C&X-Amz-Signature=aa6b703c8869a752e67ff2b0ccd85c0d49223b92b0b51cdf6ff389aa0f2ef988&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
