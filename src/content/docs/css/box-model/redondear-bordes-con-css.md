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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVVL7MU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8BFQyspVMgPqmb7z8LNk%2BAhmOuvESZTRvE819Sm%2FJaQIhAMcYchH0qgiG1C%2BWvv28ezKBSVQORca69auAUNY%2FIW4ZKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRSjWHIwBc0hRhDe0q3AOtSedHW%2FhR6wTPyPwQj1Hjt4EIU3cHZNCREzTxB8%2Bc20VVCV%2FX56rdY%2FcXa4z4F4x6Dp9gXZdGbi1uZTUTkdHs63cxc5rE0oIaECmqLM4FEZHCrhO2LLxM5ABItxko9KjxK4gi7ZLIV7GMjCSOvL67OncOmooh0lKjxPioQNMMMypVB1KMecLD1ekuAr7ulolDSdYzsgCEtH6eyCfwXM8PawsJIVKp4LmE7TtNuFVo2vfVU9TntFedacsQoi77LkFwfrOHZp7uwZ7GrKEwpU1slbz%2FaXt%2FZpobUGFnxEqhy%2BkkEpXE%2Br%2BNG6KicyV0EybnVpmcaoERb0nSXXZaj8x0mPHX8iLBkoVgsnByN2e0b7lkiH5aXPOvn8R6DrfBEbwnt4nmODImjxrQdMTuzpWEp1vE0gJ1NhHMTX46C1Vz0dC9i6R9LnNrtup7EeiXncDPRTtP0HzQUBnug5uTteUdRRYL40tchO5wJZxX7Ub7v183MTCCfowXUjuu6XqC4uE86%2BwgNWYET6VGoxGuYm915AGbIJ83aPueUEuyg7IriljbpeEhWpDYr7bh9D40ayMafy5Xptbu1ggEBQXXYiBhMJ5E46Cm5zg3xTno206pm3pCCI%2FDv2weyEZK4DDonovKBjqkAfyvbSUWLT0tVjITP59w7SRsdBJtin9PNO0fFUzgKyhXHe4zl0%2FEjv0Wx82QvbjsqgE4oEJ5sipLRDxBjKX85Cds4X0D2R7BfDZBbP60%2BSdLDXc407ZcQV36Cpcu9loLfpDBkamqJRixvHbzD83wWiIExtZhsu02UbH0E8SO66cpSvkaOFKTXo249j38%2BTCc5V0bRJWy0YCZJnZH7UqC%2FU6Tqg7W&X-Amz-Signature=47569fe35692b8593c9c83c8774a8e500aa0d2be325065774405ebc6c353e56e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ULVVL7MU%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T183814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC8BFQyspVMgPqmb7z8LNk%2BAhmOuvESZTRvE819Sm%2FJaQIhAMcYchH0qgiG1C%2BWvv28ezKBSVQORca69auAUNY%2FIW4ZKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwRSjWHIwBc0hRhDe0q3AOtSedHW%2FhR6wTPyPwQj1Hjt4EIU3cHZNCREzTxB8%2Bc20VVCV%2FX56rdY%2FcXa4z4F4x6Dp9gXZdGbi1uZTUTkdHs63cxc5rE0oIaECmqLM4FEZHCrhO2LLxM5ABItxko9KjxK4gi7ZLIV7GMjCSOvL67OncOmooh0lKjxPioQNMMMypVB1KMecLD1ekuAr7ulolDSdYzsgCEtH6eyCfwXM8PawsJIVKp4LmE7TtNuFVo2vfVU9TntFedacsQoi77LkFwfrOHZp7uwZ7GrKEwpU1slbz%2FaXt%2FZpobUGFnxEqhy%2BkkEpXE%2Br%2BNG6KicyV0EybnVpmcaoERb0nSXXZaj8x0mPHX8iLBkoVgsnByN2e0b7lkiH5aXPOvn8R6DrfBEbwnt4nmODImjxrQdMTuzpWEp1vE0gJ1NhHMTX46C1Vz0dC9i6R9LnNrtup7EeiXncDPRTtP0HzQUBnug5uTteUdRRYL40tchO5wJZxX7Ub7v183MTCCfowXUjuu6XqC4uE86%2BwgNWYET6VGoxGuYm915AGbIJ83aPueUEuyg7IriljbpeEhWpDYr7bh9D40ayMafy5Xptbu1ggEBQXXYiBhMJ5E46Cm5zg3xTno206pm3pCCI%2FDv2weyEZK4DDonovKBjqkAfyvbSUWLT0tVjITP59w7SRsdBJtin9PNO0fFUzgKyhXHe4zl0%2FEjv0Wx82QvbjsqgE4oEJ5sipLRDxBjKX85Cds4X0D2R7BfDZBbP60%2BSdLDXc407ZcQV36Cpcu9loLfpDBkamqJRixvHbzD83wWiIExtZhsu02UbH0E8SO66cpSvkaOFKTXo249j38%2BTCc5V0bRJWy0YCZJnZH7UqC%2FU6Tqg7W&X-Amz-Signature=ba8eefd529f315797b14aa85cf234a79402936f2f70c8f533f4642a1a576a9f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
