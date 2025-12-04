---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6A2LRBI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIG4Ys9K6OxoMgeePxw8WqhJSaojhW5hslIL8ZZNaiEqjAiEAh8lnHSOh2LJvxS30rraIBZPxPXhX13wnOhpbjWVRIUQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGrlppscfx7uj2M0NyrcA92FJ1gbWRfO%2BlXORwog%2FTnA9FEA3dx5K6LA0vOy5AxVknDMLgqAmyqBl%2FOCAelx5h5LVNR%2B9vGE1eUeEKvRjUmG975yKEgbm0%2FFALVrf7Nl2XlHwbRs3rGNSMsWoMhtvGDxtbkeDeejDO4YLNoefd%2Bo3iyF7uhbs3jEJks4CekzCiFMjGSOR1u9i1VEy5IQXmUdY%2BSdJFoHPLs3uwGe8J%2B8b%2F%2BHWOv98w2wtoYCAh8RCAvCoBTXW3RgmuGTrff0i3thrSfbVg2UqwqgWxz6lO1z071Cb6u4yESYwOMIvhLVML1Crzk%2F8eIb9ed2R6XE3%2B6Ok7trNJC5g1Cmh%2B5pyqHaeSKwseZna2P5xGpjVxZZsr8qEoR%2FiLcaXOWkHGECzyzfDnZjCMdZveWuWFp%2F25SLT8bCkGHJ66TLHqhVp5ynWpYEVOvy0%2FQa1zR29G5cZ3oahsk%2FK2KjLPJ%2BwT4YA6xUIb5ok%2F%2FCAsizhZVpIBzpYJZVoi58WX44uOwGuINV7ktwxGkdTFpUnCAx%2B2z6%2FvZybAB3LcWjjykrHd8pXeLTv7xdGMlylFHi%2BWrnff2Hs21J%2FS%2BAkJU1bWb8vqBvI%2BVt5kEHX2coYG8e9tQvA7MmeFQUDQ0hOCUTvO1YMNODxskGOqUBA%2BqjAAI8lX0v0jEO1EbWnIl2wQhpEb2R%2BxfS3uhvSlkSnLZZYJUuXx9p69VEYYxAV5i92QrhFVwLAslTnMrPjRTvTXUFupNRP1Y6o7nJVEVg63%2B3VO4spWVgXR0gOLhHYUpTt%2BGXPG213PKmRKCqFb1tEuKmmFY9ZOlyEbP1LM2mu4FID7UwxMwBtFuUavJ9sO%2B69jGJJMZErbHa79Ta8PIVQB30&X-Amz-Signature=56489f30cc6fb34584916c37e41cc0f3a1635c4841dfff30965e6ffacc7d7c6f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6A2LRBI%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T131216Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJHMEUCIG4Ys9K6OxoMgeePxw8WqhJSaojhW5hslIL8ZZNaiEqjAiEAh8lnHSOh2LJvxS30rraIBZPxPXhX13wnOhpbjWVRIUQq%2FwMIRhAAGgw2Mzc0MjMxODM4MDUiDGrlppscfx7uj2M0NyrcA92FJ1gbWRfO%2BlXORwog%2FTnA9FEA3dx5K6LA0vOy5AxVknDMLgqAmyqBl%2FOCAelx5h5LVNR%2B9vGE1eUeEKvRjUmG975yKEgbm0%2FFALVrf7Nl2XlHwbRs3rGNSMsWoMhtvGDxtbkeDeejDO4YLNoefd%2Bo3iyF7uhbs3jEJks4CekzCiFMjGSOR1u9i1VEy5IQXmUdY%2BSdJFoHPLs3uwGe8J%2B8b%2F%2BHWOv98w2wtoYCAh8RCAvCoBTXW3RgmuGTrff0i3thrSfbVg2UqwqgWxz6lO1z071Cb6u4yESYwOMIvhLVML1Crzk%2F8eIb9ed2R6XE3%2B6Ok7trNJC5g1Cmh%2B5pyqHaeSKwseZna2P5xGpjVxZZsr8qEoR%2FiLcaXOWkHGECzyzfDnZjCMdZveWuWFp%2F25SLT8bCkGHJ66TLHqhVp5ynWpYEVOvy0%2FQa1zR29G5cZ3oahsk%2FK2KjLPJ%2BwT4YA6xUIb5ok%2F%2FCAsizhZVpIBzpYJZVoi58WX44uOwGuINV7ktwxGkdTFpUnCAx%2B2z6%2FvZybAB3LcWjjykrHd8pXeLTv7xdGMlylFHi%2BWrnff2Hs21J%2FS%2BAkJU1bWb8vqBvI%2BVt5kEHX2coYG8e9tQvA7MmeFQUDQ0hOCUTvO1YMNODxskGOqUBA%2BqjAAI8lX0v0jEO1EbWnIl2wQhpEb2R%2BxfS3uhvSlkSnLZZYJUuXx9p69VEYYxAV5i92QrhFVwLAslTnMrPjRTvTXUFupNRP1Y6o7nJVEVg63%2B3VO4spWVgXR0gOLhHYUpTt%2BGXPG213PKmRKCqFb1tEuKmmFY9ZOlyEbP1LM2mu4FID7UwxMwBtFuUavJ9sO%2B69jGJJMZErbHa79Ta8PIVQB30&X-Amz-Signature=d05af72e51ddc0b0b87e668bc9c062ff2ca87763d5033de072b0c5c7570118dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
