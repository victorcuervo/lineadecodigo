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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUN7PJRK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF7NmjFd7TdFS8scw1mCr7YfwE9q4CnzSPvMfw4Rb2EgIgWy%2BCLFXP9sRGMXaIGx12r5g7hKM6BbSmDb%2BH0tSi5YUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDA4rd6ulGtAu37A57CrcA1H2ck65utBmMICCNgbLmVH5RcsQSF1%2FKFXo2WadUl4K09RNaSptC%2FlDB%2B3QcI0v5nrhc5Qh%2FWphQqamu4Z6gFSanyPZUA%2FpALSrOb6PFN4DAIU3roWRHDErTUjK0gHBqqe02WRwiXRtukIvRoejLc%2F6kzwilOlbFnOmIevxN%2BdKR8fHBDjQDkcADB6H2J5A9OqajuFj3rVonk%2FCQBj73uIVLxSpI%2FArXTevR%2BzCwRjQgOa7Hj4WENxuoYF4N5UNaWIoDNppEiAV%2BVj%2Fehew7GwGCmUMpvTA2ozR%2BJNywu81X%2BUujK%2BLXHwe1w5geGCeyPwEWw5IWMXs2hQoRc9I5E15dSC%2FXQivM7pk4TU5jnmAH0rLbyHLLtf8QYpLGmmY8tdI%2Bn1jf1Pyu%2FMuMaNPKOO2F518c7Iff3KpzQCSL2sfvVike%2Bl8YWLPpxRIdjmLZJ0PLEYgLJbZqmgNJuCk69SdC2MefBRG7o805sBAVM7MLVOYH6VLsnKcg5TQqyzBCa7tde3%2BG%2FJa3hMEvGZ0BFb36oEj8Z2%2F%2BmGUX%2Fsb9S%2FbGZc%2Boit4wtCFb%2FePPO6iQ%2FPG%2FHPOrD%2FM%2FkxesCARo%2B3HQHlqqrD5TDAWy%2FNqdpicmUi5Fo%2FW6mrWAT4oMPbqz8kGOqUBlFFjzThFG%2F350q25hmnzsELAFsccGIRyILTi8vfrR7eOC%2B5Zwx%2FLdWukiT2pEUwe4Rzc3OSr5bbByc8uZrF3g%2FISJIhLHcRja9zv5DLo%2BY3SUG3TDMeXBHkGx3kaCTucx2u%2FafWILzTp4lP5%2Ba8i0%2FghP7sNnSfdzJraYesX3MbtpUN7GOxTey%2BNN3Lf%2FKA2qbSWdt8u8rmFsy914rYivqe9zXCw&X-Amz-Signature=de7ac41852da3d55e80acca6a3fc136c4754bbb4a8614ab41deb9a019ccccfef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QUN7PJRK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T093620Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDF7NmjFd7TdFS8scw1mCr7YfwE9q4CnzSPvMfw4Rb2EgIgWy%2BCLFXP9sRGMXaIGx12r5g7hKM6BbSmDb%2BH0tSi5YUq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDA4rd6ulGtAu37A57CrcA1H2ck65utBmMICCNgbLmVH5RcsQSF1%2FKFXo2WadUl4K09RNaSptC%2FlDB%2B3QcI0v5nrhc5Qh%2FWphQqamu4Z6gFSanyPZUA%2FpALSrOb6PFN4DAIU3roWRHDErTUjK0gHBqqe02WRwiXRtukIvRoejLc%2F6kzwilOlbFnOmIevxN%2BdKR8fHBDjQDkcADB6H2J5A9OqajuFj3rVonk%2FCQBj73uIVLxSpI%2FArXTevR%2BzCwRjQgOa7Hj4WENxuoYF4N5UNaWIoDNppEiAV%2BVj%2Fehew7GwGCmUMpvTA2ozR%2BJNywu81X%2BUujK%2BLXHwe1w5geGCeyPwEWw5IWMXs2hQoRc9I5E15dSC%2FXQivM7pk4TU5jnmAH0rLbyHLLtf8QYpLGmmY8tdI%2Bn1jf1Pyu%2FMuMaNPKOO2F518c7Iff3KpzQCSL2sfvVike%2Bl8YWLPpxRIdjmLZJ0PLEYgLJbZqmgNJuCk69SdC2MefBRG7o805sBAVM7MLVOYH6VLsnKcg5TQqyzBCa7tde3%2BG%2FJa3hMEvGZ0BFb36oEj8Z2%2F%2BmGUX%2Fsb9S%2FbGZc%2Boit4wtCFb%2FePPO6iQ%2FPG%2FHPOrD%2FM%2FkxesCARo%2B3HQHlqqrD5TDAWy%2FNqdpicmUi5Fo%2FW6mrWAT4oMPbqz8kGOqUBlFFjzThFG%2F350q25hmnzsELAFsccGIRyILTi8vfrR7eOC%2B5Zwx%2FLdWukiT2pEUwe4Rzc3OSr5bbByc8uZrF3g%2FISJIhLHcRja9zv5DLo%2BY3SUG3TDMeXBHkGx3kaCTucx2u%2FafWILzTp4lP5%2Ba8i0%2FghP7sNnSfdzJraYesX3MbtpUN7GOxTey%2BNN3Lf%2FKA2qbSWdt8u8rmFsy914rYivqe9zXCw&X-Amz-Signature=b57955cdbd337481c1621ba90bca00b116c6424b4d14d96c048d97cc6f7d34ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
