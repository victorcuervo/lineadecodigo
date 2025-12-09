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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEHLXWGY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEgdhIFPzHyaVTvPqxKUsgZtEzDE8BCmSK6qLHoypQyAiAAjHjcZK3XMWvyNueJsg5xQmXPfmwURJK47AU39FJC0CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEMjRSbRdBq6ePlPQKtwDgbj4YfkSRkeRQSMaNMYVtm0GHi%2B95HXyH36HfB01B%2FP18qHn5%2FkgDq%2FiMrPv%2FkrK3xjJM3xA%2BXfxHHDN1YWAcdIypzkiaCWxFuLwDxwAtDuzwGLoO%2FDlmvv5M9xUrGu3ugup38Jg0yUxmSldGU0091s2wFJR4QpcD0XxiA35wxqMyYf1g3kJAPgEFQU9MhlgOViIh8MAk%2BKVKxlM4SvmA%2B%2FKsEoiUsdfaYsMblStjqFTSHxs9XU8PcDIy4jDI8bchM6f0s7COX0wADHnXCvWAEJj96RY0i4PjzjLzBQWDXQSLJVNQGxNqquOkgjcci7G0aGgoMVR7kk7TpgOLnS5WBe1tn5JfwknmgH5u%2FVmhsoS1kT3BRkqjQxWsSWswLIjEmIsMJxdo%2BCXvINeAP1yEjA777c4OjXrDCPIpVJN24PDn2%2BshvDnqmHK2%2BebJvsIzP5ZTF%2BMmuFh021qbwW2lqQlthyhfx7UfVs6pgW%2Fu5qP8mZpYs%2BtaErk2O2pI7h0JFSRcIdfPR04kSEOWwH6DqDXJL0PFU%2FV6uG6ATLyncVaM2mLXomCPOd0KqRibR2m6GWOCnX0R6Cg%2B3pvxBWe2EOG86IcJ%2FrB%2FSEE3j%2Fg0CRySWTbSs6qJVOLrOsw5q3eyQY6pgGmoGDIWT0CMHjlWdSjXlZDs4hejfnke8MkDkqeKU3Heh72S%2FXn0uV41Yrygn1vW%2F0Y7UZRbohfg3zSvcPBp08a9VV7Zfj%2B7TtRilKxCFFBEywY8c1UiaLtek2v5PvhxNGUMF%2B54NVUe1FC2U%2B47Hqd9SI1ViXCKQxpOcJeVJyvV2n4PvvnLGhrdOGXvfJXvkiRJNuACXgcTVY3QN3qpTzL8aM4AqDh&X-Amz-Signature=1c66a66b56efb4963891f50bb766f798c9856bc3d80ba324e8cffe65837f7106&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XEHLXWGY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T040524Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEEgdhIFPzHyaVTvPqxKUsgZtEzDE8BCmSK6qLHoypQyAiAAjHjcZK3XMWvyNueJsg5xQmXPfmwURJK47AU39FJC0CqIBAi1%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMEMjRSbRdBq6ePlPQKtwDgbj4YfkSRkeRQSMaNMYVtm0GHi%2B95HXyH36HfB01B%2FP18qHn5%2FkgDq%2FiMrPv%2FkrK3xjJM3xA%2BXfxHHDN1YWAcdIypzkiaCWxFuLwDxwAtDuzwGLoO%2FDlmvv5M9xUrGu3ugup38Jg0yUxmSldGU0091s2wFJR4QpcD0XxiA35wxqMyYf1g3kJAPgEFQU9MhlgOViIh8MAk%2BKVKxlM4SvmA%2B%2FKsEoiUsdfaYsMblStjqFTSHxs9XU8PcDIy4jDI8bchM6f0s7COX0wADHnXCvWAEJj96RY0i4PjzjLzBQWDXQSLJVNQGxNqquOkgjcci7G0aGgoMVR7kk7TpgOLnS5WBe1tn5JfwknmgH5u%2FVmhsoS1kT3BRkqjQxWsSWswLIjEmIsMJxdo%2BCXvINeAP1yEjA777c4OjXrDCPIpVJN24PDn2%2BshvDnqmHK2%2BebJvsIzP5ZTF%2BMmuFh021qbwW2lqQlthyhfx7UfVs6pgW%2Fu5qP8mZpYs%2BtaErk2O2pI7h0JFSRcIdfPR04kSEOWwH6DqDXJL0PFU%2FV6uG6ATLyncVaM2mLXomCPOd0KqRibR2m6GWOCnX0R6Cg%2B3pvxBWe2EOG86IcJ%2FrB%2FSEE3j%2Fg0CRySWTbSs6qJVOLrOsw5q3eyQY6pgGmoGDIWT0CMHjlWdSjXlZDs4hejfnke8MkDkqeKU3Heh72S%2FXn0uV41Yrygn1vW%2F0Y7UZRbohfg3zSvcPBp08a9VV7Zfj%2B7TtRilKxCFFBEywY8c1UiaLtek2v5PvhxNGUMF%2B54NVUe1FC2U%2B47Hqd9SI1ViXCKQxpOcJeVJyvV2n4PvvnLGhrdOGXvfJXvkiRJNuACXgcTVY3QN3qpTzL8aM4AqDh&X-Amz-Signature=0f263f93a052b5f072170c872a906a62a1eae198b27fcf67e9de2140fa323834&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
