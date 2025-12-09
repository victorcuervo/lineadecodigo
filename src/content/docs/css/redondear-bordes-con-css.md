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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R23U2HMA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf%2Bqc8YoJreJ6WGUORk4rFd9cV3zXYhY%2BlPnimpJ7n5AIhAJY10x1%2Fs3oHeHF6kJR6NI1%2BcLPc36gFajAsXLmWLVu6KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoUNr%2BGIpwZQdm%2Bucq3AOMcPYi60l3aUUvZEysexrqpuZAib3tb5fGDCXpzvpEW3oGB8%2Fm8uE7hUd24EQ74j5HpANvSrVUFBQXxobyi4zpnZDDeMqUSRL7wc72krwJ5FlfRvIa91azE1CYWlGLhSbnOKmm9%2BgUhudX6LTmEH%2FFgCe%2Fk8bVr%2BLBOnKmk7g2ZAROHuS1jrBSq1kCoCrXBDr1Vzuuh4o9GXPRwQtDM4lDRV4bk4jZ9gO3hHjntM8DBHWIlN0J4tdGFSHU0M4j7S8hLKE%2FDD1Wme2PfSkEMyP9K5WfbHVFtRQUpcnoWAms515ehKsHLYVlUJ2JHHAChpBbG94ATDaS11x7gJOQsZzNEZeuXntufqvR7MYpsumT8JhOvgW9sUfgYRBamF5HarCk2l%2FI6xzgScF28MPFxfdqWavnQ2HDeYZSXk1GJWOZ7oBej9v%2F5ZRKLfBORYcY1TBrMedkyKBlauMc7ZmTl0ZxQJn5jPbKWsmFR7DN9m5NGEuXSisDdLyVqMmuJ3jgLGb03n98JOVy5gYXJxyMv7suDKxtFOEeRazU1rMBjdqiTlJDmeBpfHRHkQcfrhYUd6j9HBbeoaj748barfn6pz3r9Et04gV985P8Vgts0xTldjCgHb3ADFT6GDY0lTDgxN%2FJBjqkAfsFGDwpyCgorh%2BKF%2Fhb84FjAR1JM%2FNKZgN1WK9lH1MZpPR2Wtikd5MP4Ab6Prejue2fpmxf7%2FnDh4R8ERYtI1PujQyQm4XUWievqXFbQhir4%2FIpwVVPsC8ZUkTqAmDoh22OB2ADfbz9vYCz%2BfIQgdbBKVwmsJEMWn9nTTS2lAv4ZPwXrVmH9W3Pw9gQhgNYK%2BEuUrd8q3CPr4Q%2FVREPxMu12l79&X-Amz-Signature=cacb8df0c1f534fd5c278c754c85cba8721c889e2345a256270b92346d094253&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R23U2HMA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T094523Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDf%2Bqc8YoJreJ6WGUORk4rFd9cV3zXYhY%2BlPnimpJ7n5AIhAJY10x1%2Fs3oHeHF6kJR6NI1%2BcLPc36gFajAsXLmWLVu6KogECLr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxoUNr%2BGIpwZQdm%2Bucq3AOMcPYi60l3aUUvZEysexrqpuZAib3tb5fGDCXpzvpEW3oGB8%2Fm8uE7hUd24EQ74j5HpANvSrVUFBQXxobyi4zpnZDDeMqUSRL7wc72krwJ5FlfRvIa91azE1CYWlGLhSbnOKmm9%2BgUhudX6LTmEH%2FFgCe%2Fk8bVr%2BLBOnKmk7g2ZAROHuS1jrBSq1kCoCrXBDr1Vzuuh4o9GXPRwQtDM4lDRV4bk4jZ9gO3hHjntM8DBHWIlN0J4tdGFSHU0M4j7S8hLKE%2FDD1Wme2PfSkEMyP9K5WfbHVFtRQUpcnoWAms515ehKsHLYVlUJ2JHHAChpBbG94ATDaS11x7gJOQsZzNEZeuXntufqvR7MYpsumT8JhOvgW9sUfgYRBamF5HarCk2l%2FI6xzgScF28MPFxfdqWavnQ2HDeYZSXk1GJWOZ7oBej9v%2F5ZRKLfBORYcY1TBrMedkyKBlauMc7ZmTl0ZxQJn5jPbKWsmFR7DN9m5NGEuXSisDdLyVqMmuJ3jgLGb03n98JOVy5gYXJxyMv7suDKxtFOEeRazU1rMBjdqiTlJDmeBpfHRHkQcfrhYUd6j9HBbeoaj748barfn6pz3r9Et04gV985P8Vgts0xTldjCgHb3ADFT6GDY0lTDgxN%2FJBjqkAfsFGDwpyCgorh%2BKF%2Fhb84FjAR1JM%2FNKZgN1WK9lH1MZpPR2Wtikd5MP4Ab6Prejue2fpmxf7%2FnDh4R8ERYtI1PujQyQm4XUWievqXFbQhir4%2FIpwVVPsC8ZUkTqAmDoh22OB2ADfbz9vYCz%2BfIQgdbBKVwmsJEMWn9nTTS2lAv4ZPwXrVmH9W3Pw9gQhgNYK%2BEuUrd8q3CPr4Q%2FVREPxMu12l79&X-Amz-Signature=8a744159d54448fa3bb5366e494f9ad734c2cb11f2d13a8532d7b2e1d3e69e4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
