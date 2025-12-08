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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRST7GCE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwzqkiP8m7a1LhmN9vcGTeUPJ3A7lgaTEYXtVnVhoGNAiAte%2F16CGbiZGiAza7K6M2jTVsjqkqGjgab6DLAadP%2BACqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw8SKNbWU4tTdhZMtKtwDFx3UY5kin5ipKpBQ0YvuLAQrTEp%2FcA5icnzMUmZKM1gAmqhtLY5ucyO9LgNWlJ4MkbxjZsNQ2OYWpgNNBvJrFDW5VALnWr%2BRq0sCGFU%2BVENY%2BahVTy6nUUz55rl8So7IOTCiLNxwuRxcB8Lo2DUhH0HqNd7f1scFX%2BsL%2FzDPMcRWQsR7syGfBg%2B7xXNHo2CfEnYrZNwz3MutxXfFYRgLuu%2FXh5UNPidd72RDAJ8tsLjBZW0fFwZxubNwb%2B8LP432FhdFXJcvs12kbvPoXVfzUX0mqFbkWxVEcABErZQhGw%2F2UtttoF0We9GOpsMQIfd4fuOLq5nlyno7KsBuu%2BFox0AFVgn3S1hrHbF2xziWeuLhBTB6JbT5ePgo3LN1iXAPi2lkrf6IsHbkQyqOEfSXubGMn%2B8UQry7FttqVn1OTtZpw36DJgpYImWs05mta5cVdJibONPvhFu1D5rb1ud%2B%2BnlbUZ6pKc4I4YOhFQqVZjHLVcpLgstdNllX6AZv%2F4ediZ8T4dHOAArf9tMqvJMR4oONCeq8Nj2FdhPvEY2Lt49z7YUDeDNidexQh2uA1mKWqMUs1sfDIGRderkti3YoVFJQoELWNG18MYOy7fMh48MNwOgIUmNC2i7RedYw2cHbyQY6pgEtgEqWb97Yb4X%2FPI8E7XdxGJIQ9I4rsQfMUkul9agjmUDYcif7yfh1aRTYYwIWGfFq8%2BhOZlQ%2BtuMMnLgEUxdEY%2FjHgoK0HYSCZ910zCJ0UY6vjeIJJ9QRlVZ0vdQuOF2ZBKivyIt0R1G5SyrqqwBddz5%2FemXSzO2eHIn7iUgp8bJ5wVogfZk%2BIMzCQD791rQy7e9nyC1bkdBGq%2Fj3Og%2F7C%2B3w1P7f&X-Amz-Signature=33686aca9ded96f3c79b2a3b235260b0c210d17f15a9a53a4143066fed71b0c1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRST7GCE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDwzqkiP8m7a1LhmN9vcGTeUPJ3A7lgaTEYXtVnVhoGNAiAte%2F16CGbiZGiAza7K6M2jTVsjqkqGjgab6DLAadP%2BACqIBAio%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMw8SKNbWU4tTdhZMtKtwDFx3UY5kin5ipKpBQ0YvuLAQrTEp%2FcA5icnzMUmZKM1gAmqhtLY5ucyO9LgNWlJ4MkbxjZsNQ2OYWpgNNBvJrFDW5VALnWr%2BRq0sCGFU%2BVENY%2BahVTy6nUUz55rl8So7IOTCiLNxwuRxcB8Lo2DUhH0HqNd7f1scFX%2BsL%2FzDPMcRWQsR7syGfBg%2B7xXNHo2CfEnYrZNwz3MutxXfFYRgLuu%2FXh5UNPidd72RDAJ8tsLjBZW0fFwZxubNwb%2B8LP432FhdFXJcvs12kbvPoXVfzUX0mqFbkWxVEcABErZQhGw%2F2UtttoF0We9GOpsMQIfd4fuOLq5nlyno7KsBuu%2BFox0AFVgn3S1hrHbF2xziWeuLhBTB6JbT5ePgo3LN1iXAPi2lkrf6IsHbkQyqOEfSXubGMn%2B8UQry7FttqVn1OTtZpw36DJgpYImWs05mta5cVdJibONPvhFu1D5rb1ud%2B%2BnlbUZ6pKc4I4YOhFQqVZjHLVcpLgstdNllX6AZv%2F4ediZ8T4dHOAArf9tMqvJMR4oONCeq8Nj2FdhPvEY2Lt49z7YUDeDNidexQh2uA1mKWqMUs1sfDIGRderkti3YoVFJQoELWNG18MYOy7fMh48MNwOgIUmNC2i7RedYw2cHbyQY6pgEtgEqWb97Yb4X%2FPI8E7XdxGJIQ9I4rsQfMUkul9agjmUDYcif7yfh1aRTYYwIWGfFq8%2BhOZlQ%2BtuMMnLgEUxdEY%2FjHgoK0HYSCZ910zCJ0UY6vjeIJJ9QRlVZ0vdQuOF2ZBKivyIt0R1G5SyrqqwBddz5%2FemXSzO2eHIn7iUgp8bJ5wVogfZk%2BIMzCQD791rQy7e9nyC1bkdBGq%2Fj3Og%2F7C%2B3w1P7f&X-Amz-Signature=df6fbde4ec0c832c9447df2e972a640c7c7b1019292100d065a0de55aa8efa36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
