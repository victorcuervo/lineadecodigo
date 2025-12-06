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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGUGWVZK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC6OUCL5O1QrMR9HSjX2icyuV47u%2BWz5YdAZqk2cdCJQIgfQ%2FTeYnE0QmBsP98h5OY4lhTwsCIPn28XH6v6eFaR08q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKZARCyM%2BK50dCkoNSrcA598v0qnBVuvjK69V4p3LRpEvBTmzDBFlPG5qM5kuLH9LsWDyny9xbAnNzFAz6rRfpYrtC%2Bzg5W5rymqi39AUL%2Fq4LY9w1uw8LxQ8LRU0H1pyFMZRZgKihos7hFKn1woJ7Gw83YX6RcdqJ7%2BLTA2%2F6g0EQKedBtLtEO%2BigAkNL0pz2pbMHAbL3KCZauwzzAplHT8fXoIMyIK3P3mWfip5dwDhdMzGpsv0a7v92LklY8YbIzOvT1isIovdscRFVGniJShQKPRBxDnCZQ3%2BMuq4PiAJy45YX%2FXWtiGabVXpLXeUiZhwQtiEbbakhaPXRUgIHT7WYVkaWNBVJLwVCIUgIspDFb0sXNEr1PAX4mFA9bm5Xur3pITsULRPpD1qq%2F5K0AHYON7OvvwVTDtKTk3de872Pk5bifrS32IO1z67Z%2B8E2af1FS6SoaFCiYO5%2B6oUwp5sNlApoO6TTpqQicO448mnb1jB1HxC%2Fd92nxpzheQY18mKnukVH3Lhmvran0lUEIsX9zDuGs2JDx0ojWrfH3cO%2FNdimEwaP5XbWeVC%2FZk%2BdejVJAxmylWjH9na5FaTSrimOTIdTYPE2EnJVtiNVvHokDuWFEs4Vl6rRtFlRCz7HqhSyiCyabARBc%2FMNP8zskGOqUBND7c6QSvdCM%2FVnHcuQKlyeEJuDQln5inJNhYQpJDB7x6ck8a2IYcjYIk5NND9XPCU%2BfkMqTj2X6%2BoszP1eVAgGFWAB0EeIZIaInhV3mDqLTWrAKJ9x6pMvv0rI2DcrWTvOehuhnok5yPklNS8cfC6Nkj47VI15TzcaLqxDkdw3y%2FxQsMjK9AZf%2FtmzbeUFEX6XckogFzwP7yY%2B2uh9VuVLshQwhW&X-Amz-Signature=479582f87c84748dba6df1749916013f67e64afa54e78bea0c24a7aef36e28f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RGUGWVZK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T061534Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCC6OUCL5O1QrMR9HSjX2icyuV47u%2BWz5YdAZqk2cdCJQIgfQ%2FTeYnE0QmBsP98h5OY4lhTwsCIPn28XH6v6eFaR08q%2FwMIbxAAGgw2Mzc0MjMxODM4MDUiDKZARCyM%2BK50dCkoNSrcA598v0qnBVuvjK69V4p3LRpEvBTmzDBFlPG5qM5kuLH9LsWDyny9xbAnNzFAz6rRfpYrtC%2Bzg5W5rymqi39AUL%2Fq4LY9w1uw8LxQ8LRU0H1pyFMZRZgKihos7hFKn1woJ7Gw83YX6RcdqJ7%2BLTA2%2F6g0EQKedBtLtEO%2BigAkNL0pz2pbMHAbL3KCZauwzzAplHT8fXoIMyIK3P3mWfip5dwDhdMzGpsv0a7v92LklY8YbIzOvT1isIovdscRFVGniJShQKPRBxDnCZQ3%2BMuq4PiAJy45YX%2FXWtiGabVXpLXeUiZhwQtiEbbakhaPXRUgIHT7WYVkaWNBVJLwVCIUgIspDFb0sXNEr1PAX4mFA9bm5Xur3pITsULRPpD1qq%2F5K0AHYON7OvvwVTDtKTk3de872Pk5bifrS32IO1z67Z%2B8E2af1FS6SoaFCiYO5%2B6oUwp5sNlApoO6TTpqQicO448mnb1jB1HxC%2Fd92nxpzheQY18mKnukVH3Lhmvran0lUEIsX9zDuGs2JDx0ojWrfH3cO%2FNdimEwaP5XbWeVC%2FZk%2BdejVJAxmylWjH9na5FaTSrimOTIdTYPE2EnJVtiNVvHokDuWFEs4Vl6rRtFlRCz7HqhSyiCyabARBc%2FMNP8zskGOqUBND7c6QSvdCM%2FVnHcuQKlyeEJuDQln5inJNhYQpJDB7x6ck8a2IYcjYIk5NND9XPCU%2BfkMqTj2X6%2BoszP1eVAgGFWAB0EeIZIaInhV3mDqLTWrAKJ9x6pMvv0rI2DcrWTvOehuhnok5yPklNS8cfC6Nkj47VI15TzcaLqxDkdw3y%2FxQsMjK9AZf%2FtmzbeUFEX6XckogFzwP7yY%2B2uh9VuVLshQwhW&X-Amz-Signature=de9eaedf71c4b61d212621633160b21ebbf63800e6ab37c963b268ec1b64df0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
