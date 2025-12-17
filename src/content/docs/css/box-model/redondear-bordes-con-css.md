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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4V2BSJO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsIKjO6UVoH%2B2de1PSB%2Fw4ILUrFDNGlXczttzsQbBJpAIhAKLafVJCFKnbci%2F0fO5wU%2BXLpBY0V3JJGHur%2BO9ckqySKv8DCH0QABoMNjM3NDIzMTgzODA1IgwYgg06kTQXkNJGE10q3APOyKaJeG58BJhEOKdFS%2FDzzLpHIInvyQU7bZ%2BKmEmT81hc0B9tVv4w%2FZjNmGgXaaAK5w3jKSFZ60omoVfS8kxh0KFoQxubbBW3zp5ZGYvUxZlTogLBtSQFQR6mLPWUSLETg1XQP5jP3I9JvQkXuJxRnB8D31GABlYcqBoR77eGvzFEhnAS1jgIm10iSu2sqqSn6ZWzs36g7%2Bi6IT%2FemY0PCgrlu7yWKPniQ0hSoP2QKOWUxG9CV6SfwRjEw0PO%2Ft1BN6Q8dg79%2BLiMbOMSvSYiZk6pluhW%2FXPzv%2FEIHAs4V8noj88Rsz64jXRxz9E3bjyfDdm8DCvSRy0CSGqMZ2EWJaJoi2krOnjgOR%2FhUQX6W0Wt9ckiJO%2B2e0xec44pDiBSFsOTUUp27QDjc8gKOwscuvmOjODMQm3xDyOWxq1o2VJVRA4HTZi9JvOCDSOZsbktf8xLkhglnS13cQkzrhomR7XtEoa8kkKlJVsVHg8IljXDySKXeG%2F3ygw4db1WfQi2rg5f3ymVvmObQDmn9Ea%2B3VVdyV2FnroFkAwfV7XzIYmamMGLQIwY7GbiAfjAL7DHY1mXcqbQY9l07238n5IwwW99syXICRD8RZ0Z5xYXz5OGamCehKaYG6Ye3TC9qorKBjqkAQvz%2FDcUUIVjdt%2BFR%2FeaCaqnyHTILXZdIKWQjA7Ak0dTgem7Dm%2BWvRlKd8SgB660hUjWVvmkLT1wvCy46s6DvSJ5C9fxN9ad%2BAi6M4ixHSgW44UbbImZtJCsNzwpY2tc1BSYmFP0BBVJmtmrjeJDzDWtCzYtMe%2B7xkLiL4CRvX2dHBv3F2kKKsfSTH3RzTnqh9nnskAChaQ8TE4GFXktk2tFimim&X-Amz-Signature=7d93d128409fa23fa91ccf27d5690fe9bd3193ea4fb40a165f3af24434455db8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y4V2BSJO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T122547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsIKjO6UVoH%2B2de1PSB%2Fw4ILUrFDNGlXczttzsQbBJpAIhAKLafVJCFKnbci%2F0fO5wU%2BXLpBY0V3JJGHur%2BO9ckqySKv8DCH0QABoMNjM3NDIzMTgzODA1IgwYgg06kTQXkNJGE10q3APOyKaJeG58BJhEOKdFS%2FDzzLpHIInvyQU7bZ%2BKmEmT81hc0B9tVv4w%2FZjNmGgXaaAK5w3jKSFZ60omoVfS8kxh0KFoQxubbBW3zp5ZGYvUxZlTogLBtSQFQR6mLPWUSLETg1XQP5jP3I9JvQkXuJxRnB8D31GABlYcqBoR77eGvzFEhnAS1jgIm10iSu2sqqSn6ZWzs36g7%2Bi6IT%2FemY0PCgrlu7yWKPniQ0hSoP2QKOWUxG9CV6SfwRjEw0PO%2Ft1BN6Q8dg79%2BLiMbOMSvSYiZk6pluhW%2FXPzv%2FEIHAs4V8noj88Rsz64jXRxz9E3bjyfDdm8DCvSRy0CSGqMZ2EWJaJoi2krOnjgOR%2FhUQX6W0Wt9ckiJO%2B2e0xec44pDiBSFsOTUUp27QDjc8gKOwscuvmOjODMQm3xDyOWxq1o2VJVRA4HTZi9JvOCDSOZsbktf8xLkhglnS13cQkzrhomR7XtEoa8kkKlJVsVHg8IljXDySKXeG%2F3ygw4db1WfQi2rg5f3ymVvmObQDmn9Ea%2B3VVdyV2FnroFkAwfV7XzIYmamMGLQIwY7GbiAfjAL7DHY1mXcqbQY9l07238n5IwwW99syXICRD8RZ0Z5xYXz5OGamCehKaYG6Ye3TC9qorKBjqkAQvz%2FDcUUIVjdt%2BFR%2FeaCaqnyHTILXZdIKWQjA7Ak0dTgem7Dm%2BWvRlKd8SgB660hUjWVvmkLT1wvCy46s6DvSJ5C9fxN9ad%2BAi6M4ixHSgW44UbbImZtJCsNzwpY2tc1BSYmFP0BBVJmtmrjeJDzDWtCzYtMe%2B7xkLiL4CRvX2dHBv3F2kKKsfSTH3RzTnqh9nnskAChaQ8TE4GFXktk2tFimim&X-Amz-Signature=fe7ec81b37bccf52080b44f46ad0464eabf211fd9ff93569bb3e7569a3ffae13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
