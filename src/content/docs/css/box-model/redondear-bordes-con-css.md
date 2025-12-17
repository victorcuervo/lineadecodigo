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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR4YOFG7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIEhwCaKKqiGR5gp8gjnGXPFkoN%2FwqKj4TRYfeozV%2FLAIhAPRCzPJgO5Z0ijKV%2BbxuV2n5WN9UQY5Cd2H32Y2etZV4Kv8DCHgQABoMNjM3NDIzMTgzODA1IgzEW411ksmz%2Fudx2sAq3AMIbII7uYwfiuJmskWb%2BXLgtj9IJWFI63kbMcs3xuzUu7Fkzw%2BkGUlJupW5Y5GcOj%2BiW%2F1RHyXT9r9RDzCDNthBUmz%2FdUVEdK9TYVEwmxhqTtG4Jik0IAR2OIWdFkLyxeZUTQE5%2FpcSvvt5PoN397hXW6vtP%2B2cGvwUnoRAoun0HSxP76JPhgjQUMHxJ88%2BTNAd%2BCpXHewKOa0tXAHvpILtYMlsUnzL1uy2sN5nn9jM65ld9uP%2BjosiLg6WF%2BVGDnX%2BVMuFtRarnLl48XA30O9vRdNDWmUd4Kw%2B8HKdulNJpAkDw%2B%2Buqxv0U76AJPr%2BN5%2B2L9JznAjB7k3020eyQOWHV4nis7Jl%2BvkFbyPuJDu5obefnGzbH3wGie1WBrBQL4BF94xqVgnYyVdFYsocS8JqtaVA67Ld7JPS7ojmXwo0DyrdfwGivbP2vgEyuVESjtyZ5LQOkn2aCkIJJyYpixiPDLc370RCKWiMWm1tD%2Ba1Z5YaJfws5dUUr1Yu6w1Om5ffLoQpj2gNTBgRp7ffCkQ6j%2BnIn63oKahkRiw8Ylv%2BSDr3ldB69DO1m4dhOjvWU2TnHOLGUPXzmtTwX8w3q6m4YDFEElhvYtrnwWLouBOvHBtRNeiPo1AKBLBldzD1nYnKBjqkATbMPaX93VE4ynnqPMbOcrdTolkC0%2Fp7pphbCahY%2BLlu28j%2F1wRtS%2FJeUwS4s5mw9WgAsMGaActVoIgaOrrtydXvGXgJFCgj494sC0hYZAWFPaGod475ktmihatT8jHSHnaP%2BpAkMJqs9Q9spl3vye8okyFoUgBp1m%2BAY0JxuF9ZJsroqV03HW4rxKsfcpUDDomLm75r7%2FxGI4rkj92aCbsQE%2Fl8&X-Amz-Signature=697edbab423676a96454bd20ef81ee3eb4fc3551a807c4a9084e45cd9ed13cba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZR4YOFG7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCIEhwCaKKqiGR5gp8gjnGXPFkoN%2FwqKj4TRYfeozV%2FLAIhAPRCzPJgO5Z0ijKV%2BbxuV2n5WN9UQY5Cd2H32Y2etZV4Kv8DCHgQABoMNjM3NDIzMTgzODA1IgzEW411ksmz%2Fudx2sAq3AMIbII7uYwfiuJmskWb%2BXLgtj9IJWFI63kbMcs3xuzUu7Fkzw%2BkGUlJupW5Y5GcOj%2BiW%2F1RHyXT9r9RDzCDNthBUmz%2FdUVEdK9TYVEwmxhqTtG4Jik0IAR2OIWdFkLyxeZUTQE5%2FpcSvvt5PoN397hXW6vtP%2B2cGvwUnoRAoun0HSxP76JPhgjQUMHxJ88%2BTNAd%2BCpXHewKOa0tXAHvpILtYMlsUnzL1uy2sN5nn9jM65ld9uP%2BjosiLg6WF%2BVGDnX%2BVMuFtRarnLl48XA30O9vRdNDWmUd4Kw%2B8HKdulNJpAkDw%2B%2Buqxv0U76AJPr%2BN5%2B2L9JznAjB7k3020eyQOWHV4nis7Jl%2BvkFbyPuJDu5obefnGzbH3wGie1WBrBQL4BF94xqVgnYyVdFYsocS8JqtaVA67Ld7JPS7ojmXwo0DyrdfwGivbP2vgEyuVESjtyZ5LQOkn2aCkIJJyYpixiPDLc370RCKWiMWm1tD%2Ba1Z5YaJfws5dUUr1Yu6w1Om5ffLoQpj2gNTBgRp7ffCkQ6j%2BnIn63oKahkRiw8Ylv%2BSDr3ldB69DO1m4dhOjvWU2TnHOLGUPXzmtTwX8w3q6m4YDFEElhvYtrnwWLouBOvHBtRNeiPo1AKBLBldzD1nYnKBjqkATbMPaX93VE4ynnqPMbOcrdTolkC0%2Fp7pphbCahY%2BLlu28j%2F1wRtS%2FJeUwS4s5mw9WgAsMGaActVoIgaOrrtydXvGXgJFCgj494sC0hYZAWFPaGod475ktmihatT8jHSHnaP%2BpAkMJqs9Q9spl3vye8okyFoUgBp1m%2BAY0JxuF9ZJsroqV03HW4rxKsfcpUDDomLm75r7%2FxGI4rkj92aCbsQE%2Fl8&X-Amz-Signature=6e96f54c965e7dfa492d4015dbf24a465f067202dcc0f82e9d27456abfca5873&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
