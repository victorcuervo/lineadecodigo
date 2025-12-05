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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P2Q5PWX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdUKrfhbPwioDC5uZr%2BMa3Eo37gdKhJaKY37A%2FL9OUaAiBVU9H1E5ilasVmoH0PrD0ALtmSdUDmPIZbuK4EGYEkpyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMtXHvloe2Q2XvSr60KtwDcK6xP42B8%2FWGa%2BKkKdP3VO7L5fxNasGpuB9t7EjbgL2dZioLAv8nPiZo4XvcP45TvUlK4uphBkk8uEI8XOXRCbVffRrh2HA6F4es2lMGd%2FwtJSTljJ4KdRpa%2Bu9zXejT8KeMbg1x2TBsENu9h1JCucWzaygkvyUlqdyNETR4FVJQRfSBxN6%2BiXumV9quLsVFXbmASmnzGBlnDXqLqNOmEAOUjQjd17XtPs%2BGv2RebEJBlw%2B8H6JgmL%2Fm9YeQi23jzQ7VDfGvhMD%2BC0TS54Fh6VngIYkp3HRtqajJmZ2fWs01DhEKfaa%2BYlxGIMcAgAvAeHdz4gldNYLuXIQA3T0IPDZrTlP7ZoKjQjtUISimrYHZrTIVjYkbBS368PCiuVBttFxgn%2F%2BuPUb59C0o8oirp3Kq8Q1aJ%2FlI%2F0X7jOFGIMItj5w%2F7LCT3fyUWwe5ZzVhufOska6ePz3ktEgJAnC4NIXJpduPePBD%2F9W01dXSHyOWZXeKh5L9ur7ZZ9kp8QfG6oHTjNkx1XwGmqAKLCKsmLisXBJuS5RbKo24L%2BmYqoTCQ5u%2FbaC%2BElEM22e%2F5FUjDd7Kpwn39gRrq1vjnhOWr7gyJB0CepNr4GV3oHf3qfkYCWaFwn%2FnQXtthk0wl4zIyQY6pgHyd3%2BKBsMuaOeo03z7Bp9RIAMEy2q0w1cjp6uiseQyddnAigVWXtKS45DjXZFiGvHQ4Ma1exoMN1cUgsN6%2FgOuyTqgi4bciOzqoHaY9gExaa340kzgi3cUhLAcBT3kLrOosdXJEqVyA65XVrDSTGOLNw2dErMnv2BCbAo%2BHcybXZRmV%2FZUtqQhg7lAfonAqEl%2FQ%2Fh6cWRQuFz6EefIO2vkJBSHOI21&X-Amz-Signature=5dda042c7ae5f360105512305de4c3565ed7c9650284c66f2577ae2d38f1a004&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666P2Q5PWX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014919Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDdUKrfhbPwioDC5uZr%2BMa3Eo37gdKhJaKY37A%2FL9OUaAiBVU9H1E5ilasVmoH0PrD0ALtmSdUDmPIZbuK4EGYEkpyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMtXHvloe2Q2XvSr60KtwDcK6xP42B8%2FWGa%2BKkKdP3VO7L5fxNasGpuB9t7EjbgL2dZioLAv8nPiZo4XvcP45TvUlK4uphBkk8uEI8XOXRCbVffRrh2HA6F4es2lMGd%2FwtJSTljJ4KdRpa%2Bu9zXejT8KeMbg1x2TBsENu9h1JCucWzaygkvyUlqdyNETR4FVJQRfSBxN6%2BiXumV9quLsVFXbmASmnzGBlnDXqLqNOmEAOUjQjd17XtPs%2BGv2RebEJBlw%2B8H6JgmL%2Fm9YeQi23jzQ7VDfGvhMD%2BC0TS54Fh6VngIYkp3HRtqajJmZ2fWs01DhEKfaa%2BYlxGIMcAgAvAeHdz4gldNYLuXIQA3T0IPDZrTlP7ZoKjQjtUISimrYHZrTIVjYkbBS368PCiuVBttFxgn%2F%2BuPUb59C0o8oirp3Kq8Q1aJ%2FlI%2F0X7jOFGIMItj5w%2F7LCT3fyUWwe5ZzVhufOska6ePz3ktEgJAnC4NIXJpduPePBD%2F9W01dXSHyOWZXeKh5L9ur7ZZ9kp8QfG6oHTjNkx1XwGmqAKLCKsmLisXBJuS5RbKo24L%2BmYqoTCQ5u%2FbaC%2BElEM22e%2F5FUjDd7Kpwn39gRrq1vjnhOWr7gyJB0CepNr4GV3oHf3qfkYCWaFwn%2FnQXtthk0wl4zIyQY6pgHyd3%2BKBsMuaOeo03z7Bp9RIAMEy2q0w1cjp6uiseQyddnAigVWXtKS45DjXZFiGvHQ4Ma1exoMN1cUgsN6%2FgOuyTqgi4bciOzqoHaY9gExaa340kzgi3cUhLAcBT3kLrOosdXJEqVyA65XVrDSTGOLNw2dErMnv2BCbAo%2BHcybXZRmV%2FZUtqQhg7lAfonAqEl%2FQ%2Fh6cWRQuFz6EefIO2vkJBSHOI21&X-Amz-Signature=80fc0d8436bb6d993a004b281b719761836df349fa60de0eb8c46e1f6d7488af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
