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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFWMFDU5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRxcQbhtrYZp85UT%2BVdppyFscgjCQ8%2BVijdIWC8WgvLAiEAyDdilofaRbXGzlaa0oCaeSpkqOR%2BQm4wJzzIwneCRXgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDPXUeHQ67Jy962w9BSrcA3xEFcyEPEZyk74Kt9SBd4GoinQu9%2BNXa0sKVgEpYwivX1kEIamgBw13Wp6Y9fvPscK31J%2FWLk5TzNZlHFWmSFZG110om11SIsOqEFrwSTYXisd9Ns1K9ojCqkGq6og%2FlYAAwNiQNGIrF9aBhfJyPeMg8DlXEFpft0Z52TGCXlTEJZl0conTHmIMicE8qRzaH4v054bRPJu1%2Be%2BlFTVEG5Kk%2BiytC3Clh0Ese8kcXefGyBYI3cf6uAMrIILkYDb6CDTcbVIhkiv6IW1548kZBm9E8zNt6JKHRlK3ZhSWM3pdbwaXwqatEdAc3NCNJnr%2BrNSRsGH%2B%2FjylbYUt5fhRaXVbaZZvk6IXlAIY2F7Bs%2FhwqN3Ukx0T1ucTrmlX%2BYblUPuqxeT%2FKgcAFtcNUM0gN2lJ%2FXScTlPI1e6cfjts38oVou7uWJSJ6eH8e3LlNuo32lN54sj1NP8cOd2rnxW0ZnOR7QuoPxZAkRxrKw9iGzOKIc7cM28et4eoXK3KVKSCkjo2cCG2S9hhmat7uTSqbPKrpHuh7JonE8jfMmwhFri1NDnLve0%2BCHsqfAV%2F1WHhRgCDk%2BWTyE%2BRxq%2B62HhPwde3KAV8xHRhnTPxstkgXn6frSuwW0KW05RBbARPMNjbxskGOqUBwH7q3mDnFMvqGLeHnSiWuilvRcN8TBpglxOJpdJEQBUpwf%2FI57%2FoF4HRcEG%2BnWWa25Dvvm9ZaWeO3zHTJ%2BHOG%2FDLGdK8MWg1i0H2Pn3JbRw9c0bYEdJkrYwTPZreKrs2%2Blo%2FgD7q7u3nMycqMgNeF9Fm%2FdBYVlTxIH7RMukzmleqoE32sW%2Bt9yMiv6OoF%2BlP8N6%2BMQ1brHpLzts5RPI7ms7UeOWB&X-Amz-Signature=13268992876cdf2b54b745382b3f9f958f8146fbaa6a1a28192a9eca8fa0a76a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YFWMFDU5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T160759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHRxcQbhtrYZp85UT%2BVdppyFscgjCQ8%2BVijdIWC8WgvLAiEAyDdilofaRbXGzlaa0oCaeSpkqOR%2BQm4wJzzIwneCRXgq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDPXUeHQ67Jy962w9BSrcA3xEFcyEPEZyk74Kt9SBd4GoinQu9%2BNXa0sKVgEpYwivX1kEIamgBw13Wp6Y9fvPscK31J%2FWLk5TzNZlHFWmSFZG110om11SIsOqEFrwSTYXisd9Ns1K9ojCqkGq6og%2FlYAAwNiQNGIrF9aBhfJyPeMg8DlXEFpft0Z52TGCXlTEJZl0conTHmIMicE8qRzaH4v054bRPJu1%2Be%2BlFTVEG5Kk%2BiytC3Clh0Ese8kcXefGyBYI3cf6uAMrIILkYDb6CDTcbVIhkiv6IW1548kZBm9E8zNt6JKHRlK3ZhSWM3pdbwaXwqatEdAc3NCNJnr%2BrNSRsGH%2B%2FjylbYUt5fhRaXVbaZZvk6IXlAIY2F7Bs%2FhwqN3Ukx0T1ucTrmlX%2BYblUPuqxeT%2FKgcAFtcNUM0gN2lJ%2FXScTlPI1e6cfjts38oVou7uWJSJ6eH8e3LlNuo32lN54sj1NP8cOd2rnxW0ZnOR7QuoPxZAkRxrKw9iGzOKIc7cM28et4eoXK3KVKSCkjo2cCG2S9hhmat7uTSqbPKrpHuh7JonE8jfMmwhFri1NDnLve0%2BCHsqfAV%2F1WHhRgCDk%2BWTyE%2BRxq%2B62HhPwde3KAV8xHRhnTPxstkgXn6frSuwW0KW05RBbARPMNjbxskGOqUBwH7q3mDnFMvqGLeHnSiWuilvRcN8TBpglxOJpdJEQBUpwf%2FI57%2FoF4HRcEG%2BnWWa25Dvvm9ZaWeO3zHTJ%2BHOG%2FDLGdK8MWg1i0H2Pn3JbRw9c0bYEdJkrYwTPZreKrs2%2Blo%2FgD7q7u3nMycqMgNeF9Fm%2FdBYVlTxIH7RMukzmleqoE32sW%2Bt9yMiv6OoF%2BlP8N6%2BMQ1brHpLzts5RPI7ms7UeOWB&X-Amz-Signature=d994a67e477a7281fa07036c65e02f6284ef5546e3e0903a68dfb0942378637e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
