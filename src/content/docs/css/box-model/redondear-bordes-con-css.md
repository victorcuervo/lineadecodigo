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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMPVHDZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FLVM2cGcn%2FsG5WsyvE9eu5XkAolyo%2BYQhMLRahezaKQIhAKB%2B9Nz05PuV5h27i%2FeT3PL9QoewW0P7a3nrPO3dgHXYKv8DCHIQABoMNjM3NDIzMTgzODA1IgxwO2pJwMdvv7MLWl0q3ANMOWXaDrw%2BxOaWJBW58CSjBAzjMJAMBnOhCk3Cl%2FQtNkM6nAsNq2%2B1wKYEluLdyACUVotkMe3VyxuvTSCdKVMEzHvunMOjy7vy7dDTyhVJNaKOoxTVBbzE0%2BIAlqlNhk4piTyzcO%2FMdK32DvTnNGxj02XxF1G0dHti6rJ%2FZaJdiNteGcRbUSFuRrBWSfQqLhl0BmeqWmqD7EkMfbrG%2FiuKdzAO4qIyQ6wSM43d3ZqPGbYdUnXzYiQR5ixaNr3KQV82CIj5FfetnaAhZgCdg%2BagIDzCZvaZqtKKzq5LETu8041xo%2FCPtv6jTMDWhKiJrPEvh6KgqIz8muJTwQEa66YeUAbryW17yD8TAMV4WlyiIMjNeBfgpYVGozOUBfvu2tGxGfcrjI3EZGyYhe%2FRJCuB%2Bs%2F8GbyI0HlLMOKmFvVO4QKGwUnGjITMOJNr5WwtyO4JC1ZOxMChsBpCgwHYajp%2BIBj%2BcY8cDH2bOA29Gh3BW0GTmidE5jzpQC1jAWuc2VqsvkkyKlv5kQpzibwVrqQXQY4vYjGxif9d3LbbW6l85T39FhJzCFaeIaCADFKhZ%2FhOZUKF1VwV9HrloSS2HWADh97TbWe%2BZp6oFTHutI7gctJrGrCk3UH5R%2BADLDDD%2B4fKBjqkAZL5q9AY%2FXH0wicCItfURbFkUYMKvFksQCiOkdX3IDhFzSgOLcR6n2%2BcplMG7HuqXuWl%2FJ0V%2By6Wb3FHCoboKNDRrCRhGschwx4JYXEMP1Zme3FbUuayvFro0aGejOHiutGOSuy1sQOy7WmIeamYicVc%2FIjmhbbrkQ7HG2TL75vd8ti9c33Ei4k2aJd3iKZeYzuqmHO3mI6Fs8R9hScu1AVtd6TR&X-Amz-Signature=0963a8eef7b1a2b7641e6b8894beca0feac3e764ce053f9138e5124b8a34b71c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RBMPVHDZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005457Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2FLVM2cGcn%2FsG5WsyvE9eu5XkAolyo%2BYQhMLRahezaKQIhAKB%2B9Nz05PuV5h27i%2FeT3PL9QoewW0P7a3nrPO3dgHXYKv8DCHIQABoMNjM3NDIzMTgzODA1IgxwO2pJwMdvv7MLWl0q3ANMOWXaDrw%2BxOaWJBW58CSjBAzjMJAMBnOhCk3Cl%2FQtNkM6nAsNq2%2B1wKYEluLdyACUVotkMe3VyxuvTSCdKVMEzHvunMOjy7vy7dDTyhVJNaKOoxTVBbzE0%2BIAlqlNhk4piTyzcO%2FMdK32DvTnNGxj02XxF1G0dHti6rJ%2FZaJdiNteGcRbUSFuRrBWSfQqLhl0BmeqWmqD7EkMfbrG%2FiuKdzAO4qIyQ6wSM43d3ZqPGbYdUnXzYiQR5ixaNr3KQV82CIj5FfetnaAhZgCdg%2BagIDzCZvaZqtKKzq5LETu8041xo%2FCPtv6jTMDWhKiJrPEvh6KgqIz8muJTwQEa66YeUAbryW17yD8TAMV4WlyiIMjNeBfgpYVGozOUBfvu2tGxGfcrjI3EZGyYhe%2FRJCuB%2Bs%2F8GbyI0HlLMOKmFvVO4QKGwUnGjITMOJNr5WwtyO4JC1ZOxMChsBpCgwHYajp%2BIBj%2BcY8cDH2bOA29Gh3BW0GTmidE5jzpQC1jAWuc2VqsvkkyKlv5kQpzibwVrqQXQY4vYjGxif9d3LbbW6l85T39FhJzCFaeIaCADFKhZ%2FhOZUKF1VwV9HrloSS2HWADh97TbWe%2BZp6oFTHutI7gctJrGrCk3UH5R%2BADLDDD%2B4fKBjqkAZL5q9AY%2FXH0wicCItfURbFkUYMKvFksQCiOkdX3IDhFzSgOLcR6n2%2BcplMG7HuqXuWl%2FJ0V%2By6Wb3FHCoboKNDRrCRhGschwx4JYXEMP1Zme3FbUuayvFro0aGejOHiutGOSuy1sQOy7WmIeamYicVc%2FIjmhbbrkQ7HG2TL75vd8ti9c33Ei4k2aJd3iKZeYzuqmHO3mI6Fs8R9hScu1AVtd6TR&X-Amz-Signature=0fe478ce7280c009bec5e48f2a416db614968482065164911b1025467b5a53d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
