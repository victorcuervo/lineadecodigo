---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFZSJS3U%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCPYC%2BhNx0jSDsoqI%2BV6gwfCsemHewma408qv8jOJxncgIhAN%2BadyZTT%2F1Tle5w41oRNTuolV%2FvqY32pOKzAPlzRf6eKv8DCDcQABoMNjM3NDIzMTgzODA1IgxModdTL9QWILPb4xoq3ANEHNRNuMgpXyVXjI1gQNSdBZUxyVoJz9SwMYt0eyD2iO4nxPXPcn6b3Awlm2vMT0p14IErM71Gvx44qeQcGlYLgwcufDHFLAckNCDj6m0EdFNOHEqAvungY9tdqLVT9LPjsYCxJ4HIyu8aOru86iJ%2B8CaVY5ov58YOQMIcXn1vI%2BD3E%2FUjYid6DIvoEMOJfnlM3RdycGPKi6uUhKQZ%2F3Z%2F7fni1sbT%2F7zBNa4amLDQy3Z0FlCSkQg8Zrs%2B34RHN%2F64JTu8ZQAlSwDh03%2By0wr4eQUiaccVRaCbC3Vnva%2BP2LHHpXYCOy3TAMIBdSffr1zJmNJJyhDuO6nrvz2NqBgp4EI3ZguM%2BWS1dXQ6MPxMJVUA60SFLUaxwIoUUyVmNE6uCf6mOFD491XYoABsENH%2Fw%2Bft%2F%2Fota%2BaKuGt6GzswtnixO8PuMOpTzL5ANZwXvfpW9VZ1hRDtk%2FuQgjI8FPSaEif13kaqUoI9FLXNWZUyFYhi7nArUWPQBuiDtVjCMzLIQ7oO4WIIv2BfyFyDIddfTxXmz%2FDYr088fqs07Ebe%2Fe2anr1pwnyuWXRBeMptfB4b7OLKJcA4eD3INReV4r%2BiYEXABoPni5iFQHBdwSu0kPmm7UIYNhLpAzgteDDn3MLJBjqkAWpbFFA%2BtwQ9nzQ4WVlej5EPtSmmLrPl06DQrtNyuCL1i74gc0R7RrW6NC1cTAwt11EENG9rKUzEK7zERi2eZ0uRScd%2B9LKN38dH%2FHhAZgmRjP%2BV7XmnsiTbwSNUJYZCKK53VpJUuraXYG%2B2mUMwerwQ5LKH2DU4bnMg0ctM45z1sMSQvTx8ix1SJzeS0FysJqWmtYYPVtKDHCumlUufya%2FR5ltz&X-Amz-Signature=b94543057d77f8ec57e04380eefbc0033a16d79169a47c55c21609a269cf3c0c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFZSJS3U%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215941Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQCPYC%2BhNx0jSDsoqI%2BV6gwfCsemHewma408qv8jOJxncgIhAN%2BadyZTT%2F1Tle5w41oRNTuolV%2FvqY32pOKzAPlzRf6eKv8DCDcQABoMNjM3NDIzMTgzODA1IgxModdTL9QWILPb4xoq3ANEHNRNuMgpXyVXjI1gQNSdBZUxyVoJz9SwMYt0eyD2iO4nxPXPcn6b3Awlm2vMT0p14IErM71Gvx44qeQcGlYLgwcufDHFLAckNCDj6m0EdFNOHEqAvungY9tdqLVT9LPjsYCxJ4HIyu8aOru86iJ%2B8CaVY5ov58YOQMIcXn1vI%2BD3E%2FUjYid6DIvoEMOJfnlM3RdycGPKi6uUhKQZ%2F3Z%2F7fni1sbT%2F7zBNa4amLDQy3Z0FlCSkQg8Zrs%2B34RHN%2F64JTu8ZQAlSwDh03%2By0wr4eQUiaccVRaCbC3Vnva%2BP2LHHpXYCOy3TAMIBdSffr1zJmNJJyhDuO6nrvz2NqBgp4EI3ZguM%2BWS1dXQ6MPxMJVUA60SFLUaxwIoUUyVmNE6uCf6mOFD491XYoABsENH%2Fw%2Bft%2F%2Fota%2BaKuGt6GzswtnixO8PuMOpTzL5ANZwXvfpW9VZ1hRDtk%2FuQgjI8FPSaEif13kaqUoI9FLXNWZUyFYhi7nArUWPQBuiDtVjCMzLIQ7oO4WIIv2BfyFyDIddfTxXmz%2FDYr088fqs07Ebe%2Fe2anr1pwnyuWXRBeMptfB4b7OLKJcA4eD3INReV4r%2BiYEXABoPni5iFQHBdwSu0kPmm7UIYNhLpAzgteDDn3MLJBjqkAWpbFFA%2BtwQ9nzQ4WVlej5EPtSmmLrPl06DQrtNyuCL1i74gc0R7RrW6NC1cTAwt11EENG9rKUzEK7zERi2eZ0uRScd%2B9LKN38dH%2FHhAZgmRjP%2BV7XmnsiTbwSNUJYZCKK53VpJUuraXYG%2B2mUMwerwQ5LKH2DU4bnMg0ctM45z1sMSQvTx8ix1SJzeS0FysJqWmtYYPVtKDHCumlUufya%2FR5ltz&X-Amz-Signature=937e089287482999c77281a8d6fcf894a04a7b1d495c334de39b48b9ecc3365e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
