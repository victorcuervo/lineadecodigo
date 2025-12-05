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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLUDMAFD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJg37mU5avNmoCDXr7pM5fWXxSyn%2Fajhjl%2FBYb7SohVQIgJ43cb69xDSEygmxoPxyUBtCZrxt%2F2vemoncQ9j9qn7Eq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDInr%2FgrGdwiNTpGaiCrcAwAJJ8LrCHHBJX2J6VH7PlGCvYglcY6l3ZZfN%2FYCFzs8wciIRlT2Tq2rtQ9x44t%2FQyWtQhCPbcRqHY8Pd2SCrraPv8BnuGb5WMmKgTqSMzXBX4NrI7pOdrA3Jkew3I22JSGSx6mAP20xlbqAV5%2BqaOYq4It8ILNj9HjM270Z4D%2F6T8oiNcLc6MjsZcZqlas6g2SecStwR4lcKasfdClzy8LNT6CvT1VrN4AM7bk24VXnaDQdonny5kPUMh2PBgdhONFPtkevWvGgUkEXBvN4E%2F4OnScn3CegnkP6OkYpSo%2F46q6nAQZgnhqrdIJSa36JJOdV1PYc5tRJFyeRM%2FiOflqQ4KXKPyZln0wCt2rgRt0jYpNp3kz4Q9d3K1vnNn0PYPktqC0JrmQXpAokpEcsKAAd752WgjF370XTbW2Ht84TKMwH9sa2etrtNgIoYqV4DsS2Tfcn35PhhsnvoEi437jld8SNjAuufMGUgGFqcZM8p%2F3wfmqmKK%2B9b8bZLAzaJLoEyHa2bsPdAni6W3ySdnnTqUXsK6vlmkG7Clcm772aU0NCu3W6I8hkkt%2BcGg3kT%2BRmQh93ruagXz4g8PQYeXSf%2FZBqFxZ4Tdlec0xlzSawigOVPgR%2FrzDs1MyFMNOyyckGOqUBctSt8o0staBGVQZDxse4H4kvMB64lbcMk5fB3YwsUgFIZwd%2BS8kVlk0zzFNlr0Vy5hGtdIaDRsrCnMsx9H%2B6bIIyeX7JWLa5hMPEkYPuhywo3HseyfixQFZxI8qDtXQr4Cgp2G1kRl6gy6JUJoibwpF51TO4YPo5UcfMoxE9XMyjjg118s1Guil0p7WWBDvosovNyuE3Rs4riAnHSSjuBkKoxxkl&X-Amz-Signature=a6fcedbcdf3e6318cc8102fb00bad29b0f1f4d206be1c2968467637e6d78b272&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QLUDMAFD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCJg37mU5avNmoCDXr7pM5fWXxSyn%2Fajhjl%2FBYb7SohVQIgJ43cb69xDSEygmxoPxyUBtCZrxt%2F2vemoncQ9j9qn7Eq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDInr%2FgrGdwiNTpGaiCrcAwAJJ8LrCHHBJX2J6VH7PlGCvYglcY6l3ZZfN%2FYCFzs8wciIRlT2Tq2rtQ9x44t%2FQyWtQhCPbcRqHY8Pd2SCrraPv8BnuGb5WMmKgTqSMzXBX4NrI7pOdrA3Jkew3I22JSGSx6mAP20xlbqAV5%2BqaOYq4It8ILNj9HjM270Z4D%2F6T8oiNcLc6MjsZcZqlas6g2SecStwR4lcKasfdClzy8LNT6CvT1VrN4AM7bk24VXnaDQdonny5kPUMh2PBgdhONFPtkevWvGgUkEXBvN4E%2F4OnScn3CegnkP6OkYpSo%2F46q6nAQZgnhqrdIJSa36JJOdV1PYc5tRJFyeRM%2FiOflqQ4KXKPyZln0wCt2rgRt0jYpNp3kz4Q9d3K1vnNn0PYPktqC0JrmQXpAokpEcsKAAd752WgjF370XTbW2Ht84TKMwH9sa2etrtNgIoYqV4DsS2Tfcn35PhhsnvoEi437jld8SNjAuufMGUgGFqcZM8p%2F3wfmqmKK%2B9b8bZLAzaJLoEyHa2bsPdAni6W3ySdnnTqUXsK6vlmkG7Clcm772aU0NCu3W6I8hkkt%2BcGg3kT%2BRmQh93ruagXz4g8PQYeXSf%2FZBqFxZ4Tdlec0xlzSawigOVPgR%2FrzDs1MyFMNOyyckGOqUBctSt8o0staBGVQZDxse4H4kvMB64lbcMk5fB3YwsUgFIZwd%2BS8kVlk0zzFNlr0Vy5hGtdIaDRsrCnMsx9H%2B6bIIyeX7JWLa5hMPEkYPuhywo3HseyfixQFZxI8qDtXQr4Cgp2G1kRl6gy6JUJoibwpF51TO4YPo5UcfMoxE9XMyjjg118s1Guil0p7WWBDvosovNyuE3Rs4riAnHSSjuBkKoxxkl&X-Amz-Signature=43cad82ec8978430269876e65bb57d76cfa046f6faf006ec8d0bad7f5c4758a3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
