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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGS5QK35%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxx725pQ%2Bu43go0BU8%2BzAt1VCK%2FVRV%2F0pc6Q2bCqp3FAiEAitus1AYTUcq9uSExtIAmNsYPavoR7eC%2FfxUhQF843tgqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKW3kZ9s%2FzA%2FZ%2FNgCyrcAw38KkRDXhXYHgmjEvIs%2F1bdCGkJtKEZh35ugBl2LZDI8tvJKKphDuu%2BC6UBv6s3%2BcR6yBpwkvL7vF5VSQVGd3zHvCMLY3PsEl0GmeAq2kOq6QBgKmPSFBoAWl6fx2KTkslL5r8GM9g%2FdV6G8LF4Bg8kBJTOxQTQ5%2BHtV5JKdfyedYDpqKIsF1bjrJp3XVFZwQ0Gl9agL262%2BvIPCByEbnn4M1DuorfzA3cTplyAkAVimUaoA3zCsVLAaTebtqeAAXpXKxILANptoxktOC3coxuFC2ci%2BjeXaEg4xm1gYCqCdOayy1bh%2BGvafpLu1WCTdkvV8KSN%2FBnltkSbsVWrJvkDqYmLynwfPYpjSvY9Dy5fsDBdqIsv0NaJKqNybapfYvCbzxkn1WjlbyAhJq4enf4asnRNijFweKgevhK0cv0XBBLfnrKHsF2bSbBX1Q1fW4BrJoPQCrN5njVa8083nT4tDmivKsgdTft7%2Bq0crp0VdcPPjGsFjqQDE4FYYxvgFM7nNgkrYeA6aWrIzZ5F5IvWvo%2FZLWSMSuUnQkM8EeGvqddUUBTWo4wj8qX6foCbStryatexEVzOEvZZJTnuOFkk2JvaFQTExtDDkkJ41DwjSJHU50FviLUGaho2MLil38kGOqUB94QCGvTgjpSwjIR706pVnlXYY7uOZ29cYqQNBWYX%2Fttk1f8e2Ott4jMvRgz9D942PDf%2FctiHBkELBKj7%2BoaHLtjzY3v4fgxdYnsPAJv5P3Q%2F94gydKfV%2BktzEgCIt3UGhzNR8Ej9X3FKDAviYWnr5JrQemfx24Z%2BblYPdxda%2BS9CvMAVCCCs%2BN%2Btx3KnpYjIINjCX3vYFtfqUQ9a2qC%2FxodcmMG%2B&X-Amz-Signature=678d8a2d5ef1bd11427f827065d10077943c82d391eaa12055ed697bca2b65f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGS5QK35%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T083734Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAxx725pQ%2Bu43go0BU8%2BzAt1VCK%2FVRV%2F0pc6Q2bCqp3FAiEAitus1AYTUcq9uSExtIAmNsYPavoR7eC%2FfxUhQF843tgqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKW3kZ9s%2FzA%2FZ%2FNgCyrcAw38KkRDXhXYHgmjEvIs%2F1bdCGkJtKEZh35ugBl2LZDI8tvJKKphDuu%2BC6UBv6s3%2BcR6yBpwkvL7vF5VSQVGd3zHvCMLY3PsEl0GmeAq2kOq6QBgKmPSFBoAWl6fx2KTkslL5r8GM9g%2FdV6G8LF4Bg8kBJTOxQTQ5%2BHtV5JKdfyedYDpqKIsF1bjrJp3XVFZwQ0Gl9agL262%2BvIPCByEbnn4M1DuorfzA3cTplyAkAVimUaoA3zCsVLAaTebtqeAAXpXKxILANptoxktOC3coxuFC2ci%2BjeXaEg4xm1gYCqCdOayy1bh%2BGvafpLu1WCTdkvV8KSN%2FBnltkSbsVWrJvkDqYmLynwfPYpjSvY9Dy5fsDBdqIsv0NaJKqNybapfYvCbzxkn1WjlbyAhJq4enf4asnRNijFweKgevhK0cv0XBBLfnrKHsF2bSbBX1Q1fW4BrJoPQCrN5njVa8083nT4tDmivKsgdTft7%2Bq0crp0VdcPPjGsFjqQDE4FYYxvgFM7nNgkrYeA6aWrIzZ5F5IvWvo%2FZLWSMSuUnQkM8EeGvqddUUBTWo4wj8qX6foCbStryatexEVzOEvZZJTnuOFkk2JvaFQTExtDDkkJ41DwjSJHU50FviLUGaho2MLil38kGOqUB94QCGvTgjpSwjIR706pVnlXYY7uOZ29cYqQNBWYX%2Fttk1f8e2Ott4jMvRgz9D942PDf%2FctiHBkELBKj7%2BoaHLtjzY3v4fgxdYnsPAJv5P3Q%2F94gydKfV%2BktzEgCIt3UGhzNR8Ej9X3FKDAviYWnr5JrQemfx24Z%2BblYPdxda%2BS9CvMAVCCCs%2BN%2Btx3KnpYjIINjCX3vYFtfqUQ9a2qC%2FxodcmMG%2B&X-Amz-Signature=179a232ffc211a0ff1963b3314b1e2a1e68a9235ed1843f931c10230b9cd0ae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
