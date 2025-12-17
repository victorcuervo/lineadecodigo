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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRH35CL7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0BcoBc7t2Vhltmjwkwh0%2BHRNPTRB2%2BmcYf49C%2FFnycgIhALr5DgLqgKTeJuh1z5EGsz2bG91gU1Vn0n%2Bjh2iTUXSMKv8DCHQQABoMNjM3NDIzMTgzODA1IgxAmTX2AsTV1E8q5dIq3ANmQggL3AbSzuOufeAaUHupNImgHr5ekMBGYuVXTVf79Jz289qlR6d4YQPeS20SafqZFOvRjdTTzcElYHbxAKiy%2FixFY%2FG1mkilY4M3D7chYH%2BqgRUV%2FwAjU7UwpPDugp%2BSsmMws2lNX0wbIRMSHlGLm5f%2Bu3Y9FYBwQY6S8kT0kaxWpi4du8l1ntIB5ByAWSJhzZJ58SV3YpDTbhQQhM9%2F09f0P%2BwJYuAMHWVLwgJosjlu3ueYMh1vftzp5rkreFiXjX%2BuHx6sgF1jLaf4DQlM4iOxZ2WTpS6wMIgFphbwDfLxtm3Muljc0MZITuwZeTDo5uCdly6FS5THOssB2xuMAyoxM0Qvd%2FZ%2BzcFseGDFyc6d%2FSQvkBUDZa4ifOF4WRFXdO8%2B%2BZyXTim4YZl3lmXPCzG%2BagVTyzMqTDMN1TR0Jil0FV%2FLxcux8MnIk2FI6mLm3tlO1xiA%2B60IeDlcWM4MMTo%2F6DrDSECiychgF2kd2ruoLNOO%2BmFwWN6Tab8oFlSjKqrUA0%2F7IwWvDzfgUxuTAzm9MHoAh7dfokBVJmVq51SY4KuVViOHeTZP1IsHf8BSnxIRvRVwrylZQyqxjUm8eQtg%2BgtsoE6qVTMmaf1zXcZXhYTbG0bAHuzN5DDgsojKBjqkARY5cBib%2FLTBSZ7el82SRu9KeEGoF0Fv4CYdeQVDmBoSvaoxc5GeEOS7mF%2FZlD65420R%2Fnn%2BfDpIJrRbcI2bghLfEpCHK%2FCHvErq41SgQlMOjKJgy9v07atqdnmtQ%2BYDSzrjAAXrzoFgzerLVnkcIBJ%2B4SZZ76c9q108FstS%2FOz5QDrBqXBYDTNly8UuNue619uBxAGdOm6y7knQe4CULxfolyYW&X-Amz-Signature=8cc6cc6df0830f5b72f8ef06e6b9d8f08512e4a1aebeaede35b501094061a46f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WRH35CL7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T034339Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC0BcoBc7t2Vhltmjwkwh0%2BHRNPTRB2%2BmcYf49C%2FFnycgIhALr5DgLqgKTeJuh1z5EGsz2bG91gU1Vn0n%2Bjh2iTUXSMKv8DCHQQABoMNjM3NDIzMTgzODA1IgxAmTX2AsTV1E8q5dIq3ANmQggL3AbSzuOufeAaUHupNImgHr5ekMBGYuVXTVf79Jz289qlR6d4YQPeS20SafqZFOvRjdTTzcElYHbxAKiy%2FixFY%2FG1mkilY4M3D7chYH%2BqgRUV%2FwAjU7UwpPDugp%2BSsmMws2lNX0wbIRMSHlGLm5f%2Bu3Y9FYBwQY6S8kT0kaxWpi4du8l1ntIB5ByAWSJhzZJ58SV3YpDTbhQQhM9%2F09f0P%2BwJYuAMHWVLwgJosjlu3ueYMh1vftzp5rkreFiXjX%2BuHx6sgF1jLaf4DQlM4iOxZ2WTpS6wMIgFphbwDfLxtm3Muljc0MZITuwZeTDo5uCdly6FS5THOssB2xuMAyoxM0Qvd%2FZ%2BzcFseGDFyc6d%2FSQvkBUDZa4ifOF4WRFXdO8%2B%2BZyXTim4YZl3lmXPCzG%2BagVTyzMqTDMN1TR0Jil0FV%2FLxcux8MnIk2FI6mLm3tlO1xiA%2B60IeDlcWM4MMTo%2F6DrDSECiychgF2kd2ruoLNOO%2BmFwWN6Tab8oFlSjKqrUA0%2F7IwWvDzfgUxuTAzm9MHoAh7dfokBVJmVq51SY4KuVViOHeTZP1IsHf8BSnxIRvRVwrylZQyqxjUm8eQtg%2BgtsoE6qVTMmaf1zXcZXhYTbG0bAHuzN5DDgsojKBjqkARY5cBib%2FLTBSZ7el82SRu9KeEGoF0Fv4CYdeQVDmBoSvaoxc5GeEOS7mF%2FZlD65420R%2Fnn%2BfDpIJrRbcI2bghLfEpCHK%2FCHvErq41SgQlMOjKJgy9v07atqdnmtQ%2BYDSzrjAAXrzoFgzerLVnkcIBJ%2B4SZZ76c9q108FstS%2FOz5QDrBqXBYDTNly8UuNue619uBxAGdOm6y7knQe4CULxfolyYW&X-Amz-Signature=57e251babc24e76611015c707879146b8f61da88e172d0933b3f521b332ef3d8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
