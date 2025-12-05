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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PX367NQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvu68rRebHWcX2ijJiHvPuHPQ%2FZiThazW5K1irYjg6pAIhAMZdDiJ8auNnyYOgLv5VEWZrndeFy3%2BdSXpGk5oe0KFAKv8DCFUQABoMNjM3NDIzMTgzODA1IgwQYqlK%2BNNas5FX%2BP0q3AOCmKP1wt7KdGmnT6gEaoIuf%2Bb2OLHzt%2FlZs3mDJM178DkjGpXo%2BEWA0zWouesXAH79%2BEBZW5wgg%2BpASf1Ei01pDmBNHQJJXQRWVCHjbCd3%2FXLLnEymOHiEeiH8ZU8GGei1mh3i70QXSJrM5D2C3QLBrWfL%2FZ0dN2fXrUyM5cwyCPJCWbC%2BbH2sAX3FgKgzeFR3iE9oqsFY4a9fIYr9gMxapbJ5roPiMPgbiRMO4JlEocmym93cxvdaW5b%2F1uhMTXFrMe9tD8sEjqEsSPBLSlKOFCWLkALyJrExraBN5szcxYBuc8Ky%2Bdk6gpyBXpdXCpi%2Bx%2FT0UeJt9tFsGKKjvcBKlik9MX8rUjoMJ%2BWc%2BZZGWwPNPqUf0gSyu6o2X8MuUiXafIo%2Fms%2Fi0YjAuHkBdkn2m51tgRR5AQJsWqB%2BtdYxgtl%2B7GklRAkbO0s4OodFuobaE%2BeEQBULjRMd8p0sE%2FhNIWNOutMeVEaOlGfrdqyKm4jxGwjKoD7lfXCsumyjbf1nyg8rmn1y5ms8RNWu%2Fz9Jhl%2BYtxkqFOOHca9cFJM1NwSmHSeKnK4wg6ytZobkx6IalyBvHMHL5Fp2qx%2BgxVyPHLOS7SEmfpwt5LwBk%2BO0hYL7txYKGPjzVeSTizCwscnJBjqkAXAFYZqP9MshRWDbrGeroRGv1Mjyh4r1BwVJjNtrfq%2FaLErey1B9xAKZWmHXBgGtKLload0q7x5IWQzGIRjvCn9H4WDf6se3lmeCLMvhr%2FAIYA6pikCwCkWJSghbxkH8PxFPd9Iejt8hIfH2Yv51HcVh7aVabRNlsOIsMCy3%2FXde1CaF7m7K9rGlRzwH%2BzFEuSt6Rz61WTqyjfUSuTJmafBK4tmS&X-Amz-Signature=5f72343b4e6c973e24e6fb5223f2c3575e2eeb54926d5ecee4c017fe514e01e7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663PX367NQ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDvu68rRebHWcX2ijJiHvPuHPQ%2FZiThazW5K1irYjg6pAIhAMZdDiJ8auNnyYOgLv5VEWZrndeFy3%2BdSXpGk5oe0KFAKv8DCFUQABoMNjM3NDIzMTgzODA1IgwQYqlK%2BNNas5FX%2BP0q3AOCmKP1wt7KdGmnT6gEaoIuf%2Bb2OLHzt%2FlZs3mDJM178DkjGpXo%2BEWA0zWouesXAH79%2BEBZW5wgg%2BpASf1Ei01pDmBNHQJJXQRWVCHjbCd3%2FXLLnEymOHiEeiH8ZU8GGei1mh3i70QXSJrM5D2C3QLBrWfL%2FZ0dN2fXrUyM5cwyCPJCWbC%2BbH2sAX3FgKgzeFR3iE9oqsFY4a9fIYr9gMxapbJ5roPiMPgbiRMO4JlEocmym93cxvdaW5b%2F1uhMTXFrMe9tD8sEjqEsSPBLSlKOFCWLkALyJrExraBN5szcxYBuc8Ky%2Bdk6gpyBXpdXCpi%2Bx%2FT0UeJt9tFsGKKjvcBKlik9MX8rUjoMJ%2BWc%2BZZGWwPNPqUf0gSyu6o2X8MuUiXafIo%2Fms%2Fi0YjAuHkBdkn2m51tgRR5AQJsWqB%2BtdYxgtl%2B7GklRAkbO0s4OodFuobaE%2BeEQBULjRMd8p0sE%2FhNIWNOutMeVEaOlGfrdqyKm4jxGwjKoD7lfXCsumyjbf1nyg8rmn1y5ms8RNWu%2Fz9Jhl%2BYtxkqFOOHca9cFJM1NwSmHSeKnK4wg6ytZobkx6IalyBvHMHL5Fp2qx%2BgxVyPHLOS7SEmfpwt5LwBk%2BO0hYL7txYKGPjzVeSTizCwscnJBjqkAXAFYZqP9MshRWDbrGeroRGv1Mjyh4r1BwVJjNtrfq%2FaLErey1B9xAKZWmHXBgGtKLload0q7x5IWQzGIRjvCn9H4WDf6se3lmeCLMvhr%2FAIYA6pikCwCkWJSghbxkH8PxFPd9Iejt8hIfH2Yv51HcVh7aVabRNlsOIsMCy3%2FXde1CaF7m7K9rGlRzwH%2BzFEuSt6Rz61WTqyjfUSuTJmafBK4tmS&X-Amz-Signature=b622f80bb7f8aa1dd4827fed51092b54f8d76081add519a9796de0b681429243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
