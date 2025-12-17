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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MI3PC4D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BEhHuuw1Ybh9hd41jHh8zrNdRodq2Yxt7y%2BP6QhiqbwIhAP0WRFPHH9KH9heQ7w7YmSJnLqILli7OLXpzbwEthCjTKv8DCH0QABoMNjM3NDIzMTgzODA1IgyJ%2F6mD091IbbQwJd8q3AO9AXwg9MHEZI%2BK34Q0tcuh7zAD0ECooIhuRAHaNV0gKulALQB67%2B8xI2bLVRT0TnqQAMOF%2FDTn0TzXYFl1UEuIRBt4pd4bMm1p0PoLwEDO17k8jWE6YZLV8QO2sShewxGyX%2BARIma9vRXCD9NlXAvPVwg7TmETO0KkO6kYVw1jk9%2FsLdldEFmBbT5iyJWPOBPhSWPJeDMciVmhZYMhK4VC1I2Qkm%2F5crpJShSbqO1Bgo56UE8zE6wrn6uV%2FRgsG9iFDOl2YTP3RtKkuROHRCNnvYVVs%2F0nf9lvmbfmE4Xi%2FnpVsKflBG%2F4ihnMUrFxUjxkx7XB3DSibKrg%2BzlQLNW9B7wSZEIduUPxpUvMJnCLiwxOdsZxYLVzHJ%2FcQXl1kSzSYl7nGHnseeLpYvUyTW7SQL2wpkjjyaB0rOrj7khUlxS22MCBVoPHqD1OIKo8pOcPwvM9pHEWpBxhT7AXqzNmjMLQiqU%2BR1lzHtIt4diZs5huPRHPNwX0d0RvNBS0pOeHMRK%2BONdykW4E76io5CFGA6QaNSVyfMLrwEsPekSHKzxUuudTT9dRyo8sJH6Q7dIWXV%2FViWsTXyGb%2FWJOg4ZiFQiu35JBvr4qB%2BxdQonIWv2K2cDVYqP7xZooSzD4qorKBjqkAU8RdpiwUkI0tmhjxEWlMxJtdDsNZC1%2F%2Fh7IhjG25ZCF9Qyjrm%2Frrxo%2BMGaofaMkor%2F%2FoGJqHM3iC6bdLcdOVduPlwReqBnoEcJbs6Q6dI9hQRuxuHM3xcVRGo0aRPwd%2FxAwin7FEqp7cpvIejbR%2FfuX0tcZ5Zn6HFNWGoSB07HAEDU7ZRCHmk5h9kIL2TOJpA1jNBEyG5YpOEzsSQh1bNmGT6VM&X-Amz-Signature=13e12d621befdb583391c1bc70eb1780b5dbf2159c724ad6b55a5c22b9b9519a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MI3PC4D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122903Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD%2BEhHuuw1Ybh9hd41jHh8zrNdRodq2Yxt7y%2BP6QhiqbwIhAP0WRFPHH9KH9heQ7w7YmSJnLqILli7OLXpzbwEthCjTKv8DCH0QABoMNjM3NDIzMTgzODA1IgyJ%2F6mD091IbbQwJd8q3AO9AXwg9MHEZI%2BK34Q0tcuh7zAD0ECooIhuRAHaNV0gKulALQB67%2B8xI2bLVRT0TnqQAMOF%2FDTn0TzXYFl1UEuIRBt4pd4bMm1p0PoLwEDO17k8jWE6YZLV8QO2sShewxGyX%2BARIma9vRXCD9NlXAvPVwg7TmETO0KkO6kYVw1jk9%2FsLdldEFmBbT5iyJWPOBPhSWPJeDMciVmhZYMhK4VC1I2Qkm%2F5crpJShSbqO1Bgo56UE8zE6wrn6uV%2FRgsG9iFDOl2YTP3RtKkuROHRCNnvYVVs%2F0nf9lvmbfmE4Xi%2FnpVsKflBG%2F4ihnMUrFxUjxkx7XB3DSibKrg%2BzlQLNW9B7wSZEIduUPxpUvMJnCLiwxOdsZxYLVzHJ%2FcQXl1kSzSYl7nGHnseeLpYvUyTW7SQL2wpkjjyaB0rOrj7khUlxS22MCBVoPHqD1OIKo8pOcPwvM9pHEWpBxhT7AXqzNmjMLQiqU%2BR1lzHtIt4diZs5huPRHPNwX0d0RvNBS0pOeHMRK%2BONdykW4E76io5CFGA6QaNSVyfMLrwEsPekSHKzxUuudTT9dRyo8sJH6Q7dIWXV%2FViWsTXyGb%2FWJOg4ZiFQiu35JBvr4qB%2BxdQonIWv2K2cDVYqP7xZooSzD4qorKBjqkAU8RdpiwUkI0tmhjxEWlMxJtdDsNZC1%2F%2Fh7IhjG25ZCF9Qyjrm%2Frrxo%2BMGaofaMkor%2F%2FoGJqHM3iC6bdLcdOVduPlwReqBnoEcJbs6Q6dI9hQRuxuHM3xcVRGo0aRPwd%2FxAwin7FEqp7cpvIejbR%2FfuX0tcZ5Zn6HFNWGoSB07HAEDU7ZRCHmk5h9kIL2TOJpA1jNBEyG5YpOEzsSQh1bNmGT6VM&X-Amz-Signature=0e6853f3f33d2dade710492dc309215ce310f90258d3074a680dd48484b92a36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
