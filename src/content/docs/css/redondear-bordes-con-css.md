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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKAQB4JB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfAY5j%2B2QuW54KW35log3%2BAonVJMVcT6B8yN9%2BFrrKlwIhANCOTWqw1ObdrcwncXNR3%2FaGUc64t8wyzAkWRTe4nAL4Kv8DCHQQABoMNjM3NDIzMTgzODA1IgxeDn4DKXAOCTnZ5Mkq3AOfghJ95RDsuy7yAssp3Zwbpsh9CoDbqOLCttWg30Rgrinzg8v%2BjVXvsoG1voaWM%2F6dVOImY7ePKMduAf8%2BRH%2FnCIA7k%2FFUl82cYE9XM0n51h0EI8eA%2FILCTJkSc2rhAVBefCWbinwU2U3Rmr8rMkNKQDQ%2BEECKBKosgqLSkLsf%2FYBYXoceP%2FSLko4t%2F%2BpTGr8y9N6fE5Xc48JZS5Tj3Qx7Me9ild3TqDxUsH%2F9bb9YnJZe1zsVzmUoQc6wEQ9eHVhXivVzfb8LcgbDP583RsMHFtZIDQNcbmuqE%2FsVQbMQChsY5j0ZJMObCpUxm9jdTaeECT8NjNpDitYidWbvImwX0JogvGc%2FfJLFc3ROHSbZZdEM8XWAWEXlF1prbpoGC8ntRgCt3elJ5MkPL%2FeeXhN%2F3WyBY2DCJOdVZn1NTh%2BPb6clzzHaqQBRAm4JwK4MefhhMNpO1Pay5dsrz%2BMSKcXju3VlPi2u8Gc2xN7IopNCdcvf%2F7rAcO9vdp1U%2ByYPTKMEcVqWuzlqxMUZ13PqToTX0tIOWtgCq5GCm97tbUt8%2FXBSa%2BFbPmktZ8nPwiGDs2Evoyq7KOFeFZXK4pPpqzExtXfUeX8myuZHd4pkD2pUFngns%2FOsZQOE2YkwaDC4itDJBjqkAcjGtsQOmSnNNh19cI7YbKoveTJSOMUyulQsDhm5Xnbwbzzy9mN5aAFgLZUL511AE61F%2FwrM9jO%2BNgSD9ZvaL75rxnbmVUfnVgjlvPe63BNl18BfzICJnX6%2F1xhnEVctxb9oQiNQQiXBaCEiWUeoipqz%2FSUGuiO2T3Jf87GiUY31ge%2FEhW%2F%2BnR6RNIZZH9uUEB8rIqVQjX%2Fx1qqPrBAehet7sr%2Fm&X-Amz-Signature=b0707d169afc7d608eedf7ebbd6f652dee091fa92fb3437a7983e565db8d8a04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKAQB4JB%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104752Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfAY5j%2B2QuW54KW35log3%2BAonVJMVcT6B8yN9%2BFrrKlwIhANCOTWqw1ObdrcwncXNR3%2FaGUc64t8wyzAkWRTe4nAL4Kv8DCHQQABoMNjM3NDIzMTgzODA1IgxeDn4DKXAOCTnZ5Mkq3AOfghJ95RDsuy7yAssp3Zwbpsh9CoDbqOLCttWg30Rgrinzg8v%2BjVXvsoG1voaWM%2F6dVOImY7ePKMduAf8%2BRH%2FnCIA7k%2FFUl82cYE9XM0n51h0EI8eA%2FILCTJkSc2rhAVBefCWbinwU2U3Rmr8rMkNKQDQ%2BEECKBKosgqLSkLsf%2FYBYXoceP%2FSLko4t%2F%2BpTGr8y9N6fE5Xc48JZS5Tj3Qx7Me9ild3TqDxUsH%2F9bb9YnJZe1zsVzmUoQc6wEQ9eHVhXivVzfb8LcgbDP583RsMHFtZIDQNcbmuqE%2FsVQbMQChsY5j0ZJMObCpUxm9jdTaeECT8NjNpDitYidWbvImwX0JogvGc%2FfJLFc3ROHSbZZdEM8XWAWEXlF1prbpoGC8ntRgCt3elJ5MkPL%2FeeXhN%2F3WyBY2DCJOdVZn1NTh%2BPb6clzzHaqQBRAm4JwK4MefhhMNpO1Pay5dsrz%2BMSKcXju3VlPi2u8Gc2xN7IopNCdcvf%2F7rAcO9vdp1U%2ByYPTKMEcVqWuzlqxMUZ13PqToTX0tIOWtgCq5GCm97tbUt8%2FXBSa%2BFbPmktZ8nPwiGDs2Evoyq7KOFeFZXK4pPpqzExtXfUeX8myuZHd4pkD2pUFngns%2FOsZQOE2YkwaDC4itDJBjqkAcjGtsQOmSnNNh19cI7YbKoveTJSOMUyulQsDhm5Xnbwbzzy9mN5aAFgLZUL511AE61F%2FwrM9jO%2BNgSD9ZvaL75rxnbmVUfnVgjlvPe63BNl18BfzICJnX6%2F1xhnEVctxb9oQiNQQiXBaCEiWUeoipqz%2FSUGuiO2T3Jf87GiUY31ge%2FEhW%2F%2BnR6RNIZZH9uUEB8rIqVQjX%2Fx1qqPrBAehet7sr%2Fm&X-Amz-Signature=7283004754c995cd619bfb56e78cb0994c2e575eafb4e593cf12fa23a7c713a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
