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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2PKRMW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAu7KrhUQp3UJ7KJ28dbu69dhwmjkaZuETpm6dxFX0zPAiA8Ck1HdgIicaqkGSHst%2FIB9KxuTypp1mUeYBf8qY0mCSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMio34Q7KpalmkW626KtwDkVPMJiX5u%2B%2FyHlr%2BjVOX00MMjYw1IGD2yhI1ptgJKUWkKAvw7Ch2aDJfH%2BlQgWY3WItTrdnbLCzuW85JTYxctPshQrJt0RMIF%2FZrpU8oMmZSHE0sCq4eRN3X4PUG2kWwZSWK3BeNsNFJMtMVzqBnFp7DMLrQy7aEiOeUjYBM3g44VdmAGjvvPklgXWYXzfm7j0z9SsTJ71j0us90OWh7B8vAiWZ7o%2FXpqhB0mEAc5DwvHCLY1BU%2F2oU%2FdcMTMqEiiA4i3lVTin2mk0woyUpgiEWN5Jnc2bB95KIB12iBPynju06kEeMw02CijTz0Eggxzf4Z2sp5AookUo0tcA20Jp969QlN%2F71yTOorYU8J2yGppeip1RSq9awLukF%2FdHwjDWPrzohJByVUJz9H2EzGZ0Fa7tz9x%2FOYLGdXusbVpiDL9ay4Tz%2FN%2BWm%2FN%2FE93zvILMk0p8xCyEb54ziVAiFPw6pAWooZDQvgmyTfXt6mLkKEPhQ6jmFIHJAMP2qi%2FvwqfvI9aBGu5p%2FPEjW0zmhWjp7x3op%2F7dByi7wyOHmBP9N6lGIsPgpnAHITqH4dh72GTXsPtaVn1oIiP3bhTGS%2BT%2F8vepczwdJUiLgXjqN8jORnKV8%2BB%2FeL6saPLnswgeKKygY6pgHi%2F8pEiWScHXcfJAJUzheSc4hTkHdEXrgip49G0WL1OT4ZeQqVCGsNkkEfHGP5ltKBZsrLo6flTpw5YMZNk%2FhhX6jtXxFynRpc0o9moN%2FfvIK5ItfB14mvbURsNnXLLhnDl8SAvs%2FkLk5y20aMnc%2BTV3dvtyoeMzHO4pxQeC%2BkFXic3lySZDFjSB4rQXSqlEPz2MM4Bdcff1Df1%2BcN5udDRe4f2hST&X-Amz-Signature=e5700ba6df279703480e109ac3dac65ba9b26b407d291df37988bface33c515a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QE2PKRMW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAu7KrhUQp3UJ7KJ28dbu69dhwmjkaZuETpm6dxFX0zPAiA8Ck1HdgIicaqkGSHst%2FIB9KxuTypp1mUeYBf8qY0mCSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMio34Q7KpalmkW626KtwDkVPMJiX5u%2B%2FyHlr%2BjVOX00MMjYw1IGD2yhI1ptgJKUWkKAvw7Ch2aDJfH%2BlQgWY3WItTrdnbLCzuW85JTYxctPshQrJt0RMIF%2FZrpU8oMmZSHE0sCq4eRN3X4PUG2kWwZSWK3BeNsNFJMtMVzqBnFp7DMLrQy7aEiOeUjYBM3g44VdmAGjvvPklgXWYXzfm7j0z9SsTJ71j0us90OWh7B8vAiWZ7o%2FXpqhB0mEAc5DwvHCLY1BU%2F2oU%2FdcMTMqEiiA4i3lVTin2mk0woyUpgiEWN5Jnc2bB95KIB12iBPynju06kEeMw02CijTz0Eggxzf4Z2sp5AookUo0tcA20Jp969QlN%2F71yTOorYU8J2yGppeip1RSq9awLukF%2FdHwjDWPrzohJByVUJz9H2EzGZ0Fa7tz9x%2FOYLGdXusbVpiDL9ay4Tz%2FN%2BWm%2FN%2FE93zvILMk0p8xCyEb54ziVAiFPw6pAWooZDQvgmyTfXt6mLkKEPhQ6jmFIHJAMP2qi%2FvwqfvI9aBGu5p%2FPEjW0zmhWjp7x3op%2F7dByi7wyOHmBP9N6lGIsPgpnAHITqH4dh72GTXsPtaVn1oIiP3bhTGS%2BT%2F8vepczwdJUiLgXjqN8jORnKV8%2BB%2FeL6saPLnswgeKKygY6pgHi%2F8pEiWScHXcfJAJUzheSc4hTkHdEXrgip49G0WL1OT4ZeQqVCGsNkkEfHGP5ltKBZsrLo6flTpw5YMZNk%2FhhX6jtXxFynRpc0o9moN%2FfvIK5ItfB14mvbURsNnXLLhnDl8SAvs%2FkLk5y20aMnc%2BTV3dvtyoeMzHO4pxQeC%2BkFXic3lySZDFjSB4rQXSqlEPz2MM4Bdcff1Df1%2BcN5udDRe4f2hST&X-Amz-Signature=b483f32390c90e917c8cd57f03bc1eb42d6f657a3b6e293efe6addf347603a66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
