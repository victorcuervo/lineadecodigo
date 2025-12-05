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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDY2CWLR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrGP3jyI%2BS4lkO339DpLRcMuJ3xZlhqdsykqPecSxQ9AIhALlfnldg00Lbw3B8ZOVQNNcWPU4%2BZt%2B%2BPoqo2oq1FxrdKv8DCFsQABoMNjM3NDIzMTgzODA1IgwJ7lkwH8gMtSdBH8sq3ANyZ8v2qMAE2Lvt%2B0NouvMSq%2F5MlhqTrRLaLYm5H2jtnGLPXmLbZbHsORnUk8Uj5ykztqbqzuTTLGcc8lpgrBS9TFZ4jz0XKSIq2qLBuEmbLfYaS4gI%2F%2BL1TIbLdrQ8HI7o7Lyq9b2ms0umjDkU1LTe25N0qkx2OJaUhYS%2BXLUia%2BHP50gN9N9vR1pb85klcFTsb6bKK07TM2joflm736tG1UbB6pb%2BuLJI05uErqxN8wMaMpmsqW4tbaB8iRw1FmfgoJPD2dRHl7Xs6uEYqTvH1%2BdroDlud1eUqSqbPHXeS7%2F846rrYcGqly6ne%2Bgh6E5FjA5pMUExlnUW4Pyn%2B2PgEYZBRaac8sSJWfemo6HU49FpT9QSZQV700WXAn7DSa9SYIdaZ81Fmh%2B21LktJxISo9fszo60mf68fvbkyBv7tMexppOWoc%2FF1MATadwB00X%2BHs4eO%2BW9BIP7Ppe5gcCSX%2BOw2bjZny5mCLBgCMT%2Bc9e0jk4ArnBNSPBBv7TrZzMbOOWbdLmUlQgxN3AB%2BLW532vtdIOHpqsHrj%2FvXSlcUQrC0N%2BCiNe9tWwRnZEJ0eEs7F1Xmu6xfu6aGWBEAxVsTmgGoI3Om8RLZBLjbnsbDqV3Boyki2xshY2oNjDzzMrJBjqkAUHqxoTxnbeTjt93FrdNe7m4n4bEff3sAbBYfWbJxGhPuO8g7PcxoZpbJ9UUMB6%2F6kgR6XdJKJxiv35pdzh0yqg1223LawfLLtyklDybMYeXDXCCbXM277bybSszO2lvrI64ijaxb7HWFXkvTFp5n1m8XdRuRl79kzAjA6fxUpfYZzW1o8ybJ621YsP6eZoIcmNztguYprnvVSDxDjskzcgn84NV&X-Amz-Signature=29d26694d02abe9eda6adcc0e0ad9c751a741df8336aede3b280e832df4698fb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDY2CWLR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T134049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCrGP3jyI%2BS4lkO339DpLRcMuJ3xZlhqdsykqPecSxQ9AIhALlfnldg00Lbw3B8ZOVQNNcWPU4%2BZt%2B%2BPoqo2oq1FxrdKv8DCFsQABoMNjM3NDIzMTgzODA1IgwJ7lkwH8gMtSdBH8sq3ANyZ8v2qMAE2Lvt%2B0NouvMSq%2F5MlhqTrRLaLYm5H2jtnGLPXmLbZbHsORnUk8Uj5ykztqbqzuTTLGcc8lpgrBS9TFZ4jz0XKSIq2qLBuEmbLfYaS4gI%2F%2BL1TIbLdrQ8HI7o7Lyq9b2ms0umjDkU1LTe25N0qkx2OJaUhYS%2BXLUia%2BHP50gN9N9vR1pb85klcFTsb6bKK07TM2joflm736tG1UbB6pb%2BuLJI05uErqxN8wMaMpmsqW4tbaB8iRw1FmfgoJPD2dRHl7Xs6uEYqTvH1%2BdroDlud1eUqSqbPHXeS7%2F846rrYcGqly6ne%2Bgh6E5FjA5pMUExlnUW4Pyn%2B2PgEYZBRaac8sSJWfemo6HU49FpT9QSZQV700WXAn7DSa9SYIdaZ81Fmh%2B21LktJxISo9fszo60mf68fvbkyBv7tMexppOWoc%2FF1MATadwB00X%2BHs4eO%2BW9BIP7Ppe5gcCSX%2BOw2bjZny5mCLBgCMT%2Bc9e0jk4ArnBNSPBBv7TrZzMbOOWbdLmUlQgxN3AB%2BLW532vtdIOHpqsHrj%2FvXSlcUQrC0N%2BCiNe9tWwRnZEJ0eEs7F1Xmu6xfu6aGWBEAxVsTmgGoI3Om8RLZBLjbnsbDqV3Boyki2xshY2oNjDzzMrJBjqkAUHqxoTxnbeTjt93FrdNe7m4n4bEff3sAbBYfWbJxGhPuO8g7PcxoZpbJ9UUMB6%2F6kgR6XdJKJxiv35pdzh0yqg1223LawfLLtyklDybMYeXDXCCbXM277bybSszO2lvrI64ijaxb7HWFXkvTFp5n1m8XdRuRl79kzAjA6fxUpfYZzW1o8ybJ621YsP6eZoIcmNztguYprnvVSDxDjskzcgn84NV&X-Amz-Signature=6fc94a6f5d0b5b6be08a5994a20b13becb82b5064c69c02afc69fd098fc9d67b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
