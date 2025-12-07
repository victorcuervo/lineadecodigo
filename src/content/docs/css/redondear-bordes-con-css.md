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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ILJDGM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhxsTtE8uok5cIujXxNdnAZCYwXT13aO5dh02J%2F1EqVgIhAOem1tlojWl2%2BkFGXgoGppT0fvBreJPS%2B2k57Vp23qlqKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQJe60D4YxtF9OX2Mq3APkWnu3uL5GvnQ1gCKy%2Bw15eSin4iRl9W%2BdHI4jThoneEhmWs6Hww0GeIh9RDr261DTfYxuWM0aEpyROHf3rtTcrMNlYWGxVnMyhujDhmanevKuo%2BRucVd8%2B54ZSW6pujrZJiXkzdHVJjfwf%2Fhe6j8Qmg9AC2pjp8GUi6w62C4tmMgWtdNAC86f65XOMnT2NmhEdHHEE67qJ6eQhK7qV4ylqj4fzHAsCDL5HiZgbuiJpOZMOx5%2BikSWQqBHsT9eeBh9%2BcSM0vVxTpFx%2B%2Bk87xF9HkGRKy2od4qVRPaht4MvQFKxFWcIUPJhFYxnsW%2B2up4GA7EZ3e5izvPkny8R0RHg4SvtYL5wXk2Ci2iOD9b6IfNZVTGt3UXzrLcDukmBXCr5MSptWu42Nm2tgQmiAE0j4Autxq4E7p5KDsjOYXXdSFKlalBGuYB%2FeKUKgjoRrkOAPNuf10r4E4d4rI1KmEaQrsm95lS6lbRZD5yzedraDWs%2FhjVH6FuOsBe%2FV%2FYd%2F1j5%2Bhq9r087I1mezjwatIVSMq8JmePYx2w6OeC8cKylmpTvFH8Hg74Qo%2Fi2tVA5gCB5poSA87Jm2y9EQ93qjKNz4HL%2BDk8oOXae8W21FJH3yYuZXPTS7IwNGpVdVDC%2FuNbJBjqkAV7OGreNfncHbSrhXl7Zso8EXgnHM%2FCt4dXe9xWH7ud9mxiU9iIIoRdvlEAqJ1faP5uiGLppIMZhygBuKYAsdznyAZ3eheorehWDgQGs0f%2BtAJW%2FBGIPk9IgudjqKQJbXtrAqj3vwQTHOhAzr73DaT6bw2BWCxIvkbvJ0%2FWyS8ub9wr2Xdz6005t7MBd6ni61szpUCGyVRN%2BmyXqjriwxd9fuYJP&X-Amz-Signature=aad6777a671bc3d26f2321c0dab09836dd9fed430b916a7dfab11979f68cbf9d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V2ILJDGM%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T165002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDhxsTtE8uok5cIujXxNdnAZCYwXT13aO5dh02J%2F1EqVgIhAOem1tlojWl2%2BkFGXgoGppT0fvBreJPS%2B2k57Vp23qlqKogECJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyQJe60D4YxtF9OX2Mq3APkWnu3uL5GvnQ1gCKy%2Bw15eSin4iRl9W%2BdHI4jThoneEhmWs6Hww0GeIh9RDr261DTfYxuWM0aEpyROHf3rtTcrMNlYWGxVnMyhujDhmanevKuo%2BRucVd8%2B54ZSW6pujrZJiXkzdHVJjfwf%2Fhe6j8Qmg9AC2pjp8GUi6w62C4tmMgWtdNAC86f65XOMnT2NmhEdHHEE67qJ6eQhK7qV4ylqj4fzHAsCDL5HiZgbuiJpOZMOx5%2BikSWQqBHsT9eeBh9%2BcSM0vVxTpFx%2B%2Bk87xF9HkGRKy2od4qVRPaht4MvQFKxFWcIUPJhFYxnsW%2B2up4GA7EZ3e5izvPkny8R0RHg4SvtYL5wXk2Ci2iOD9b6IfNZVTGt3UXzrLcDukmBXCr5MSptWu42Nm2tgQmiAE0j4Autxq4E7p5KDsjOYXXdSFKlalBGuYB%2FeKUKgjoRrkOAPNuf10r4E4d4rI1KmEaQrsm95lS6lbRZD5yzedraDWs%2FhjVH6FuOsBe%2FV%2FYd%2F1j5%2Bhq9r087I1mezjwatIVSMq8JmePYx2w6OeC8cKylmpTvFH8Hg74Qo%2Fi2tVA5gCB5poSA87Jm2y9EQ93qjKNz4HL%2BDk8oOXae8W21FJH3yYuZXPTS7IwNGpVdVDC%2FuNbJBjqkAV7OGreNfncHbSrhXl7Zso8EXgnHM%2FCt4dXe9xWH7ud9mxiU9iIIoRdvlEAqJ1faP5uiGLppIMZhygBuKYAsdznyAZ3eheorehWDgQGs0f%2BtAJW%2FBGIPk9IgudjqKQJbXtrAqj3vwQTHOhAzr73DaT6bw2BWCxIvkbvJ0%2FWyS8ub9wr2Xdz6005t7MBd6ni61szpUCGyVRN%2BmyXqjriwxd9fuYJP&X-Amz-Signature=f1dff6ecacdcd2d06b5ce2dd5f923b99a1452e76819a83a574bb69c6b9bcecd1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
