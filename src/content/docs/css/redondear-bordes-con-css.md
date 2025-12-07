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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV46SUUP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxWP1oI%2BnG8CL0IFHE%2FDjll49ZsdX4VqHZ6htBQihERAiBqDfefk9EslfiTgWURGULPA9AjCIy6c3lQ2uJlzyGPgiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSHemWYZQwB9JiPOKtwD1FmPeCO0%2FUIhqlHJRqdBB%2B7lp5y41Jy6U3Oto%2FAqZ%2BMlLwL6TlVnnMthAwRD9XxUFeIeg%2FUTmKoS0QLZzR5gG8yUt4JSNmVO8WLB8%2FMzwvhRl9m%2F1nQMgK2wJ662ChttqLOwXGbGMkd%2BcLUyKzFI0vl%2B6vfP%2BCg2oMFNmnrBzyjuWbR%2B9sshQMeXYxK%2F0SCrvGF66Dj0cXCB7hhmHz%2BgFNUjpr3ozIfe7RXffF%2Ftfr0VTv8OLxdagP00LIyLNEC%2FGKDmrtOShoUsqVCdfp2T1aB07F4zj7s9%2Fyo18ildh6a2tYpEIBPoSu%2B3Xzz1knkWjbGtskLcbthbtcHAcCISn01bFdmJZWgT2SxLPCz0Z%2BdZZMHzWAuSZpPyE1HlKh2WE5SE03vH1zyGiN4LR5y0hsb4dNC5xEkqGjMzEyLzCTkPi4AajAQyVfQIL0jLVrlajRP3%2Fuy70iwokpODCR74UNfU3HyB5SU9eTM0V3R21PNKLVRdE%2BdtBEVyAPYZ%2BaLmxaJJ7X%2FeUP470i5M0QvyUjXaGyTnWR3e%2FC%2FIzx9QMpEy7FdOSvLcyvKT7YyimHK6t21zUrL2K8RKm%2FaggR87yxULhS6VXm5ZCuZhVVFHuUQjq687MgAtDKW7Q4Ew44TYyQY6pgFPdMpe2Puqr%2BcYiY0xhkHzRoS1dcNZRK%2Bfl%2BcwRtRU8URO4ALObeUQikWrYmWw2BgwyBq5TSscCiEmMDSSepqAioyg88RX%2Bgls5JRsRBQykYuf5rHlGlZkgzWzjW1GKX2pJV8125PIpvdNTxUmFNx%2B%2B7QjkSXYXR1K6pGveqU%2BXURRdibHeQfvVCO6k9TpDoQScJRCJBp3fP852OtOX%2FtwnQPBCZoe&X-Amz-Signature=8be39473a916d3cf0930540aeea4defeae6143c3fb43193dfa9afa2869cc04a0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZV46SUUP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T233311Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICxWP1oI%2BnG8CL0IFHE%2FDjll49ZsdX4VqHZ6htBQihERAiBqDfefk9EslfiTgWURGULPA9AjCIy6c3lQ2uJlzyGPgiqIBAiY%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVSHemWYZQwB9JiPOKtwD1FmPeCO0%2FUIhqlHJRqdBB%2B7lp5y41Jy6U3Oto%2FAqZ%2BMlLwL6TlVnnMthAwRD9XxUFeIeg%2FUTmKoS0QLZzR5gG8yUt4JSNmVO8WLB8%2FMzwvhRl9m%2F1nQMgK2wJ662ChttqLOwXGbGMkd%2BcLUyKzFI0vl%2B6vfP%2BCg2oMFNmnrBzyjuWbR%2B9sshQMeXYxK%2F0SCrvGF66Dj0cXCB7hhmHz%2BgFNUjpr3ozIfe7RXffF%2Ftfr0VTv8OLxdagP00LIyLNEC%2FGKDmrtOShoUsqVCdfp2T1aB07F4zj7s9%2Fyo18ildh6a2tYpEIBPoSu%2B3Xzz1knkWjbGtskLcbthbtcHAcCISn01bFdmJZWgT2SxLPCz0Z%2BdZZMHzWAuSZpPyE1HlKh2WE5SE03vH1zyGiN4LR5y0hsb4dNC5xEkqGjMzEyLzCTkPi4AajAQyVfQIL0jLVrlajRP3%2Fuy70iwokpODCR74UNfU3HyB5SU9eTM0V3R21PNKLVRdE%2BdtBEVyAPYZ%2BaLmxaJJ7X%2FeUP470i5M0QvyUjXaGyTnWR3e%2FC%2FIzx9QMpEy7FdOSvLcyvKT7YyimHK6t21zUrL2K8RKm%2FaggR87yxULhS6VXm5ZCuZhVVFHuUQjq687MgAtDKW7Q4Ew44TYyQY6pgFPdMpe2Puqr%2BcYiY0xhkHzRoS1dcNZRK%2Bfl%2BcwRtRU8URO4ALObeUQikWrYmWw2BgwyBq5TSscCiEmMDSSepqAioyg88RX%2Bgls5JRsRBQykYuf5rHlGlZkgzWzjW1GKX2pJV8125PIpvdNTxUmFNx%2B%2B7QjkSXYXR1K6pGveqU%2BXURRdibHeQfvVCO6k9TpDoQScJRCJBp3fP852OtOX%2FtwnQPBCZoe&X-Amz-Signature=f657a9141d395058e789987d25f4e75bac07aaed1a2fa0c80c7276b6ccb2a1f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
