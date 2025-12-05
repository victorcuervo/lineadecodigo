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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJYOLTQU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T002800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5u68aHubHJxKuXna0LRDsx9gJ5QdkDT6lXKA6ZwixaAIgV8CU9KI%2Btn7Fo0F8HllsYI28hUQJo8m430IbPu4LBfsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMIBNuOzeF8gC4OiQyrcA7NZC3DVQS95H%2BVEQc7NBir13OZNn9tfoEiWczmgyAn1wrkStDQzn9D58k%2BCXVrDjOOxYn9l3nx0BK5%2Fz2mO9bc%2FzMMdjcUtTb9usVGoPUZv3E1zi7DHspKvZmJUeA5dyYfOrCmJznQ866bPk66WqnQ8Mx8PdQGSbmSi4KzNzeOUZn178pJjsDjdfYCD0qu1bGUgzCy%2FvPXHfe8CSVi40onAsCRP5VOExlADivpuqyAD5mMfdYcknBtJJjNAgPJM7YaGzgA1CW77dOxTpvdqgQJSZPnPP7GRuRUX%2FOqh056zPrTu%2Bd8kT9eaRRe4jwLBd8ZMlFhkYR9BL%2BN5%2BV7ZBR9XN6PETtP8iBasxUXtsob5FOVOSnMiVtdlYZKWiOKeT8BpfHrQRUzsASNPWLIO%2BLHydMv7Xr2g%2F5xBJhI6yHotPuheeTfWu2EJ%2FIYmihiazGlygOqe0EyQMPTRCt6RDZf6Is%2BHI5jXQm8crKPqADWhsVqCcIYwB7flCbV8GoSi1q39gfhPrKddLhrQa1PtpG4F37FUTVIA5N%2F%2Bq1IlzOMdQ5YrtuI99jzTWOA5sU4Y6CKt4olQr6WzzcDFjq0XVf%2FA60sqBsruiqRAd3itmNvqRidb9w8sOIUmXAPMMIKMyMkGOqUB5NaI6Fh%2FicGcpQZDgfo1BoVOmJ4opop0evNNvfYPOWMX%2FAND4JepR1w7akARD8cYp3v9dbrsq23HeLc1lWNE0%2FYfQ%2BAFoo7ZU9l02U4jPwEEcEorxbyRm7hAqch3Um0RcQAx74WjOxAP9%2FhghsiaH1UNMKxs64unqgYY76mSTOYQvj%2FlXozfnFh8aaPbVpf%2F%2B4LQNAERuy4ZmWZeC%2Bli4l8wnwjc&X-Amz-Signature=1eaaa83c1bf9b38df96d313c29859fdf60e52965b2dbec63876f4a83bb4f69d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJYOLTQU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T002800Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC5u68aHubHJxKuXna0LRDsx9gJ5QdkDT6lXKA6ZwixaAIgV8CU9KI%2Btn7Fo0F8HllsYI28hUQJo8m430IbPu4LBfsq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDMIBNuOzeF8gC4OiQyrcA7NZC3DVQS95H%2BVEQc7NBir13OZNn9tfoEiWczmgyAn1wrkStDQzn9D58k%2BCXVrDjOOxYn9l3nx0BK5%2Fz2mO9bc%2FzMMdjcUtTb9usVGoPUZv3E1zi7DHspKvZmJUeA5dyYfOrCmJznQ866bPk66WqnQ8Mx8PdQGSbmSi4KzNzeOUZn178pJjsDjdfYCD0qu1bGUgzCy%2FvPXHfe8CSVi40onAsCRP5VOExlADivpuqyAD5mMfdYcknBtJJjNAgPJM7YaGzgA1CW77dOxTpvdqgQJSZPnPP7GRuRUX%2FOqh056zPrTu%2Bd8kT9eaRRe4jwLBd8ZMlFhkYR9BL%2BN5%2BV7ZBR9XN6PETtP8iBasxUXtsob5FOVOSnMiVtdlYZKWiOKeT8BpfHrQRUzsASNPWLIO%2BLHydMv7Xr2g%2F5xBJhI6yHotPuheeTfWu2EJ%2FIYmihiazGlygOqe0EyQMPTRCt6RDZf6Is%2BHI5jXQm8crKPqADWhsVqCcIYwB7flCbV8GoSi1q39gfhPrKddLhrQa1PtpG4F37FUTVIA5N%2F%2Bq1IlzOMdQ5YrtuI99jzTWOA5sU4Y6CKt4olQr6WzzcDFjq0XVf%2FA60sqBsruiqRAd3itmNvqRidb9w8sOIUmXAPMMIKMyMkGOqUB5NaI6Fh%2FicGcpQZDgfo1BoVOmJ4opop0evNNvfYPOWMX%2FAND4JepR1w7akARD8cYp3v9dbrsq23HeLc1lWNE0%2FYfQ%2BAFoo7ZU9l02U4jPwEEcEorxbyRm7hAqch3Um0RcQAx74WjOxAP9%2FhghsiaH1UNMKxs64unqgYY76mSTOYQvj%2FlXozfnFh8aaPbVpf%2F%2B4LQNAERuy4ZmWZeC%2Bli4l8wnwjc&X-Amz-Signature=c18a34a93024f7f66dcc4b2fc327d4dcb156027038c091889d37139ae21129ed&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
