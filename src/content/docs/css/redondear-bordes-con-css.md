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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNA4VWV5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNV2QUdxLNkNbT5HF9B1psOwIpOLUBK1ZgUOhTQKb7jQIgeC4GArDN9uKQEs7zdOvFl1ZO3C2TP5L59D8ZRjwG%2FrkqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6ITG4XbgGWf9cxfCrcA0ecLpp2KfSTi1boeDPc06cC%2FL4C7L8y%2FOsUJ4U%2B7Gf63WQEaJ3n7qbDxLM%2BKFVz7YhferDf5YwV3I9neGODZFfFOwOeUJ24y99oAVHNo%2FL4DcMkQ11%2BnRVzqxtoGydvMLqwhd6VHEgWrpiwBVFE4%2BfIonR0xNQrf6%2FqUiQx8RxbgGUXCvH%2ByQyHIN%2Fu89oSGE9MMZ2OmQ5SKnL8uMpqWT%2B4ooihN76yVxmEAhJEz6XJsBsvHHE0hhjgwmKFsNj%2BrD3DqNGVP2AZcPtxLVRSKUlPvi1uUbOWzOYdFcIs63TUUZa8ZINKhJhDlODe3JU2sAOcYXvWpEph6fkH%2FBRGRJG9cnYlTv6UOsoF1fMD9KlMt%2BviqRPAwjgCjxq0nDirH2EZuxWEjYGnw5d7OsVmkGbHwYE5AyHO%2FaSHJ%2Fp0HsfuE1h6Acyk6P2LD%2BAx%2F3F8sD3F%2Fdn2ap5f3WlpC5OzV0xUU1%2Bz7sOu%2F83iqUb7Ikg7JpVqNROS4gBgTeOrFIidRnKhvOrNPuLUgx7YZm0Ygnjcm%2BxVOrdTZP0YjaS9oKU1OGRDtptw4YN6SXecZ6OqZzafo2lGFVoSioN3eEY7KiDaPQU8oPD5KUKCQsfjm98cnGra%2Fqj3rSTXnCnsMM7l3skGOqUBqWDg4l2OoAgKurItNZ0%2BYIQWPm3xW6UmIhfZn2HJA8rep3K4OBlW3eTYBSZJp8NHuf5CSFwvHt8mwHG2e%2B7F7BQRDvfAN0HSw1hH235jTRVBmV%2FORvF3BCe9boC21dYp0fT5u5nAoZKKIytRGci36fF2lIRWLQD9s199FDzfOo2oZvbK8QWwmtgOmKJoF9X4e8qbK7CRk6ovtQrBw%2FvjFj4Liwn%2B&X-Amz-Signature=b831fdf9cd42ba99229384c6598e9866d432550ef589c8bd7f225df79882b013&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UNA4VWV5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T061109Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNV2QUdxLNkNbT5HF9B1psOwIpOLUBK1ZgUOhTQKb7jQIgeC4GArDN9uKQEs7zdOvFl1ZO3C2TP5L59D8ZRjwG%2FrkqiAQItv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL6ITG4XbgGWf9cxfCrcA0ecLpp2KfSTi1boeDPc06cC%2FL4C7L8y%2FOsUJ4U%2B7Gf63WQEaJ3n7qbDxLM%2BKFVz7YhferDf5YwV3I9neGODZFfFOwOeUJ24y99oAVHNo%2FL4DcMkQ11%2BnRVzqxtoGydvMLqwhd6VHEgWrpiwBVFE4%2BfIonR0xNQrf6%2FqUiQx8RxbgGUXCvH%2ByQyHIN%2Fu89oSGE9MMZ2OmQ5SKnL8uMpqWT%2B4ooihN76yVxmEAhJEz6XJsBsvHHE0hhjgwmKFsNj%2BrD3DqNGVP2AZcPtxLVRSKUlPvi1uUbOWzOYdFcIs63TUUZa8ZINKhJhDlODe3JU2sAOcYXvWpEph6fkH%2FBRGRJG9cnYlTv6UOsoF1fMD9KlMt%2BviqRPAwjgCjxq0nDirH2EZuxWEjYGnw5d7OsVmkGbHwYE5AyHO%2FaSHJ%2Fp0HsfuE1h6Acyk6P2LD%2BAx%2F3F8sD3F%2Fdn2ap5f3WlpC5OzV0xUU1%2Bz7sOu%2F83iqUb7Ikg7JpVqNROS4gBgTeOrFIidRnKhvOrNPuLUgx7YZm0Ygnjcm%2BxVOrdTZP0YjaS9oKU1OGRDtptw4YN6SXecZ6OqZzafo2lGFVoSioN3eEY7KiDaPQU8oPD5KUKCQsfjm98cnGra%2Fqj3rSTXnCnsMM7l3skGOqUBqWDg4l2OoAgKurItNZ0%2BYIQWPm3xW6UmIhfZn2HJA8rep3K4OBlW3eTYBSZJp8NHuf5CSFwvHt8mwHG2e%2B7F7BQRDvfAN0HSw1hH235jTRVBmV%2FORvF3BCe9boC21dYp0fT5u5nAoZKKIytRGci36fF2lIRWLQD9s199FDzfOo2oZvbK8QWwmtgOmKJoF9X4e8qbK7CRk6ovtQrBw%2FvjFj4Liwn%2B&X-Amz-Signature=fadf7580fe8bad8da57c67fee8dd3071c7ef7efb6695dea19c6fcb6e8f20dafc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
