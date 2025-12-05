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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26ZRGGS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJkRkH%2F%2FrFV3f%2FeZ8N0wZVRnqQOCeDj18AIyOpCi6qUgIhALcUlMI8jwGA9c5yrEh4hCQxw95L%2FC%2F6c2qgLG19oDGOKv8DCFUQABoMNjM3NDIzMTgzODA1IgyP%2FIIlOhULare3Xgkq3APgfewCohvpfM1G6ZeY%2FpAD5IxUG2cQ2qLi0eYJZ5tbWBE1L%2BHfzP31fYEpTIDgVMw9GHqBvsrAePIqwTn7DWMkVUF9qRnYnk5i9dPlkqPla0OG4ki%2FwqSXpmI21b2ifRZBL4iV01Y0CwzCUFvAxwCEo%2BiTL6rySpumn9XBN4bso3jT7Kx%2FyYFr8tmmuF2N%2Bl8MpcPY8tq3JtEtY5AOU7%2FvRsmP5ehBlcw4Np14%2BgC%2FF3tV%2F0x5vlDffI7j72F9mUF449T2X5H6pwkda9e5vYGr8eschemOj%2FyqknxhxoAjxmDMuvEoo%2Fft39%2B2AyDEUKgX4XQbvy492PNFOfu25uHRGbUpcFGJ2L3zDlSII5afNT6ua2Zyys41T34gN%2BJm97e%2BiQ9RTTj8dGeUjYt8qbwHd1XXcSzD6hGpPx9T2TCfkuX1v41nXzqmIGMBEGZU51RVPE2K%2BEki%2FqGci5QR%2BUtDNaY8b0RyDSGP3ImeHGTQh8wqpg9tkUatc4bd2qyPnnLpsw5yiZD2yz%2FbcffVwDXugarPNbnAPrrl0kefLRqkgNPI0VeuV2MjKVQ2OZoNiaEkDIVC3%2FIZ9eCsEJ%2BM1FdQzbf%2BqyzaDyUdt3GbThLe%2BE1%2BbwT2jTWA6rFy1zCErcnJBjqkAT0nF9pbdc6gmgT6Dpxp%2BjilDjMC2b243KfNwz9WqenF3WCXaOx8TvPllb%2FVUPurVxy3fzITkSuR%2FB3CHfDXR7LG6km96OEfZf7A0u2EgjwTkbOqG5NoUiLHC%2Bc3lHb1pNhFlEgqAFHwX3%2BPW7GSfJdcYEIO82fFuRFjN0T8ytg35c7DDxahwPWpIqTW1%2FvkwDkruY4WtzJNc4nyFsKEKq2N5m%2FA&X-Amz-Signature=56118d1cb3ed6a114f732dac0132549844e2841ac8080b367416a06489927a4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T26ZRGGS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T053905Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDJkRkH%2F%2FrFV3f%2FeZ8N0wZVRnqQOCeDj18AIyOpCi6qUgIhALcUlMI8jwGA9c5yrEh4hCQxw95L%2FC%2F6c2qgLG19oDGOKv8DCFUQABoMNjM3NDIzMTgzODA1IgyP%2FIIlOhULare3Xgkq3APgfewCohvpfM1G6ZeY%2FpAD5IxUG2cQ2qLi0eYJZ5tbWBE1L%2BHfzP31fYEpTIDgVMw9GHqBvsrAePIqwTn7DWMkVUF9qRnYnk5i9dPlkqPla0OG4ki%2FwqSXpmI21b2ifRZBL4iV01Y0CwzCUFvAxwCEo%2BiTL6rySpumn9XBN4bso3jT7Kx%2FyYFr8tmmuF2N%2Bl8MpcPY8tq3JtEtY5AOU7%2FvRsmP5ehBlcw4Np14%2BgC%2FF3tV%2F0x5vlDffI7j72F9mUF449T2X5H6pwkda9e5vYGr8eschemOj%2FyqknxhxoAjxmDMuvEoo%2Fft39%2B2AyDEUKgX4XQbvy492PNFOfu25uHRGbUpcFGJ2L3zDlSII5afNT6ua2Zyys41T34gN%2BJm97e%2BiQ9RTTj8dGeUjYt8qbwHd1XXcSzD6hGpPx9T2TCfkuX1v41nXzqmIGMBEGZU51RVPE2K%2BEki%2FqGci5QR%2BUtDNaY8b0RyDSGP3ImeHGTQh8wqpg9tkUatc4bd2qyPnnLpsw5yiZD2yz%2FbcffVwDXugarPNbnAPrrl0kefLRqkgNPI0VeuV2MjKVQ2OZoNiaEkDIVC3%2FIZ9eCsEJ%2BM1FdQzbf%2BqyzaDyUdt3GbThLe%2BE1%2BbwT2jTWA6rFy1zCErcnJBjqkAT0nF9pbdc6gmgT6Dpxp%2BjilDjMC2b243KfNwz9WqenF3WCXaOx8TvPllb%2FVUPurVxy3fzITkSuR%2FB3CHfDXR7LG6km96OEfZf7A0u2EgjwTkbOqG5NoUiLHC%2Bc3lHb1pNhFlEgqAFHwX3%2BPW7GSfJdcYEIO82fFuRFjN0T8ytg35c7DDxahwPWpIqTW1%2FvkwDkruY4WtzJNc4nyFsKEKq2N5m%2FA&X-Amz-Signature=a848d93acc5eeae71ad4e478a2860798fc306f13938a046bbb0992aacb1f31b7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
