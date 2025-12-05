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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RHOGKYH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6Hc8EAG5IVOxs4HT2LCweerIxytQEYXov6wejQHbYcAiEAj4%2F7mP0OV01OFY3ISGiYi%2BE9DgdYsuIqm3drMSd%2F1p8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDE%2B1ennw4xEBokGc4SrcAzz7lrrz6m0t%2FiPdzIDIwNIaJfexMXnJGnKoAV5pu5OFKHUeg3B3gb24hYJi4BOC9TkzguNQ74Q01NxjkEMe7rKo5d8iETrh5a0KF3lrAqYmjwZ91QmLpzm0kMmXXsMwcoVq3qOcZzhgKOZDRhYUDFT7rVPDAVKnswO4WgVFw%2Fi0Daq%2B0lfZLUV0m4gUZMBQ8f9tfFYjz%2BCBS6XTOIAzuMdbFH7FibY1%2FVtCnsi433YtMTnRxT0cngOWtlb2qTbgR5GnXDFKZjGXAaYiFQburSjcPvfXNXds7aOoEIs8qUP%2BnzjGACPczHbM5LD7UoJ0uwVTr0U%2BFREI%2BzKtrgMOP9Ul4BsowywjRjIM1o2z6aFabmLuCTNrkpI7HNlJBkHyQOYSduxFPUvUhsLEEdCtIsC5kJsSF6O4a6ehsRsy4G8HNx%2BpPshiRkg2gUYSK7wWsUKRzXMkbzyR9oscRqCuyrh2KVZeMpmvn4sRAHW11QilK%2BDApwd9CK6P8yzYy%2BCFpsGcN0pz%2BSYevuYn2Om1NvJbCuF0Wk804dFxiNpTfOy3HmwP8lQunX0FvhTqIJGS9u%2FaHw4DN7MBFFJbgzz42veJrmVayL3gJhGwuX86HE%2FEudFScfWWPiUdrOy%2BMPKLyMkGOqUB4z3IpAKMO3fS6Aund5PkeTajD98bMCGoMTUAQk2hY%2BppkU8%2BIsR0ykybm6CR%2BjFTa4cPvQEZdZ1TbSOveEtA%2Fd0pu75M6vilp9caDeEjoh6obM2RAJUoesiiksX70bJghJjecCM9atod2QECN5Nr0mK00zleZX9KywW7SUcegwoEcqFoN8knGFmpq4mSYTUop8lwe1e%2F3%2FNg%2B0B%2FpB8Z%2FCrfHlq%2F&X-Amz-Signature=e0a501d932f1b96681f2aa78b13ce1700e21bcc7a7de667fa1a030672f338a6a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667RHOGKYH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T000103Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE6Hc8EAG5IVOxs4HT2LCweerIxytQEYXov6wejQHbYcAiEAj4%2F7mP0OV01OFY3ISGiYi%2BE9DgdYsuIqm3drMSd%2F1p8q%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDE%2B1ennw4xEBokGc4SrcAzz7lrrz6m0t%2FiPdzIDIwNIaJfexMXnJGnKoAV5pu5OFKHUeg3B3gb24hYJi4BOC9TkzguNQ74Q01NxjkEMe7rKo5d8iETrh5a0KF3lrAqYmjwZ91QmLpzm0kMmXXsMwcoVq3qOcZzhgKOZDRhYUDFT7rVPDAVKnswO4WgVFw%2Fi0Daq%2B0lfZLUV0m4gUZMBQ8f9tfFYjz%2BCBS6XTOIAzuMdbFH7FibY1%2FVtCnsi433YtMTnRxT0cngOWtlb2qTbgR5GnXDFKZjGXAaYiFQburSjcPvfXNXds7aOoEIs8qUP%2BnzjGACPczHbM5LD7UoJ0uwVTr0U%2BFREI%2BzKtrgMOP9Ul4BsowywjRjIM1o2z6aFabmLuCTNrkpI7HNlJBkHyQOYSduxFPUvUhsLEEdCtIsC5kJsSF6O4a6ehsRsy4G8HNx%2BpPshiRkg2gUYSK7wWsUKRzXMkbzyR9oscRqCuyrh2KVZeMpmvn4sRAHW11QilK%2BDApwd9CK6P8yzYy%2BCFpsGcN0pz%2BSYevuYn2Om1NvJbCuF0Wk804dFxiNpTfOy3HmwP8lQunX0FvhTqIJGS9u%2FaHw4DN7MBFFJbgzz42veJrmVayL3gJhGwuX86HE%2FEudFScfWWPiUdrOy%2BMPKLyMkGOqUB4z3IpAKMO3fS6Aund5PkeTajD98bMCGoMTUAQk2hY%2BppkU8%2BIsR0ykybm6CR%2BjFTa4cPvQEZdZ1TbSOveEtA%2Fd0pu75M6vilp9caDeEjoh6obM2RAJUoesiiksX70bJghJjecCM9atod2QECN5Nr0mK00zleZX9KywW7SUcegwoEcqFoN8knGFmpq4mSYTUop8lwe1e%2F3%2FNg%2B0B%2FpB8Z%2FCrfHlq%2F&X-Amz-Signature=05e8c00270d99fba5795e6f4ad2df53b7f28634e844c75a49ab185b22f13f81d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
