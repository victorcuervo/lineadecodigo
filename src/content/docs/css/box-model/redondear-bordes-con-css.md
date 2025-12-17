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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AXXL7J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbCFvZ8dSeQmuzOMS5SyHgXNoF8AvROOX3A1fQjrPiAgIhAMOeoZalTQ%2FY5pe2QSpNSsvTtUW24NFR2L7JvCx9%2BhLLKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfWdrWJChzESNM0iQq3AOpuAQDa2Ca5IpWVL6BpTnB5UAjlp28u3vZfh6So79Fzbax4RTRx8M6mPAUSDg0hF%2FAwBse61KOmO5YLDgtBbyMx53Yh6e8Qk0CqztNIIkRB%2Bu813di7VBi4sQSjE9xShL7OjXhJuCnzDVr3240v9hB5DqANShwTI2DXg4wzzyw0TF0yR%2B2kJ%2BdrFmPlk71%2FdR8Ud6G3js5TshkmItflGs%2B5eW9ape9zrqwkE6mIFkevr0AddrR9YhfaWy2oPFnQMKjtOsukVTSYmKgsqF%2BOy6cNGkGqSxY0OZuqYvZbSDs6fpkaBUgoW0uUTohA%2B%2Fz2YNTVBK8npo1F8VXoSWR1ZO1eamqR43qSmpPeJLK6NnCkDv0tTu%2BtHuru2%2BMY48EYHzWGHdFhDyjonw4XzTgjVq8BKEWHe%2BHHbdxWASsnvvwvlQDpxDLtxK%2BavESiVGlwKzRO5GCD1XpmJdq%2BbjNmRoSsPUiEvnjwYoFkd6vQPrBBT2BkVkX3QLKKACh5YLUenGHDoEHMFfTM6WHu0xi9%2FIz0ApyHNAU4NgaZcqQe2KAo5PoZxbQIxw3lHuOfPJU%2FmSB9RkL9NN9mLp71b03PaO53FnGtSSXqvcMSIRi5QW6CYTW6cUlrmhPiKAATTDXgYvKBjqkAQ%2BNvJaazX8%2FHoNpqgZB9bc8PzZPy1e%2F0%2Br00gHQ%2FKH198gObJTrlCfbpsqkq8OTetJ5euoxTUaNJBBJXATzfRV1mhzNlZxvpsLNDgAkciqsM4y5CpoVp6jVVx1ITF3IU9cCxJhWewfOU9TVuBxh7VY3IepUjteEK641bIkl4TFSDpDLR7ywtDQywH%2Bs%2B4O6fDOlRQg0FAUX9ugeCfrb3OwyH3VS&X-Amz-Signature=439cb999d520ab1f0b33c6c9ade994472711d4189b46b6d8eecd24fc22131730&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622AXXL7J%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T151331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbCFvZ8dSeQmuzOMS5SyHgXNoF8AvROOX3A1fQjrPiAgIhAMOeoZalTQ%2FY5pe2QSpNSsvTtUW24NFR2L7JvCx9%2BhLLKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwfWdrWJChzESNM0iQq3AOpuAQDa2Ca5IpWVL6BpTnB5UAjlp28u3vZfh6So79Fzbax4RTRx8M6mPAUSDg0hF%2FAwBse61KOmO5YLDgtBbyMx53Yh6e8Qk0CqztNIIkRB%2Bu813di7VBi4sQSjE9xShL7OjXhJuCnzDVr3240v9hB5DqANShwTI2DXg4wzzyw0TF0yR%2B2kJ%2BdrFmPlk71%2FdR8Ud6G3js5TshkmItflGs%2B5eW9ape9zrqwkE6mIFkevr0AddrR9YhfaWy2oPFnQMKjtOsukVTSYmKgsqF%2BOy6cNGkGqSxY0OZuqYvZbSDs6fpkaBUgoW0uUTohA%2B%2Fz2YNTVBK8npo1F8VXoSWR1ZO1eamqR43qSmpPeJLK6NnCkDv0tTu%2BtHuru2%2BMY48EYHzWGHdFhDyjonw4XzTgjVq8BKEWHe%2BHHbdxWASsnvvwvlQDpxDLtxK%2BavESiVGlwKzRO5GCD1XpmJdq%2BbjNmRoSsPUiEvnjwYoFkd6vQPrBBT2BkVkX3QLKKACh5YLUenGHDoEHMFfTM6WHu0xi9%2FIz0ApyHNAU4NgaZcqQe2KAo5PoZxbQIxw3lHuOfPJU%2FmSB9RkL9NN9mLp71b03PaO53FnGtSSXqvcMSIRi5QW6CYTW6cUlrmhPiKAATTDXgYvKBjqkAQ%2BNvJaazX8%2FHoNpqgZB9bc8PzZPy1e%2F0%2Br00gHQ%2FKH198gObJTrlCfbpsqkq8OTetJ5euoxTUaNJBBJXATzfRV1mhzNlZxvpsLNDgAkciqsM4y5CpoVp6jVVx1ITF3IU9cCxJhWewfOU9TVuBxh7VY3IepUjteEK641bIkl4TFSDpDLR7ywtDQywH%2Bs%2B4O6fDOlRQg0FAUX9ugeCfrb3OwyH3VS&X-Amz-Signature=9a8d5d1ea6f77a4dc4b8e9746f8f147b7ff03d96244f06634a1785ca3a01dc9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
