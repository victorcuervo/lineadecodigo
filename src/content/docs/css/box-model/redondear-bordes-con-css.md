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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXOIO3IB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC422s%2FBxsS27W%2FduQuDU3tyXQPqFCyCzfxLog%2BlDocdgIhAKcRG5cCc4jB22aGqbDf0hbemh8K1%2FfqsRgzBp7vRgK%2BKv8DCHYQABoMNjM3NDIzMTgzODA1IgwAlnIJNY8Uui5f0U0q3ANIlPG%2BgLZGI%2FfAGBqWqbZBrn%2Bt6NVkDtb9Va87nQW0BMRHl%2Fq%2FboftRJeutz6SWAkk7gOsaXF9XpnNdjcJ4sbWjS5jYQLEqhiVFTwrlBMwX4Lh7Ep4KQUX2AKbHpfJEV21bnjDy%2B629%2Bf9NiV%2F8nyrLWeRm317h4DXIq2JYRlLBdbxQMZwqzSmFTuZX%2BCI9EcLwJuhsrcCIOT62z%2Bxsu%2BrhN%2Br4rt%2BI7WQG8tEx7e3jUA9C2FOWAJyMPYXlvyLVATcJ56EA%2BMnFvylKKmHuV6J7ibl0MncVhnj8RQty2BsKWBlhK5YOapiHZDbvsS%2FAKMHVgo4CA%2FaADX%2BZKV2Bh8MVxChs8Y%2BxRqLnz%2By7g36Ma921DQx0iczknjY%2BpaI5tP8mUd62TxLn%2BeJznlSqPiyE66foqn7pBfQ6Qmn8JFgvIMP0VUNb2QWHnWHXtniBf5YvvVLujXGKxzKXL66g7mQqSS5NitK8UXRRVQr9%2BlU3AiHnHrA6%2FdYrCGR%2BICLGp3YuWRg%2FZkpcMr%2BYF4Gm6WrZ9tCzNglV4z9VfXMWLJ9ylmOVKl24MeofqGvRJyktACK4No%2FKn0AtRVY5vRqru2pBnK%2Fz12yx7%2FAfiWCCPCtKvLcJrHGsKnGsJhGXDCU6YjKBjqkAbv29qe1RpC53QF7VOvKTNhK1C2K9jYego7sDJDmaTjoI8wbAtmJA4g2PlhNia9lKqqc7lSqVe0vXvQhtYTihd752cteh6C9i8oHj7xWYJJUGFalSmTzAH8xsaoChUtSyXqjNBa8vbLd2FcnYJLqiF6onLwTNEBfDbtp6pQwFZdnQukCaYePTM1grNFxoTK3c50rimVdaO3dQzsZLEzrr4tW%2B9dV&X-Amz-Signature=64da9d67fd27d9a091f8cd2c6bfb3bff233f8be2e0f03fccc3a376bd21bc9bfe&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXOIO3IB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T051538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC422s%2FBxsS27W%2FduQuDU3tyXQPqFCyCzfxLog%2BlDocdgIhAKcRG5cCc4jB22aGqbDf0hbemh8K1%2FfqsRgzBp7vRgK%2BKv8DCHYQABoMNjM3NDIzMTgzODA1IgwAlnIJNY8Uui5f0U0q3ANIlPG%2BgLZGI%2FfAGBqWqbZBrn%2Bt6NVkDtb9Va87nQW0BMRHl%2Fq%2FboftRJeutz6SWAkk7gOsaXF9XpnNdjcJ4sbWjS5jYQLEqhiVFTwrlBMwX4Lh7Ep4KQUX2AKbHpfJEV21bnjDy%2B629%2Bf9NiV%2F8nyrLWeRm317h4DXIq2JYRlLBdbxQMZwqzSmFTuZX%2BCI9EcLwJuhsrcCIOT62z%2Bxsu%2BrhN%2Br4rt%2BI7WQG8tEx7e3jUA9C2FOWAJyMPYXlvyLVATcJ56EA%2BMnFvylKKmHuV6J7ibl0MncVhnj8RQty2BsKWBlhK5YOapiHZDbvsS%2FAKMHVgo4CA%2FaADX%2BZKV2Bh8MVxChs8Y%2BxRqLnz%2By7g36Ma921DQx0iczknjY%2BpaI5tP8mUd62TxLn%2BeJznlSqPiyE66foqn7pBfQ6Qmn8JFgvIMP0VUNb2QWHnWHXtniBf5YvvVLujXGKxzKXL66g7mQqSS5NitK8UXRRVQr9%2BlU3AiHnHrA6%2FdYrCGR%2BICLGp3YuWRg%2FZkpcMr%2BYF4Gm6WrZ9tCzNglV4z9VfXMWLJ9ylmOVKl24MeofqGvRJyktACK4No%2FKn0AtRVY5vRqru2pBnK%2Fz12yx7%2FAfiWCCPCtKvLcJrHGsKnGsJhGXDCU6YjKBjqkAbv29qe1RpC53QF7VOvKTNhK1C2K9jYego7sDJDmaTjoI8wbAtmJA4g2PlhNia9lKqqc7lSqVe0vXvQhtYTihd752cteh6C9i8oHj7xWYJJUGFalSmTzAH8xsaoChUtSyXqjNBa8vbLd2FcnYJLqiF6onLwTNEBfDbtp6pQwFZdnQukCaYePTM1grNFxoTK3c50rimVdaO3dQzsZLEzrr4tW%2B9dV&X-Amz-Signature=34aeea1571202922df1e6ada3cf8c9733e646a4bbdeddbb0a6beb8d4868be6d3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
