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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652CC67VV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgClNW3DX6ke3YR%2BPR4862CaRmY2ToPqJc41Z52cfsLAiEAtZso%2BJ9Z3jYLPZX2DeY9oxkODzVbERwD3FlYIIe7Eh8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDG1exYdUhohMP1pHUyrcA8SwF%2B7%2Fkm8a24TYiA3c52mYmD7TWSh15Q8m38Eo%2FO8w9xFKs5ySemQZR0SZlb8Un50YGOUNNuWMA9IRxhxmd2tPdZTp1nscFtVhek3K%2F%2BQ19Ez2g54NlkTq1ZUDzLERiOfPYaJDZ4kPiADoQjqha3qiuJacAXkyeW55WHWwADr9A8zo6arcOKPOhnlBuPVFj%2B1nA%2BU%2BW3odXUjM4yT4%2BlXB%2Bf7U0wt8jf6otWG6OsPfTjq6ZHQ7elpaJae%2BHy6zMKjOQWu3XYWOh4WX%2FCGVt9mp7eRmKDLk%2FH4PShkKLvoWTT67OX4Qhl21wkZwU8iIFVhWAQXVqtARMnP68Y41pThGRy2ptnPbj5mT1MiPEoKOTqB55%2Bd%2FjZgfeXBmb0cAfWDP%2FmxqJlXLErbjQlOnVpd4U5JpqEd%2B1fUHQRfI5uPnwjg3vIiAJMN1oGB5dJjfORG5Usi%2BvWsBPn1N%2FixNUPjnRcGR1WJW5cFRncD4JBovS%2BhCXTTiGpcTqfR9WaZKQfirs7QYaG1epU1hdHUtE40yh8pHE2QqKBEhMtHTRcNCcgwqyD8guPCB%2BXETRemOegOg%2Fu7d9B2ThUB0iNrE6KUkyq%2BZtpI5nXL3TyK700H0IigKrcXAXkcGGMD9MPHwicoGOqUBr4J3lqSFZMA3%2FDUut%2FbOZabt7xJZs2oDDdpEaZVMEhBRMBeJKP%2F4Vcwl%2F5RDHHrQY60DFpjcQbj4DvRsPkDT%2FG6O7rB5xxveQxpFDbonndjtwa4nxUF10SAvJOxDAk0PvIFSDeuW87CfUhjoB66qF6yBDvgOGIi%2FEFcSz%2Fw68Sgj7tfv5%2BryHKBCIWUqT0gTU8gb15bcMW1RTivbwdG6XRAjEWjK&X-Amz-Signature=c1907e068762c073aa8f074b85a80b8371fe34ce22073ff5a8a01cb9e73d8aa0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46652CC67VV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094028Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHgClNW3DX6ke3YR%2BPR4862CaRmY2ToPqJc41Z52cfsLAiEAtZso%2BJ9Z3jYLPZX2DeY9oxkODzVbERwD3FlYIIe7Eh8q%2FwMIexAAGgw2Mzc0MjMxODM4MDUiDG1exYdUhohMP1pHUyrcA8SwF%2B7%2Fkm8a24TYiA3c52mYmD7TWSh15Q8m38Eo%2FO8w9xFKs5ySemQZR0SZlb8Un50YGOUNNuWMA9IRxhxmd2tPdZTp1nscFtVhek3K%2F%2BQ19Ez2g54NlkTq1ZUDzLERiOfPYaJDZ4kPiADoQjqha3qiuJacAXkyeW55WHWwADr9A8zo6arcOKPOhnlBuPVFj%2B1nA%2BU%2BW3odXUjM4yT4%2BlXB%2Bf7U0wt8jf6otWG6OsPfTjq6ZHQ7elpaJae%2BHy6zMKjOQWu3XYWOh4WX%2FCGVt9mp7eRmKDLk%2FH4PShkKLvoWTT67OX4Qhl21wkZwU8iIFVhWAQXVqtARMnP68Y41pThGRy2ptnPbj5mT1MiPEoKOTqB55%2Bd%2FjZgfeXBmb0cAfWDP%2FmxqJlXLErbjQlOnVpd4U5JpqEd%2B1fUHQRfI5uPnwjg3vIiAJMN1oGB5dJjfORG5Usi%2BvWsBPn1N%2FixNUPjnRcGR1WJW5cFRncD4JBovS%2BhCXTTiGpcTqfR9WaZKQfirs7QYaG1epU1hdHUtE40yh8pHE2QqKBEhMtHTRcNCcgwqyD8guPCB%2BXETRemOegOg%2Fu7d9B2ThUB0iNrE6KUkyq%2BZtpI5nXL3TyK700H0IigKrcXAXkcGGMD9MPHwicoGOqUBr4J3lqSFZMA3%2FDUut%2FbOZabt7xJZs2oDDdpEaZVMEhBRMBeJKP%2F4Vcwl%2F5RDHHrQY60DFpjcQbj4DvRsPkDT%2FG6O7rB5xxveQxpFDbonndjtwa4nxUF10SAvJOxDAk0PvIFSDeuW87CfUhjoB66qF6yBDvgOGIi%2FEFcSz%2Fw68Sgj7tfv5%2BryHKBCIWUqT0gTU8gb15bcMW1RTivbwdG6XRAjEWjK&X-Amz-Signature=94f377d98799359debe622493d3122ddc6ac59de81e48c3e08c12cd28286504d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
