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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB4IYW4R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPVjOHMIZ42RXvbVa24zbuV%2FCYpUyTyoj9e%2BibN%2FntKAiEAzPMGEmbiy2oEmBKOAhw4e6n8BIgokfuHf8qIL0NyDXoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9wHt37pmBp3HyKbSrcAyjQX1%2BNWSVtUPAHeAg9yWqzCCQcgWq3muWVk5csZ5BkO2afSoR3j5Gq%2FAtCmphmKLvQTbJcxDdNcCN50u0d%2BCEtqTk6y7wE9DrJsEzx0CGRy8sj73NY0u5l%2FBzWb24JgVABeBy8hc%2B%2BjTxw4%2BdkJNwQlQLP4bZ3wA5%2BgzylozxSVRe8wmye%2FX7m%2BLkkQm5nsa6L3ozo5m%2F%2F%2Bfhbe6eSEju9RX3IPyDrrAsRe8bwtaeGouHAHSEIneCjcXYKjwapVTPW3NRCX1NwiS4t6%2Fgaand004l09AwnNCKx8DYg4UlybS7c1pmnQI3vzyhLsngTcPmcuIEv5WhmjYDKBx6PZm57jVZaq0i7HMhwy1xzEACeXWGdofXKGuwZFrKSXC3Cpcl5X4Rkj%2FFaIy52C6qo2gXLjvpj0JsFnf5ydHn6Rc3lQeDuWnikMcBflyvzcbwsAPbQqnZE9hQuCZ7zVqOPY%2BvnnHBqXILCCEwplOH6ZiJDq2wmWOCyHmczhiH7QLW6LWJL9bnvdBz%2ByWqFH4N4J8KMYanqeTUvaYWOJUeVHIT5pwFADLwrsWHUCxYifC4y5ZTad2rkfIRQDL06nH%2FwrS7p2z6R1gevwXmANxCZUIsS8Jrk5e4OVDQre48DMMWLjMoGOqUBktGPDZkIu9CS%2BY2C%2FjVAbjyLt6L%2Fm61bolHtWeS6zOebH9MDcQLfZ9B5l5plnySp3n32MTB7Cm%2BCpnTPxQGf8Cb8bbnvWcmMT%2BAKAV0ajxH%2F%2B2MP5Txx8Z2M9insno4x%2B%2Bfl%2FweS2mxRJ3u6NEK%2F%2BOjH%2BMKvBPpr2k%2BjXtlrzW8d7jdGgNDgebjqQJdveoQxbw4U0vBIYUb%2BUo7Q4XQJGrTJWNu2&X-Amz-Signature=c89598b53c3afd4151239c6ec3d7fa4c69884c838dd22b74564977c107e904f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RB4IYW4R%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195116Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAPVjOHMIZ42RXvbVa24zbuV%2FCYpUyTyoj9e%2BibN%2FntKAiEAzPMGEmbiy2oEmBKOAhw4e6n8BIgokfuHf8qIL0NyDXoqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDE9wHt37pmBp3HyKbSrcAyjQX1%2BNWSVtUPAHeAg9yWqzCCQcgWq3muWVk5csZ5BkO2afSoR3j5Gq%2FAtCmphmKLvQTbJcxDdNcCN50u0d%2BCEtqTk6y7wE9DrJsEzx0CGRy8sj73NY0u5l%2FBzWb24JgVABeBy8hc%2B%2BjTxw4%2BdkJNwQlQLP4bZ3wA5%2BgzylozxSVRe8wmye%2FX7m%2BLkkQm5nsa6L3ozo5m%2F%2F%2Bfhbe6eSEju9RX3IPyDrrAsRe8bwtaeGouHAHSEIneCjcXYKjwapVTPW3NRCX1NwiS4t6%2Fgaand004l09AwnNCKx8DYg4UlybS7c1pmnQI3vzyhLsngTcPmcuIEv5WhmjYDKBx6PZm57jVZaq0i7HMhwy1xzEACeXWGdofXKGuwZFrKSXC3Cpcl5X4Rkj%2FFaIy52C6qo2gXLjvpj0JsFnf5ydHn6Rc3lQeDuWnikMcBflyvzcbwsAPbQqnZE9hQuCZ7zVqOPY%2BvnnHBqXILCCEwplOH6ZiJDq2wmWOCyHmczhiH7QLW6LWJL9bnvdBz%2ByWqFH4N4J8KMYanqeTUvaYWOJUeVHIT5pwFADLwrsWHUCxYifC4y5ZTad2rkfIRQDL06nH%2FwrS7p2z6R1gevwXmANxCZUIsS8Jrk5e4OVDQre48DMMWLjMoGOqUBktGPDZkIu9CS%2BY2C%2FjVAbjyLt6L%2Fm61bolHtWeS6zOebH9MDcQLfZ9B5l5plnySp3n32MTB7Cm%2BCpnTPxQGf8Cb8bbnvWcmMT%2BAKAV0ajxH%2F%2B2MP5Txx8Z2M9insno4x%2B%2Bfl%2FweS2mxRJ3u6NEK%2F%2BOjH%2BMKvBPpr2k%2BjXtlrzW8d7jdGgNDgebjqQJdveoQxbw4U0vBIYUb%2BUo7Q4XQJGrTJWNu2&X-Amz-Signature=0ae6df29e79f4e1ba9a10e6219f65337858d4e67b9a8ae83affd97087b4fdff3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
