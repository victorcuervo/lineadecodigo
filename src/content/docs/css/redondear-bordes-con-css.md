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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDEAOJWE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEr1dBnk81MoxDEJNkLcLQkk25NnCL0RA4L5jsIm26TZAiEA9G%2FMzGg8%2Fz%2FNjkERKlrHpaQRqOP7A1N5gJ1T6fRzAhsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCIU1pk8cyBRMfipCyrcA%2FQF%2BnwB90hCAacP5XBhrsTNVa7MkT9%2BxT8ZzJHE%2BaaPZR4goxdov%2BSTpUvc4LNFRyY%2B7jd9oOwhk%2BbZQd%2BrrJSjn2wqpk%2B35H800pUkylaPyheikrMR%2BMZTrCfYWm%2F8erHzvNBzwPIJ66ZqCFlV2HArWbS988b%2F22Sx3T9tE6R%2F0S9%2Bnr7gak0WhE2d7IlCQdxYp6J0i47pNTBZavc9eEE9NlXgYxkdI7T5ZZrxWr5UKK4HojQsjfhH53NtXEZJ%2BNiAR0eZ2ab6yxkT%2FSXYwBhnKAtM630dxFAphIie8EwtJRANa%2BUQ2ZfX9lTkXFv5KVQGeVIf211A9vJxndJB1JdchxBH3wxyFdVTg7j0kvJ1zrV0Z04pAydl5O2RYthf1XyByW7lRCK7g%2FJ7yoSKfxMaCBYWRYUbpWziqJyzBqmvNR1qpDAVgnEA%2FwTqyEuR5QW%2Fo1Szsu63giCMwi05x89tlI7Xd7VUQWqc81PHZxO3E9kcBhzNz66kZpaXSyryD0NLvTql9kLrhCKC5BP%2F7Ychx1TloAjzfhHgkZELHaO194tz%2FjsTCvpQqORRA6umhoVxR41QYXQkK0AJEGlgOMt17AErt4ZQtREM9ONaPEluDKwMGSNeir0Z7U2SMMzty8kGOqUBwZfvQwbIxW%2BbGvag27KL6vowUU6Yra1JGDfMUI81k1hAs8nuoHN4c9qgyIvfC2UdHP8caY8WrJ6Vfd%2FhRZG9iSS7tgylJyVQFpCY8oHnm7Py14eKdBDhasi1VC8G55%2FrucWb1JSMwnG4jjotQoJD8tQ1KEVMKu9aFgiahzS43Mv4zOEtu%2Bn1vcsUNh3%2BJGfTiNJUK%2BzFmpKrmUpVlBsMo09VsZrX&X-Amz-Signature=2652f02b5422eaf44e071b29df2ef0c4ea5cdc2f888e71db8b4b3552618f24ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDEAOJWE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T182408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEr1dBnk81MoxDEJNkLcLQkk25NnCL0RA4L5jsIm26TZAiEA9G%2FMzGg8%2Fz%2FNjkERKlrHpaQRqOP7A1N5gJ1T6fRzAhsq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDCIU1pk8cyBRMfipCyrcA%2FQF%2BnwB90hCAacP5XBhrsTNVa7MkT9%2BxT8ZzJHE%2BaaPZR4goxdov%2BSTpUvc4LNFRyY%2B7jd9oOwhk%2BbZQd%2BrrJSjn2wqpk%2B35H800pUkylaPyheikrMR%2BMZTrCfYWm%2F8erHzvNBzwPIJ66ZqCFlV2HArWbS988b%2F22Sx3T9tE6R%2F0S9%2Bnr7gak0WhE2d7IlCQdxYp6J0i47pNTBZavc9eEE9NlXgYxkdI7T5ZZrxWr5UKK4HojQsjfhH53NtXEZJ%2BNiAR0eZ2ab6yxkT%2FSXYwBhnKAtM630dxFAphIie8EwtJRANa%2BUQ2ZfX9lTkXFv5KVQGeVIf211A9vJxndJB1JdchxBH3wxyFdVTg7j0kvJ1zrV0Z04pAydl5O2RYthf1XyByW7lRCK7g%2FJ7yoSKfxMaCBYWRYUbpWziqJyzBqmvNR1qpDAVgnEA%2FwTqyEuR5QW%2Fo1Szsu63giCMwi05x89tlI7Xd7VUQWqc81PHZxO3E9kcBhzNz66kZpaXSyryD0NLvTql9kLrhCKC5BP%2F7Ychx1TloAjzfhHgkZELHaO194tz%2FjsTCvpQqORRA6umhoVxR41QYXQkK0AJEGlgOMt17AErt4ZQtREM9ONaPEluDKwMGSNeir0Z7U2SMMzty8kGOqUBwZfvQwbIxW%2BbGvag27KL6vowUU6Yra1JGDfMUI81k1hAs8nuoHN4c9qgyIvfC2UdHP8caY8WrJ6Vfd%2FhRZG9iSS7tgylJyVQFpCY8oHnm7Py14eKdBDhasi1VC8G55%2FrucWb1JSMwnG4jjotQoJD8tQ1KEVMKu9aFgiahzS43Mv4zOEtu%2Bn1vcsUNh3%2BJGfTiNJUK%2BzFmpKrmUpVlBsMo09VsZrX&X-Amz-Signature=e71caf0654704579ff6e37d43d1d5b0bc90efc32ac8c6d9a095bfc6f4465ce09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
