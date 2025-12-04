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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAJY5TCY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIDLxuFADRpb8DkevTwe%2FL8bQPVaFSMb6UJLOMNBP5XIgAiBqhea1Tj%2BGnS5PNjbJkheBcHfkqkzFpmGXgc3ywUZElir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM63GXsfgJ1cL0hqEPKtwDYi7FyFWQDAbw7enORYsImvMhf%2FPC6DeNfTVp%2Ff2LcVTLXZvByjzHrl4pn%2BqwRWNZxEtmxn73JnhjcJ2YlqZZjoSAjuifHTcBdMnWEbVmTwvEu7pQAu3Ukk%2FB%2BWG0dvWPP5Ogh76MnPfAXBoF48A4bLTn5jy19y8lJNcJ1wPSHq8UZh5rP0jpq1XEpAdHQq0jWFRGErpHNGquhnlCX%2BNuN5xK5EBPMmOtgaHxPCl8VA9IUKOopuTmWCE%2FGege%2FCc2BzQJSFtahJEkGHr7V3eImcusAH6AeCG9V4JQHchVhfvXp%2FqEux6cPHYFTwXSF7cQYVM2ywr9giO7kGPMsAYcRY6QPR6lqP38xx7suvxEdnzsd4w4G8TqLHiixpA5pDL4tIvXW7nwTLag8cQwDjYpoOw6lyQiwbokbTNeZq%2FR9IamorkcAOTnYDLT%2BjT%2FVH6X2EiIAhsCTCGRRlay76lhzocd6xhQ81rgZF9zF7GlriUGUI%2BF%2FORHjoJJ%2BAjoWMyEV4Ymb0L6yJnwuGg9gNHGeVfoERYt%2BY7FPTj%2FM28P8V5MGhXCbt88H0eMthPpTvx1wY%2BoiykzQvYQusv9Ff2cpxG4dVj6sRA%2BZvO6zgjUezjytgF7n6CRqebgLF0wx77GyQY6pgGl1TkOYCFvwDOdM5inhezXsocSNZAd5me07mkWX5L89bCCuVIh%2F5jQVUauJ82PuyIBkqoek%2FbG3OcoXcDA40J5dTYSFGvHk2CyZindFsYZ1kfVTqrY%2Bu%2F4wVoQB1dTfuV22pDz%2FN%2BGQ2ANC8UXczZPJhdNX3P0hBRFI7P727HznMTnMyDAa%2F9Kd2e9F3vUVWNGahiWHd2Cxghdk6%2BKs9E4cQevICsD&X-Amz-Signature=a5f6479dec6895654ee3cc16460952a9ab68a08e63259d973317ae6bc1110310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TAJY5TCY%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T154910Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJGMEQCIDLxuFADRpb8DkevTwe%2FL8bQPVaFSMb6UJLOMNBP5XIgAiBqhea1Tj%2BGnS5PNjbJkheBcHfkqkzFpmGXgc3ywUZElir%2FAwhIEAAaDDYzNzQyMzE4MzgwNSIM63GXsfgJ1cL0hqEPKtwDYi7FyFWQDAbw7enORYsImvMhf%2FPC6DeNfTVp%2Ff2LcVTLXZvByjzHrl4pn%2BqwRWNZxEtmxn73JnhjcJ2YlqZZjoSAjuifHTcBdMnWEbVmTwvEu7pQAu3Ukk%2FB%2BWG0dvWPP5Ogh76MnPfAXBoF48A4bLTn5jy19y8lJNcJ1wPSHq8UZh5rP0jpq1XEpAdHQq0jWFRGErpHNGquhnlCX%2BNuN5xK5EBPMmOtgaHxPCl8VA9IUKOopuTmWCE%2FGege%2FCc2BzQJSFtahJEkGHr7V3eImcusAH6AeCG9V4JQHchVhfvXp%2FqEux6cPHYFTwXSF7cQYVM2ywr9giO7kGPMsAYcRY6QPR6lqP38xx7suvxEdnzsd4w4G8TqLHiixpA5pDL4tIvXW7nwTLag8cQwDjYpoOw6lyQiwbokbTNeZq%2FR9IamorkcAOTnYDLT%2BjT%2FVH6X2EiIAhsCTCGRRlay76lhzocd6xhQ81rgZF9zF7GlriUGUI%2BF%2FORHjoJJ%2BAjoWMyEV4Ymb0L6yJnwuGg9gNHGeVfoERYt%2BY7FPTj%2FM28P8V5MGhXCbt88H0eMthPpTvx1wY%2BoiykzQvYQusv9Ff2cpxG4dVj6sRA%2BZvO6zgjUezjytgF7n6CRqebgLF0wx77GyQY6pgGl1TkOYCFvwDOdM5inhezXsocSNZAd5me07mkWX5L89bCCuVIh%2F5jQVUauJ82PuyIBkqoek%2FbG3OcoXcDA40J5dTYSFGvHk2CyZindFsYZ1kfVTqrY%2Bu%2F4wVoQB1dTfuV22pDz%2FN%2BGQ2ANC8UXczZPJhdNX3P0hBRFI7P727HznMTnMyDAa%2F9Kd2e9F3vUVWNGahiWHd2Cxghdk6%2BKs9E4cQevICsD&X-Amz-Signature=65467dc74d04f0ba68bd43c9d8bdd0342520da73af52691a883bc9bff3ba968a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
