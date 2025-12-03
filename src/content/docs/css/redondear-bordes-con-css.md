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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UROU66HV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC3Jn4hc8qqH6422lE3vCyDQuWnfmF3VZ%2F3zZe1Z0u9UwIgB%2BPiAIomc%2BmNW8Zc0hwDK96aVzjF5RLAwJ4oAGRjbMYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKJBn%2BEJlYdJOa8qQSrcA%2BvL3QuYRPN5RHt8j44%2BCCcf2bEKZGBVF7esL6Rdh%2Bg1zM7wUr2SQxjyuRXC0IfsAf5QQFg8UOYgbD7z%2FNgKy2enYP%2FV2C%2B%2BnfRpFPbcYbEkMueiaJ0qmxjkO5AaiMiF6lKZerAuwZEYuO69M%2BQkQwWHIpdiG0ec2fzXhBp84Sa7qhqpy3clnk5MrVYGypkn3DH1m%2BH0V9mBg19jeNiUdYZSEoWwJE%2FcmsogV3B4iVfGTyUPRi1%2BIJubo2P5QgFqZE90%2FUfYMaWgjbGFwlaSpsfkNNdi06HeCH582Yz%2BiEu%2FdTTYGE6Dtkuu0%2FvZ3KyK3n4iXHWHAile63NeYio4qlsbT5y9ZHoNFvvRDJI3IQiwIdX3EZI2S0oebFJUdmb%2FcHV%2FjqEITfFW9RSeyVnAp6PefOIuALXtyF4uajoQ2w8VIGQHaHto16FxSKRyFVvzvIMiMujXkjeYQbsaIkYBN%2FUyvIwVm15QIs%2FcynkClcMC73K0VDpjQCYmCqiKhNNY7Uc8nSj6O%2FCTKRoY9umkxejYS07mfJ0K%2FMUzt5g7vLE%2FvEwhDyf3tibpBeMIYDXWH4sFj1KLn1EBUE5alStlPN%2BVP6wIGSlXGrsdEgJGNrN3feg%2Fccv2DXfIgLpAMJ29wskGOqUBFce6a6SeBEdX6VeswF080RGMolAW5TeQccMucaoKFDD77UXyxY9Ygn7sEOMqar%2FIKrVoRinNaiVKSgAjAICh0PDUVhU3S3G30uN2aWYDM9%2Bzrg%2FA4qEwNhXQ0JbNO98t0XC3%2FIjJ9rERaEpcYP6odfaBen9qTobvS%2BEiNS9B8hvcQKchcIe%2BdhcjQFzvhEQxp4uJukAj5QbaUVhJ2%2BpQc%2F6g%2BQ8B&X-Amz-Signature=670e9caa0a02c2618730bd99d59bf5a6d4db3de97287c51a9e1126784e01d6a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UROU66HV%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T213650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG0aCXVzLXdlc3QtMiJHMEUCIQC3Jn4hc8qqH6422lE3vCyDQuWnfmF3VZ%2F3zZe1Z0u9UwIgB%2BPiAIomc%2BmNW8Zc0hwDK96aVzjF5RLAwJ4oAGRjbMYq%2FwMINhAAGgw2Mzc0MjMxODM4MDUiDKJBn%2BEJlYdJOa8qQSrcA%2BvL3QuYRPN5RHt8j44%2BCCcf2bEKZGBVF7esL6Rdh%2Bg1zM7wUr2SQxjyuRXC0IfsAf5QQFg8UOYgbD7z%2FNgKy2enYP%2FV2C%2B%2BnfRpFPbcYbEkMueiaJ0qmxjkO5AaiMiF6lKZerAuwZEYuO69M%2BQkQwWHIpdiG0ec2fzXhBp84Sa7qhqpy3clnk5MrVYGypkn3DH1m%2BH0V9mBg19jeNiUdYZSEoWwJE%2FcmsogV3B4iVfGTyUPRi1%2BIJubo2P5QgFqZE90%2FUfYMaWgjbGFwlaSpsfkNNdi06HeCH582Yz%2BiEu%2FdTTYGE6Dtkuu0%2FvZ3KyK3n4iXHWHAile63NeYio4qlsbT5y9ZHoNFvvRDJI3IQiwIdX3EZI2S0oebFJUdmb%2FcHV%2FjqEITfFW9RSeyVnAp6PefOIuALXtyF4uajoQ2w8VIGQHaHto16FxSKRyFVvzvIMiMujXkjeYQbsaIkYBN%2FUyvIwVm15QIs%2FcynkClcMC73K0VDpjQCYmCqiKhNNY7Uc8nSj6O%2FCTKRoY9umkxejYS07mfJ0K%2FMUzt5g7vLE%2FvEwhDyf3tibpBeMIYDXWH4sFj1KLn1EBUE5alStlPN%2BVP6wIGSlXGrsdEgJGNrN3feg%2Fccv2DXfIgLpAMJ29wskGOqUBFce6a6SeBEdX6VeswF080RGMolAW5TeQccMucaoKFDD77UXyxY9Ygn7sEOMqar%2FIKrVoRinNaiVKSgAjAICh0PDUVhU3S3G30uN2aWYDM9%2Bzrg%2FA4qEwNhXQ0JbNO98t0XC3%2FIjJ9rERaEpcYP6odfaBen9qTobvS%2BEiNS9B8hvcQKchcIe%2BdhcjQFzvhEQxp4uJukAj5QbaUVhJ2%2BpQc%2F6g%2BQ8B&X-Amz-Signature=5ef01e49c35d634db3690b5939ba13b55b3fe7f3099f06b04e1e120fe14bc240&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
