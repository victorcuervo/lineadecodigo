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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2OEMEO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCk3jKmoNWc21%2FnxbbJuGy3fRl1sEPC0avJLOCgT8PLkQIhALOWvvzTeuRYmeHsyrvB0IuBAb7A8D66uIvnpBiYCmBxKv8DCEgQABoMNjM3NDIzMTgzODA1Igw4tRU8SUymbXrVAOwq3AOTS0oJMtgFsXpZSa%2FLfQwjqAVDiFc52v8F8jdKZ8zfYquBRFPZmAqankw4H087q7dpLSX3AMil85DfJ80qYvSejuZW7fTiXaY0xNhe0fqF6Lo2WyKrC3BqR7AM88RnnFaNAfL5VY6LcemQ4WfRoFAyGZYLZ8xyD5lbZOIn6WmSbynztCq4nWdO7GBb%2Faa7C5qPln0YXOfDzwU1tHzUmgsc9ot72xxp9Di7Wkb%2F%2FY%2BJA5yQRSQjI2fxzjrvgrmrFaZL3jAupS%2FlejJ%2F%2BhDHtg1z13HC4Ut%2FIHTQL1bhytClWTtgGlV6QhPzbW59cKQSUsRxSnvHyt0hc%2F0fl5MoIuIfvP6ed90JOaPAUvfJaeFtPeAP4fQqtEFFWhQQYCyUVTsSSTYYbLsGhOmHkwTkKxkad5cbIJt7BucO1XAoLvG%2FqvXLvPgOBU8ZTE5CU8OD25TWKUWpH6JK1ILVWNfsk0IJCso632YzWVbq%2Bt09toS7CdPOO%2FHWFugsNxiReUlX03UzAJdefSJSJ%2FcIajUZ7Rg1%2FpuPkBNqQRiBCs6zgvMwowfLsfoP9yM%2F4MrH1zo5V0p18LLCuALWX1T9R4yZjP%2BUXpsaeeIKtdYuGeT%2Ftj9X3wzTHwJgrhCb%2BwXirTCTwMbJBjqkAYqbe5k7UzXI%2F5DLZpp%2BwtRgkJPSBf3aZz%2FMl%2FHh5hPJsfaffKZT%2Fp8AgiAq%2B6R9kNZnQp2SC5pb3uba0WOmQQT%2FWmAeRUzE2o9jBN%2Bm3GDSxC4F8kxPliMXm3olPq6XFwuZESg%2B9PpoM7Xng5zWtC1jmNFBbsMebD8g4oDnXg5VxI0kE9h6oNZVRlPLnSmIdnL8MNvmTZtciVhGWRUbRdPuSGR7&X-Amz-Signature=47e72a97db15442b4401e7909429f21c6a02156e230a4bc88a6e82c6377bd068&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664F2OEMEO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145551Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQCk3jKmoNWc21%2FnxbbJuGy3fRl1sEPC0avJLOCgT8PLkQIhALOWvvzTeuRYmeHsyrvB0IuBAb7A8D66uIvnpBiYCmBxKv8DCEgQABoMNjM3NDIzMTgzODA1Igw4tRU8SUymbXrVAOwq3AOTS0oJMtgFsXpZSa%2FLfQwjqAVDiFc52v8F8jdKZ8zfYquBRFPZmAqankw4H087q7dpLSX3AMil85DfJ80qYvSejuZW7fTiXaY0xNhe0fqF6Lo2WyKrC3BqR7AM88RnnFaNAfL5VY6LcemQ4WfRoFAyGZYLZ8xyD5lbZOIn6WmSbynztCq4nWdO7GBb%2Faa7C5qPln0YXOfDzwU1tHzUmgsc9ot72xxp9Di7Wkb%2F%2FY%2BJA5yQRSQjI2fxzjrvgrmrFaZL3jAupS%2FlejJ%2F%2BhDHtg1z13HC4Ut%2FIHTQL1bhytClWTtgGlV6QhPzbW59cKQSUsRxSnvHyt0hc%2F0fl5MoIuIfvP6ed90JOaPAUvfJaeFtPeAP4fQqtEFFWhQQYCyUVTsSSTYYbLsGhOmHkwTkKxkad5cbIJt7BucO1XAoLvG%2FqvXLvPgOBU8ZTE5CU8OD25TWKUWpH6JK1ILVWNfsk0IJCso632YzWVbq%2Bt09toS7CdPOO%2FHWFugsNxiReUlX03UzAJdefSJSJ%2FcIajUZ7Rg1%2FpuPkBNqQRiBCs6zgvMwowfLsfoP9yM%2F4MrH1zo5V0p18LLCuALWX1T9R4yZjP%2BUXpsaeeIKtdYuGeT%2Ftj9X3wzTHwJgrhCb%2BwXirTCTwMbJBjqkAYqbe5k7UzXI%2F5DLZpp%2BwtRgkJPSBf3aZz%2FMl%2FHh5hPJsfaffKZT%2Fp8AgiAq%2B6R9kNZnQp2SC5pb3uba0WOmQQT%2FWmAeRUzE2o9jBN%2Bm3GDSxC4F8kxPliMXm3olPq6XFwuZESg%2B9PpoM7Xng5zWtC1jmNFBbsMebD8g4oDnXg5VxI0kE9h6oNZVRlPLnSmIdnL8MNvmTZtciVhGWRUbRdPuSGR7&X-Amz-Signature=02d72bd8fd8d54ffcdf9a4a8f90c3d4308ad7e61a6032aaf1cbe450bba163604&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
