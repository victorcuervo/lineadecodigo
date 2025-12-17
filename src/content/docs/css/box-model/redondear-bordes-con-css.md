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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NEPORCY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMx4IoLCX1lZ1WYBfkLCQ1zGMqfVXSO2n5lOb15%2BVNHAiEA5DZdgXrTFXzyv%2BT6tZL5gorAcIiLv9chyWy6Ab9aaIAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5cho%2BlyGKTkPsILircA5rIyBT2sZRIb1QkCrVepLVWR%2BRC8OJKjvxlRP8r8WpfeP5%2B2q3Wh%2B0SZDhOF%2BAYhEub%2BDNvAyY4gnzq8fqiQD5PWy3CcxLU6%2BiZf6QdyyAGAh0YvP17FwLp8XdSjdpZNWxxnvXZXYW5%2BhmNi%2BvfyADPbaIx6QA7C4yQeV6mrJGJYCSy%2BTg0OSVZB%2F03Jscn8SxUDmPrqIyR43FeASiCKXfIyYW6YMUIEWat6qhDqfKR5rE1jEa9g8lCyvE1BGX0yuxLh6upY4sYjUK4fmmsGeeI7QqcLAIq3pxWQ1bcg2xa30h4ZeEbw9YeAKf0l9v4BBGjxKx0eqXjj20%2Fj2k3d9qba6HUG1uSnyezh7MyKckQ4ijOIHBJH8gEwZoj02miQaBuEP7oAtrMNLKEjkb0K%2Bws79YLEdsZtlHMYz0M5FyyyV6RdZNWq%2F4L4Flq2OBvynkbusBEIn0RmBHp4l%2FMdj3VfKfwZtlOBxSgjHezfmh%2Fp%2FEZn0chlqN%2BdI7AIh925I2tnxhRFcpQLFD6XXjDcgf54syCzXfFdJnSogKd4pOFcOQr%2BECAMzgwNuQuqzPzHt3IW%2FPgrUZ8U2CHk2l3QOKtlZ1MPTUO6%2FtYL%2FEdkGA9xFSRbiXLWgp3JrrjMPGei8oGOqUBxFExD3NthAFfmxOzb%2FJZJIoYlO5CTATEnxVIXqLxQdkSxWE98tyO7eka99SGlXVBfagF3CxBvi626KhUCuJI7HgGFN%2F1tD5FZ7rm1Ri%2BrpASa5eYF0Pkv7EEDdWnRO2H15w9dvFNCz8UIZICVK0ua5mEZh27bw3JXDVyzvGB5YNa%2BBEykOk%2BcGETo8yqLGiS78PxSIE%2FxzTTNwZKevXFm8cCAmUy&X-Amz-Signature=7e8d12298f8603aad976c826b6335d8bbff72964d2a9ed33acc99e1d069cae10&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665NEPORCY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T180817Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDMx4IoLCX1lZ1WYBfkLCQ1zGMqfVXSO2n5lOb15%2BVNHAiEA5DZdgXrTFXzyv%2BT6tZL5gorAcIiLv9chyWy6Ab9aaIAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE5cho%2BlyGKTkPsILircA5rIyBT2sZRIb1QkCrVepLVWR%2BRC8OJKjvxlRP8r8WpfeP5%2B2q3Wh%2B0SZDhOF%2BAYhEub%2BDNvAyY4gnzq8fqiQD5PWy3CcxLU6%2BiZf6QdyyAGAh0YvP17FwLp8XdSjdpZNWxxnvXZXYW5%2BhmNi%2BvfyADPbaIx6QA7C4yQeV6mrJGJYCSy%2BTg0OSVZB%2F03Jscn8SxUDmPrqIyR43FeASiCKXfIyYW6YMUIEWat6qhDqfKR5rE1jEa9g8lCyvE1BGX0yuxLh6upY4sYjUK4fmmsGeeI7QqcLAIq3pxWQ1bcg2xa30h4ZeEbw9YeAKf0l9v4BBGjxKx0eqXjj20%2Fj2k3d9qba6HUG1uSnyezh7MyKckQ4ijOIHBJH8gEwZoj02miQaBuEP7oAtrMNLKEjkb0K%2Bws79YLEdsZtlHMYz0M5FyyyV6RdZNWq%2F4L4Flq2OBvynkbusBEIn0RmBHp4l%2FMdj3VfKfwZtlOBxSgjHezfmh%2Fp%2FEZn0chlqN%2BdI7AIh925I2tnxhRFcpQLFD6XXjDcgf54syCzXfFdJnSogKd4pOFcOQr%2BECAMzgwNuQuqzPzHt3IW%2FPgrUZ8U2CHk2l3QOKtlZ1MPTUO6%2FtYL%2FEdkGA9xFSRbiXLWgp3JrrjMPGei8oGOqUBxFExD3NthAFfmxOzb%2FJZJIoYlO5CTATEnxVIXqLxQdkSxWE98tyO7eka99SGlXVBfagF3CxBvi626KhUCuJI7HgGFN%2F1tD5FZ7rm1Ri%2BrpASa5eYF0Pkv7EEDdWnRO2H15w9dvFNCz8UIZICVK0ua5mEZh27bw3JXDVyzvGB5YNa%2BBEykOk%2BcGETo8yqLGiS78PxSIE%2FxzTTNwZKevXFm8cCAmUy&X-Amz-Signature=52f6be9f95fb3e10aa38ab59259df9298b311d95ab3c682135e68b2ca57c941a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
