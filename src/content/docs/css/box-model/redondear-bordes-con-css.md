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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEHILDQR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQS5jjttYRIloKvvw3eoGktVWNN19zXfwPZljbtWUGFQIhAMRJGNV3siT2h8a3wIsbmmQeBxZlq2sPWYQp1BR7QHhDKv8DCHkQABoMNjM3NDIzMTgzODA1Igx967y3TEMsmjMwyg8q3APKm7sG9zRK%2BClmWoy%2BUA%2Bdv550MYD8XNenWXNwJyFanQkidoJKj8r14G7VEtRpD%2F0GTGIpnBGv6MVCM06PZ5sA4DicLT6%2FeUU0Xe2Rc48CrZQ2vZTn0DrRM5JkCE3B%2FW65ni2oWwR0sIzbf4qbm5QHn3uto%2F5piWnv7RGQb8RurX2K3yJ9BhGxII5hoGRTMm2vlrNAhYi0TrD5j0rEXDj2TQcOD6lNEw%2B7LAzIl%2BQ4aCpJljnz5qC%2FoMDt0yeueq3qYQYjf4xcRhvjfqRhEbq5ryCtKpU4M7gygGR1bsyJ0McUkOUnCsX9kHVjGpPLand2uFhwVJ0XWFFqKTarUSLU39L0fNYBptgwsPMZzISu1BjL4XhomrjjAc2xKFkVvqmYSyGcQ%2FEetB6XEGTN82MTWm57kGtYnHZaQ%2BZjrDETHEgxEZd3SdH5ng2G0%2BUNUdnJgTo14OOPTHzGwhBUnR%2BelOZCg8X9%2FVeZ4zf3JJxM5TTqYiNTNMnof6qASHwlDAliIcG5XJXH41EWAQQAXqdMfuJDibDOszDe8qx2TQLjgvPiwIBPQ3T1ln%2Bp6Jmpir3KiLGvyXwEqlE7TTXjfRjAzX9CF3%2FaHYLVihiOPrGpuimvIEM2Yi5NQ6XApTDv0YnKBjqkAQV3dtgxNXDJ38M%2F4HZMVMIR2i2bCP5odkBAwPAGQr3ZztApn4MlxrqyshS4ap7tg3C8M6hZ0ZKP7Q0RjGfCge0yNI%2FUpF8SwRCb9njmV789HvOOBnFNvqt%2BALag7ykZ8JfdBj182Nxpb7A0S8oWk8OUAWdyX7XyUTHBmQ%2FnALxSVoiPU5L%2FKXp3z7ktv2LJAjaPxNYBCa8i6Exqnd4eXpM%2FC8lP&X-Amz-Signature=606ff33b344807bf7eebc901ae2322363354c1bfd49b73cb0dc48ba03623a00c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VEHILDQR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T090441Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQS5jjttYRIloKvvw3eoGktVWNN19zXfwPZljbtWUGFQIhAMRJGNV3siT2h8a3wIsbmmQeBxZlq2sPWYQp1BR7QHhDKv8DCHkQABoMNjM3NDIzMTgzODA1Igx967y3TEMsmjMwyg8q3APKm7sG9zRK%2BClmWoy%2BUA%2Bdv550MYD8XNenWXNwJyFanQkidoJKj8r14G7VEtRpD%2F0GTGIpnBGv6MVCM06PZ5sA4DicLT6%2FeUU0Xe2Rc48CrZQ2vZTn0DrRM5JkCE3B%2FW65ni2oWwR0sIzbf4qbm5QHn3uto%2F5piWnv7RGQb8RurX2K3yJ9BhGxII5hoGRTMm2vlrNAhYi0TrD5j0rEXDj2TQcOD6lNEw%2B7LAzIl%2BQ4aCpJljnz5qC%2FoMDt0yeueq3qYQYjf4xcRhvjfqRhEbq5ryCtKpU4M7gygGR1bsyJ0McUkOUnCsX9kHVjGpPLand2uFhwVJ0XWFFqKTarUSLU39L0fNYBptgwsPMZzISu1BjL4XhomrjjAc2xKFkVvqmYSyGcQ%2FEetB6XEGTN82MTWm57kGtYnHZaQ%2BZjrDETHEgxEZd3SdH5ng2G0%2BUNUdnJgTo14OOPTHzGwhBUnR%2BelOZCg8X9%2FVeZ4zf3JJxM5TTqYiNTNMnof6qASHwlDAliIcG5XJXH41EWAQQAXqdMfuJDibDOszDe8qx2TQLjgvPiwIBPQ3T1ln%2Bp6Jmpir3KiLGvyXwEqlE7TTXjfRjAzX9CF3%2FaHYLVihiOPrGpuimvIEM2Yi5NQ6XApTDv0YnKBjqkAQV3dtgxNXDJ38M%2F4HZMVMIR2i2bCP5odkBAwPAGQr3ZztApn4MlxrqyshS4ap7tg3C8M6hZ0ZKP7Q0RjGfCge0yNI%2FUpF8SwRCb9njmV789HvOOBnFNvqt%2BALag7ykZ8JfdBj182Nxpb7A0S8oWk8OUAWdyX7XyUTHBmQ%2FnALxSVoiPU5L%2FKXp3z7ktv2LJAjaPxNYBCa8i6Exqnd4eXpM%2FC8lP&X-Amz-Signature=41cc7133eba1af9b5c9f6bf9cab5fd366e6690fd58cb7b13786eecb6e5e1a8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
