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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQWCJAW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT576zUeFovKMNo2gW%2F0M%2FAiDFrrf4nZianAYudduS4AiB5EJ3J7CcAPdDrafL5OmuLWla%2F6Ubvw19%2FWsOyaGjt6CqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9CFLGbyqSBEy0dHOKtwD0lEYlzMNW5Z%2BhaGB%2FwoVnkFZg1EsNTwJMEmPk%2BBN07dhNQMrvKk1VhR1Q3c54hiNCPv32XSbQb%2Fm8T6Xf77Vb8qBpbMY8946wsxTrTHOiHLV7ZI%2FShqm8C8VO0W2H9MDPvwTWZr%2BBGRFZiH6%2F1SZD6gj%2FOuUBNQuJBChm96Cuk64CaUxshfu9qRH4D%2BpdYEWiifdnOBwse6K911RWSDibL3D5fmi43fe3YuAPEF77v6%2ByGObILy%2FlGdWwmybzNEsp0o1QXsd%2Fw8QV%2BHYcDAnEpeUlvg6ECGGmGAKgrInOTYmiNf1wjX8Pe4uRxe0QNvao%2FFaUiN4VJ3L4Ypu8nfK46vP%2FdGK7LdWt6JIT3mUN7NUm9y4L5ReLg6sFe2CA29Wzr2mL8OcbXkiR8oX7h5aErK%2ByrA6BgB2jFQax%2B7gqvQ1xepbEvnpepBd%2Fxv2IG20gOLiLzwlHrK%2BOciQBajbD72X0WZSObFfB9HGWehDYJN8h%2B0545oIy3jtm12qbtatheHN2P1oMRmk85n%2By%2B8vBzXXmYEWpGsdON2uGxTK01wYdhxAvCQ0AGpW1eLsyBdYnTyZ0MyGsXQqmTZoooz4pGGovV1G7337RThRFMsQR8Oy%2F1upNceBFR0UKiUw1uTbyQY6pgGfL6UZDN%2BCzcol9T4UVVPFh9%2Bxd0EOwTNtujVlHrj0UnIAx9B6Xm4%2BLkgJjL0IS0oFUK%2BFMPHjJBLqjXIDkag5lyiUBitxgdZu8z8u6W2PIg46wnSALxUekulEQHY95QeRn1MR8UovIdV%2Fkn0V21MM2EVU0urkUF74bPTAR%2BPJeaAQmzaH19gGF26tCbWimQHyh33UV731fyYapdljGTPi3%2FhQmD1B&X-Amz-Signature=cdb2a630fab0d8ca09437b2ea592dfa5883c7102bca53bea5d808ed23ce8f015&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQWCJAW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154908Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHT576zUeFovKMNo2gW%2F0M%2FAiDFrrf4nZianAYudduS4AiB5EJ3J7CcAPdDrafL5OmuLWla%2F6Ubvw19%2FWsOyaGjt6CqIBAip%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9CFLGbyqSBEy0dHOKtwD0lEYlzMNW5Z%2BhaGB%2FwoVnkFZg1EsNTwJMEmPk%2BBN07dhNQMrvKk1VhR1Q3c54hiNCPv32XSbQb%2Fm8T6Xf77Vb8qBpbMY8946wsxTrTHOiHLV7ZI%2FShqm8C8VO0W2H9MDPvwTWZr%2BBGRFZiH6%2F1SZD6gj%2FOuUBNQuJBChm96Cuk64CaUxshfu9qRH4D%2BpdYEWiifdnOBwse6K911RWSDibL3D5fmi43fe3YuAPEF77v6%2ByGObILy%2FlGdWwmybzNEsp0o1QXsd%2Fw8QV%2BHYcDAnEpeUlvg6ECGGmGAKgrInOTYmiNf1wjX8Pe4uRxe0QNvao%2FFaUiN4VJ3L4Ypu8nfK46vP%2FdGK7LdWt6JIT3mUN7NUm9y4L5ReLg6sFe2CA29Wzr2mL8OcbXkiR8oX7h5aErK%2ByrA6BgB2jFQax%2B7gqvQ1xepbEvnpepBd%2Fxv2IG20gOLiLzwlHrK%2BOciQBajbD72X0WZSObFfB9HGWehDYJN8h%2B0545oIy3jtm12qbtatheHN2P1oMRmk85n%2By%2B8vBzXXmYEWpGsdON2uGxTK01wYdhxAvCQ0AGpW1eLsyBdYnTyZ0MyGsXQqmTZoooz4pGGovV1G7337RThRFMsQR8Oy%2F1upNceBFR0UKiUw1uTbyQY6pgGfL6UZDN%2BCzcol9T4UVVPFh9%2Bxd0EOwTNtujVlHrj0UnIAx9B6Xm4%2BLkgJjL0IS0oFUK%2BFMPHjJBLqjXIDkag5lyiUBitxgdZu8z8u6W2PIg46wnSALxUekulEQHY95QeRn1MR8UovIdV%2Fkn0V21MM2EVU0urkUF74bPTAR%2BPJeaAQmzaH19gGF26tCbWimQHyh33UV731fyYapdljGTPi3%2FhQmD1B&X-Amz-Signature=507658eed1398d671f0ad4c2df566c7faef90504f3f44543921d79c798fde6c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
