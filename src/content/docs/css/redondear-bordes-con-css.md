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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTCGLHFY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyVyyoqnyA0Ydms3SAulgCG%2Bz7ybb5T3%2FxMPI7KUlh%2FAiAFmptXPx5k89xXkgodW0fkGq3dsqSi00gm4kWHwXT9Pir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMD1nZQ8FTfcLZWgMsKtwD00DYfudvd4R4N2BC%2B70kHfugUpw%2Bly0fjtEVdd8V%2FR0IMquciDzhKS7oFbuiuFe4iJhgQOCo5QHWrtN5t3RWlA8OxgGrBAFPCy5Q0VryVu49zmAEgSJ0q1VuOGObLWyMRpmU1TsTBng9PAbUNrXUoFh1IloYlOtPK4cUNepTRQeKNXFpgVq%2BT9KTOLafPu5iQw%2FVMfltcKI3VZ7ET%2BjOzuWfDURCFyzlZfYEdzf2%2BKIvtFPlGqvT4EaO4qo2RJAcu9WbfWmuU6CxSZ2TVLNiYA%2B%2Bs0P747TUdgZOy9NL28%2F%2B%2FiE%2BRG4BCL7FTdK5REQyNQVu0nTboZNOHEy5Pn4m%2FaqX7FLxPtp6SQxpiMZ%2FNtLy9%2FQ87QMtFdz6UcTRvAJZkx66hZIgseA7LHUxG4GNZDj4s7ENgnj80gcwHlP1rkj7IL9qklaXX4m4omDntGTl9cjK27Wo1BPU8Rfy5VXhnHGjFwmmAiz7Kq6ZNeQ9cf9wp3Pvx%2Fs2liL%2Fa2IK03iGUvMjrvB9OgBpk9MmCLc%2B9OLOXIUi91GS%2BWE5%2FFIHCMCEY5358hkHZPeXEFrIpfat%2Bsd1lIKghFnFwpoCNhHiioTGrO5ByQ04LrzaXvfavnIJ8o%2FHUAxcCdSOwgcwlN7OyQY6pgEt72%2FhPNatR3Hdz8bn46p%2Bsu9YU0Sv6GmG9LsHjz3vBk0G1Y6vxFUQ3ECdBCPVrrE5quvVfjEGOVKhwzBUBBjueu0mpjiZu4fkaRUUYCgqizqFm8C6PiJq9MXkarH%2BG3BuiY%2BpcBjzbm3H4r7L2FdMbt9sLiTe9KyL5ETYyvwub7SV7TiqqlRYJlcXk7mSA69PEKMzBfSMmljXdLr%2B1VbmK9JQK4lo&X-Amz-Signature=4307111e5048f16b21ade4058e1b9428dbc844e2b4c5d23b5e62ae30cbdc864d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QTCGLHFY%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T051117Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICyVyyoqnyA0Ydms3SAulgCG%2Bz7ybb5T3%2FxMPI7KUlh%2FAiAFmptXPx5k89xXkgodW0fkGq3dsqSi00gm4kWHwXT9Pir%2FAwhtEAAaDDYzNzQyMzE4MzgwNSIMD1nZQ8FTfcLZWgMsKtwD00DYfudvd4R4N2BC%2B70kHfugUpw%2Bly0fjtEVdd8V%2FR0IMquciDzhKS7oFbuiuFe4iJhgQOCo5QHWrtN5t3RWlA8OxgGrBAFPCy5Q0VryVu49zmAEgSJ0q1VuOGObLWyMRpmU1TsTBng9PAbUNrXUoFh1IloYlOtPK4cUNepTRQeKNXFpgVq%2BT9KTOLafPu5iQw%2FVMfltcKI3VZ7ET%2BjOzuWfDURCFyzlZfYEdzf2%2BKIvtFPlGqvT4EaO4qo2RJAcu9WbfWmuU6CxSZ2TVLNiYA%2B%2Bs0P747TUdgZOy9NL28%2F%2B%2FiE%2BRG4BCL7FTdK5REQyNQVu0nTboZNOHEy5Pn4m%2FaqX7FLxPtp6SQxpiMZ%2FNtLy9%2FQ87QMtFdz6UcTRvAJZkx66hZIgseA7LHUxG4GNZDj4s7ENgnj80gcwHlP1rkj7IL9qklaXX4m4omDntGTl9cjK27Wo1BPU8Rfy5VXhnHGjFwmmAiz7Kq6ZNeQ9cf9wp3Pvx%2Fs2liL%2Fa2IK03iGUvMjrvB9OgBpk9MmCLc%2B9OLOXIUi91GS%2BWE5%2FFIHCMCEY5358hkHZPeXEFrIpfat%2Bsd1lIKghFnFwpoCNhHiioTGrO5ByQ04LrzaXvfavnIJ8o%2FHUAxcCdSOwgcwlN7OyQY6pgEt72%2FhPNatR3Hdz8bn46p%2Bsu9YU0Sv6GmG9LsHjz3vBk0G1Y6vxFUQ3ECdBCPVrrE5quvVfjEGOVKhwzBUBBjueu0mpjiZu4fkaRUUYCgqizqFm8C6PiJq9MXkarH%2BG3BuiY%2BpcBjzbm3H4r7L2FdMbt9sLiTe9KyL5ETYyvwub7SV7TiqqlRYJlcXk7mSA69PEKMzBfSMmljXdLr%2B1VbmK9JQK4lo&X-Amz-Signature=f1e6a674857ec92788273ca1c6c654f79418e0178f08d4c9826214c12e6da962&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
