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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOVZB2RP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX37fYlOBSg34G3KSGoaw49AU7%2FeiWVB%2FDcsK6WF0K%2BAIhAO66ybSIcAwfIRhZMpkXGkD%2Ftp%2F0MEvsrLzE9cJTWapnKv8DCHcQABoMNjM3NDIzMTgzODA1IgyFlpZLBkTm61qbsGQq3APB%2FFYlvLCMHnPI7AARsRsdMJOvxqvEeD1f1dULfnqfhEd4hZ17e6nxkixviOE6r0UAU3V%2FM8liPvVKpIwi%2BcJbBQeaus5CfOGAgTp7eJ191aLU%2FF%2BBhDEf4iB%2BghJGmopdVAXTigc5NkmkFx6%2FHnj%2BwE1%2BEnBksTLHyzzf8u8cMBNcTrT%2BgI2y7lraNl8NP%2Bba%2BP26SnCndRc1pQhxTl0ZqBbsuq7A9zIJkk5sC8U%2BuTW%2FvwitKLD383jD1opEFWkOIV9SAa3CcqXyEnEFuuUQAb4RGO5IMeQluGtWts%2F3x7LF2AaxUoVKUlwuluj9hDV%2BQFGRBleebVT7Eos2N6256BIsftc2uADorDXMZlDy3p7kNrYCuKlWYaHXlvM7oZTKaGP0mwVdTrS%2BbnscWPeuikztgqTJkapzobYcscLyh0vG58MCCnhqvWrFOYbe4ExBgX1GHRzsY6pfaPjVmWayq8MfaKmxg4pbmasaxGyfDNtmQgD1WYgbk1e%2B4hnaBty5MwlPYYYak2gkQJu%2BX6q2L0KpnhHT8PzY4fpvyOMCymE1QVhW%2FWcueWlf5mDc14ydNVv8Vjn2TxUodPwWIO%2BzkJV6NUvu4yYsHzP08OIIRjFETTwkeLJ5uie1MjDggonKBjqkARKY2AHXRlxzHKxFIN0fe6PiJ8nXs%2FumIYFQA6e0Sei%2Bryhkhcg9oo9DyZsnDOPiYfWi0KxStEZdId82QFDlYU2ZI3qoLDRqwbYJi8xJ1LMN8QqzdSNkHkA4gGPkatxxbnDGsZL2P7qYBOCNuhjSWVpGikC7iINxZz%2BCgw24l5iekbn76y7Lmz0SsTzVWx8cgnQJVC3kIjl5fQw3BXyLYZyvhIy1&X-Amz-Signature=03e08af9ec9fdf1e99983b4457e370502911ec139dc987606b34738aef49a7ff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WOVZB2RP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T060456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCX37fYlOBSg34G3KSGoaw49AU7%2FeiWVB%2FDcsK6WF0K%2BAIhAO66ybSIcAwfIRhZMpkXGkD%2Ftp%2F0MEvsrLzE9cJTWapnKv8DCHcQABoMNjM3NDIzMTgzODA1IgyFlpZLBkTm61qbsGQq3APB%2FFYlvLCMHnPI7AARsRsdMJOvxqvEeD1f1dULfnqfhEd4hZ17e6nxkixviOE6r0UAU3V%2FM8liPvVKpIwi%2BcJbBQeaus5CfOGAgTp7eJ191aLU%2FF%2BBhDEf4iB%2BghJGmopdVAXTigc5NkmkFx6%2FHnj%2BwE1%2BEnBksTLHyzzf8u8cMBNcTrT%2BgI2y7lraNl8NP%2Bba%2BP26SnCndRc1pQhxTl0ZqBbsuq7A9zIJkk5sC8U%2BuTW%2FvwitKLD383jD1opEFWkOIV9SAa3CcqXyEnEFuuUQAb4RGO5IMeQluGtWts%2F3x7LF2AaxUoVKUlwuluj9hDV%2BQFGRBleebVT7Eos2N6256BIsftc2uADorDXMZlDy3p7kNrYCuKlWYaHXlvM7oZTKaGP0mwVdTrS%2BbnscWPeuikztgqTJkapzobYcscLyh0vG58MCCnhqvWrFOYbe4ExBgX1GHRzsY6pfaPjVmWayq8MfaKmxg4pbmasaxGyfDNtmQgD1WYgbk1e%2B4hnaBty5MwlPYYYak2gkQJu%2BX6q2L0KpnhHT8PzY4fpvyOMCymE1QVhW%2FWcueWlf5mDc14ydNVv8Vjn2TxUodPwWIO%2BzkJV6NUvu4yYsHzP08OIIRjFETTwkeLJ5uie1MjDggonKBjqkARKY2AHXRlxzHKxFIN0fe6PiJ8nXs%2FumIYFQA6e0Sei%2Bryhkhcg9oo9DyZsnDOPiYfWi0KxStEZdId82QFDlYU2ZI3qoLDRqwbYJi8xJ1LMN8QqzdSNkHkA4gGPkatxxbnDGsZL2P7qYBOCNuhjSWVpGikC7iINxZz%2BCgw24l5iekbn76y7Lmz0SsTzVWx8cgnQJVC3kIjl5fQw3BXyLYZyvhIy1&X-Amz-Signature=ac25591b52aaea6d34788a4dad7b229310ddcb2eeb608cba3e7ee4a70d0497ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
