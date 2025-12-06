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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FUQLFIJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy%2BM6IVV4Rbl1rjz2bcDZvdEdiZbgPlaRSnX2JYdDBkAIgECUQWb2UNHMmyR%2FbuCico9saXbEu1zK5D7PdZUqw4iAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPOT8AI9Jxrti3MllSrcA1ciyqjaecTrA75v8W5TGl74rUAAreBunzW221SzUFTg6XUy5thLL647zsL930RSyc5EPT8guNXI8H6Jp8qXFu7HEFamaMU2yIS0lmglOyWbyzejfwjPdN0A1Ks%2BzEhb383bcPaZdwCwmjZprfHZ3z9h5lfgABx272Gt%2FuNhhtF1cZapf3m7IJ4j6CRWiofsuY1LcmpFv8t2tiPRXGzcbicGqumefYCFa50BI9KyKuZOnZU%2BayKZjKMVVEYv1%2BcO9c7IMj32VE7kyey7yPlgrtJy%2Fj418UHB1emgSiJM6z5A66PD3WvDVJrfCpOc2VySx%2B5xmkdaES2UhtYMyM0rqlkMjAWYpe5mxMIiRvsYstpg3EedgNWhShDh0DGhQA9hpufnD9AypOKFmJ73ohR9%2FrUfZuOaLDmjWYOpkpGqpbhmBRK4ofWpJcqGxchSOr%2BWLzPqCJ7ThT6XUtyvirl6i%2FExrbGUXkQ%2FAzwoNgIwnjTaFf71baNSRXXZCxSYRNAvHFQsqhLX4%2BdXbPSlOGLZR%2BnvjDtL0VmKgFVM1GOvLUK%2B1e1E7iP7DD5y1lmKpLoP%2BhgNqmGsXAz9PoDBx9UxiFenaRcuFjZaWIMn1P0YOB%2F7MHWojDqtQFON%2BNfwMMrCzskGOqUBq%2B2BX6seKFyk8d5oU2742tD8gQHiA8XMed0iXhAWUSLAv6pCJwHpeT9jQRhfN9E4R%2BNJkwj2nv%2FWVKePq8Kz8K69i16giu9KtVTxXsMHJMoQan885uSWzZuBRbOxjFpecVsEgfqCZ180LKyHsxPe08HSkWEKJIz78czgQmBfg%2FOx%2FO6lP1Q4jZwdkjBfG4KGSPn4%2FzA62agS5YHus4SRXFMSMG2a&X-Amz-Signature=eccaa887ff597addbfd3810276a006cf1520165d73c599a1ee3c3cafab8ee210&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662FUQLFIJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040252Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCy%2BM6IVV4Rbl1rjz2bcDZvdEdiZbgPlaRSnX2JYdDBkAIgECUQWb2UNHMmyR%2FbuCico9saXbEu1zK5D7PdZUqw4iAq%2FwMIbBAAGgw2Mzc0MjMxODM4MDUiDPOT8AI9Jxrti3MllSrcA1ciyqjaecTrA75v8W5TGl74rUAAreBunzW221SzUFTg6XUy5thLL647zsL930RSyc5EPT8guNXI8H6Jp8qXFu7HEFamaMU2yIS0lmglOyWbyzejfwjPdN0A1Ks%2BzEhb383bcPaZdwCwmjZprfHZ3z9h5lfgABx272Gt%2FuNhhtF1cZapf3m7IJ4j6CRWiofsuY1LcmpFv8t2tiPRXGzcbicGqumefYCFa50BI9KyKuZOnZU%2BayKZjKMVVEYv1%2BcO9c7IMj32VE7kyey7yPlgrtJy%2Fj418UHB1emgSiJM6z5A66PD3WvDVJrfCpOc2VySx%2B5xmkdaES2UhtYMyM0rqlkMjAWYpe5mxMIiRvsYstpg3EedgNWhShDh0DGhQA9hpufnD9AypOKFmJ73ohR9%2FrUfZuOaLDmjWYOpkpGqpbhmBRK4ofWpJcqGxchSOr%2BWLzPqCJ7ThT6XUtyvirl6i%2FExrbGUXkQ%2FAzwoNgIwnjTaFf71baNSRXXZCxSYRNAvHFQsqhLX4%2BdXbPSlOGLZR%2BnvjDtL0VmKgFVM1GOvLUK%2B1e1E7iP7DD5y1lmKpLoP%2BhgNqmGsXAz9PoDBx9UxiFenaRcuFjZaWIMn1P0YOB%2F7MHWojDqtQFON%2BNfwMMrCzskGOqUBq%2B2BX6seKFyk8d5oU2742tD8gQHiA8XMed0iXhAWUSLAv6pCJwHpeT9jQRhfN9E4R%2BNJkwj2nv%2FWVKePq8Kz8K69i16giu9KtVTxXsMHJMoQan885uSWzZuBRbOxjFpecVsEgfqCZ180LKyHsxPe08HSkWEKJIz78czgQmBfg%2FOx%2FO6lP1Q4jZwdkjBfG4KGSPn4%2FzA62agS5YHus4SRXFMSMG2a&X-Amz-Signature=20c9518dba0d02866490aa9895e68431de5253c7a012ee28d66d2f1b2dff6d2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
