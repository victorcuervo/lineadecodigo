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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQQERZTQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBE42kBFvs276LAlGAeBOOze6aYQCmAkb2L6YhWGRMFYAiEAses2xrips0pzllTVPYXZkpkc7VQkH%2FTPs%2BtGD6a%2Bx3QqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtWy14znGo7p7UhuSrcA17synp6pKEcIpJGWZZaQxoAYfl5DfHivunCjB9ykoZ8UDmKipVK%2BLg9WatCiIq1UCZhe07yY4GdIVh7iDsOog1U0xahQllyvN2DoUMO1HKL7%2F8YZj6W%2FUPq51Zh2IohwlG4YIjd4%2FdiUZ%2BRH9XkZNC76XDzP4FpBE%2FBO5ijIdWNaycNoQWvnIlPfkvOhVFGBSGd31DzTrwQHoQdFNhX0fTTVdsTlvKMJafgZPOarNj9D2SkbA7ein2H06VauAnmOKAe61MWWxF0TlHyObCpnnI1XbYTtJ2s9bqzCeRyWz6F3AV5Nr2V4gP63s%2BOkueiNC2A%2FrjZT9gw7E44jjwykdgcIT5UzizaK%2F9B4XaFn8ZRUqiDm0vyoJwFAMn52AEYuqhe2nkmLC4HoVmV05joIFgEoHfKQf3LPzvulhoBtZ%2FQgIYQPUc1%2FoNaYf5X9ZE88KBztuANps80x%2FJLGlpEJQgw5Lhh7%2BRny5pkzi622bm5hh5H3%2FjR3IVvrs7ABZsZvd7osbMUw66zBYoU85%2FKurCGGCrD47bdBO5Y%2FKx4kSWi4Ojr%2FoHE6DVwUW%2FJYy2EOM7bwqNUpnNvI%2BvUS4LVJNOwTjVI7tDP%2Fr%2BGBUCfP6qUzS19w%2Fi9byEj1Si6MP%2FK3skGOqUBQVa1toRZmQEbc5G%2FyJzanyB6hY7JXjiS36l7huoa9kTujNcG5EppzRb%2FK0dogumrbLTOCTaqt%2FySDIABESBynA2%2F%2BwEKvsz0aqX9DIKikii%2BCw7AKtbIvsV1CQ2m7PVE73eM69DYvwBmJPBCZK29emuDPLbdp17%2BCf8%2FMHMWK6R02IEyHHXlHMxb%2Bi%2F6csTDJje1h%2Fbuqbwyti4kYLJjPcVSw7sc&X-Amz-Signature=fd5dc92e842a4a352954e2064f9190b80bd25e8ad016f3cb01e3bcd9dfeb9afa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QQQERZTQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044707Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBE42kBFvs276LAlGAeBOOze6aYQCmAkb2L6YhWGRMFYAiEAses2xrips0pzllTVPYXZkpkc7VQkH%2FTPs%2BtGD6a%2Bx3QqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtWy14znGo7p7UhuSrcA17synp6pKEcIpJGWZZaQxoAYfl5DfHivunCjB9ykoZ8UDmKipVK%2BLg9WatCiIq1UCZhe07yY4GdIVh7iDsOog1U0xahQllyvN2DoUMO1HKL7%2F8YZj6W%2FUPq51Zh2IohwlG4YIjd4%2FdiUZ%2BRH9XkZNC76XDzP4FpBE%2FBO5ijIdWNaycNoQWvnIlPfkvOhVFGBSGd31DzTrwQHoQdFNhX0fTTVdsTlvKMJafgZPOarNj9D2SkbA7ein2H06VauAnmOKAe61MWWxF0TlHyObCpnnI1XbYTtJ2s9bqzCeRyWz6F3AV5Nr2V4gP63s%2BOkueiNC2A%2FrjZT9gw7E44jjwykdgcIT5UzizaK%2F9B4XaFn8ZRUqiDm0vyoJwFAMn52AEYuqhe2nkmLC4HoVmV05joIFgEoHfKQf3LPzvulhoBtZ%2FQgIYQPUc1%2FoNaYf5X9ZE88KBztuANps80x%2FJLGlpEJQgw5Lhh7%2BRny5pkzi622bm5hh5H3%2FjR3IVvrs7ABZsZvd7osbMUw66zBYoU85%2FKurCGGCrD47bdBO5Y%2FKx4kSWi4Ojr%2FoHE6DVwUW%2FJYy2EOM7bwqNUpnNvI%2BvUS4LVJNOwTjVI7tDP%2Fr%2BGBUCfP6qUzS19w%2Fi9byEj1Si6MP%2FK3skGOqUBQVa1toRZmQEbc5G%2FyJzanyB6hY7JXjiS36l7huoa9kTujNcG5EppzRb%2FK0dogumrbLTOCTaqt%2FySDIABESBynA2%2F%2BwEKvsz0aqX9DIKikii%2BCw7AKtbIvsV1CQ2m7PVE73eM69DYvwBmJPBCZK29emuDPLbdp17%2BCf8%2FMHMWK6R02IEyHHXlHMxb%2Bi%2F6csTDJje1h%2Fbuqbwyti4kYLJjPcVSw7sc&X-Amz-Signature=f840839a4fc3b2eb88719142a82d2ec2dd4a433bfd08f39ce0ab077c251e7186&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
