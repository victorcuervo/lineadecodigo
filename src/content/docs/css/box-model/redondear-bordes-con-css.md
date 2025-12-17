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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UROGV25%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDemKt8LpiKhJIPrM%2Bpu%2Frecv2NxFT4%2BBRsCNRaJZkcQIgcq0Pw1Ony3rEDFOET%2BtZPWEktT0Lp%2Bh96jB88pw5M9sq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPnGtsLIiGnPZRDnsCrcA3G1voGHGjfnQf6%2FkALzm%2Bz36UFi7Ip%2FIAzBeB5WqpmY7twQTA4pJysf1JK04ASqOxTP7ICWToCppjtXtJOBHZMBRbjSfjdCq6GoFYZ%2BrHYr6YKbGCUVlGg4SUl2rRjT%2FxbqFhvshyFNSxYjvftq50uNfRU%2FeLZLEQhppPpbtLtr%2BMWpGqk2bLP%2FFXvChOW1VX2Nw9metStgtLHHAqfXmL4g5OWUOTEf5r6rIXcK6UbN0piByLe5CIcK9HmzmUSC62ZQhKxLAtkApO7Sr3pKDXDgO%2F2eCjpKQsxBihywB5i8SFgfq7T076VZFPadGtba28ebTN3ZEh9uhUDWiqBcniUvLJ9Qf6oMB9kW4eoixhvEk0kh%2BD73cVP49Ax%2F6dk88MiS1lltIQM8ywWRy7HPpU7tVKteKx0BxXXovjIJDtPph24SIksdv60cHnqRgo6GEELNdOUceGB5qXyiNUz9sMSuif38aD3PTU1MC7EACuX7ZZVXm1ve7vv9jqOoqTykxUtoB5Hil%2F2khDDu7QZMB85WEmFK2uqxhO71yefsCLTFZJC%2BXBbMiTjtD404IC0CRG3kRoe8Vp0FJFDk1EIBdEyATyiZ9aY9b%2BCS9JbVvMnRXEMmq4AKXY0%2BNXeLMP%2FSicoGOqUBAWsylXz2jWOsaP0NQO1q%2FmjfnFgJaama8XfLZ6%2FoeF5vw4AfHgN3fJ5TeZL9LphzSXuHh2WSkJrwbqTKFvpfh4iF2nnT%2BI8942cYEvWS%2B1zzWTfeoCQPjzh%2FXFmtlUW6OktHswgpr%2BUQjvpzO0tKZoOqsTA6wqCRtgke8pHMB6msviuhy%2BczWs7oyopIBfEDexs7S7ASCN2q%2FfqeGju2jJvQaGGU&X-Amz-Signature=f8a7b45b3f61472d171876bc0545d38d06a73799f53cf2cafd574e598b4c1537&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UROGV25%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDDemKt8LpiKhJIPrM%2Bpu%2Frecv2NxFT4%2BBRsCNRaJZkcQIgcq0Pw1Ony3rEDFOET%2BtZPWEktT0Lp%2Bh96jB88pw5M9sq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDPnGtsLIiGnPZRDnsCrcA3G1voGHGjfnQf6%2FkALzm%2Bz36UFi7Ip%2FIAzBeB5WqpmY7twQTA4pJysf1JK04ASqOxTP7ICWToCppjtXtJOBHZMBRbjSfjdCq6GoFYZ%2BrHYr6YKbGCUVlGg4SUl2rRjT%2FxbqFhvshyFNSxYjvftq50uNfRU%2FeLZLEQhppPpbtLtr%2BMWpGqk2bLP%2FFXvChOW1VX2Nw9metStgtLHHAqfXmL4g5OWUOTEf5r6rIXcK6UbN0piByLe5CIcK9HmzmUSC62ZQhKxLAtkApO7Sr3pKDXDgO%2F2eCjpKQsxBihywB5i8SFgfq7T076VZFPadGtba28ebTN3ZEh9uhUDWiqBcniUvLJ9Qf6oMB9kW4eoixhvEk0kh%2BD73cVP49Ax%2F6dk88MiS1lltIQM8ywWRy7HPpU7tVKteKx0BxXXovjIJDtPph24SIksdv60cHnqRgo6GEELNdOUceGB5qXyiNUz9sMSuif38aD3PTU1MC7EACuX7ZZVXm1ve7vv9jqOoqTykxUtoB5Hil%2F2khDDu7QZMB85WEmFK2uqxhO71yefsCLTFZJC%2BXBbMiTjtD404IC0CRG3kRoe8Vp0FJFDk1EIBdEyATyiZ9aY9b%2BCS9JbVvMnRXEMmq4AKXY0%2BNXeLMP%2FSicoGOqUBAWsylXz2jWOsaP0NQO1q%2FmjfnFgJaama8XfLZ6%2FoeF5vw4AfHgN3fJ5TeZL9LphzSXuHh2WSkJrwbqTKFvpfh4iF2nnT%2BI8942cYEvWS%2B1zzWTfeoCQPjzh%2FXFmtlUW6OktHswgpr%2BUQjvpzO0tKZoOqsTA6wqCRtgke8pHMB6msviuhy%2BczWs7oyopIBfEDexs7S7ASCN2q%2FfqeGju2jJvQaGGU&X-Amz-Signature=af74feb7c269e33013298d74e7992cbe0c9e3582cbb38939d674e197d61fcbb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
