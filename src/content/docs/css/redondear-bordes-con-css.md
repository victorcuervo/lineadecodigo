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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKK5HP5V%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnJJMMQ9kANeW1gna3c%2BWNIFk04GoPNmElaoIrLoE0MAiBjRqQ5PJGRNm4fsNMxmdYFS6JGksa6hW%2BbTakzUPewbir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM6fitgjvPKqGhBNGEKtwDxey2m6HeGFx5eoOo%2F4KI6W%2F0JbohbezlZIev7yGqPTaPqDQxagH5QIeuAMCM2zRVFrMv5PEJ5E%2BVTYkkkij4Lw%2BXTFUW2YKMm8%2B7roIVzWCFcMo0%2FWp8OmJdFJmgaFbWkkaTjFkrnA8xO%2FMqW7DZHGSOuAIE4zot6QgKI1fMe%2BSew2RnEDKjehlf9gtgXkdjrB5gQdjIMM0iDXzZK3zZC4v3Y8WKuddpETBe8vq4C4C404s44eGfEbAG2LrX1Q5NVM8UNQFS77Ym385pGy7pVBkeb%2Fw2usAL%2BfBR7ZvbO94qs%2BY%2BcVE3DqO3MtyZM6WZfqS6QqTeQsmDG9ppqcCP5BEvrG44uTmdPaWkzocvVGpI5NjSTq19Kq9tHqRsBpgSPDB3FcpljjhJJcIj8Z4NLScVda22fSd%2FovvvNe981Bgz%2BVVLU2XwPaNC2zYPu05UD33%2Fv%2FYEZqnhP72ypfBqkoveod9n%2BkGq3Y9%2B1au8s80yZ5udpUlxEjJRedGnw9B4y0ezQ5m8nvXzV0NG1rQGG0pe7j2DED0ppDRU2pv5%2BjoLupQaIGp0cPL4I2Ennz94daIAs%2FayD9%2BEJ4FJGaFZpPftT0LMYUPLuLKYsMLQj88xVeXSeF91agaDjugw7LzPyQY6pgEPaco0iy0RlXaBRy6rjmS%2BipFlQ319CAzutyJSjs101SIEwcM2ZOigAvvitaKRwT3REeftzCSzbUbdr130xePoEz1fQxVEl777FBim5jkjYymRaFuvypF3bBBTcEKokqUsmTtKklEA9%2Bo60aXWGYLI5rrCrrZp3tjE1uH4%2B8Vk1l42isUBJLVb4ey9DNhMl2dLheX49lOhWH685PuT40FWtb8ce2CB&X-Amz-Signature=39eb52b27e8a68e00285340d7614fdcd85f1fed3afd9f17175964b42c955e13b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TKK5HP5V%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T090923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICnJJMMQ9kANeW1gna3c%2BWNIFk04GoPNmElaoIrLoE0MAiBjRqQ5PJGRNm4fsNMxmdYFS6JGksa6hW%2BbTakzUPewbir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIM6fitgjvPKqGhBNGEKtwDxey2m6HeGFx5eoOo%2F4KI6W%2F0JbohbezlZIev7yGqPTaPqDQxagH5QIeuAMCM2zRVFrMv5PEJ5E%2BVTYkkkij4Lw%2BXTFUW2YKMm8%2B7roIVzWCFcMo0%2FWp8OmJdFJmgaFbWkkaTjFkrnA8xO%2FMqW7DZHGSOuAIE4zot6QgKI1fMe%2BSew2RnEDKjehlf9gtgXkdjrB5gQdjIMM0iDXzZK3zZC4v3Y8WKuddpETBe8vq4C4C404s44eGfEbAG2LrX1Q5NVM8UNQFS77Ym385pGy7pVBkeb%2Fw2usAL%2BfBR7ZvbO94qs%2BY%2BcVE3DqO3MtyZM6WZfqS6QqTeQsmDG9ppqcCP5BEvrG44uTmdPaWkzocvVGpI5NjSTq19Kq9tHqRsBpgSPDB3FcpljjhJJcIj8Z4NLScVda22fSd%2FovvvNe981Bgz%2BVVLU2XwPaNC2zYPu05UD33%2Fv%2FYEZqnhP72ypfBqkoveod9n%2BkGq3Y9%2B1au8s80yZ5udpUlxEjJRedGnw9B4y0ezQ5m8nvXzV0NG1rQGG0pe7j2DED0ppDRU2pv5%2BjoLupQaIGp0cPL4I2Ennz94daIAs%2FayD9%2BEJ4FJGaFZpPftT0LMYUPLuLKYsMLQj88xVeXSeF91agaDjugw7LzPyQY6pgEPaco0iy0RlXaBRy6rjmS%2BipFlQ319CAzutyJSjs101SIEwcM2ZOigAvvitaKRwT3REeftzCSzbUbdr130xePoEz1fQxVEl777FBim5jkjYymRaFuvypF3bBBTcEKokqUsmTtKklEA9%2Bo60aXWGYLI5rrCrrZp3tjE1uH4%2B8Vk1l42isUBJLVb4ey9DNhMl2dLheX49lOhWH685PuT40FWtb8ce2CB&X-Amz-Signature=df6938d86e8bd229605029180495a3be7d92028d5458ad33d002ac52cf3b417f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
