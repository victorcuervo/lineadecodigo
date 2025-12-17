---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2I6ONJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfxOPwmJyaPMdTcxwJL1kH9%2Febwea%2BkZWtlZSkEi7oEAIhAJRvEryzz%2F2YW2oDcK5UDHyyT1nqiIsf8Tjz4bJPlkXHKv8DCH0QABoMNjM3NDIzMTgzODA1IgyxRy0gHlqkt1411L8q3ANRQLfAuhhgdMGMcVgTW6tpLGhBEwhdQ2KETkizOcA2VTty0a514uDSAd7A0t0oGe6sO0%2BypjVEg%2BJdTM5O1cdCN11MahUHa1XAAn%2BdIc7hzVRVAvJ6Cz%2F6RZWoLc%2Fn7bJAQpqpaXHuMJ67CdPGugIL24gBlowXwsjPIt8B1NN0NAjwh%2FKprqA5dRM7fStXdEPaE4BlXvLyO26fWW460MAsfdFB%2Bmp62M2mWsQ5gBmuHKG3zDrUArilvVOvDwf87N69byNgNH2naLmSn2x9T4qEJxeVNF5FicoraF2ccqVTYd4PVAdfKNLGr8hGS890xIC1bD54v2buNXmvs5SJB2BsCf8SJzMt8xR1EpD4%2Fr8L%2F5boB9j7ZOjbjOiM8EeonI%2FDGw2WkKrYlDuUMz9wJ1%2BFWnfceG%2BsYkrDTD4y0v8qQyS%2BIOcYLXKtWv%2B6Yl%2B2aaGhdlBv8KGEyKTjOsICrIat7i6ozLN6CZVbvpQqP82vnWFsAXVztxthM4Ax3n2beGHOWEXv4uefdzvZ3cwJ2CDq5ZJuAsaZHd15%2Bp1k%2B3OOrojYR9mUlRl%2BUQe%2B1m%2Fn%2FOIQL5ERIoTcqpeDKMFVnUTEGp6QOcINulI1lKbQ1fTEvm6MDpqHBwrDLxlqmzDRqorKBjqkAeuSf0Mb2g58uCumhNjuverD3mFFaIu4l2LL2ZkEPUTvPnlW0L6iHdVXGZplnp2WRr0UGpjwhHrKMBrGdSgXVNGhpSqFnidj%2Bahe05yVignI0DJO5UEoMD4y8F8V3v3S3B7HwpkRNI7UKgE%2Bc%2BEOD03OWxX8eMIwbcOFfv887je17lq1%2BTvnt%2Bz%2B8rmbMzO1aQmNURlK7DVpL%2BDlCn7wFqB5%2FR5H&X-Amz-Signature=732b906e4b2c8ab066300408e92497a59f51878ecfe1635574ff3ad81c35c397&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G2I6ONJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfxOPwmJyaPMdTcxwJL1kH9%2Febwea%2BkZWtlZSkEi7oEAIhAJRvEryzz%2F2YW2oDcK5UDHyyT1nqiIsf8Tjz4bJPlkXHKv8DCH0QABoMNjM3NDIzMTgzODA1IgyxRy0gHlqkt1411L8q3ANRQLfAuhhgdMGMcVgTW6tpLGhBEwhdQ2KETkizOcA2VTty0a514uDSAd7A0t0oGe6sO0%2BypjVEg%2BJdTM5O1cdCN11MahUHa1XAAn%2BdIc7hzVRVAvJ6Cz%2F6RZWoLc%2Fn7bJAQpqpaXHuMJ67CdPGugIL24gBlowXwsjPIt8B1NN0NAjwh%2FKprqA5dRM7fStXdEPaE4BlXvLyO26fWW460MAsfdFB%2Bmp62M2mWsQ5gBmuHKG3zDrUArilvVOvDwf87N69byNgNH2naLmSn2x9T4qEJxeVNF5FicoraF2ccqVTYd4PVAdfKNLGr8hGS890xIC1bD54v2buNXmvs5SJB2BsCf8SJzMt8xR1EpD4%2Fr8L%2F5boB9j7ZOjbjOiM8EeonI%2FDGw2WkKrYlDuUMz9wJ1%2BFWnfceG%2BsYkrDTD4y0v8qQyS%2BIOcYLXKtWv%2B6Yl%2B2aaGhdlBv8KGEyKTjOsICrIat7i6ozLN6CZVbvpQqP82vnWFsAXVztxthM4Ax3n2beGHOWEXv4uefdzvZ3cwJ2CDq5ZJuAsaZHd15%2Bp1k%2B3OOrojYR9mUlRl%2BUQe%2B1m%2Fn%2FOIQL5ERIoTcqpeDKMFVnUTEGp6QOcINulI1lKbQ1fTEvm6MDpqHBwrDLxlqmzDRqorKBjqkAeuSf0Mb2g58uCumhNjuverD3mFFaIu4l2LL2ZkEPUTvPnlW0L6iHdVXGZplnp2WRr0UGpjwhHrKMBrGdSgXVNGhpSqFnidj%2Bahe05yVignI0DJO5UEoMD4y8F8V3v3S3B7HwpkRNI7UKgE%2Bc%2BEOD03OWxX8eMIwbcOFfv887je17lq1%2BTvnt%2Bz%2B8rmbMzO1aQmNURlK7DVpL%2BDlCn7wFqB5%2FR5H&X-Amz-Signature=e6e224ef77c2c55bc308fc3985e9ddf89c7e24840f88b9c0f666a378d66b31d1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
