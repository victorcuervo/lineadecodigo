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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHMRBAEJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCILzTGNe6uBwAp7%2F1%2BbP84orLn1q3EM2KlLRFSJQ640gIhANkqkr%2Bq%2FHOl%2FsOiQ0oWQZSeNX%2FkQlmzZ9XhOKyzBCtBKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjxxQ5LySQDLkoHu4q3APOJb171yMknGXn8HFgiU7hUehCYx1M%2Bo6TQTD%2FjEaZacoZexvFJORRYz3Mly3sIz2KIw45bTX9ocBYYvIUk8knU0SWuq8bgrfBs9MDEv0lbkp2mCOgGG0Ruq8srtq5MJoWMmISTdOXq6fSXI3YicaIXcZBJzJtS6QgyQms9%2ByDusxwsIm6KoAjexo%2FsnYD0FCRp%2FTjLtAHQuWdrUgni7ZPKO078PvCvbeCAntL5UU7CkU6Zv3KbQ2g4wDuPWux1daWl9eWo3rsXy4ETuViDW9eH6JCPvAUTepuoslrRfmlxKlj1xyfd22nVmsYpcur72x52sOWclI4nqsmZ5ZWLAj2PjLFGotfNvneglzCG2Fq25ABaGosOkZSdBBQToWVDEItljlPsZNjr4eWBFzZo5mfsveWaZWct5sdX%2BL9Tz3DlE5ZhyrjKhUOu4S%2F9qZdmrfnytYPz3mz1Zqp3ABaqoPL%2FSFXbZuJ30Mu7A%2Ft4Ww2YGsHGJCjoaDr74B3kTJCdKHYPBS7Xydz4ozrDysPaB6updrU6vrT8y4Lk4l75w%2F1xxrZSoJuCBMFMoZmigdhM%2BDojd0GzsZmdiTdLNrEbfbaCVVyq0u6TpZK6jChaUwnr5ZU7NkHaQY2rCKqmjDr5d7JBjqkAbE14D2%2F3fVcOppJhV%2B45dMI6GPSm%2Fn2fBLnTnuhnklvpkQj58kGGLB%2FkU2fyJrom6vLkONBf%2FbTj3dV4OAtLQtCqX4k92N4ejNemb78tNM3ZOiyU0pCCvqXm61vKbVbdMHCaZ3w0dn134pvqszSZ1Mdkl3IXKcxHlFSoM5nOlFuUY4aEPLdVq2mlqGUfMPC%2FLHIwB2G1yJS6jCRu%2B1JnluJVHzA&X-Amz-Signature=69fd11622eab8cdddc45d477c85382cf8734e6f4e3c618a990d8ce75713312dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QHMRBAEJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T054203Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCILzTGNe6uBwAp7%2F1%2BbP84orLn1q3EM2KlLRFSJQ640gIhANkqkr%2Bq%2FHOl%2FsOiQ0oWQZSeNX%2FkQlmzZ9XhOKyzBCtBKogECLf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxjxxQ5LySQDLkoHu4q3APOJb171yMknGXn8HFgiU7hUehCYx1M%2Bo6TQTD%2FjEaZacoZexvFJORRYz3Mly3sIz2KIw45bTX9ocBYYvIUk8knU0SWuq8bgrfBs9MDEv0lbkp2mCOgGG0Ruq8srtq5MJoWMmISTdOXq6fSXI3YicaIXcZBJzJtS6QgyQms9%2ByDusxwsIm6KoAjexo%2FsnYD0FCRp%2FTjLtAHQuWdrUgni7ZPKO078PvCvbeCAntL5UU7CkU6Zv3KbQ2g4wDuPWux1daWl9eWo3rsXy4ETuViDW9eH6JCPvAUTepuoslrRfmlxKlj1xyfd22nVmsYpcur72x52sOWclI4nqsmZ5ZWLAj2PjLFGotfNvneglzCG2Fq25ABaGosOkZSdBBQToWVDEItljlPsZNjr4eWBFzZo5mfsveWaZWct5sdX%2BL9Tz3DlE5ZhyrjKhUOu4S%2F9qZdmrfnytYPz3mz1Zqp3ABaqoPL%2FSFXbZuJ30Mu7A%2Ft4Ww2YGsHGJCjoaDr74B3kTJCdKHYPBS7Xydz4ozrDysPaB6updrU6vrT8y4Lk4l75w%2F1xxrZSoJuCBMFMoZmigdhM%2BDojd0GzsZmdiTdLNrEbfbaCVVyq0u6TpZK6jChaUwnr5ZU7NkHaQY2rCKqmjDr5d7JBjqkAbE14D2%2F3fVcOppJhV%2B45dMI6GPSm%2Fn2fBLnTnuhnklvpkQj58kGGLB%2FkU2fyJrom6vLkONBf%2FbTj3dV4OAtLQtCqX4k92N4ejNemb78tNM3ZOiyU0pCCvqXm61vKbVbdMHCaZ3w0dn134pvqszSZ1Mdkl3IXKcxHlFSoM5nOlFuUY4aEPLdVq2mlqGUfMPC%2FLHIwB2G1yJS6jCRu%2B1JnluJVHzA&X-Amz-Signature=f2b62ddff90391ba59c1bdb261abfb72f67a877c691bc4fec7d6a07319e8dda5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
