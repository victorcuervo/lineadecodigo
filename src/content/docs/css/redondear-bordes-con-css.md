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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT2QRQCV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBv4Us3uFv%2BlDbM355yaWb%2BghNs4FJtHX2898Lagd9egIgSpWlLe6FthJSW9dPIURLCXFviIq%2F%2FYxCpD3bB%2B1hX7gqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzG1a%2FZ1mtxXI7D2ircA1TNfpc0LlvewcCNUTd%2BPhLXMjXmsLywN2JZYNLBK7vo2SVwoS21N5%2FmGqdyCI%2BqzGuZ1MnI5VhwkEZNuANbEtxIhZiq%2FBglrPyOxJj%2B8%2Bzkat2o2B7x2Xx3KGKGQYAgbYJeyStNc7859tXnR96Fm%2FhwgerG6CX%2FXgz2pSheFUbaby1IJMoiOqAjo%2FRiZljRTdNXKmjHlpwI6NpTOwEarckR0UA0F%2FG7cRTxg1xo1lWDf3IkoxwCPNCcg%2BZyf4kmkIau9ILFcD063M89Llw2ni8jGtxH4P6pDm%2BFiA%2FLAhOilfCbi%2FOqYFGJck2iQfizCTrrPtJlFG%2B2THSTPNyV8FPkhUNlZIZA2byhFhkBujry%2Bs1%2B2UuMosckvYra4iBvXF%2BAwCNYXCLH0KrmB5gFN%2FjhFM2JPlRN0uZZDW7Y4JnyDny3AxyCvaN5L%2BGpKO6c7YeSRHMWpvdxexOlvYa6onNLngCEWnlMFlBtP73azQolDr%2FPDvRtmeNUYDN3YxvNHa1O5c2k%2BabLdwnq5US9giNjvY3Ii84gXmfMktw14MddV2OgenuLIo%2BbWA5NnasinIFD45Vi2UmWgN6uyTj76lL7TxykmXgbo%2BuSxikIr%2B8Z6FN1SbKjeads7HkEMLOZ1ckGOqUB%2BTMblbq7Ltvc66nqrapFHnQ4LBxRWtcK7TbjTyYDx56cQz%2FE%2BSmlvOEMRjklemFW%2BmdGQo4bLItMvOf9upWjg%2BpxS5ScPkSNcHijoYDVs9EtyafACaj8JAaVnMhJK3MP2xMGyWimFP9TawaGxogs%2F%2FbvhcJwtoizpiSezumWIaK9SikYDFhWg70r%2BTHKNI0VpYnWfURAoIc652H0NtR0f7wsdLG3&X-Amz-Signature=fbe0bbac9856d104093a5a2793c44b11a6987b28c4ccc960ffcdfdce9c4b32a6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WT2QRQCV%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T140543Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCBv4Us3uFv%2BlDbM355yaWb%2BghNs4FJtHX2898Lagd9egIgSpWlLe6FthJSW9dPIURLCXFviIq%2F%2FYxCpD3bB%2B1hX7gqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGzG1a%2FZ1mtxXI7D2ircA1TNfpc0LlvewcCNUTd%2BPhLXMjXmsLywN2JZYNLBK7vo2SVwoS21N5%2FmGqdyCI%2BqzGuZ1MnI5VhwkEZNuANbEtxIhZiq%2FBglrPyOxJj%2B8%2Bzkat2o2B7x2Xx3KGKGQYAgbYJeyStNc7859tXnR96Fm%2FhwgerG6CX%2FXgz2pSheFUbaby1IJMoiOqAjo%2FRiZljRTdNXKmjHlpwI6NpTOwEarckR0UA0F%2FG7cRTxg1xo1lWDf3IkoxwCPNCcg%2BZyf4kmkIau9ILFcD063M89Llw2ni8jGtxH4P6pDm%2BFiA%2FLAhOilfCbi%2FOqYFGJck2iQfizCTrrPtJlFG%2B2THSTPNyV8FPkhUNlZIZA2byhFhkBujry%2Bs1%2B2UuMosckvYra4iBvXF%2BAwCNYXCLH0KrmB5gFN%2FjhFM2JPlRN0uZZDW7Y4JnyDny3AxyCvaN5L%2BGpKO6c7YeSRHMWpvdxexOlvYa6onNLngCEWnlMFlBtP73azQolDr%2FPDvRtmeNUYDN3YxvNHa1O5c2k%2BabLdwnq5US9giNjvY3Ii84gXmfMktw14MddV2OgenuLIo%2BbWA5NnasinIFD45Vi2UmWgN6uyTj76lL7TxykmXgbo%2BuSxikIr%2B8Z6FN1SbKjeads7HkEMLOZ1ckGOqUB%2BTMblbq7Ltvc66nqrapFHnQ4LBxRWtcK7TbjTyYDx56cQz%2FE%2BSmlvOEMRjklemFW%2BmdGQo4bLItMvOf9upWjg%2BpxS5ScPkSNcHijoYDVs9EtyafACaj8JAaVnMhJK3MP2xMGyWimFP9TawaGxogs%2F%2FbvhcJwtoizpiSezumWIaK9SikYDFhWg70r%2BTHKNI0VpYnWfURAoIc652H0NtR0f7wsdLG3&X-Amz-Signature=47f1a16981fd8f0b70af1be7e8baf6cd2a7e2f39c7d0244c9e0f6aefbcf3472a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
