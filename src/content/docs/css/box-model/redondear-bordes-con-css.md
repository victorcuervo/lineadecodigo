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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NT4I4YR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2wiR%2Bb3%2FwcCYjiSEC9uhuY6FUwdjC6hqjwQgTUExfugIhAL%2BXIxeit1IchjYNxIx8tuNVf%2FF3IV%2BfmgeYaouzMxFxKv8DCHQQABoMNjM3NDIzMTgzODA1Igz9PgS%2B8YJhjU%2BNFK8q3APG%2FF%2Bdo%2FG1TuP%2FwpdyInzPoIkGA8q449TsfpL3%2FxVOCDqXYyZzfdwqTJSKL%2FA21ycLJjtzC7VGa%2BKdIqF3ksTt76LGrDNlIP6ujENsSEZx9LFsoXLn1VU%2FHT1FnzBOcn99tMDvmTEvz%2F7pAfZVlY6O3iwhhIBxpDUgsZdtugYo05IlGBa4H4Tnr6%2FaF7Yxp8wKZrRmxaIPvKHMExZHPgOnGdTqVR0GMy9RkORRqPdKJRvovpLKgTFtap0wnUBT2IWjPGrcD%2B%2BEt3WIC0jTpKs%2B0%2FqQIC9Bf8zgYcd8whb78VkQzYv6Cm2sq3OaKQEIrE00Z%2B%2FG4tD00k3%2FD4ygSVPlRbj%2BxAV5M%2BkQITfdrHbTD%2FE9mfbK0kUDcq9dS%2FusMaoSjCVXAh6LoN0jr4JM06ZpeSq9tnIIrxCv4XpFs8WU0QBKNy7GqVOcRdrCj5ZxNvmqnj499QNamn6m1EfEoePfXsqNL0XffdqhTiofG7NxamDH6kCRZTKrLBUrZ%2FqG1H6UIhltKAyXMyxTFyv4LthVzpVDmMH%2FsQiWB9Ln0KzaE1mC220np%2BHvPtnahMO5rUKrPnENJVIMMLrfd%2BjMXlSFC%2FINq96j6R6eR0mxNi4f1ds6%2BrF7o%2BQ1J7%2Fr9TD1sojKBjqkAZUsM7Ur0lLfIva5kL4ZnX2PdKHiktx5zp3Lu9zvSBqyUE6gNk4HEL5rXWVREqZiQ64PQhCWg5QdYjIH1Hfqo0iIsUucSSUSK9SSmGdkExvY%2FBkErY%2FQz2AqyO9BFyCm0slQ7n4CgrFmJi1%2BJ20gNzh7eJ8Tq2LWHz9KDG8Vbbelr%2FAhJr1AUqG7L%2FzTqG3rL1S76UvU7GOFjqT96BCsXze5V%2BAz&X-Amz-Signature=69d9e23dd673c4ff45269e6ae12baddbf9226e35fab809a2c00f84ff5834ba8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NT4I4YR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033720Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD2wiR%2Bb3%2FwcCYjiSEC9uhuY6FUwdjC6hqjwQgTUExfugIhAL%2BXIxeit1IchjYNxIx8tuNVf%2FF3IV%2BfmgeYaouzMxFxKv8DCHQQABoMNjM3NDIzMTgzODA1Igz9PgS%2B8YJhjU%2BNFK8q3APG%2FF%2Bdo%2FG1TuP%2FwpdyInzPoIkGA8q449TsfpL3%2FxVOCDqXYyZzfdwqTJSKL%2FA21ycLJjtzC7VGa%2BKdIqF3ksTt76LGrDNlIP6ujENsSEZx9LFsoXLn1VU%2FHT1FnzBOcn99tMDvmTEvz%2F7pAfZVlY6O3iwhhIBxpDUgsZdtugYo05IlGBa4H4Tnr6%2FaF7Yxp8wKZrRmxaIPvKHMExZHPgOnGdTqVR0GMy9RkORRqPdKJRvovpLKgTFtap0wnUBT2IWjPGrcD%2B%2BEt3WIC0jTpKs%2B0%2FqQIC9Bf8zgYcd8whb78VkQzYv6Cm2sq3OaKQEIrE00Z%2B%2FG4tD00k3%2FD4ygSVPlRbj%2BxAV5M%2BkQITfdrHbTD%2FE9mfbK0kUDcq9dS%2FusMaoSjCVXAh6LoN0jr4JM06ZpeSq9tnIIrxCv4XpFs8WU0QBKNy7GqVOcRdrCj5ZxNvmqnj499QNamn6m1EfEoePfXsqNL0XffdqhTiofG7NxamDH6kCRZTKrLBUrZ%2FqG1H6UIhltKAyXMyxTFyv4LthVzpVDmMH%2FsQiWB9Ln0KzaE1mC220np%2BHvPtnahMO5rUKrPnENJVIMMLrfd%2BjMXlSFC%2FINq96j6R6eR0mxNi4f1ds6%2BrF7o%2BQ1J7%2Fr9TD1sojKBjqkAZUsM7Ur0lLfIva5kL4ZnX2PdKHiktx5zp3Lu9zvSBqyUE6gNk4HEL5rXWVREqZiQ64PQhCWg5QdYjIH1Hfqo0iIsUucSSUSK9SSmGdkExvY%2FBkErY%2FQz2AqyO9BFyCm0slQ7n4CgrFmJi1%2BJ20gNzh7eJ8Tq2LWHz9KDG8Vbbelr%2FAhJr1AUqG7L%2FzTqG3rL1S76UvU7GOFjqT96BCsXze5V%2BAz&X-Amz-Signature=369404c251540c85092622e3d882141000448da342981256730abacea50cdd04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
