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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ASZAH22%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFmuN5Cs5fM6Ckhzgmr1TNUbFBsOc7hKFzNPM%2FZsRrFwIgZAgRYxsniLqlW8c64zMFC8pLG8Ss0CnI%2FyF0Qmksa8Iq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDOwzSauZstkYkmzdBSrcAzxH3OhTw%2FM0gSl9oFb%2FjjyUxesR7XgU%2BpSJZJ%2FrD7Af27Iaplo0Mrc%2FsWm%2BWaEzNs47OB06BzuaQnD%2BlIdZqjLXP21LLVTbI2orSIze7SHDAssaBnn188I45ghQdN2aTKo8M4uRzNgFLS5LCWK5MJVKZbakdvowLQ4lAghEBNMjZxAZehs1FdvZ8E2uti9Zn%2FGeB7O5%2BXi1RuxcMcK7XcfqYOrHk2cYF1hNDPTKVQ22JeF7Qf%2FCBSItNWErk%2FjbWgOLoxtJypJPXfglJsQmU7%2BiC79zsnCPpAwaXamr92oO2kZ%2BVctx%2BQnNvfAm97%2FbzVetCNKAa5QbGvLKxfV8jbNESDvCdU69pviqAGly8BN4Dh399zdyXJzHA2OvLO48P%2FRnd5UqW9jtF9ChkXuKNR8YO8t45D1D49JM%2FEqDoEijA4LHEcOGl4%2FgcWLYLf5SXWjcz8fID5S36CPVkKfHYHgSxpfmY5lTSedhcm1%2BnsdhI%2BkW6JvS9uF6pNAgyDIeeGqnByaSOHqdQM8MrpgdW3wJ%2F2u8hv%2BCSj09tEZfYKCRfRb4Xh8OImSdY%2BjPullJ6gDruFj2kZdYsbIdO1Qk%2FkSqZ%2BeJyxEZlu2u%2BFFPhRcjWV7ua4rESx4p%2BS0qMOzbxskGOqUB97XgDQ%2FnWVkxiGrQz80sV%2BC9Yg6PBJJcp9Xmn18SntfhpKBcGb3mY3wDLpqgHFgEoZ2g%2BqFzVADOx%2FQKv%2FUWOkdxAFjixdqjC2fIdJAHjtjdOYPEDcedmxRls0VFnSduZs6FIZ1w6FMYB8qSZxvFNIn9rdmRbZ4rKkTEzUQHXPbuq3PVyhAN6Ibel7Es1POOQqm760OyADEnZCwtbKZ4sWd089a8&X-Amz-Signature=efe2ba9920c3dc9302ebdd753fbf9e608100a5d11130283dea964d72a600fb5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666ASZAH22%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162240Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDFmuN5Cs5fM6Ckhzgmr1TNUbFBsOc7hKFzNPM%2FZsRrFwIgZAgRYxsniLqlW8c64zMFC8pLG8Ss0CnI%2FyF0Qmksa8Iq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDOwzSauZstkYkmzdBSrcAzxH3OhTw%2FM0gSl9oFb%2FjjyUxesR7XgU%2BpSJZJ%2FrD7Af27Iaplo0Mrc%2FsWm%2BWaEzNs47OB06BzuaQnD%2BlIdZqjLXP21LLVTbI2orSIze7SHDAssaBnn188I45ghQdN2aTKo8M4uRzNgFLS5LCWK5MJVKZbakdvowLQ4lAghEBNMjZxAZehs1FdvZ8E2uti9Zn%2FGeB7O5%2BXi1RuxcMcK7XcfqYOrHk2cYF1hNDPTKVQ22JeF7Qf%2FCBSItNWErk%2FjbWgOLoxtJypJPXfglJsQmU7%2BiC79zsnCPpAwaXamr92oO2kZ%2BVctx%2BQnNvfAm97%2FbzVetCNKAa5QbGvLKxfV8jbNESDvCdU69pviqAGly8BN4Dh399zdyXJzHA2OvLO48P%2FRnd5UqW9jtF9ChkXuKNR8YO8t45D1D49JM%2FEqDoEijA4LHEcOGl4%2FgcWLYLf5SXWjcz8fID5S36CPVkKfHYHgSxpfmY5lTSedhcm1%2BnsdhI%2BkW6JvS9uF6pNAgyDIeeGqnByaSOHqdQM8MrpgdW3wJ%2F2u8hv%2BCSj09tEZfYKCRfRb4Xh8OImSdY%2BjPullJ6gDruFj2kZdYsbIdO1Qk%2FkSqZ%2BeJyxEZlu2u%2BFFPhRcjWV7ua4rESx4p%2BS0qMOzbxskGOqUB97XgDQ%2FnWVkxiGrQz80sV%2BC9Yg6PBJJcp9Xmn18SntfhpKBcGb3mY3wDLpqgHFgEoZ2g%2BqFzVADOx%2FQKv%2FUWOkdxAFjixdqjC2fIdJAHjtjdOYPEDcedmxRls0VFnSduZs6FIZ1w6FMYB8qSZxvFNIn9rdmRbZ4rKkTEzUQHXPbuq3PVyhAN6Ibel7Es1POOQqm760OyADEnZCwtbKZ4sWd089a8&X-Amz-Signature=de2d6803964dd0d39d231af8ff6cfd8213b693a22e75b0b6f2b8a743759adc86&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
