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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJVOHDQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8Q8QLCbrcQJWVcRv9mavzHkq4zcoURvGAvjdrLSqn0gIgKra35E1eNBAhbODpkdvW%2F6szDQn%2FyRxZQuZbU0nPX%2BYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDe3JhBYL9pLuRZvAircAxS6S%2BCdcPlwTRAlGTGzIwcOXvChv9xKUUtqT5Lxa28HlSHrZUuQdiy4eEGQwPaLondz1o%2Bo73Re6bkNBuwTJ5VSj002S6cO1fNNxt5CRRorr3z6yEstLFND9cFbqnowiLJcIDmZUdtBfufU%2FnIqQaIWcGhk3ZxOis1IV6hzntReHssrs%2FSw8ip61iJQgpE8CVYDpzyxmb7Haqc3k7AugeMv0%2BR2nvin4GFOOlWr%2BvDEr4MoM6yEgyvgE6mlg0eDgUwP8C4W%2Fn0N%2FIJoLD%2Bcy3AbLvTwVIhrRvdp%2B%2BESWynfKAuRrUD1CnlsOf3ee6nZ2UuGlN9YdehNiOOnFFmWXCGZMOs%2BdoztewjiWaGnGMDnrt55M5zoKJxnCowZzi31dPDglADNM08xcvEmsICAc%2FlhQTQpor1GIbQ88lplaviuEypEiWkgyRop1Xq5c0evrRbJJayHQwENEuHV8FTSIizpWKLR5Euv9KrA6r7Y%2Bd%2FaekoKBNG7qrEBQYdtAPZAl63nSc6IKMenH%2B2cd6bS2YwlTVI3uRRbKYXHXXsz7ve2Ihv01J%2FLcNbwd2k%2By4wgdpRA9%2B%2F0aufqxy8eCn%2BjAonWuUfvNinA%2BBi9nPiHeqeRLHSGmAYRGAu%2BKRgxMJmqisoGOqUBScMIgHzKFk4M3Y8wX5Dqb4FzTgakHqrk99cBJELBn8vOaF%2By%2F5XC%2Fec%2BpNtgjr8yT%2Fv2I9BJlc0%2FzNbjMvbNP8WcqkHzXVB13ibHhdVngFQ3VyEBuTYX%2F46tCWqmXEHVUUeM5fBTS555yEU9K4yytO8r02I5qxpblT68zkkDOA2uGt2QF%2BJH4sf5zBOgkuAkLA%2BIWgrpGvMlI4S9%2FakSAAXN7kuw&X-Amz-Signature=cc27ab05b7683c0d9000e4f4ec2e121f891b31dd33633343a0336da7a61ad5bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IJVOHDQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120756Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8Q8QLCbrcQJWVcRv9mavzHkq4zcoURvGAvjdrLSqn0gIgKra35E1eNBAhbODpkdvW%2F6szDQn%2FyRxZQuZbU0nPX%2BYq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDDe3JhBYL9pLuRZvAircAxS6S%2BCdcPlwTRAlGTGzIwcOXvChv9xKUUtqT5Lxa28HlSHrZUuQdiy4eEGQwPaLondz1o%2Bo73Re6bkNBuwTJ5VSj002S6cO1fNNxt5CRRorr3z6yEstLFND9cFbqnowiLJcIDmZUdtBfufU%2FnIqQaIWcGhk3ZxOis1IV6hzntReHssrs%2FSw8ip61iJQgpE8CVYDpzyxmb7Haqc3k7AugeMv0%2BR2nvin4GFOOlWr%2BvDEr4MoM6yEgyvgE6mlg0eDgUwP8C4W%2Fn0N%2FIJoLD%2Bcy3AbLvTwVIhrRvdp%2B%2BESWynfKAuRrUD1CnlsOf3ee6nZ2UuGlN9YdehNiOOnFFmWXCGZMOs%2BdoztewjiWaGnGMDnrt55M5zoKJxnCowZzi31dPDglADNM08xcvEmsICAc%2FlhQTQpor1GIbQ88lplaviuEypEiWkgyRop1Xq5c0evrRbJJayHQwENEuHV8FTSIizpWKLR5Euv9KrA6r7Y%2Bd%2FaekoKBNG7qrEBQYdtAPZAl63nSc6IKMenH%2B2cd6bS2YwlTVI3uRRbKYXHXXsz7ve2Ihv01J%2FLcNbwd2k%2By4wgdpRA9%2B%2F0aufqxy8eCn%2BjAonWuUfvNinA%2BBi9nPiHeqeRLHSGmAYRGAu%2BKRgxMJmqisoGOqUBScMIgHzKFk4M3Y8wX5Dqb4FzTgakHqrk99cBJELBn8vOaF%2By%2F5XC%2Fec%2BpNtgjr8yT%2Fv2I9BJlc0%2FzNbjMvbNP8WcqkHzXVB13ibHhdVngFQ3VyEBuTYX%2F46tCWqmXEHVUUeM5fBTS555yEU9K4yytO8r02I5qxpblT68zkkDOA2uGt2QF%2BJH4sf5zBOgkuAkLA%2BIWgrpGvMlI4S9%2FakSAAXN7kuw&X-Amz-Signature=71401b39597e0a819912a8336a092407bbdf0a6a92f4eea440abf063cb067cca&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
