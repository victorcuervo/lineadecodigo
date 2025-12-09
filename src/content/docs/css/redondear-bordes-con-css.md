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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFCOESN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKYD%2BYVCRm%2FqOTwg90juXzbbC2yK5JfnW70enybEH88AiEAsCIyZS8MkRnwyq7u7%2BY%2BxVucZpej7SchFcnc3y3X%2BWQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBDAL0CPbgIZl79HCrcA26zLJ6WXBSkf%2Be0%2BQylC0hQBhnnFIURGbyOtfpibrMOIsSpVph0VzK30IgveE5HRR2mxGKF6wKvwICCuVxO9fLi5W%2FIiyJkvzY2ELbzaCWNSCrmsdVzNypFuJ1HZwo75qHxKS63CDTuD8nX6XywhB7Bg%2BNTF7p4UKoVd%2FTKRX32Cwu3Qxzh9C64Xc8jtZtnSHBIi0i%2BQkz7ZaQfY7vSrDxRYRpDChSV6xHF39168RF35IDoU10kqVlPBHe684pcNEOtPgIhx7VbPDxq3wcMhLPG68Db%2FGxqhCVFurCqg3AMNa79XgDVfFNNJkYTjA3CwsTP0%2FUsokeKxLb8HCENYfNuDJhGr30%2Bn7IRWXNc9%2BumAYrlvoAgJePgYpk562vC%2Bua%2Bqym%2F%2FAKwtcj6u3PkTsHPuY0GrhCSwEbuGf27MW5nuqH71qecRzz%2BDBHsynQ8JV%2FP7F903qf44rEGn3V22vTEkdJhwMEqhqJlyehaigZ0qrJfgsEQlh2B%2Bqjhwv%2BoAfk77NyVFFXrGWh6jE0JBNjt0U8DewOukFKBTS5dVdCqBAtdsy3KnYnWnzTMql26M7FYNFtv%2Bc8hreguIWU18m6tuOhBAy1mG4raqcu7OJq%2FPR0DLI2KtjHFpSvCMIGP3skGOqUBSsILKIAoVuim2JSL7SxikaEHATQMHv3sx53Ez4e8hTw8Y9lFqxw5%2Bb%2F8FdTCyn74CfqB%2FFMeJbRWgrm6dmu9rVmjPDI%2Bgktyt8688UBKSvGalzwMuQhaKBPKqJ2WfUwzq%2F78wHj3NigOv8lU%2FgQ9Us05PDzLQTh6aTaHZ4GlpJ5SzGm%2FtZiOLH9%2BugavgCqkvaTK0y4Hok6GWFsdNnrspuLEiqMN&X-Amz-Signature=78b3185c98d28705f3be981cc4111e2abedb869fcabc0dad46d197a54fe4321d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRFCOESN%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024940Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHKYD%2BYVCRm%2FqOTwg90juXzbbC2yK5JfnW70enybEH88AiEAsCIyZS8MkRnwyq7u7%2BY%2BxVucZpej7SchFcnc3y3X%2BWQqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBBDAL0CPbgIZl79HCrcA26zLJ6WXBSkf%2Be0%2BQylC0hQBhnnFIURGbyOtfpibrMOIsSpVph0VzK30IgveE5HRR2mxGKF6wKvwICCuVxO9fLi5W%2FIiyJkvzY2ELbzaCWNSCrmsdVzNypFuJ1HZwo75qHxKS63CDTuD8nX6XywhB7Bg%2BNTF7p4UKoVd%2FTKRX32Cwu3Qxzh9C64Xc8jtZtnSHBIi0i%2BQkz7ZaQfY7vSrDxRYRpDChSV6xHF39168RF35IDoU10kqVlPBHe684pcNEOtPgIhx7VbPDxq3wcMhLPG68Db%2FGxqhCVFurCqg3AMNa79XgDVfFNNJkYTjA3CwsTP0%2FUsokeKxLb8HCENYfNuDJhGr30%2Bn7IRWXNc9%2BumAYrlvoAgJePgYpk562vC%2Bua%2Bqym%2F%2FAKwtcj6u3PkTsHPuY0GrhCSwEbuGf27MW5nuqH71qecRzz%2BDBHsynQ8JV%2FP7F903qf44rEGn3V22vTEkdJhwMEqhqJlyehaigZ0qrJfgsEQlh2B%2Bqjhwv%2BoAfk77NyVFFXrGWh6jE0JBNjt0U8DewOukFKBTS5dVdCqBAtdsy3KnYnWnzTMql26M7FYNFtv%2Bc8hreguIWU18m6tuOhBAy1mG4raqcu7OJq%2FPR0DLI2KtjHFpSvCMIGP3skGOqUBSsILKIAoVuim2JSL7SxikaEHATQMHv3sx53Ez4e8hTw8Y9lFqxw5%2Bb%2F8FdTCyn74CfqB%2FFMeJbRWgrm6dmu9rVmjPDI%2Bgktyt8688UBKSvGalzwMuQhaKBPKqJ2WfUwzq%2F78wHj3NigOv8lU%2FgQ9Us05PDzLQTh6aTaHZ4GlpJ5SzGm%2FtZiOLH9%2BugavgCqkvaTK0y4Hok6GWFsdNnrspuLEiqMN&X-Amz-Signature=df8d4039e60ac8aff8dd2e7faca7a203eda2b86f3f87a3656e5520c5c32317e1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
