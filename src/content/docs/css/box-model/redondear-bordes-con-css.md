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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3KQT6D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxTAeVn4WcotPIXBP5OmT8xJQVXwxAVmT2ly3z8UnbQwIhAN4LUhsXvkqR8W%2B0yv%2B4v1Cm74Lr5dZooKsD6%2F%2FOpzJIKv8DCHkQABoMNjM3NDIzMTgzODA1Igzw1vahizClyTjSIiYq3ANEm6So70TrxGGsIbbyHvznICovCNaaM%2Bzj1ovDSoGT6ICkN0toGMI%2Ft%2FeDvpE36vC5FY%2FS7uhCbmsu4DlLSE%2FGf9LPb1MNvBfnhRwRxXff2XcmYjWIhuvjqH4T8WwyQk4xnp5AaOeM7%2BBN1P7uUv0nB4XdozkSfIxbIA%2B%2BTRmvdTlwRZYerHOYR7aazm%2Fdk81Re6y1s2G%2FxnlWoq6vaI1PgeqQzjaYeRM1Vcu2tn2VQwFb4HH41IP9TqqLPgFfvit0IYisnZ7vTFwHzg5ItGuQakXubzBLOxyU8900x8QTQLD90c8QCSAj1rIbwqLMOnUaLp%2BDr8LYLQpr6ATcBmp3wFny%2BMylJCiFHcOF6zvCqumg8UjnaJBAathUO5%2BhREmWNe1rsKob8P%2FqrwvoRy0A1lNs5jZn57vYuFJ82X4YS5SwoXXLGD%2BLnL3l52mTcBSr7PMFBUdxWCokCiH9lPv8fzLvPYuhFa6MuYE5szHtXMqqefAxoiK7y47U4m9w97hj%2BsiCKBcxOe9ISLPEOqJjDAN8EKDVryKdSP5xTK8c6IbrUagPLadl9jR6kP%2BnfCb3APqsHB5%2ByfjEPlBUTytkf%2FxpwZt3iXdUcjRLtXJ0qCKVqgj%2FTkgjhOo46zCvuInKBjqkAQ1CKN7VpSbYI71aGPcB3SXWAnJUd2kOe5q9%2FB1Gi%2FBHsix974LlDucDg%2BH7Y3ExJa70hiGb8xDffPrRUDKcLC7HZfi%2BjbS4xFNDbBnEI5AIF2VLmp58i5Ytz13eFx9IyZerPkev1gdYbf%2FdVXSuVcCruSOE8SS97pJDRkpT6WrWxmi09iQMebGyCVCBgMoaMfzDQ0VTgTIDr%2FrpjhBX931Wjfca&X-Amz-Signature=ff46e4daa679e4f83ba31d57bc402c9fa2c4fcd97eb82e7cf725f0dfc3b97494&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667G3KQT6D%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080426Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxTAeVn4WcotPIXBP5OmT8xJQVXwxAVmT2ly3z8UnbQwIhAN4LUhsXvkqR8W%2B0yv%2B4v1Cm74Lr5dZooKsD6%2F%2FOpzJIKv8DCHkQABoMNjM3NDIzMTgzODA1Igzw1vahizClyTjSIiYq3ANEm6So70TrxGGsIbbyHvznICovCNaaM%2Bzj1ovDSoGT6ICkN0toGMI%2Ft%2FeDvpE36vC5FY%2FS7uhCbmsu4DlLSE%2FGf9LPb1MNvBfnhRwRxXff2XcmYjWIhuvjqH4T8WwyQk4xnp5AaOeM7%2BBN1P7uUv0nB4XdozkSfIxbIA%2B%2BTRmvdTlwRZYerHOYR7aazm%2Fdk81Re6y1s2G%2FxnlWoq6vaI1PgeqQzjaYeRM1Vcu2tn2VQwFb4HH41IP9TqqLPgFfvit0IYisnZ7vTFwHzg5ItGuQakXubzBLOxyU8900x8QTQLD90c8QCSAj1rIbwqLMOnUaLp%2BDr8LYLQpr6ATcBmp3wFny%2BMylJCiFHcOF6zvCqumg8UjnaJBAathUO5%2BhREmWNe1rsKob8P%2FqrwvoRy0A1lNs5jZn57vYuFJ82X4YS5SwoXXLGD%2BLnL3l52mTcBSr7PMFBUdxWCokCiH9lPv8fzLvPYuhFa6MuYE5szHtXMqqefAxoiK7y47U4m9w97hj%2BsiCKBcxOe9ISLPEOqJjDAN8EKDVryKdSP5xTK8c6IbrUagPLadl9jR6kP%2BnfCb3APqsHB5%2ByfjEPlBUTytkf%2FxpwZt3iXdUcjRLtXJ0qCKVqgj%2FTkgjhOo46zCvuInKBjqkAQ1CKN7VpSbYI71aGPcB3SXWAnJUd2kOe5q9%2FB1Gi%2FBHsix974LlDucDg%2BH7Y3ExJa70hiGb8xDffPrRUDKcLC7HZfi%2BjbS4xFNDbBnEI5AIF2VLmp58i5Ytz13eFx9IyZerPkev1gdYbf%2FdVXSuVcCruSOE8SS97pJDRkpT6WrWxmi09iQMebGyCVCBgMoaMfzDQ0VTgTIDr%2FrpjhBX931Wjfca&X-Amz-Signature=4963744e565515b371d7a49c32782f53ddbc71cec4be04eb8a2c543e7b9de328&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
