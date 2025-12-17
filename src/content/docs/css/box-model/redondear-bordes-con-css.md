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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6U727Y2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPC3ZId7W%2F6BPAeJt6Z7OSP3na78t8mhGgK4jtUuWQ5wIhAPMSkhKslIuO2zHo0AqtclAhbXAjZMpmvBJ%2B9FC2e%2F3TKv8DCHoQABoMNjM3NDIzMTgzODA1IgyZhJcwjrigXiKh7JEq3AMWdjg8mE29LmHAcIAsZbVXxNGHZ%2F%2FRYRfP5mptiYeAvDEZIWGosdKXifySR9eJW%2BJo4X%2Bp2bWO42VTerpQ4PUu1Te4lsyHK2B8AXVdWdnEgu7yGMFPUO3d5ibQ%2Fkc14n5teLQ%2Fe3dj3zDMtQx%2Fy7JxJJBa2ks1AhLhKd%2BZ0oNgY1KrzGJrtXNltCpC76yC%2Fx%2BN0h0aVpE722q4AacUeJ%2Fzn3%2BnUbjRAGg1JKLdOLBSdCCoezhyeEybe8Q5mA%2FRokUiPidykE%2FjDmxgP51mS59TwUQcLEgq5r52DTzFPvj47djqG0U%2BO%2BfswfQckAgRjGTToLOrygFNSzsU%2BN0SKGKLy4vz0fMwzT6UB5itrI8wSmfMXIuGiKAD%2Bnhyjya%2B4JQo0R1z2JWvyxWyImu3zj8uBJ5ZUsbSdB1O1EFw1%2BwhFc1Au0hzPvB%2B%2BvpNQ6Uq7OdMLjF%2Fe5sLC00y8zScGFmxutflodhW1w6uUi4ux%2F9cEA8AYbPP%2BEJJiItyO6xIfM7leUYsAfstZcV4t4VuOcIDQRZLmRAla8zDoYeAsyOkMeapL2cbADZ4wz5f1WBAKOjhWwsR5OOeLvooV%2Fdm1oBZmNbQ0RDj1Gos%2FhBvns%2BApr5qA2b0fb%2FZg1cDwTCA04nKBjqkATtjoUdaddO5WM0aH8ETe%2FzBX7hSjUtYE650IZjwWT8CTLbRXX0dsJCNnXse8jRsuYFvjmLhRbFaaxXYoLuqRu0YmaxQ1xjyivqZeIxEe2NIv1PdUnec%2FZCupD6m8diqrKGe80yIZoQ1MhOe0Hz5Gx8%2BlFw5f3mCMA6omWbm%2BgFwCJdMYN7dIaMAukyv67lPrYksH4elGxQYVyb%2BfgkK34EcB1Pc&X-Amz-Signature=6b5576ac31a5e74104834bb18e28aa373b33ea091dc26776f906f31a521c23b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R6U727Y2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T084337Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCPC3ZId7W%2F6BPAeJt6Z7OSP3na78t8mhGgK4jtUuWQ5wIhAPMSkhKslIuO2zHo0AqtclAhbXAjZMpmvBJ%2B9FC2e%2F3TKv8DCHoQABoMNjM3NDIzMTgzODA1IgyZhJcwjrigXiKh7JEq3AMWdjg8mE29LmHAcIAsZbVXxNGHZ%2F%2FRYRfP5mptiYeAvDEZIWGosdKXifySR9eJW%2BJo4X%2Bp2bWO42VTerpQ4PUu1Te4lsyHK2B8AXVdWdnEgu7yGMFPUO3d5ibQ%2Fkc14n5teLQ%2Fe3dj3zDMtQx%2Fy7JxJJBa2ks1AhLhKd%2BZ0oNgY1KrzGJrtXNltCpC76yC%2Fx%2BN0h0aVpE722q4AacUeJ%2Fzn3%2BnUbjRAGg1JKLdOLBSdCCoezhyeEybe8Q5mA%2FRokUiPidykE%2FjDmxgP51mS59TwUQcLEgq5r52DTzFPvj47djqG0U%2BO%2BfswfQckAgRjGTToLOrygFNSzsU%2BN0SKGKLy4vz0fMwzT6UB5itrI8wSmfMXIuGiKAD%2Bnhyjya%2B4JQo0R1z2JWvyxWyImu3zj8uBJ5ZUsbSdB1O1EFw1%2BwhFc1Au0hzPvB%2B%2BvpNQ6Uq7OdMLjF%2Fe5sLC00y8zScGFmxutflodhW1w6uUi4ux%2F9cEA8AYbPP%2BEJJiItyO6xIfM7leUYsAfstZcV4t4VuOcIDQRZLmRAla8zDoYeAsyOkMeapL2cbADZ4wz5f1WBAKOjhWwsR5OOeLvooV%2Fdm1oBZmNbQ0RDj1Gos%2FhBvns%2BApr5qA2b0fb%2FZg1cDwTCA04nKBjqkATtjoUdaddO5WM0aH8ETe%2FzBX7hSjUtYE650IZjwWT8CTLbRXX0dsJCNnXse8jRsuYFvjmLhRbFaaxXYoLuqRu0YmaxQ1xjyivqZeIxEe2NIv1PdUnec%2FZCupD6m8diqrKGe80yIZoQ1MhOe0Hz5Gx8%2BlFw5f3mCMA6omWbm%2BgFwCJdMYN7dIaMAukyv67lPrYksH4elGxQYVyb%2BfgkK34EcB1Pc&X-Amz-Signature=3556e5f3d6e9fdb788fe65cd0b8cfb4581cda17af4b30a9eb04b70a642c23899&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
