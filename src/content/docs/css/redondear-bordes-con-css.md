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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVCFC24%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy%2BziT%2BQerhIE9rjay02S%2BiRIkxHNRP7TUWNNhZCwdCgIhAPoF09PjfrOtEl4QXSVF7nTGnjo73yVdzR5YfRYMrIhYKv8DCG0QABoMNjM3NDIzMTgzODA1IgwpTAZ34ZPROak5v0oq3AOOFlUyNXGGPw3I%2Fn4mXSSbgXGFLTeMxn3mD08BnuqIjos2fkQryFBFyj1BU5lRQwM0poviW1eCEHf6UTIBnqgXa%2FW4oL6VISvfIVy%2FTK4kyWTf396kCgP0MlHY9L%2FsSs9tDsXT281CcOuPr7NGnvYNSF7b2VjpTvTJK%2BKxKg%2FkzqP2tIKVBytZozFDOnj70QvJZcC7wcNg%2BT50dH8xmXi2oLP%2B25vwdau%2BhRjIlyAxQqtdulmuk%2BAvhw78iXjfOCc%2FuRA6GYvh%2F0liMFGBD9IfPlxLnnfkbf8TimSvAjQv2w8DziaSS6KoeZ3wgryCyS67xzNHKCa9DsPzjTEDd5WdsEv2FdKv1pKOf14XVMjOo1WSJNuhWevAHBDDmRZt%2Fd4dgaTqI%2B8iuU3RkRdKAI35QtQxF%2B%2FZPPgGhGy1xabjcCLF6Yqpw2Yz889TUby3QBC0iNn6%2FSSa%2FNcCvbyvImZEwbrBC%2F5iJ4IGTDsL73cS5yJY2p8cNZbjIVWYAREvCSHStache9%2BKfVqvmmQ6PomBgK0S3VdTGwv6ikTz9xHs8bLb3CjuOuo%2Fsr%2FFKieH5L%2F%2B3wLO8675LefIbsFOp%2BsyPGt64Go97CaDXXX3dR2%2BwW0e0o7nuX%2BKWUMrsTCp3s7JBjqkAUeZak8x%2BgpdKWe9DAn7SUzsIHOZWNw7R6qE5ffBSA3xy%2B%2BeoXGb8Ar1%2BS0xhlFLWE2PYFLy8%2FvWPReDmL1AHNuq0UXn2a6xmJcHUYvnYc383qOp4aTGBGkxrQ6onqvE6Cjan%2BOl%2BVtKR%2BuCZouA6od2i8Bg%2F1M4KPOJONo76SopWFo3%2BoXKpMbVo4bsaKgUJaC5ZgvzaGOkPmK0zAPDaE3uZgAb&X-Amz-Signature=ee5dcccc304e053ed01c3898924e246226342aa70d5e13dc455d7b872756c037&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XVCFC24%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T044839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDy%2BziT%2BQerhIE9rjay02S%2BiRIkxHNRP7TUWNNhZCwdCgIhAPoF09PjfrOtEl4QXSVF7nTGnjo73yVdzR5YfRYMrIhYKv8DCG0QABoMNjM3NDIzMTgzODA1IgwpTAZ34ZPROak5v0oq3AOOFlUyNXGGPw3I%2Fn4mXSSbgXGFLTeMxn3mD08BnuqIjos2fkQryFBFyj1BU5lRQwM0poviW1eCEHf6UTIBnqgXa%2FW4oL6VISvfIVy%2FTK4kyWTf396kCgP0MlHY9L%2FsSs9tDsXT281CcOuPr7NGnvYNSF7b2VjpTvTJK%2BKxKg%2FkzqP2tIKVBytZozFDOnj70QvJZcC7wcNg%2BT50dH8xmXi2oLP%2B25vwdau%2BhRjIlyAxQqtdulmuk%2BAvhw78iXjfOCc%2FuRA6GYvh%2F0liMFGBD9IfPlxLnnfkbf8TimSvAjQv2w8DziaSS6KoeZ3wgryCyS67xzNHKCa9DsPzjTEDd5WdsEv2FdKv1pKOf14XVMjOo1WSJNuhWevAHBDDmRZt%2Fd4dgaTqI%2B8iuU3RkRdKAI35QtQxF%2B%2FZPPgGhGy1xabjcCLF6Yqpw2Yz889TUby3QBC0iNn6%2FSSa%2FNcCvbyvImZEwbrBC%2F5iJ4IGTDsL73cS5yJY2p8cNZbjIVWYAREvCSHStache9%2BKfVqvmmQ6PomBgK0S3VdTGwv6ikTz9xHs8bLb3CjuOuo%2Fsr%2FFKieH5L%2F%2B3wLO8675LefIbsFOp%2BsyPGt64Go97CaDXXX3dR2%2BwW0e0o7nuX%2BKWUMrsTCp3s7JBjqkAUeZak8x%2BgpdKWe9DAn7SUzsIHOZWNw7R6qE5ffBSA3xy%2B%2BeoXGb8Ar1%2BS0xhlFLWE2PYFLy8%2FvWPReDmL1AHNuq0UXn2a6xmJcHUYvnYc383qOp4aTGBGkxrQ6onqvE6Cjan%2BOl%2BVtKR%2BuCZouA6od2i8Bg%2F1M4KPOJONo76SopWFo3%2BoXKpMbVo4bsaKgUJaC5ZgvzaGOkPmK0zAPDaE3uZgAb&X-Amz-Signature=1fada4d21a459297afc9517b403790b994cb91052703b8007e2ae482ff86663b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
