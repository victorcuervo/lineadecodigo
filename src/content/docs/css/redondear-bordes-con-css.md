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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVGVDL5Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQjiGaa858BmWj9jWE7owzEVIiLJuGsMfXqE%2F2jixeMAIhAJwzpeLYyjzBSgG%2F1HUCKV0pxMRSmK6G%2FCwguEFsjtu7Kv8DCHUQABoMNjM3NDIzMTgzODA1Igx8%2FmothntV%2F6%2FfVpMq3AO8KU3WEi6jxaUT3PZjk%2BCDqpYcv8z34IatvVakAk%2BcrwWaSyhT6phGKwwACeiqhTwtE7BOPcV9D647vfUz1hiW6ecGLoV2qL6p%2B61ETgbB7LkMytFRqR2ujHxrS90THyvR68IYaFgtin4Gx160Fxxhbqt9JBU0%2B%2BV230ED%2BQiDXh%2F87%2FNfCjPPK5grH433CuLrqFLkQXV%2B%2Fc2J4gT90FuwKr652W%2BsCGZ4CFLpkEUDlgcdl6IoiIcv6BaS2LJG8KAZg6z3Wu19rjYeKkr4OP74X3iyNQx0ReF8AgdLwMTamguMXadsbEYcsBK1df15L%2BVo96GQKlfNcpkPi6J%2FOfX462f6sr%2FQfBkaJOtN89073S8XLtc7zvLo4Y6XPrFi85MPl9PtR9zrHmHXeHWESOaOz55kedvTMpjOXe%2F3CXMeUwb7bzSVNRPOxER9EAlknQUPBqKKKMDNcrXyATSPkmYR8Gzg38f2Cl5gJmz1v9dRN%2FCHvvJfrZxA9uAwseKqRVUjt1nmN7jXE8Fz4Q9WdlePnZKOB%2Fpyojydj4pko7%2FSGNtdhwfH1JvAVZbGs6HUzPj7K5vouW92HCGFuze8fNv2wB1E1If8dShNMsFuc6jD0HKiCi6b0AK4wDFr%2BjDGptDJBjqkATi6GGoRS7AquLCdakb3zHnjfcB21vv2auLZDJZaAJJZafuKsNJ9bj%2BuMH33XQZ6jlNj4ANp5Mn1Kp3fyjJmvQ6p423YJyDbqSV4czZCAoFZq2JaX8fW0xcq48PjiIEYuIRJeD6FOzhcRjQyrbjlQIqRlaOuGX3snUAGNY8TjrLy5KTpX95MiNS5YxCDrrUHAbMoAxKlIQ%2FEjufamFfYIvCimeTh&X-Amz-Signature=54bf65296237fed1d9cf771dfba2cb91595afa9f2d8d0d0a1ba2571a71960d84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QVGVDL5Y%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T121140Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQjiGaa858BmWj9jWE7owzEVIiLJuGsMfXqE%2F2jixeMAIhAJwzpeLYyjzBSgG%2F1HUCKV0pxMRSmK6G%2FCwguEFsjtu7Kv8DCHUQABoMNjM3NDIzMTgzODA1Igx8%2FmothntV%2F6%2FfVpMq3AO8KU3WEi6jxaUT3PZjk%2BCDqpYcv8z34IatvVakAk%2BcrwWaSyhT6phGKwwACeiqhTwtE7BOPcV9D647vfUz1hiW6ecGLoV2qL6p%2B61ETgbB7LkMytFRqR2ujHxrS90THyvR68IYaFgtin4Gx160Fxxhbqt9JBU0%2B%2BV230ED%2BQiDXh%2F87%2FNfCjPPK5grH433CuLrqFLkQXV%2B%2Fc2J4gT90FuwKr652W%2BsCGZ4CFLpkEUDlgcdl6IoiIcv6BaS2LJG8KAZg6z3Wu19rjYeKkr4OP74X3iyNQx0ReF8AgdLwMTamguMXadsbEYcsBK1df15L%2BVo96GQKlfNcpkPi6J%2FOfX462f6sr%2FQfBkaJOtN89073S8XLtc7zvLo4Y6XPrFi85MPl9PtR9zrHmHXeHWESOaOz55kedvTMpjOXe%2F3CXMeUwb7bzSVNRPOxER9EAlknQUPBqKKKMDNcrXyATSPkmYR8Gzg38f2Cl5gJmz1v9dRN%2FCHvvJfrZxA9uAwseKqRVUjt1nmN7jXE8Fz4Q9WdlePnZKOB%2Fpyojydj4pko7%2FSGNtdhwfH1JvAVZbGs6HUzPj7K5vouW92HCGFuze8fNv2wB1E1If8dShNMsFuc6jD0HKiCi6b0AK4wDFr%2BjDGptDJBjqkATi6GGoRS7AquLCdakb3zHnjfcB21vv2auLZDJZaAJJZafuKsNJ9bj%2BuMH33XQZ6jlNj4ANp5Mn1Kp3fyjJmvQ6p423YJyDbqSV4czZCAoFZq2JaX8fW0xcq48PjiIEYuIRJeD6FOzhcRjQyrbjlQIqRlaOuGX3snUAGNY8TjrLy5KTpX95MiNS5YxCDrrUHAbMoAxKlIQ%2FEjufamFfYIvCimeTh&X-Amz-Signature=8897d69f8d202619847e0c11dd99bb320b60f89d5da8f8253517805694024653&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
