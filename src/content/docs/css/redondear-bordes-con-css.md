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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMXY3LN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCID2GHTnkdjIpFpkPCqOhxNFt30G9eEhKbWZC4LqvMT6fAiEAnahQD2y0J08v6CQIKCaoQJhi%2F%2FjTKow1m0w8apkkUjoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAJdIQFNypg2bpOQoircA9yYZSnRunsKGNXm5H9mhXsM15w7G56TbuWXSsiKh8ZRa%2FCPAT3eeiBa754jXre%2B9%2FMtNrqyslG8K%2FrtX4uhmDrTCP7rue8dDcqonTjilDbPlTpPilwvLccszVEtsL4QZ8Ta2Yg7tkwaip2Pr7JEEgJ4W7gBlrWjgvdJKYnap%2BwjS37wWEHXxJRebqxpnqS96ddMz956V7PcEWm9CoHEr6C0bimyakr4r9Qwa3YwLjcqI7PZ4YMovU906DJFwDAbV%2BK1ybIPAassL6jdlePM5O%2FySW7tbf7796nR4MxklwYgu0EK8qyWhUM3iJT2r6HFsNiAb16YbPqbqrsL66t0V45%2FcAjr%2F4BKIHrCAbSugmgPXQknZ21AjB2nJICxXn%2FIEhFpmPZnE0z94oQvsDy0L5%2FslSqUe6B7%2FFXItbphGGKdwk8qFfG4J24mgLRW%2FK1%2F4chP4uWzkH6bacZROZkZPQdM4V0y2BVETMgcAaA99Io%2BXCn13djX2ZKVCMI%2FVnwCrcKi3PxF3kNC31JhCzroXZ3RiHEocfGzmYXq7mXNhC0XtXI%2FzpHUwdnwm4rRTIaj4sFnGP4iDk491sDdf4LA0NRyT86Pc2ri3sRpz5lPFPDcfBMDU%2FQDs0yqKNHYMMXmxckGOqUB7wfH2md32GOpuICDMoxP7L%2B0W4w74HOBkQwnIo2qGbjuGWdmLD%2BcHG%2FRbfEVWJEIpU%2FeThH133aWtHV88XIDHipW0GTLUmHF6jzAtRnfrrxiopU98RjlC9vA633gVi5ejx1aeCDL4elHO2fEcERjWRleSElgleJ4Tar0kFRea1jlGtQWrjfByjxN3shmrq%2B%2F2fR0TslQ5XZCAosCJ6TpubC%2FHFZ5&X-Amz-Signature=17b6c41c03006c95e09f8455c500b96558633ae8f212b72bcd317ab9b522c5f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RXMXY3LN%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T123309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJHMEUCID2GHTnkdjIpFpkPCqOhxNFt30G9eEhKbWZC4LqvMT6fAiEAnahQD2y0J08v6CQIKCaoQJhi%2F%2FjTKow1m0w8apkkUjoq%2FwMIRRAAGgw2Mzc0MjMxODM4MDUiDAJdIQFNypg2bpOQoircA9yYZSnRunsKGNXm5H9mhXsM15w7G56TbuWXSsiKh8ZRa%2FCPAT3eeiBa754jXre%2B9%2FMtNrqyslG8K%2FrtX4uhmDrTCP7rue8dDcqonTjilDbPlTpPilwvLccszVEtsL4QZ8Ta2Yg7tkwaip2Pr7JEEgJ4W7gBlrWjgvdJKYnap%2BwjS37wWEHXxJRebqxpnqS96ddMz956V7PcEWm9CoHEr6C0bimyakr4r9Qwa3YwLjcqI7PZ4YMovU906DJFwDAbV%2BK1ybIPAassL6jdlePM5O%2FySW7tbf7796nR4MxklwYgu0EK8qyWhUM3iJT2r6HFsNiAb16YbPqbqrsL66t0V45%2FcAjr%2F4BKIHrCAbSugmgPXQknZ21AjB2nJICxXn%2FIEhFpmPZnE0z94oQvsDy0L5%2FslSqUe6B7%2FFXItbphGGKdwk8qFfG4J24mgLRW%2FK1%2F4chP4uWzkH6bacZROZkZPQdM4V0y2BVETMgcAaA99Io%2BXCn13djX2ZKVCMI%2FVnwCrcKi3PxF3kNC31JhCzroXZ3RiHEocfGzmYXq7mXNhC0XtXI%2FzpHUwdnwm4rRTIaj4sFnGP4iDk491sDdf4LA0NRyT86Pc2ri3sRpz5lPFPDcfBMDU%2FQDs0yqKNHYMMXmxckGOqUB7wfH2md32GOpuICDMoxP7L%2B0W4w74HOBkQwnIo2qGbjuGWdmLD%2BcHG%2FRbfEVWJEIpU%2FeThH133aWtHV88XIDHipW0GTLUmHF6jzAtRnfrrxiopU98RjlC9vA633gVi5ejx1aeCDL4elHO2fEcERjWRleSElgleJ4Tar0kFRea1jlGtQWrjfByjxN3shmrq%2B%2F2fR0TslQ5XZCAosCJ6TpubC%2FHFZ5&X-Amz-Signature=9f8bc33bd6b887721c561e3493aa0e199ee6a661d9764c8581411fd6e01b818c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
