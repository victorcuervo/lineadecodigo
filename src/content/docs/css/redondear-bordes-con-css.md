---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPWIKTL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIB%2BHEnyi3Y0EIUkQvs2gL924YDacDwJo5ztHdFi8vwVeAiEAqCe4b0fvM77Ojh5GKomBFabMdhodJIMhdaVNpJLSwvMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNPJZVl1OrWpjLhMIircA6M0VhJSu7k9sQ4R7IbGZrpTTvd7OjQCcQ%2BlJyFM2inQoS8HUyYoR9Jzcd6ph7%2FJi1iBLA1lYxItfMb8J%2BmmEbgfOMX8wcjI95k%2FMvC%2FNj9EXrkAdTwN1KpK%2B%2FEu3wp%2B%2BYutn%2Fb6CANtancYFHDeSsBs4jERTyICPv4RHvFCP4QRGp26qcjh0K1lX5PYtlUImxxzMzVFggZ%2BLvjIUVfCNueFUw7hwYRc4nC8qKN4n9%2Fz9QknqNktz%2F1Um99N3%2FQ7IvVbV1dX6nDQkmpjrR1SPogpBmTR5iUnhYa98cVA%2FAg3LB09Ft3NLzSWvD4uw48UgGLAvhHZX1yC8ViY6SGWTHi1WkXcDifcaUPzOAM%2F6094M2pyo7%2FTEt13PdVg6jklHpdPvrd4SN43GKOcVBkrk4l%2FcsComtP8Z%2BpkKBFb95pmPoOt5qvgOf6GdQ7Z1d8sRIl0RJXgAQbW%2FQx%2FEDvrF16y8zpXMDYziOneRho%2BrSwQM%2FP2OiprBqERYt5FnJHIlRH0M3mgcqKDhR86bvLEil%2BJT%2FJ9g5Ux6uyCD9sMPadOCUU0d9quFudWEBnWHXzfNIXF2NGHtnfSRxn9c1Jz7kX5vTSsvruNe0Q2kXEy%2BMUcztmSrKXLmk1VyMYKMNmRwskGOqUBEWNEW%2BSgd8pDl6LXtDv%2FItr1a5ELwCk85OOQ%2FjtDn9AEaq0NewptEeRQUIpSHOqgne3kvkCQiiWXyAF4xMHmCaIjm5EJzg45LzbiRHk9FBjLikomSy6KKH6Q3qxNADGbjDlgqWRSC3GcYUneqTiJL%2BPukUaEV09EjJtphQx%2BaQmrAVUwnPw11Tc1DXYwSMZpEifSXmuAvvmTM%2B3JA02eLui8mprL&X-Amz-Signature=260f04e797d9e470d5884e8038043302d7a21d6b7ef702dd5909a591774ac460&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEPWIKTL%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T203301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJHMEUCIB%2BHEnyi3Y0EIUkQvs2gL924YDacDwJo5ztHdFi8vwVeAiEAqCe4b0fvM77Ojh5GKomBFabMdhodJIMhdaVNpJLSwvMq%2FwMINBAAGgw2Mzc0MjMxODM4MDUiDNPJZVl1OrWpjLhMIircA6M0VhJSu7k9sQ4R7IbGZrpTTvd7OjQCcQ%2BlJyFM2inQoS8HUyYoR9Jzcd6ph7%2FJi1iBLA1lYxItfMb8J%2BmmEbgfOMX8wcjI95k%2FMvC%2FNj9EXrkAdTwN1KpK%2B%2FEu3wp%2B%2BYutn%2Fb6CANtancYFHDeSsBs4jERTyICPv4RHvFCP4QRGp26qcjh0K1lX5PYtlUImxxzMzVFggZ%2BLvjIUVfCNueFUw7hwYRc4nC8qKN4n9%2Fz9QknqNktz%2F1Um99N3%2FQ7IvVbV1dX6nDQkmpjrR1SPogpBmTR5iUnhYa98cVA%2FAg3LB09Ft3NLzSWvD4uw48UgGLAvhHZX1yC8ViY6SGWTHi1WkXcDifcaUPzOAM%2F6094M2pyo7%2FTEt13PdVg6jklHpdPvrd4SN43GKOcVBkrk4l%2FcsComtP8Z%2BpkKBFb95pmPoOt5qvgOf6GdQ7Z1d8sRIl0RJXgAQbW%2FQx%2FEDvrF16y8zpXMDYziOneRho%2BrSwQM%2FP2OiprBqERYt5FnJHIlRH0M3mgcqKDhR86bvLEil%2BJT%2FJ9g5Ux6uyCD9sMPadOCUU0d9quFudWEBnWHXzfNIXF2NGHtnfSRxn9c1Jz7kX5vTSsvruNe0Q2kXEy%2BMUcztmSrKXLmk1VyMYKMNmRwskGOqUBEWNEW%2BSgd8pDl6LXtDv%2FItr1a5ELwCk85OOQ%2FjtDn9AEaq0NewptEeRQUIpSHOqgne3kvkCQiiWXyAF4xMHmCaIjm5EJzg45LzbiRHk9FBjLikomSy6KKH6Q3qxNADGbjDlgqWRSC3GcYUneqTiJL%2BPukUaEV09EjJtphQx%2BaQmrAVUwnPw11Tc1DXYwSMZpEifSXmuAvvmTM%2B3JA02eLui8mprL&X-Amz-Signature=5708c2fe5364a2d222f7cb2d22500d5bf312802620ab82b1807ef7b66e1894d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
