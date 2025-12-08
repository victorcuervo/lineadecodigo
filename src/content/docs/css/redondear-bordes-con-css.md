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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7NY3DGH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEN4XAp4PdaE9yjLQR45T7UMn%2BI8%2F3b%2FtHJK0AspeD8QIgFeaN61U1xyffI1eKWdIcyg%2FG7NiigWRvF16sfv4yGVEqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQXNT09PCacaO7%2FkyrcA%2BwhdTGUWcPkfMtJV3%2FzQVFg4nP3nHRKnoMtStBzcUW5xc3xwaeozUUXLtVoJOKP2PrGaChkkGl76mmbEFjEgK1HLf7x0lggIBTO8MiST3F%2BYB8oa6lAy3wqqlhSMlkKnUxUwhU3bcTFIa3oYT93nW9Ahg0xPqHdZ0Gx8FIIhxO6W5LgMFMil6LwVbVuJpCYl2PeKbCPUjDuoQu%2F8kFhJZUtpVJfPtuE%2BG5Pl%2FRr7y1JkMecZwQFagzoDnofopiTVUtADntEO%2FWsWYkLZbOgFBp937WVcHk1lm8Vd%2F1HRjeGeYN0lkx0QG1SUIP%2BMgiO2JgHaz%2FAVeT1d3ZOpp8%2BuJfmkqB0CWrKkOZ4lX610StfXqgU%2FEybwAEKawtXSa62tBviqAZ4vI%2F%2F%2Bpt6JzP1slS6aAqKkI%2FDNEZpBE8gygiCocS90ttKfa%2F3%2BBHXPw3D5Dg4qHf%2BIuYJjmeS1x7S6xOpk304ch5QurzXU6NDW0grWrRua8gsYWtoeOMfQrgsQl3sGVCaqC8kKUs9TWzqnxslrHGgGqLdD%2FAg2nxXTQ8XxEvgkUJAcZQsDyoqVWmjdJFktjtHsLtWUBj3hv3sfwvbpEoDQSJ4g%2FzbN4p8Q6TvrS5eyXeDWxrh7jFxMMfB28kGOqUBO7PhvzEmSHaIn32vBDI7etuTodrJIbXWoxnoMmQDw8AAUQsen1Ke5tdY2gLsLANVQpJnUQw1yorM8clB6Du8csRSPWNumZJS63sz2Iix%2FgkPqZf4v7N4XD6A7eIlAel%2BILSVEiMYGNi5gOrnwStCT%2FJt2H%2B3tiOQnFLJBRZc5uaW2KT0telwBNFVTJT1MYNLZxhXC1e7QQAX4Ur1jK1QIfk2NpYC&X-Amz-Signature=94a27780044a82c5146ba95ab7789eb6b10389e2ad5276fa04ff50809d7257b1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7NY3DGH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T145827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCEN4XAp4PdaE9yjLQR45T7UMn%2BI8%2F3b%2FtHJK0AspeD8QIgFeaN61U1xyffI1eKWdIcyg%2FG7NiigWRvF16sfv4yGVEqiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDKQXNT09PCacaO7%2FkyrcA%2BwhdTGUWcPkfMtJV3%2FzQVFg4nP3nHRKnoMtStBzcUW5xc3xwaeozUUXLtVoJOKP2PrGaChkkGl76mmbEFjEgK1HLf7x0lggIBTO8MiST3F%2BYB8oa6lAy3wqqlhSMlkKnUxUwhU3bcTFIa3oYT93nW9Ahg0xPqHdZ0Gx8FIIhxO6W5LgMFMil6LwVbVuJpCYl2PeKbCPUjDuoQu%2F8kFhJZUtpVJfPtuE%2BG5Pl%2FRr7y1JkMecZwQFagzoDnofopiTVUtADntEO%2FWsWYkLZbOgFBp937WVcHk1lm8Vd%2F1HRjeGeYN0lkx0QG1SUIP%2BMgiO2JgHaz%2FAVeT1d3ZOpp8%2BuJfmkqB0CWrKkOZ4lX610StfXqgU%2FEybwAEKawtXSa62tBviqAZ4vI%2F%2F%2Bpt6JzP1slS6aAqKkI%2FDNEZpBE8gygiCocS90ttKfa%2F3%2BBHXPw3D5Dg4qHf%2BIuYJjmeS1x7S6xOpk304ch5QurzXU6NDW0grWrRua8gsYWtoeOMfQrgsQl3sGVCaqC8kKUs9TWzqnxslrHGgGqLdD%2FAg2nxXTQ8XxEvgkUJAcZQsDyoqVWmjdJFktjtHsLtWUBj3hv3sfwvbpEoDQSJ4g%2FzbN4p8Q6TvrS5eyXeDWxrh7jFxMMfB28kGOqUBO7PhvzEmSHaIn32vBDI7etuTodrJIbXWoxnoMmQDw8AAUQsen1Ke5tdY2gLsLANVQpJnUQw1yorM8clB6Du8csRSPWNumZJS63sz2Iix%2FgkPqZf4v7N4XD6A7eIlAel%2BILSVEiMYGNi5gOrnwStCT%2FJt2H%2B3tiOQnFLJBRZc5uaW2KT0telwBNFVTJT1MYNLZxhXC1e7QQAX4Ur1jK1QIfk2NpYC&X-Amz-Signature=a648c8dcef2c5938e1da76d06c86bb68f80974884a301a9f6cdc14200b4e54e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
