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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VNVILU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0A7vLv64noqFnsSc9%2F%2FZVPI1WbLnheURBQvWIsvptAIgX2IbyIPHycGhlW%2FQGjwpYOSb6RK3k%2BLD%2FsUBUwvVeY8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHN6rtIcUqflUNYTNSrcAxavcDhbLuv7kT4PRJCpqyNlKTh9relVLeXi%2FTdn0P5saionHXbfJ3c33Zn%2F12RgS75vnhtfY3sKnjh0x%2BGMuM7mJFvdObQDaTVSD5Qx5vhVTKt3DdqB86yvisyHzf3ceXMQ8cSx8ny%2FPPJeozJy0chBdo%2Fm7O2xR5frPlUCBqlkzymH1qcYH4gpTXjHqKiHIZEp68MIlmYUtms26GfERZpY0ep1qTRknubD58pTeZt4DRqMg3bi2XQkUWTNBvoisg1ttq5bQcmO8Ipafp9kD%2BI74W6%2FB%2BkSLTH5h37j2gJWq0OFut3vqyFI6ax3h%2Fs%2BRjwlyJ1PazdbXZ2vwPg6DL2IBsdbDCokFSvLW42Po%2BVkzdeAzbpw4wUdsfLChoRkOoK9R5WoDgC2HDxQcsUce2r4bumiMlYD7cujN%2FREOEaisv3U5lRfbCQkc8hfbU8yiUq4p2vsC9B3y%2BkzTy8y3bcVvOAYrtjnLKjUBGoHbAworrbKHzXQ0DvClrFQnvZf7G7wZA%2B%2BK3XXYpZRjjy%2B%2BYnllhaXJ5Bx1zopO3X6oY6pSis5dT%2BkkpQovBCYD3nJSjrc2dCO1jzRs7FI04GrmVf7VclJFnBDhvupwi1DoIevPmPW5XD5L2W%2BBgJ0MJfQ2ckGOqUBwZ%2FDdcJ9nScQmZusGZ3%2FOlM8Hju1uDgS7JgCZPeYk6fGh2lasr5krhiFYmJ%2B2fkknuzVN6MxMp%2FqX4%2BbmMEt3bNc3CTRFGWWKJd43Msl5l9G667nKXUtTC8kSxdh3c0R6H9vMlqdb3Wj4arAr10JxskTA34hcfAIzXyggkuwOD3uDagtxN%2B5XeXtw4qwWIGS8Ijc3aqs658mkqzVq917j7jn61L2&X-Amz-Signature=a56ea96befe7d753fec5db6290b6d7919623eb0c64e2e1cd3b18f90709029701&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X3VNVILU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T064210Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCv0A7vLv64noqFnsSc9%2F%2FZVPI1WbLnheURBQvWIsvptAIgX2IbyIPHycGhlW%2FQGjwpYOSb6RK3k%2BLD%2FsUBUwvVeY8qiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHN6rtIcUqflUNYTNSrcAxavcDhbLuv7kT4PRJCpqyNlKTh9relVLeXi%2FTdn0P5saionHXbfJ3c33Zn%2F12RgS75vnhtfY3sKnjh0x%2BGMuM7mJFvdObQDaTVSD5Qx5vhVTKt3DdqB86yvisyHzf3ceXMQ8cSx8ny%2FPPJeozJy0chBdo%2Fm7O2xR5frPlUCBqlkzymH1qcYH4gpTXjHqKiHIZEp68MIlmYUtms26GfERZpY0ep1qTRknubD58pTeZt4DRqMg3bi2XQkUWTNBvoisg1ttq5bQcmO8Ipafp9kD%2BI74W6%2FB%2BkSLTH5h37j2gJWq0OFut3vqyFI6ax3h%2Fs%2BRjwlyJ1PazdbXZ2vwPg6DL2IBsdbDCokFSvLW42Po%2BVkzdeAzbpw4wUdsfLChoRkOoK9R5WoDgC2HDxQcsUce2r4bumiMlYD7cujN%2FREOEaisv3U5lRfbCQkc8hfbU8yiUq4p2vsC9B3y%2BkzTy8y3bcVvOAYrtjnLKjUBGoHbAworrbKHzXQ0DvClrFQnvZf7G7wZA%2B%2BK3XXYpZRjjy%2B%2BYnllhaXJ5Bx1zopO3X6oY6pSis5dT%2BkkpQovBCYD3nJSjrc2dCO1jzRs7FI04GrmVf7VclJFnBDhvupwi1DoIevPmPW5XD5L2W%2BBgJ0MJfQ2ckGOqUBwZ%2FDdcJ9nScQmZusGZ3%2FOlM8Hju1uDgS7JgCZPeYk6fGh2lasr5krhiFYmJ%2B2fkknuzVN6MxMp%2FqX4%2BbmMEt3bNc3CTRFGWWKJd43Msl5l9G667nKXUtTC8kSxdh3c0R6H9vMlqdb3Wj4arAr10JxskTA34hcfAIzXyggkuwOD3uDagtxN%2B5XeXtw4qwWIGS8Ijc3aqs658mkqzVq917j7jn61L2&X-Amz-Signature=0533262492ac061d9503dda9ecf4041241785de62e181c39a5da93adff5b311f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
