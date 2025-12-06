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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJY7GKZU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGPWh%2BaqvWVKkBkHpCGwpihn9PrWoCsk4%2BJ1gWQNBRBAiB1R1eKIHoj7H0xX7w9xFu5Nk4Nl0yg0pKP5pwOAau2pyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMi4PyECGvrpXCDzCAKtwD8Y2vaZjeaAAaW8IOviNtydFCxT35NqA4xsKVak1PMFva8AdD5disbsYTCjja6K25m%2Boo8FceY5%2Bj6mzmJwf2JLUNtESSH2NiZYLfKtrMegxzTREsJYVW1TkIeHw3A9C95VU93RmSTJFCsgcD9fGXLYPc1z1Wf0sm%2BbadSbYUWd6gWuALBoEZwdqoVZRsC8cqOa6QgqZ3EA5tfA7yo%2FiggiyUdqrTmL0FYGAxMRM04l4BSVpr0cKz9VuKegFaCCPeELoXbWkHuaIk29O9WWaQyDP69j1YPhvcV3n6UGug75AmUf%2FfX%2BnoBjvo86RvW8WoQhu7R5gmzmdZxd4OM1GV4ulNkgYhROzHeq7kT6qrfG8xRB3IOKYffVJ2eINZsYv9xiqR5pmf%2Bx073cNG0iQk%2FcjQjfqTd%2BYYsUsSDXdUMitexRgFEIgSU4c9K%2FVc4FxNh0M3fQPdgHJWp0eUSjmu%2BBArUStTAIcD8hEa%2BiRIMphoZO%2BLEYTcTGhM4IWwvG17DWjL2JKaxss8ryw6kwJztaDowSOBqi3%2BvnaccKCU8OVaOU%2BWqjaqz5VmCG5g%2BMfNNn%2B4lVkc6wF8xj49P3xfNHnUTKoIyxtFFW66Fcbp8x2vJ1RKVA1smmMdWtwwo8XRyQY6pgESVFTKJKE6IW%2FQrE1fB%2BsEwwjPpWP9ZBnxnEvSHuTvt274%2FUiwJ4V%2Foa06%2B%2BCemSL8RsbKl%2B0RTVehxG1VHoUy4ZfVw390wtE5Ga54HJ6GxGB59MQU8ictprC%2B58nMKE5mJ62QXB2SFPZIz7aR76sZ1wfjkchpOuFBi1vo7%2BVQZzsyWnLloaVtVogFx1rOsfFXE0NnQyqNT19fbGy95AJWtWDKU3js&X-Amz-Signature=7497ba3422ca7db5af0b0abc21b6756653742ecc0b2d7aec59dc656a86680fc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJY7GKZU%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T180109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICGPWh%2BaqvWVKkBkHpCGwpihn9PrWoCsk4%2BJ1gWQNBRBAiB1R1eKIHoj7H0xX7w9xFu5Nk4Nl0yg0pKP5pwOAau2pyr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMi4PyECGvrpXCDzCAKtwD8Y2vaZjeaAAaW8IOviNtydFCxT35NqA4xsKVak1PMFva8AdD5disbsYTCjja6K25m%2Boo8FceY5%2Bj6mzmJwf2JLUNtESSH2NiZYLfKtrMegxzTREsJYVW1TkIeHw3A9C95VU93RmSTJFCsgcD9fGXLYPc1z1Wf0sm%2BbadSbYUWd6gWuALBoEZwdqoVZRsC8cqOa6QgqZ3EA5tfA7yo%2FiggiyUdqrTmL0FYGAxMRM04l4BSVpr0cKz9VuKegFaCCPeELoXbWkHuaIk29O9WWaQyDP69j1YPhvcV3n6UGug75AmUf%2FfX%2BnoBjvo86RvW8WoQhu7R5gmzmdZxd4OM1GV4ulNkgYhROzHeq7kT6qrfG8xRB3IOKYffVJ2eINZsYv9xiqR5pmf%2Bx073cNG0iQk%2FcjQjfqTd%2BYYsUsSDXdUMitexRgFEIgSU4c9K%2FVc4FxNh0M3fQPdgHJWp0eUSjmu%2BBArUStTAIcD8hEa%2BiRIMphoZO%2BLEYTcTGhM4IWwvG17DWjL2JKaxss8ryw6kwJztaDowSOBqi3%2BvnaccKCU8OVaOU%2BWqjaqz5VmCG5g%2BMfNNn%2B4lVkc6wF8xj49P3xfNHnUTKoIyxtFFW66Fcbp8x2vJ1RKVA1smmMdWtwwo8XRyQY6pgESVFTKJKE6IW%2FQrE1fB%2BsEwwjPpWP9ZBnxnEvSHuTvt274%2FUiwJ4V%2Foa06%2B%2BCemSL8RsbKl%2B0RTVehxG1VHoUy4ZfVw390wtE5Ga54HJ6GxGB59MQU8ictprC%2B58nMKE5mJ62QXB2SFPZIz7aR76sZ1wfjkchpOuFBi1vo7%2BVQZzsyWnLloaVtVogFx1rOsfFXE0NnQyqNT19fbGy95AJWtWDKU3js&X-Amz-Signature=77c1875ea6f4921d465c2c6e0e9399102c9a8cb66209309591fb7a0b168b83e9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
