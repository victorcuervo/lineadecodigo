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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAHH62GX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHAuLBPkSJYXl%2BYLHGbmqvmrIW4YHnDxoEjwYyaaoNTAIgAmY2kIMf%2B%2B4kPZH39tTM49rH%2BxTikskFhWxymjP14isq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBLIx9%2FfspggR3XHFircA%2FwTHLYptNZXNGczDWGyjMFctukZFKrk%2BHkLIJ2QGjwUdL4RnDHZ1tb4H%2F7eidC8XaMD%2FBJ7nAO7kYcnQJR6s36HeFozw6usscbqRouiLQcif6JO0k5VoYbFzHjBMMcOBAH63jU7ZbHL60lleL2gxCr9TooUiRMHDJ7Ls0%2FWdRB902FL%2FYP3BCNt0oTrq26fA186CZZSzyPSwX1jTppGLVXDLrZKjLXoEMVjeX%2BdTN3jhmTnxs%2B%2FmQbljzDVmBwpE9LgKWjs7K2DP%2Fh2s9yf%2FpjLM%2BcXDAVSiLgNrRFn2gVU1lVoi1%2BJJOuiEUYa2jEK5Zr5WsnEq8k9WW%2FuCXpILaz8cSfXnewNWuZGNGRGuQHQxmnhC1Ly3F%2FTvAx3aFB5BmgmAQlh%2BlVXqfIV%2FHVPCQ2zKDVWEg%2FHGxn1qMFo9AYUjNsm4SV7G4p5STnk7cW1CAdDJt6zmdurdnBZCERDnZfriXgRJQZDD4d2fjNmpyek9Or0b6aBl4dj8F%2B7RXwXuCzd2je6uqNw4Ht9t4TpI8CszIuV09ThBi806RmRGtmKn8SIpnyK%2BmtC%2Fl9Y5nRhF4gXGhFoqRMHsBG24ZvFMGDHr5j5dEzH5ViHfvIAI3hgQiYVcIgkyVT1Pm1oMIGn0MkGOqUBnwNTJxT5hfM1dR%2Fr2apQUrveZWzVSSfbNkQFjMdZlT9kmiO9IFIbYFVwygpHohDTYNPPNutMdRDmzLfExo%2Bxuc5mJf%2Fcgfguk2tE%2FBsxx%2FQrOLJE99SG2gpcuzi%2BCwCvD4%2BweQydSYjl714MTHEHW7v%2FpuX8CQVuTu4FzxoYHmgDHAKTsZ%2BEOpXsHrxPLRI%2B86HRCE%2BE5UBW4GlEO5dVO5nQkArF&X-Amz-Signature=b88c9b55ac83ee41770f9a263544473005c43625946239dbfaa6b302ea24f21b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QAHH62GX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T171856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDHAuLBPkSJYXl%2BYLHGbmqvmrIW4YHnDxoEjwYyaaoNTAIgAmY2kIMf%2B%2B4kPZH39tTM49rH%2BxTikskFhWxymjP14isq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBLIx9%2FfspggR3XHFircA%2FwTHLYptNZXNGczDWGyjMFctukZFKrk%2BHkLIJ2QGjwUdL4RnDHZ1tb4H%2F7eidC8XaMD%2FBJ7nAO7kYcnQJR6s36HeFozw6usscbqRouiLQcif6JO0k5VoYbFzHjBMMcOBAH63jU7ZbHL60lleL2gxCr9TooUiRMHDJ7Ls0%2FWdRB902FL%2FYP3BCNt0oTrq26fA186CZZSzyPSwX1jTppGLVXDLrZKjLXoEMVjeX%2BdTN3jhmTnxs%2B%2FmQbljzDVmBwpE9LgKWjs7K2DP%2Fh2s9yf%2FpjLM%2BcXDAVSiLgNrRFn2gVU1lVoi1%2BJJOuiEUYa2jEK5Zr5WsnEq8k9WW%2FuCXpILaz8cSfXnewNWuZGNGRGuQHQxmnhC1Ly3F%2FTvAx3aFB5BmgmAQlh%2BlVXqfIV%2FHVPCQ2zKDVWEg%2FHGxn1qMFo9AYUjNsm4SV7G4p5STnk7cW1CAdDJt6zmdurdnBZCERDnZfriXgRJQZDD4d2fjNmpyek9Or0b6aBl4dj8F%2B7RXwXuCzd2je6uqNw4Ht9t4TpI8CszIuV09ThBi806RmRGtmKn8SIpnyK%2BmtC%2Fl9Y5nRhF4gXGhFoqRMHsBG24ZvFMGDHr5j5dEzH5ViHfvIAI3hgQiYVcIgkyVT1Pm1oMIGn0MkGOqUBnwNTJxT5hfM1dR%2Fr2apQUrveZWzVSSfbNkQFjMdZlT9kmiO9IFIbYFVwygpHohDTYNPPNutMdRDmzLfExo%2Bxuc5mJf%2Fcgfguk2tE%2FBsxx%2FQrOLJE99SG2gpcuzi%2BCwCvD4%2BweQydSYjl714MTHEHW7v%2FpuX8CQVuTu4FzxoYHmgDHAKTsZ%2BEOpXsHrxPLRI%2B86HRCE%2BE5UBW4GlEO5dVO5nQkArF&X-Amz-Signature=fc888aec11c7e21cda05c69a1e94b00a794ed3dd3cf0a2b72dc8bf4e08b0ab89&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
