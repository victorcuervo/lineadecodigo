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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HCWPLI3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTHNCWKV%2FmW8QXHp%2FS9lGj5ioBaxQYtbFZSqNkPOUvxQIhANsDuoht%2BvtiVPeU96oBVwL9YK%2B7TXwTGKwgLZ7uD7eOKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo9weuXftLfjw2hcsq3AO9LUsOOFA4kNRc9CUK68FoYTsVBoVUYnQ94Eorat0imC2lnpXJJCB2D%2Fc1QusXMoliDZ%2BXOQGO8zaQXM7sgIH0ZrgWYcg%2Fl%2BCQD4%2FUcXKzfL7fv0keibxAfHQ2uNWB5UMfP5aWRrQZdmArlDGz6blEh99tshaP4BR5eGcviVdeDeW70wfHwN6jaE%2FWNkChyj7bBWb%2Fex%2BPaa4gIUrA5IG8mijKfmukMmDgJ8zZGgdilDsxDq%2BvNKyTnwZ9MDxUv1cZs4CaZdkFJ3UQqOEtQIs%2FcYUFMZEJvJVJeCBMldBqemSF1bP%2BLes%2BTklGkQyEc28bfOte4Bltn%2BPHuHJsw2tY3to9HlrQLoMyn888t8GyGcCGRy%2B%2F3%2FvEkUfhDqdHF37qeKu3vrRCEZqVgYhCEovWqJmRtbd%2BZwk3rJuWRZpVxPXQvFVbIatg%2BSd%2Bv%2BnUjH0c7ggrOt%2FFUXIjFDqtyl2ni%2FGWTyPO6ImYxQTXuM3LKiEt%2BGwKAxk7hWlrFBs%2FXsV%2B8d42YvxFtDqjieu4HlSGCyn3XJjbo5MgQ4z7%2B%2FZKPVPUfpcN0h%2BcKo0guFY5CZ3rJM3VgIuDV%2F070oN%2F0kGhJIO85OtzqsY9%2FiVVWjEYIX8VCQm6byXsFQgSwzCuodjJBjqkAYxY%2BP%2FjA%2BWYgKPDn2yu1gzVs%2FlJNmU1IEi7pwFvOVjCrMuOMYoM8CkKrKfQpdQjkRFmuXZfT8sy7yQqWUao60J%2FbrSfMPOJWJbrFsc4wuFHrCVXB7suVCHdrPSwIlQutR9RlmiUfUldNucVK2xd6rdpZK8jvCHjx9vADRAm%2BkDayXel%2FctdXmZQhMK1tj6j%2F51%2BB3gENHDiquxICJVFrFvbRUX4&X-Amz-Signature=7c317c380d76a890450bfac806376a9a63f06bd07d544bee30a5e0df71eb51d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663HCWPLI3%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T011733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTHNCWKV%2FmW8QXHp%2FS9lGj5ioBaxQYtbFZSqNkPOUvxQIhANsDuoht%2BvtiVPeU96oBVwL9YK%2B7TXwTGKwgLZ7uD7eOKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzo9weuXftLfjw2hcsq3AO9LUsOOFA4kNRc9CUK68FoYTsVBoVUYnQ94Eorat0imC2lnpXJJCB2D%2Fc1QusXMoliDZ%2BXOQGO8zaQXM7sgIH0ZrgWYcg%2Fl%2BCQD4%2FUcXKzfL7fv0keibxAfHQ2uNWB5UMfP5aWRrQZdmArlDGz6blEh99tshaP4BR5eGcviVdeDeW70wfHwN6jaE%2FWNkChyj7bBWb%2Fex%2BPaa4gIUrA5IG8mijKfmukMmDgJ8zZGgdilDsxDq%2BvNKyTnwZ9MDxUv1cZs4CaZdkFJ3UQqOEtQIs%2FcYUFMZEJvJVJeCBMldBqemSF1bP%2BLes%2BTklGkQyEc28bfOte4Bltn%2BPHuHJsw2tY3to9HlrQLoMyn888t8GyGcCGRy%2B%2F3%2FvEkUfhDqdHF37qeKu3vrRCEZqVgYhCEovWqJmRtbd%2BZwk3rJuWRZpVxPXQvFVbIatg%2BSd%2Bv%2BnUjH0c7ggrOt%2FFUXIjFDqtyl2ni%2FGWTyPO6ImYxQTXuM3LKiEt%2BGwKAxk7hWlrFBs%2FXsV%2B8d42YvxFtDqjieu4HlSGCyn3XJjbo5MgQ4z7%2B%2FZKPVPUfpcN0h%2BcKo0guFY5CZ3rJM3VgIuDV%2F070oN%2F0kGhJIO85OtzqsY9%2FiVVWjEYIX8VCQm6byXsFQgSwzCuodjJBjqkAYxY%2BP%2FjA%2BWYgKPDn2yu1gzVs%2FlJNmU1IEi7pwFvOVjCrMuOMYoM8CkKrKfQpdQjkRFmuXZfT8sy7yQqWUao60J%2FbrSfMPOJWJbrFsc4wuFHrCVXB7suVCHdrPSwIlQutR9RlmiUfUldNucVK2xd6rdpZK8jvCHjx9vADRAm%2BkDayXel%2FctdXmZQhMK1tj6j%2F51%2BB3gENHDiquxICJVFrFvbRUX4&X-Amz-Signature=90ded005c8047574ba8bf0ed0f2ef7df73b48d62125d5e0f60b4a7781cc32e78&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
