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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NHSENP3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy%2BfWsEdjWj602NDp8vQr9%2FQyr8dRy4FdgjAlLl47OaAiEAsx0iHCgs3Gv%2BwpYeBYdG6X2siGBhkAJK5coH2uJ%2B76kq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPvz8EXdZpcF%2BTby5ircA4me8syoObCFHhmL6igT78wy0B0gd8u0eeQGWmLtQELwDBfD513KH1uiVefKI6Pa%2FaMILnIvcfd%2F9V223zPF9%2F2jhs375wIs5tYwut2FqAUJ7K9iVqLvTdQsvASL8vwNzMJXIcWQeM7txa%2Fa8nLeBjBouTCGzet9UdojYw7Lwxn7jVbAsa%2Fhf8h7MkehkrtMP5bxotbdDW6QozGiCqzl4gzeXk4sPfpZXoMeHixSIm9hyT904bskpsnrW%2FEkc3bqZcG8t6DWBt3KXeg7y5u9YPmU4ZFu5QRnAymZa9KyWZI5rXFdY8F%2BtdYo4NS8LARBT5lxUs2CedyjPbj%2FT8LJq%2Fee7XVveNyHypu8s6C6n8lZS26vhejhL4bWhsOgoStoJ8jtA4lHoRP%2BWZ8b2uxvdf63ff1OQkOE6C7kwXGusNlcgucv3br7M7KrTeprD4EjbHzvxtrbOOf5nT6tg%2FZiMqqONENrs5i3jmRuoaRo9yNYldISIRe0ExMYzFCtV0nFPc8GMNVLHMLFtNw57AlcFDUHiXqbYzHfYSPdsjz2XJlRsTVsLq82rfKaw8XfHAsT2Gr2WUc9yy6OW%2BJ8A%2Barhz2usrzxXlXQJw%2BAAdmzwtX4nbozKh2eUutG059UMIXOiMoGOqUBVaEhGjLjtKiqgcQ%2BnVKhvBipgtKD7Qiz2qaXKqIj8U07%2FbQxSZxqR7T4elCnCERRxA0roZh4dSb%2FcgwRAMu0CnAb%2Be7vlO%2BFW1mEcCmdhAG400lga26AJ68pI7vQ5JDXmaS3mQKi4Ox6OmEheNVUrhqvmYTMcP6P%2FG0vd%2F2WAuRHK7Edf%2FXxuMiLOjfqHs0Es9SjSxecItYBfvsdrNUX%2F1E0ozgF&X-Amz-Signature=d03d0de68c5ea7f99f08fb20e4f876dc34f459666764bb1412bc64c0937e7be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666NHSENP3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAy%2BfWsEdjWj602NDp8vQr9%2FQyr8dRy4FdgjAlLl47OaAiEAsx0iHCgs3Gv%2BwpYeBYdG6X2siGBhkAJK5coH2uJ%2B76kq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDPvz8EXdZpcF%2BTby5ircA4me8syoObCFHhmL6igT78wy0B0gd8u0eeQGWmLtQELwDBfD513KH1uiVefKI6Pa%2FaMILnIvcfd%2F9V223zPF9%2F2jhs375wIs5tYwut2FqAUJ7K9iVqLvTdQsvASL8vwNzMJXIcWQeM7txa%2Fa8nLeBjBouTCGzet9UdojYw7Lwxn7jVbAsa%2Fhf8h7MkehkrtMP5bxotbdDW6QozGiCqzl4gzeXk4sPfpZXoMeHixSIm9hyT904bskpsnrW%2FEkc3bqZcG8t6DWBt3KXeg7y5u9YPmU4ZFu5QRnAymZa9KyWZI5rXFdY8F%2BtdYo4NS8LARBT5lxUs2CedyjPbj%2FT8LJq%2Fee7XVveNyHypu8s6C6n8lZS26vhejhL4bWhsOgoStoJ8jtA4lHoRP%2BWZ8b2uxvdf63ff1OQkOE6C7kwXGusNlcgucv3br7M7KrTeprD4EjbHzvxtrbOOf5nT6tg%2FZiMqqONENrs5i3jmRuoaRo9yNYldISIRe0ExMYzFCtV0nFPc8GMNVLHMLFtNw57AlcFDUHiXqbYzHfYSPdsjz2XJlRsTVsLq82rfKaw8XfHAsT2Gr2WUc9yy6OW%2BJ8A%2Barhz2usrzxXlXQJw%2BAAdmzwtX4nbozKh2eUutG059UMIXOiMoGOqUBVaEhGjLjtKiqgcQ%2BnVKhvBipgtKD7Qiz2qaXKqIj8U07%2FbQxSZxqR7T4elCnCERRxA0roZh4dSb%2FcgwRAMu0CnAb%2Be7vlO%2BFW1mEcCmdhAG400lga26AJ68pI7vQ5JDXmaS3mQKi4Ox6OmEheNVUrhqvmYTMcP6P%2FG0vd%2F2WAuRHK7Edf%2FXxuMiLOjfqHs0Es9SjSxecItYBfvsdrNUX%2F1E0ozgF&X-Amz-Signature=7c0ebf0f8ec6579fcdb47666d3814c4b9e32d53a68f5dd892297769687f1c206&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
