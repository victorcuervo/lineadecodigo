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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTEVN2M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNc%2BSO35Fi6yD7BUQSX5uStgGwIx65skZI08rwWWu29QIhAKlZVMtQv9nBZULImBDjNVOLZ11e%2BeAZCAQbXNGAFJWZKv8DCHsQABoMNjM3NDIzMTgzODA1IgwVXiUW5ZhmtxbgXlUq3AMzJVPDb%2Fqjn7jDUlwmTjy5Co1gN4jIlUb17Mp6i83Bjf3%2FJDL9uVa5WX1Nw1NqjHo02iwWF5VDDBOhVdiMdFLMLWWqvqknrVuL3Va577uU%2B6jtVNvTzrjw5eAH24iUhNFwQRG%2BT7PF7%2FTE%2BVVQWZ80CXM3gdZiZUCimIEW%2Bf%2FuKfVaF1XkRcpWQnqkUvpP%2F0OUb434xPESBUsFuJ9iDufLNQAkyWu%2BMZ3achmF6yMuizUdfDFkYSxxMN4n2E3jmqJMupnl0m5jytb3Md%2FogqGRBDaNvaH948gqYCvNPM3WYDmSRqMMwkRC9xBo8VoFVL5GFVDDJAla6F7np7U93ADQL%2FiLwIMVrjiht0EmeRuI6wbKcjwbOfFa8DqXyY%2BSRcGogfbHxbY%2FTWq5bPL9%2Bq0bNY69zSmhBLUDi59JoVnQOkiZkN3I0PFCqFMAMu%2FWRD6UzAJp484bp%2FfeSyzV4Qig%2BRF2B27wq%2FbsTglL1gdFVVXLCtvJjXsoFhyIucELOuzuhEU%2FWujCgHjV4xAemFpBkN24I0pEi%2BtybAblLjcJ7qpsgj8pwp43Z58b9382WOLOF6e3yBsdHtJh5bI4Hp48EyVpkj5Ry4XJA%2FFNjR24ZfAA8FnQUY26da%2FFQjC3zdHJBjqkAf4PLMWVlYyHsp%2FMHM2JkxWDuwceI7FLUHjmRE7sd1DpjaBmgTUbzuh9Vg4BND7P6f51g1Gv60yFljEGi8CIZXm99opNsjbGmXekPcQjS64GmCbviG10wdR76EWDOF11i5c2dBga4zQO9sEJPgWSwmuaDmJBYP8zR57PgREnRLoj5Tc%2FTYFkpAIqykVngaXj9XX2kaQZ%2Fd7w3bHtsFeCOqlfTcQA&X-Amz-Signature=4317250705689c8a9d29aa3e3021f4ba1c5065465e19d8bcd401ffb931376b41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XFTEVN2M%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T191517Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDNc%2BSO35Fi6yD7BUQSX5uStgGwIx65skZI08rwWWu29QIhAKlZVMtQv9nBZULImBDjNVOLZ11e%2BeAZCAQbXNGAFJWZKv8DCHsQABoMNjM3NDIzMTgzODA1IgwVXiUW5ZhmtxbgXlUq3AMzJVPDb%2Fqjn7jDUlwmTjy5Co1gN4jIlUb17Mp6i83Bjf3%2FJDL9uVa5WX1Nw1NqjHo02iwWF5VDDBOhVdiMdFLMLWWqvqknrVuL3Va577uU%2B6jtVNvTzrjw5eAH24iUhNFwQRG%2BT7PF7%2FTE%2BVVQWZ80CXM3gdZiZUCimIEW%2Bf%2FuKfVaF1XkRcpWQnqkUvpP%2F0OUb434xPESBUsFuJ9iDufLNQAkyWu%2BMZ3achmF6yMuizUdfDFkYSxxMN4n2E3jmqJMupnl0m5jytb3Md%2FogqGRBDaNvaH948gqYCvNPM3WYDmSRqMMwkRC9xBo8VoFVL5GFVDDJAla6F7np7U93ADQL%2FiLwIMVrjiht0EmeRuI6wbKcjwbOfFa8DqXyY%2BSRcGogfbHxbY%2FTWq5bPL9%2Bq0bNY69zSmhBLUDi59JoVnQOkiZkN3I0PFCqFMAMu%2FWRD6UzAJp484bp%2FfeSyzV4Qig%2BRF2B27wq%2FbsTglL1gdFVVXLCtvJjXsoFhyIucELOuzuhEU%2FWujCgHjV4xAemFpBkN24I0pEi%2BtybAblLjcJ7qpsgj8pwp43Z58b9382WOLOF6e3yBsdHtJh5bI4Hp48EyVpkj5Ry4XJA%2FFNjR24ZfAA8FnQUY26da%2FFQjC3zdHJBjqkAf4PLMWVlYyHsp%2FMHM2JkxWDuwceI7FLUHjmRE7sd1DpjaBmgTUbzuh9Vg4BND7P6f51g1Gv60yFljEGi8CIZXm99opNsjbGmXekPcQjS64GmCbviG10wdR76EWDOF11i5c2dBga4zQO9sEJPgWSwmuaDmJBYP8zR57PgREnRLoj5Tc%2FTYFkpAIqykVngaXj9XX2kaQZ%2Fd7w3bHtsFeCOqlfTcQA&X-Amz-Signature=53111e6ae0d76c9a2f426bf0ae251bccb778ddf14c8275fb3232495ff34820f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
