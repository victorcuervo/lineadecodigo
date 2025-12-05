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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXET4WH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoxVgNUDYOWEMkjGAN4C5fdP0C9tUFhPrRakjz3hCAegIgEnHstcmIYQ2DzIiRS94RulyAp0EsHk0wgZE9vfipflUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFH2vfQL1gKBPL6HBSrcA2iJRlvA6ObEqB%2BOWR%2FFGUbXdoqQabTFbsi4wa%2FTtgY06o082e3WCirB0xbdc85UuwkSFJf%2FGgjpKFGMZccChX6aV8OhssfiQ0ga3DBDgUTl1CeUgOcVWOrV%2Ffbu94ZuW4YAxT8YtstOdFKOocTNK%2F51NibzJ%2FXSZ0T%2BcbqAdpYssqaHubNWMXaSjdexHos12jLWP2GkacQVlm85f3LQ10RMXjV7%2FF%2FgVFWy3P25jaZu4YobYY1w8adqCgWZ6Tl0CZGLGOq1XsQ3fRSMH1ECfxnEMfkHbxK491KBdIKC8O%2BUXFjDnk5zOPVRokRRt%2BzWMLxPMcuFGjjJ1pXpZhZJLebyjDExDUMiknR1uEKjCxHWaaEZgoU5pPiapFzg7fShFeL46UTDm0t3Qcxzsn7JYA130fBtOrwJQwNMTtKN3sIPDTiNm62bMtwvQmVI6Uh2%2BWPavX%2BL57n5xSYsEGbEXqqeLIMxF7RN970LV5%2B4IymDkN44L7Iho9lakq2lZC8jLC5TuHT8HP5cakabqG9r9kJ%2FGsMYWokfyFBw8CG5eL1jBG5zZzW0um3c5lGQqwYmkNBywj%2BPgPV1KGAmOwd3%2BnAY%2BMZTGoZbWy3%2FlSVxSM92dpS9kWhel4mEYZcjMIvKy8kGOqUB%2BMNulMzBvb%2FFd%2F%2BMHob%2Bvy2c03kO7T3lOXqig02rw3yxUyfhW7iAoTFMTlF80u%2FbHZfMKWnB%2BkZjGYPO0ZmGa6UruVmYtAsSsuPiXJahQ5J9M4KnmJ6D8bf9%2BEsRYcHNLi08ikjdEI7bUOs4rMpyQcYWZ9ocgHzdjuVVaP5%2BKdsJFsMS8sN4ecxaIXFOLr8K04wqxptSZvmyZxNbtktTizDXljdS&X-Amz-Signature=5140fe85bd2b807542e5e8c870a88cb80a3d6e251c067b9834083ed67dcb84ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663TXET4WH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T151636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoxVgNUDYOWEMkjGAN4C5fdP0C9tUFhPrRakjz3hCAegIgEnHstcmIYQ2DzIiRS94RulyAp0EsHk0wgZE9vfipflUq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDFH2vfQL1gKBPL6HBSrcA2iJRlvA6ObEqB%2BOWR%2FFGUbXdoqQabTFbsi4wa%2FTtgY06o082e3WCirB0xbdc85UuwkSFJf%2FGgjpKFGMZccChX6aV8OhssfiQ0ga3DBDgUTl1CeUgOcVWOrV%2Ffbu94ZuW4YAxT8YtstOdFKOocTNK%2F51NibzJ%2FXSZ0T%2BcbqAdpYssqaHubNWMXaSjdexHos12jLWP2GkacQVlm85f3LQ10RMXjV7%2FF%2FgVFWy3P25jaZu4YobYY1w8adqCgWZ6Tl0CZGLGOq1XsQ3fRSMH1ECfxnEMfkHbxK491KBdIKC8O%2BUXFjDnk5zOPVRokRRt%2BzWMLxPMcuFGjjJ1pXpZhZJLebyjDExDUMiknR1uEKjCxHWaaEZgoU5pPiapFzg7fShFeL46UTDm0t3Qcxzsn7JYA130fBtOrwJQwNMTtKN3sIPDTiNm62bMtwvQmVI6Uh2%2BWPavX%2BL57n5xSYsEGbEXqqeLIMxF7RN970LV5%2B4IymDkN44L7Iho9lakq2lZC8jLC5TuHT8HP5cakabqG9r9kJ%2FGsMYWokfyFBw8CG5eL1jBG5zZzW0um3c5lGQqwYmkNBywj%2BPgPV1KGAmOwd3%2BnAY%2BMZTGoZbWy3%2FlSVxSM92dpS9kWhel4mEYZcjMIvKy8kGOqUB%2BMNulMzBvb%2FFd%2F%2BMHob%2Bvy2c03kO7T3lOXqig02rw3yxUyfhW7iAoTFMTlF80u%2FbHZfMKWnB%2BkZjGYPO0ZmGa6UruVmYtAsSsuPiXJahQ5J9M4KnmJ6D8bf9%2BEsRYcHNLi08ikjdEI7bUOs4rMpyQcYWZ9ocgHzdjuVVaP5%2BKdsJFsMS8sN4ecxaIXFOLr8K04wqxptSZvmyZxNbtktTizDXljdS&X-Amz-Signature=98f237ed710bbdcb33ea4e628766148eb0cf79b7b9a66a6ca95df0de2a6d97a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
