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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX6KY6M3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR8q3ltZvI5CmxE42JflqtUjQpbktcpuyWB%2B7ZfZTnDAiEA7el70sPJqmBcsThPTUsiclF5ovpRy1rzwZCXwdX6zuAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLHWi5Cv6XTLwvyJEircAw%2BFTDehWTSxX11WQ8ioxR5AMd7ZKKk0jc0agsEDxQdsZ5h6D2JR3Ii%2BvAVkDY7242l2pk2T%2FlJ2AamDSsaAKmy8lhmXlfTWKoSVsJkDvAFXO9rivBnDf2IHjVXplwcrkN1dnr9Kx27jVgim7w6HSx2OLOpi8oE6Iu1J64JuBZMsLF8Jw16Jul7sDgBlm%2BqXJOtwSx%2FtdAY3SEqD2q6WlqEuf6s1lpQVeJT%2FunibPzdVSmJ7d7g4pot7rQR2f%2FtexK0pZqxohVELUTUehdxZ99UhGFmmUYX8HYcd996yqdzZZrOukOWDoivnBOCu7n7x9KBusoJeHMANY%2BMnWjGI5z15w6Y5dAj5Zgy4rU2Ox28Qfif9fFkTuQl%2BID5AJc%2FSeHObB9a72N5jZorRK8%2BX0cjdg9zDpi%2BvLZgnPFfmAk0vZKJ2zg30DAUvNWGptZ%2FJATBK6LOTMcW9%2FLX023Hi9kXCe6U7HvsSbGsBQlu5N92QUKUKLPcH0j9T5QYBH1L4GEwEbNfxbYcS5U3siTZdntWNaVsTNQyu8HbvNaPKxV%2B8wkBu8nPv%2F0v41HymemsGCp%2B4SyUUurzwXhehVsLi287sTZbc9tDgigoy0xAweOGSx1sb%2B5edIAiuOuA5MNzUyskGOqUBf0TcUWXXS8wx6xCGBiovwTPvOQh9gTn2sLa1EeN5O3gndBbp5B7UpyzU8B4K0qY%2FW5uGMxdz757ylF%2FtOUvrv8V%2Bz5d0r1%2FWa8fmt3GtIChztKFmWLIXb8Agzxqq%2FmfHp0aFOuxzJ97Zv4uc8hZvH4bNBAyBtMSEf7SqzKc1p36XDJNlXGPP9ejW23Y9AoJs3O9b9d5FdyDdgiqfWitfegayRbQE&X-Amz-Signature=6fed7e7cbe9f9b90bd50c8027dbef5bae51642eab19e845d4b558ad82beb2b59&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XX6KY6M3%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T130946Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDR8q3ltZvI5CmxE42JflqtUjQpbktcpuyWB%2B7ZfZTnDAiEA7el70sPJqmBcsThPTUsiclF5ovpRy1rzwZCXwdX6zuAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDLHWi5Cv6XTLwvyJEircAw%2BFTDehWTSxX11WQ8ioxR5AMd7ZKKk0jc0agsEDxQdsZ5h6D2JR3Ii%2BvAVkDY7242l2pk2T%2FlJ2AamDSsaAKmy8lhmXlfTWKoSVsJkDvAFXO9rivBnDf2IHjVXplwcrkN1dnr9Kx27jVgim7w6HSx2OLOpi8oE6Iu1J64JuBZMsLF8Jw16Jul7sDgBlm%2BqXJOtwSx%2FtdAY3SEqD2q6WlqEuf6s1lpQVeJT%2FunibPzdVSmJ7d7g4pot7rQR2f%2FtexK0pZqxohVELUTUehdxZ99UhGFmmUYX8HYcd996yqdzZZrOukOWDoivnBOCu7n7x9KBusoJeHMANY%2BMnWjGI5z15w6Y5dAj5Zgy4rU2Ox28Qfif9fFkTuQl%2BID5AJc%2FSeHObB9a72N5jZorRK8%2BX0cjdg9zDpi%2BvLZgnPFfmAk0vZKJ2zg30DAUvNWGptZ%2FJATBK6LOTMcW9%2FLX023Hi9kXCe6U7HvsSbGsBQlu5N92QUKUKLPcH0j9T5QYBH1L4GEwEbNfxbYcS5U3siTZdntWNaVsTNQyu8HbvNaPKxV%2B8wkBu8nPv%2F0v41HymemsGCp%2B4SyUUurzwXhehVsLi287sTZbc9tDgigoy0xAweOGSx1sb%2B5edIAiuOuA5MNzUyskGOqUBf0TcUWXXS8wx6xCGBiovwTPvOQh9gTn2sLa1EeN5O3gndBbp5B7UpyzU8B4K0qY%2FW5uGMxdz757ylF%2FtOUvrv8V%2Bz5d0r1%2FWa8fmt3GtIChztKFmWLIXb8Agzxqq%2FmfHp0aFOuxzJ97Zv4uc8hZvH4bNBAyBtMSEf7SqzKc1p36XDJNlXGPP9ejW23Y9AoJs3O9b9d5FdyDdgiqfWitfegayRbQE&X-Amz-Signature=b5141fd42567ff7406e80b79ba6163ce18f6cd869a605e394eb4bd802aaa8ee5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
