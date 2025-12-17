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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLFKDQU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRNWMjuzHTWIOHXy7WkGZ50utRehxzKSP8QXrUrcSJyAiAT4K5yU5%2F38ZuskxuL69sAXMAeehd2vJL5dYbuVwR%2FWCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ykU8qLI3tq8cJ2qKtwDXskeB41c3tNfNDV56AL7iPjjHuJgag%2BIPcG3vZK2ey7FSvlTW%2FSyIqZ7opKNcOY7%2FGpwTyvQfvuHJOe1Y1SfDXh2xA6rRwUwDbUkv2AVmblFtVXRZBOhIgvAhbGsyR9WjQ%2FeH6kFg9vDzQREe9iGaKm5k8ImjHfeBnAKuDgSK3vzWEU6VFDfg8a4tTWEteX%2BS1VwufXYiTqM5nAw25syrKY%2Fudwg6DJXsAnXNAhwMxoWvAA5xNfVYJiqOibTqX0s7jDszhe09s%2BVrey2d5yMexQdTxJmO2cAWQ16N%2BHlLm8Z4vvWF9fCGDBI74eKmbxGFYmORo3mq7bBsuOnhcH%2FXppUQffHfCAJSWT7%2Bx9zSstp7afCNMYnIYJ0n6ZjDFwbq240tzSzLq41TI3WXfrgrTR70kg9LPDlQv3EfEIkWG9%2BIUo91ahRjnoKyQo7Q95OSgW00l8ggBTEojo1LsCG2gergwEW7m66fAijckX4qjVD3YvoP4ugv%2BeRkY1NEcbpXidAp7QIIpTY7vcgcYhZW4BlIgRV3EyX0Y62bHeXPIXGfLAco8qzfovjqMiVrhAF65EuZicvdqssNyvQIkpW9jptq9dWXM0tcMbS20WnONKb7MHzOdtCsMMBiDUwnq6MygY6pgE%2BGuY4J1J%2BdkhhfyXTABT6iRcwyzKc1NclNmsEWffGyR6wfBG6LMeqH74Y4oTOPS3N7Oy7Cfswzsic3igUvuPVU88LWHrXGx%2BNkyM6xKzopRgt7FcrA%2FdghvLhlZNKbPxAWhuHzpKHClzLQuEvlOGrwUF0L4XU11PcQBF7XcFKFLuoNB1pOmVHc%2FGncHkggKA%2BZ2u2oEb31m4hT7YjeEvjqeew508j&X-Amz-Signature=3fd0786418ee656e10bc40d401a6f6a4f94903351dffaa314ffd3a23ade581e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FLFKDQU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHRNWMjuzHTWIOHXy7WkGZ50utRehxzKSP8QXrUrcSJyAiAT4K5yU5%2F38ZuskxuL69sAXMAeehd2vJL5dYbuVwR%2FWCqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1ykU8qLI3tq8cJ2qKtwDXskeB41c3tNfNDV56AL7iPjjHuJgag%2BIPcG3vZK2ey7FSvlTW%2FSyIqZ7opKNcOY7%2FGpwTyvQfvuHJOe1Y1SfDXh2xA6rRwUwDbUkv2AVmblFtVXRZBOhIgvAhbGsyR9WjQ%2FeH6kFg9vDzQREe9iGaKm5k8ImjHfeBnAKuDgSK3vzWEU6VFDfg8a4tTWEteX%2BS1VwufXYiTqM5nAw25syrKY%2Fudwg6DJXsAnXNAhwMxoWvAA5xNfVYJiqOibTqX0s7jDszhe09s%2BVrey2d5yMexQdTxJmO2cAWQ16N%2BHlLm8Z4vvWF9fCGDBI74eKmbxGFYmORo3mq7bBsuOnhcH%2FXppUQffHfCAJSWT7%2Bx9zSstp7afCNMYnIYJ0n6ZjDFwbq240tzSzLq41TI3WXfrgrTR70kg9LPDlQv3EfEIkWG9%2BIUo91ahRjnoKyQo7Q95OSgW00l8ggBTEojo1LsCG2gergwEW7m66fAijckX4qjVD3YvoP4ugv%2BeRkY1NEcbpXidAp7QIIpTY7vcgcYhZW4BlIgRV3EyX0Y62bHeXPIXGfLAco8qzfovjqMiVrhAF65EuZicvdqssNyvQIkpW9jptq9dWXM0tcMbS20WnONKb7MHzOdtCsMMBiDUwnq6MygY6pgE%2BGuY4J1J%2BdkhhfyXTABT6iRcwyzKc1NclNmsEWffGyR6wfBG6LMeqH74Y4oTOPS3N7Oy7Cfswzsic3igUvuPVU88LWHrXGx%2BNkyM6xKzopRgt7FcrA%2FdghvLhlZNKbPxAWhuHzpKHClzLQuEvlOGrwUF0L4XU11PcQBF7XcFKFLuoNB1pOmVHc%2FGncHkggKA%2BZ2u2oEb31m4hT7YjeEvjqeew508j&X-Amz-Signature=b3f7580ece50e57167611614e1cc4adc80c535619c33506a20ae815c323d477c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
