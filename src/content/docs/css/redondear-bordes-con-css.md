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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5PXBDZA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDxLDPXmVl7e2m9phGoOWOntCxFitTEVERRvcENH7M9oAiAIKG2BuSUeVdktXGiTQelnW27Ou9tnGl4ziv4mgX26zir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMsMIAuR26Stcb06myKtwDgM%2FMfdjmufXwtJqcBO65dP69YkPERHUo62YhIV5%2BeA4iMMKX16X4wYskDmdbIm2uomI0Cj%2BD%2FKoX7kX2BmNCVGisc3NU1rWUZ5ZGdj%2FY6SbFArYekxMTVNeByK59ZIfYbgY3LGsaV%2Bno1IJ6KR0PiQ9vXLKRH3j1U%2BbCEvsRIb%2FqZx4QBpYmGdpghStGY%2Bg%2BXsRvy2Jwh2IDUAWSXUM4qwXwRqvtnxqwGqWysBnQIStjrPaNeuGqLC%2FNAKBi742AdsNRYIRCVNl3kDXweU7nQxMB3r6YqCz1qQoLoS%2Fr2UsLsxYHf9UlZsrjfpUi0Ws9Of%2FPmLGUVpYv9%2FoBptqedq38GmaRPwRroqHbRUBca4ThzSegCv1MG1yEENeKfP%2BvldShE7n3MlmHwoIjBz5akodd81EO%2FgTqTG0mblos6X1Ygz6azbqvlzsDMQuPsvOaq075R7hqfPpTu4vwSDWosHRa%2BPMPV%2B59GBtJYFwN1nXd4tdkPkQlHI1G9jLxIYvMTBBTXGt%2F7xvItOodCrL5%2FEAxtXy3oXvRe0GunXvx74qetZesMzaGawaUCRBjAb167AaFguewSzfMG112kt28L6a1XrG3r9LyN7CvjKE3RBGVHJZjm%2FeS6hLDj3owhrTDyQY6pgEYOpVBe3ELS8VJw62388xZtsReosahT6ZuAFLxgtzaz%2ByXa4XI37FN4kSA9nbYuqQ931FrKoWciXOHTgmjZtwh1wHVRNsS%2BCmDWdQWfBgj5ONnODKISZRzGmaumUpzPwJvx7lk%2BUSXlza%2FLaX4BiJCdr4Ch0hFuVEQla83wkwdPlNvqzSBnDZqwE5XOYGMKHXwGaRC1OxcmkyU2BC9nnmoLz8%2BFNJn&X-Amz-Signature=75446ca8a4b0d3537dcb932bb908b8ed5f96b16a90ee8514706d958450400e64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V5PXBDZA%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T011217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCIDxLDPXmVl7e2m9phGoOWOntCxFitTEVERRvcENH7M9oAiAIKG2BuSUeVdktXGiTQelnW27Ou9tnGl4ziv4mgX26zir%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIMsMIAuR26Stcb06myKtwDgM%2FMfdjmufXwtJqcBO65dP69YkPERHUo62YhIV5%2BeA4iMMKX16X4wYskDmdbIm2uomI0Cj%2BD%2FKoX7kX2BmNCVGisc3NU1rWUZ5ZGdj%2FY6SbFArYekxMTVNeByK59ZIfYbgY3LGsaV%2Bno1IJ6KR0PiQ9vXLKRH3j1U%2BbCEvsRIb%2FqZx4QBpYmGdpghStGY%2Bg%2BXsRvy2Jwh2IDUAWSXUM4qwXwRqvtnxqwGqWysBnQIStjrPaNeuGqLC%2FNAKBi742AdsNRYIRCVNl3kDXweU7nQxMB3r6YqCz1qQoLoS%2Fr2UsLsxYHf9UlZsrjfpUi0Ws9Of%2FPmLGUVpYv9%2FoBptqedq38GmaRPwRroqHbRUBca4ThzSegCv1MG1yEENeKfP%2BvldShE7n3MlmHwoIjBz5akodd81EO%2FgTqTG0mblos6X1Ygz6azbqvlzsDMQuPsvOaq075R7hqfPpTu4vwSDWosHRa%2BPMPV%2B59GBtJYFwN1nXd4tdkPkQlHI1G9jLxIYvMTBBTXGt%2F7xvItOodCrL5%2FEAxtXy3oXvRe0GunXvx74qetZesMzaGawaUCRBjAb167AaFguewSzfMG112kt28L6a1XrG3r9LyN7CvjKE3RBGVHJZjm%2FeS6hLDj3owhrTDyQY6pgEYOpVBe3ELS8VJw62388xZtsReosahT6ZuAFLxgtzaz%2ByXa4XI37FN4kSA9nbYuqQ931FrKoWciXOHTgmjZtwh1wHVRNsS%2BCmDWdQWfBgj5ONnODKISZRzGmaumUpzPwJvx7lk%2BUSXlza%2FLaX4BiJCdr4Ch0hFuVEQla83wkwdPlNvqzSBnDZqwE5XOYGMKHXwGaRC1OxcmkyU2BC9nnmoLz8%2BFNJn&X-Amz-Signature=d6d5b7eba454d10e36263cc8a0a2c17c38f397fd0679b745a2e1e319ceb5748b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
