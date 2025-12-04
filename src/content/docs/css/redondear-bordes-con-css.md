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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFQ3NRT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBPYE8G4j4dbT01w%2FV9Ceetqhoc3jBMVrm5BHgqJiWjCAiEAiGzvxplLOZNotuwlxkgsNm0cB0aHu68BHNs8A7nn8d8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDGPKX9bO3XejsK5ekCrcAxBSg%2Fm4CV64vucxFso%2B2xubU8hat40vUYbbFLZ5fz933mODZhccrB8kIwImUYoU%2BA6U2RFKoqnTDhgbmxd%2BuxULlf0BYFWAhN%2FyfscRhsJyAgpKce7u1Wly52%2BbAfhOGqCHXOkwbc5ypteYmLtGUirE8u7mUXJaJrsGWy2Bvt%2FKi3viZHibPdzeazis1PQRV%2BiJm%2F7GWv0ruyBN4xzrotCjXS%2B7nOpOQ8GDHdDVoFPSxaAs38mniXBsk7nrT%2BoxZ4hTA1AGEuJ9eDfWQBhNcKJ5gfP5HztQCTwI1sJ5z34NYTIq5SVvoE%2B6L5be1D%2FWFbhmyZGxDWMf0616KjvRgc5nXOsts0YY3fTTBkqhTIHae%2Fjc930PtN32PJHEZUJatxqCZIdTu3UYa5UmW1f8RIhCBlsN2x%2FtKTRaollZQlT4PrmMFHXknWrPrDN5v2X4IBVTJZbeLBVJZrgSb6nmD69eU6TWSRfj9YSgkG%2BrH34KgXh0gtn5LgJfvn2M3YpF2OHJOPSFShy2yJ13Uau8hPTpf4aWkk4WVeYZGJ%2F5vxzTRbLd85uvSiw6HtOJVjO1ZRgVPewgDVOeMGf%2B0xrkPJvypvDBU%2Fq1pHeVYx4a2l15gzCGHA3t5nzBlRyJMIaRxMkGOqUBOrUo2Rdqf%2FNxG%2BkYbxiFQiXSbm3QnkKPjvJAupBCQ5daew5h6aPxI8tt6DdLdEO1XsB1rOHoYLXbckFthxHIB3GCeUloLsWlBdXx6vh9Wh%2FfmIXOLL00FKezia4vxfRup5TVyuzdq8zx1tu169MwRzzF4wdK8VIYlVAmyP%2Bigu3W62grsV4XPjShaCv0fygh7EkQh%2FnAh%2BTIwErE9JWw5S93PlPl&X-Amz-Signature=f750eb135b03e51a983b2d796a5ca28f51ec902d7a06cefd86dab2873b6df0c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667VFQ3NRT%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T040751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIBPYE8G4j4dbT01w%2FV9Ceetqhoc3jBMVrm5BHgqJiWjCAiEAiGzvxplLOZNotuwlxkgsNm0cB0aHu68BHNs8A7nn8d8q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDGPKX9bO3XejsK5ekCrcAxBSg%2Fm4CV64vucxFso%2B2xubU8hat40vUYbbFLZ5fz933mODZhccrB8kIwImUYoU%2BA6U2RFKoqnTDhgbmxd%2BuxULlf0BYFWAhN%2FyfscRhsJyAgpKce7u1Wly52%2BbAfhOGqCHXOkwbc5ypteYmLtGUirE8u7mUXJaJrsGWy2Bvt%2FKi3viZHibPdzeazis1PQRV%2BiJm%2F7GWv0ruyBN4xzrotCjXS%2B7nOpOQ8GDHdDVoFPSxaAs38mniXBsk7nrT%2BoxZ4hTA1AGEuJ9eDfWQBhNcKJ5gfP5HztQCTwI1sJ5z34NYTIq5SVvoE%2B6L5be1D%2FWFbhmyZGxDWMf0616KjvRgc5nXOsts0YY3fTTBkqhTIHae%2Fjc930PtN32PJHEZUJatxqCZIdTu3UYa5UmW1f8RIhCBlsN2x%2FtKTRaollZQlT4PrmMFHXknWrPrDN5v2X4IBVTJZbeLBVJZrgSb6nmD69eU6TWSRfj9YSgkG%2BrH34KgXh0gtn5LgJfvn2M3YpF2OHJOPSFShy2yJ13Uau8hPTpf4aWkk4WVeYZGJ%2F5vxzTRbLd85uvSiw6HtOJVjO1ZRgVPewgDVOeMGf%2B0xrkPJvypvDBU%2Fq1pHeVYx4a2l15gzCGHA3t5nzBlRyJMIaRxMkGOqUBOrUo2Rdqf%2FNxG%2BkYbxiFQiXSbm3QnkKPjvJAupBCQ5daew5h6aPxI8tt6DdLdEO1XsB1rOHoYLXbckFthxHIB3GCeUloLsWlBdXx6vh9Wh%2FfmIXOLL00FKezia4vxfRup5TVyuzdq8zx1tu169MwRzzF4wdK8VIYlVAmyP%2Bigu3W62grsV4XPjShaCv0fygh7EkQh%2FnAh%2BTIwErE9JWw5S93PlPl&X-Amz-Signature=9432747f0506070858100e2864c1f66b8d302891d6189baec225e07e9abb97b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
