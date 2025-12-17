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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6FX2NH6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANJhT%2FWjHpI1C%2B%2FvzKk6KRxLZgSeHsY42SBiYZMIJVKAiEAmOQ794jnVUiYn38s8dycFtTo8UK6UZstF%2Bb0CpTEfOAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDDLImbHOmszNBEqm6SrcA%2FCYyzXbEa4zYf%2Ftq0ZTM7LWtHylDL6LSBSJR3IcYxcYUXydpBPFfNXqcubLOp1P20INmsI0%2Bt0CGT4mZKbNbFfKeDAIaWWzxuyZp29LvAkFoEeLGS%2BN1WxmvD0gS6V0RoCw2Xf4mQP%2B2uT6Ht3uxv9XQfv0i792AIxUYk%2Bffse0dQolz8PZcgROaueCwnnHoEK4nI7SiemQ7irfyq5TkH%2B1jHb%2F5odKcDV8Re%2FCOBPBUwWibXXQheLkjt6EPeZ%2FuSM1oiFaWzx%2F%2F7V8Mtzs3tzYJnw2Sve%2BArgz6NYxAvn%2BezFp1x%2BJ8HR9GgxDR7BhrKZolvA6WK9Xiujdy%2FtQ%2BPsKJu6P5RUjmQBhTyoCXazSgHfKKMn5ldZJTsbr93ACi%2FmdbCCYlykS%2BIop3cwt%2B%2B1QO55FyvGpGf1qBeeVqAIBMtFLCx4EZu9%2BhHJ%2FS84bcSX%2BrT5Ku4nBJC9OjKpMZjaKpreJ1QmoGXukXq9f9lPIGbcsJe%2FecW1oznvZ%2BvPuwlUj6Hf1roysRcdvaMoCXgCcwd3QRwbRnj1sn0p1xLI7lTQY1eh6xI8drbAlScArC%2BGPA8qyt2urUhl59z4tII0poxmi%2BRtvhqak9PeQrcNf62rF%2BkdL8DIjPzAOMO2yiMoGOqUBjRKsUyCmb%2Fy2cRn8mq%2BCuRi9BSYFHZwGIgOgGOuKkDp8%2FTGuOUgZdyCeowvpzIdQw2D4rBTtfYdoFqjizRXLsGXpo%2BkpAdkO0%2FiypOw3NeYfd7FqSC3z2R3XaUD6bfRrTteJiqHqyv8FesYNpBFU69ree7xlaMobikurHloQdUuxxHAqapsX0vsXBWX%2BUGOeeh7NJzvZAsUay8gu9jv3S5EYMgH1&X-Amz-Signature=4e3624c9b6717348a16100f501f68b3ad12fa481581c66238599072e3ed14fcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Y6FX2NH6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T033025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIANJhT%2FWjHpI1C%2B%2FvzKk6KRxLZgSeHsY42SBiYZMIJVKAiEAmOQ794jnVUiYn38s8dycFtTo8UK6UZstF%2Bb0CpTEfOAq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDDLImbHOmszNBEqm6SrcA%2FCYyzXbEa4zYf%2Ftq0ZTM7LWtHylDL6LSBSJR3IcYxcYUXydpBPFfNXqcubLOp1P20INmsI0%2Bt0CGT4mZKbNbFfKeDAIaWWzxuyZp29LvAkFoEeLGS%2BN1WxmvD0gS6V0RoCw2Xf4mQP%2B2uT6Ht3uxv9XQfv0i792AIxUYk%2Bffse0dQolz8PZcgROaueCwnnHoEK4nI7SiemQ7irfyq5TkH%2B1jHb%2F5odKcDV8Re%2FCOBPBUwWibXXQheLkjt6EPeZ%2FuSM1oiFaWzx%2F%2F7V8Mtzs3tzYJnw2Sve%2BArgz6NYxAvn%2BezFp1x%2BJ8HR9GgxDR7BhrKZolvA6WK9Xiujdy%2FtQ%2BPsKJu6P5RUjmQBhTyoCXazSgHfKKMn5ldZJTsbr93ACi%2FmdbCCYlykS%2BIop3cwt%2B%2B1QO55FyvGpGf1qBeeVqAIBMtFLCx4EZu9%2BhHJ%2FS84bcSX%2BrT5Ku4nBJC9OjKpMZjaKpreJ1QmoGXukXq9f9lPIGbcsJe%2FecW1oznvZ%2BvPuwlUj6Hf1roysRcdvaMoCXgCcwd3QRwbRnj1sn0p1xLI7lTQY1eh6xI8drbAlScArC%2BGPA8qyt2urUhl59z4tII0poxmi%2BRtvhqak9PeQrcNf62rF%2BkdL8DIjPzAOMO2yiMoGOqUBjRKsUyCmb%2Fy2cRn8mq%2BCuRi9BSYFHZwGIgOgGOuKkDp8%2FTGuOUgZdyCeowvpzIdQw2D4rBTtfYdoFqjizRXLsGXpo%2BkpAdkO0%2FiypOw3NeYfd7FqSC3z2R3XaUD6bfRrTteJiqHqyv8FesYNpBFU69ree7xlaMobikurHloQdUuxxHAqapsX0vsXBWX%2BUGOeeh7NJzvZAsUay8gu9jv3S5EYMgH1&X-Amz-Signature=843335fc59231b2e0d0b2e423c6c86a341d880fb7e54b6a01a0257f0056c93e8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
