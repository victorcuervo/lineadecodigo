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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMT7ANI2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsWlUSunf9qVhAb0Dv%2BFc6L1Hezn94Z4sohe7B2WmW7AIhALOVOWqChTsGENjYDz7njcYDRBiJDKCwzxJwXBE%2F15yZKv8DCFoQABoMNjM3NDIzMTgzODA1IgyKGb%2BW1yEq1jUIb20q3AM1b9cQQrr9WSR7f39P%2F8n07ZY5w6JYUQVGsgMmBb%2Bh%2BKkmrhPsl3fqsQdlamJCMuPD9QtsfsvKO3l8GtgeSzM5ik49m7AAT8%2Bu5t62mgYYmIAJSPclD7mD1PKl073PRTdTaxK8cXnvX0OX6bnxt6vsi3iZdlCgz2gUT2G%2FSqzzhk5FzoSA6LBKsuUYyvoLLaHA83Nbm0zuvPppdqznOkrjMtoZPIbfzw60hrOajbJJjjoZWrF04AGke7dY%2FQEr1rzvkD723nf3fkWYDnwUT5qs3AMmQUV%2FIM44Ddt5f%2FcSaCU6kReAbjXsRZ9zw3y2BK0tRSeRhIWtN8LEffb9jePqg4LO9K87Z8M5Ub%2F3sdt%2Bn18yLuq9rkuOczwlRrurhjgMKCA1e5f0m4twIaHx%2FfaViAItCnXn1BDILX%2Bsr6TWgkx9V4M9xXlISpLIQwglffx%2BzNCcsb%2Fx7jofns8fIdxerWT0e9RBpafbugKQhDc7URomBgGwq5eJyk%2BqBMcVPT4aieCm7T9%2F%2F3IviR076QQD7oCltBPcPf7N3zwdmWny4DtBzrxAJNg7x1SaawHbbmismCzvYIuc3I2ggB9BaHRBVDZEHDWMnUcPifaeyK0Gc4%2FQj22JuEiyqrAdXDDEyMrJBjqkAbV3YN%2BATAuWbS9tHE7eiJwsj3M%2BV4l8Bk17pselJnwUrzR36hyeIpl603QdQwKndzYVzC%2BpfU%2FqIBvHVQX1Ni3X7qUrTr2sAUn4urQWWpn%2FGI02geSHYvC1G%2FnXuQhmZMHo2aFJJ%2BgYBGmjhjMmsILuoADxNCk6%2FPsd07S3%2FQ8KMzLMfKlU%2B24vGDrJH%2Fc%2FrtXFG0kIMASrgyGVlPchQRC8f8LX&X-Amz-Signature=2c755592e38a063a7fa3dbffebef5f71a907ea86fd49f9cd40f056c425b7613f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VMT7ANI2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T133128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsWlUSunf9qVhAb0Dv%2BFc6L1Hezn94Z4sohe7B2WmW7AIhALOVOWqChTsGENjYDz7njcYDRBiJDKCwzxJwXBE%2F15yZKv8DCFoQABoMNjM3NDIzMTgzODA1IgyKGb%2BW1yEq1jUIb20q3AM1b9cQQrr9WSR7f39P%2F8n07ZY5w6JYUQVGsgMmBb%2Bh%2BKkmrhPsl3fqsQdlamJCMuPD9QtsfsvKO3l8GtgeSzM5ik49m7AAT8%2Bu5t62mgYYmIAJSPclD7mD1PKl073PRTdTaxK8cXnvX0OX6bnxt6vsi3iZdlCgz2gUT2G%2FSqzzhk5FzoSA6LBKsuUYyvoLLaHA83Nbm0zuvPppdqznOkrjMtoZPIbfzw60hrOajbJJjjoZWrF04AGke7dY%2FQEr1rzvkD723nf3fkWYDnwUT5qs3AMmQUV%2FIM44Ddt5f%2FcSaCU6kReAbjXsRZ9zw3y2BK0tRSeRhIWtN8LEffb9jePqg4LO9K87Z8M5Ub%2F3sdt%2Bn18yLuq9rkuOczwlRrurhjgMKCA1e5f0m4twIaHx%2FfaViAItCnXn1BDILX%2Bsr6TWgkx9V4M9xXlISpLIQwglffx%2BzNCcsb%2Fx7jofns8fIdxerWT0e9RBpafbugKQhDc7URomBgGwq5eJyk%2BqBMcVPT4aieCm7T9%2F%2F3IviR076QQD7oCltBPcPf7N3zwdmWny4DtBzrxAJNg7x1SaawHbbmismCzvYIuc3I2ggB9BaHRBVDZEHDWMnUcPifaeyK0Gc4%2FQj22JuEiyqrAdXDDEyMrJBjqkAbV3YN%2BATAuWbS9tHE7eiJwsj3M%2BV4l8Bk17pselJnwUrzR36hyeIpl603QdQwKndzYVzC%2BpfU%2FqIBvHVQX1Ni3X7qUrTr2sAUn4urQWWpn%2FGI02geSHYvC1G%2FnXuQhmZMHo2aFJJ%2BgYBGmjhjMmsILuoADxNCk6%2FPsd07S3%2FQ8KMzLMfKlU%2B24vGDrJH%2Fc%2FrtXFG0kIMASrgyGVlPchQRC8f8LX&X-Amz-Signature=96c3145c9d3ffe5c72fbdddee99b8d22f3d1cd9dd0a810fd7dc4239e2e9ed6dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
