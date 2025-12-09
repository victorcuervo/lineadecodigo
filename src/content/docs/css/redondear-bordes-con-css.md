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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4AKWYE4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNlmTgdYaV7bHiwNqSbYB3hg4yRO5DS1%2Fnxi%2FiTTgOFAIgfbewk1L7ZZy08l14Xuy3eR0BdNxDzBFcXny33aEb1iQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcu1dtst9dcZsWorCrcAzTyp9QofZH4LGACvqn2t3IJtqcBloBbhLex5oNxupGxmVaQZhI%2BSrLvUI7pI6XlvBgoge9QMmAVFR8%2BTha%2F0SwGmPfb63nJA6%2BmtSJYqTQuKeUuEMHIdUwWXFXOCgnSYsOBOwe4V%2F1dqDRarqnuxeAXghhUKjdQ75TwNCwafSIew40S5CJNnQOadfI%2FNRssOeuezSB10etDC5E9UWiZJch9p9Y6589LIAUlEXzUhuRDW3PmG8usGIPKq4y2RLCmkDjtArd5XdAUPd7CupRlm6sZieVUPftpLtojxf6NChe3WEpkIQkXMSy%2Bkg0IQ5VsIkvYswJX5J49DY1bSee%2BQWBJ5Nb3topmOJ0gb%2BcqaJNke4inQNfZvVS2F6N3v%2F1X57ttmA0%2FULyAVwjzkyMKJp8CX4tKmKaGxXejUJnep%2FFcGcIIbFiL0rkgdi7%2B1yU3gepfLNkL%2BNBECBrAUame1f80LpnXBoiPFoANrEbvZJjJOmSMhY6qRSWDXFbR8gX9yz96z7SFsrGB1yKOfo%2BzbWyg2mSYsZPiMixcwuUPUbNo0VAXpQwIR%2FgDSrasxQhtj1BdQN53o2gacn6jwP4D01o1DK2L49vwbxYNDdl%2FWGljCiXlUcbfeX9OVYqiMI2O3skGOqUBicKYpqqlA%2FcbGXgak5jN5cL7gQ9x7CWJlheeqWfPSMYzzFLWXIt8U73SFQCd0iCRp95ON%2BR6N7jcqag%2BPKbVDpugMJ7JeYWgvvtUfX36z72F3gpkZLDxWfwT4B6hALPL9VtpIe2D2uPbH%2BvsCWoXihW5Xo%2BSne3A8kHOgiYR6Uo6FYZD5EAjfLHftrqCiaTfOcO9uE7uCrz6QAC0WVRjaRQJv4wS&X-Amz-Signature=d0328f2c1b1ba39682b3ebc6cb1e3586e73db9f35ff6c47451781512087afbc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X4AKWYE4%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024132Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCNlmTgdYaV7bHiwNqSbYB3hg4yRO5DS1%2Fnxi%2FiTTgOFAIgfbewk1L7ZZy08l14Xuy3eR0BdNxDzBFcXny33aEb1iQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJcu1dtst9dcZsWorCrcAzTyp9QofZH4LGACvqn2t3IJtqcBloBbhLex5oNxupGxmVaQZhI%2BSrLvUI7pI6XlvBgoge9QMmAVFR8%2BTha%2F0SwGmPfb63nJA6%2BmtSJYqTQuKeUuEMHIdUwWXFXOCgnSYsOBOwe4V%2F1dqDRarqnuxeAXghhUKjdQ75TwNCwafSIew40S5CJNnQOadfI%2FNRssOeuezSB10etDC5E9UWiZJch9p9Y6589LIAUlEXzUhuRDW3PmG8usGIPKq4y2RLCmkDjtArd5XdAUPd7CupRlm6sZieVUPftpLtojxf6NChe3WEpkIQkXMSy%2Bkg0IQ5VsIkvYswJX5J49DY1bSee%2BQWBJ5Nb3topmOJ0gb%2BcqaJNke4inQNfZvVS2F6N3v%2F1X57ttmA0%2FULyAVwjzkyMKJp8CX4tKmKaGxXejUJnep%2FFcGcIIbFiL0rkgdi7%2B1yU3gepfLNkL%2BNBECBrAUame1f80LpnXBoiPFoANrEbvZJjJOmSMhY6qRSWDXFbR8gX9yz96z7SFsrGB1yKOfo%2BzbWyg2mSYsZPiMixcwuUPUbNo0VAXpQwIR%2FgDSrasxQhtj1BdQN53o2gacn6jwP4D01o1DK2L49vwbxYNDdl%2FWGljCiXlUcbfeX9OVYqiMI2O3skGOqUBicKYpqqlA%2FcbGXgak5jN5cL7gQ9x7CWJlheeqWfPSMYzzFLWXIt8U73SFQCd0iCRp95ON%2BR6N7jcqag%2BPKbVDpugMJ7JeYWgvvtUfX36z72F3gpkZLDxWfwT4B6hALPL9VtpIe2D2uPbH%2BvsCWoXihW5Xo%2BSne3A8kHOgiYR6Uo6FYZD5EAjfLHftrqCiaTfOcO9uE7uCrz6QAC0WVRjaRQJv4wS&X-Amz-Signature=237829a32181ba86097f42c05553b99d8b685b4a37adff11df84e25e8c0b0ff1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
