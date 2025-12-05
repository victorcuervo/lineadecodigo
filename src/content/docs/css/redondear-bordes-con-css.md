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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X2HQ4T4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG1XTx1mCApBn00UiwCsaKvUHsvccm18FL3sMtF%2FV50QIgSSleUEsEka5YyOptopIG0V8NF7zS4npfI9aUfHOXfjoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKHsKsHWyG6hHT3AiCrcA%2F8PfvWEiKMsBL2Fy7gwpX7nqb52Bh4%2FNw39nZfLePvxRR6LLgODS8dILyXVDswhLMs%2B4UKzkKpMbJ%2BU7ZDJ%2BrD%2FXULnIsNk%2BOrI%2FlPcJJVo1zhm2bVa4FyeeQvM8BxNYV5FnQ0aIdcoDVa5qkvch5aNmUly1Gbt%2B7RxjR3fYiN%2BmMjdtgVHv29bqZd86rgSFSZIuXNKHMBz0DT1ZQjW1AVyWOE91eu0Tqo96V07eBb45qLa6d2%2Fuux1LlzedC%2FGXHSSG3w%2B54eFAIft1%2F2qITqumoTfi8VyERPOAoewaFvlh4FxwZjcKoVj%2BbKxpTbl%2BgRKhALQFf%2FHV2%2Fx2jdPWzn%2BhUREP8OP7JRJjxVgbGPyjuEsHNQpFVrKxQ8coYSb2FCOHYAL9KPgMUBsKbZl%2BK0an37TxJY3RctOsnadtNOGePVpb7W5ToAx3XaCBJ8RKUCN8Riav9m3A%2BICnwuXTN0tXy03%2FFM%2FtD2k1DQMxqLLXsnldwb1FsNVszmcGVQmLgiVCyLHr4lJdi0Zv9i5qnCtNiRXA6nI%2FO4FA6P1mCb3z7GKIXTQuSVlvDZhvkATYPvWFbsHT689JN9YHxPyzgrdibgiZFubfqb1OdAppiNyoFdqLEwovXA%2F100eMNTWyskGOqUBViDYrrI26XnxgNFB71SUk5uXRvizXPeGwYYcBNfrV%2FgNcHSWAKKDrEjmckBgzTRTSNtSPfQblPh7VXCCpQJhKpZp6wa6hqsZxdkqS99yof32C8vYIGiRpg0I7nK%2B8No98lUBd8a0kg4H%2BSkGc2s4sAFx10KZcYPhpxrMjStGW8wRZjgaEI8WvIQ4cjJpd0cd85UypPKy42YU7GBfxJQdM4E%2BacEh&X-Amz-Signature=d7cf9b9b6f102bb76e0feb1fdfdeb9d9b05c4502ab5fc8d1c13e3d371c01d432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664X2HQ4T4%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T110112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCG1XTx1mCApBn00UiwCsaKvUHsvccm18FL3sMtF%2FV50QIgSSleUEsEka5YyOptopIG0V8NF7zS4npfI9aUfHOXfjoq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDKHsKsHWyG6hHT3AiCrcA%2F8PfvWEiKMsBL2Fy7gwpX7nqb52Bh4%2FNw39nZfLePvxRR6LLgODS8dILyXVDswhLMs%2B4UKzkKpMbJ%2BU7ZDJ%2BrD%2FXULnIsNk%2BOrI%2FlPcJJVo1zhm2bVa4FyeeQvM8BxNYV5FnQ0aIdcoDVa5qkvch5aNmUly1Gbt%2B7RxjR3fYiN%2BmMjdtgVHv29bqZd86rgSFSZIuXNKHMBz0DT1ZQjW1AVyWOE91eu0Tqo96V07eBb45qLa6d2%2Fuux1LlzedC%2FGXHSSG3w%2B54eFAIft1%2F2qITqumoTfi8VyERPOAoewaFvlh4FxwZjcKoVj%2BbKxpTbl%2BgRKhALQFf%2FHV2%2Fx2jdPWzn%2BhUREP8OP7JRJjxVgbGPyjuEsHNQpFVrKxQ8coYSb2FCOHYAL9KPgMUBsKbZl%2BK0an37TxJY3RctOsnadtNOGePVpb7W5ToAx3XaCBJ8RKUCN8Riav9m3A%2BICnwuXTN0tXy03%2FFM%2FtD2k1DQMxqLLXsnldwb1FsNVszmcGVQmLgiVCyLHr4lJdi0Zv9i5qnCtNiRXA6nI%2FO4FA6P1mCb3z7GKIXTQuSVlvDZhvkATYPvWFbsHT689JN9YHxPyzgrdibgiZFubfqb1OdAppiNyoFdqLEwovXA%2F100eMNTWyskGOqUBViDYrrI26XnxgNFB71SUk5uXRvizXPeGwYYcBNfrV%2FgNcHSWAKKDrEjmckBgzTRTSNtSPfQblPh7VXCCpQJhKpZp6wa6hqsZxdkqS99yof32C8vYIGiRpg0I7nK%2B8No98lUBd8a0kg4H%2BSkGc2s4sAFx10KZcYPhpxrMjStGW8wRZjgaEI8WvIQ4cjJpd0cd85UypPKy42YU7GBfxJQdM4E%2BacEh&X-Amz-Signature=955394a8f4b554f85967d32ff650c8cb00f7c2d91199569f6fb7a311cc69344b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
