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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIRHH4WL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQD9RpIp8chA8X5Pz6kuyVghgoGad2k%2B%2BP%2FNfIuiJYh1EwIfG5cdmYnnhuJLAkz1NOTV5UNma%2F98b%2FWq2Raw%2BjB9Syr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMOv1xAXmwHjIG86WYKtwDQjQwHmje%2BJnXGBY9jvogjGVPWQDCW6T2z%2FTwyE8Qqv3Kmf%2FMPi%2FeBOUPUVwGFpwhPt35NO4vShTb11d6KD%2Bf6M2%2FhKR%2BbHYlWyz3b3L3VWSFk6PgsiBiJ5Juj19VL3cmFy3naG23xkrD4yO946v2kgapim1LAokhobVTYw1RGEeljJeFa9Rg5I30pP5%2BiSZthmjOgCVhktULi729Hw8XIRgOBKTdE8fkYZDPGStWJKGZUXeVXc3rKtcJ%2F7paDeN%2Fvrg0%2BvY28D0uIV5FVhHMtkLEAax5m8T2KLXEm%2BTq1%2B0eftCrwbsPOuMtfXC%2F4gw6eVS5w3PD3BcRKAgHi80%2BFa51j5noVF1Cggi52NCrS%2F3ZLgP4up4DN0W0YJDIr%2BzfeyIwNL3D7%2F%2B3Dalb6Qbq4WuJn8LTApPS7X6q3v2cgKz7%2FVnBo5AJtIdRanVSs753n0U6W52J92jta0JrInrXveNJBPXaCun39Ud4s6bZpF6H5mzy9%2BBl0yPnSl3hC20a3NUKItVP4t0XotVmrADoqju8E7MqQvqbPSi7ZsMXWnbzdVQ6nn5UZrI1kvXap2bHFBrIcQ5r%2Bolw6j93tQcuRX6IUQXpBrPJHkBNs7Fm9RpTJNLTMZTyv6JYkzowhbzPyQY6pgH2F1sM9SS6rdEN7PT5yIy8%2F5YxMVD1c3RAlNLf7TXYanVXUc7XofW8Ek51N4Y%2F5Owq6cidghI%2BUdbwncVKxS4iKjlBg%2B6hVHTxxzSnhf7YUpWZZWeWyQc78khqdWKcYHCZGILINCClE6RgJOZfGgT%2FSJD8klFLeN%2BUKxusyQMAzeB707Q7gzSvqtZyqAZOaziw%2FWrVTHo7QBg%2BYlXlVHiEuy%2FJImkh&X-Amz-Signature=30789651efb879f97ecc1c4aa88602856f530729cc2f7fbb16fdb55d4a6e463f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZIRHH4WL%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIQD9RpIp8chA8X5Pz6kuyVghgoGad2k%2B%2BP%2FNfIuiJYh1EwIfG5cdmYnnhuJLAkz1NOTV5UNma%2F98b%2FWq2Raw%2BjB9Syr%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMOv1xAXmwHjIG86WYKtwDQjQwHmje%2BJnXGBY9jvogjGVPWQDCW6T2z%2FTwyE8Qqv3Kmf%2FMPi%2FeBOUPUVwGFpwhPt35NO4vShTb11d6KD%2Bf6M2%2FhKR%2BbHYlWyz3b3L3VWSFk6PgsiBiJ5Juj19VL3cmFy3naG23xkrD4yO946v2kgapim1LAokhobVTYw1RGEeljJeFa9Rg5I30pP5%2BiSZthmjOgCVhktULi729Hw8XIRgOBKTdE8fkYZDPGStWJKGZUXeVXc3rKtcJ%2F7paDeN%2Fvrg0%2BvY28D0uIV5FVhHMtkLEAax5m8T2KLXEm%2BTq1%2B0eftCrwbsPOuMtfXC%2F4gw6eVS5w3PD3BcRKAgHi80%2BFa51j5noVF1Cggi52NCrS%2F3ZLgP4up4DN0W0YJDIr%2BzfeyIwNL3D7%2F%2B3Dalb6Qbq4WuJn8LTApPS7X6q3v2cgKz7%2FVnBo5AJtIdRanVSs753n0U6W52J92jta0JrInrXveNJBPXaCun39Ud4s6bZpF6H5mzy9%2BBl0yPnSl3hC20a3NUKItVP4t0XotVmrADoqju8E7MqQvqbPSi7ZsMXWnbzdVQ6nn5UZrI1kvXap2bHFBrIcQ5r%2Bolw6j93tQcuRX6IUQXpBrPJHkBNs7Fm9RpTJNLTMZTyv6JYkzowhbzPyQY6pgH2F1sM9SS6rdEN7PT5yIy8%2F5YxMVD1c3RAlNLf7TXYanVXUc7XofW8Ek51N4Y%2F5Owq6cidghI%2BUdbwncVKxS4iKjlBg%2B6hVHTxxzSnhf7YUpWZZWeWyQc78khqdWKcYHCZGILINCClE6RgJOZfGgT%2FSJD8klFLeN%2BUKxusyQMAzeB707Q7gzSvqtZyqAZOaziw%2FWrVTHo7QBg%2BYlXlVHiEuy%2FJImkh&X-Amz-Signature=3c63af9370b474bb119d4604d864e1ddf2a8f62bcfccfab1ff8f554ae5fda8c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
