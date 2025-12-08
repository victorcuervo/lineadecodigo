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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJ3WY56%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf4Ykg%2F2%2FAtDqePNQBaO86duToCSfXB4LshdDywR%2Fw5QIhAIVEcjQxBSjtcqEC2kckrBb38PBeuOIBbRniMJkjSJg7KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fj3Pi4OKdsMY7cegq3AOh%2B6ZOAczx7%2BeV%2B%2BunZfg1Pp6JQ9kZl0H08nnoRyZOJ1hdfTwfD2nGtejGuJB%2FBa2r1Z3hPY3HVZWZ5O%2B4CcmI1IxYRXgSNDgacqdW%2F8g1h%2BTp70TCHRwZXxG9yvZaw2gKBYmavp19uTDRAKTuW2ZqP%2FrureFpJPy8vkephMomz1ltckZpyb6s8EcraMNy8sKRM%2FyUh2pmgKxlHdi%2BmN0WqgXJlBZJb7TG7VsK796G6ueocSjuWMo6kXdHmH6CfcTosETblPEXuE%2BHROqtAc1zcmG4xSaOuNO6pG6VVSvY%2FULc2QyRO8jgR5tDljPu2oZmenu2%2BHrPvmsoxKqwzhtEpwpoWliRsfgGaw8q3qUxSStHKOiBzdEkBT6K3B6dW%2BGtXcggWgZoOrxA%2BkzrydXimXDsyo4lR9rC%2BHGXwtvW9h3Vd%2F2BUYDa%2B%2BpOzrMKTitzh9Mo1dpZvd4%2Bo%2BIeNEKtKyWRkNtGkIBkWYyOaH21pS1xXxDHne9Ma41jWr4PQSFj2%2BBTEN9CQn7U%2FY7ACl6bdM03q27dgnxm6wNKRh3vxH06KiQ5B14odyNeTGihFLa8zxq4tsnH4l40iVx1%2BPXEnTDdDaarcT0gyO7VgzQa1btglgB8ujmUGavyWzCo7dnJBjqkAeTlyVYRdZtUGaeRt8OLXR7HjZ3qOnw4fnG2dOR4VzIUsc%2B%2BqE5tYJz5A9qbjtl7793vHHQA%2F9TCoMeAYBuyMcqPclIGU%2F7lOwGhms0v61l8zSYf89MR8guil0fJv5ki868aPCM246TGKEyVLR78UNk%2Fp6NUHmgHFyt2gNHTQUBykmTpZg7Ig9b1ohJTGEnY1KbstoC3nXfxF4QalLL0P%2BSh4S%2FU&X-Amz-Signature=be469bbd5b28568a31467e0fa4d364560b02f2a74b23662726a5e9ce9df7e078&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666IJ3WY56%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T110308Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCf4Ykg%2F2%2FAtDqePNQBaO86duToCSfXB4LshdDywR%2Fw5QIhAIVEcjQxBSjtcqEC2kckrBb38PBeuOIBbRniMJkjSJg7KogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igx%2Fj3Pi4OKdsMY7cegq3AOh%2B6ZOAczx7%2BeV%2B%2BunZfg1Pp6JQ9kZl0H08nnoRyZOJ1hdfTwfD2nGtejGuJB%2FBa2r1Z3hPY3HVZWZ5O%2B4CcmI1IxYRXgSNDgacqdW%2F8g1h%2BTp70TCHRwZXxG9yvZaw2gKBYmavp19uTDRAKTuW2ZqP%2FrureFpJPy8vkephMomz1ltckZpyb6s8EcraMNy8sKRM%2FyUh2pmgKxlHdi%2BmN0WqgXJlBZJb7TG7VsK796G6ueocSjuWMo6kXdHmH6CfcTosETblPEXuE%2BHROqtAc1zcmG4xSaOuNO6pG6VVSvY%2FULc2QyRO8jgR5tDljPu2oZmenu2%2BHrPvmsoxKqwzhtEpwpoWliRsfgGaw8q3qUxSStHKOiBzdEkBT6K3B6dW%2BGtXcggWgZoOrxA%2BkzrydXimXDsyo4lR9rC%2BHGXwtvW9h3Vd%2F2BUYDa%2B%2BpOzrMKTitzh9Mo1dpZvd4%2Bo%2BIeNEKtKyWRkNtGkIBkWYyOaH21pS1xXxDHne9Ma41jWr4PQSFj2%2BBTEN9CQn7U%2FY7ACl6bdM03q27dgnxm6wNKRh3vxH06KiQ5B14odyNeTGihFLa8zxq4tsnH4l40iVx1%2BPXEnTDdDaarcT0gyO7VgzQa1btglgB8ujmUGavyWzCo7dnJBjqkAeTlyVYRdZtUGaeRt8OLXR7HjZ3qOnw4fnG2dOR4VzIUsc%2B%2BqE5tYJz5A9qbjtl7793vHHQA%2F9TCoMeAYBuyMcqPclIGU%2F7lOwGhms0v61l8zSYf89MR8guil0fJv5ki868aPCM246TGKEyVLR78UNk%2Fp6NUHmgHFyt2gNHTQUBykmTpZg7Ig9b1ohJTGEnY1KbstoC3nXfxF4QalLL0P%2BSh4S%2FU&X-Amz-Signature=2eeaea5ab24e576badc38e5743be277ac00e5176dd3e49a99c47479c9aa679cd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
