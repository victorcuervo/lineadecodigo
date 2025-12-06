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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5H4ANPX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvHCj7IKQBDJwgxpnwfmA8oSSZq%2BKx5S4mhUSZOmspiAIgKgtEfJGlx0OQAi%2B%2FzCXJ4psXf8ZYPKUYa%2BX00FDl%2BMUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLpcXD5iJdUvma%2FeEircAzKTqSMNm%2BoYBvcfh0yhZwOJrfvAWpGJjsbSsOoHnwHQ%2FXhcGwVQr5IF969vXXObXysv%2F0RqCkLF1zwJxIqFXtgFR3mlPffhn6ggKIVwHwsk%2F4EnGMTHlxXoJRSIXIK9Oj6zi42sTnbPzWmxJKTk1%2BHd20%2B5NhGTX0mfHG6r5dnJfEnoOcHNm0BBDOFxjnpHtlOvVtvEViertM75j2Quwk3ajV2qGr4Ac43TqaBOFQdWQwuV7oewXxxmDyKl2IXIIeV6f%2Bb8nkx5RHTrZMhcPFDPE4ozCL4Zxuus1v2VsO0TqLl25VDRyr64Aqzwmn34xMHxaYZud4pyJ8sAqVXew4fPEHM2JjOSRylExFW8Uf%2FXe1WBVgGPId0WJ84moOtZ931zPAV1ZGykGXsgusEBkbO1zyQiIWjM5N7vAF5QYjQMo%2B2OvaZtHr6aQ8BnqaEO5e2cc9X82neasAzmTEKXucnvXbNPoG2Emb9mGdupxUNIfAqYOemdjolMfugbu6GC0RrGylZLOiHiyKGggcGt6dxQMX6%2Fm1ezxWdYpAJLIh%2Bkj528zCTil%2Fn8uTBHSVUhFb7BeXk8SNt764HIFkarDb1%2BRRrtlg1dc88e6oNZDIsqKQC%2BcKUphtQep81EMMiez8kGOqUBLyw2Qr6Do%2FNja7Oj8p3J8b3jUeMisoTzJiK1WBIn8qEyYxFOLz6f1s3hVqQUAqb5f4i2WxwFDjV8rSJOH%2F49uS0JqM6euVX5SBnTBRDLgvwmVliFxKE4czKm6gAB8qBF2lu%2FBBQk%2BGutzzIa3oZh4EhIdQsznL9C6jd7y%2BKXov3IM9vcrXTsD8LT4MgOgTq8zAqYIJkKVNI%2Fqb6P7GN0Zzx99UuP&X-Amz-Signature=eb5aaba7d81a3cfe895cf217b76ee146cc17f29450037b41bbc5ae7fbbbdf3d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5H4ANPX%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070713Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCvHCj7IKQBDJwgxpnwfmA8oSSZq%2BKx5S4mhUSZOmspiAIgKgtEfJGlx0OQAi%2B%2FzCXJ4psXf8ZYPKUYa%2BX00FDl%2BMUq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDLpcXD5iJdUvma%2FeEircAzKTqSMNm%2BoYBvcfh0yhZwOJrfvAWpGJjsbSsOoHnwHQ%2FXhcGwVQr5IF969vXXObXysv%2F0RqCkLF1zwJxIqFXtgFR3mlPffhn6ggKIVwHwsk%2F4EnGMTHlxXoJRSIXIK9Oj6zi42sTnbPzWmxJKTk1%2BHd20%2B5NhGTX0mfHG6r5dnJfEnoOcHNm0BBDOFxjnpHtlOvVtvEViertM75j2Quwk3ajV2qGr4Ac43TqaBOFQdWQwuV7oewXxxmDyKl2IXIIeV6f%2Bb8nkx5RHTrZMhcPFDPE4ozCL4Zxuus1v2VsO0TqLl25VDRyr64Aqzwmn34xMHxaYZud4pyJ8sAqVXew4fPEHM2JjOSRylExFW8Uf%2FXe1WBVgGPId0WJ84moOtZ931zPAV1ZGykGXsgusEBkbO1zyQiIWjM5N7vAF5QYjQMo%2B2OvaZtHr6aQ8BnqaEO5e2cc9X82neasAzmTEKXucnvXbNPoG2Emb9mGdupxUNIfAqYOemdjolMfugbu6GC0RrGylZLOiHiyKGggcGt6dxQMX6%2Fm1ezxWdYpAJLIh%2Bkj528zCTil%2Fn8uTBHSVUhFb7BeXk8SNt764HIFkarDb1%2BRRrtlg1dc88e6oNZDIsqKQC%2BcKUphtQep81EMMiez8kGOqUBLyw2Qr6Do%2FNja7Oj8p3J8b3jUeMisoTzJiK1WBIn8qEyYxFOLz6f1s3hVqQUAqb5f4i2WxwFDjV8rSJOH%2F49uS0JqM6euVX5SBnTBRDLgvwmVliFxKE4czKm6gAB8qBF2lu%2FBBQk%2BGutzzIa3oZh4EhIdQsznL9C6jd7y%2BKXov3IM9vcrXTsD8LT4MgOgTq8zAqYIJkKVNI%2Fqb6P7GN0Zzx99UuP&X-Amz-Signature=8ad7f5658d3287e8cd2f01147cfe51476a9f7af9197a2197826d5c072847a227&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
