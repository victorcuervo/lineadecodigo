---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TM4GX2F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCICCPPq4A%2Fms2LPF5ixfOHQXC3kDToPubMEB5rZDtchx6AiEA0KJIyCWRc2IIeAsfRqa8BREHlKYwWO8H4s471yzh7UIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIyBaSjgeLG5r16QeCrcAwV3Vzx0m3ZWNJR%2BI1xUSGr7kfsFQNKcOGrXe11Imz6NlpNKXrepeoEEmZyG0%2BFwYerw94X2RaDNMSfcFYTIUhhXtT2wpqvFk4y7ezrzkMcMYwiL%2FehsVJbAdcZhbsuycSH66rA97dV7GbFmaAx34BZlf%2BtuEb%2FPT1mITb0r%2BODvvhpTH68p1aDc0uWDy8yxbiIz0W2jxn%2F6yqQIQElOy7O5A7SWDr3DYdr6L%2BKE6XS93GfrPNu%2BH7dahkkXtmTDCfp60LbWiVWGfLJ4xjDRzEE245CLABOEcalQZdRQ2ycBX1%2FKwaAldv1dfgHKwJG3ZJh%2F3Hn72acswXShnfr2Sff5Lhjtz3QbV0S0kQpyei2iWJeJlfaThrU2CorEs%2BXI6fzk4CWOFfsyS5OZWGf2P2dfKms78lVSzhKAPYmfoNHSj1misRD90le75kN3yfJPbsI%2FDGdk5xcR0kCjw3n2SUfgmArrmu75dA%2BtD7w31Y66pFYqrFeHB5hl1ZXWAyKN5RHoktUNY0vGyVkFfcofDAolFcspcma3uD6pXTQqa7TP8QwXBZtGHlkahhT3zBy%2B2xrLl0C%2FbzKNkEMFnD6lTz%2FIQX%2Fsf77KQhq0HbqVdCC7WqSQXX0r12QNIfdMMI3cwskGOqUBwLg7DKKhBKBCTKiZDbXATxKEYXWyU%2Fuoui4v0TWdcqvPU90cS6XCRSkDPcXLf5pdxxLbyUAKxFmSX4KI0%2FIRMv97S59NVndNAr%2F4K21tMlSQJYrCVDWJAblrC7VZ9N7%2Fj4FsQERBa8vgslbyi2V9X9NeARh91UwgkIeB%2F02ZcXzP2OxNW%2F3Rehf08UAYWjH90LYAstzIoE8jI69Bzw8fmUjcoJYH&X-Amz-Signature=51f19552ec0eb84778001af39a3092053da41cf93ad074cd60a0f42c790d9dd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664TM4GX2F%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T220546Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCICCPPq4A%2Fms2LPF5ixfOHQXC3kDToPubMEB5rZDtchx6AiEA0KJIyCWRc2IIeAsfRqa8BREHlKYwWO8H4s471yzh7UIq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDIyBaSjgeLG5r16QeCrcAwV3Vzx0m3ZWNJR%2BI1xUSGr7kfsFQNKcOGrXe11Imz6NlpNKXrepeoEEmZyG0%2BFwYerw94X2RaDNMSfcFYTIUhhXtT2wpqvFk4y7ezrzkMcMYwiL%2FehsVJbAdcZhbsuycSH66rA97dV7GbFmaAx34BZlf%2BtuEb%2FPT1mITb0r%2BODvvhpTH68p1aDc0uWDy8yxbiIz0W2jxn%2F6yqQIQElOy7O5A7SWDr3DYdr6L%2BKE6XS93GfrPNu%2BH7dahkkXtmTDCfp60LbWiVWGfLJ4xjDRzEE245CLABOEcalQZdRQ2ycBX1%2FKwaAldv1dfgHKwJG3ZJh%2F3Hn72acswXShnfr2Sff5Lhjtz3QbV0S0kQpyei2iWJeJlfaThrU2CorEs%2BXI6fzk4CWOFfsyS5OZWGf2P2dfKms78lVSzhKAPYmfoNHSj1misRD90le75kN3yfJPbsI%2FDGdk5xcR0kCjw3n2SUfgmArrmu75dA%2BtD7w31Y66pFYqrFeHB5hl1ZXWAyKN5RHoktUNY0vGyVkFfcofDAolFcspcma3uD6pXTQqa7TP8QwXBZtGHlkahhT3zBy%2B2xrLl0C%2FbzKNkEMFnD6lTz%2FIQX%2Fsf77KQhq0HbqVdCC7WqSQXX0r12QNIfdMMI3cwskGOqUBwLg7DKKhBKBCTKiZDbXATxKEYXWyU%2Fuoui4v0TWdcqvPU90cS6XCRSkDPcXLf5pdxxLbyUAKxFmSX4KI0%2FIRMv97S59NVndNAr%2F4K21tMlSQJYrCVDWJAblrC7VZ9N7%2Fj4FsQERBa8vgslbyi2V9X9NeARh91UwgkIeB%2F02ZcXzP2OxNW%2F3Rehf08UAYWjH90LYAstzIoE8jI69Bzw8fmUjcoJYH&X-Amz-Signature=8bc1da8b7e2fd76fb6d11ee6ff4946ff6fd1b0ce47f6359dd44546e6530730d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
