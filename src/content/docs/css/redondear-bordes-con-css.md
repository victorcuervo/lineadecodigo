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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDDB34VK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwLdUQGDo6E6USjuh3E31twBFbnkOqBPnh38yn0WA28AiEA9RSE9MNg%2FoaQsLpnHM4O0qFJE6rWBo4cBWrOIVYyQkEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAapIhrxqd5zpS1%2F8SrcA0bCyGstYS4glUaUi%2BXWlTZpSyBYe6X%2Bk9s9fdH4x9hwaHe5ezkZkUt2TpnCpFfBtIag0d7HZeyaUzNylDlxBeS8a0uxwoDCc605N850fAE9h6ZPo20LfmvyieTb631VNJ2iCWpdb29KQ%2BNfda%2B80Oq0BSseHYqc1QvnGp4l5PLrprKaZb8S37exPE4eibqSStXk5iUbjv1%2FiyRr7zZfCeoNGxKyDZtUE33YM5FmD9NF%2FRRhSUcoused22Nd8dujlBOgQT5eJ8a1zaR%2B9qyeuWrMONpVkUqpuYnuFA%2Fo3MD%2FHANiQGvW3HuyC0BR2EsVFYH2RYEOf0aIboSu9uqdJ0KGJNmAM0yNPEnXnUctk%2Bzhu0AE2%2FD%2F3Tu%2F13sNifeIgM6izkAyKE1%2BHWsVHHzkBr1ldbvaOfkZ2b%2FN7LgpAljpPnZ68HeDNrIcilnkzVDRRO82J2t2zi25fwDUHyNgSCDE4HpfwjI9adtEHrTNb64tqzqZePtXFZSvPavbshGIdsfo93KCtirCUlwRdLdM8TZfYXGx0e6xUBa4B1nHwO7M5bJigNW%2Bhx5u1il4hhy3kxomHu92CBzuOj0WpZZJJt6jmOD9zxUZJo4rvKgEjDxXS8Z2uTqK5R88f7hJML%2Bez8kGOqUB9x64EDoQ%2FjFF1J7oSV78WgBti3m%2BYkW3LOdTiR9bykY1x7sq5fMG7pvbUZgfMXTE1buS8f30zRtwYzHxcQfFQgcSEOeQldq4QvVrDMT3CuPHXHfvWB%2FK2qD3p%2BvlVkllZAKdnmS3DFTn%2FJ67bWet%2FX1Ken0lmZkCZEnULlj3lIMZWm8hCksHdmbLoNLO9f9e45ZkKsw7S%2F6W6xfMqsKh90mVvmwi&X-Amz-Signature=3b26920890e61b7416feadf4502c8498ac796730718d2f3d3b8c1e1bb3cd7ae9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDDB34VK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T072343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEwLdUQGDo6E6USjuh3E31twBFbnkOqBPnh38yn0WA28AiEA9RSE9MNg%2FoaQsLpnHM4O0qFJE6rWBo4cBWrOIVYyQkEq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDAapIhrxqd5zpS1%2F8SrcA0bCyGstYS4glUaUi%2BXWlTZpSyBYe6X%2Bk9s9fdH4x9hwaHe5ezkZkUt2TpnCpFfBtIag0d7HZeyaUzNylDlxBeS8a0uxwoDCc605N850fAE9h6ZPo20LfmvyieTb631VNJ2iCWpdb29KQ%2BNfda%2B80Oq0BSseHYqc1QvnGp4l5PLrprKaZb8S37exPE4eibqSStXk5iUbjv1%2FiyRr7zZfCeoNGxKyDZtUE33YM5FmD9NF%2FRRhSUcoused22Nd8dujlBOgQT5eJ8a1zaR%2B9qyeuWrMONpVkUqpuYnuFA%2Fo3MD%2FHANiQGvW3HuyC0BR2EsVFYH2RYEOf0aIboSu9uqdJ0KGJNmAM0yNPEnXnUctk%2Bzhu0AE2%2FD%2F3Tu%2F13sNifeIgM6izkAyKE1%2BHWsVHHzkBr1ldbvaOfkZ2b%2FN7LgpAljpPnZ68HeDNrIcilnkzVDRRO82J2t2zi25fwDUHyNgSCDE4HpfwjI9adtEHrTNb64tqzqZePtXFZSvPavbshGIdsfo93KCtirCUlwRdLdM8TZfYXGx0e6xUBa4B1nHwO7M5bJigNW%2Bhx5u1il4hhy3kxomHu92CBzuOj0WpZZJJt6jmOD9zxUZJo4rvKgEjDxXS8Z2uTqK5R88f7hJML%2Bez8kGOqUB9x64EDoQ%2FjFF1J7oSV78WgBti3m%2BYkW3LOdTiR9bykY1x7sq5fMG7pvbUZgfMXTE1buS8f30zRtwYzHxcQfFQgcSEOeQldq4QvVrDMT3CuPHXHfvWB%2FK2qD3p%2BvlVkllZAKdnmS3DFTn%2FJ67bWet%2FX1Ken0lmZkCZEnULlj3lIMZWm8hCksHdmbLoNLO9f9e45ZkKsw7S%2F6W6xfMqsKh90mVvmwi&X-Amz-Signature=50a888cd4450fa280abcf09a464f262844688937d77a47ddf4e8202ce28d4286&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
