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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V7X5J5R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RIs44iQ0ANj%2FFlWEZ5VB559rXnqxijomo8z3wY0cVgIgH%2F1Z164Avkijj7BsxTjer%2Fi2oGlB1LDKCYqIUWqfh68qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbu2B6qqmWgVLgRASrcA0LYGHskrsJAd0kQ4I4syVVVhxZnfby9fU6NJ02FCZ6na%2B1k2SdPjhc3UBTZtAOq%2BCBB7Ft%2FiL29V0KXQ1M8pcppXWEWmTPmKd7QU7s%2BlY5Cf5sjtnzm5hNdlENdy0ol1vWGC6PizB%2Bc9A7TC0DxwIrKFCVGS18L4XuqSvFUmSbVpZ7SP6vEmUx1OVjjWV%2FS7pLWUFO2MCLcobT5GWhznZK3ifmz7TOg6wLRyw3Z%2FG45CcdYa44xjgeelLGTQbhnijtBLSGWr1zHoAjhxV0Sgp6%2Bp4aqX%2BVag3JsIy8C8jwVZjshRYSNF7vl0XnIadZUR1DoIT90iMo3%2B%2FgkFu4BvE7GCvRifO7TrPOyekkHobg9%2F4%2F5Sg1OkWr87ekkC7SNqDKuWhXiIbTspzjqdru1vurslu9Q2LQuWtIjPcKrAZpPYKPZlrrThoE%2BJCeK5xETD%2FRwk3KOIWoqRIpebdEF0DW8%2BoZXV93NmP81tHKCyB2S9vTd60FSvyWJ2jJZ%2F5D6j%2F1gaXjTp2EYqhZ%2FwreCa93de60%2Bpo4NBz6sJgIPop1toc4dO5uRJHOT3YjpZLqFDgr8tK1KUlCIYMoyByI%2BqMPESLLZsFA%2FNjeo2adM03RCWrMKlqqgj4Dj0Mz5MLKMjMoGOqUBuWRnbxAmn%2BgmNCt8bQsksCOnz%2FAF2HmqM%2BbNRyDkxGuOSffiXbIF9tDtyLreEghSsTkx8SVm0%2FH86OT8AzYFH6Wm%2FNJgQJe1%2FnbpQbDeeHEu3Zr8Ic39zx4yOQ9kkBeCHuKNU0vgq7Ts2F3UEw0uHgIGJnasjqkdPi2I8Oa2KbyYXlsL3bvjxAa3aAbc7%2FRLIkdwkO%2BK%2FwCD8E6Dh8M%2FaJ2KGbFp&X-Amz-Signature=6ceecd384f2b7b1582538e4b9b4b7df57009a63b662c0ac7ceef6c127b0627dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663V7X5J5R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195418Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD4RIs44iQ0ANj%2FFlWEZ5VB559rXnqxijomo8z3wY0cVgIgH%2F1Z164Avkijj7BsxTjer%2Fi2oGlB1LDKCYqIUWqfh68qiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHbu2B6qqmWgVLgRASrcA0LYGHskrsJAd0kQ4I4syVVVhxZnfby9fU6NJ02FCZ6na%2B1k2SdPjhc3UBTZtAOq%2BCBB7Ft%2FiL29V0KXQ1M8pcppXWEWmTPmKd7QU7s%2BlY5Cf5sjtnzm5hNdlENdy0ol1vWGC6PizB%2Bc9A7TC0DxwIrKFCVGS18L4XuqSvFUmSbVpZ7SP6vEmUx1OVjjWV%2FS7pLWUFO2MCLcobT5GWhznZK3ifmz7TOg6wLRyw3Z%2FG45CcdYa44xjgeelLGTQbhnijtBLSGWr1zHoAjhxV0Sgp6%2Bp4aqX%2BVag3JsIy8C8jwVZjshRYSNF7vl0XnIadZUR1DoIT90iMo3%2B%2FgkFu4BvE7GCvRifO7TrPOyekkHobg9%2F4%2F5Sg1OkWr87ekkC7SNqDKuWhXiIbTspzjqdru1vurslu9Q2LQuWtIjPcKrAZpPYKPZlrrThoE%2BJCeK5xETD%2FRwk3KOIWoqRIpebdEF0DW8%2BoZXV93NmP81tHKCyB2S9vTd60FSvyWJ2jJZ%2F5D6j%2F1gaXjTp2EYqhZ%2FwreCa93de60%2Bpo4NBz6sJgIPop1toc4dO5uRJHOT3YjpZLqFDgr8tK1KUlCIYMoyByI%2BqMPESLLZsFA%2FNjeo2adM03RCWrMKlqqgj4Dj0Mz5MLKMjMoGOqUBuWRnbxAmn%2BgmNCt8bQsksCOnz%2FAF2HmqM%2BbNRyDkxGuOSffiXbIF9tDtyLreEghSsTkx8SVm0%2FH86OT8AzYFH6Wm%2FNJgQJe1%2FnbpQbDeeHEu3Zr8Ic39zx4yOQ9kkBeCHuKNU0vgq7Ts2F3UEw0uHgIGJnasjqkdPi2I8Oa2KbyYXlsL3bvjxAa3aAbc7%2FRLIkdwkO%2BK%2FwCD8E6Dh8M%2FaJ2KGbFp&X-Amz-Signature=a0a7d64d3e8048c9edeb729713b3f1b19c8d60388d5be68596f380aa9268322c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
