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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WSBI5YJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRaoxqPWkID9WHYWuCz63Ka6NgE5GJrc1vEQwszcOrFgIhAObBoZt%2BGTOiOrnGLGpCW%2F%2FOHAo8y673GmQHeS0EytXDKv8DCGEQABoMNjM3NDIzMTgzODA1IgyyX77j74k4dJ5NykIq3AN2YW1wil%2F%2ByiYrSROrvvI8WIWyK3dWO9gpTuiTTThfqifFI2J%2FpCp43O%2FshsKomn6ezU0ZLfd0J1oxNcaaYCk9jrCmy5qmTreMkqhxWsGXHxjSjFMagzaSsN%2B5XhivPbJMPEO1nmeHZ8tQn8DnjQEX%2BCxpHw4uqb1HJJ2HCrzoeUtcweNJjve3SOsWvqUzhHMTwwTyEyGZSOecA2p7tzopvlDsIwsc1Oiz7M6g7PdGNDSTpnhIKHSasBZCaEshwbeFTnVujwknW50dHqAJ6CxW7AvgBpum8A5Ug7DvwhyU%2Bja%2BYlZ7DZjtiXERJdCqrLLSBAK%2F4gpcbWCNJQdprm09ycHR3LSqc%2FvvPGg9iRXXOZt8icSMr7Bsz0vbzlKNCGuRy8fQigdrRfsT7UJp1ZBStQrqdteZO9ik4B24GB1EdUuJb8mPrnJkKv5QiXrexyb4XWc0j3yeadGVtsDeVY%2F72VHZYa7Z3ObYvWjsYvlE5SCasp5BLZqd7s%2BetOjyyq6wZM0AZarDvngdBjHzpNeofqRtDC9xyiXNxn2z%2FL5CD%2BvtaRiDjHf5fjyNP9GiY96EZyTZgxb5ocTFoafi0TMieLpW3U3xkbO7f1LgKzCm53SSR1u6xW76fhPPYDDY98vJBjqkAe6v4gmR5jgaj49HstupTvk8WAWK6kmoXBApkHT%2F%2FtWiwgP1lyVfoZ4BSTTxN9As6TDDQUR6kUgvnn7WURq9MG%2B5Yk%2FxlIx4j1eeSrfPCW5XeNUQS6r66o1KrgCXpU9ws%2FVb5WoIKW53OF0mmaDYtaH3SjJwZNeGlSya9c7UTyOuekLAtijRu6%2BNi%2FQuF3UKbG3dcD4zvBQZepeOec5gtCS4I78y&X-Amz-Signature=8ab18744f895ba832df3af0a8d67ebeb951731820d3ccf5ef13ffb199ee8c846&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WSBI5YJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T190823Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCRaoxqPWkID9WHYWuCz63Ka6NgE5GJrc1vEQwszcOrFgIhAObBoZt%2BGTOiOrnGLGpCW%2F%2FOHAo8y673GmQHeS0EytXDKv8DCGEQABoMNjM3NDIzMTgzODA1IgyyX77j74k4dJ5NykIq3AN2YW1wil%2F%2ByiYrSROrvvI8WIWyK3dWO9gpTuiTTThfqifFI2J%2FpCp43O%2FshsKomn6ezU0ZLfd0J1oxNcaaYCk9jrCmy5qmTreMkqhxWsGXHxjSjFMagzaSsN%2B5XhivPbJMPEO1nmeHZ8tQn8DnjQEX%2BCxpHw4uqb1HJJ2HCrzoeUtcweNJjve3SOsWvqUzhHMTwwTyEyGZSOecA2p7tzopvlDsIwsc1Oiz7M6g7PdGNDSTpnhIKHSasBZCaEshwbeFTnVujwknW50dHqAJ6CxW7AvgBpum8A5Ug7DvwhyU%2Bja%2BYlZ7DZjtiXERJdCqrLLSBAK%2F4gpcbWCNJQdprm09ycHR3LSqc%2FvvPGg9iRXXOZt8icSMr7Bsz0vbzlKNCGuRy8fQigdrRfsT7UJp1ZBStQrqdteZO9ik4B24GB1EdUuJb8mPrnJkKv5QiXrexyb4XWc0j3yeadGVtsDeVY%2F72VHZYa7Z3ObYvWjsYvlE5SCasp5BLZqd7s%2BetOjyyq6wZM0AZarDvngdBjHzpNeofqRtDC9xyiXNxn2z%2FL5CD%2BvtaRiDjHf5fjyNP9GiY96EZyTZgxb5ocTFoafi0TMieLpW3U3xkbO7f1LgKzCm53SSR1u6xW76fhPPYDDY98vJBjqkAe6v4gmR5jgaj49HstupTvk8WAWK6kmoXBApkHT%2F%2FtWiwgP1lyVfoZ4BSTTxN9As6TDDQUR6kUgvnn7WURq9MG%2B5Yk%2FxlIx4j1eeSrfPCW5XeNUQS6r66o1KrgCXpU9ws%2FVb5WoIKW53OF0mmaDYtaH3SjJwZNeGlSya9c7UTyOuekLAtijRu6%2BNi%2FQuF3UKbG3dcD4zvBQZepeOec5gtCS4I78y&X-Amz-Signature=c6155d12d37ddf828cdec8e7b038966d55fc60e20aa7c1f9beafd8b3b55c4d81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
