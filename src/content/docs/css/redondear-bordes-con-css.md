---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMDCQMYM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDrhEiGhqTGIANVtUVmfxu1JZ4GwSNarruJXziYGv8NsgIgQG55TNfkwt4cHRslaY86k%2F6BqfVKwPXvgEElaYDE2dYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFYELf%2FU7svygRHkJCrcA%2B%2Bi3vovW0Aiw%2FyrJgI7tCU%2B2PtmE4F21QySQ1mLJtJoG455IRNfIz0Huzs7xS%2BofAPXY7MCRLJGNhDEiDBJZoRz0wvU6T%2FAE47jd07iQ2%2BXYTrOuM6BckwJ9kW7Dj%2FU3Cvxj5%2BY4FaV%2Fka43eV4k8rrcB9SJSzFlzpGG6pISwln0YJWBptiKjiPyE%2F92vZWL0zprTjTm69CnTyPUcOigIXJfDut%2FetYqoVJz3GtSHG0nr5KPrQbV4Gdhj3TrWkSxf0WGtIuTAxBd6DtJFEcDVA1biO7BGT2OUCOJHJLHbd9I7jM4mWLRfUq%2FKYdXrf8UhW9cCJivyj28jjmYUBtkUGZMQY9njYY0nIBSXLc7o2EGIJUh9WKq%2Fmvst7DkX0XBednrBfDl0KMzKtRtFcbxD7n86g6ufdr6%2BLmPEp7H5FNGuaS%2BhXkU4hLwl%2Bejogl0Mfr6QzQVvF6HumKWS1M2aP%2F2mH6%2F%2F%2Bf298DMmZb%2FDEIV4jCBCHkz7gQr806L3CNSumc92GIdmG29NpnLvvg1wtDpORn6JKchnR%2BkDS2pTTrpkFAc2b7Jja7qQw4Bc7ufbzEuG2pBKBPE7gJPl3KX5YSGWolv%2BvxuEcC%2FblWDAOFdqW5P4fpxvRU4f%2BUMJaqxckGOqUBhmU%2BHi3Weas%2Fy2InFjRi%2B0s9lhdXXULbzH1ugC%2FiKyzzemop57XuKjrzk1WWW0eK3RPZ2O4QmJi71ez9SO79s0dptQRuG2vxdtp2Bgs4dhxf73wx5NGht0uJ0rCzubQi%2FutNPKS6Xt0drSesyBPNb7cjaOERYEqEdzsdQWYKSLMRUwPDUMRDjMj5%2FRo8pPWt%2FVKQerQTuwqLTJWHOIx0%2BsNS1eAd&X-Amz-Signature=2adc2e8246c4885afdb5a9f01ffa4592645e84fecf683726a0dc75967e840594&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YMDCQMYM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T094939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHoaCXVzLXdlc3QtMiJHMEUCIQDrhEiGhqTGIANVtUVmfxu1JZ4GwSNarruJXziYGv8NsgIgQG55TNfkwt4cHRslaY86k%2F6BqfVKwPXvgEElaYDE2dYq%2FwMIQxAAGgw2Mzc0MjMxODM4MDUiDFYELf%2FU7svygRHkJCrcA%2B%2Bi3vovW0Aiw%2FyrJgI7tCU%2B2PtmE4F21QySQ1mLJtJoG455IRNfIz0Huzs7xS%2BofAPXY7MCRLJGNhDEiDBJZoRz0wvU6T%2FAE47jd07iQ2%2BXYTrOuM6BckwJ9kW7Dj%2FU3Cvxj5%2BY4FaV%2Fka43eV4k8rrcB9SJSzFlzpGG6pISwln0YJWBptiKjiPyE%2F92vZWL0zprTjTm69CnTyPUcOigIXJfDut%2FetYqoVJz3GtSHG0nr5KPrQbV4Gdhj3TrWkSxf0WGtIuTAxBd6DtJFEcDVA1biO7BGT2OUCOJHJLHbd9I7jM4mWLRfUq%2FKYdXrf8UhW9cCJivyj28jjmYUBtkUGZMQY9njYY0nIBSXLc7o2EGIJUh9WKq%2Fmvst7DkX0XBednrBfDl0KMzKtRtFcbxD7n86g6ufdr6%2BLmPEp7H5FNGuaS%2BhXkU4hLwl%2Bejogl0Mfr6QzQVvF6HumKWS1M2aP%2F2mH6%2F%2F%2Bf298DMmZb%2FDEIV4jCBCHkz7gQr806L3CNSumc92GIdmG29NpnLvvg1wtDpORn6JKchnR%2BkDS2pTTrpkFAc2b7Jja7qQw4Bc7ufbzEuG2pBKBPE7gJPl3KX5YSGWolv%2BvxuEcC%2FblWDAOFdqW5P4fpxvRU4f%2BUMJaqxckGOqUBhmU%2BHi3Weas%2Fy2InFjRi%2B0s9lhdXXULbzH1ugC%2FiKyzzemop57XuKjrzk1WWW0eK3RPZ2O4QmJi71ez9SO79s0dptQRuG2vxdtp2Bgs4dhxf73wx5NGht0uJ0rCzubQi%2FutNPKS6Xt0drSesyBPNb7cjaOERYEqEdzsdQWYKSLMRUwPDUMRDjMj5%2FRo8pPWt%2FVKQerQTuwqLTJWHOIx0%2BsNS1eAd&X-Amz-Signature=a4de80290b57a3a9968ed6be995092c28d55a3f6f86c50d8d24553217eba94c8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
