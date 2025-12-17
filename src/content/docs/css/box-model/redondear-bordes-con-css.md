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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGNN5OBE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2g49zLj0V20xaBacvBB6HFnO5ssQdQsC32V23SDkYRAiB5JrChvtwd0BPX0OnmtrTioON%2B5n9%2FbhdlYzNKgLwjmyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMbFwEiCjwYAl1XufZKtwDAfWe4wd1tl64uBwsTzAW2tE1F4UbTX8ZeTVKj8yLIWgCoQlvdMpnufRLkgmp%2FnyvfjbqVZEpO8R4Lly9beVq0ZPkMl1UetPZQ0Uz86OrEbpBQepD4%2Bt4dx0c%2FBmrOvyhfaGhntZsJAhIFraRLOGdXtFQe4xs%2BPaDayci67k974YL5T8Lkku94MfdEhUg4jDi8e004uYB8Ym1hM002kzwV8Tp6mBuQij7C5Sv3W3hXkPTtu6cfGdf6qI7xYOyNee0upoeHkwv9E3Y4BTMm6UUrQRz%2FvXR8NqdE6mi9u5ll1GvwE7Y6XzLzBgDqvv3gS9vHn1o%2FjnmD3S%2FtGawr%2FLI%2BNHx0wEuQiF%2FfhRaCY5%2FobjTBUtRQnH%2BmgLvNu8EjXFiKiNgS5u5vFxDGC0SdZ3RweR4PKiP3kg4sxj18gf8gq%2BE%2BXvRy4scpWtjJWQuY2qut8qcEcHjNWI4XLqMpaauwTCaWiJjGl%2Fx0yo02NuNAnxedKLBbkUHR5rpE4XRLMLW%2FlNYz3H6KEpkJ4uxqZh9NXv9Yg7bsDdkeIGAJQCUc5teqNBOcwZYCaOntEc%2BEJJh46sf2rekWb%2FEIzWmqkwko8A8q619QeITpKjKx9p2wvZ01NGsuDSEIWdxK80wiPGJygY6pgErE42ZyzEiHHmUoF5d5wsXzI7a%2BBim2IkPumHdWWxgY5oooH%2FPCBJPRxzpffRB7JM6vLe%2FMfESO29SEDE3J6sDCof5dMQO9zZl6oEKu9yhJwYSPHMog615gTpV%2BI8wI7eOZGgEPhsPK3wgGa7I34j3batnWhg%2BY898%2BjW03LUdRl4udJqT8kfVWy%2F0bgjV6cQ%2FEglhindB7w8sdcEHTVKLaZwt1MAt&X-Amz-Signature=1c110e2fa977cd6ee23878e28297052499e17e70ecda3f3e404fea9a441629d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGNN5OBE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T101140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF2g49zLj0V20xaBacvBB6HFnO5ssQdQsC32V23SDkYRAiB5JrChvtwd0BPX0OnmtrTioON%2B5n9%2FbhdlYzNKgLwjmyr%2FAwh7EAAaDDYzNzQyMzE4MzgwNSIMbFwEiCjwYAl1XufZKtwDAfWe4wd1tl64uBwsTzAW2tE1F4UbTX8ZeTVKj8yLIWgCoQlvdMpnufRLkgmp%2FnyvfjbqVZEpO8R4Lly9beVq0ZPkMl1UetPZQ0Uz86OrEbpBQepD4%2Bt4dx0c%2FBmrOvyhfaGhntZsJAhIFraRLOGdXtFQe4xs%2BPaDayci67k974YL5T8Lkku94MfdEhUg4jDi8e004uYB8Ym1hM002kzwV8Tp6mBuQij7C5Sv3W3hXkPTtu6cfGdf6qI7xYOyNee0upoeHkwv9E3Y4BTMm6UUrQRz%2FvXR8NqdE6mi9u5ll1GvwE7Y6XzLzBgDqvv3gS9vHn1o%2FjnmD3S%2FtGawr%2FLI%2BNHx0wEuQiF%2FfhRaCY5%2FobjTBUtRQnH%2BmgLvNu8EjXFiKiNgS5u5vFxDGC0SdZ3RweR4PKiP3kg4sxj18gf8gq%2BE%2BXvRy4scpWtjJWQuY2qut8qcEcHjNWI4XLqMpaauwTCaWiJjGl%2Fx0yo02NuNAnxedKLBbkUHR5rpE4XRLMLW%2FlNYz3H6KEpkJ4uxqZh9NXv9Yg7bsDdkeIGAJQCUc5teqNBOcwZYCaOntEc%2BEJJh46sf2rekWb%2FEIzWmqkwko8A8q619QeITpKjKx9p2wvZ01NGsuDSEIWdxK80wiPGJygY6pgErE42ZyzEiHHmUoF5d5wsXzI7a%2BBim2IkPumHdWWxgY5oooH%2FPCBJPRxzpffRB7JM6vLe%2FMfESO29SEDE3J6sDCof5dMQO9zZl6oEKu9yhJwYSPHMog615gTpV%2BI8wI7eOZGgEPhsPK3wgGa7I34j3batnWhg%2BY898%2BjW03LUdRl4udJqT8kfVWy%2F0bgjV6cQ%2FEglhindB7w8sdcEHTVKLaZwt1MAt&X-Amz-Signature=a66fe3c4b97f92924903418f680cc1c36caa1bd2aed588c364fb18b379986060&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
