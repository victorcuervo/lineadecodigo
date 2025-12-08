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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Q546W7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDciMT1swunwB6zmnr9rZov0eFAbKqYaW8X8%2Fu0dP6ACwIgNZLEGWlUQ%2FttcYsmxzoTMZd3Ml845OYBnLnSi0uh%2FokqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4XDdIJJ9vYItkGzSrcA%2FxYSHR1XjVZjEaCFDIDcWDjyv5O9LE%2FaLQm1icRVzL6yyQC43WK2MVSIBpOcCY0gVzZMagHVhGtdPx8VNk47l1871U20VYN4RknJfiW2jsGn3em01u%2F5a1evQGJJWLCmZEH%2FyfZFe6zPdWu2zdKEmJxxMRP6xhcYWqg%2BFA4oXqWGLkT23Z4ZwmrFCDSgK3KXL9ydboPbxaOyvtoC7J1zgTq7dS6h5UGtOA7R%2By1o6BUWz%2FAc%2B00Av%2F0qIehr2XpLxpViAOA62P%2B2KMPxYXT7VBqBnNwtHxQsr3GgXoTNCRC1jp5UbvZ9iklm%2FEHO3eO%2BrRbb4yUh6%2BOa8gc62CQBFoQP75UKcxtwEEWGex2rssBkKMzVVD1Cygpx9MCMNJsLy4uq4inuKVTPPJMTQClAzudLVUwYD3Ja%2FloIGi%2BO34wvL464E%2F4X8EROFZsjNwKwuMzVoXnYMiu4plZ1SBXnjiIeTg09bvFScY5sj9bmHRzSkpOHzT3OsMVCs07sJk0z5hF8878AWdW4i2%2FJh%2FSUcx5b8p6ou06LchwZkpTljdSMmqN69bO0ChtRNIIJ1AGZ9ME01VuExw6XhiM70qfhycgq3xhjCe%2BX8IbjvDtxXCcxJLjcCQKL3Q90iErMIqA3ckGOqUBxkqUw8UM0OEm0y2NVM4HGBwQJiGX996m0woHm06ZnPmU7GYroHicgKoEa9MD8dnfaM8ApXPrItx04KTBmWI%2BcQamIbvQZIPefJ5vsRNNrqGzUmCALZ%2F0f02eqLu8pWaYLZzgYMOmx4csFQ6Z05W2O36it23EoDBvxFenPHces7s0ncwPsTd74COnue%2BdXOfRoK%2FYQ59mF43q%2F3JwjbwrZpsEjix4&X-Amz-Signature=a4f0665fb774e072380b60304025206d125d1bbf5ee9badec60db959e8fe4a61&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X7Q546W7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T215305Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDciMT1swunwB6zmnr9rZov0eFAbKqYaW8X8%2Fu0dP6ACwIgNZLEGWlUQ%2FttcYsmxzoTMZd3Ml845OYBnLnSi0uh%2FokqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG4XDdIJJ9vYItkGzSrcA%2FxYSHR1XjVZjEaCFDIDcWDjyv5O9LE%2FaLQm1icRVzL6yyQC43WK2MVSIBpOcCY0gVzZMagHVhGtdPx8VNk47l1871U20VYN4RknJfiW2jsGn3em01u%2F5a1evQGJJWLCmZEH%2FyfZFe6zPdWu2zdKEmJxxMRP6xhcYWqg%2BFA4oXqWGLkT23Z4ZwmrFCDSgK3KXL9ydboPbxaOyvtoC7J1zgTq7dS6h5UGtOA7R%2By1o6BUWz%2FAc%2B00Av%2F0qIehr2XpLxpViAOA62P%2B2KMPxYXT7VBqBnNwtHxQsr3GgXoTNCRC1jp5UbvZ9iklm%2FEHO3eO%2BrRbb4yUh6%2BOa8gc62CQBFoQP75UKcxtwEEWGex2rssBkKMzVVD1Cygpx9MCMNJsLy4uq4inuKVTPPJMTQClAzudLVUwYD3Ja%2FloIGi%2BO34wvL464E%2F4X8EROFZsjNwKwuMzVoXnYMiu4plZ1SBXnjiIeTg09bvFScY5sj9bmHRzSkpOHzT3OsMVCs07sJk0z5hF8878AWdW4i2%2FJh%2FSUcx5b8p6ou06LchwZkpTljdSMmqN69bO0ChtRNIIJ1AGZ9ME01VuExw6XhiM70qfhycgq3xhjCe%2BX8IbjvDtxXCcxJLjcCQKL3Q90iErMIqA3ckGOqUBxkqUw8UM0OEm0y2NVM4HGBwQJiGX996m0woHm06ZnPmU7GYroHicgKoEa9MD8dnfaM8ApXPrItx04KTBmWI%2BcQamIbvQZIPefJ5vsRNNrqGzUmCALZ%2F0f02eqLu8pWaYLZzgYMOmx4csFQ6Z05W2O36it23EoDBvxFenPHces7s0ncwPsTd74COnue%2BdXOfRoK%2FYQ59mF43q%2F3JwjbwrZpsEjix4&X-Amz-Signature=210431e6c6d9d7ceb43f1f8f5c251aa9a95b59c2ff0a4937b83ad24bf68818fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
