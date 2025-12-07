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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMTBCRQE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDun7x7XOzMGp62QGr4nqdgRijlvpmxmZWbRNPZ4xaMVgIgZwYAYbX3ZreeKFv%2Fm6UyPfbxCueOLVMeG%2BRoW2Fh4%2BAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjtALt48NolKY%2FqcircA%2B1Z8kcN%2BBbYCDbBjZyKRf%2BAeHDGl76WXZP9FEp9NrsF6U2gDV72hJBCOF3pzBJGy0SJN4E%2BtpdiXfCHah0SkC%2F1yrfYt%2FeoeTJYAV%2BTSA0r5broYP5tY3lW4tdvMLqw%2FYt6YgLkuDkXZWFtap5m%2F7XkhKj9%2BW7ZKb15Av5z8dFmhoFMD%2BIEtc59iACjMr2RRzSRhKMIuj6wTz6BrPHxw%2FoAgnP9qsqGYd6VNhfxfQ6w%2BYspiaYr5fE3r%2FbSxzOx2ThFUQoeKMhbRAaysJDnsHpfpSkitT3I0PwgnzydTIO4p2bUPQLujH70n1eu8JKz8qcjPWzNVTClwH5ry9di9Yn%2FmOWz28qSHl5pCHiwY5jGH%2BUzg6TO%2FhgiiFstFG0MnCosOgML4Culcbg%2Btng0lGco%2FPJADqKGVb1C6nhTUPuDTxXMKOeCkdpJ8xdUG90ikbctpCg1EHtqvpNUI%2Fpc%2BMx0coNK0FN6TgUuEU6oL3ZpOx8fektY%2F1JQIWrqbUz3zg2qUlib4VZJubgrFHyIyehyHt2OMUUR5YRLfLJTpLtsG5NDcndJx9m%2F6SSq0Ln8XlOQxY3L6Z87X%2BZjBpDYH4ytHy5BAbezUlQvpXIF4CNkKzqt2YeaM66rxN2fMMqa1ckGOqUBtqOpm933qOlSsv1KB%2B%2BCxLLf9j1XSIPT4GTEvDXjGfEYbNElCFSwunBhHAyWFClH71lhghmE3C8mU88VsJLCciv8dN82SUHOx37A0uFhtDrvuS1ebpAYZVkEv%2FFRbpy9RhqcB909pEHPHYgQYnNaJJrAPHkC64vi49NaV%2BoupmOr6ALM5MZ4VXRSUDSVxKsLYq4jvjLwpCPcIswgRPx%2BmxQdMNzY&X-Amz-Signature=47e1068b500eb89ac55cd3c563b509f6cc6531adbe5ae4785586ece6ae827e09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMTBCRQE%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T115033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDun7x7XOzMGp62QGr4nqdgRijlvpmxmZWbRNPZ4xaMVgIgZwYAYbX3ZreeKFv%2Fm6UyPfbxCueOLVMeG%2BRoW2Fh4%2BAqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGjtALt48NolKY%2FqcircA%2B1Z8kcN%2BBbYCDbBjZyKRf%2BAeHDGl76WXZP9FEp9NrsF6U2gDV72hJBCOF3pzBJGy0SJN4E%2BtpdiXfCHah0SkC%2F1yrfYt%2FeoeTJYAV%2BTSA0r5broYP5tY3lW4tdvMLqw%2FYt6YgLkuDkXZWFtap5m%2F7XkhKj9%2BW7ZKb15Av5z8dFmhoFMD%2BIEtc59iACjMr2RRzSRhKMIuj6wTz6BrPHxw%2FoAgnP9qsqGYd6VNhfxfQ6w%2BYspiaYr5fE3r%2FbSxzOx2ThFUQoeKMhbRAaysJDnsHpfpSkitT3I0PwgnzydTIO4p2bUPQLujH70n1eu8JKz8qcjPWzNVTClwH5ry9di9Yn%2FmOWz28qSHl5pCHiwY5jGH%2BUzg6TO%2FhgiiFstFG0MnCosOgML4Culcbg%2Btng0lGco%2FPJADqKGVb1C6nhTUPuDTxXMKOeCkdpJ8xdUG90ikbctpCg1EHtqvpNUI%2Fpc%2BMx0coNK0FN6TgUuEU6oL3ZpOx8fektY%2F1JQIWrqbUz3zg2qUlib4VZJubgrFHyIyehyHt2OMUUR5YRLfLJTpLtsG5NDcndJx9m%2F6SSq0Ln8XlOQxY3L6Z87X%2BZjBpDYH4ytHy5BAbezUlQvpXIF4CNkKzqt2YeaM66rxN2fMMqa1ckGOqUBtqOpm933qOlSsv1KB%2B%2BCxLLf9j1XSIPT4GTEvDXjGfEYbNElCFSwunBhHAyWFClH71lhghmE3C8mU88VsJLCciv8dN82SUHOx37A0uFhtDrvuS1ebpAYZVkEv%2FFRbpy9RhqcB909pEHPHYgQYnNaJJrAPHkC64vi49NaV%2BoupmOr6ALM5MZ4VXRSUDSVxKsLYq4jvjLwpCPcIswgRPx%2BmxQdMNzY&X-Amz-Signature=75e944c5f35d8c0cd05b4ca8afe087445ed18f1e95fbea9b2df4f5885aa14f95&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
