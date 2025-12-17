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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWW2LPYE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FJzbfYI1SIaCWc8v7BwQ5BEfgH6BHqkAbXpHjNIjKWAiEAwQjrKDh1wVlG%2FW7K1RjbF4lLfgfFL%2BPF9fVzYLHmMlwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMcNADzb%2BIV8FF%2FP6ircA4K5hIR6q7nL6FYZ6zQuMPvkVsf%2F%2B2HG02HcILTifn4%2FZtOHsUiQc%2BsstNZgnAB8cNVQSX5KGExLbJ9pHRglC6kzZoqQEflev1ObUf4PpAQaxJ5B9KpWpNFYMCt%2FUbrORzSt1KZPtuy6eRnZri4KnTs9bVEUxxdEE4poyfqlSewwB9O9uj3f9igiR%2FZLsr9Jphb5Oze5MSye04TTc7Dzs9BkEZpMrvcOoghkEUiQ4SzxkvVe3zmq2Y2VLN83elQ552TwMQzjZeaIQUizc3W0TJWZrlcxPDeSzpsdz9xKWesOOGMkvcpcsIG7OudNo5K8g1frYrqx%2Fn%2FZgQfBurljwMmV%2B7Yx69O%2BJi2avFoo8x2jfYaTrO4nBHZTj2LwBXL5pKp69mev4yrLhzREhDUnZfMg3hTrLZ%2F%2BTlD7iaTD%2BX0Jn7ckyBYg1xHwCorhvzbbMHVvcobesxsiC2n5KjeOjsgpfN4wsQ%2Fz%2F0skyjg8EyOnaBfSsMSOqiC9Q7JW846foa%2Fmn77TXmEsp1IhFFcdXnk4mGBg8ZnAYL%2B6dnsgN3oJ7hm1tjv0HzDIKMbpoNGny63wQxyvuwDxRc%2B%2BDamVNVvDNH0BUgT9TW9dppSx3qx%2Br55Hl0M5J%2FV6qu7UMPaDicoGOqUBA3i%2FvjznfHmGuiJQrsdVfIteF17jJgExh0Dk9IRpFmiNDhaqw5%2FmoTp%2F5DRHYL0yoTF2kK47KCwJg7S0V9boBZHUbFnEi4Q8YHAZ8WizlCZYlersRjiUCRxi%2FrL7UoIDsXmxmjOX3aM5yTOb0o27wAtht6q5S0%2FRpNeBkwy6Y0ocvwu7hB7yewzfk2WPaXipAMgmR7icbSZjcWWQI10CeHp9%2FtZ%2B&X-Amz-Signature=449fd939cde6698dc7302699244807a6edad1c2360e1aae706d1345d22b3edc2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWW2LPYE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061507Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC%2FJzbfYI1SIaCWc8v7BwQ5BEfgH6BHqkAbXpHjNIjKWAiEAwQjrKDh1wVlG%2FW7K1RjbF4lLfgfFL%2BPF9fVzYLHmMlwq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDMcNADzb%2BIV8FF%2FP6ircA4K5hIR6q7nL6FYZ6zQuMPvkVsf%2F%2B2HG02HcILTifn4%2FZtOHsUiQc%2BsstNZgnAB8cNVQSX5KGExLbJ9pHRglC6kzZoqQEflev1ObUf4PpAQaxJ5B9KpWpNFYMCt%2FUbrORzSt1KZPtuy6eRnZri4KnTs9bVEUxxdEE4poyfqlSewwB9O9uj3f9igiR%2FZLsr9Jphb5Oze5MSye04TTc7Dzs9BkEZpMrvcOoghkEUiQ4SzxkvVe3zmq2Y2VLN83elQ552TwMQzjZeaIQUizc3W0TJWZrlcxPDeSzpsdz9xKWesOOGMkvcpcsIG7OudNo5K8g1frYrqx%2Fn%2FZgQfBurljwMmV%2B7Yx69O%2BJi2avFoo8x2jfYaTrO4nBHZTj2LwBXL5pKp69mev4yrLhzREhDUnZfMg3hTrLZ%2F%2BTlD7iaTD%2BX0Jn7ckyBYg1xHwCorhvzbbMHVvcobesxsiC2n5KjeOjsgpfN4wsQ%2Fz%2F0skyjg8EyOnaBfSsMSOqiC9Q7JW846foa%2Fmn77TXmEsp1IhFFcdXnk4mGBg8ZnAYL%2B6dnsgN3oJ7hm1tjv0HzDIKMbpoNGny63wQxyvuwDxRc%2B%2BDamVNVvDNH0BUgT9TW9dppSx3qx%2Br55Hl0M5J%2FV6qu7UMPaDicoGOqUBA3i%2FvjznfHmGuiJQrsdVfIteF17jJgExh0Dk9IRpFmiNDhaqw5%2FmoTp%2F5DRHYL0yoTF2kK47KCwJg7S0V9boBZHUbFnEi4Q8YHAZ8WizlCZYlersRjiUCRxi%2FrL7UoIDsXmxmjOX3aM5yTOb0o27wAtht6q5S0%2FRpNeBkwy6Y0ocvwu7hB7yewzfk2WPaXipAMgmR7icbSZjcWWQI10CeHp9%2FtZ%2B&X-Amz-Signature=b261ea8428106c35a2029790894414eaa91ec9bd9670d5d97ad41908fabb0a48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
