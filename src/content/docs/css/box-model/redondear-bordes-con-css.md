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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3BKMXRZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzae9tx%2FaR27EuC1E9Hr012jB3s%2BaxopO%2F%2Fl1%2F7zm2fAiEA2kpe3mnRzletmHgKn0utgw%2BudvwDCn6xe2g1VvhlVhIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIzKpe2T5kLzMPb7fCrcA3UHKor63C3MFHNm89Sc%2F5Y5mlvVjjBQplqc9juogfYoeOAYrVvvg3S8t0eAh%2B%2F38HqYRcRXWks4kSeSjuFe9ViTah6cTiLdSXz6CKszxlcKTx0ij9beRAg2tpiunM0WX0UW9HWhGXjU7mfQ6pjzOmfYAGUqile4gjbzP3a1OnWzjis8rP2nbX6yNKZyddqJHNAVLdyTbg42i26XZph8OA%2Fwp1DSxX1tqKun123i5fzN2IZnBERRIgFM2qea%2BRg1TjfBwniUa9YgWHFSWPDnBsdFgsWEN3fNK%2BbLi%2F1SmxEo7MV4KIE6zPKAMA7w2Pb8qtnvGZNPRLJSRNt1eG5mpjjreBgkoqPSM0t43X%2BgOXYt7FaBuz843nZ1iLE5EZAwHuv0iW11yfq%2BN2XT%2BwwiMKBLGlvfE5aX%2BuiBz6adpPi143Hsp2AvvY7JTUjulyoq1%2BGWiAUyH524MQ6gjNm%2FNbxrAwGZMi7d2Q5B6QVWYhV65s9RHZKD8MWjDaXS8xMruQEuZtraAxnzYh0v3kp5gk3ZQpOaJOi18u4pDxsODTG0PDRrUg0bCf%2Bx91qNGOkqXad3L05ukMOrb3fAQGSRoHJ04f0a8tO1IIXz0J%2FXsfhruosdh247M2pCbQnnMNn7h8oGOqUBKlqJluRqyDs12cSi2OeMJSAz2X3xYOVCJqZfjPhMxXfXuq8jUC7g1S8mn8q5fHWS82YKlnDV%2FIhwY0KEi9tVOAajD2%2F3r4bs%2FaRUIl7uBCu%2Fzs5duIM86P1xWQVv7e3TSHmi2Kgk8Q5IEe4Xs2%2FfJXAG%2BEHt9pJ3bKlxzWY69uSm606JOy74iEqYXku4BX1feiloqG4MxdlTtnQ2%2F9oqqwfhDBxo&X-Amz-Signature=5fc0c940aa6289524e10e698003edddf1b95a30827b9e0cfe13a1a66a5c7b83d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R3BKMXRZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T013036Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICzae9tx%2FaR27EuC1E9Hr012jB3s%2BaxopO%2F%2Fl1%2F7zm2fAiEA2kpe3mnRzletmHgKn0utgw%2BudvwDCn6xe2g1VvhlVhIq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDIzKpe2T5kLzMPb7fCrcA3UHKor63C3MFHNm89Sc%2F5Y5mlvVjjBQplqc9juogfYoeOAYrVvvg3S8t0eAh%2B%2F38HqYRcRXWks4kSeSjuFe9ViTah6cTiLdSXz6CKszxlcKTx0ij9beRAg2tpiunM0WX0UW9HWhGXjU7mfQ6pjzOmfYAGUqile4gjbzP3a1OnWzjis8rP2nbX6yNKZyddqJHNAVLdyTbg42i26XZph8OA%2Fwp1DSxX1tqKun123i5fzN2IZnBERRIgFM2qea%2BRg1TjfBwniUa9YgWHFSWPDnBsdFgsWEN3fNK%2BbLi%2F1SmxEo7MV4KIE6zPKAMA7w2Pb8qtnvGZNPRLJSRNt1eG5mpjjreBgkoqPSM0t43X%2BgOXYt7FaBuz843nZ1iLE5EZAwHuv0iW11yfq%2BN2XT%2BwwiMKBLGlvfE5aX%2BuiBz6adpPi143Hsp2AvvY7JTUjulyoq1%2BGWiAUyH524MQ6gjNm%2FNbxrAwGZMi7d2Q5B6QVWYhV65s9RHZKD8MWjDaXS8xMruQEuZtraAxnzYh0v3kp5gk3ZQpOaJOi18u4pDxsODTG0PDRrUg0bCf%2Bx91qNGOkqXad3L05ukMOrb3fAQGSRoHJ04f0a8tO1IIXz0J%2FXsfhruosdh247M2pCbQnnMNn7h8oGOqUBKlqJluRqyDs12cSi2OeMJSAz2X3xYOVCJqZfjPhMxXfXuq8jUC7g1S8mn8q5fHWS82YKlnDV%2FIhwY0KEi9tVOAajD2%2F3r4bs%2FaRUIl7uBCu%2Fzs5duIM86P1xWQVv7e3TSHmi2Kgk8Q5IEe4Xs2%2FfJXAG%2BEHt9pJ3bKlxzWY69uSm606JOy74iEqYXku4BX1feiloqG4MxdlTtnQ2%2F9oqqwfhDBxo&X-Amz-Signature=0244f0e7f8d2fe4ee5e2d007ddb919c872406c032f3ff8c19db37153ebc7a3ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
