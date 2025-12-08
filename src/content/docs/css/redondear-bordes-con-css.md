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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAZD6U6C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVh%2FokVREvTmU5MQy%2BGDnSsSDwvx0159PNTcVnJt5AagIhALJQVWq7ruQn2Buhkke8dH6bSNoqPew9ubZ9TYJclQb1KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww7Z5ZjkfKHlH8KOcq3APMA1Fup4WBeKeNZpd%2Bl0a4VeWRlMM1HI9mc53uNOBK3dZn2V8vinmGbu%2FKT5%2B2r7draj3fFmJcZtrEqZxcle5ghALaBuvrpzdP7RPWwSNZbXFYoTuokijK3lbb7e9442JA9LbVhbOgmnKOdmHJQUj51Qn8OPaPRIA4z06qVHCUatJJ8TxADD3lWeysLWFtn%2B%2FUE8y3cvC4FOIRM8vYGwcZaAGePW9u2nUpTzahDt24nONTBL1jg5lO1%2FJ7BNVtqDcY7gQ6rO6Dt%2B4zoLCi%2B9%2BmOrOquI932NfnKIBWHKPDeFC9dWUUrPyXTywGRtiM8RRRNx3rg9fMbtAnzrwhcheypfcgXYyzS8TbpeKeKFaQNhOEPFm8ambWK52iUsAcub2PNVyXJluPVK2ZlRR5bZD2y8IZMYWuz1abBtKnlMAYYjv%2FbSh%2BB%2B8c92KxgCUWOKx1RpCjRh23fVGh5lkSjnSqq6px5ij4fXiAK5e74E7%2Fe3vfNNJEkdiP%2FrbAGRfqj4DBs1yewD7JdtsQj6t7q1UQKDzQmvf%2F4SyzrcfzxeKttA%2FgN7xNhtpr%2FVPUFPLJujyFqvbTZAVxew%2FM9Nkioup%2Bq5QyCxhtdrWdJ7hw9bUJe99oU2vWHJvj9urfizDt7dnJBjqkAZnH3tsY573okTXf6iZfroUYBGCj9xbTCO92250YDSfP69JK4ntYkZh1JCZO3UXUN5GLArecqVKg7MUNYYcbtA3SempAJj9Ep84Nd7tk%2BjEneGLYs7kSExP5Wtjzi6AvtxbTbaJ2bOKrmifJVUTS%2BAx8aTeRhMF7bgn6rUvY5H%2F5oSJuhihrRBLZ8%2FjMRG34s2ePsCX3ark1p6%2Fenp7fbXw3huvS&X-Amz-Signature=4d582666d1d3a648ab5872108d374668bc1792936ab42f04afc2f38c35143a85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VAZD6U6C%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085154Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVh%2FokVREvTmU5MQy%2BGDnSsSDwvx0159PNTcVnJt5AagIhALJQVWq7ruQn2Buhkke8dH6bSNoqPew9ubZ9TYJclQb1KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igww7Z5ZjkfKHlH8KOcq3APMA1Fup4WBeKeNZpd%2Bl0a4VeWRlMM1HI9mc53uNOBK3dZn2V8vinmGbu%2FKT5%2B2r7draj3fFmJcZtrEqZxcle5ghALaBuvrpzdP7RPWwSNZbXFYoTuokijK3lbb7e9442JA9LbVhbOgmnKOdmHJQUj51Qn8OPaPRIA4z06qVHCUatJJ8TxADD3lWeysLWFtn%2B%2FUE8y3cvC4FOIRM8vYGwcZaAGePW9u2nUpTzahDt24nONTBL1jg5lO1%2FJ7BNVtqDcY7gQ6rO6Dt%2B4zoLCi%2B9%2BmOrOquI932NfnKIBWHKPDeFC9dWUUrPyXTywGRtiM8RRRNx3rg9fMbtAnzrwhcheypfcgXYyzS8TbpeKeKFaQNhOEPFm8ambWK52iUsAcub2PNVyXJluPVK2ZlRR5bZD2y8IZMYWuz1abBtKnlMAYYjv%2FbSh%2BB%2B8c92KxgCUWOKx1RpCjRh23fVGh5lkSjnSqq6px5ij4fXiAK5e74E7%2Fe3vfNNJEkdiP%2FrbAGRfqj4DBs1yewD7JdtsQj6t7q1UQKDzQmvf%2F4SyzrcfzxeKttA%2FgN7xNhtpr%2FVPUFPLJujyFqvbTZAVxew%2FM9Nkioup%2Bq5QyCxhtdrWdJ7hw9bUJe99oU2vWHJvj9urfizDt7dnJBjqkAZnH3tsY573okTXf6iZfroUYBGCj9xbTCO92250YDSfP69JK4ntYkZh1JCZO3UXUN5GLArecqVKg7MUNYYcbtA3SempAJj9Ep84Nd7tk%2BjEneGLYs7kSExP5Wtjzi6AvtxbTbaJ2bOKrmifJVUTS%2BAx8aTeRhMF7bgn6rUvY5H%2F5oSJuhihrRBLZ8%2FjMRG34s2ePsCX3ark1p6%2Fenp7fbXw3huvS&X-Amz-Signature=30909616cb926c3dcd93385429e1cbe75487141986f16170549b9295326eacc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
