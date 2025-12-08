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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KI74VO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBeF74Bu%2FLXrOALBI9oaQkoD2yf%2BaIlHAGpbSJgRPyfAiAB%2BCddDDgNuqZ4mSy0ySNGpEORRFneZx4oUX49Sv2RqiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeIr9Mr5WIbtOvyDPKtwDPO7shgMoFWAAbddTp6Y7PyMfWm%2F1rIGkJe6z33ZXmmUsbPssDyiHNUtJ3KEe1e80pB2N2T3PoKxNkTYcYbOMDYyFM%2B8dhnCNeY58piwdgqZD5FhCugtjvZbAqfCUN2v5GaR3O3ieTbiB16W5hzSBMTFTh2nkAVSFnO8f%2FaI9xZ6iFve8bBdquRXGxGCrXHycfFrlbKj7QuK5KBajaxGBSonaaD36rkTVoXfHGgM7jEFyKm3Fh6%2FoEZ9nRcIDMPE4%2FAotJe54UfvszC45QQ6VdllS7QmV23IJ7LQYd5sjliON54FLZAkX4gJyizd8B3TELiuIJf4C153NN9oD7LKsw4dztYWUevMYlZXBNVEWgSjLhHs%2FbCrMtObxqrQ9%2F18pt5S4cBAik%2FdWqdm65%2Fml0c%2Ffsr%2Fsq9vC29w4xkguEi4Wg3CG5k0dyKHu3pCySYSWXEpYxqIbK0twJRjuPG4icqiUBb%2B8R4Jm7yzgIEhuBjFp0qcGE0l9Dp%2BaEqQvm51a3shhCkD9Bsn%2BMBurroJZKO8slbqof2JMQtqbmXEGQU1ybsZTkcZdc%2FFqzLzvbyuHMvWk3nKtjoCiAUCKMPE9X8DpK9%2FJNsOhhoCtJ8IaCSgGB6COoVxVeCSRirwwqO3ZyQY6pgF98pi77lKEVX260A%2BybaX1D9O%2FN0Jt7hiythyJAPTkzOSuX02T2lKYqI28tUN7WkUoOKQHUcneNnrDwBDs3C5gVEe4MVlhnwqMfsCQRKhc8vaM7cNxGKu972ilkNNCDeK53KrRB0EKNffFn5FddRvTP1%2FuFFoZX5%2FUVr%2B65VIy4MVIWKk8Cl6eASPSj34C4Hda7KG0PI8cIBfZ8nJSBuPMzQQjOiEz&X-Amz-Signature=3ec906f9d8bfdbe8d42f1b663854636d189aee390f1c57de0cf73e3632f609a5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644KI74VO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T102955Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHBeF74Bu%2FLXrOALBI9oaQkoD2yf%2BaIlHAGpbSJgRPyfAiAB%2BCddDDgNuqZ4mSy0ySNGpEORRFneZx4oUX49Sv2RqiqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMeIr9Mr5WIbtOvyDPKtwDPO7shgMoFWAAbddTp6Y7PyMfWm%2F1rIGkJe6z33ZXmmUsbPssDyiHNUtJ3KEe1e80pB2N2T3PoKxNkTYcYbOMDYyFM%2B8dhnCNeY58piwdgqZD5FhCugtjvZbAqfCUN2v5GaR3O3ieTbiB16W5hzSBMTFTh2nkAVSFnO8f%2FaI9xZ6iFve8bBdquRXGxGCrXHycfFrlbKj7QuK5KBajaxGBSonaaD36rkTVoXfHGgM7jEFyKm3Fh6%2FoEZ9nRcIDMPE4%2FAotJe54UfvszC45QQ6VdllS7QmV23IJ7LQYd5sjliON54FLZAkX4gJyizd8B3TELiuIJf4C153NN9oD7LKsw4dztYWUevMYlZXBNVEWgSjLhHs%2FbCrMtObxqrQ9%2F18pt5S4cBAik%2FdWqdm65%2Fml0c%2Ffsr%2Fsq9vC29w4xkguEi4Wg3CG5k0dyKHu3pCySYSWXEpYxqIbK0twJRjuPG4icqiUBb%2B8R4Jm7yzgIEhuBjFp0qcGE0l9Dp%2BaEqQvm51a3shhCkD9Bsn%2BMBurroJZKO8slbqof2JMQtqbmXEGQU1ybsZTkcZdc%2FFqzLzvbyuHMvWk3nKtjoCiAUCKMPE9X8DpK9%2FJNsOhhoCtJ8IaCSgGB6COoVxVeCSRirwwqO3ZyQY6pgF98pi77lKEVX260A%2BybaX1D9O%2FN0Jt7hiythyJAPTkzOSuX02T2lKYqI28tUN7WkUoOKQHUcneNnrDwBDs3C5gVEe4MVlhnwqMfsCQRKhc8vaM7cNxGKu972ilkNNCDeK53KrRB0EKNffFn5FddRvTP1%2FuFFoZX5%2FUVr%2B65VIy4MVIWKk8Cl6eASPSj34C4Hda7KG0PI8cIBfZ8nJSBuPMzQQjOiEz&X-Amz-Signature=ba461bcb9bb66c2120f215f9735ae711a662d2edee821b462f07e453988366cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
