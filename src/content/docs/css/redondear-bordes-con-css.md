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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FXY66MJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ937nQW3nvE4sO8PHjIpruS7Un5sns1EoMAzKc%2BxTJAiEA0N7W07i5VQCX08%2BIb7KN%2FOsWYX2uaLgUu3jP6gLcEnEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGxXijos6prRrj0kRircA5SR2teQzW%2ByxkfEIANzKOEvgYYCZTZoDGCnIGEbK7phwNl15PMqWUzultsjM%2Brfz8kZRzpZh7HqTN3jNYQSmHov5jBZIGsleVMkmfDRoBhwvU0YOPHJShSaKGZQRhv%2B%2FKsTMQTNF7OIm%2FJIIPCykT9DW%2BvgjdLmy4jvKeY9ich4TRELWqbxU0a3R%2FHSuxQkau1pxIBSaI6%2BYg9svQ%2B3e2ahPST9jwMkCJRe%2BkTDMRFmMsT788ATybIPu3l6EUVeiGm9jfp4YSKZso6ec%2FbWKtNfLNcSAcl7wHtekXQsFodhYyDjyrCJ1JjhtwBuWeYNnoFxcWUQC%2BW7y07pmgCN%2Fw4uRDqRHWwQgs29gk5QPXLKmZoyo46loLR26CMG08AcpAWY1rKNAALcsNkUGmPBWcbWJyUVaJUrbBiLlN4qHGPpy1Lp%2BkNzmSd91tQAFQxaxiweg0fiK0hUcbUltbG4Kj47f6%2Fl9q1cBUtzm4HuHbsRg23xWxyswgVAREdE4QJQMnQdb2FjFgFiN7%2BGfNyipbYj4QZyPVXRPVwQt7T2N9k4617wp1hSDdJOu3wy2iRk5TZXtWyCi3Me1ghHZAF2UIyikOkbA2r9JCcZLxpbSJZ%2BKS6QE8y5wDWCLxlqMNW8z8kGOqUBXD1sf18pi5J8ZiZn1zO1cxFBfmfnBt62flewdJeg8ESVEDSxjDywNCeqBdmMXcPL0uT%2FGivdgX%2F%2Ba0H9GnjRoKQlRqMRW79YWL8%2FHeAzcJVxnd%2BSMLfttyZZw6GC1W37sVNdBA%2BJGOuPIb4VMPNIzBVJEu7cB5lAxBplhxtgKZjRCxqehKQWaLih0W%2FEghqokc9DCuUpWHd3YlR5Y9CELMCH7TRb&X-Amz-Signature=65c05d5598ec924939d89198d93771201533a3b3be24c02136240574bb4cdc45&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663FXY66MJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T074658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFJ937nQW3nvE4sO8PHjIpruS7Un5sns1EoMAzKc%2BxTJAiEA0N7W07i5VQCX08%2BIb7KN%2FOsWYX2uaLgUu3jP6gLcEnEq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDGxXijos6prRrj0kRircA5SR2teQzW%2ByxkfEIANzKOEvgYYCZTZoDGCnIGEbK7phwNl15PMqWUzultsjM%2Brfz8kZRzpZh7HqTN3jNYQSmHov5jBZIGsleVMkmfDRoBhwvU0YOPHJShSaKGZQRhv%2B%2FKsTMQTNF7OIm%2FJIIPCykT9DW%2BvgjdLmy4jvKeY9ich4TRELWqbxU0a3R%2FHSuxQkau1pxIBSaI6%2BYg9svQ%2B3e2ahPST9jwMkCJRe%2BkTDMRFmMsT788ATybIPu3l6EUVeiGm9jfp4YSKZso6ec%2FbWKtNfLNcSAcl7wHtekXQsFodhYyDjyrCJ1JjhtwBuWeYNnoFxcWUQC%2BW7y07pmgCN%2Fw4uRDqRHWwQgs29gk5QPXLKmZoyo46loLR26CMG08AcpAWY1rKNAALcsNkUGmPBWcbWJyUVaJUrbBiLlN4qHGPpy1Lp%2BkNzmSd91tQAFQxaxiweg0fiK0hUcbUltbG4Kj47f6%2Fl9q1cBUtzm4HuHbsRg23xWxyswgVAREdE4QJQMnQdb2FjFgFiN7%2BGfNyipbYj4QZyPVXRPVwQt7T2N9k4617wp1hSDdJOu3wy2iRk5TZXtWyCi3Me1ghHZAF2UIyikOkbA2r9JCcZLxpbSJZ%2BKS6QE8y5wDWCLxlqMNW8z8kGOqUBXD1sf18pi5J8ZiZn1zO1cxFBfmfnBt62flewdJeg8ESVEDSxjDywNCeqBdmMXcPL0uT%2FGivdgX%2F%2Ba0H9GnjRoKQlRqMRW79YWL8%2FHeAzcJVxnd%2BSMLfttyZZw6GC1W37sVNdBA%2BJGOuPIb4VMPNIzBVJEu7cB5lAxBplhxtgKZjRCxqehKQWaLih0W%2FEghqokc9DCuUpWHd3YlR5Y9CELMCH7TRb&X-Amz-Signature=16fe566894c1232ac2286938524254cbe043a0967f989e3ca8b8fa7ab4412de8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
