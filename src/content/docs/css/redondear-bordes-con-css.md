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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEDGI2E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeH2tzdchhBAYgeztv0d%2FCcW3HXe1cIkcGvR6GDuaS2AiBTO1tAjLJr6mWX2V8Okgh2dKWVORjRTLXjJ0%2BYpzo16Sr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMsflvmBbwpFJId9FYKtwDSgACanfGg5BCZs0loiWkknZculCjTCHmsmPTVtBzbIAHhfrlpW5aOmAOuzlQW46R%2BkLATWNwHT1ePjc4Zj79NJSsfVFlhFaruP9ynhtaf%2BSv5t55325TGipEd2e3%2B0oCzt9bGr5oWJM7tMxhstMgD31FDl2h6GMd8Kmw16AJgoW0phsEb83QOLoy6pEToNxJtssuS5vR2%2BpEKkhGGy8GOrc3qWx%2FidT%2B6dOXNduiXMUegZI2dPZAefpeT%2F%2BBW7Wjb2F4uPw9M1XBj2QjCBGAhYYPABOUxQK8NTJximc9Rwq5NY9BzlxG7RzvC7gpa%2BSd0RoWAUNsAmKMK1HumRkud9jp15XV7%2Fuw9X2ikTNDSjE97xJZaG152q20pzESoXCI2RcH%2B9L12RFUEVKxdzx4ymRl%2FUsEIPYfdOpX6eJuWlY%2BS165S0C5c3rhiU%2B5uMfccIzORKY73UHlW%2Fu%2BuKDpVyLTOR5KicaF8PPlIfHz7di4HE9EiwpKA16PJk%2BpQDt27saXvoK%2B17kxkjLGOPs11wAJrHm0rynSoe7k%2FE1cZrO7Nb55lkuTmdJrr7sLqVK0%2Bm9UZPgAZQkF%2FRaxi8Z8ytvjYHTOsp666JQSpqvdd3Z5LgNLfwngXUZYizAwu8HRyQY6pgHs3R3rtivHD7MuhY5zGlbhznLn%2BZrqR7w7ax1vG129yNk6rZNr5N33l1zVlf9DQMRmE%2B1kvKRAPRpIZLm%2FuYSBfqBpSOw8wXwyzAIAYH4nj562e97m2FbieWmKStv24%2B%2FFmG7%2FsThIlwkkTDxjCU4b%2BMoxMPzluydhGBIR0AyJiXiCjGJhKrxQS6%2FlNQTEAT2Xw3c69gPUnyxWDiiwaaIBKRgHKwmL&X-Amz-Signature=de3557e8028dc9341a7e6d412cfd5a5b743d3177e8747d2101c3163ea864958d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662AEDGI2E%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T213506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAeH2tzdchhBAYgeztv0d%2FCcW3HXe1cIkcGvR6GDuaS2AiBTO1tAjLJr6mWX2V8Okgh2dKWVORjRTLXjJ0%2BYpzo16Sr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMsflvmBbwpFJId9FYKtwDSgACanfGg5BCZs0loiWkknZculCjTCHmsmPTVtBzbIAHhfrlpW5aOmAOuzlQW46R%2BkLATWNwHT1ePjc4Zj79NJSsfVFlhFaruP9ynhtaf%2BSv5t55325TGipEd2e3%2B0oCzt9bGr5oWJM7tMxhstMgD31FDl2h6GMd8Kmw16AJgoW0phsEb83QOLoy6pEToNxJtssuS5vR2%2BpEKkhGGy8GOrc3qWx%2FidT%2B6dOXNduiXMUegZI2dPZAefpeT%2F%2BBW7Wjb2F4uPw9M1XBj2QjCBGAhYYPABOUxQK8NTJximc9Rwq5NY9BzlxG7RzvC7gpa%2BSd0RoWAUNsAmKMK1HumRkud9jp15XV7%2Fuw9X2ikTNDSjE97xJZaG152q20pzESoXCI2RcH%2B9L12RFUEVKxdzx4ymRl%2FUsEIPYfdOpX6eJuWlY%2BS165S0C5c3rhiU%2B5uMfccIzORKY73UHlW%2Fu%2BuKDpVyLTOR5KicaF8PPlIfHz7di4HE9EiwpKA16PJk%2BpQDt27saXvoK%2B17kxkjLGOPs11wAJrHm0rynSoe7k%2FE1cZrO7Nb55lkuTmdJrr7sLqVK0%2Bm9UZPgAZQkF%2FRaxi8Z8ytvjYHTOsp666JQSpqvdd3Z5LgNLfwngXUZYizAwu8HRyQY6pgHs3R3rtivHD7MuhY5zGlbhznLn%2BZrqR7w7ax1vG129yNk6rZNr5N33l1zVlf9DQMRmE%2B1kvKRAPRpIZLm%2FuYSBfqBpSOw8wXwyzAIAYH4nj562e97m2FbieWmKStv24%2B%2FFmG7%2FsThIlwkkTDxjCU4b%2BMoxMPzluydhGBIR0AyJiXiCjGJhKrxQS6%2FlNQTEAT2Xw3c69gPUnyxWDiiwaaIBKRgHKwmL&X-Amz-Signature=02fa947b6bb51ecbe3a6118d439304dfa5944e641e2b5e0907b014a6eb6db561&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
