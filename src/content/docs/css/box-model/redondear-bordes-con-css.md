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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIT33YZQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMCRbXyJXXwBEGu6TUXmmBOMaaSlCTFS9LUWu3V3UqoAiEApU1L70e8tEWoYy4Imw%2FZOAoo%2Fv6WL3%2FevI8hqR7L9Swq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOJATBEBfXISOVLDfSrcAy8ACLADnPRmpcvJJqlXgkCPuV4uZ6pK1GqQ%2BE5LyuDkyTx62JVt8YQr3tR1c1v9V3YXjVaRGDHg%2B26e6iywLexqWHrkRAVUqofUYqG55zRRBbA8anZLqxlVh%2BS6avUFPVlxBSFwQe7iFq2VA2%2BH6QkIyqhdtcxxC6efarmC4qkDGAbheFvFmBDw8EmEPZFP%2Fyo6EePbdrL88EVzdDb7dtKqfLeSmIm29N22gcc86y%2Bo0dnSJawMk5jmSwQ0ZaYeeJSyrXNFbkjEFApbA0Navep7Nabn7oR9%2Bo8ua3avilj1jyHU5sZzSWTCB2tPbnwIF5b2VxMy7rpn4k6u4BDejkF9TNU5FeXXgeYqqbvvOPGAXe4%2FtyKMK%2FelVNtu9Utv55tGHTo9xnboo15SqgHzCYFGqrZtw3ExgB3hBoZ1VPBibm9lA5rIzTdHCPKSp%2FYADTil%2BxmgA7GeF1b1glvt3X6aUhEhm6GNDKvDMjL8FeJjQdwKmX84J0qVXsc%2BP9hoqfhmpk%2BjEdS6njVYeLC0aGyKzLYZLfYaxm9aoslHc5su8KGvEyUvpfKkOcDzv4plOP3mqEsb1Q9nlcWQd4VDG0DdXbhYtivBPJbdmXUNFfZmexHq5Y9DXCVomlhoMJ%2BDicoGOqUB9oBPaiBv3eE10OMkTjwOQ86rc6IytEbhEWLxjP5RjV4UymAPe8VlW1l4IxqgpLKrYnzYErVlIo9jHNeIMnKEOjVPjmCmW05EYJ5q1V3dhnYcqgu6bKPQmV%2FZAn%2Bi%2BfXi1EBKKtjWqRb9YoOxuStBjcbCUZ6DOgWLo5JWrSGRlsCraCb0tMqcL11s3UGvhq5c6XlzOzN%2FkUSG3ugX57%2FxzcJxsTQc&X-Amz-Signature=f8d9d157fe3f855fa0bb752eccea15e5d923da4fc52b2a25643687fa2f4aea5c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIT33YZQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICMCRbXyJXXwBEGu6TUXmmBOMaaSlCTFS9LUWu3V3UqoAiEApU1L70e8tEWoYy4Imw%2FZOAoo%2Fv6WL3%2FevI8hqR7L9Swq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDOJATBEBfXISOVLDfSrcAy8ACLADnPRmpcvJJqlXgkCPuV4uZ6pK1GqQ%2BE5LyuDkyTx62JVt8YQr3tR1c1v9V3YXjVaRGDHg%2B26e6iywLexqWHrkRAVUqofUYqG55zRRBbA8anZLqxlVh%2BS6avUFPVlxBSFwQe7iFq2VA2%2BH6QkIyqhdtcxxC6efarmC4qkDGAbheFvFmBDw8EmEPZFP%2Fyo6EePbdrL88EVzdDb7dtKqfLeSmIm29N22gcc86y%2Bo0dnSJawMk5jmSwQ0ZaYeeJSyrXNFbkjEFApbA0Navep7Nabn7oR9%2Bo8ua3avilj1jyHU5sZzSWTCB2tPbnwIF5b2VxMy7rpn4k6u4BDejkF9TNU5FeXXgeYqqbvvOPGAXe4%2FtyKMK%2FelVNtu9Utv55tGHTo9xnboo15SqgHzCYFGqrZtw3ExgB3hBoZ1VPBibm9lA5rIzTdHCPKSp%2FYADTil%2BxmgA7GeF1b1glvt3X6aUhEhm6GNDKvDMjL8FeJjQdwKmX84J0qVXsc%2BP9hoqfhmpk%2BjEdS6njVYeLC0aGyKzLYZLfYaxm9aoslHc5su8KGvEyUvpfKkOcDzv4plOP3mqEsb1Q9nlcWQd4VDG0DdXbhYtivBPJbdmXUNFfZmexHq5Y9DXCVomlhoMJ%2BDicoGOqUB9oBPaiBv3eE10OMkTjwOQ86rc6IytEbhEWLxjP5RjV4UymAPe8VlW1l4IxqgpLKrYnzYErVlIo9jHNeIMnKEOjVPjmCmW05EYJ5q1V3dhnYcqgu6bKPQmV%2FZAn%2Bi%2BfXi1EBKKtjWqRb9YoOxuStBjcbCUZ6DOgWLo5JWrSGRlsCraCb0tMqcL11s3UGvhq5c6XlzOzN%2FkUSG3ugX57%2FxzcJxsTQc&X-Amz-Signature=c82b6717a4cab19be299b3da12ebed3648726b33db5c35d207911fc081b07bf4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
