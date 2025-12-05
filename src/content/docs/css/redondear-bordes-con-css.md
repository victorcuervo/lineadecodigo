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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPB44UX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BsKJBw8TSj7IwiePnSKqRE9OjviaHmpk1glSAuhs8QwIhAMuJV0DL0wFViL%2Fvj%2F9igzc8YSGr%2FmToSnc1d9PXxNPEKv8DCGAQABoMNjM3NDIzMTgzODA1IgzgbMi%2Fw9tUme4kNVoq3AN2WkG9geRuXHIdxkTOFg%2Byh%2BHZr6EN0RQ4utyXt8XonOFI7rY%2Fw4QpRvygW6FWyn89A7DthrmTrpz7c%2FqJYugeH7wkaaCwq0ZpQV9vUYkIvzNeSIEx6bxjN2ULzqrSEP%2FEawD5gcW530flzJ54Up6VS%2F7bcF9ZQI%2FUUB3sIJmK3KHV6ke4Iq15uNQ%2FJmTh%2B4QBO30kcxiPUCZXVkYgGAJ7BP7l1LUG48TJWdB7cJN8mF32vsWFA6od7KleKSWd3%2BeQKAfve%2FlEYAW8qvbW9YnCk0XQgSQqH%2FO3KEeyvjSQVUsnfDX4lR54xNIzOAqqhwh4T8ma0904xV83H28I0NLwPE97WG6yra2tEgjZ1GQANus6cp%2FxXyujzgGSVzeXPVQ6zHzLW0WfmYbz4ZGF3vbRN72sIPJxcid7BoRPcOcrQi%2Bsg3kY5dC%2Bz47cQQXvi%2BEsgAJIJkkPG1RgfWgEE5ebSyVO2pSMDhzpkQgV6qr8mXD0%2BXwvrV%2Fxai6VCZWwkJm3hIgcyVJy3MAR5KaXkw2ooC3RBYYwi8OohPV2tdQ2YmhPQngXi9MB2vIaxlgmBR5BHuF3h1%2BqkA56Q3puP98NV4f71x3LScGrEx%2FcxRU3ql%2FdLUsXM3NxlwwgKDD%2B6cvJBjqkAaJS6HWHLpBZqr2GC5pu0xx4Y5VfQzoHo1ZgGPz58PqsdKt4G9Rhy6HnwJe5nS8xGD2F78BHVULJF%2BA4%2FHdUaQhKgugo3TODc5E6hoMn6QkKZoQr6H4QbSxCJ5WET7%2BsphFqQuu%2Bhp7ZJAYGwHaraBMBlZBQftrsmZZ%2BPI%2BKGAmx%2Fh79kUaCyWY%2FK66qk9tvWHvXKi9e8EQmt67Uem9ndbHBtZue&X-Amz-Signature=723916b25d3c4dc9df5aa5682d382429140d6d7d638bf92ab0b26ad7b264075c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663KPB44UX%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T153639Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC%2BsKJBw8TSj7IwiePnSKqRE9OjviaHmpk1glSAuhs8QwIhAMuJV0DL0wFViL%2Fvj%2F9igzc8YSGr%2FmToSnc1d9PXxNPEKv8DCGAQABoMNjM3NDIzMTgzODA1IgzgbMi%2Fw9tUme4kNVoq3AN2WkG9geRuXHIdxkTOFg%2Byh%2BHZr6EN0RQ4utyXt8XonOFI7rY%2Fw4QpRvygW6FWyn89A7DthrmTrpz7c%2FqJYugeH7wkaaCwq0ZpQV9vUYkIvzNeSIEx6bxjN2ULzqrSEP%2FEawD5gcW530flzJ54Up6VS%2F7bcF9ZQI%2FUUB3sIJmK3KHV6ke4Iq15uNQ%2FJmTh%2B4QBO30kcxiPUCZXVkYgGAJ7BP7l1LUG48TJWdB7cJN8mF32vsWFA6od7KleKSWd3%2BeQKAfve%2FlEYAW8qvbW9YnCk0XQgSQqH%2FO3KEeyvjSQVUsnfDX4lR54xNIzOAqqhwh4T8ma0904xV83H28I0NLwPE97WG6yra2tEgjZ1GQANus6cp%2FxXyujzgGSVzeXPVQ6zHzLW0WfmYbz4ZGF3vbRN72sIPJxcid7BoRPcOcrQi%2Bsg3kY5dC%2Bz47cQQXvi%2BEsgAJIJkkPG1RgfWgEE5ebSyVO2pSMDhzpkQgV6qr8mXD0%2BXwvrV%2Fxai6VCZWwkJm3hIgcyVJy3MAR5KaXkw2ooC3RBYYwi8OohPV2tdQ2YmhPQngXi9MB2vIaxlgmBR5BHuF3h1%2BqkA56Q3puP98NV4f71x3LScGrEx%2FcxRU3ql%2FdLUsXM3NxlwwgKDD%2B6cvJBjqkAaJS6HWHLpBZqr2GC5pu0xx4Y5VfQzoHo1ZgGPz58PqsdKt4G9Rhy6HnwJe5nS8xGD2F78BHVULJF%2BA4%2FHdUaQhKgugo3TODc5E6hoMn6QkKZoQr6H4QbSxCJ5WET7%2BsphFqQuu%2Bhp7ZJAYGwHaraBMBlZBQftrsmZZ%2BPI%2BKGAmx%2Fh79kUaCyWY%2FK66qk9tvWHvXKi9e8EQmt67Uem9ndbHBtZue&X-Amz-Signature=96a16b72680b2b79ad798552ea6c0f111774d37c6ab75f7a765a7d5d4bdbf90f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
