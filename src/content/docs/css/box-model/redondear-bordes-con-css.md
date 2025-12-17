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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFB3EZSB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSADHkNoN4NmwoJ8laD67H1mOTbIf0ETLM5kj7NvSJUAiEA%2B0OWIDvOGHCwlAV7%2FmWjuWVTdcuYCBP6wN%2F5N2KAqaUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDHU5fKOSvOm6v%2BKICCrcA9t7%2FrH7IuEZFygA0SEWHTrPpDGsHjgSqWW%2BbxdERZV%2FsNXqyO7wfsS9Rv8GTvLr9lqXMC%2B%2BlVQA4G%2BinTkw6%2FwBNk4fRI9YkKZ7MRQ%2FbCjoZw%2B6OWMOYGlvx6wi7pyu7xt7VTZQ9LEbYBDPKOAcD4DwNBWQYlq5%2B9UwYAoWGADIzgR%2Fou7EvsbJN8qBr7hf8BKT6jm1c4TSNyUGlUsKOn31WuSS%2FFW7P93cynxcuBDeB8Bhby66o%2FywCv6xKO9m%2BrLa5U34zbs8UqN1yITH%2BbjDBv%2Fa2xyhLv%2FDZlR%2BP6JAkU4GZb%2BYZp3jVRXpOgF7%2F%2FkaVQQfnvWfc8Bxj%2Bkz%2FGrmj9yO0JPKNLaTiLckNOGJzKyhY9uaEI4aRaaen0sR4M295hVgGPcf%2BvG5uUBl1u0i75ghN%2FexypqyUTNcYMMpl9K085DeEAyKncivNJseKqmTxM3a6yYtYAKQYwpfkA8fMMVDp%2FPH%2Fss5VAM3nY6H9a8%2B2KGuxNv%2BC69Na%2FPdgPe4l0HvQzf3EjbY9QAnA2%2FsIezmRpTwuGmIGHOZpwAo1H9O4bX9BHEhPeCJoJ4WTL08Pll9pjOKxALAQ5MuKrd%2BWeiCgX%2FyUcAQ%2BWnpTuZMC751zmIbwTN7qKEfMLqrisoGOqUBkfo8lRkqHr%2Fh8l%2FzIPytAlmqqPsRx8FeL9%2BM2yqHFCpmgqQLg%2FXEdt6hKHpdI57TrWrG%2FpEr2Dz2FiiwOOIujEvMOv6zLgPQjRhEht1KNu3Lsvi1TqCSvJGmQpY6Q%2FUuZNEBE4SIv7oG2efiSILrUOQAvPZfM3GsZcmzD30iy9TRc0PqcNIkFuDwm14X6MynxLsX8PFeV%2Bcb%2BXS3Eh85ctT3VMKx&X-Amz-Signature=0ed3b3523fb26ff89d5487e008e34a9d52e62999cc3c0b757aec381742a421df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFB3EZSB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T123233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFSADHkNoN4NmwoJ8laD67H1mOTbIf0ETLM5kj7NvSJUAiEA%2B0OWIDvOGHCwlAV7%2FmWjuWVTdcuYCBP6wN%2F5N2KAqaUq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDHU5fKOSvOm6v%2BKICCrcA9t7%2FrH7IuEZFygA0SEWHTrPpDGsHjgSqWW%2BbxdERZV%2FsNXqyO7wfsS9Rv8GTvLr9lqXMC%2B%2BlVQA4G%2BinTkw6%2FwBNk4fRI9YkKZ7MRQ%2FbCjoZw%2B6OWMOYGlvx6wi7pyu7xt7VTZQ9LEbYBDPKOAcD4DwNBWQYlq5%2B9UwYAoWGADIzgR%2Fou7EvsbJN8qBr7hf8BKT6jm1c4TSNyUGlUsKOn31WuSS%2FFW7P93cynxcuBDeB8Bhby66o%2FywCv6xKO9m%2BrLa5U34zbs8UqN1yITH%2BbjDBv%2Fa2xyhLv%2FDZlR%2BP6JAkU4GZb%2BYZp3jVRXpOgF7%2F%2FkaVQQfnvWfc8Bxj%2Bkz%2FGrmj9yO0JPKNLaTiLckNOGJzKyhY9uaEI4aRaaen0sR4M295hVgGPcf%2BvG5uUBl1u0i75ghN%2FexypqyUTNcYMMpl9K085DeEAyKncivNJseKqmTxM3a6yYtYAKQYwpfkA8fMMVDp%2FPH%2Fss5VAM3nY6H9a8%2B2KGuxNv%2BC69Na%2FPdgPe4l0HvQzf3EjbY9QAnA2%2FsIezmRpTwuGmIGHOZpwAo1H9O4bX9BHEhPeCJoJ4WTL08Pll9pjOKxALAQ5MuKrd%2BWeiCgX%2FyUcAQ%2BWnpTuZMC751zmIbwTN7qKEfMLqrisoGOqUBkfo8lRkqHr%2Fh8l%2FzIPytAlmqqPsRx8FeL9%2BM2yqHFCpmgqQLg%2FXEdt6hKHpdI57TrWrG%2FpEr2Dz2FiiwOOIujEvMOv6zLgPQjRhEht1KNu3Lsvi1TqCSvJGmQpY6Q%2FUuZNEBE4SIv7oG2efiSILrUOQAvPZfM3GsZcmzD30iy9TRc0PqcNIkFuDwm14X6MynxLsX8PFeV%2Bcb%2BXS3Eh85ctT3VMKx&X-Amz-Signature=2761d864e1fdd98f3265ab398372b416e845f6d28d73a583f4eacf112aa6fdb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
