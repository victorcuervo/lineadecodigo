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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTNPDZR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdWJwPm8%2BwX6xYnB62XucyIrM8rQg%2F9JpgExpDiIt9TAiEAuzSrCTa3dw0e%2BLuVOAXAO50gt5whbifxXM1UbAaPFrIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIAqcrIk2RbpI2uoGyrcA3UMO6rn55PIdOXdUv1a4xiihOOTLnGziY6zfUXAmOjwl21%2BIcLy8PrartUohjL685hLE4rq%2FV9YjF0zSDyXkXJGzWB5aQpXPDOUtByICx4g1R8Ah%2FWxje5ra3LKftolzcPOzPvUQ1ktoezjcMNXnikizVgfJaG6Sx0X6cvkJfiJoJTfVm5Ye5ZSw9xaIrG1w%2BoepVy%2F6tDd2pGC3%2F2ShQpBJlyGy0DfYOGndvYfM9aTN9TY8T55Z9dv%2BMWuBiBBXROmwI%2Fhrn9%2B4FXmv3B%2FFZtOMnm18U25uZewjm5OOv4JslJQ3xny%2BDCsDQ2oxaOUMxXXXWg1Z3Cr%2FxTHkwgzhJFhKjB8mC7Hx8FfCVgKIlgR257GZp5Z6xy8wM6ALZQDetVJx1hkFEMz3xWW5Dh%2FwqDgLjyKHIZ2QXg8KfX46dlK%2FPXKo1yUrGjM2uISKx5M6z91MW23DCVygdyuOSot3t5arD%2BauVnBQBfuHUZKeyuEu9foCUtpPW54Kw9SPUmagAkFZDGZljGqw1rZo%2BmT2ktTdqAoIg7P6uYKpa6NPX7bbXMQLH5H9i1Y1jMShm%2B8XF7yC%2FI1bMmd1H7xRQ5XipXlxeiLqNNDjjjtwBrjYOCMzmnDa82x8HfjOMuoMJC4icoGOqUBgese3%2Fn346KtF7c8k6ESiEZDyeJplw9aqkZGRfohgbq%2BQqhQ2CXIz9uUVZ5tZ0Rk7Bs8fp%2BpZTKKm7pXLqCfdA9q4Tw%2BCrL7Z0hb3exHmNEE7KE8TrDmdBSsJDEU9GBLYPycR4yZh5Npt2ujjXkvjRfChFT3jicmQ9yDk0bu6HmRLUKIFQ2I1lWJxsHwtWQuJGmkkygId%2B%2BHtQ4DHsWsNvhbkPgq&X-Amz-Signature=7397bef1f9ecd8c09f786167f3926c3c9ff87481647e386de38fb6ba396a9e71&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XMTNPDZR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073745Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDdWJwPm8%2BwX6xYnB62XucyIrM8rQg%2F9JpgExpDiIt9TAiEAuzSrCTa3dw0e%2BLuVOAXAO50gt5whbifxXM1UbAaPFrIq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDIAqcrIk2RbpI2uoGyrcA3UMO6rn55PIdOXdUv1a4xiihOOTLnGziY6zfUXAmOjwl21%2BIcLy8PrartUohjL685hLE4rq%2FV9YjF0zSDyXkXJGzWB5aQpXPDOUtByICx4g1R8Ah%2FWxje5ra3LKftolzcPOzPvUQ1ktoezjcMNXnikizVgfJaG6Sx0X6cvkJfiJoJTfVm5Ye5ZSw9xaIrG1w%2BoepVy%2F6tDd2pGC3%2F2ShQpBJlyGy0DfYOGndvYfM9aTN9TY8T55Z9dv%2BMWuBiBBXROmwI%2Fhrn9%2B4FXmv3B%2FFZtOMnm18U25uZewjm5OOv4JslJQ3xny%2BDCsDQ2oxaOUMxXXXWg1Z3Cr%2FxTHkwgzhJFhKjB8mC7Hx8FfCVgKIlgR257GZp5Z6xy8wM6ALZQDetVJx1hkFEMz3xWW5Dh%2FwqDgLjyKHIZ2QXg8KfX46dlK%2FPXKo1yUrGjM2uISKx5M6z91MW23DCVygdyuOSot3t5arD%2BauVnBQBfuHUZKeyuEu9foCUtpPW54Kw9SPUmagAkFZDGZljGqw1rZo%2BmT2ktTdqAoIg7P6uYKpa6NPX7bbXMQLH5H9i1Y1jMShm%2B8XF7yC%2FI1bMmd1H7xRQ5XipXlxeiLqNNDjjjtwBrjYOCMzmnDa82x8HfjOMuoMJC4icoGOqUBgese3%2Fn346KtF7c8k6ESiEZDyeJplw9aqkZGRfohgbq%2BQqhQ2CXIz9uUVZ5tZ0Rk7Bs8fp%2BpZTKKm7pXLqCfdA9q4Tw%2BCrL7Z0hb3exHmNEE7KE8TrDmdBSsJDEU9GBLYPycR4yZh5Npt2ujjXkvjRfChFT3jicmQ9yDk0bu6HmRLUKIFQ2I1lWJxsHwtWQuJGmkkygId%2B%2BHtQ4DHsWsNvhbkPgq&X-Amz-Signature=eb340ef9104bdcfe70a6467a1c91fe9215b2641e5c4d89acb28797d248e67043&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
