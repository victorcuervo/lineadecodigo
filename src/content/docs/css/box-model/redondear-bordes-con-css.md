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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULQIC5RZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDojRkFS5ncw%2B3Cj02pzyBcN%2FcUAZu3LPTtCo8NsXJA1wIhALL%2BedYSmO%2BdqOVbfGTe1%2B%2F8O2MEXgchUbRfDa9Iod%2F%2FKv8DCHwQABoMNjM3NDIzMTgzODA1Igz8qER1XJBIrTWFqZwq3ANFW16dc1vdGDfGENlVnYInIXjR9PAy6FzmmVQCG%2BwFq68eQ40N0xAC3XiCWUwcMh6OzyFBq%2Fwn0TQWyVU%2F%2BR8Xqw0PkzN40BMt1rnQA0jC5g4TlCZzxxq3CIIYH%2FD3YW%2FQ%2FKqfhDIqx2ePzCHWK72vQ1WFAaVdaDUUfczHCOFEaQVZEhR2lO%2Fd0N9dWrs85I7df9ZLhX8pg9EqZQZfeRIGbS0hdpK8bUL0xVECyvI3FDakGylQlF4ipaDzWkGTAsgJuTZq4Yaio6EF5v%2BDy3PVXWP22Nw66n44iqpVoUF8cv5zNAIThhxsEpsOF9bPW9Dvmjz%2BeBQI9TbFpgzJJqRLF%2Ba2bW0lI2ub4Sz4H0BGvsY8YDckBlVx7B7Thzkk93lDvH%2BMwkPJcshQMLHvTQ%2FdedjJA97GhP5U6%2FV5WXyhQANwTnTJK2Qy9BmqsEt5CZ%2BDeIH7OTMqbmwsxM%2BWXdfONT218IN6r%2F4C1dSWe5h7mvFQJ%2BcfB183h4cLSLo5TdrNq6OvXJNcsRGvm4BQn4n1oPH7AARuWq1LolnE1l7hb7A%2FdVd2YZGhcbYZ2UTakHB1jflbpVq2u22TwUfA%2Fu9ore78gicuFrhAwuNy3wLBwkc%2FCBf3YAdt7zjDsDC0j4rKBjqkARG8Y9Y1tPw6bfOpiNoOCdh9iDQU5ldwBo90v8nxP2sdNH97voMRhVlv%2FSCOYln1H2tua7oh8GYZsAGbw95uf9vYFrwuSO2Klre2TipHyevCfSNuzcWYuV8fJJnjXW%2FvehW94lG9%2FmLcJpMkmNmVyIXmzNVILt5yhD25PhvFiHHnDEWOtQjaMzU6PrC7xiGH%2FKCs9HFaz6FcQTOZBD0zq3VGUZY3&X-Amz-Signature=24673264c9b39d12d13475fb4c5bc784df176583781c58e2878ca45784d5bf36&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULQIC5RZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T111703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDojRkFS5ncw%2B3Cj02pzyBcN%2FcUAZu3LPTtCo8NsXJA1wIhALL%2BedYSmO%2BdqOVbfGTe1%2B%2F8O2MEXgchUbRfDa9Iod%2F%2FKv8DCHwQABoMNjM3NDIzMTgzODA1Igz8qER1XJBIrTWFqZwq3ANFW16dc1vdGDfGENlVnYInIXjR9PAy6FzmmVQCG%2BwFq68eQ40N0xAC3XiCWUwcMh6OzyFBq%2Fwn0TQWyVU%2F%2BR8Xqw0PkzN40BMt1rnQA0jC5g4TlCZzxxq3CIIYH%2FD3YW%2FQ%2FKqfhDIqx2ePzCHWK72vQ1WFAaVdaDUUfczHCOFEaQVZEhR2lO%2Fd0N9dWrs85I7df9ZLhX8pg9EqZQZfeRIGbS0hdpK8bUL0xVECyvI3FDakGylQlF4ipaDzWkGTAsgJuTZq4Yaio6EF5v%2BDy3PVXWP22Nw66n44iqpVoUF8cv5zNAIThhxsEpsOF9bPW9Dvmjz%2BeBQI9TbFpgzJJqRLF%2Ba2bW0lI2ub4Sz4H0BGvsY8YDckBlVx7B7Thzkk93lDvH%2BMwkPJcshQMLHvTQ%2FdedjJA97GhP5U6%2FV5WXyhQANwTnTJK2Qy9BmqsEt5CZ%2BDeIH7OTMqbmwsxM%2BWXdfONT218IN6r%2F4C1dSWe5h7mvFQJ%2BcfB183h4cLSLo5TdrNq6OvXJNcsRGvm4BQn4n1oPH7AARuWq1LolnE1l7hb7A%2FdVd2YZGhcbYZ2UTakHB1jflbpVq2u22TwUfA%2Fu9ore78gicuFrhAwuNy3wLBwkc%2FCBf3YAdt7zjDsDC0j4rKBjqkARG8Y9Y1tPw6bfOpiNoOCdh9iDQU5ldwBo90v8nxP2sdNH97voMRhVlv%2FSCOYln1H2tua7oh8GYZsAGbw95uf9vYFrwuSO2Klre2TipHyevCfSNuzcWYuV8fJJnjXW%2FvehW94lG9%2FmLcJpMkmNmVyIXmzNVILt5yhD25PhvFiHHnDEWOtQjaMzU6PrC7xiGH%2FKCs9HFaz6FcQTOZBD0zq3VGUZY3&X-Amz-Signature=65b762c38d592e5158b8a9e61c5274d2362fca11baefc357549fa047640f3870&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
