---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHV44K7V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCE6pS8KHbJj%2BGSkIFfjG794zx5V%2FZ9Eg6c%2BpRnJMFnCQIgYbIsxwrwv57%2BB9RsW2mQALRVz7RAroKNj2EZU%2BP%2B%2B6oq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDF%2F%2BmDZtJFl5ptu6ECrcA0pPZ2dBiVxvlMGC7D7BFfFtmWl%2BBLHyB9ZE5x15hzFU6lyf3z%2FXDdiK3nuNCtpHMoZ2Od%2Bds3PytvIzy6mbud%2F5rlKGlKfxlbpJme12x5uN6CT5C6U5ygcqq8eW5OclGT1ttgOoYXzKz2G6gJ7jj9LFsyzd4LLA5jnXn8HXVdITZnS6Ll3fNc17s81SZEkX%2FAFVQWCejH2FTjwaxraDHLgbEkYOymxg5qzdxZW43dRg8Y9q0Phh6UoVKNFDBTr84Cmwtmvjv03nN8Cl3vJ2UVoUF94EqYrH7up8IoepbUaem32jx%2BDrr%2FDBL1PUTXO4OKwji1BKscAsoG5mbNCoQq0Nsk0xvb2FcGJ2bE6%2Fe4RNBlnxqahaZsXloB4CaC96sN0Ws7Yoe2CIbK6Mnj0G0W%2BXETfgMehgqgNnSVdxDdDrr7FnJpdCw38VWkPitPJXUREOADicSYp0PGisAIlVzrL%2FpHLUbX%2FLxtClhMk1HOctmzrbU7aUt0WsgQYc0%2BGGocPmftH1uhpzZxB59y%2BY4wc%2FDW4sPAWUzE07H4U%2BQ%2FaaEn6SHRRQgKlzw5KtqQq35AnpOzy%2B2Yf96DVisMrw%2FtzFFqWLo%2FHJ8Rt8IegWO3%2FepTuL0NkLNb28C%2BzgMP2hxskGOqUB5Yn2qag9kN%2FSu6wM8%2BsfTgodwIyni8VrrwtpUZ9jYk1cHBK6IgYwztcJGWos5Xxy4ssZRNlwM3nrAXhjezJrrjJl2jRGk9kX6Hnxd3jZ4UIVbqQqzX9PgU3n6PagryClKam1MpGSzmGs77Yh%2BKScnCHwuWrWdAL5GNU2FR5SxD9yxKwpgr6eYUmLQPu6KP5aj4etcJs%2Bf9sUUddSqaos8gJa9EFH&X-Amz-Signature=b73beddccb9b6bf8bff4c715ce7bf0f36bbac993a43101371b77f9fffe20ebb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHV44K7V%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143724Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCE6pS8KHbJj%2BGSkIFfjG794zx5V%2FZ9Eg6c%2BpRnJMFnCQIgYbIsxwrwv57%2BB9RsW2mQALRVz7RAroKNj2EZU%2BP%2B%2B6oq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDF%2F%2BmDZtJFl5ptu6ECrcA0pPZ2dBiVxvlMGC7D7BFfFtmWl%2BBLHyB9ZE5x15hzFU6lyf3z%2FXDdiK3nuNCtpHMoZ2Od%2Bds3PytvIzy6mbud%2F5rlKGlKfxlbpJme12x5uN6CT5C6U5ygcqq8eW5OclGT1ttgOoYXzKz2G6gJ7jj9LFsyzd4LLA5jnXn8HXVdITZnS6Ll3fNc17s81SZEkX%2FAFVQWCejH2FTjwaxraDHLgbEkYOymxg5qzdxZW43dRg8Y9q0Phh6UoVKNFDBTr84Cmwtmvjv03nN8Cl3vJ2UVoUF94EqYrH7up8IoepbUaem32jx%2BDrr%2FDBL1PUTXO4OKwji1BKscAsoG5mbNCoQq0Nsk0xvb2FcGJ2bE6%2Fe4RNBlnxqahaZsXloB4CaC96sN0Ws7Yoe2CIbK6Mnj0G0W%2BXETfgMehgqgNnSVdxDdDrr7FnJpdCw38VWkPitPJXUREOADicSYp0PGisAIlVzrL%2FpHLUbX%2FLxtClhMk1HOctmzrbU7aUt0WsgQYc0%2BGGocPmftH1uhpzZxB59y%2BY4wc%2FDW4sPAWUzE07H4U%2BQ%2FaaEn6SHRRQgKlzw5KtqQq35AnpOzy%2B2Yf96DVisMrw%2FtzFFqWLo%2FHJ8Rt8IegWO3%2FepTuL0NkLNb28C%2BzgMP2hxskGOqUB5Yn2qag9kN%2FSu6wM8%2BsfTgodwIyni8VrrwtpUZ9jYk1cHBK6IgYwztcJGWos5Xxy4ssZRNlwM3nrAXhjezJrrjJl2jRGk9kX6Hnxd3jZ4UIVbqQqzX9PgU3n6PagryClKam1MpGSzmGs77Yh%2BKScnCHwuWrWdAL5GNU2FR5SxD9yxKwpgr6eYUmLQPu6KP5aj4etcJs%2Bf9sUUddSqaos8gJa9EFH&X-Amz-Signature=2ca8ed6a05a995d7848a0337b072d4c626aefc447008c80b1d595a9773d85462&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
