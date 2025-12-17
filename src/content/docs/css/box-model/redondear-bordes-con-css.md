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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4JPU3F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSOv7AE5RO2w3gQ1jSUEhgZNTSj%2BLkeT4EmBg88yYUUgIhAN0d9c7IFZO2KXxODgjuniPXtQcmhHRvE%2FivH0Xal7e2Kv8DCHYQABoMNjM3NDIzMTgzODA1IgxyEGMY2uJ0%2BRAXoTUq3APEgvABjNDmYFEfMl1jh7ZMt%2FLqKlwrEAkfhtLrzOhUn31tkJX1KNTQdFuJUnR7SSDfSc9T6TpeDLz7iEsDx7qxHoeMIHQ58gzexbeRd3RP%2BD6qzLFMlEXD6lc0tyHVgfbGdo9LTyImbdV3FPQ5Kl6K2WPdJcliXf%2B5kCQN2BXAoT%2BmbaO0ujvlBy9jhUdAbh8WLG9GSMb6mly0kWMhJVkT%2FIVTu9xS8jNIZw%2BX1q9CI5DcKUjTlJV3l5flujfJX6jw9DCdT2UAtVPflx5Y6WQeDdkuu2S%2BKHj28UDm%2FLwQnTvXMtUb7oGWqL5DCBjZy6SMYWbUdL49LE1trZS5bF4wUaQPVPWrliVwdNWavv3iWLIdkpXA3%2FETqOjd33AVNM%2BCfpGF36fxsH318Uq3r6drH5sAgHUvpOHP3PWBj9bzg5nir%2FIvm2lH6IKr6vIRoF6H2KuB8hOnwmAacLei47KDsUyewiwPX%2FswdG6bzIUg4g%2BaFqJevWAI6s%2BcWay0HVzPQoScoxZPocwGPs55GgeDdJ9W9%2B%2FpSDwbPy0o1NUfpaMEL6%2BzFKlUOspJLt4Ft9mdPLUYz2hG01Ec9XovlMzCePzmt6py9oCkrXYRkR3BwDGEgpMNTTkIBInm7zD06YjKBjqkAehpyLg%2FetUuJeXZQjg6EXduaMskG5mJxYm0%2BGq5ZJXC6r11p6g0RaTklcDRFgm6rCm%2FTKrlLUWou6azyKaYw%2FN62FqqqrD7LQ9vSXLcNV0IP%2FFVhGgjZMANC4WuPy106EqEoBEsA7cD%2FGmXxmO0DOsIMdXK4X33B9HmBsPTEhZ6tZwK1ir9o0FxNCuoZsNnVjt2xu3kcpOWEgGaH%2FHxRDMDpv6%2F&X-Amz-Signature=7666437afb574598eec8a290b0ba51f4cc759c64ca95669ac02f471e8bb363d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YH4JPU3F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSOv7AE5RO2w3gQ1jSUEhgZNTSj%2BLkeT4EmBg88yYUUgIhAN0d9c7IFZO2KXxODgjuniPXtQcmhHRvE%2FivH0Xal7e2Kv8DCHYQABoMNjM3NDIzMTgzODA1IgxyEGMY2uJ0%2BRAXoTUq3APEgvABjNDmYFEfMl1jh7ZMt%2FLqKlwrEAkfhtLrzOhUn31tkJX1KNTQdFuJUnR7SSDfSc9T6TpeDLz7iEsDx7qxHoeMIHQ58gzexbeRd3RP%2BD6qzLFMlEXD6lc0tyHVgfbGdo9LTyImbdV3FPQ5Kl6K2WPdJcliXf%2B5kCQN2BXAoT%2BmbaO0ujvlBy9jhUdAbh8WLG9GSMb6mly0kWMhJVkT%2FIVTu9xS8jNIZw%2BX1q9CI5DcKUjTlJV3l5flujfJX6jw9DCdT2UAtVPflx5Y6WQeDdkuu2S%2BKHj28UDm%2FLwQnTvXMtUb7oGWqL5DCBjZy6SMYWbUdL49LE1trZS5bF4wUaQPVPWrliVwdNWavv3iWLIdkpXA3%2FETqOjd33AVNM%2BCfpGF36fxsH318Uq3r6drH5sAgHUvpOHP3PWBj9bzg5nir%2FIvm2lH6IKr6vIRoF6H2KuB8hOnwmAacLei47KDsUyewiwPX%2FswdG6bzIUg4g%2BaFqJevWAI6s%2BcWay0HVzPQoScoxZPocwGPs55GgeDdJ9W9%2B%2FpSDwbPy0o1NUfpaMEL6%2BzFKlUOspJLt4Ft9mdPLUYz2hG01Ec9XovlMzCePzmt6py9oCkrXYRkR3BwDGEgpMNTTkIBInm7zD06YjKBjqkAehpyLg%2FetUuJeXZQjg6EXduaMskG5mJxYm0%2BGq5ZJXC6r11p6g0RaTklcDRFgm6rCm%2FTKrlLUWou6azyKaYw%2FN62FqqqrD7LQ9vSXLcNV0IP%2FFVhGgjZMANC4WuPy106EqEoBEsA7cD%2FGmXxmO0DOsIMdXK4X33B9HmBsPTEhZ6tZwK1ir9o0FxNCuoZsNnVjt2xu3kcpOWEgGaH%2FHxRDMDpv6%2F&X-Amz-Signature=356d8c71a8402ac4ff6049108af2484bb2cb1ce1aea9ee71732a7de4a98a2c53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
