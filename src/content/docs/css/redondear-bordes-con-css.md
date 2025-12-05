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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THOWLCY2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDbfVud4g5I0KgPH44uagdXbUvG0DStpSFF0XRdSHbYAIhAKvgmZGQCv%2FCVRycXyrQEFEjqcJn1b20Tlg86fwv7HQ6Kv8DCE8QABoMNjM3NDIzMTgzODA1IgzshxBFApMtn7JQVfAq3APoIHF66HZgm8HwRWf1RsZl6JpSB%2BDO7rqDofzrPrMxcToXXcfMTSMrXwzqHI9KkUhX0TMycaMf3RBBLtr1MtuFRTh6ne7pG2Li2Bf51KweYGvW7l7tuXnk3SYahdXd3R8a8xiPkH942vjbkiuZD3umdrd9CAhyu3x1Q5bW%2BALUYu14wWBqBKGUfjZqHRMbhfd%2FPgRQhtUld4UnM5f%2BWKeTtpLnY8gmh0xV0hFerrot%2Fr0%2Fc1fG9254LzZ2lPpGILvuxvTiljNPc15yCGyr%2Bm%2FXGS0qVHx7w8sad27wxUD6DAytBkMMPrYYFvqoLVB20SJpUifxkAH9tizU1N1inj2QXEST4WKCo18wdheFgWbzoY4BAk1j%2BE2%2F3pk2yMS6UPI3gcEwiXOEct1Fct%2FgnQvurUAF87fPqSsP%2FKvyBghI5AFdSL4aa0SdhEFIa2viOzbEgP3jqxSw3EGPKiqeA%2FD1o5Y1r1Jm7Od4gYcLe0%2FM4QpWQ176qqhg39W0f6TnQPKFdRxfVOexsri1XnlMKg1JeKFja%2Fz316DQva7J43XBsajz7tYPhyYDNjo4uzIpvxcXA4tvcrp8mwFU1M%2Fw5Row6f2x0vSRrupRDICMhcMbg356P0TZ7mvFhOJcBzDUjMjJBjqkAdu9wgZNqXalvBuIXReNyeMo9FposybJDZVTZIXR1OWKLQufk02LqeOJy7hsEDFaTYy6TqqoLzP3DJyBvjcoN2jb2S7XTc0t4J2apXClBkzuy5R6RBOcJ%2BgzbkTCjpLmgr23fccKoe4MvSuzpoen%2FvpbSAcnqA%2BfADqfoGVDmh4rXcDDSBO7%2FZr6uMcN0bORC82GzoriN%2Bi5s%2FhXSl7W3J4Yefrz&X-Amz-Signature=81c62254a069b2ca062c63b656d9142cb77378904783c01965be016c32551c14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466THOWLCY2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T004239Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCDbfVud4g5I0KgPH44uagdXbUvG0DStpSFF0XRdSHbYAIhAKvgmZGQCv%2FCVRycXyrQEFEjqcJn1b20Tlg86fwv7HQ6Kv8DCE8QABoMNjM3NDIzMTgzODA1IgzshxBFApMtn7JQVfAq3APoIHF66HZgm8HwRWf1RsZl6JpSB%2BDO7rqDofzrPrMxcToXXcfMTSMrXwzqHI9KkUhX0TMycaMf3RBBLtr1MtuFRTh6ne7pG2Li2Bf51KweYGvW7l7tuXnk3SYahdXd3R8a8xiPkH942vjbkiuZD3umdrd9CAhyu3x1Q5bW%2BALUYu14wWBqBKGUfjZqHRMbhfd%2FPgRQhtUld4UnM5f%2BWKeTtpLnY8gmh0xV0hFerrot%2Fr0%2Fc1fG9254LzZ2lPpGILvuxvTiljNPc15yCGyr%2Bm%2FXGS0qVHx7w8sad27wxUD6DAytBkMMPrYYFvqoLVB20SJpUifxkAH9tizU1N1inj2QXEST4WKCo18wdheFgWbzoY4BAk1j%2BE2%2F3pk2yMS6UPI3gcEwiXOEct1Fct%2FgnQvurUAF87fPqSsP%2FKvyBghI5AFdSL4aa0SdhEFIa2viOzbEgP3jqxSw3EGPKiqeA%2FD1o5Y1r1Jm7Od4gYcLe0%2FM4QpWQ176qqhg39W0f6TnQPKFdRxfVOexsri1XnlMKg1JeKFja%2Fz316DQva7J43XBsajz7tYPhyYDNjo4uzIpvxcXA4tvcrp8mwFU1M%2Fw5Row6f2x0vSRrupRDICMhcMbg356P0TZ7mvFhOJcBzDUjMjJBjqkAdu9wgZNqXalvBuIXReNyeMo9FposybJDZVTZIXR1OWKLQufk02LqeOJy7hsEDFaTYy6TqqoLzP3DJyBvjcoN2jb2S7XTc0t4J2apXClBkzuy5R6RBOcJ%2BgzbkTCjpLmgr23fccKoe4MvSuzpoen%2FvpbSAcnqA%2BfADqfoGVDmh4rXcDDSBO7%2FZr6uMcN0bORC82GzoriN%2Bi5s%2FhXSl7W3J4Yefrz&X-Amz-Signature=2e0a16ba6be3542bec89853a2ca717872eba1bdefda13794403cf71e53b6c3b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
