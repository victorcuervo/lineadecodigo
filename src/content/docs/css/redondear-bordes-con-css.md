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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQ5XSZ6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQDlRT7kQtmCpYB3i3oGVhwcjf5w9HPEZiM59bbQdonQIgPs1hvTNytzur1aotFOZN6Y2rGUEvCb%2FnjcZDdq9pWHsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGkmXUC0isNYHjnnRCrcA83DzTXQoPk14hgWLmM6dgXC3jAytKV%2FnhiqJ%2BYaJuDPsVPEkJrErXndlXZ8EC1pKwuRjPqqNodOCwlB7YJ8W1%2FNCc3%2FgqqjOGIbJ7CoFIrTOjSfwVcvXChah8JcR%2Fo%2FGKAHAi7%2BWF3%2FluYSLZl3QmwEB459ZH4HYkyRQPpj9NREEo1PKFPHgnXtARUMg7U3dPGuaEutHrtTjiAFT%2BJ4UBC0g2m00uCepM97DFLm6c69OjVi9uqfNtfFTeWlVueX0fIPXpZVBwcI2Ez%2BKEWR2k88ylMTwLoKRTRZvTd3KhFhAdmfIekKYQvOWlub76TGai%2FD%2FtxJ02OX%2BYfoe7nFRM9DhXHSyn48xjFJQbSIQ8XwrMEfQHUmKwfwmWDrpDHmd7QiQFnE38bxzOnPC28NBmmHUDEm%2Bfia8PuaZX8%2BYXdU7ZnFp0FIBndmUGtiDukExxr1Dcfnv0ceJGgm6C8Uujvg5pT64uZjatxC6cDyWQl%2B69GO5vd%2BnaP2nTXYmwcrqAzpPXagWhod3XwrTnXAh%2FySYvykcIm2XRdG7hDFnL%2B%2FsLDI%2B8v8Tnjj6da4VbFZR3RtJxJz1UBpnEf6dDkaFZyPnSX1BplfUoP%2FJJXD3fFVrm1caSWsRibBYUtUMJaMyMkGOqUBVxEppAwGK3v9W7M0k%2B%2BbbUZ6w4yB%2FlQu9J5RM03mQIoedsVX3f7GSQBXxZE9BuFP1mHSTPBpMNSX4j33V1N2s0luH%2FWARsd1sCXEPEBAw6dxcF3DLU1T8HDQy5bKbX3ZYtjYNPhVErlyVQa58ZM6jVV2d%2Fd7Rwep4tLJg%2B9LDNHeYKJ%2FihnzoGcK95NqgnnmMImTU8NE%2FnwUgZQMZ5d%2BBvPhZQK0&X-Amz-Signature=28d0eedb4cbd2eb6fc63c5577a1d914c55f5c76f6caa16d74d76d72b1bed8f23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YYQ5XSZ6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014250Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQDlRT7kQtmCpYB3i3oGVhwcjf5w9HPEZiM59bbQdonQIgPs1hvTNytzur1aotFOZN6Y2rGUEvCb%2FnjcZDdq9pWHsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDGkmXUC0isNYHjnnRCrcA83DzTXQoPk14hgWLmM6dgXC3jAytKV%2FnhiqJ%2BYaJuDPsVPEkJrErXndlXZ8EC1pKwuRjPqqNodOCwlB7YJ8W1%2FNCc3%2FgqqjOGIbJ7CoFIrTOjSfwVcvXChah8JcR%2Fo%2FGKAHAi7%2BWF3%2FluYSLZl3QmwEB459ZH4HYkyRQPpj9NREEo1PKFPHgnXtARUMg7U3dPGuaEutHrtTjiAFT%2BJ4UBC0g2m00uCepM97DFLm6c69OjVi9uqfNtfFTeWlVueX0fIPXpZVBwcI2Ez%2BKEWR2k88ylMTwLoKRTRZvTd3KhFhAdmfIekKYQvOWlub76TGai%2FD%2FtxJ02OX%2BYfoe7nFRM9DhXHSyn48xjFJQbSIQ8XwrMEfQHUmKwfwmWDrpDHmd7QiQFnE38bxzOnPC28NBmmHUDEm%2Bfia8PuaZX8%2BYXdU7ZnFp0FIBndmUGtiDukExxr1Dcfnv0ceJGgm6C8Uujvg5pT64uZjatxC6cDyWQl%2B69GO5vd%2BnaP2nTXYmwcrqAzpPXagWhod3XwrTnXAh%2FySYvykcIm2XRdG7hDFnL%2B%2FsLDI%2B8v8Tnjj6da4VbFZR3RtJxJz1UBpnEf6dDkaFZyPnSX1BplfUoP%2FJJXD3fFVrm1caSWsRibBYUtUMJaMyMkGOqUBVxEppAwGK3v9W7M0k%2B%2BbbUZ6w4yB%2FlQu9J5RM03mQIoedsVX3f7GSQBXxZE9BuFP1mHSTPBpMNSX4j33V1N2s0luH%2FWARsd1sCXEPEBAw6dxcF3DLU1T8HDQy5bKbX3ZYtjYNPhVErlyVQa58ZM6jVV2d%2Fd7Rwep4tLJg%2B9LDNHeYKJ%2FihnzoGcK95NqgnnmMImTU8NE%2FnwUgZQMZ5d%2BBvPhZQK0&X-Amz-Signature=d12312051cec9ee3c4f875cf7f5f9a3dbe01a0cffebebec944e56f3758ad9bb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
