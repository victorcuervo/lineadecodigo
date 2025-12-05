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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG5EPH64%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFIZd1wumBn%2FsKV7pUSbeqRO8pN0j4%2BaafA07o1uVPBAiAn%2Fm5A6zkPCfJWfqz6cQo2lMRl7vUAaHC7qxY6cQ1Xfyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM7SYtZ1JLsDvjODdCKtwDAfp1WrxZ5v2zAppS6wjTTokkiR0SLZpKgqu9nzCEYNGbBkjh383A1rtI2SKrgfIosqhLZgyMX7agOSp%2FVHsHAUPmDMh1ysMkj8PTnFZ3ORshybICF1aGIu5LtSLRqwO%2B3YVEAhGoWVfMLXLpUScbD3se9UJI6VP95uuZlR1NGRQhDiD%2BhkBmiqcQ3h9L8nNSA%2BlUqozdQ9Cu7ioYb%2Bd8OfApaZWQnTpoU2HRnJos62GexosFfdVIvBnG08e09IdO%2FqxtpVBGz6K4pJMX0C%2F8NRlzzIDriszqpXk6LeTFyoiGBQVj0SEGaqGOTiyxfBEpovRIkpT3HCFZ6sEkw9l%2FI11BPlMRO7rCDginZAAqVEwwpIkhccy%2BXYRIeyrHmPXpd7AQYnEvI0%2B2IUFruCLiL%2Bn56xahxaWv5%2FzPcw63mxZ8LoXOoVCGSF82WUqrfd6ZR0cd%2BaAXUUI69FTqjpES6nXRr6qaI7yE8fKFQwNh0rqBRb2sbi0AsDpj3I48tMsZLfXCM1kQwAqAyLncU2it9fjvVALRYptHteo5yfdUJs2m%2Fhuta%2FblkX8%2F56W%2BHoB6X1dx2b8XDBDewXqpj7ayx%2Fzo5TTKZM%2FdVMnH5XlLm0PXQk%2FrGdhS6uMYxc4w%2FsXNyQY6pgE1XsLvCe5hQPJEn0gm9BXajXICy%2Fg1a0SmE7G5g%2FUVe%2BFRG7%2F3f%2BU2rm3cdej2zdbHM%2ByCUyP48ooKgcqIdeDCKFb2ISdyZHVzV%2BuS6N7tElKBh0rhVDqpynCStkC2ymMtdxAeoJi5VliAqn8g7xfEHlTD%2FgvbyLWw4Anvk5oQWoV7fm50qtBEFiayfmNXzvitJZX3w%2BLpqrvl435LFZYCv2kbfftO&X-Amz-Signature=0e081765fae330faa57f6ccf345528cd899ecd054a3656546e07da64f3cb1cbf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZG5EPH64%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T234142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFFIZd1wumBn%2FsKV7pUSbeqRO8pN0j4%2BaafA07o1uVPBAiAn%2Fm5A6zkPCfJWfqz6cQo2lMRl7vUAaHC7qxY6cQ1Xfyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIM7SYtZ1JLsDvjODdCKtwDAfp1WrxZ5v2zAppS6wjTTokkiR0SLZpKgqu9nzCEYNGbBkjh383A1rtI2SKrgfIosqhLZgyMX7agOSp%2FVHsHAUPmDMh1ysMkj8PTnFZ3ORshybICF1aGIu5LtSLRqwO%2B3YVEAhGoWVfMLXLpUScbD3se9UJI6VP95uuZlR1NGRQhDiD%2BhkBmiqcQ3h9L8nNSA%2BlUqozdQ9Cu7ioYb%2Bd8OfApaZWQnTpoU2HRnJos62GexosFfdVIvBnG08e09IdO%2FqxtpVBGz6K4pJMX0C%2F8NRlzzIDriszqpXk6LeTFyoiGBQVj0SEGaqGOTiyxfBEpovRIkpT3HCFZ6sEkw9l%2FI11BPlMRO7rCDginZAAqVEwwpIkhccy%2BXYRIeyrHmPXpd7AQYnEvI0%2B2IUFruCLiL%2Bn56xahxaWv5%2FzPcw63mxZ8LoXOoVCGSF82WUqrfd6ZR0cd%2BaAXUUI69FTqjpES6nXRr6qaI7yE8fKFQwNh0rqBRb2sbi0AsDpj3I48tMsZLfXCM1kQwAqAyLncU2it9fjvVALRYptHteo5yfdUJs2m%2Fhuta%2FblkX8%2F56W%2BHoB6X1dx2b8XDBDewXqpj7ayx%2Fzo5TTKZM%2FdVMnH5XlLm0PXQk%2FrGdhS6uMYxc4w%2FsXNyQY6pgE1XsLvCe5hQPJEn0gm9BXajXICy%2Fg1a0SmE7G5g%2FUVe%2BFRG7%2F3f%2BU2rm3cdej2zdbHM%2ByCUyP48ooKgcqIdeDCKFb2ISdyZHVzV%2BuS6N7tElKBh0rhVDqpynCStkC2ymMtdxAeoJi5VliAqn8g7xfEHlTD%2FgvbyLWw4Anvk5oQWoV7fm50qtBEFiayfmNXzvitJZX3w%2BLpqrvl435LFZYCv2kbfftO&X-Amz-Signature=26e3a9f16b55ebfc38b4e7133abd703e73f6bf23f56b9aa096e67483df6f9a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
