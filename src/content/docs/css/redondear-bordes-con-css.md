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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NDLTGDX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDlTnxV6dh3RBJgffld56OamfiGRTEEOytz8XM3F3jDswIgNJD23pHRdHJbWOj8X3spf9pYP6UkbYi%2BByH35Ha7RC0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMvj0jKMDFDEq%2FGcKyrcAzde%2Fb7lpzLPPtJvyFWWZpVG8mC%2F%2FUqmDLEWWdgAO9DvYbKGjvMCqv%2BkBH2UAS3TRoqzj2lhTrxM61nHuPzkEJn0wNkF8iMGI36DLSGXp9alWyUC2sP%2B0UKoPm%2BKTDYfJ%2B3MMKA%2BaCw6ZXV2To92yAc1SS56tjf7%2BmhWbKofNNPAHepTTe8pf7G3NmqPLvfX0Z4MmPz5pUM5fpAbxKRZYT%2FPOkYk8yaxh4Jmy%2BHJWe4Lda8riul8Ctp7225EDaL2xLGcQ7u40BF0%2FFXqZWRwUjCMfk2QLfiFujsMrJDvnSx37Fsx8VJaBoJOyX8qTv0nYVj8xBlvEHlJeAdflb3WYFN9AuNwDmcsucRT8Zj3ky9ZVWat6dEr1Xf1FPMvlXsELv1Xk3ct9GChzJmjBnoFtb8ITiOeA9dtFHfeGGXuzRIQDyyL803LTkIEGXdRSQeaN0NVRcnAzKaCMzpZtTo%2B%2B%2FZRdWo0atyYfypt%2BH%2F6nUjLfcOxMlSf8QJ1mjPP4MaK5ognaD42VLkXrAOiNNwO1Tjuk43J0cwKmDprnBpZ0iutzs6EC6Xoe3VQoykD50WSbNjEoGsqenVEiD8aFBQvLiRXBO9EU7sFRJGyUGfj%2Bz8kni3l4FxKPvevF%2FlTMMiRxMkGOqUBYSMOzOHWLCrRes4wax3JGkr99I6nvTDFK6McalCEGj0w9cr1zI5gXDsZjRFOYJGtx15rcOPwDSVpvabkBCn%2FKT15060gUoD1di693Zg6K8%2B2hfVBdFYVks%2FkJcjwrYeH4VeTrSfMg4cCjpVCP0KA3whrVfgbWX51qVEfEBMWLBJ%2BlK0hBLGtTnTehg8HDYJq1yf0w6liaNG9n1pTGjOONUuG8I3M&X-Amz-Signature=b35ceed6ef25dce0574bff71e51a1ba6affe9b202aac7e4cb12b1f76dcf45b14&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NDLTGDX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T043112Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIQDlTnxV6dh3RBJgffld56OamfiGRTEEOytz8XM3F3jDswIgNJD23pHRdHJbWOj8X3spf9pYP6UkbYi%2BByH35Ha7RC0q%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDMvj0jKMDFDEq%2FGcKyrcAzde%2Fb7lpzLPPtJvyFWWZpVG8mC%2F%2FUqmDLEWWdgAO9DvYbKGjvMCqv%2BkBH2UAS3TRoqzj2lhTrxM61nHuPzkEJn0wNkF8iMGI36DLSGXp9alWyUC2sP%2B0UKoPm%2BKTDYfJ%2B3MMKA%2BaCw6ZXV2To92yAc1SS56tjf7%2BmhWbKofNNPAHepTTe8pf7G3NmqPLvfX0Z4MmPz5pUM5fpAbxKRZYT%2FPOkYk8yaxh4Jmy%2BHJWe4Lda8riul8Ctp7225EDaL2xLGcQ7u40BF0%2FFXqZWRwUjCMfk2QLfiFujsMrJDvnSx37Fsx8VJaBoJOyX8qTv0nYVj8xBlvEHlJeAdflb3WYFN9AuNwDmcsucRT8Zj3ky9ZVWat6dEr1Xf1FPMvlXsELv1Xk3ct9GChzJmjBnoFtb8ITiOeA9dtFHfeGGXuzRIQDyyL803LTkIEGXdRSQeaN0NVRcnAzKaCMzpZtTo%2B%2B%2FZRdWo0atyYfypt%2BH%2F6nUjLfcOxMlSf8QJ1mjPP4MaK5ognaD42VLkXrAOiNNwO1Tjuk43J0cwKmDprnBpZ0iutzs6EC6Xoe3VQoykD50WSbNjEoGsqenVEiD8aFBQvLiRXBO9EU7sFRJGyUGfj%2Bz8kni3l4FxKPvevF%2FlTMMiRxMkGOqUBYSMOzOHWLCrRes4wax3JGkr99I6nvTDFK6McalCEGj0w9cr1zI5gXDsZjRFOYJGtx15rcOPwDSVpvabkBCn%2FKT15060gUoD1di693Zg6K8%2B2hfVBdFYVks%2FkJcjwrYeH4VeTrSfMg4cCjpVCP0KA3whrVfgbWX51qVEfEBMWLBJ%2BlK0hBLGtTnTehg8HDYJq1yf0w6liaNG9n1pTGjOONUuG8I3M&X-Amz-Signature=f9d47bb2704d2e00854597a96c04382e37829652617080578efe083f7d2e7cc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
