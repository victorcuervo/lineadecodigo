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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCRDYM2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbvI7%2BaQg4R%2BdSVChFnFkAmUBY%2FCOkQBoK9ySS55KNlAiEAwJTmxQ1ZitLQDVA2y3WVmqxMulgzID1n%2FTYrXd3DwhUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP%2BTa9Ep9N4gLvcAgyrcA0%2FSWjQhc9uomtXQVZrAMaXtKVlcKZMzP2KtXrtzSOsn62ZjMoCK3avSuWTsvtFjDJ2BkpPXWJt%2FtqKjLFlSrxtiRMPzydKsXFrgS3S7M8YZj6wiH9cco%2Fs86IOboWLXiCDa5jYNe1Or6LWFqa1yt2TeWmFT3gxUF7epPJzNi3TDFvDevmeksC02%2FuyG2yUCNNmokutbfWngoqZGs23%2FIWeuyRrUlDGzB9rgatSgJHhMiCG1Bzebxea9uCZRf%2Ba4OWqXvHGa9eiGUW14%2B%2FNcIyOw6yQgKwpc1E55HLOwW94hpBhJNMMLmjaUglt2%2F2lqMe9WZ6WESNye4TKAkCHtJWmFdsIIR4OZWY%2BPMQ%2Bmt7fDuDSY8V0FZbu0F5oybQ1uDpkkMy3reC8YmMg7GuaUKp%2FptWyZiT0bseVXgFYYGEZ8qncjF2Rt49O%2FkB6M1Ady%2Fhev%2BiqLPFFP1BbseQigIKe%2FS4qlJBsWiuvZRiXUZacL%2BOKbJpIVcKoKSmENw2EKaXWcDTfDaie3lI7OS1fdbsH7THCes%2FeiIJfRuA767zJG85HBpB%2BF5GDRw%2B4MjxM3BRrXkZK0E4oTFteqJqEE8B5aB9FnmtND9Ld4dpG0FJuxEZO6JBWdflgIdy2KMP%2Bm0MkGOqUBItdqTiY6oEfYen3S33CvG8QU%2BcosqJ6TUL0SCXc1SZPKucdfYTCGAw%2FhKxvgK2XGl5YVIMJS3boJsUUccp%2FRusYSG3B6n1ZU32hZnXJk%2FRsOZJUVtNdoOexx7GFLTCERMAIim7FhFJfDWr4pC%2FXfneA%2FseIBDN0P%2Bb%2BtwAhhQEBfHeLBJeorAegCJppiE4pKUxES9ZlaYws258x3B%2F%2BI%2FLKAVGu2&X-Amz-Signature=c6bf62255afa91ef637859818cd56c8623b44df295c55184c35f8f84f611cfb5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662JCRDYM2%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T132407Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAbvI7%2BaQg4R%2BdSVChFnFkAmUBY%2FCOkQBoK9ySS55KNlAiEAwJTmxQ1ZitLQDVA2y3WVmqxMulgzID1n%2FTYrXd3DwhUq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDP%2BTa9Ep9N4gLvcAgyrcA0%2FSWjQhc9uomtXQVZrAMaXtKVlcKZMzP2KtXrtzSOsn62ZjMoCK3avSuWTsvtFjDJ2BkpPXWJt%2FtqKjLFlSrxtiRMPzydKsXFrgS3S7M8YZj6wiH9cco%2Fs86IOboWLXiCDa5jYNe1Or6LWFqa1yt2TeWmFT3gxUF7epPJzNi3TDFvDevmeksC02%2FuyG2yUCNNmokutbfWngoqZGs23%2FIWeuyRrUlDGzB9rgatSgJHhMiCG1Bzebxea9uCZRf%2Ba4OWqXvHGa9eiGUW14%2B%2FNcIyOw6yQgKwpc1E55HLOwW94hpBhJNMMLmjaUglt2%2F2lqMe9WZ6WESNye4TKAkCHtJWmFdsIIR4OZWY%2BPMQ%2Bmt7fDuDSY8V0FZbu0F5oybQ1uDpkkMy3reC8YmMg7GuaUKp%2FptWyZiT0bseVXgFYYGEZ8qncjF2Rt49O%2FkB6M1Ady%2Fhev%2BiqLPFFP1BbseQigIKe%2FS4qlJBsWiuvZRiXUZacL%2BOKbJpIVcKoKSmENw2EKaXWcDTfDaie3lI7OS1fdbsH7THCes%2FeiIJfRuA767zJG85HBpB%2BF5GDRw%2B4MjxM3BRrXkZK0E4oTFteqJqEE8B5aB9FnmtND9Ld4dpG0FJuxEZO6JBWdflgIdy2KMP%2Bm0MkGOqUBItdqTiY6oEfYen3S33CvG8QU%2BcosqJ6TUL0SCXc1SZPKucdfYTCGAw%2FhKxvgK2XGl5YVIMJS3boJsUUccp%2FRusYSG3B6n1ZU32hZnXJk%2FRsOZJUVtNdoOexx7GFLTCERMAIim7FhFJfDWr4pC%2FXfneA%2FseIBDN0P%2Bb%2BtwAhhQEBfHeLBJeorAegCJppiE4pKUxES9ZlaYws258x3B%2F%2BI%2FLKAVGu2&X-Amz-Signature=149088b0656311dc3c8132aecf033e6f67db939cbdd26f36e101261e60f424aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
