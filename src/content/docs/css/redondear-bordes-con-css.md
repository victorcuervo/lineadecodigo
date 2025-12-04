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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5PO5GCS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCNEuEsjlDlqS3JTj825%2FWNTGW2RQHpgt9m7BPCFpzDZwIhAPq2HkRQI7iXFkIysWRTOLbOd6RRz%2FQsSyqczMkPewAfKv8DCEYQABoMNjM3NDIzMTgzODA1IgzUvyi0KZxPEU0dgcEq3APg9D0V3fpw19yaXhLQUyy2xksecsBtkF5GsCsYsjzP%2BU36xwpiUR8AquDNWXGaYrdhzY5LubcF1wAkzXpd%2BUsu98atgJQ7ONgj4%2Fn3ZqPJXbByUB6qgrziy43GBrgkhvHuqBWqWId9ImozQpDYZxpqSr1FPDl2XigGw43I7nHqnYW1gJuM7DPBLeNxK78I0krnezbWmIL3B4ewFyz1MXj7lNJZy%2Bk3fjbP7smF0C3hxSz489RJqfm6njPeCq9ROvU0w8OrW37b5ordGB5cMJgwNYPJwVOdRlbTHn%2FVAo4OsAgWc7YfG%2BeihEluZqRPh3aZFhPG%2BX%2BJxeU92B1IPfY7DypCcilDljcvs%2FirsEf6TyB3bwYPKuOXQMTiy5C7JpMInYBe%2FtRjgSr9hu4IwzSS3o38eG5K1f0TJorLtvZqzLsnIiOwjc6ek3W92fS3SfIZqlF15Rnt7w4Lf19V9mPpToMJERE9XI4H%2FTdAHtx6RP4mMfXEDOnVnlcSR%2Ba4dkERPI5e4kFehrdt7qsA1fFQy5xbYtGG8AyuKuJlpw2TlqMHbO%2FmjEMGxr1DHACVjJCxLAWA0PZV4dBCP0TzDqT3kNr2nazwmBVRDSspBsXwf%2Fq5DuRI1Im8LNnK8jCChMbJBjqkATk9FoQ8Ce6j8DBMmuz7JJUzOxCf2LHyoCWxt4TtIWcBI7SPPIYDYmOkLqTF4H74qjK3dpPkC0NeIKpwo3IkOQ8rBArCMnYirD6SWgT0VCP4cE1VJuugeLNm1fqkpYhGxOGYYJt%2BWsuyw9EnfiusM8pnSBN%2B3AeZAMnL0TIA%2BcWARWH6HCfN6tK8VnflovMNl4oCl5nO90c6A1jRibMHcFHPUZkz&X-Amz-Signature=000da4d6dd0c6241f0509a96dd78c12bc0f7249561e17522072f7042e3bbe7a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T5PO5GCS%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132634Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJIMEYCIQCNEuEsjlDlqS3JTj825%2FWNTGW2RQHpgt9m7BPCFpzDZwIhAPq2HkRQI7iXFkIysWRTOLbOd6RRz%2FQsSyqczMkPewAfKv8DCEYQABoMNjM3NDIzMTgzODA1IgzUvyi0KZxPEU0dgcEq3APg9D0V3fpw19yaXhLQUyy2xksecsBtkF5GsCsYsjzP%2BU36xwpiUR8AquDNWXGaYrdhzY5LubcF1wAkzXpd%2BUsu98atgJQ7ONgj4%2Fn3ZqPJXbByUB6qgrziy43GBrgkhvHuqBWqWId9ImozQpDYZxpqSr1FPDl2XigGw43I7nHqnYW1gJuM7DPBLeNxK78I0krnezbWmIL3B4ewFyz1MXj7lNJZy%2Bk3fjbP7smF0C3hxSz489RJqfm6njPeCq9ROvU0w8OrW37b5ordGB5cMJgwNYPJwVOdRlbTHn%2FVAo4OsAgWc7YfG%2BeihEluZqRPh3aZFhPG%2BX%2BJxeU92B1IPfY7DypCcilDljcvs%2FirsEf6TyB3bwYPKuOXQMTiy5C7JpMInYBe%2FtRjgSr9hu4IwzSS3o38eG5K1f0TJorLtvZqzLsnIiOwjc6ek3W92fS3SfIZqlF15Rnt7w4Lf19V9mPpToMJERE9XI4H%2FTdAHtx6RP4mMfXEDOnVnlcSR%2Ba4dkERPI5e4kFehrdt7qsA1fFQy5xbYtGG8AyuKuJlpw2TlqMHbO%2FmjEMGxr1DHACVjJCxLAWA0PZV4dBCP0TzDqT3kNr2nazwmBVRDSspBsXwf%2Fq5DuRI1Im8LNnK8jCChMbJBjqkATk9FoQ8Ce6j8DBMmuz7JJUzOxCf2LHyoCWxt4TtIWcBI7SPPIYDYmOkLqTF4H74qjK3dpPkC0NeIKpwo3IkOQ8rBArCMnYirD6SWgT0VCP4cE1VJuugeLNm1fqkpYhGxOGYYJt%2BWsuyw9EnfiusM8pnSBN%2B3AeZAMnL0TIA%2BcWARWH6HCfN6tK8VnflovMNl4oCl5nO90c6A1jRibMHcFHPUZkz&X-Amz-Signature=dcd56ab7b68ecdb09434f374306915d2d6b04f619dec9fb7a1b2551939da582e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
