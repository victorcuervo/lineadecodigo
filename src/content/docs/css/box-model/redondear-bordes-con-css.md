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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AI4I6H6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuBG0szFtSOr%2FPVn8Cm4Jf4iYM0s7Du%2BpAaOh2%2Fi66tgIgB825Z855Qv7cU89twi42A6oRzx8qkYLdEnyIlWJhDCIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJMMcz%2FittV2iNB%2BDSrcA8WCcFzybncsqfGe3DmeVoNO%2BeRucm5J1D0s9yx0ENFaBszGzzOEhOZ%2FC8ssLtY7BAAeFOK5EZAQoV%2FuHvNaWNZgggG9%2Bwe61iwBw5%2B2O%2FfM2q%2FD50kI0mLbcBEpUljH6Q57bxxc%2BUXRa9zvucQfwUXsHxtLU6HbGWrUdWqnlLCoCHeG2QTaoQMON69BLTSOTsQJFv07r%2Bc8ZWLitr04SNB3qh9oSIkcJEGjl49l4mvGqCXuv9FV6JNnEXkFKmBdvAkkwGvPAZtAH6AN%2BO306Q3QrS7AKynCiGXxSpy00Vi%2BM4vfvZyNlIWYw4tli6O4OMxZq86pWdEyAYN64xSdeo7vE6mqa3gYcXNBQk04FN0ss3R2PiF%2B3kCkTEUsgwL0503CRxqHn4obbrfgLlkoVUsUyDmW0BDu%2Bfzur8E5yLbNz%2FRA0p7jygsKZ5ua52kuK4cKN2V1sSxgWkf5152oWRAnU9Xg8c%2FFzwR%2FnayRItpD3xPKo289o43rYUzx6uyOM5XBsbqS6TUvG%2FPFpBH4kHZp5NdCwnWIdVhPXC66G3f3IQLAhANghgdpd7AqKWMjEndDixOrHC%2BTLjJ%2F%2FyamauhhLI17YX2XntYf7XmivR7n%2BjwxawtZI7DkGTh3MMnhisoGOqUBQxHOgLkqPitrFkaE2mbp7ivNlPLk9RfiGrwdHZIL1oKs321e3MDaHYfDaYho5PKkvSgzDIBOSwkHRyaW8ZtOEqZZYwUCgvOT%2FHcy505A8UiQaB3PqGLFOGpRHoNwTsekHV1cfI42HRciHN7A8Va65f3wp3zDSIhBagOyYJUvypHoo3ZquepUAb60CwZzxfXjw88oJ2y70X5q%2BP6xriQUN006Belz&X-Amz-Signature=9c3cde94f24b0261b571e74b71bc6a394aeb1546bf9865316d14b600b52863bc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666AI4I6H6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuBG0szFtSOr%2FPVn8Cm4Jf4iYM0s7Du%2BpAaOh2%2Fi66tgIgB825Z855Qv7cU89twi42A6oRzx8qkYLdEnyIlWJhDCIq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDJMMcz%2FittV2iNB%2BDSrcA8WCcFzybncsqfGe3DmeVoNO%2BeRucm5J1D0s9yx0ENFaBszGzzOEhOZ%2FC8ssLtY7BAAeFOK5EZAQoV%2FuHvNaWNZgggG9%2Bwe61iwBw5%2B2O%2FfM2q%2FD50kI0mLbcBEpUljH6Q57bxxc%2BUXRa9zvucQfwUXsHxtLU6HbGWrUdWqnlLCoCHeG2QTaoQMON69BLTSOTsQJFv07r%2Bc8ZWLitr04SNB3qh9oSIkcJEGjl49l4mvGqCXuv9FV6JNnEXkFKmBdvAkkwGvPAZtAH6AN%2BO306Q3QrS7AKynCiGXxSpy00Vi%2BM4vfvZyNlIWYw4tli6O4OMxZq86pWdEyAYN64xSdeo7vE6mqa3gYcXNBQk04FN0ss3R2PiF%2B3kCkTEUsgwL0503CRxqHn4obbrfgLlkoVUsUyDmW0BDu%2Bfzur8E5yLbNz%2FRA0p7jygsKZ5ua52kuK4cKN2V1sSxgWkf5152oWRAnU9Xg8c%2FFzwR%2FnayRItpD3xPKo289o43rYUzx6uyOM5XBsbqS6TUvG%2FPFpBH4kHZp5NdCwnWIdVhPXC66G3f3IQLAhANghgdpd7AqKWMjEndDixOrHC%2BTLjJ%2F%2FyamauhhLI17YX2XntYf7XmivR7n%2BjwxawtZI7DkGTh3MMnhisoGOqUBQxHOgLkqPitrFkaE2mbp7ivNlPLk9RfiGrwdHZIL1oKs321e3MDaHYfDaYho5PKkvSgzDIBOSwkHRyaW8ZtOEqZZYwUCgvOT%2FHcy505A8UiQaB3PqGLFOGpRHoNwTsekHV1cfI42HRciHN7A8Va65f3wp3zDSIhBagOyYJUvypHoo3ZquepUAb60CwZzxfXjw88oJ2y70X5q%2BP6xriQUN006Belz&X-Amz-Signature=9c3f203e113b061085d128dbe51b42e01779d78f44bed9f05126cf1c4f8a8fd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
