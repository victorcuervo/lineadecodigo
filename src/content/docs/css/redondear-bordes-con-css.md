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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWA6I4Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuFh8A6TYuifgDDTwm2761mJjvuqNq7qKwQ8fTmuGK%2FwIgRjjxOn7Zragplf5%2BGSn4m8lYo114Jk48taEcE0d6TwgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhkgyq69Aa5f%2FQwbircA87illEDVbt0R%2FDYStwcxhe9ETrxRfF2zNVKgZ%2BrB5QlmcuiIoFZhnl07kADois70hXNAg0QPzCETTOsdn0s4a0TpvDlwJ%2B73sOjoGDt9zfdwEOtTYreF2bvq7H4Q3gtkzLjTXCkiada02ExTdvBBY0M7RstZEZ6Ma2nfQdwFKsTcsWwO%2BN0L0bCKUYp1eCh0ChK%2BGVqwHkFBRjfSUsgcIJmk%2B1pkmYm8KME7XlzYABJMWqnpHO2GDMjC3J01L8cIFY9dIBSUKwhLrecEhPt5MLBhr8rfkCNcGew3ywZGcBZO66E4oAZMC3S7N9Zaz5KMZ2BcU445%2FcnL%2B9%2BFKBVvU3LMCPHfWET5ohlVTVyPZ97py%2BECzVUKgy%2B4g2McS8c6gtHlGnQMCx307bUBejU31sg9cOYwbBErRuwnO%2B%2Fnes5c0N2Y6iFzxUw53tyOcD5NR00WkmlFE%2Fzw7wPWGda0YAmHbyZMZ6oEYhOXQixvhj8F%2FFrjJssCmSNgRBLyPzG0SQO5GogQq8mS0%2B5G9O3GiKdiL%2BvVphLi2B%2BmoDhS3ZiYi39FXolpHbmGyvcGT9uUJjKqKk2ngeRmBXhqmXw1F4NB4VbNGfqGL8pCzqa3coYdhMLPd3xHTKxjpgLMMGQ3skGOqUBg%2BbE9GGekQujMdAGEp9iRMWPkmAIOY0eO1xCDsCXd8axw0StGFnn6QS8THXfyCJtnWq7op3tbtDYoJ2Hc131drfiKlHg625Qy%2BVdMMPD87cDSJTE3EMh7czE%2B8A3aHsxlLkUWlQvz0pcWYxr7MG2lz3D9BqTf7%2BqRowLbiNgpWvR1Xi%2BdP5emlG7gdHnFumxEpfnhO73pLC4PMwcE6Oc8Vaeq4wB&X-Amz-Signature=e62ae1990e3c2f7922142cd0afaa0b46c90eba0a205454a665925c2e48720d46&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPWA6I4Z%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCuFh8A6TYuifgDDTwm2761mJjvuqNq7qKwQ8fTmuGK%2FwIgRjjxOn7Zragplf5%2BGSn4m8lYo114Jk48taEcE0d6TwgqiAQItP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDhkgyq69Aa5f%2FQwbircA87illEDVbt0R%2FDYStwcxhe9ETrxRfF2zNVKgZ%2BrB5QlmcuiIoFZhnl07kADois70hXNAg0QPzCETTOsdn0s4a0TpvDlwJ%2B73sOjoGDt9zfdwEOtTYreF2bvq7H4Q3gtkzLjTXCkiada02ExTdvBBY0M7RstZEZ6Ma2nfQdwFKsTcsWwO%2BN0L0bCKUYp1eCh0ChK%2BGVqwHkFBRjfSUsgcIJmk%2B1pkmYm8KME7XlzYABJMWqnpHO2GDMjC3J01L8cIFY9dIBSUKwhLrecEhPt5MLBhr8rfkCNcGew3ywZGcBZO66E4oAZMC3S7N9Zaz5KMZ2BcU445%2FcnL%2B9%2BFKBVvU3LMCPHfWET5ohlVTVyPZ97py%2BECzVUKgy%2B4g2McS8c6gtHlGnQMCx307bUBejU31sg9cOYwbBErRuwnO%2B%2Fnes5c0N2Y6iFzxUw53tyOcD5NR00WkmlFE%2Fzw7wPWGda0YAmHbyZMZ6oEYhOXQixvhj8F%2FFrjJssCmSNgRBLyPzG0SQO5GogQq8mS0%2B5G9O3GiKdiL%2BvVphLi2B%2BmoDhS3ZiYi39FXolpHbmGyvcGT9uUJjKqKk2ngeRmBXhqmXw1F4NB4VbNGfqGL8pCzqa3coYdhMLPd3xHTKxjpgLMMGQ3skGOqUBg%2BbE9GGekQujMdAGEp9iRMWPkmAIOY0eO1xCDsCXd8axw0StGFnn6QS8THXfyCJtnWq7op3tbtDYoJ2Hc131drfiKlHg625Qy%2BVdMMPD87cDSJTE3EMh7czE%2B8A3aHsxlLkUWlQvz0pcWYxr7MG2lz3D9BqTf7%2BqRowLbiNgpWvR1Xi%2BdP5emlG7gdHnFumxEpfnhO73pLC4PMwcE6Oc8Vaeq4wB&X-Amz-Signature=f5d4cb2c8692f25ce2d4c3137d07be3e04dbf45f1a31887ab61f324dbecb3293&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
