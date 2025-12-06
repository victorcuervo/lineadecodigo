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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCKBBNVG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2wcoyiXJxphsw4YHYumZ4D%2BorHkbr0yuy0JgL5mg1wQIgf1CIQv%2FQgUsTJtXnK1kwWYbPNG7SgS%2FeravSJck20Rkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDFS0lJVyjFX46jfQircAx8kYH3QTrqEi9OIuQ4WH9RT%2B820peROTSZmmngWr8zX3irpNOEAt4ut9AF3Th166xplmPKWxLoi4f7jQZwme0hle9G3e%2BBuoZptDdN89FCCUmIYVSuMvd3sHvr7dw9FqhQ64OkaGH4%2FVGi9oOBkU0JUcHgsyZrdvAz6Rnvlxibu51nrVdGV5%2BEec5DB%2Fm0n%2BB4ktE%2FBKDiyrj5MBbiBonugOhOuxGRyYMKLKImHtl7Qu1YNZcKW3cb%2FylR4tzxAvTJGsiBfFKTFh5R%2BwQQb2b9OCjtUbU5IYH5GSjzgQqilmOTq8ZQEE5pxliGWv3MLHUslDxRg4LhHxgNCqvhkqjUrNlo%2BzxNaG2YfTonhFHgYCIYx0KgwsLLNX%2FRB7unqvlwmavFaK%2BntwTAscnKcNUiNk5h%2B0guspM5Yj4GpKxOEB%2Bc1QCx83yrA0zHsfvPPcPxioOgkJtVw2zzWj5NkE9Nkf5lzPJumUEPKGF0DnxNnzhh7tC6V0XVfIUNk57YmbEqxuBJY%2BSkG8WTH5T%2FOk0nRby8Ds1jKxDHObVYcPNKDS4aYAVjSENHyXC%2Fwx%2BcG0xLQbG3bp9%2FqTh6cMv6%2BkYK9qFIE%2F5JOTQK7gN0tR8LS7HUzMaTau4tyXNVYMNe8z8kGOqUBKKh%2F4wV0NS9hVfFs8M37tWDg1%2BR3Yp%2B81VGXCb2cNoU02EqluGpdJ%2BV%2FLF%2F9DgBGN%2BTyF%2Fqss%2FL7TedD1huR%2Fgzg6Apf9p2O%2FqXuEVP8VtC7UCfpsYiWD1XLdljCCMCecNPbRIqZpToaHpCwxA%2BJmNSHNgOiSoa0xdUEPhDG5IYHQXrTJpy5XgRfDOn2hxEkUFUCBydO%2FHqyl708jS3vS0GTTCb%2B&X-Amz-Signature=ac9332cfe4642859c08aeddd7ddf1d3f71a42affda47d3c6db6dce55ff3f471e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RCKBBNVG%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T082922Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC2wcoyiXJxphsw4YHYumZ4D%2BorHkbr0yuy0JgL5mg1wQIgf1CIQv%2FQgUsTJtXnK1kwWYbPNG7SgS%2FeravSJck20Rkq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDDFS0lJVyjFX46jfQircAx8kYH3QTrqEi9OIuQ4WH9RT%2B820peROTSZmmngWr8zX3irpNOEAt4ut9AF3Th166xplmPKWxLoi4f7jQZwme0hle9G3e%2BBuoZptDdN89FCCUmIYVSuMvd3sHvr7dw9FqhQ64OkaGH4%2FVGi9oOBkU0JUcHgsyZrdvAz6Rnvlxibu51nrVdGV5%2BEec5DB%2Fm0n%2BB4ktE%2FBKDiyrj5MBbiBonugOhOuxGRyYMKLKImHtl7Qu1YNZcKW3cb%2FylR4tzxAvTJGsiBfFKTFh5R%2BwQQb2b9OCjtUbU5IYH5GSjzgQqilmOTq8ZQEE5pxliGWv3MLHUslDxRg4LhHxgNCqvhkqjUrNlo%2BzxNaG2YfTonhFHgYCIYx0KgwsLLNX%2FRB7unqvlwmavFaK%2BntwTAscnKcNUiNk5h%2B0guspM5Yj4GpKxOEB%2Bc1QCx83yrA0zHsfvPPcPxioOgkJtVw2zzWj5NkE9Nkf5lzPJumUEPKGF0DnxNnzhh7tC6V0XVfIUNk57YmbEqxuBJY%2BSkG8WTH5T%2FOk0nRby8Ds1jKxDHObVYcPNKDS4aYAVjSENHyXC%2Fwx%2BcG0xLQbG3bp9%2FqTh6cMv6%2BkYK9qFIE%2F5JOTQK7gN0tR8LS7HUzMaTau4tyXNVYMNe8z8kGOqUBKKh%2F4wV0NS9hVfFs8M37tWDg1%2BR3Yp%2B81VGXCb2cNoU02EqluGpdJ%2BV%2FLF%2F9DgBGN%2BTyF%2Fqss%2FL7TedD1huR%2Fgzg6Apf9p2O%2FqXuEVP8VtC7UCfpsYiWD1XLdljCCMCecNPbRIqZpToaHpCwxA%2BJmNSHNgOiSoa0xdUEPhDG5IYHQXrTJpy5XgRfDOn2hxEkUFUCBydO%2FHqyl708jS3vS0GTTCb%2B&X-Amz-Signature=5de0dc67baac76689d8a650dae4a2c6bad2122250c833b5df6a34080c97ac7b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
