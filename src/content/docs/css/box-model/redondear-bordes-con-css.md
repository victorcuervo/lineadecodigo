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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWCMBY4F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ9JcgzGgn4vQ63P5A2gMWnUJZnpFtfMvWWhjry6NcegIhAK2ohb0j5DFaclN%2FGdIP5yiQnw%2FsYc8GeiYT5K1EKoKxKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF4OG1v42nmjSYHKsq3AOr2ssJH2NY7ljjhNsWHsAHnU6GFxsYBDtqv%2FHXG6cHsoHsMwS929Z7BQkg0FSGYWn%2BcUYZvgVWWgBleUxsbF6%2BR1DtWhJZV%2BKMXwdDEzrfvFbp1Ww3uLi3jtQ7ly5XEHajxxglCa6Y7I7SK0ujsTHYkjKOi7OHL2GPAvinzO9YyqHObb9NxHPwk%2B7NGB8wURggtr1LBlG8I02e1ri4XFozfFyzi%2BuoV7J3WQXPjLArGQ3Od7jSqkN7s2NB9T9mz%2BIIrWLMpSNGw6p7p6%2F4eVa4Jjk4zO2S2Bf4A%2BAobyRMl1JQ1U%2B4pJlFBfbaDS3eCY0UsvV8z8Yi6hFNL2%2F8nO69jfZmhWGAXpmAySFMqdMKgwhMF2fsYhe%2BtfBzAYgkg03OSh4EdXjw58vXv4Y%2FxFdWJ60QwmVutmkGfg65i0cHw3zvxgWfwIEZnc2EdplKr%2Bp9Nn4fxL6ZEyZXBMh2d0e%2B8pKpUj7MRYcUL1xzK6z208FO52AME7ExzoI092OarhDxP8D%2Brwz0I96rT5b%2Bn%2BgxVIPp8A7oVbXhPJs3ghYojaSclIhxvqgoNpoRjjt3JX3cxvjZAvpT3C6knVgitNu0emI2LznrZWpXywKlWSiKeEcK8WH2h2qjZAq9lTDQgYvKBjqkASwsxlfEhF2rW147RYQ3Ts9EOqY3ts26DzUcxWJJVg6keis9sgts0fq23kkTvE8%2BtbHu2g%2FMutOhwmgDDXYvNKxyHKo1AWFxXVTgDTxZnjKq%2BZH16b6HZz%2F2UClj468erCAaE51lc%2F%2BmFtyH26QoEIizu0omhbgLLTz3lQ1%2FEIJBoySMo7ormb%2BiK4XziUaFhg%2BtnCeMLqNxfMgdtYphDWlnTw6C&X-Amz-Signature=d80863dd6accf91075e46c2d59bc030daa1953130cbab0e9d6c35f94702b876e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WWCMBY4F%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T152023Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDQ9JcgzGgn4vQ63P5A2gMWnUJZnpFtfMvWWhjry6NcegIhAK2ohb0j5DFaclN%2FGdIP5yiQnw%2FsYc8GeiYT5K1EKoKxKogECID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwF4OG1v42nmjSYHKsq3AOr2ssJH2NY7ljjhNsWHsAHnU6GFxsYBDtqv%2FHXG6cHsoHsMwS929Z7BQkg0FSGYWn%2BcUYZvgVWWgBleUxsbF6%2BR1DtWhJZV%2BKMXwdDEzrfvFbp1Ww3uLi3jtQ7ly5XEHajxxglCa6Y7I7SK0ujsTHYkjKOi7OHL2GPAvinzO9YyqHObb9NxHPwk%2B7NGB8wURggtr1LBlG8I02e1ri4XFozfFyzi%2BuoV7J3WQXPjLArGQ3Od7jSqkN7s2NB9T9mz%2BIIrWLMpSNGw6p7p6%2F4eVa4Jjk4zO2S2Bf4A%2BAobyRMl1JQ1U%2B4pJlFBfbaDS3eCY0UsvV8z8Yi6hFNL2%2F8nO69jfZmhWGAXpmAySFMqdMKgwhMF2fsYhe%2BtfBzAYgkg03OSh4EdXjw58vXv4Y%2FxFdWJ60QwmVutmkGfg65i0cHw3zvxgWfwIEZnc2EdplKr%2Bp9Nn4fxL6ZEyZXBMh2d0e%2B8pKpUj7MRYcUL1xzK6z208FO52AME7ExzoI092OarhDxP8D%2Brwz0I96rT5b%2Bn%2BgxVIPp8A7oVbXhPJs3ghYojaSclIhxvqgoNpoRjjt3JX3cxvjZAvpT3C6knVgitNu0emI2LznrZWpXywKlWSiKeEcK8WH2h2qjZAq9lTDQgYvKBjqkASwsxlfEhF2rW147RYQ3Ts9EOqY3ts26DzUcxWJJVg6keis9sgts0fq23kkTvE8%2BtbHu2g%2FMutOhwmgDDXYvNKxyHKo1AWFxXVTgDTxZnjKq%2BZH16b6HZz%2F2UClj468erCAaE51lc%2F%2BmFtyH26QoEIizu0omhbgLLTz3lQ1%2FEIJBoySMo7ormb%2BiK4XziUaFhg%2BtnCeMLqNxfMgdtYphDWlnTw6C&X-Amz-Signature=56cf52e5ec654329c9d85a5f94465adfbd5bfd0bc07e27d920e02cd4ddd5d33e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
