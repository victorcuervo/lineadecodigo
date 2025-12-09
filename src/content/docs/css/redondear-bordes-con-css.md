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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4NCSUKK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxQA2%2B1kcvAOkaEBz2TTroEFoWGgJlcM6Kpa7e%2BiJGTwIgeHJBEh9E3%2Bh%2BCR6Zx0YgRfV4wC%2BhJLfJqfgTHbyJRjMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxfeXsvCS%2BkGOyWQSrcA4ldaNfIioIHOVTh1YnWxbt8WZ0IPFf1RhTKSkOBYWyeuqg%2FseQQ9PxRcADNr6QdgkFfz5XhlGLE12DMgeuz1jABtyEFksbuHCNhaFneqxO7jh0Jjy5dtJ06RUrX69aWAcyyZD5hzP05Lvd35Snkl6Ta1MBMqOiWeViEItzEcKf7S%2B4OZYVZhT5lIdm49Oh75nwthNVfRFZ9Ew5usQuk2GFwG62qjZauvZLfClEHJ37LxHpURCMCJaTpMQSPw%2FcctR9Tv0RFnNH2gWrO4ElPn8MW9rWIXbQEcd7dWShLwcILy3dpSYtWguoMFNW3nvtporh5sUEHEn4bA9khSVgjeWOrd5Euf9bjmHkqd3keaQkr1Bt1s%2B%2BRunKHa0OaJXRiQqtz2S5JiC720kz62RfJcaz26COnAufqgh6X4Ex1GWsufdprXHXAUJ6YRboxP%2FtaIAU6o2jVWQOImHweAGhoqsuzAxDOU3SGrtV7zyH%2Bw%2BBuNJPYbu7RtlhNbkIi%2F3iMn%2B%2FEFLpPZbqYlT%2F%2FPcWI0nL6VxUS7ggnlrvjl0bKfdT4Ym%2FImyPqGu8PBFQdiZ%2BzOoZZsfPOSiFQl7fNDojcQh2ZFVI341D0nRXubDjJd1VO7M8Clvh4zRg3gSn1MM6s38kGOqUBH%2BPzaBsXtz%2FCY%2BcPJnWafcJLvp0xnhdF79xmS5Ia63aYPgeAF4Uy5QLW06jGf2maMN%2FxmQduvi%2FBMmTyFBxDuKy9DjYF6mbPhoNYpYEq9FRuAIIj9jZFENZMXRUxFVpN0t4pGDs1vnaJJICFT7dAHGwADQIl3MV3gDL7tk6EnQHUsNKtVk9GgyamMg%2FDHApxjggcLj3ZCDTYrSfwyWWepnUua%2BAc&X-Amz-Signature=25244a5b4d634a766a8368957081630ad925055174cbdeee3c1cccb047eaaa13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q4NCSUKK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxQA2%2B1kcvAOkaEBz2TTroEFoWGgJlcM6Kpa7e%2BiJGTwIgeHJBEh9E3%2Bh%2BCR6Zx0YgRfV4wC%2BhJLfJqfgTHbyJRjMqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBxfeXsvCS%2BkGOyWQSrcA4ldaNfIioIHOVTh1YnWxbt8WZ0IPFf1RhTKSkOBYWyeuqg%2FseQQ9PxRcADNr6QdgkFfz5XhlGLE12DMgeuz1jABtyEFksbuHCNhaFneqxO7jh0Jjy5dtJ06RUrX69aWAcyyZD5hzP05Lvd35Snkl6Ta1MBMqOiWeViEItzEcKf7S%2B4OZYVZhT5lIdm49Oh75nwthNVfRFZ9Ew5usQuk2GFwG62qjZauvZLfClEHJ37LxHpURCMCJaTpMQSPw%2FcctR9Tv0RFnNH2gWrO4ElPn8MW9rWIXbQEcd7dWShLwcILy3dpSYtWguoMFNW3nvtporh5sUEHEn4bA9khSVgjeWOrd5Euf9bjmHkqd3keaQkr1Bt1s%2B%2BRunKHa0OaJXRiQqtz2S5JiC720kz62RfJcaz26COnAufqgh6X4Ex1GWsufdprXHXAUJ6YRboxP%2FtaIAU6o2jVWQOImHweAGhoqsuzAxDOU3SGrtV7zyH%2Bw%2BBuNJPYbu7RtlhNbkIi%2F3iMn%2B%2FEFLpPZbqYlT%2F%2FPcWI0nL6VxUS7ggnlrvjl0bKfdT4Ym%2FImyPqGu8PBFQdiZ%2BzOoZZsfPOSiFQl7fNDojcQh2ZFVI341D0nRXubDjJd1VO7M8Clvh4zRg3gSn1MM6s38kGOqUBH%2BPzaBsXtz%2FCY%2BcPJnWafcJLvp0xnhdF79xmS5Ia63aYPgeAF4Uy5QLW06jGf2maMN%2FxmQduvi%2FBMmTyFBxDuKy9DjYF6mbPhoNYpYEq9FRuAIIj9jZFENZMXRUxFVpN0t4pGDs1vnaJJICFT7dAHGwADQIl3MV3gDL7tk6EnQHUsNKtVk9GgyamMg%2FDHApxjggcLj3ZCDTYrSfwyWWepnUua%2BAc&X-Amz-Signature=2d915b2241954f4adffefc33daf5d431a9eb2eadc40f6328eadfdc868a40e6a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
