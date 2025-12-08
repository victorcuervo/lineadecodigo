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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZX34IOX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGr0NAOBjaeD07CyuUHxtETb2xuCLkckkRX72eG77uxmAiEAoB1uOR2L8P42jMxRzsnOeEwrDo5r4bUz4aSeozpGwhEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDehTRfu23cQ9munaircA%2FnEOaQtFLbEWJtQ1YWknOdB%2BbYUHP42R0QedS99UnT3OKEjgnUiXlcN2sK3kihH7ACmnutrprnGrmGyC0I8FsfvCHC76DYBIEH%2B5zKtNEvGmFTVDh7TndSrirHq1zNZ7%2BtgWD9wEeLfUz4ECfZHVpJ1P3zjbtwBH8HuL04Yjl5Xke2aPzNZkHE8eXXAt0JZszhWnmOV%2FEgChQnsHXsFvXz5uym1HaoPhEzDZUQe9wnzNqM9ebkUqRNYRPDgNh68oBUrfY5aZGpWSv2ZHPTtk98B59g4tYWj32XPUwJ9cNOjObJGltDeuenDdHwnC6b5dKzlF1lWnLBVC2dkx9YPcMk2ZAFNAYL1BnUZxGV4lMVH%2Bjp19xB6PZJepJEgNAEAqv%2B5994kcigG6TWOHhydmB%2BBH0o6CauPwG%2BXxLdgltBSng1dvgD0DIcfsly4ihu6YqJpeDXpljWjGZsEtSsqdvLq0fLUr8pShCcN2hWx%2FrxnjBsGVoNrbNWRHDcBrww7tmNg6ufcXdDulP4m8QxF6bNyT1WhHlX5wRo3q4W0QH5TujCcLyoYOXmLeL2q4mbHBqho76wyrSvRgQ6CGSIUCKmM8Mur5QrKhTclhGz4oeNprKxTxrz6Ysjhhj56MMyz3MkGOqUBf%2BESb2FEEDlgiKuE3v5RW44btCvZM3NkaGUL%2BLsry2hmNZ7AtZ3f6mNeFZRs%2Flz7TNOq0FRDixmmSuHFXDdGjibE6jYYaZxk846H39lixfnfP1gGr37bQfiHlL7WwQ5UVZ4HuVQNdjbKMJ6GUoGdOCqf%2BcqEI62lCIlXxFY8YMutRX%2BXFmXGcJU9yKWHeMXcFqf0yKC73W8aI%2Fszt%2BrYkwF%2BLVo%2F&X-Amz-Signature=38ecc145c56594b8d10c590299cfc6074b6247c54152bb9f6154834891d6ba7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZX34IOX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T190448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGr0NAOBjaeD07CyuUHxtETb2xuCLkckkRX72eG77uxmAiEAoB1uOR2L8P42jMxRzsnOeEwrDo5r4bUz4aSeozpGwhEqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDehTRfu23cQ9munaircA%2FnEOaQtFLbEWJtQ1YWknOdB%2BbYUHP42R0QedS99UnT3OKEjgnUiXlcN2sK3kihH7ACmnutrprnGrmGyC0I8FsfvCHC76DYBIEH%2B5zKtNEvGmFTVDh7TndSrirHq1zNZ7%2BtgWD9wEeLfUz4ECfZHVpJ1P3zjbtwBH8HuL04Yjl5Xke2aPzNZkHE8eXXAt0JZszhWnmOV%2FEgChQnsHXsFvXz5uym1HaoPhEzDZUQe9wnzNqM9ebkUqRNYRPDgNh68oBUrfY5aZGpWSv2ZHPTtk98B59g4tYWj32XPUwJ9cNOjObJGltDeuenDdHwnC6b5dKzlF1lWnLBVC2dkx9YPcMk2ZAFNAYL1BnUZxGV4lMVH%2Bjp19xB6PZJepJEgNAEAqv%2B5994kcigG6TWOHhydmB%2BBH0o6CauPwG%2BXxLdgltBSng1dvgD0DIcfsly4ihu6YqJpeDXpljWjGZsEtSsqdvLq0fLUr8pShCcN2hWx%2FrxnjBsGVoNrbNWRHDcBrww7tmNg6ufcXdDulP4m8QxF6bNyT1WhHlX5wRo3q4W0QH5TujCcLyoYOXmLeL2q4mbHBqho76wyrSvRgQ6CGSIUCKmM8Mur5QrKhTclhGz4oeNprKxTxrz6Ysjhhj56MMyz3MkGOqUBf%2BESb2FEEDlgiKuE3v5RW44btCvZM3NkaGUL%2BLsry2hmNZ7AtZ3f6mNeFZRs%2Flz7TNOq0FRDixmmSuHFXDdGjibE6jYYaZxk846H39lixfnfP1gGr37bQfiHlL7WwQ5UVZ4HuVQNdjbKMJ6GUoGdOCqf%2BcqEI62lCIlXxFY8YMutRX%2BXFmXGcJU9yKWHeMXcFqf0yKC73W8aI%2Fszt%2BrYkwF%2BLVo%2F&X-Amz-Signature=760aa2c18c02a8718dc1fd6cd806b8d7d9c9d3213f568c80d3e7c6ef31e6beaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
