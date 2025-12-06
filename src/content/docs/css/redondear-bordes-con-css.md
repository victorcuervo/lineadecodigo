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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7ZFCGOX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6qWC12vtUGOojGldcblbKdKhUfdLZJB52Kw8JIyB3egIhAMQdAvmskbtzJPgZtXiImSuvPacc0sUfOax0P8ZwFCNqKv8DCHoQABoMNjM3NDIzMTgzODA1IgyYTa1pZFCjER%2Fxcqoq3AM25dw%2F0ndmgwkd1Q9O16VA3zuQdo8TZiEpkKI%2FqHELQe%2Bc4Isbxad14WaIDS%2FIZd%2B57rcyeWdMTSH%2BNpom2sl7A9P%2BmKP%2BGpFkyXWqXj9HhKSGrdxv6PAwt%2F8AjWn%2FxS8%2BqItAoddJylQzP8N04e5TFF6sSFYq%2BbyPnBQkxWVpWB%2FVvS67%2BTgwKFPE2ApQ0%2FV9Hq2iTjpT%2BB%2F8l9gk3UBYyUd%2BoUZNWAExqEi1o%2B8I%2Bgk7PIF%2Fm436SdcJ%2BC5PtvW6ortJkE0tXaWYpnq4qjqV31imJASoRVWoLmrS3XHRVZ7XTTloJ62ebXgRDddktbfnI3LeB9HIE0YjWjVgaUI21L6ST8ryOj5pJ%2BF3Mc6vBiibIUt8UMkFU0u8G59Kifbyy7RIHYgeYR3K3e%2Ff0v4bVHIIpkQUE5ojg9HrSdidmzI%2B62cOr0bNJU2IxvbPaNga%2BZrIBBmJ3rLToSxBsZqSfMvpjiX%2FWxS2iPqCUEPPUm3IEFW3SxxzVO1G%2BwdxiM4rV0DsevFyMzLOpMynbtfbiz0HgoppVNXpKfUdd6iVByvM9AC1WnofAuCLcWMkdnUiG0fcVMjWgWbG2Rscxf%2F28T%2Bcl%2Fsv9tJpU0BjEkYdLiNPFEglaQuVD49nsTDlwdHJBjqkAYuy17O2LNkwr0yXfeGOYeaZxdOQmz8VGIZkOxYoUk169kywHfiQIKaoxXlUwyfTE2F3klcZqpUsblU4X7E8dmHnOKafetpNMSqqJh8VxQHvDf42u2chpqMx4omvYLPGSfLGAHRQe2qegR0YajaVdXeNYrU%2F%2BfTJB4P2C%2Ftdxx0zHkNCi5kw4KQY%2FO9%2FRNdByFCrSvgHL7K7%2Fiehau3Crpnjfy7q&X-Amz-Signature=27dfcf4b6307d5bcb16f9b19d3e8e780911a1c8fa0c6bead595e9df6ebd0ea84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7ZFCGOX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T183347Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6qWC12vtUGOojGldcblbKdKhUfdLZJB52Kw8JIyB3egIhAMQdAvmskbtzJPgZtXiImSuvPacc0sUfOax0P8ZwFCNqKv8DCHoQABoMNjM3NDIzMTgzODA1IgyYTa1pZFCjER%2Fxcqoq3AM25dw%2F0ndmgwkd1Q9O16VA3zuQdo8TZiEpkKI%2FqHELQe%2Bc4Isbxad14WaIDS%2FIZd%2B57rcyeWdMTSH%2BNpom2sl7A9P%2BmKP%2BGpFkyXWqXj9HhKSGrdxv6PAwt%2F8AjWn%2FxS8%2BqItAoddJylQzP8N04e5TFF6sSFYq%2BbyPnBQkxWVpWB%2FVvS67%2BTgwKFPE2ApQ0%2FV9Hq2iTjpT%2BB%2F8l9gk3UBYyUd%2BoUZNWAExqEi1o%2B8I%2Bgk7PIF%2Fm436SdcJ%2BC5PtvW6ortJkE0tXaWYpnq4qjqV31imJASoRVWoLmrS3XHRVZ7XTTloJ62ebXgRDddktbfnI3LeB9HIE0YjWjVgaUI21L6ST8ryOj5pJ%2BF3Mc6vBiibIUt8UMkFU0u8G59Kifbyy7RIHYgeYR3K3e%2Ff0v4bVHIIpkQUE5ojg9HrSdidmzI%2B62cOr0bNJU2IxvbPaNga%2BZrIBBmJ3rLToSxBsZqSfMvpjiX%2FWxS2iPqCUEPPUm3IEFW3SxxzVO1G%2BwdxiM4rV0DsevFyMzLOpMynbtfbiz0HgoppVNXpKfUdd6iVByvM9AC1WnofAuCLcWMkdnUiG0fcVMjWgWbG2Rscxf%2F28T%2Bcl%2Fsv9tJpU0BjEkYdLiNPFEglaQuVD49nsTDlwdHJBjqkAYuy17O2LNkwr0yXfeGOYeaZxdOQmz8VGIZkOxYoUk169kywHfiQIKaoxXlUwyfTE2F3klcZqpUsblU4X7E8dmHnOKafetpNMSqqJh8VxQHvDf42u2chpqMx4omvYLPGSfLGAHRQe2qegR0YajaVdXeNYrU%2F%2BfTJB4P2C%2Ftdxx0zHkNCi5kw4KQY%2FO9%2FRNdByFCrSvgHL7K7%2Fiehau3Crpnjfy7q&X-Amz-Signature=a8f8bd59aa565d727caddff051bb9637c23e5ab967372a9767b955e987056390&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
