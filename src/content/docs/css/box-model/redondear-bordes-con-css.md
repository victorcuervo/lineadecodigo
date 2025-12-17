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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZ7VGBS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCixovg6%2BgG0zzEkvDIZSl%2F8s0QrOo9xw610oNk7YufSgIgCuKr821TSOyeHxybnQluycudNv8K%2Fd1KLZYQEad%2BihAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHCy7STECorqhHdxNyrcA2tGFpukKl410sKZ7evECfSowaFSBX7WVAoTUffFDxdebvMOGwqC6Fp5j3pQjlM396Q90e5bBA%2B5qrCZYn%2Btdn331iwG20T86HpgcYTj7l1DyKUgcKCm1DZlg2BjH6Gv0No%2FC2TEKY2snEsd5B9BCv5LRrzW3rOJ0iItdbT6BEX7tRFbMFKnpF1YdGqo2jDftIns3XLSocdFvqhiy6juk9AyUinUCX1EuhY3mILiajox6Ve2qM3cEacdiGB1CQwaA3LJt1Zee6WHfJniRH9RgGxEy3lCxv8EivS5GrMtY93Rtp8%2BBNDB4Kt12LlOvt4d%2BgEvKjynj%2Bk6mLwT0oQ5O7QookmZNXHRgIZqoKbGn%2BYtLbe4q%2BHn8sugzHJhBD4O9UlfX3c%2BWJT6Sij67ClfChix9usD5jo2Z0DYBl3k2XmzY4H0iMX2YNC4hroFQk3QO7u9reAeC25W40nz8dSK8aMcvN7LysdyzJ2wUEHl092kJ%2Byb9fWvgIeYTGcBzvF6rcqanlv5wojdHVG7gnxB35UEkxjyVEHnyM7LUKOsAu9Vk30k5Fg8ThK6KEJJluxl0e81DkCNDXsCFzpcRrogPBbJlLxCJUjt4YFOFJ%2FuzRpsVyaOZKloNzAz5UdXMM63icoGOqUBRrprG9xpe3RokA8eL7Hz7atq7yTqz108yB48tmkqYwflokLiIaaW0l47teXuL4Yk53mgYszJ1KjFoXy%2FLSwnAzvhnt0eOOAhTPjECTLZ9YZ%2BhvfMy1dbQA2LWGIPlzq4Z6gR%2Bf%2FeRpPW%2FnLAwiU%2Bpa9qMwDtCWROZ6DCunDA%2BVJjtxqCZeLj82aMQb5N%2FtgDhs5jOM82FJrmWIQyih2YZQH04cEU&X-Amz-Signature=f5d95fd6c260762d58fda39b73c8f427b7cf51e73892a6e248032acbc4af1276&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HZ7VGBS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075750Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCixovg6%2BgG0zzEkvDIZSl%2F8s0QrOo9xw610oNk7YufSgIgCuKr821TSOyeHxybnQluycudNv8K%2Fd1KLZYQEad%2BihAq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDHCy7STECorqhHdxNyrcA2tGFpukKl410sKZ7evECfSowaFSBX7WVAoTUffFDxdebvMOGwqC6Fp5j3pQjlM396Q90e5bBA%2B5qrCZYn%2Btdn331iwG20T86HpgcYTj7l1DyKUgcKCm1DZlg2BjH6Gv0No%2FC2TEKY2snEsd5B9BCv5LRrzW3rOJ0iItdbT6BEX7tRFbMFKnpF1YdGqo2jDftIns3XLSocdFvqhiy6juk9AyUinUCX1EuhY3mILiajox6Ve2qM3cEacdiGB1CQwaA3LJt1Zee6WHfJniRH9RgGxEy3lCxv8EivS5GrMtY93Rtp8%2BBNDB4Kt12LlOvt4d%2BgEvKjynj%2Bk6mLwT0oQ5O7QookmZNXHRgIZqoKbGn%2BYtLbe4q%2BHn8sugzHJhBD4O9UlfX3c%2BWJT6Sij67ClfChix9usD5jo2Z0DYBl3k2XmzY4H0iMX2YNC4hroFQk3QO7u9reAeC25W40nz8dSK8aMcvN7LysdyzJ2wUEHl092kJ%2Byb9fWvgIeYTGcBzvF6rcqanlv5wojdHVG7gnxB35UEkxjyVEHnyM7LUKOsAu9Vk30k5Fg8ThK6KEJJluxl0e81DkCNDXsCFzpcRrogPBbJlLxCJUjt4YFOFJ%2FuzRpsVyaOZKloNzAz5UdXMM63icoGOqUBRrprG9xpe3RokA8eL7Hz7atq7yTqz108yB48tmkqYwflokLiIaaW0l47teXuL4Yk53mgYszJ1KjFoXy%2FLSwnAzvhnt0eOOAhTPjECTLZ9YZ%2BhvfMy1dbQA2LWGIPlzq4Z6gR%2Bf%2FeRpPW%2FnLAwiU%2Bpa9qMwDtCWROZ6DCunDA%2BVJjtxqCZeLj82aMQb5N%2FtgDhs5jOM82FJrmWIQyih2YZQH04cEU&X-Amz-Signature=05072b1cfbb5ecce5d0c768e8e49cbc33014d80ce0e9c7c16a1d0d7d8482defb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
