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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQFD3S7V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8P8mVcXpYmXrqNCrWHDQyvDA36kbAiDQ1u7KIuHhakAiEA2ujIHFWV2HhdYvSyhcsHFv%2BtdF90rhpFx%2Fdk%2BK9JW9Yq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOAR5Aeymk2GJz3rsSrcA0i%2FHDB3fy31LWW7YzaEUa58rkvcAO3Re8uNrbJm9gt%2FsZcpxIMLlq29N4kLsii9ZZds1l8EfNNRqnXGXicN3tNrjwVNQJCbT4hNywk1KNyQ7rm%2B48QG2wzxGnJ2m51Vaf6xwNEcON8LQN6OfuI4ZSrzxbbbHMUUTB5sF9weDTQ21MVtY2G91%2FHVnaMToQrCHwhXHVng4JN2kE%2F8sTKLSI7C%2BnxnU0xG1%2B7s82HxWvbRb3BYN48exFcYvkiMBoWUMZUGl99ZzUf2xGOax2MLlPLEC8fQWsIgDA4FKVykNSCzzozCBmONmp1ftGH8%2BCVPtsvgKRfVoULc8hMsMtG9i4VF1PG3w%2FE%2Fu0qGt1bhsikjdj8p2P7xNR9FN9m7AW5NQOfaRIF%2FkGkNwEObWEBYd9%2BvMiHCSBQzU3p9mo16xClpZrA5M0SMQONryQP%2FVbQoc5HH%2BhOxvuEB%2F%2Bvd%2B4qc1k3xebXH5eRRtwJRuv9KeAZxqQTGstX9MiLnsYG9GzESwerxAsm%2F9cyZYaGHd4HnVepI15pZGnfzlZSlZgiBthqVdNK8lYI%2F2ocS7FY1mZLsl%2FQ%2BUIEHo1urthTtBIqD%2BFyVou0kHXAwdxa4iU6Zh57a%2FJeeqaLHbuZQ%2FvCoMIvOiMoGOqUBQK3qUJ7YFV5SAqYkxVA5FlUsd9luoK5eUcl0yE1ygrVoZ1GnZXnWpbTeEu0SMPRqZgXJVBK6lBHp81PDzysYHlEVf%2BF55s447mX8Hy1tPH1P5HS5ckVCm8JR0guU75m%2BAqk9oyIGhZvqm5S1ffymVivDhu3ELXkSTnLD3a3%2FIaCYL%2B9rwkIXOCjSoBVsBY4%2FZNPeA5%2BxgtrU54rqpQ5GILlxIJrg&X-Amz-Signature=556b198770f8a45ecb06e3fdfcd7ee8856eccd54d0f39bf12ec7db4aa0f995b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UQFD3S7V%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T044410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIH8P8mVcXpYmXrqNCrWHDQyvDA36kbAiDQ1u7KIuHhakAiEA2ujIHFWV2HhdYvSyhcsHFv%2BtdF90rhpFx%2Fdk%2BK9JW9Yq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDOAR5Aeymk2GJz3rsSrcA0i%2FHDB3fy31LWW7YzaEUa58rkvcAO3Re8uNrbJm9gt%2FsZcpxIMLlq29N4kLsii9ZZds1l8EfNNRqnXGXicN3tNrjwVNQJCbT4hNywk1KNyQ7rm%2B48QG2wzxGnJ2m51Vaf6xwNEcON8LQN6OfuI4ZSrzxbbbHMUUTB5sF9weDTQ21MVtY2G91%2FHVnaMToQrCHwhXHVng4JN2kE%2F8sTKLSI7C%2BnxnU0xG1%2B7s82HxWvbRb3BYN48exFcYvkiMBoWUMZUGl99ZzUf2xGOax2MLlPLEC8fQWsIgDA4FKVykNSCzzozCBmONmp1ftGH8%2BCVPtsvgKRfVoULc8hMsMtG9i4VF1PG3w%2FE%2Fu0qGt1bhsikjdj8p2P7xNR9FN9m7AW5NQOfaRIF%2FkGkNwEObWEBYd9%2BvMiHCSBQzU3p9mo16xClpZrA5M0SMQONryQP%2FVbQoc5HH%2BhOxvuEB%2F%2Bvd%2B4qc1k3xebXH5eRRtwJRuv9KeAZxqQTGstX9MiLnsYG9GzESwerxAsm%2F9cyZYaGHd4HnVepI15pZGnfzlZSlZgiBthqVdNK8lYI%2F2ocS7FY1mZLsl%2FQ%2BUIEHo1urthTtBIqD%2BFyVou0kHXAwdxa4iU6Zh57a%2FJeeqaLHbuZQ%2FvCoMIvOiMoGOqUBQK3qUJ7YFV5SAqYkxVA5FlUsd9luoK5eUcl0yE1ygrVoZ1GnZXnWpbTeEu0SMPRqZgXJVBK6lBHp81PDzysYHlEVf%2BF55s447mX8Hy1tPH1P5HS5ckVCm8JR0guU75m%2BAqk9oyIGhZvqm5S1ffymVivDhu3ELXkSTnLD3a3%2FIaCYL%2B9rwkIXOCjSoBVsBY4%2FZNPeA5%2BxgtrU54rqpQ5GILlxIJrg&X-Amz-Signature=333bec3a152235eb73188239d29bb3d65e4a0dba34885e95cde4e1a9ba47a97f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
