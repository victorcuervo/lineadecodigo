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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUBLBU5F%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjuMnqev0vLMQvL%2Bhikt9cBJ1fWPWCSppt0I8w28mq%2FAiASmEDg9UDpoXtiA6ZjXkbG1IWP4uzwevgtUtpC8XV7SCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM06PuFtI7us9LV4vuKtwDxQ1QqaNozZs2d2DTuztaPtEKgUIiEcJD1444mX55r%2Fn%2FbPIfgE%2FMNCUQPpbw8W1b9Ux6TU7q1G3XXPUbEEL8rKfpuoZh8Bo8CJIN6ZgKUPWRuwHkuIGs2AzOHj9EBD9y43a2l2I%2BfI5LwUnFuspA9F19NBGrgRSSy%2FU%2F9YYNW%2F6M8kb%2FT7g7iiIOM2JreXVTO9Hlyy%2BIgVoNJBlna6w3PzYQa0Tbr2Jt2qjG8%2F3rgWLTAmj07gG2UwxvQY8ao%2B9WbdnlNbPWzHCirdt2E0Ohe8B6rw4Fwi%2FD41dETPrQJcEiazkMfIB3NKu0SwNVHTgiR%2FB2uooZCZcNEbaK%2Fp9Qf0RK%2BidtFlS9uW%2B%2F1mxZS9B0SIE6YS0PVOqfREdsj1mMwF0kgeOJ4TOPgBcLMdkDaDx3jbnY0igZnXzwIQMsGZZ%2BbQ4nYuVSSvVy%2Bb5eMhnLyi3dkMofOnLE0036whTOXlUeOk3hix%2BNLfJXHfP1BHoCu7Vke5WbB1fNp1%2F0zuChjjEjdkH4%2BphnHow3cXNemHwrn6b7PMYvArqh3tDghk%2BGfgteRkqICIspnmONo%2F9LoTmTUqAznZe1U1yjIMekHbjjVO%2F7mjKKAhSNLgg7PzT7e5%2BDuY712sEzolwwhY7eyQY6pgH2k7%2Ff3uT6Bv7KI8vTy%2Fh6%2B9tWdkXnxkic8kDgrfW%2FsPk1sOTxW0ryuXDqb8msz9ri5xlgsE7xCI6giNzWo%2FQkxbkwDY3OLdY6qGwCKGgCUKLuAnS0kgGnldJKaaBKWey3wa6BzKdZbqMzb8q0lMx7UCH8%2B0PF6UUIQfSdy8uvLEheAqepcPfHw%2F2qpgqml6fPJwussE2PHF0TK%2BToTA%2Fh2ULdcj9Y&X-Amz-Signature=1c2494df8d056eddafd99fd5ac727895d08bb8a22ccd759352f6a0f261a2e44f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUBLBU5F%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T022430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFjuMnqev0vLMQvL%2Bhikt9cBJ1fWPWCSppt0I8w28mq%2FAiASmEDg9UDpoXtiA6ZjXkbG1IWP4uzwevgtUtpC8XV7SCqIBAiz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM06PuFtI7us9LV4vuKtwDxQ1QqaNozZs2d2DTuztaPtEKgUIiEcJD1444mX55r%2Fn%2FbPIfgE%2FMNCUQPpbw8W1b9Ux6TU7q1G3XXPUbEEL8rKfpuoZh8Bo8CJIN6ZgKUPWRuwHkuIGs2AzOHj9EBD9y43a2l2I%2BfI5LwUnFuspA9F19NBGrgRSSy%2FU%2F9YYNW%2F6M8kb%2FT7g7iiIOM2JreXVTO9Hlyy%2BIgVoNJBlna6w3PzYQa0Tbr2Jt2qjG8%2F3rgWLTAmj07gG2UwxvQY8ao%2B9WbdnlNbPWzHCirdt2E0Ohe8B6rw4Fwi%2FD41dETPrQJcEiazkMfIB3NKu0SwNVHTgiR%2FB2uooZCZcNEbaK%2Fp9Qf0RK%2BidtFlS9uW%2B%2F1mxZS9B0SIE6YS0PVOqfREdsj1mMwF0kgeOJ4TOPgBcLMdkDaDx3jbnY0igZnXzwIQMsGZZ%2BbQ4nYuVSSvVy%2Bb5eMhnLyi3dkMofOnLE0036whTOXlUeOk3hix%2BNLfJXHfP1BHoCu7Vke5WbB1fNp1%2F0zuChjjEjdkH4%2BphnHow3cXNemHwrn6b7PMYvArqh3tDghk%2BGfgteRkqICIspnmONo%2F9LoTmTUqAznZe1U1yjIMekHbjjVO%2F7mjKKAhSNLgg7PzT7e5%2BDuY712sEzolwwhY7eyQY6pgH2k7%2Ff3uT6Bv7KI8vTy%2Fh6%2B9tWdkXnxkic8kDgrfW%2FsPk1sOTxW0ryuXDqb8msz9ri5xlgsE7xCI6giNzWo%2FQkxbkwDY3OLdY6qGwCKGgCUKLuAnS0kgGnldJKaaBKWey3wa6BzKdZbqMzb8q0lMx7UCH8%2B0PF6UUIQfSdy8uvLEheAqepcPfHw%2F2qpgqml6fPJwussE2PHF0TK%2BToTA%2Fh2ULdcj9Y&X-Amz-Signature=cad8be2aed45fca416f93edbc4d365d38885e507f919b2551f999deb07396929&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
