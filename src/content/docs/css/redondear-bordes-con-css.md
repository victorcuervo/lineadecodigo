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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULUAC2B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpto%2FBBu8VzhcSRowo%2F3GnssFMiBb9htI0UYLakDls9wIgS8gkDiupGrijKp8WoKoZiJktwfqI5DwHBQxVoje7CTUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxHP29pDU5SvrfPESrcA%2Fw7FW0mbv5CEmnlLxeCK1YUmIjv69PmITSXQ2Oe34PPWrwad4x0139MaAuSEDK8kRyxyTRaKTzCgGGH%2BYWretj31%2BAYQ4TY%2FFFCe%2BiJbX10XAml3F%2BCfsumkV1RqCdpqKX5Jz0yopsvCbYosj3bmT4gBCRae0BfnmkqqcCuVZ3PB2WU4XdgFDHzHI1CWvC9TOJxbfzyjjsKOj%2BwPeGmpFMxXazCmD01C4XQvkdjWxkaj0qnVoFbbbWhueARl8LSj88IZd0lCzBzV%2BYrYKvvCJ%2F9qqvSxKfCGWbX5OzPKg4iS2bZgcXjRZJFfckIkblNd2CKWtOXWPFfQKk0tUdQOu3TSfkW4gG546IVkmPPicbZOTXrr4xZkyC9aQapwQPIIz0cTx3JloWyEmMS5ljRFAa2feZhy%2Fw3Ph2OPCEJ6aQ6GcToR1FLY%2BB7N24ShSuRgOwL%2FFYSLYnot8Owg86nU%2BnPCbJc2mQhaG0jd%2Fb5mMR9PYbvhOPulFdA2%2Fk0D9iyR8YWuyKX%2F%2FUEVMkAAfUu3wZ3Vm8lmFzfbAEv2umwuMXnd2lddcdiaXrkM1qmvS2UyO21ZR8Ii%2Fr%2BWqnoXZ3gp4Zr5xbDXQYgO5fnoewwzXmIRXhBYc62Ir10qlHkMJHl28kGOqUB7ZIyCjCwAZp8y2XnLPplVygCvnb%2FTbh%2B8d0KQ3g8bsJGkTHxdekXapRmK20wvhnj7lplnMOyDg1JTwS8oe62FGvhhs6o5Uq2FJPJGekV41%2F2w%2BSFK4AHTIv%2BWmhDwxiecbH57IHTbAH2jJmsId5UOwSK%2FEt9hJ%2FpZjcn1JFmI2J2ltfiKecG859uNQVowwyVIhf81j8eCIDQ1oxL4KN1%2FtlWiUJX&X-Amz-Signature=0a3e589490038a0539070219b32ed693b3dd3ec161f90721203c61ae276d91fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QULUAC2B%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T161309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCpto%2FBBu8VzhcSRowo%2F3GnssFMiBb9htI0UYLakDls9wIgS8gkDiupGrijKp8WoKoZiJktwfqI5DwHBQxVoje7CTUqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNxHP29pDU5SvrfPESrcA%2Fw7FW0mbv5CEmnlLxeCK1YUmIjv69PmITSXQ2Oe34PPWrwad4x0139MaAuSEDK8kRyxyTRaKTzCgGGH%2BYWretj31%2BAYQ4TY%2FFFCe%2BiJbX10XAml3F%2BCfsumkV1RqCdpqKX5Jz0yopsvCbYosj3bmT4gBCRae0BfnmkqqcCuVZ3PB2WU4XdgFDHzHI1CWvC9TOJxbfzyjjsKOj%2BwPeGmpFMxXazCmD01C4XQvkdjWxkaj0qnVoFbbbWhueARl8LSj88IZd0lCzBzV%2BYrYKvvCJ%2F9qqvSxKfCGWbX5OzPKg4iS2bZgcXjRZJFfckIkblNd2CKWtOXWPFfQKk0tUdQOu3TSfkW4gG546IVkmPPicbZOTXrr4xZkyC9aQapwQPIIz0cTx3JloWyEmMS5ljRFAa2feZhy%2Fw3Ph2OPCEJ6aQ6GcToR1FLY%2BB7N24ShSuRgOwL%2FFYSLYnot8Owg86nU%2BnPCbJc2mQhaG0jd%2Fb5mMR9PYbvhOPulFdA2%2Fk0D9iyR8YWuyKX%2F%2FUEVMkAAfUu3wZ3Vm8lmFzfbAEv2umwuMXnd2lddcdiaXrkM1qmvS2UyO21ZR8Ii%2Fr%2BWqnoXZ3gp4Zr5xbDXQYgO5fnoewwzXmIRXhBYc62Ir10qlHkMJHl28kGOqUB7ZIyCjCwAZp8y2XnLPplVygCvnb%2FTbh%2B8d0KQ3g8bsJGkTHxdekXapRmK20wvhnj7lplnMOyDg1JTwS8oe62FGvhhs6o5Uq2FJPJGekV41%2F2w%2BSFK4AHTIv%2BWmhDwxiecbH57IHTbAH2jJmsId5UOwSK%2FEt9hJ%2FpZjcn1JFmI2J2ltfiKecG859uNQVowwyVIhf81j8eCIDQ1oxL4KN1%2FtlWiUJX&X-Amz-Signature=d971d2a316a3ddb8f14031f1980bafff8e81447eec222c7e0152ca77bd7c5f00&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
