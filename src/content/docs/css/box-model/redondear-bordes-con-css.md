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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CPUMJRQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoLXNxTFOJx3kc3lqVSqdkbO4AfkLnRTxBdw8vbF1TkgIhAO%2BfV7ZIm5EJPyX8%2BEdwnE5xqilY3W2%2F7FT20DDUpWsRKv8DCHEQABoMNjM3NDIzMTgzODA1IgxZ18x8Olny2n%2BEaaUq3AOKd2UoGnF%2FHak0eSXp6rjIKdTyWeLLJk6jjANksbKd%2BZeH%2Fo2Zw88udzAiWLYEXnuBwmMG%2FQG87eKoEhGiA%2Bt9jgaW14FZ8mS3AsGknU3zpC6Gtq2iHG0UA7hhpNDw3XM4Yr%2Bht%2BdpopK1O9h0XBMHfSBOyRB2OzWQITm8YPH6HwbGrQRVntuGvN0SQHRtHqTROhKVA%2BouPdRs3pVn72Pg0N%2B%2B4GS53AGtiUMYlzM78iTup6KhXc4XwuQ%2FJChvO%2BJCKNq2qqUt0f0Qu7bNilJTbowOmVbFPPs%2FrR3x6ylXClYmBZTnuStFy9SVuek6krlt3JFuvLYrgB94SpJagcaJATDiQT49tRcvFc9f5cq3orM1D9bGne1X%2BZythy8JrmjCSsdb%2FP0N%2FlY8dJwLYMaO5HhItiIIiqcZQ6%2FPhgKsay2CHz4qHZcsKQa50m%2B33%2FX1Kd5gUNt9sShimBsUUNgehFYNlY7b5H1pRcYuQtmcxY9bcDa3fVUiOzWtk%2BIJg5c5bdNgS6VmuWtxHNhHCCeku1%2BytBbNCmtuhJ3t%2Bj62ygIJg8T1%2FqHPp8gpJG61FXD9rtPyGvOiQJv%2BEYtg1NNpKuEBSIHradgw1DASbEARaE7%2BEyUkK6uBp1gj6TCm34fKBjqkAR38n%2BnKw1AIvH8OQ5EVv5WVaGc79hkmSh8zb%2F3aEcQKf6NWVLaySHvmw6dIcff8cRL603thllxYA%2FOfyt%2FJRJkLtJzA6vyDtLkHAQDwjGt2kH7FrKdUGGGm%2FTVD6Whcwa4SCsRtL6dD01jN6qZWa8sxI6yFL0JNIyzMzctgc5mb4zWKPribq1z8CSELYbd8L96WOBDDWenwA8U3i6ZfV5g47ppo&X-Amz-Signature=86d04035942235e6a92befa82ea1e79aa3759fb12ab11ed5daf9fb7e8000bb2f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665CPUMJRQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T003504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoLXNxTFOJx3kc3lqVSqdkbO4AfkLnRTxBdw8vbF1TkgIhAO%2BfV7ZIm5EJPyX8%2BEdwnE5xqilY3W2%2F7FT20DDUpWsRKv8DCHEQABoMNjM3NDIzMTgzODA1IgxZ18x8Olny2n%2BEaaUq3AOKd2UoGnF%2FHak0eSXp6rjIKdTyWeLLJk6jjANksbKd%2BZeH%2Fo2Zw88udzAiWLYEXnuBwmMG%2FQG87eKoEhGiA%2Bt9jgaW14FZ8mS3AsGknU3zpC6Gtq2iHG0UA7hhpNDw3XM4Yr%2Bht%2BdpopK1O9h0XBMHfSBOyRB2OzWQITm8YPH6HwbGrQRVntuGvN0SQHRtHqTROhKVA%2BouPdRs3pVn72Pg0N%2B%2B4GS53AGtiUMYlzM78iTup6KhXc4XwuQ%2FJChvO%2BJCKNq2qqUt0f0Qu7bNilJTbowOmVbFPPs%2FrR3x6ylXClYmBZTnuStFy9SVuek6krlt3JFuvLYrgB94SpJagcaJATDiQT49tRcvFc9f5cq3orM1D9bGne1X%2BZythy8JrmjCSsdb%2FP0N%2FlY8dJwLYMaO5HhItiIIiqcZQ6%2FPhgKsay2CHz4qHZcsKQa50m%2B33%2FX1Kd5gUNt9sShimBsUUNgehFYNlY7b5H1pRcYuQtmcxY9bcDa3fVUiOzWtk%2BIJg5c5bdNgS6VmuWtxHNhHCCeku1%2BytBbNCmtuhJ3t%2Bj62ygIJg8T1%2FqHPp8gpJG61FXD9rtPyGvOiQJv%2BEYtg1NNpKuEBSIHradgw1DASbEARaE7%2BEyUkK6uBp1gj6TCm34fKBjqkAR38n%2BnKw1AIvH8OQ5EVv5WVaGc79hkmSh8zb%2F3aEcQKf6NWVLaySHvmw6dIcff8cRL603thllxYA%2FOfyt%2FJRJkLtJzA6vyDtLkHAQDwjGt2kH7FrKdUGGGm%2FTVD6Whcwa4SCsRtL6dD01jN6qZWa8sxI6yFL0JNIyzMzctgc5mb4zWKPribq1z8CSELYbd8L96WOBDDWenwA8U3i6ZfV5g47ppo&X-Amz-Signature=2140d1bac53fb7bd0fb6cd61016f5881f7009aaf1b624622adc94e038a97bca5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
