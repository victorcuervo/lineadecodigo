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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBSJTAK6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy3ggVWyt4Uy3S04KyXjVYt2W%2B8%2BMMik6ck6Lf3xgBawIgaqEOlmzgarpXZIg7pMRhdpoDr6L9s%2BYorcBrRDoFoRwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWdfOkTQJsMyiOsSCrcA9Wngj04lQEBP1IA3QjWlZ7B7aH58Xhr0pF%2FZutrvZI%2FAtpMR0xyxrhRoBj%2BpT%2B%2F%2Bymy28CcS2HcDUzTr0fprDktz3L3otUpPNlyz6JVWR%2BMTzglctB4jpSLYIjRJLA4oyTNIW6pj4tb%2BhHQthcb2Xw9mXVdY3b1l%2F0NMegwznlB1ZcGjg%2BPrFwD74Mbt7BIYHSzrsnHPuVY7vX0SYe%2Fidjga9SSVod9elcU0R3yh0cxI9nXxlhQ29IaR2PwHZWVHUrARtVGSId%2B3UxyoqyAlEFeTKlpBAsWYjfjWzxIqjq9LX2lXiX4Eu4OXIwC0EVJeTgNFXFgni6YlHm%2B7BXxuo6mTbvqikRXHpoByMmFq0ZCXzoTOUopEL%2BRWNCuvZSakzRqLPlZD8FcXc%2BKuudSQRaDy0co0VYNiqApzIgn3ltnfXp%2BcPW0Ii%2Fc%2FGeI%2FIk15uUQfNwYpxUSx1Me19iwXLyMnb0t2iYPTah6rKrbEImnpdd%2BKllZEDkIsB8YbjP9%2BifIGlqiXnQzwGTMGSoi8k3P%2FNtVHLzmAEtEskJdw9xnfVWWDXhmo8wmc4a6609XXgwvAtHOxdQyDBvxjYx160fahEPyb11IPJvRovq79%2FYn%2Bdi0cu719j34jTU5MLCH38kGOqUBfUHwksrrzDtPzkjWIXH5eNT4sJrQkomm2wyoXuvoRhlsLmmLD4VXher0WpqTmL5YOql%2F3wvOI10zlPo0EMoUqlzexhttJS94hvJQdQZJZIMuoo6lMe666wbdHJPH2BoPAsPesOyxI25qhXnPcIbrWOJ%2F7aPhlrpSOUpiy92ZObv2nn0eYjIQhVuyfZKSG%2BS2cIXfowl9OCaqnRzeppdu5He89uzx&X-Amz-Signature=ff353d6d75237f48e726b136717686dd6ae49ac966636dc5176d8b8988185a77&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBSJTAK6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T070547Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy3ggVWyt4Uy3S04KyXjVYt2W%2B8%2BMMik6ck6Lf3xgBawIgaqEOlmzgarpXZIg7pMRhdpoDr6L9s%2BYorcBrRDoFoRwqiAQIuP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWdfOkTQJsMyiOsSCrcA9Wngj04lQEBP1IA3QjWlZ7B7aH58Xhr0pF%2FZutrvZI%2FAtpMR0xyxrhRoBj%2BpT%2B%2F%2Bymy28CcS2HcDUzTr0fprDktz3L3otUpPNlyz6JVWR%2BMTzglctB4jpSLYIjRJLA4oyTNIW6pj4tb%2BhHQthcb2Xw9mXVdY3b1l%2F0NMegwznlB1ZcGjg%2BPrFwD74Mbt7BIYHSzrsnHPuVY7vX0SYe%2Fidjga9SSVod9elcU0R3yh0cxI9nXxlhQ29IaR2PwHZWVHUrARtVGSId%2B3UxyoqyAlEFeTKlpBAsWYjfjWzxIqjq9LX2lXiX4Eu4OXIwC0EVJeTgNFXFgni6YlHm%2B7BXxuo6mTbvqikRXHpoByMmFq0ZCXzoTOUopEL%2BRWNCuvZSakzRqLPlZD8FcXc%2BKuudSQRaDy0co0VYNiqApzIgn3ltnfXp%2BcPW0Ii%2Fc%2FGeI%2FIk15uUQfNwYpxUSx1Me19iwXLyMnb0t2iYPTah6rKrbEImnpdd%2BKllZEDkIsB8YbjP9%2BifIGlqiXnQzwGTMGSoi8k3P%2FNtVHLzmAEtEskJdw9xnfVWWDXhmo8wmc4a6609XXgwvAtHOxdQyDBvxjYx160fahEPyb11IPJvRovq79%2FYn%2Bdi0cu719j34jTU5MLCH38kGOqUBfUHwksrrzDtPzkjWIXH5eNT4sJrQkomm2wyoXuvoRhlsLmmLD4VXher0WpqTmL5YOql%2F3wvOI10zlPo0EMoUqlzexhttJS94hvJQdQZJZIMuoo6lMe666wbdHJPH2BoPAsPesOyxI25qhXnPcIbrWOJ%2F7aPhlrpSOUpiy92ZObv2nn0eYjIQhVuyfZKSG%2BS2cIXfowl9OCaqnRzeppdu5He89uzx&X-Amz-Signature=362b2bc56df2865a3095f43eef509a54ee760873d2a3c17b1e58170aeede7720&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
