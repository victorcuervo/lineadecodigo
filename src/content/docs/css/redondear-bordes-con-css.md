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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBGLQVE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2%2BG%2FDzQY76uGgbYpXw0YrdXmfiYenvpK9IGF%2FtAbRTgIgB8uc%2FFjXVF2%2BMkhD3jJJJ%2BCLJDXAR9qoaOoS25MwVgYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNo4x3ZUKJr2LU%2Fk5SrcA2SizPOtSl0STp6RPoa1I4a%2BkzrkrxXwxPD3fc0R0FQhOK8JyeJZJHVJ7sVwTr2lxeEb5Jmq9XxcIdaq5MGXJ%2BcfDSfUv1D3W9k0SNWYacivPjZlWYluDcYAhNic6fWU6M0LbsibSNODgwo6It3%2Faka1KOpLHIu6j9L%2FWt%2BpFcupC6mRoZxJwEs4NEc6M2b5ZOP%2BdPNIYkkIPOmgAn%2F%2B7ROyw3HR7VVAgzVcNmIuQvY27DPf2KEe8z1HEdhtlHW7ahTjLzaL%2F6KhXgaqK54u1CzZE4cUEBAjSt2xuXs%2FV6t%2F75kgCxEqXxKKQpkpfRBJqhGjWCKs88NN0WC01AAFrpMcqOyt0Om%2FyVX1y2a24XJ3UbKBYV2vYsCrtpOfyYOE3okWlT6j2HOfM8u9r8kmb%2FBCPPh7DWcEw5UhLbGuSWppGSNz2Q4l1BTQPB2rgIETT0I6N9L8s41mEy4AWL5nSQbyh%2Bl7HjUm9Z5fTggP%2BsNHq0JpmOYgLwNHwRQ8cVNM5NFVycQmx%2FEkEPod7ZzlMmHA88g6jaW4Y7XZhKndL81F56wR7uL9GWR8K9ZUZaP4YE0yOPi2%2BD6LKTUDLiC7BmGDOxs3Ap2yeT1AlTHqJ%2F1SQGnZ0i7HILr4mai8MKK11skGOqUBOjyQzgom6T4PmmcCSGvQnIFHYIYpSHxuAV3zLIF284tIQDSmGwPHw5ED0dtetlCkmGI1fCtTWutDsvb70E800wknuK5jyiqLrxAY0RIAQRRAPmpnmImE%2FjgsCXTpBES4kCOnmLLEw5%2BDPRT%2FslRILrA38HKvfmqHPjT6MKiEgAEz5%2FlNnLIsGljR38VelDH2gPnDB0Yau%2FNe4zz70CSYcWIP8gWr&X-Amz-Signature=57eea4a30402ae6c8a22c6bf8bae49c1f0d267e83a2c700bdbcdcbb7161636ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRBGLQVE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T160216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2%2BG%2FDzQY76uGgbYpXw0YrdXmfiYenvpK9IGF%2FtAbRTgIgB8uc%2FFjXVF2%2BMkhD3jJJJ%2BCLJDXAR9qoaOoS25MwVgYqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNo4x3ZUKJr2LU%2Fk5SrcA2SizPOtSl0STp6RPoa1I4a%2BkzrkrxXwxPD3fc0R0FQhOK8JyeJZJHVJ7sVwTr2lxeEb5Jmq9XxcIdaq5MGXJ%2BcfDSfUv1D3W9k0SNWYacivPjZlWYluDcYAhNic6fWU6M0LbsibSNODgwo6It3%2Faka1KOpLHIu6j9L%2FWt%2BpFcupC6mRoZxJwEs4NEc6M2b5ZOP%2BdPNIYkkIPOmgAn%2F%2B7ROyw3HR7VVAgzVcNmIuQvY27DPf2KEe8z1HEdhtlHW7ahTjLzaL%2F6KhXgaqK54u1CzZE4cUEBAjSt2xuXs%2FV6t%2F75kgCxEqXxKKQpkpfRBJqhGjWCKs88NN0WC01AAFrpMcqOyt0Om%2FyVX1y2a24XJ3UbKBYV2vYsCrtpOfyYOE3okWlT6j2HOfM8u9r8kmb%2FBCPPh7DWcEw5UhLbGuSWppGSNz2Q4l1BTQPB2rgIETT0I6N9L8s41mEy4AWL5nSQbyh%2Bl7HjUm9Z5fTggP%2BsNHq0JpmOYgLwNHwRQ8cVNM5NFVycQmx%2FEkEPod7ZzlMmHA88g6jaW4Y7XZhKndL81F56wR7uL9GWR8K9ZUZaP4YE0yOPi2%2BD6LKTUDLiC7BmGDOxs3Ap2yeT1AlTHqJ%2F1SQGnZ0i7HILr4mai8MKK11skGOqUBOjyQzgom6T4PmmcCSGvQnIFHYIYpSHxuAV3zLIF284tIQDSmGwPHw5ED0dtetlCkmGI1fCtTWutDsvb70E800wknuK5jyiqLrxAY0RIAQRRAPmpnmImE%2FjgsCXTpBES4kCOnmLLEw5%2BDPRT%2FslRILrA38HKvfmqHPjT6MKiEgAEz5%2FlNnLIsGljR38VelDH2gPnDB0Yau%2FNe4zz70CSYcWIP8gWr&X-Amz-Signature=a7f74453ae510ac29bb4404e758cfdc801f53faf475b4bda49f9e53115875387&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
