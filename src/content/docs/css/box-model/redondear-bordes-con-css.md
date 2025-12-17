---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EEYWAHP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2wMVk0TeJPSjcbqLWXlbETA9RM%2Blj6ZGEgY6wjOP5oAiA3ZdOYrDIrUVdKecPUgKfTUMih1PYtncyR1WIsbOA6dSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Ej%2FO%2F0%2FIIFoppx%2FKtwDnkx2GvxdwyX554h8oaPq%2FybDdxqonJx9Mt9txyDcsiler7%2Fr6j1HRyv37Oh%2BOvjBaUGbi7ccFz6dUf674nf4v4vzyqMVyy%2BNhpxv%2BnihpU3F7jIZHvkLG%2FIqZHkVf4DbZgd%2FZXf2xNFyk1msWlug1aLKA8Yp4ZeqbKBebDtUnZ0iyD%2F41BqkZU3q%2BDn0E05zv0on45sJ2wXONWnTyG%2B3qpBxb%2BLbiFUHodyPSqaTPRQkQGTXDlycN5o0f2dQveMGcB0C76OnKOeCIUkntE9%2BlvkLCYCxUlUOTd75SlGvMLjtSUOZZsjchu5uKeOZHzcnCaS3quQIGijYntlijrmOXeu9%2F0bIBIxAW9tWXmeS%2B2BYDHo21UnTKJqJOjHicViLUkuJbwntNKmK8BZs%2Fq2qSWOW80VeJBtD4yeHG8Njk%2BtWx6MKxrW4d7fTMRPhMEQf3gCZfpVhL9aHJ%2F%2BMloULYApPsaa3HGtny09hZpUs95G7H1x4VP%2BXwwDHsfD3o57Id2tssRExSpxwN%2F9lvCtZ3BkjfuXkWbofWWQ8iWSHCVDCf4hUTP182TpLlo7rjV5tDi2D274YjBNPoQOkE1YSGdw1QaNVWNsvElSEhk2ucMhFYHWjEAsuGjgIusEwu6CLygY6pgEbAzBDgu2d%2FtPjzZPnv1y%2BPPVMt%2B2mIAcEL5VVk2Rc8NXTUdoKo%2FZE7aLlXq5T4T88F9x4VxuPw9hzqQGHEV4BohKvXExjV0Vf%2BLA02w%2BwxnzbhAHxUGvZEEZmdk8WBWE9xLQ3HPzmGWB8YKjKTDyFks8L%2B8aPppVqjgyGu7CvFQjZhFm5Bq2Sa%2FAvEHQ4wWW4iYOM91FqZ4XhofQ8mp9wD1TYMQib&X-Amz-Signature=be488644cdfbcc3455c47799531773ff1e798cebf2baaca22d00cf698d4e5eb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665EEYWAHP%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T174453Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIB2wMVk0TeJPSjcbqLWXlbETA9RM%2Blj6ZGEgY6wjOP5oAiA3ZdOYrDIrUVdKecPUgKfTUMih1PYtncyR1WIsbOA6dSqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM2Ej%2FO%2F0%2FIIFoppx%2FKtwDnkx2GvxdwyX554h8oaPq%2FybDdxqonJx9Mt9txyDcsiler7%2Fr6j1HRyv37Oh%2BOvjBaUGbi7ccFz6dUf674nf4v4vzyqMVyy%2BNhpxv%2BnihpU3F7jIZHvkLG%2FIqZHkVf4DbZgd%2FZXf2xNFyk1msWlug1aLKA8Yp4ZeqbKBebDtUnZ0iyD%2F41BqkZU3q%2BDn0E05zv0on45sJ2wXONWnTyG%2B3qpBxb%2BLbiFUHodyPSqaTPRQkQGTXDlycN5o0f2dQveMGcB0C76OnKOeCIUkntE9%2BlvkLCYCxUlUOTd75SlGvMLjtSUOZZsjchu5uKeOZHzcnCaS3quQIGijYntlijrmOXeu9%2F0bIBIxAW9tWXmeS%2B2BYDHo21UnTKJqJOjHicViLUkuJbwntNKmK8BZs%2Fq2qSWOW80VeJBtD4yeHG8Njk%2BtWx6MKxrW4d7fTMRPhMEQf3gCZfpVhL9aHJ%2F%2BMloULYApPsaa3HGtny09hZpUs95G7H1x4VP%2BXwwDHsfD3o57Id2tssRExSpxwN%2F9lvCtZ3BkjfuXkWbofWWQ8iWSHCVDCf4hUTP182TpLlo7rjV5tDi2D274YjBNPoQOkE1YSGdw1QaNVWNsvElSEhk2ucMhFYHWjEAsuGjgIusEwu6CLygY6pgEbAzBDgu2d%2FtPjzZPnv1y%2BPPVMt%2B2mIAcEL5VVk2Rc8NXTUdoKo%2FZE7aLlXq5T4T88F9x4VxuPw9hzqQGHEV4BohKvXExjV0Vf%2BLA02w%2BwxnzbhAHxUGvZEEZmdk8WBWE9xLQ3HPzmGWB8YKjKTDyFks8L%2B8aPppVqjgyGu7CvFQjZhFm5Bq2Sa%2FAvEHQ4wWW4iYOM91FqZ4XhofQ8mp9wD1TYMQib&X-Amz-Signature=84925cf63300b4a0be841b39ccf39d5ea61181bd79f210fd71631028a8ec42db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
