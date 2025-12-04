---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ3FXCR6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDCu5oWQ719uQfxqsxaf4%2B%2BlhHG9V%2BgaWlfFnPZT%2BQkUwIhAJ2CvqIqj71VJdis5zgE59SkGABUP39xLLaroYxoRH25Kv8DCDwQABoMNjM3NDIzMTgzODA1IgyCbVUsNSRRji%2FsEusq3AMQaZpnxxLglCLb81t9ku%2F9e5OuREaCP30rVayH2rK1FyBKfAD81OlWURkruRReBgveygOpxdVRI5Q%2BhgUNjEanndbSng2Cy45vuf2%2FWxV0OFGNi%2Fen1tcCMFEya5k9tAZFmZUitT8re%2FCUuGOU44srS5fD9mSwnMf0RVYZRMViMHPl49x%2BHPg3UFKYA03cNsAqBmLassG9jgUmHFKfsCwT3HxLks30ehhFaf8lRdT4urv2lmE99wNiCHyVB53DZJ8sTsbSfrJWgqrRJ3exEg0INYBj7Cq5wKv0zwlnceqeKm863HRR2eu2Evx8gVIT0qh6FCOR2ysszXzedq%2BID6vAzywSqEmmqtRvIWj6PmRSguvhxOjllhtV1FbEHq0Mbm58jUB74CskTxCBjyAMnHj238Ld7T45PqIVZokKzuw%2BlsIFPdXDSK5xVI%2FcQDsjMJ5IaqiJAnsKr6XXhEgMYgavHdzLFdDb%2F90FgrBPtTQIqjHSXqEGazPwxr7poX41i1AOg6JSnp1zybsdseF7EP24ecq1odx9LlgzogSlETGOZgibQ1zzU0sjScz%2B4nmK8eyLDqHdxXaOfVx3D2bhRvRSwAVoUlpHipHUW50UBZovBNLOunJ5LoznYQ1VejCO88PJBjqkAVvvmkl1sAcdMoBWliGUUwH8keICDwq2ItWf%2FUDrnTAO8XgKt35tsPArdT9U3XmV6EgyGf2FslvN4stEdKY%2FSasmPdXeei7faKbrib3es%2FGWGkEdr4P4j8Q397rkdVK2DZoDIDr1DZBHb3nCkdV%2BOnj3VMxeEIazRzkkG9DDoLwEG2RyLlRL92j%2BfpKy%2BOyKjstbTLw6qJJPnzah5Y78fIkRYK4z&X-Amz-Signature=178181dc795df28b7872126d67ac5dd1f38b537a3c42651e0aa4a2fb1ddf6193&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQ3FXCR6%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T034048Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDCu5oWQ719uQfxqsxaf4%2B%2BlhHG9V%2BgaWlfFnPZT%2BQkUwIhAJ2CvqIqj71VJdis5zgE59SkGABUP39xLLaroYxoRH25Kv8DCDwQABoMNjM3NDIzMTgzODA1IgyCbVUsNSRRji%2FsEusq3AMQaZpnxxLglCLb81t9ku%2F9e5OuREaCP30rVayH2rK1FyBKfAD81OlWURkruRReBgveygOpxdVRI5Q%2BhgUNjEanndbSng2Cy45vuf2%2FWxV0OFGNi%2Fen1tcCMFEya5k9tAZFmZUitT8re%2FCUuGOU44srS5fD9mSwnMf0RVYZRMViMHPl49x%2BHPg3UFKYA03cNsAqBmLassG9jgUmHFKfsCwT3HxLks30ehhFaf8lRdT4urv2lmE99wNiCHyVB53DZJ8sTsbSfrJWgqrRJ3exEg0INYBj7Cq5wKv0zwlnceqeKm863HRR2eu2Evx8gVIT0qh6FCOR2ysszXzedq%2BID6vAzywSqEmmqtRvIWj6PmRSguvhxOjllhtV1FbEHq0Mbm58jUB74CskTxCBjyAMnHj238Ld7T45PqIVZokKzuw%2BlsIFPdXDSK5xVI%2FcQDsjMJ5IaqiJAnsKr6XXhEgMYgavHdzLFdDb%2F90FgrBPtTQIqjHSXqEGazPwxr7poX41i1AOg6JSnp1zybsdseF7EP24ecq1odx9LlgzogSlETGOZgibQ1zzU0sjScz%2B4nmK8eyLDqHdxXaOfVx3D2bhRvRSwAVoUlpHipHUW50UBZovBNLOunJ5LoznYQ1VejCO88PJBjqkAVvvmkl1sAcdMoBWliGUUwH8keICDwq2ItWf%2FUDrnTAO8XgKt35tsPArdT9U3XmV6EgyGf2FslvN4stEdKY%2FSasmPdXeei7faKbrib3es%2FGWGkEdr4P4j8Q397rkdVK2DZoDIDr1DZBHb3nCkdV%2BOnj3VMxeEIazRzkkG9DDoLwEG2RyLlRL92j%2BfpKy%2BOyKjstbTLw6qJJPnzah5Y78fIkRYK4z&X-Amz-Signature=5bd3a733bdcc29f4dcc10a128648e010b5a0430cd12495849a6490ada8a12eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
