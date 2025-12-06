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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV7XFG2O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqnDQiHju8kLIIzcgvM2wgI9s%2F1XuYK6E90qrXrt6yugIgIhBzpCIauKzui%2BVKSLR5%2FqpI1Mi7e57qee2yEBEWmKoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHpbAVZ4uknbqWMlQCrcA8fGIjHjTwjcciXvk436SvH9NngZkPAUgtQ3V5BV7WmHF0pAwkCfN5QZjjk6gZGLgxP2kOfotzwTdEcp9Puani01kBE8oNrWfs07%2BdtC1nOOEDS3u4bdQcad7akGGdrRNPsUR%2F2kY0mLB7a3oJeJC6ihDvKMm%2Bpz9gYMHUtROTU4lcO4aJGUFvDr5DHKbZrnde%2BtKR%2FLX9zoQQb5853IdyQHcWlvbi3ykbkmhXsQF2IO%2B3V63YvUoP6%2B43C1hMoVMPClt9mNZLMOFgMLD%2B4iEhABm6SIvZyn7F69u%2FOC247XmpDJXjSPXwI7Tup96VVOiBBsLCuPdBcAb9I9yp0U3nMg3cQegXNnRRd219z51F8qgVXaM%2Fqn52NHsywLWLIzW%2BJDC2hZ0krjnkbeZiO8K%2FxYs5dQpS2gUpfLseh47hvnpAz3e8CNHOuh2m6whhAOMlQQOKwodgv9TowpqKG4HxwO8jKZXOAk%2FOCTcpSp7laIV9u2m0yd4W8KSXKOh94p%2BkYVCz2jFWLPZSSFnlXanooIAlRwuescoZ6wV3QwgZ3sl01%2B8Kg%2BraEUK07h0Byd3%2Fn%2BtsjaFJmUbGpNHVk%2FnPV2lk2HWPk%2FwCoatGnSLwA5fReKlLIRodlFWy3fMPmez8kGOqUBwgvCJhxuzp2EjAsfTU%2BXgVFT%2FUVH%2Bbd6gnzwKlXd4D0OpPw%2FqoB0obcSXF4PwKlXwFFywzKTj%2BxTp1KiVRSCZKE4hGem1B6N6PjDcAaEojbGT3n1bO6OJpzMxvi4xz9E13C3%2BYsINrGbEIlbAM6By%2FlWQuDtwLcdtBKLawmbdt6IQXgtK8tuL8L3CF%2FijBd5%2F8nnSC%2Brjzbcy4k2HskSgLFyeb%2Fy&X-Amz-Signature=d9268f1b43ad14fd48ae5405085a92d421eabdd599304ac213781eb432475ffe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SV7XFG2O%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDqnDQiHju8kLIIzcgvM2wgI9s%2F1XuYK6E90qrXrt6yugIgIhBzpCIauKzui%2BVKSLR5%2FqpI1Mi7e57qee2yEBEWmKoq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDHpbAVZ4uknbqWMlQCrcA8fGIjHjTwjcciXvk436SvH9NngZkPAUgtQ3V5BV7WmHF0pAwkCfN5QZjjk6gZGLgxP2kOfotzwTdEcp9Puani01kBE8oNrWfs07%2BdtC1nOOEDS3u4bdQcad7akGGdrRNPsUR%2F2kY0mLB7a3oJeJC6ihDvKMm%2Bpz9gYMHUtROTU4lcO4aJGUFvDr5DHKbZrnde%2BtKR%2FLX9zoQQb5853IdyQHcWlvbi3ykbkmhXsQF2IO%2B3V63YvUoP6%2B43C1hMoVMPClt9mNZLMOFgMLD%2B4iEhABm6SIvZyn7F69u%2FOC247XmpDJXjSPXwI7Tup96VVOiBBsLCuPdBcAb9I9yp0U3nMg3cQegXNnRRd219z51F8qgVXaM%2Fqn52NHsywLWLIzW%2BJDC2hZ0krjnkbeZiO8K%2FxYs5dQpS2gUpfLseh47hvnpAz3e8CNHOuh2m6whhAOMlQQOKwodgv9TowpqKG4HxwO8jKZXOAk%2FOCTcpSp7laIV9u2m0yd4W8KSXKOh94p%2BkYVCz2jFWLPZSSFnlXanooIAlRwuescoZ6wV3QwgZ3sl01%2B8Kg%2BraEUK07h0Byd3%2Fn%2BtsjaFJmUbGpNHVk%2FnPV2lk2HWPk%2FwCoatGnSLwA5fReKlLIRodlFWy3fMPmez8kGOqUBwgvCJhxuzp2EjAsfTU%2BXgVFT%2FUVH%2Bbd6gnzwKlXd4D0OpPw%2FqoB0obcSXF4PwKlXwFFywzKTj%2BxTp1KiVRSCZKE4hGem1B6N6PjDcAaEojbGT3n1bO6OJpzMxvi4xz9E13C3%2BYsINrGbEIlbAM6By%2FlWQuDtwLcdtBKLawmbdt6IQXgtK8tuL8L3CF%2FijBd5%2F8nnSC%2Brjzbcy4k2HskSgLFyeb%2Fy&X-Amz-Signature=c60ddd8b484bd471f5d63cd81e84784432e0565564db232ee363cd9195affe7b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
