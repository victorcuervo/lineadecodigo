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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E76AOMS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDhW%2FgvBhETMSD2Fd%2BiioALhtxH4LR2RxBPyurPJ4hojAIhAMO03jaxlsPI2PxcovFaJ3nmalv2IUOm6Neb6Li97EWbKv8DCDQQABoMNjM3NDIzMTgzODA1Igx%2ByF6p8OZaKwzTZ6oq3AP%2BTHD9E4WJnHDMTQ80VOidH7uHFI5OJsDBgE1bt8jIY8w3X1aCAOHNJrrXGG1mMML%2BySm4bPxPcQrJKrro7LqU6dgmExEaAAEtI0at9mBD8OA4GoEUlR0AcY%2FvT7a%2FQYoH7vRwMFVKDzfldS0oD4OvYiYrIFmQ%2FsdnXAYQ1Vd40sXRp%2Bvlo%2FU49B0Yd%2Fu%2BShl5Tc5HA68ttSELJqIFDXtCEcaVvX4T00P0Dv9Qq0Tb5JMQ9aS0b08B0SYnTNQkKmxdKeFx%2FKL76Rk3H7Zfd0nIkqgMtdq5ippDNrFdY1oY%2FXPcMDgQPHPKLCdykGasO180gpSEOxkrG6RHlHgzHB%2BwAg%2BuESEcleidjGG8eOXOPpr1laF8lXw1COXyeebH1F6lzOwPvGhjih6Fcpl4vezdZAkfbVSDI8YwUFEzOZ4s4BXd4tcIy1RnoGn3W6O%2B8zv%2FAZbKhIpbB76GDY57Zlg8CeVCBYN1VH2UqDMdBoq8D11LJl2bhIEMkxpoBNDBYvK%2BlAZT2SfmpC%2FKOQubMook8UpueRz3uoZQB75VaQ1b1Vldf4b2%2Bu3rCNhgi1tJPK85s%2BlTi3BNvLqiHFXmK1jHy4crHcITq%2FbT44QhYC7GS%2Bco6dbdji9P8CZNYzC9kcLJBjqkAS8OoJwxnpxfScW6DjUhKhNMDbGKNp%2FzlA1E7yJeERHY9u%2Bjk0HG77tVI7O7VrrB2085qNgslp88RGB0FIh%2Fs%2FnSCAPHuyZPQ6OfM1M1SF6ZjICsDW3NBMlFZj1tasJCbmnRKe8IVxTKfQmevggmh9%2BXKAFOpXtf8GQeVua%2B48pj9D6iwKv4VU%2BikUArilS%2BxDAfQ2DIrSIprcfByiPo%2Bg7a7lXo&X-Amz-Signature=0905ebd20b6e7c24e2266b7b11fd94bd7ad5dbb2b9de9c09b438a636edaf38ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667E76AOMS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T202404Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEGsaCXVzLXdlc3QtMiJIMEYCIQDhW%2FgvBhETMSD2Fd%2BiioALhtxH4LR2RxBPyurPJ4hojAIhAMO03jaxlsPI2PxcovFaJ3nmalv2IUOm6Neb6Li97EWbKv8DCDQQABoMNjM3NDIzMTgzODA1Igx%2ByF6p8OZaKwzTZ6oq3AP%2BTHD9E4WJnHDMTQ80VOidH7uHFI5OJsDBgE1bt8jIY8w3X1aCAOHNJrrXGG1mMML%2BySm4bPxPcQrJKrro7LqU6dgmExEaAAEtI0at9mBD8OA4GoEUlR0AcY%2FvT7a%2FQYoH7vRwMFVKDzfldS0oD4OvYiYrIFmQ%2FsdnXAYQ1Vd40sXRp%2Bvlo%2FU49B0Yd%2Fu%2BShl5Tc5HA68ttSELJqIFDXtCEcaVvX4T00P0Dv9Qq0Tb5JMQ9aS0b08B0SYnTNQkKmxdKeFx%2FKL76Rk3H7Zfd0nIkqgMtdq5ippDNrFdY1oY%2FXPcMDgQPHPKLCdykGasO180gpSEOxkrG6RHlHgzHB%2BwAg%2BuESEcleidjGG8eOXOPpr1laF8lXw1COXyeebH1F6lzOwPvGhjih6Fcpl4vezdZAkfbVSDI8YwUFEzOZ4s4BXd4tcIy1RnoGn3W6O%2B8zv%2FAZbKhIpbB76GDY57Zlg8CeVCBYN1VH2UqDMdBoq8D11LJl2bhIEMkxpoBNDBYvK%2BlAZT2SfmpC%2FKOQubMook8UpueRz3uoZQB75VaQ1b1Vldf4b2%2Bu3rCNhgi1tJPK85s%2BlTi3BNvLqiHFXmK1jHy4crHcITq%2FbT44QhYC7GS%2Bco6dbdji9P8CZNYzC9kcLJBjqkAS8OoJwxnpxfScW6DjUhKhNMDbGKNp%2FzlA1E7yJeERHY9u%2Bjk0HG77tVI7O7VrrB2085qNgslp88RGB0FIh%2Fs%2FnSCAPHuyZPQ6OfM1M1SF6ZjICsDW3NBMlFZj1tasJCbmnRKe8IVxTKfQmevggmh9%2BXKAFOpXtf8GQeVua%2B48pj9D6iwKv4VU%2BikUArilS%2BxDAfQ2DIrSIprcfByiPo%2Bg7a7lXo&X-Amz-Signature=7d77a18d03f98ca52af8b1b72fe8199fd97af203a45cb66857c128373b77dc58&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
