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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSPUYJI3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqs5Q7eKRCOGo2EVAcLrxIH4q8TB5%2F%2BY5OoiikWhuKhAiAGOD4ysYasexxgL11iaH20TlpM5e3S9NVtN4VB7gppKyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1kklhmWVatvR7jPuKtwDgxNz8R0WWhHayIzmMnMGqfsxbsmQVgOuaNk2%2FjdWarLBdGvk0DO8ID6R0hjFhqRjEbExGwJMFbtInunGmZHIeXmdG5zfq7ESmeIgTJJDJBwOk0iOAFLrxK052GenTzD5nw120Ge814DIYxhP%2BEz5LNJW0R3NJ1EWOt1%2Bsb7%2BqBnuu1od56qgfG5UN4LckWYeBLHwdbV2K6GWbscNMKgZ4EEohMBG5zAQrDD61%2Fap%2FjTK9mlFD4fdkOGJMqUpC5Dbr7eHA80TRmyGwOpwiitmU6MTCx%2BK3mxRPRTCN1BxdOls2rMrA1zWtDWRCAoVEo4tkFc0Mlwrdv5haKBb8TGin8QZ4GeW%2BaObsjqcg%2ByQ1IzCGxpeJiVVi%2BsRhDzKgAJ4naxHJ2Wr1tsSsfNM4SwCmiT3olm3ZGYKUD4%2FDdcjWgM%2BIOcer4IANz2pulH4luUFYPZ9ms%2F7ILWzX6nZ466WKdnwFJSTqxjGVNOv5wfFE3KTC5PRd24OqaHQ%2Bi3ufvrQ0ggfYJ3oyndKlBitDWLMaS%2F%2BNeiZ9yevNmmy0pYl8%2Bhjy6cIy%2FSeUDzMOaCriAND8CwXI0e6B8ShrxmoUCzVAJnPraJa%2FlR%2Bf7H%2F7svM49KE10fqWKnhQ746PM0wreXeyQY6pgGju4vrTaonjGiMWSyoL%2FY9ZicPeis5v7tvVK56agJf2tHJrMM%2B8OvSNlqdKbV%2FuelIaQOuuK6pFRxkLeuv9KOUJpG7NVM2b0TT5XG4yF4ASBTKTUra190UQM47mu9FujFPdsegP9kqdpGTHkC336Rl7cm8NfXxqXKAdKAvp602K0rS5RZS9avv2vRMZnXUi7BVh%2B%2BWunyeqOoeJKGyubfZdYOkteaJ&X-Amz-Signature=d9cffa0a3a3dcaa6fdac093aaaf5f387368847d0c97a2695abe31f63a556b936&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZSPUYJI3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T060105Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHqs5Q7eKRCOGo2EVAcLrxIH4q8TB5%2F%2BY5OoiikWhuKhAiAGOD4ysYasexxgL11iaH20TlpM5e3S9NVtN4VB7gppKyqIBAi3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1kklhmWVatvR7jPuKtwDgxNz8R0WWhHayIzmMnMGqfsxbsmQVgOuaNk2%2FjdWarLBdGvk0DO8ID6R0hjFhqRjEbExGwJMFbtInunGmZHIeXmdG5zfq7ESmeIgTJJDJBwOk0iOAFLrxK052GenTzD5nw120Ge814DIYxhP%2BEz5LNJW0R3NJ1EWOt1%2Bsb7%2BqBnuu1od56qgfG5UN4LckWYeBLHwdbV2K6GWbscNMKgZ4EEohMBG5zAQrDD61%2Fap%2FjTK9mlFD4fdkOGJMqUpC5Dbr7eHA80TRmyGwOpwiitmU6MTCx%2BK3mxRPRTCN1BxdOls2rMrA1zWtDWRCAoVEo4tkFc0Mlwrdv5haKBb8TGin8QZ4GeW%2BaObsjqcg%2ByQ1IzCGxpeJiVVi%2BsRhDzKgAJ4naxHJ2Wr1tsSsfNM4SwCmiT3olm3ZGYKUD4%2FDdcjWgM%2BIOcer4IANz2pulH4luUFYPZ9ms%2F7ILWzX6nZ466WKdnwFJSTqxjGVNOv5wfFE3KTC5PRd24OqaHQ%2Bi3ufvrQ0ggfYJ3oyndKlBitDWLMaS%2F%2BNeiZ9yevNmmy0pYl8%2Bhjy6cIy%2FSeUDzMOaCriAND8CwXI0e6B8ShrxmoUCzVAJnPraJa%2FlR%2Bf7H%2F7svM49KE10fqWKnhQ746PM0wreXeyQY6pgGju4vrTaonjGiMWSyoL%2FY9ZicPeis5v7tvVK56agJf2tHJrMM%2B8OvSNlqdKbV%2FuelIaQOuuK6pFRxkLeuv9KOUJpG7NVM2b0TT5XG4yF4ASBTKTUra190UQM47mu9FujFPdsegP9kqdpGTHkC336Rl7cm8NfXxqXKAdKAvp602K0rS5RZS9avv2vRMZnXUi7BVh%2B%2BWunyeqOoeJKGyubfZdYOkteaJ&X-Amz-Signature=941f5bb3e2fb12399769ee840f67da107fbb5e27006d326e9d92522fb651d159&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
