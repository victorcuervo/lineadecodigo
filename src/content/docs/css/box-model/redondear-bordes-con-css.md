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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I2IELXI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFm3PHEaeQ6KrhYfQt0vUznhNt6to0VBnRGPxhEVl%2FckAiAY1xnseDnO8%2FnjWXbyAfU36RHKxjrptVgwQPIZ4UNlSyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMtS%2BLpE4nGLyZtYcKKtwD1WO%2BdsahVyUp0k6jysFQY275riyt5KDxsCE1iOug0eYMP9X73%2B8%2B49Znjcy%2FZCBQV13suyshwvkDuUAlL3J9gyOvWv9inXhDjzOJzkY7pq8Ww4H4VMnPsVPX3f7jr2MPJ5GkbvWDJGK1b67tZnANnpBZkl2zUqsV74qio1K0jw4TgCTpZZ6v6krEG5gcA3GzoGsngniyOAS5VcWp%2BHAZTslVa6YbqafmOFWqcD7s9SzJndda66ug99WFpWmbnc7YZpunGTd6tznaFDHdCRceZzjG9EYMam2zH%2BCu3GrvTWhA5qUvf3hMb91ONJ9zEG3Xf2axCu0NLANvOU8VDqprEJFgPmkEIM58AdVX9OE9qbmdO5MIZhrk9FDLQ0Np%2FzCH%2BC2HLQYs9EXBjFU2TsEnBQhgUAr4IzCQjAkzQ%2FeO%2BL3O7CgMz5zL3ujhixpemEfH5xQIzgOOiMkPrimkonzsmWWPymyJPkjKEjeRZUf2UvRdYfxhUnn6ipL7Po3aEwuIUHMiWWtzSAhwruvP8s3HIdlwZRfjnQwAF3epdQhZmaU2SnXQHzDX10qwjp65REfEeMsDk3%2F3sZ%2FyisDh8z3r6CKSANVLaDJf1zR2Bf5oTvk4idhOnFYHN9Z9eoQw%2BJaIygY6pgE%2FTAolPaMt2reA2i5ftmCqiSL9eYl1QexiJWj2pxzj3TkV3Ns66gHVzFbmLjK5evRs%2F3KN6UjiQN96%2BdF8UUjrfyZYKo2ztFHaO0zQbyk1CxvBTa%2BcKyCH1PfnOCoT%2Bh0wEvW62MpmhOLaoaK0vr6M%2BDEgCAtg8n2tc6beSwFPtrlr%2BnW%2B3hFfiuTp6qP6o2JFBeiJap3wbceI5msXtoUu6o14i9E8&X-Amz-Signature=147c1486b6f0830a08e9e6d6a57ead778a1a0498174511237f6de2ef5c6afdca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667I2IELXI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFm3PHEaeQ6KrhYfQt0vUznhNt6to0VBnRGPxhEVl%2FckAiAY1xnseDnO8%2FnjWXbyAfU36RHKxjrptVgwQPIZ4UNlSyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMtS%2BLpE4nGLyZtYcKKtwD1WO%2BdsahVyUp0k6jysFQY275riyt5KDxsCE1iOug0eYMP9X73%2B8%2B49Znjcy%2FZCBQV13suyshwvkDuUAlL3J9gyOvWv9inXhDjzOJzkY7pq8Ww4H4VMnPsVPX3f7jr2MPJ5GkbvWDJGK1b67tZnANnpBZkl2zUqsV74qio1K0jw4TgCTpZZ6v6krEG5gcA3GzoGsngniyOAS5VcWp%2BHAZTslVa6YbqafmOFWqcD7s9SzJndda66ug99WFpWmbnc7YZpunGTd6tznaFDHdCRceZzjG9EYMam2zH%2BCu3GrvTWhA5qUvf3hMb91ONJ9zEG3Xf2axCu0NLANvOU8VDqprEJFgPmkEIM58AdVX9OE9qbmdO5MIZhrk9FDLQ0Np%2FzCH%2BC2HLQYs9EXBjFU2TsEnBQhgUAr4IzCQjAkzQ%2FeO%2BL3O7CgMz5zL3ujhixpemEfH5xQIzgOOiMkPrimkonzsmWWPymyJPkjKEjeRZUf2UvRdYfxhUnn6ipL7Po3aEwuIUHMiWWtzSAhwruvP8s3HIdlwZRfjnQwAF3epdQhZmaU2SnXQHzDX10qwjp65REfEeMsDk3%2F3sZ%2FyisDh8z3r6CKSANVLaDJf1zR2Bf5oTvk4idhOnFYHN9Z9eoQw%2BJaIygY6pgE%2FTAolPaMt2reA2i5ftmCqiSL9eYl1QexiJWj2pxzj3TkV3Ns66gHVzFbmLjK5evRs%2F3KN6UjiQN96%2BdF8UUjrfyZYKo2ztFHaO0zQbyk1CxvBTa%2BcKyCH1PfnOCoT%2Bh0wEvW62MpmhOLaoaK0vr6M%2BDEgCAtg8n2tc6beSwFPtrlr%2BnW%2B3hFfiuTp6qP6o2JFBeiJap3wbceI5msXtoUu6o14i9E8&X-Amz-Signature=d318e00f5d33485077bfe1bda37ac670bba394d4207c8cf977e509ae11695902&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
