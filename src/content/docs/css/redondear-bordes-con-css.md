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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2FWDYO2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGq0M3FH3R%2BG3q7v%2F7pwEYlt0KTAPnlq7d4LMUBhg3DKAiByxFiwtQq%2ByhAKg2YxP84Mq4i331zexk1X%2FCudgEsfXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlmRSOULvHSD9tczbKtwDTWcd5BW30Nq2YiDbczvIlQ41ejuZGg2z1TFIuco6dDkJ4rUOBHyHuIRensJ8ek5DFcVSk2GmiNqhSp9tInTLTHedPPsoE0okSXz%2F7HOYKKPCFlVs%2BVj0n2ahFMq8fhCZZno0rYw3g45f%2FvYHm85KWYu2C8r7V4NDEqIdS0wGJI3RzQ9BsApjskjWbpuE1FCHN1i0LsF%2BP%2BH01D1HEe0%2FxqG8qViMnyjDpqMTgUkLk2%2FBk%2BXfl7z9sW42Sc73zRCwIzxTaPtq1ceOjxb%2FD5ZQzhQJ91XP2vqushAyQLZPYlPmbkpKeuzX7xH7CWigaTr7jQeMW%2BUKRYWzg86M0nl%2FJeOpxYrFDfE0bezXFDBh5mC9ofxSFwR%2B8kntp0oAITrVE63D85yGncZDfJRw1xNEtr%2Bpd1QclyfSkCri7JInLS4xCrj8BKQKJzFK98GMd5Fr5bkTmySvUuJxeXQb7HXANx0qtBbQxnZnarcjdJnFsHClQ8DfbW3ym%2FjhY6KQ8xaEX292KV1zsYtVTngB%2Fz%2FYT4pDNBHhnstaZ6eDyM8%2FE2xeV%2BY1R7iVdbcRM9QldPgo%2BO%2FpUsLcPUnXFm%2FnNnRIw2CFatuspz8s%2Fz%2BaINWVSL5jWzyfF1yc61AJtVowge7ZyQY6pgE84z1o1OCLrl1b38jBsvrEFajxKVyMON4TrLPa6gDFGe8eulf2F0OD%2BrtrJXdKmvDEVXKPnxJB2EHLIGtoQmtHVdRstOBC72AHcu426ktnHz3CynBu3pU3Ktm6ULEpSXRfglh1bnCNKoMguBzKAY8MiYb2SU7TkYKFlcFgGL3Fw0zi90ar5cjSrCUHA%2Be98SbZfFOGUs7HiXhBsjwkChknqh4SULqJ&X-Amz-Signature=e8a6dc546f509ce7720bbc3df409d69a7b9374a1842418b6e1417593965d592e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T2FWDYO2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100142Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGq0M3FH3R%2BG3q7v%2F7pwEYlt0KTAPnlq7d4LMUBhg3DKAiByxFiwtQq%2ByhAKg2YxP84Mq4i331zexk1X%2FCudgEsfXCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMlmRSOULvHSD9tczbKtwDTWcd5BW30Nq2YiDbczvIlQ41ejuZGg2z1TFIuco6dDkJ4rUOBHyHuIRensJ8ek5DFcVSk2GmiNqhSp9tInTLTHedPPsoE0okSXz%2F7HOYKKPCFlVs%2BVj0n2ahFMq8fhCZZno0rYw3g45f%2FvYHm85KWYu2C8r7V4NDEqIdS0wGJI3RzQ9BsApjskjWbpuE1FCHN1i0LsF%2BP%2BH01D1HEe0%2FxqG8qViMnyjDpqMTgUkLk2%2FBk%2BXfl7z9sW42Sc73zRCwIzxTaPtq1ceOjxb%2FD5ZQzhQJ91XP2vqushAyQLZPYlPmbkpKeuzX7xH7CWigaTr7jQeMW%2BUKRYWzg86M0nl%2FJeOpxYrFDfE0bezXFDBh5mC9ofxSFwR%2B8kntp0oAITrVE63D85yGncZDfJRw1xNEtr%2Bpd1QclyfSkCri7JInLS4xCrj8BKQKJzFK98GMd5Fr5bkTmySvUuJxeXQb7HXANx0qtBbQxnZnarcjdJnFsHClQ8DfbW3ym%2FjhY6KQ8xaEX292KV1zsYtVTngB%2Fz%2FYT4pDNBHhnstaZ6eDyM8%2FE2xeV%2BY1R7iVdbcRM9QldPgo%2BO%2FpUsLcPUnXFm%2FnNnRIw2CFatuspz8s%2Fz%2BaINWVSL5jWzyfF1yc61AJtVowge7ZyQY6pgE84z1o1OCLrl1b38jBsvrEFajxKVyMON4TrLPa6gDFGe8eulf2F0OD%2BrtrJXdKmvDEVXKPnxJB2EHLIGtoQmtHVdRstOBC72AHcu426ktnHz3CynBu3pU3Ktm6ULEpSXRfglh1bnCNKoMguBzKAY8MiYb2SU7TkYKFlcFgGL3Fw0zi90ar5cjSrCUHA%2Be98SbZfFOGUs7HiXhBsjwkChknqh4SULqJ&X-Amz-Signature=05773d92c988602c61edfd92ddaee9dc91c31b7ac008f6495ed1603f5f26798e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
