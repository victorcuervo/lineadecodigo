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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGNGJMUV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHo5j6BhEhRPaMATAMu8fArsze7WuFJvZe1KT1dZD%2FFwIhAO1%2FS8%2Br28iDoqEAaDdi4Vq7C7cFBw%2B%2FPgKBFe7ACDXzKv8DCHgQABoMNjM3NDIzMTgzODA1Igz%2Bq0uvXTmuC6aUQNkq3AMWhTZGejePa2m4p7EQ7ZVLVlmOxitSS7g%2FE9sTaRU8RV7k%2B6AXFpQRLi4cIjCzbWXWzI7Tc0AU9aA2X7LlibVjj3gCHpqPft%2BwP%2BdK2FLBIZ091i7TLYfo9QZq8vrRb2yov5FRHfDzmv9H0MSpxCn6dBq2fN2cJKk7bcz3rSdzmkkhN2Ax9PTBHzA5Euj5lAzhF6GTyn85ukCSIgVLQ9u4r6lweD0xopA1NbxefLSJsa2xdq%2BpyCrOngxb19BOmtSWppnPz5nXczux4NDZGErEUL81998nqgsSKycGWv%2FYnPPpc0WQVm7jhfn6%2B3W3QfJINAkfihKss9Utzm%2FtJS%2BQgnqE9jzPVcVZv18re3F%2F1jOhi544TpKdT%2F3s0ChrXSiYw2jJuIHgMMElXU%2F7t9d2LgVcE5BD6k2%2BVa42icpxNqeBR9sHLauQBWonV2jOINS%2F81pMr4oHvr2N5TDDWXR%2BrEsEaxWzmUgcr1tdSWpdnwRm%2FIQhBASSrZAsU5aNWJ5A%2BDP4MEQTjDLWZ3Ywo63iE54%2B1Ke4bfXLFG1EBTUd6Ov7Q2VFF0jwp%2FD7y9fi7gjqa8o5sntMMrp7V7htzvBFd7djgOk8pUUnUqCeAfd9cLBHu5DrYsTI3rb%2F8zDinYnKBjqkAS7as8Y9Mu68sYkYccalrokKvSc9Lc4dGFv9ly5ZF%2FUXiezN37jSCLULgsS5nQSlPZuvRYsnfWp%2BeloskLzyTYCbYdFMx%2BMUHdkdnedk9rSN1MDRdMAKU9ZLOOjcBGGouqrG1ePfr4bhurK%2B76hzAFiFASgyYW7P2Nl05P6tkvuifH4IrDzueyxsOu0z9QIstnN4b6JOvGkDq%2FX4TU%2F6Jz%2Bt0sd7&X-Amz-Signature=26c6b86139cb7db1585b8d65f106380982043c2d30a5f5806199be359c8caea2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VGNGJMUV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T072807Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCHo5j6BhEhRPaMATAMu8fArsze7WuFJvZe1KT1dZD%2FFwIhAO1%2FS8%2Br28iDoqEAaDdi4Vq7C7cFBw%2B%2FPgKBFe7ACDXzKv8DCHgQABoMNjM3NDIzMTgzODA1Igz%2Bq0uvXTmuC6aUQNkq3AMWhTZGejePa2m4p7EQ7ZVLVlmOxitSS7g%2FE9sTaRU8RV7k%2B6AXFpQRLi4cIjCzbWXWzI7Tc0AU9aA2X7LlibVjj3gCHpqPft%2BwP%2BdK2FLBIZ091i7TLYfo9QZq8vrRb2yov5FRHfDzmv9H0MSpxCn6dBq2fN2cJKk7bcz3rSdzmkkhN2Ax9PTBHzA5Euj5lAzhF6GTyn85ukCSIgVLQ9u4r6lweD0xopA1NbxefLSJsa2xdq%2BpyCrOngxb19BOmtSWppnPz5nXczux4NDZGErEUL81998nqgsSKycGWv%2FYnPPpc0WQVm7jhfn6%2B3W3QfJINAkfihKss9Utzm%2FtJS%2BQgnqE9jzPVcVZv18re3F%2F1jOhi544TpKdT%2F3s0ChrXSiYw2jJuIHgMMElXU%2F7t9d2LgVcE5BD6k2%2BVa42icpxNqeBR9sHLauQBWonV2jOINS%2F81pMr4oHvr2N5TDDWXR%2BrEsEaxWzmUgcr1tdSWpdnwRm%2FIQhBASSrZAsU5aNWJ5A%2BDP4MEQTjDLWZ3Ywo63iE54%2B1Ke4bfXLFG1EBTUd6Ov7Q2VFF0jwp%2FD7y9fi7gjqa8o5sntMMrp7V7htzvBFd7djgOk8pUUnUqCeAfd9cLBHu5DrYsTI3rb%2F8zDinYnKBjqkAS7as8Y9Mu68sYkYccalrokKvSc9Lc4dGFv9ly5ZF%2FUXiezN37jSCLULgsS5nQSlPZuvRYsnfWp%2BeloskLzyTYCbYdFMx%2BMUHdkdnedk9rSN1MDRdMAKU9ZLOOjcBGGouqrG1ePfr4bhurK%2B76hzAFiFASgyYW7P2Nl05P6tkvuifH4IrDzueyxsOu0z9QIstnN4b6JOvGkDq%2FX4TU%2F6Jz%2Bt0sd7&X-Amz-Signature=5f3a920da3f81482626ecdc0f69f6171fcd34ba23a8a562ed77f821495d25112&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
