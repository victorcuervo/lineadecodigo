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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOM24ETD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNoWpY5nrvj3%2B%2FDklTwcbX1RF9zNeF5XzFXoYQhvMbYgIhAPfkFM5T%2FB8sISkZsGo9aClinuKp%2BUKKZc3GikSDcRNzKv8DCH0QABoMNjM3NDIzMTgzODA1IgyMAGdT4iumBVZuVQEq3AODGcc0C8kpTKPCrjobm99TJBWGbsj%2BYXB8kMBLTEmVHvEytVxKFMVd2tLlLZR3vZmGpiBAh5dPjtcS7XdHPwdt4GWW7OV9Mal8EpskwqepmmXH3OtfzBdkjhIfr76Jkx7WtCCofkRmuNtKbq8oArsxOxGXnLASNR8dywc8DWEQPSohw0uLnjqIaDp1g9hzGa9lR%2B5lqw5%2B08nf4%2FfBoAtYDi3cvGQ9m7QUhy8lQ25FKtGfRFwkx5%2FVbIBMOhQ0PpH3F%2BRXNbPpvVEIYiQ3FwUeqiLqrv2PJpTDPeDaQSaXtlgTknnrxBh7%2FIVQqXiu7ZNMJS01TCFI5YZp1j0JYOkQDwqibp0hw8vK%2BeJ2wjLre1D1gkH3nOJ5zGnxusfe04pAsxNVQY9RRx4JGCXf5BLG%2Fntzx%2FdMakfdaAa5quL9leCpt5N4KTCe8Wh4kTQv6QNKY6JniRh%2FjjV5JAipsq4QHL%2BZaMDVLecEepg4qS51DbD0idi1sPwDvBktbQ6jxTL7X7L0%2FY%2Fu6PrQ2Fp9kExwitl3P8cFBKnWbsj5B82yjrjc%2FsykDIWBG540bsrOTSXdykoY2HB%2F0igpVLVkiCaGNyO3AaKfzo91E862PuMxv5234kSBK1r3Cafc0zDpqorKBjqkAeUr2eEzOihnFnY8CqIcIV8Aj2b5sdF8QMmpQVGXTKaPBCyqKQJ0Koz31wW90p6PaauxxAQrOBLnko4PX6%2B1k31XhIC%2BLTejKq6OZCUiNhWJtTfUh94Vy1SkLoh9Me72vSjA2XFjvWIit%2F21PUTOuzQEd5mQcfFoCbzWdUBJKQBtDAHTq1p2UrbFG%2FuMfnFsmCa5x51BP5iAMfhTwXHe1apsZfdw&X-Amz-Signature=07839baba92fdd4a34d7f49bed35dd49c5442219b149408002d5745241c4c861&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SOM24ETD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCNoWpY5nrvj3%2B%2FDklTwcbX1RF9zNeF5XzFXoYQhvMbYgIhAPfkFM5T%2FB8sISkZsGo9aClinuKp%2BUKKZc3GikSDcRNzKv8DCH0QABoMNjM3NDIzMTgzODA1IgyMAGdT4iumBVZuVQEq3AODGcc0C8kpTKPCrjobm99TJBWGbsj%2BYXB8kMBLTEmVHvEytVxKFMVd2tLlLZR3vZmGpiBAh5dPjtcS7XdHPwdt4GWW7OV9Mal8EpskwqepmmXH3OtfzBdkjhIfr76Jkx7WtCCofkRmuNtKbq8oArsxOxGXnLASNR8dywc8DWEQPSohw0uLnjqIaDp1g9hzGa9lR%2B5lqw5%2B08nf4%2FfBoAtYDi3cvGQ9m7QUhy8lQ25FKtGfRFwkx5%2FVbIBMOhQ0PpH3F%2BRXNbPpvVEIYiQ3FwUeqiLqrv2PJpTDPeDaQSaXtlgTknnrxBh7%2FIVQqXiu7ZNMJS01TCFI5YZp1j0JYOkQDwqibp0hw8vK%2BeJ2wjLre1D1gkH3nOJ5zGnxusfe04pAsxNVQY9RRx4JGCXf5BLG%2Fntzx%2FdMakfdaAa5quL9leCpt5N4KTCe8Wh4kTQv6QNKY6JniRh%2FjjV5JAipsq4QHL%2BZaMDVLecEepg4qS51DbD0idi1sPwDvBktbQ6jxTL7X7L0%2FY%2Fu6PrQ2Fp9kExwitl3P8cFBKnWbsj5B82yjrjc%2FsykDIWBG540bsrOTSXdykoY2HB%2F0igpVLVkiCaGNyO3AaKfzo91E862PuMxv5234kSBK1r3Cafc0zDpqorKBjqkAeUr2eEzOihnFnY8CqIcIV8Aj2b5sdF8QMmpQVGXTKaPBCyqKQJ0Koz31wW90p6PaauxxAQrOBLnko4PX6%2B1k31XhIC%2BLTejKq6OZCUiNhWJtTfUh94Vy1SkLoh9Me72vSjA2XFjvWIit%2F21PUTOuzQEd5mQcfFoCbzWdUBJKQBtDAHTq1p2UrbFG%2FuMfnFsmCa5x51BP5iAMfhTwXHe1apsZfdw&X-Amz-Signature=87ac076791f05d21d4a04a752f6b36bafd4207d9ae4b6175c151d318a2de0003&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
