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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIIG2YVS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BdnWxXVhGi68bgwcJjFI1VYVmMf9qlo0n%2FR%2BczCjJPAiAxmAXTP8yLtz%2F42vF%2FSsiBxtgjgPdo4VvllzkT7ctsoSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO4b2dKhJGuCa8RnNKtwDkwpncGp%2FaJU1UizuBYbkN4S6FaA29PeFm%2FqMCYZsNgZC0xKy%2FpBPDDeasomX23gE78AN86%2FtgC76oBpPzvPVJFjDHxqxlnR6Xasel%2BOHNOE6Xl9kAa5NH%2FSlIogvAbieEkGcnuX3ixF3BAWnWDQEQSWuP6mJNEXrRd99pCAnhrg8XvpFiibZmPwEwzcK9%2BMnsveUniNSgpEJnyO%2FkZtYtTxSQQOrZh%2BRPsCKy0NUQVLrKdQFeM8TfROtUbhfWTrqISB%2BWz9oKOk2MNbSZLV0Rs5xkviPk4A7WcDaaE6GM5EK4WNZKgTqtbHDj0moOWL9AACfeznQH0%2BsK4hyuHYsXFNGdtAxW0pzEVipFplGc%2FSFiRK6guOwebfpmgvDtZuQgiY%2B9z8dg9LbymulJJu47jZHcwvILoA5QgbdTSC8QKotMcjPkiYLtpJE0EAgsOwWD1xysAY5tedwoqKvsCGrCRdMzSGRmYjFDFvImsY76H%2BYfW9qq2Mbp5owOfpM9WqrolwvdJRx4rjPWrkk8OT0hhIyOGt6RAu9dvJW0YLWcEUZPRY2WjIcGRD7sWzuKRuYCpRg5haPtjZAHOfjOI5BBH4Rz8ZRdMfyIkPYudWLeXyMV7cnxPeYRPecBPswyprVyQY6pgH%2FBCj86gVEkFnjDdTRHXG3ihYQikDh9N3J2HfXLGVTYDmTp8JoGw42V%2FRGDs1gxeWHu2OUsftxdHuLfLnoQHj7H7V9ESi%2BP2NPtZTdArpJ%2FgD84cJd3oBWrP8JUM8VLiz6e%2BKJhUdOeg4igUz1O9CRQjGfUttDdtzJtLIeNUU91nGtFME8OCDn1I%2BXuhhJ3tAjeq2pA8uOM5XN7YsMeKztibY6AjRK&X-Amz-Signature=e35d0fb6a73197619c63ce35455a111b3ca32bdf18a98ef8627f2bbf0574e920&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UIIG2YVS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T143424Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIC%2BdnWxXVhGi68bgwcJjFI1VYVmMf9qlo0n%2FR%2BczCjJPAiAxmAXTP8yLtz%2F42vF%2FSsiBxtgjgPdo4VvllzkT7ctsoSqIBAiL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMO4b2dKhJGuCa8RnNKtwDkwpncGp%2FaJU1UizuBYbkN4S6FaA29PeFm%2FqMCYZsNgZC0xKy%2FpBPDDeasomX23gE78AN86%2FtgC76oBpPzvPVJFjDHxqxlnR6Xasel%2BOHNOE6Xl9kAa5NH%2FSlIogvAbieEkGcnuX3ixF3BAWnWDQEQSWuP6mJNEXrRd99pCAnhrg8XvpFiibZmPwEwzcK9%2BMnsveUniNSgpEJnyO%2FkZtYtTxSQQOrZh%2BRPsCKy0NUQVLrKdQFeM8TfROtUbhfWTrqISB%2BWz9oKOk2MNbSZLV0Rs5xkviPk4A7WcDaaE6GM5EK4WNZKgTqtbHDj0moOWL9AACfeznQH0%2BsK4hyuHYsXFNGdtAxW0pzEVipFplGc%2FSFiRK6guOwebfpmgvDtZuQgiY%2B9z8dg9LbymulJJu47jZHcwvILoA5QgbdTSC8QKotMcjPkiYLtpJE0EAgsOwWD1xysAY5tedwoqKvsCGrCRdMzSGRmYjFDFvImsY76H%2BYfW9qq2Mbp5owOfpM9WqrolwvdJRx4rjPWrkk8OT0hhIyOGt6RAu9dvJW0YLWcEUZPRY2WjIcGRD7sWzuKRuYCpRg5haPtjZAHOfjOI5BBH4Rz8ZRdMfyIkPYudWLeXyMV7cnxPeYRPecBPswyprVyQY6pgH%2FBCj86gVEkFnjDdTRHXG3ihYQikDh9N3J2HfXLGVTYDmTp8JoGw42V%2FRGDs1gxeWHu2OUsftxdHuLfLnoQHj7H7V9ESi%2BP2NPtZTdArpJ%2FgD84cJd3oBWrP8JUM8VLiz6e%2BKJhUdOeg4igUz1O9CRQjGfUttDdtzJtLIeNUU91nGtFME8OCDn1I%2BXuhhJ3tAjeq2pA8uOM5XN7YsMeKztibY6AjRK&X-Amz-Signature=ff13337e2a8d2901d090ca6897722a289caa46da021f77c0c6b92c7352f8a951&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
