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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRACEP3U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASvF1N8tQc2%2BQjmHN5JQNGpOo%2BRt2OU4gn61VBclHlMAiBZOq1lJ%2BANZ5Ivk%2BIx3i6TNj2JjMUvF0EVO6iVQ7ygtCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM19Vgy%2FFrgPPiV4lbKtwDjvBARu8Uz%2BCEjY952m%2B5wuYyMgCEJua1dgIAH0O6eD4rRaNqy%2F3ckyeqFuZ8L39WlKYvxosJkwYRwAb%2F4%2B4H81qwhPyLxr7esUkxjhOeASmmm%2Fh2mQGSoOLUYzsZADuH0zlodScMof2bNdrVwhawOkrGEkAh8%2FVRGqeS2uNtDU%2FxYym8rNQ3Q8DOo%2BO%2F1ASXRqHJGKzPEjBbuEQfXeZxXCDVvOjsD6tTBX32qyNehoOYzPgLvSutZ414Scj3NRcD5eldxUVs8o4alDhdLV%2FH6OYp2x1LqSvHvlmjkYskL%2FlhlHrwmuLkzBFkZJCKKwvtl%2FXAFfnmLI%2BOKFTOZGG8QzKdkxbYNyRtqiyew89zKzNHujng52jKXdi0WDwLRcH%2FLjhzEKp437M9zRWLrByZ23ETv9J6PpPoYHme0Th4Yz8jd454MOeXBkCZBPyHSKTBiobGUWoiS%2B1JKDhBMG0FRE4JOOT7ao7COtd%2F0BBArHdVclkRcIjdgq2x2Qlnvu3BeN6D3wJ63S8qCO1TNDb6RqEz6Hx59ITJh7Gg1go3rx3DDqpjyPvyCXYSMikS%2FQDoupEkAW8jWG7upj6dgU246MqN4IxKbwcqvo9SzBZ2QvYm%2FY2AXx4ZAQzvrHww05TZyQY6pgEKj8lIoGjSZfI%2B2lYW9zouZQ97BGsgrbPyY0xprPZB0TnL9pMTHx3VNz0CVjhwV%2BH6bGKDAMewWNnIKTkQSaW2YqtW3oQg%2FHyaJAJ4xtnkYGYESlwSEQ3KsKDphcn%2BCw1vUu2PoOwFm%2FgYtsIG6x5zPx7HdEMj0VX134esoVfpkRHY6INPToHfzHi53hRVt%2BQQzEVly12uinsQCcJfcRTxqtKPF0SY&X-Amz-Signature=14f11062c847315452ac0158da7712e0924895f0dcfdfe0bfc62fa28418ab4ad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VRACEP3U%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T043506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIASvF1N8tQc2%2BQjmHN5JQNGpOo%2BRt2OU4gn61VBclHlMAiBZOq1lJ%2BANZ5Ivk%2BIx3i6TNj2JjMUvF0EVO6iVQ7ygtCqIBAid%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM19Vgy%2FFrgPPiV4lbKtwDjvBARu8Uz%2BCEjY952m%2B5wuYyMgCEJua1dgIAH0O6eD4rRaNqy%2F3ckyeqFuZ8L39WlKYvxosJkwYRwAb%2F4%2B4H81qwhPyLxr7esUkxjhOeASmmm%2Fh2mQGSoOLUYzsZADuH0zlodScMof2bNdrVwhawOkrGEkAh8%2FVRGqeS2uNtDU%2FxYym8rNQ3Q8DOo%2BO%2F1ASXRqHJGKzPEjBbuEQfXeZxXCDVvOjsD6tTBX32qyNehoOYzPgLvSutZ414Scj3NRcD5eldxUVs8o4alDhdLV%2FH6OYp2x1LqSvHvlmjkYskL%2FlhlHrwmuLkzBFkZJCKKwvtl%2FXAFfnmLI%2BOKFTOZGG8QzKdkxbYNyRtqiyew89zKzNHujng52jKXdi0WDwLRcH%2FLjhzEKp437M9zRWLrByZ23ETv9J6PpPoYHme0Th4Yz8jd454MOeXBkCZBPyHSKTBiobGUWoiS%2B1JKDhBMG0FRE4JOOT7ao7COtd%2F0BBArHdVclkRcIjdgq2x2Qlnvu3BeN6D3wJ63S8qCO1TNDb6RqEz6Hx59ITJh7Gg1go3rx3DDqpjyPvyCXYSMikS%2FQDoupEkAW8jWG7upj6dgU246MqN4IxKbwcqvo9SzBZ2QvYm%2FY2AXx4ZAQzvrHww05TZyQY6pgEKj8lIoGjSZfI%2B2lYW9zouZQ97BGsgrbPyY0xprPZB0TnL9pMTHx3VNz0CVjhwV%2BH6bGKDAMewWNnIKTkQSaW2YqtW3oQg%2FHyaJAJ4xtnkYGYESlwSEQ3KsKDphcn%2BCw1vUu2PoOwFm%2FgYtsIG6x5zPx7HdEMj0VX134esoVfpkRHY6INPToHfzHi53hRVt%2BQQzEVly12uinsQCcJfcRTxqtKPF0SY&X-Amz-Signature=1289e4c9d9f938a90d0452414e38bf22f7cdc045854bd66f2a0cfd06c41c6b6c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
