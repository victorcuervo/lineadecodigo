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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHZMNWO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T162410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3O3FcYisvpHvbiHy%2F4eGxVbMOtx8Ns6Uudtz1%2B%2BPu7wIgal2ux1XmKiQU%2FWTm8HyYRUpJU8mTDpenCUuqd2bfSu8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq9igVgEywIKGQG7SrcA1q31X49s0cI2it%2BY%2Fpi%2BDmk33MORZo1Ievl0DJrtwtd2KUmFNjWsJ64GqTKwDtZaXlUIdt7CmxH%2BuRz6yXUIO%2FEPqejRcrGU2TBSCekKU9U%2FqH9Ef8iF%2Bi9EFI5td17bwwr0Kw3n5AJY3EAS8zO%2F0AfrdfEuDbjyt26il%2Bqe8MaKVBfeYky%2Ffvw17bFpiZcpHH%2FhQthAunFyXCJbkutCMPcQsFFB1gJxEPLa07ZlL96fA%2FgbSuliJIuIRih%2F6nDo4vDfd1LJ044e1ekw2XVO9veaaOoaVPmm9OTGcsO7JpsVRycIZ0%2BQhIEM%2FbV6BbPHLw%2BpX45mDIJJ%2B1%2FlfgzC5k42ZU5pFTdciF%2FXu8fH1EKtrVS2edqUAC1grErFPx2F60J9il9XHn9gVZ%2B99zA93blYLyLppls9jx8feew9KSmOqpeohH9JdoRUL0yVxeOv36Z8AVeU5YKPYdig5ZJyht9RDqwMfcZJ%2BcCtjkopTMHvL8vbPeSMYwL8GyLeubU7T10Sdfkv%2BGSkwko2oPzJzO3k%2BXfe8VqEPPyxDutxN6ocl73K3JAN3D%2F2pePqEYsnc3aEEUutwz7AO63t0ltnAFV1oW2ZCmlz3bRN8q7uALN8hhev099yebYOSjSMNG81skGOqUBpsG9vcBR5kqw7HqHVzJo8QcKbieQ5WFjNqpK12JROoLDPREY4SpkywATZG11sbNC%2FCD8JpKXjPXRsm50%2BJeq9t%2FSF%2FTcDuxtB6dBuXcilHpkI%2FFD4QgwZns4SyDkal6Zn3RvT0CFw28YVtPcxIszqDGawduGHsWdNG3yMYxhp5s5U%2FQECbPXHoapOJIj5h4JEIJw9wvW1JbapHYGGFvBO4J2pxQo&X-Amz-Signature=8a918d041c8f2c241a0b7173942105540e4ea20429729636dc20e6a60e5a0866&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XPHZMNWO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T162410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD3O3FcYisvpHvbiHy%2F4eGxVbMOtx8Ns6Uudtz1%2B%2BPu7wIgal2ux1XmKiQU%2FWTm8HyYRUpJU8mTDpenCUuqd2bfSu8qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAq9igVgEywIKGQG7SrcA1q31X49s0cI2it%2BY%2Fpi%2BDmk33MORZo1Ievl0DJrtwtd2KUmFNjWsJ64GqTKwDtZaXlUIdt7CmxH%2BuRz6yXUIO%2FEPqejRcrGU2TBSCekKU9U%2FqH9Ef8iF%2Bi9EFI5td17bwwr0Kw3n5AJY3EAS8zO%2F0AfrdfEuDbjyt26il%2Bqe8MaKVBfeYky%2Ffvw17bFpiZcpHH%2FhQthAunFyXCJbkutCMPcQsFFB1gJxEPLa07ZlL96fA%2FgbSuliJIuIRih%2F6nDo4vDfd1LJ044e1ekw2XVO9veaaOoaVPmm9OTGcsO7JpsVRycIZ0%2BQhIEM%2FbV6BbPHLw%2BpX45mDIJJ%2B1%2FlfgzC5k42ZU5pFTdciF%2FXu8fH1EKtrVS2edqUAC1grErFPx2F60J9il9XHn9gVZ%2B99zA93blYLyLppls9jx8feew9KSmOqpeohH9JdoRUL0yVxeOv36Z8AVeU5YKPYdig5ZJyht9RDqwMfcZJ%2BcCtjkopTMHvL8vbPeSMYwL8GyLeubU7T10Sdfkv%2BGSkwko2oPzJzO3k%2BXfe8VqEPPyxDutxN6ocl73K3JAN3D%2F2pePqEYsnc3aEEUutwz7AO63t0ltnAFV1oW2ZCmlz3bRN8q7uALN8hhev099yebYOSjSMNG81skGOqUBpsG9vcBR5kqw7HqHVzJo8QcKbieQ5WFjNqpK12JROoLDPREY4SpkywATZG11sbNC%2FCD8JpKXjPXRsm50%2BJeq9t%2FSF%2FTcDuxtB6dBuXcilHpkI%2FFD4QgwZns4SyDkal6Zn3RvT0CFw28YVtPcxIszqDGawduGHsWdNG3yMYxhp5s5U%2FQECbPXHoapOJIj5h4JEIJw9wvW1JbapHYGGFvBO4J2pxQo&X-Amz-Signature=439766076d026ec6aebad8c1c3b713059c4118b4b93089249a64c5a9d4b8473a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
