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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOFNRRW7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdN12Lir448LyfqJroOd2NLWpQcB0PWAEt2gb2BivHBAiEArMf04zKP%2F2BjQ1%2Bz4l2kfB2QAmBQTjIYfdZf77%2BydT4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFVODKWl%2BNNa8t7I7SrcAxsd%2B520%2FQuFJeSiGQHd2XLhbSeN4KhNMqHCHjbf9GgbVHJUqvvmUNG9gUklisKc7V%2BEMQYVfvE4kJ8fKUMoHMqhTVRkkU2HCR63OI71%2FeoIRqI4AISux2s0J1IoUwcBSB02vRrhhCt8KVH%2Bo3HelnRiiCf9AYoC0OTK2NfhVbhH7RipMXA2lpDLi7GU1av3Z6Mqq9DwALI4jhZXKYw9HhWOZuePwqm7tHX7MKJV0rVAghmqxcVu%2FvxW%2FdA9XoaencSTZITz1Hi8jT%2BvNza9OmkHgTiCu35EOBTvuOwhpHiBF1EXTg25yZ0Y%2BilNNJwFh72oMtU2PS8oKVi%2FQolM4E%2FR2Y5vQo80dqoJL4JKPJvJbGN5uttQyDv%2Fv3eUQihiehKJASO5c5oetbOVsNveNxFhPn%2BFHHXC4pMsxybGWUwjZIY%2FblYKaXfXyIwsDPMi6Q30aE2Hd3RuUdHjDkwHaFkJGGVIwNhhR623qIjMUYXIsndxyZPjoyij%2BO9OeZZD%2BrAG1Qyf5nzBSH6iXT8LIZ5ZzibaoJX01%2FqDu9enk0WPV1gJ7Pydmr2odRdLvjG9%2Be4v7TB0HcTd4dlPdbql2K%2Fb67ItJPHoNg%2FHldMaIXnsYBJWfjT15OLA583IMK7GisoGOqUBGfp%2B6QDg9OFJr%2BStrlRgg%2BPbOckeOwbaF0cDJGo93eeg8cOQ%2F%2BNj%2Fb8iXn%2BzrSZYDmA3fBhIbS%2FdAtrw5nOtuUQn97MbZJQVlnDaq33qGvuvW%2BeQUEIP7%2FNt8ymT1xDtz0N3wcqcGyPMfNZ58SYr5Z7%2F3RIu7VajdwwzdmXEEoyjYNksWdYqG3IwcPF%2FYxEgS%2FX7qY5qv%2FYRnRjeIypfDiVxkKtU&X-Amz-Signature=321f084cbade51e383fb85289ec23bf4a94d52b6da5b00a02e54d9887021ecc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TOFNRRW7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132126Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdN12Lir448LyfqJroOd2NLWpQcB0PWAEt2gb2BivHBAiEArMf04zKP%2F2BjQ1%2Bz4l2kfB2QAmBQTjIYfdZf77%2BydT4q%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDFVODKWl%2BNNa8t7I7SrcAxsd%2B520%2FQuFJeSiGQHd2XLhbSeN4KhNMqHCHjbf9GgbVHJUqvvmUNG9gUklisKc7V%2BEMQYVfvE4kJ8fKUMoHMqhTVRkkU2HCR63OI71%2FeoIRqI4AISux2s0J1IoUwcBSB02vRrhhCt8KVH%2Bo3HelnRiiCf9AYoC0OTK2NfhVbhH7RipMXA2lpDLi7GU1av3Z6Mqq9DwALI4jhZXKYw9HhWOZuePwqm7tHX7MKJV0rVAghmqxcVu%2FvxW%2FdA9XoaencSTZITz1Hi8jT%2BvNza9OmkHgTiCu35EOBTvuOwhpHiBF1EXTg25yZ0Y%2BilNNJwFh72oMtU2PS8oKVi%2FQolM4E%2FR2Y5vQo80dqoJL4JKPJvJbGN5uttQyDv%2Fv3eUQihiehKJASO5c5oetbOVsNveNxFhPn%2BFHHXC4pMsxybGWUwjZIY%2FblYKaXfXyIwsDPMi6Q30aE2Hd3RuUdHjDkwHaFkJGGVIwNhhR623qIjMUYXIsndxyZPjoyij%2BO9OeZZD%2BrAG1Qyf5nzBSH6iXT8LIZ5ZzibaoJX01%2FqDu9enk0WPV1gJ7Pydmr2odRdLvjG9%2Be4v7TB0HcTd4dlPdbql2K%2Fb67ItJPHoNg%2FHldMaIXnsYBJWfjT15OLA583IMK7GisoGOqUBGfp%2B6QDg9OFJr%2BStrlRgg%2BPbOckeOwbaF0cDJGo93eeg8cOQ%2F%2BNj%2Fb8iXn%2BzrSZYDmA3fBhIbS%2FdAtrw5nOtuUQn97MbZJQVlnDaq33qGvuvW%2BeQUEIP7%2FNt8ymT1xDtz0N3wcqcGyPMfNZ58SYr5Z7%2F3RIu7VajdwwzdmXEEoyjYNksWdYqG3IwcPF%2FYxEgS%2FX7qY5qv%2FYRnRjeIypfDiVxkKtU&X-Amz-Signature=93c97e94e2256e658c33ebe87c6210a911c3c785077b0ac92376e9d6c0ab7e47&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
