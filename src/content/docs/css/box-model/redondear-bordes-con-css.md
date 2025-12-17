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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB72PPS2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF2ycWerRWp%2BzfRoO51677ZzBbq%2F9TXxv0ADYRC7AybAiEAsf0Et%2Fxi%2B5Lrcr%2BqYHG%2BtgpQHZCLLWz49xAaPnLh4Ycq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIjpu8utZFKy6LS6SCrcA03wWwZRuXuSeUz49qub1lQcSpelZfG%2Fa%2FcFYwpvZzNieL6UDxW7f6GYsmliIIf76MSkojBYsNxjojgJg%2F1mshnFyCngt0kp6ajUjYL1VlUSiqCEuELm9an4ZCAjQQRogMzZ7lohnKIxhFRMpXAW08UpcCRwK8wRGoaU0f2GCW7XHoP8Xs%2FipZiaNN49L9uGr%2FbSS65Yn4HRxMRvSQKlf0mawkBf1ZuTRtUtObXtDlqMDnh3I9XBYUCE520iuFs6O1fpnAM4t63Zg%2BGtBHMcXhayLGvAH1al2%2BYgCxMaIsmqOjxD5FkK1gciRwvuNZcPTZ6vBIMrAOSDps5S0eviRNHmp%2FltfFSqTjePOKla%2B4OkofEHEhxX806Og1jRjiq1nrII47FXvB9sr2Ohu%2FGxg9cCCjSRTfiuG2uUmrH1UMUN3cLzeEkI5%2Bui8E27ERj%2BdEt8fUpIubp89Pgxq5xjTK%2B9%2BSSCYlu%2Bz3VyNLPFZfYcmuTyTToGZVl%2Bv5btqbbtztveII05iPqjHyZLOLNG6SnuADuoP295fkB450hCCcRjqkjX3iz3dOOChQf1WSS5lf5%2Fpw%2BPubKYhcYwsKFeMlCTGVZUXyGfTvsUhJc43%2Fhzk0LKt3hvWOv7%2Bi9uMJPxicoGOqUBtJMKw0Q5W0LcKw0W7kd8IN21u8KzoLZ%2BeT%2Fass7ZFNlexF06kuy6CMCand8uIjsWtxkIYgnfs6X0XphBHczq6F9wr8nMlls0nwoWIEHicTj9958Ca6JJc8yLGM6lT6It8YzYRvdOPFp8VW9BYnQP8P2WRAoffB7CJS5XHofDTSIVhmfoBKx3c02xjbwSS4dPaMWGLIVNOqdxjfITKZ03CI9Iy40I&X-Amz-Signature=a73bdbaccc493501bf9bf655ac227a4c39bb65703f73056b1e8b630df62a0ed5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WB72PPS2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T102733Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDF2ycWerRWp%2BzfRoO51677ZzBbq%2F9TXxv0ADYRC7AybAiEAsf0Et%2Fxi%2B5Lrcr%2BqYHG%2BtgpQHZCLLWz49xAaPnLh4Ycq%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDIjpu8utZFKy6LS6SCrcA03wWwZRuXuSeUz49qub1lQcSpelZfG%2Fa%2FcFYwpvZzNieL6UDxW7f6GYsmliIIf76MSkojBYsNxjojgJg%2F1mshnFyCngt0kp6ajUjYL1VlUSiqCEuELm9an4ZCAjQQRogMzZ7lohnKIxhFRMpXAW08UpcCRwK8wRGoaU0f2GCW7XHoP8Xs%2FipZiaNN49L9uGr%2FbSS65Yn4HRxMRvSQKlf0mawkBf1ZuTRtUtObXtDlqMDnh3I9XBYUCE520iuFs6O1fpnAM4t63Zg%2BGtBHMcXhayLGvAH1al2%2BYgCxMaIsmqOjxD5FkK1gciRwvuNZcPTZ6vBIMrAOSDps5S0eviRNHmp%2FltfFSqTjePOKla%2B4OkofEHEhxX806Og1jRjiq1nrII47FXvB9sr2Ohu%2FGxg9cCCjSRTfiuG2uUmrH1UMUN3cLzeEkI5%2Bui8E27ERj%2BdEt8fUpIubp89Pgxq5xjTK%2B9%2BSSCYlu%2Bz3VyNLPFZfYcmuTyTToGZVl%2Bv5btqbbtztveII05iPqjHyZLOLNG6SnuADuoP295fkB450hCCcRjqkjX3iz3dOOChQf1WSS5lf5%2Fpw%2BPubKYhcYwsKFeMlCTGVZUXyGfTvsUhJc43%2Fhzk0LKt3hvWOv7%2Bi9uMJPxicoGOqUBtJMKw0Q5W0LcKw0W7kd8IN21u8KzoLZ%2BeT%2Fass7ZFNlexF06kuy6CMCand8uIjsWtxkIYgnfs6X0XphBHczq6F9wr8nMlls0nwoWIEHicTj9958Ca6JJc8yLGM6lT6It8YzYRvdOPFp8VW9BYnQP8P2WRAoffB7CJS5XHofDTSIVhmfoBKx3c02xjbwSS4dPaMWGLIVNOqdxjfITKZ03CI9Iy40I&X-Amz-Signature=4436000003c4b18dfd73d3a5930d95a36697d69d9669e7e30d2dffd777f6a53b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
