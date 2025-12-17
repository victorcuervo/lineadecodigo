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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5U6DYE6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGd6S1MSrIB%2B676nUXfz3wxflExSGbEgSCvFiJprv20gAiB2QlhPwyS91QvD8r6GCg8%2FE2Ua2GYm9afg0qfSvNwQzCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMCm83RjnIHhl5Uf4LKtwD4adgjJSlSJPT6z11Bwjirxzz8BEXLQMUR4Nh4e1rDHyE48X1eYKYLMztbyfKIiu0BwP9nRHPGwJQCsH7rHxAMI9XFZCS5qPAUCo9TOdrgLYtDTNpCrCiWnCKdDtq9cdhEwosmHxUS4Pw0b8%2BPeSY8VoTaz8pFheok8Kyc16m3sK%2BhM%2F19b5%2Fc28caAVvCTVibYy39sVXOe1EHsGz8bMuSS637wSf8AujEqaDPqEdZgkMfWWfC3eoAg%2F8ldnJ%2By10WSan3Omcm00FM76aE1%2BHc37NH6BYMltwh1yVAOsQxTNHEJZVwrQLfjRrb1iMCFGv09RyTZ6C290fmRjJwbh%2FuLQRV3YtHqSK%2Bqujc43%2Fe%2B1OgQzhcj6imGLPGJeBG0JDfFROnuGtPASJ8HR5mHU299v6aVCX%2BWlJ83j5wuujgGvFom3DY7%2BoGVMZ7absCmwdNJZBErcp0mgzU92w42iq7%2BiITdlGChcBFq4hxEFS6NHw2EP8%2F1xqD0WSXUMFPrRgmIhsUZY1OZjLq0iMfaxpcVhLiyh9W0oOhN6P19JmYV8h6uJQHFXZEBCBobIm%2BmOKOaAevMZaIXwkCDsKBAET309huyoY1oJmqeczLj%2FFoqU1DOv5FjvlL2gVagMwgNOJygY6pgHhXT7uDuenlm4EXL1zE7fAbGeCouK168dVgi1eswANzgzc9dvF9rg8wj6toWPzOZuixDknEJfNgG0nKq%2Bng6Tm8Yr1JCKGi8iR3mpJ5dMyYZ4cYOl28Oms9ZOfiTmZwA9AntoLsSN0RL1sjL96GxANsyHCMLtQuqkVWWGTtNtDoINayc5jQO1bJeS5LQtbOa%2BUtdp1q5YhrNlWsqBZOg8irTtTQtQi&X-Amz-Signature=84014fe731d210c78dab3c857ed7298bfa2a5cc44592439ca9c4d0f1c95ff941&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U5U6DYE6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T091902Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGd6S1MSrIB%2B676nUXfz3wxflExSGbEgSCvFiJprv20gAiB2QlhPwyS91QvD8r6GCg8%2FE2Ua2GYm9afg0qfSvNwQzCr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIMCm83RjnIHhl5Uf4LKtwD4adgjJSlSJPT6z11Bwjirxzz8BEXLQMUR4Nh4e1rDHyE48X1eYKYLMztbyfKIiu0BwP9nRHPGwJQCsH7rHxAMI9XFZCS5qPAUCo9TOdrgLYtDTNpCrCiWnCKdDtq9cdhEwosmHxUS4Pw0b8%2BPeSY8VoTaz8pFheok8Kyc16m3sK%2BhM%2F19b5%2Fc28caAVvCTVibYy39sVXOe1EHsGz8bMuSS637wSf8AujEqaDPqEdZgkMfWWfC3eoAg%2F8ldnJ%2By10WSan3Omcm00FM76aE1%2BHc37NH6BYMltwh1yVAOsQxTNHEJZVwrQLfjRrb1iMCFGv09RyTZ6C290fmRjJwbh%2FuLQRV3YtHqSK%2Bqujc43%2Fe%2B1OgQzhcj6imGLPGJeBG0JDfFROnuGtPASJ8HR5mHU299v6aVCX%2BWlJ83j5wuujgGvFom3DY7%2BoGVMZ7absCmwdNJZBErcp0mgzU92w42iq7%2BiITdlGChcBFq4hxEFS6NHw2EP8%2F1xqD0WSXUMFPrRgmIhsUZY1OZjLq0iMfaxpcVhLiyh9W0oOhN6P19JmYV8h6uJQHFXZEBCBobIm%2BmOKOaAevMZaIXwkCDsKBAET309huyoY1oJmqeczLj%2FFoqU1DOv5FjvlL2gVagMwgNOJygY6pgHhXT7uDuenlm4EXL1zE7fAbGeCouK168dVgi1eswANzgzc9dvF9rg8wj6toWPzOZuixDknEJfNgG0nKq%2Bng6Tm8Yr1JCKGi8iR3mpJ5dMyYZ4cYOl28Oms9ZOfiTmZwA9AntoLsSN0RL1sjL96GxANsyHCMLtQuqkVWWGTtNtDoINayc5jQO1bJeS5LQtbOa%2BUtdp1q5YhrNlWsqBZOg8irTtTQtQi&X-Amz-Signature=38acfec3b0542e995876ff0a8b6fe0eb0f6b0852eaa15c9206b2e0f8c7043606&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
