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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVG2RKOL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfMCC2HdRPWJEG0pKpMCWo2TqqZ78xhVbnoolfFiOiIgIhAIpxCTmnsSrsdB%2FMkkRvIihYPzMD1oVP%2FcklPHCYwH9UKv8DCHYQABoMNjM3NDIzMTgzODA1IgxxkiLyFs7A3OOR4gwq3ANPgMqElvbHJvTrDRHOlZSPBFbW1rhQ4rocJ3kHrIFNCt%2BRQ4dqqs49p57zPz8mLG8DtGAnHdfDcLSZogvPbTutoiPbb4r%2BvBr2cILb%2FiLP2spFO5yJ0Ds2Ylf0NPvY95g6EtZXxTGvdIaUAuavS%2BhtMSltESb4Y47gR6KwXGuBuwYsusBctOS9t8O7vZ2dplPMGKWzKUQCxkpTNnAu8ahrIAUmdxK42UoqVsGQFYeMjF%2FQz%2F7teYOGhrM0t3xIvrcz5xBTfel9h0LjoVp%2BDvJAV%2FtJwxhkaQP4Tt5pSMxpaa%2F%2B29h6lv5nFvyQUeHctPBw6pCblqsRe6u1caiJWQr8N8KgCU2CTMzpVhdeKWTzI3bCI2XfjOGB0h%2B%2B1jEiM3hm6drwbrLYlHsIiyyZNANak8YSDuLZWMbqwTGUY5xatSoYvAYW5A3wn%2B9ytmKddZcLsoRIHzu35Bc0Lw0VkuPZtG9uNksmJZgzXPt8Xt7eJFv5afi3UTvMxe%2BiqlmOcJ6TAt6NvfVW5qvHA2w5pELY4pJKFLRsNUn%2FpPJW68zDCqKSRjgLg%2F5Z7W4F7gQOIuzV3hjufUpxnGSljP8Ve23INXTwZvjCR3jn%2BryI5WgpX6yOaLqdp0PshFhZRzCo6YjKBjqkAdWF9OEJKTWvBklFaLnDZXESpGAkh%2FIYpH1djFhBl9GxI%2BPJp87pEcCEEJ2%2Fx6GKqV6aUZvUqg4A%2FRVgrL95cWa%2BGfZ6Ptjwib9BvRTs8ovHyFb3Q9Vm8CCACGA5rakyo6cZO5nRM%2BuXt67rtZLuHvoSQPxK6Y9eXUcYdHRFTOLzre4VhSDvjv6VwzbXh6vcPWy8QC%2FbRHs4xyv8OvnQvE2asYWW&X-Amz-Signature=7a94850ea50bfe14ace91c9029c9d1c584de8dfb17154d7a530e5ae4c8a3a0f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VVG2RKOL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T045229Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfMCC2HdRPWJEG0pKpMCWo2TqqZ78xhVbnoolfFiOiIgIhAIpxCTmnsSrsdB%2FMkkRvIihYPzMD1oVP%2FcklPHCYwH9UKv8DCHYQABoMNjM3NDIzMTgzODA1IgxxkiLyFs7A3OOR4gwq3ANPgMqElvbHJvTrDRHOlZSPBFbW1rhQ4rocJ3kHrIFNCt%2BRQ4dqqs49p57zPz8mLG8DtGAnHdfDcLSZogvPbTutoiPbb4r%2BvBr2cILb%2FiLP2spFO5yJ0Ds2Ylf0NPvY95g6EtZXxTGvdIaUAuavS%2BhtMSltESb4Y47gR6KwXGuBuwYsusBctOS9t8O7vZ2dplPMGKWzKUQCxkpTNnAu8ahrIAUmdxK42UoqVsGQFYeMjF%2FQz%2F7teYOGhrM0t3xIvrcz5xBTfel9h0LjoVp%2BDvJAV%2FtJwxhkaQP4Tt5pSMxpaa%2F%2B29h6lv5nFvyQUeHctPBw6pCblqsRe6u1caiJWQr8N8KgCU2CTMzpVhdeKWTzI3bCI2XfjOGB0h%2B%2B1jEiM3hm6drwbrLYlHsIiyyZNANak8YSDuLZWMbqwTGUY5xatSoYvAYW5A3wn%2B9ytmKddZcLsoRIHzu35Bc0Lw0VkuPZtG9uNksmJZgzXPt8Xt7eJFv5afi3UTvMxe%2BiqlmOcJ6TAt6NvfVW5qvHA2w5pELY4pJKFLRsNUn%2FpPJW68zDCqKSRjgLg%2F5Z7W4F7gQOIuzV3hjufUpxnGSljP8Ve23INXTwZvjCR3jn%2BryI5WgpX6yOaLqdp0PshFhZRzCo6YjKBjqkAdWF9OEJKTWvBklFaLnDZXESpGAkh%2FIYpH1djFhBl9GxI%2BPJp87pEcCEEJ2%2Fx6GKqV6aUZvUqg4A%2FRVgrL95cWa%2BGfZ6Ptjwib9BvRTs8ovHyFb3Q9Vm8CCACGA5rakyo6cZO5nRM%2BuXt67rtZLuHvoSQPxK6Y9eXUcYdHRFTOLzre4VhSDvjv6VwzbXh6vcPWy8QC%2FbRHs4xyv8OvnQvE2asYWW&X-Amz-Signature=c15762ed77131c00bfe52995722b19369ed389f0b8df26bf31b58a02bc6d7f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
