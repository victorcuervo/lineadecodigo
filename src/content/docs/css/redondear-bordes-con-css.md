---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VU3YWHI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDn9XDImDoMuY8wjHaDMk%2FrD%2FdVqgDjci2fAWL5%2Fq37YgIhAMzwkZOAG0c5zacbT4lE7J5196IFxRpMH6zDlw%2BNwfvNKv8DCEYQABoMNjM3NDIzMTgzODA1IgxwRdv%2FSarYxjHxC3Iq3ANYFgcaaee8LGNJlXhqW4002n7hkOFj9XgL7BrYvN%2Fm0cLvRWMon9k0NFGhEIDLa6Wwquqfk91e7icMa27YdwGSjMe2yQ5WR%2F6QM9K%2BG97P7JJqSq1nPMuHEMo5g58gnIn2zt8B37%2FF%2B266wGrf3pmWxh0OaEYX1A8BDsXJ%2FP3bpYCe3DgpZLjRiR3NNf5%2BpQj1kF6EqPOjNoE55IPx5y9JLbtu2tRHMZJd4CTunheQwVYBm2fmpobo3QPJIS1jGuOamTBM2HoMziU8LL8tPZpUVGh9d4mGa1e8h6eC4yeUhHkPNAqAm2G0yCmz7mVfND6QoeCBvvlT8B6sLDlzA6ltYJBGOPdWH7lbEB0x3XXVGG1XVF%2FI0CPRNmd%2FpQTR%2BtxXJCFQ9iyLt1e56m4RFC9PD%2F2R1NL8ePIbjf7taAe4rtsVy301NvlPKOx4QF%2BEuS5DtLOD6hghMBp0uCooCCOTgsedKI0SA1s6rnzxTCLOlblmCXE4j52CAQqO%2FR5bZF9gl3LXwTDLF1zmQyJH9HjMZxIDlo0uQ%2BBNI8dLEY4aWveqnSjmabKRGHaB3hkn4cHtl5qR6IxLV9mFSVrjJkc1ZNSy0CsHrZAz%2Fk%2F3mXWou1WK4M0C3l3%2FiPYkbjCVhMbJBjqkAQq%2Fbh63VqiiZuI2binSwN%2Fw0rc0IkQ54Ka4Cfo%2FTfvHzH4hu0QWbvSoH%2BnRG8U5%2F2%2FjrA%2FO%2BuK7DFzPCASUVVQGK7RAVwuKpRAaMOYskHYi4lY%2F2onKj%2F%2BvpDihnz2GHD2tUGFxSPPdLqfZzR%2BERGQPYBPmAdHYCHFwflntpcsEENO9%2FqufKM%2Bavw1VV4P4aipmZbqegN1imKvwVuKwrQ6kawh3&X-Amz-Signature=4998d7b753f022f49b8c3a1baf657c73cef9fe5a2ce770c93774b99902b446de&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664VU3YWHI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T125123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQDn9XDImDoMuY8wjHaDMk%2FrD%2FdVqgDjci2fAWL5%2Fq37YgIhAMzwkZOAG0c5zacbT4lE7J5196IFxRpMH6zDlw%2BNwfvNKv8DCEYQABoMNjM3NDIzMTgzODA1IgxwRdv%2FSarYxjHxC3Iq3ANYFgcaaee8LGNJlXhqW4002n7hkOFj9XgL7BrYvN%2Fm0cLvRWMon9k0NFGhEIDLa6Wwquqfk91e7icMa27YdwGSjMe2yQ5WR%2F6QM9K%2BG97P7JJqSq1nPMuHEMo5g58gnIn2zt8B37%2FF%2B266wGrf3pmWxh0OaEYX1A8BDsXJ%2FP3bpYCe3DgpZLjRiR3NNf5%2BpQj1kF6EqPOjNoE55IPx5y9JLbtu2tRHMZJd4CTunheQwVYBm2fmpobo3QPJIS1jGuOamTBM2HoMziU8LL8tPZpUVGh9d4mGa1e8h6eC4yeUhHkPNAqAm2G0yCmz7mVfND6QoeCBvvlT8B6sLDlzA6ltYJBGOPdWH7lbEB0x3XXVGG1XVF%2FI0CPRNmd%2FpQTR%2BtxXJCFQ9iyLt1e56m4RFC9PD%2F2R1NL8ePIbjf7taAe4rtsVy301NvlPKOx4QF%2BEuS5DtLOD6hghMBp0uCooCCOTgsedKI0SA1s6rnzxTCLOlblmCXE4j52CAQqO%2FR5bZF9gl3LXwTDLF1zmQyJH9HjMZxIDlo0uQ%2BBNI8dLEY4aWveqnSjmabKRGHaB3hkn4cHtl5qR6IxLV9mFSVrjJkc1ZNSy0CsHrZAz%2Fk%2F3mXWou1WK4M0C3l3%2FiPYkbjCVhMbJBjqkAQq%2Fbh63VqiiZuI2binSwN%2Fw0rc0IkQ54Ka4Cfo%2FTfvHzH4hu0QWbvSoH%2BnRG8U5%2F2%2FjrA%2FO%2BuK7DFzPCASUVVQGK7RAVwuKpRAaMOYskHYi4lY%2F2onKj%2F%2BvpDihnz2GHD2tUGFxSPPdLqfZzR%2BERGQPYBPmAdHYCHFwflntpcsEENO9%2FqufKM%2Bavw1VV4P4aipmZbqegN1imKvwVuKwrQ6kawh3&X-Amz-Signature=0a307f812d30c3326d07bc62126de6fb53cabf7f04ad4499a1d4921ac717ca03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
