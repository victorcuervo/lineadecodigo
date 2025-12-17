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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XRZKLFR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5oi9r9uxdHGmAdasjK5jaLNA1suKEDZ8MT60Xj7t4sAIgat19gfnP%2BxMBVjUzuAMay9C%2F%2FEpXEhjgkRfw9EBeTXkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNJm93oQ7Y0fJa9EXircAwQchzN4dY74Y8NGKgo%2FNjqf5l%2F2yb92EgxkJ5LRFy7FVNlR3GyyBDLFhwqcM%2FABaBwfA9UWk6Y5fRTKjzKx5wiYgntuJ0P%2Fh0KlQ5dpypV4Zo33eSLuuNnoknEDryNjAHCtTmYrdrNbkPuC7S6ww%2B3hHokCq3jUrd9g6KpDYTKLXR%2BXOd%2BDdt%2B7E%2BEzdh5LBM9qP24Hcsy2eNtRBkpE4mUQsBMU6PizZGhkkZnbwaMZoDCc1HP4ncFk9t2oWe2gFCoYp7fAqzZPd%2FG1xCvp0SMEeKaLBwa%2FNVRUx6YkfqX254JshAGDvwT9cqej66eMArbklLUDRA3piJVNHq0ctdEp97vMhEsrqx3FQMpuRjSN%2FGaZalzHvbydIMIVjmWcPchgSObExhb60AHU8CVpIKWHP1UYTaMfZQ64o1IMvyYby%2Fe0ZP90Yf0cXZVZcvl3nyKpAE1m4ZXT2OVtEmICZ37Xq4Eily6DEWgkHAVeP9zHgawjhAS8dLccf53b9V7PZUkEuppuQ4Dn9j0vCRQ2rd7RoC7uscuXAMNZSmIal%2BMupDcavzPrYAuRmnk9t5cBvjA3UI1aE8NUJ7MvoeDbs59y1SFaxaoC56U%2BSCNO3ybvRAi1jZfoH43YRG%2BTMIarisoGOqUBGm3QecoyXA47lvsYlk1GqmCf2hA4iTuqpfWIYJ7a7LMRc3Ls9WF26AkN23G20zHdfqpbxVInPR0f7RvkpizXhgu3kcEm%2B2BPKZ6CRyqgQm1A1y%2FyraqTCmLRLyXLct6NCjsg%2FrMdbuy%2FAaWheozwG%2FjGhyTb%2FFROype%2BMwci8sj%2BlaBpGny8aeCVg0WVERzGWW7oiDnaDfrDDZv5%2FV7twsIIZlVY&X-Amz-Signature=5e34e5a5ef9388d0264152506ea25dcbfec070c5aeb69ccae14968a88bf804b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662XRZKLFR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T115448Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5oi9r9uxdHGmAdasjK5jaLNA1suKEDZ8MT60Xj7t4sAIgat19gfnP%2BxMBVjUzuAMay9C%2F%2FEpXEhjgkRfw9EBeTXkq%2FwMIfRAAGgw2Mzc0MjMxODM4MDUiDNJm93oQ7Y0fJa9EXircAwQchzN4dY74Y8NGKgo%2FNjqf5l%2F2yb92EgxkJ5LRFy7FVNlR3GyyBDLFhwqcM%2FABaBwfA9UWk6Y5fRTKjzKx5wiYgntuJ0P%2Fh0KlQ5dpypV4Zo33eSLuuNnoknEDryNjAHCtTmYrdrNbkPuC7S6ww%2B3hHokCq3jUrd9g6KpDYTKLXR%2BXOd%2BDdt%2B7E%2BEzdh5LBM9qP24Hcsy2eNtRBkpE4mUQsBMU6PizZGhkkZnbwaMZoDCc1HP4ncFk9t2oWe2gFCoYp7fAqzZPd%2FG1xCvp0SMEeKaLBwa%2FNVRUx6YkfqX254JshAGDvwT9cqej66eMArbklLUDRA3piJVNHq0ctdEp97vMhEsrqx3FQMpuRjSN%2FGaZalzHvbydIMIVjmWcPchgSObExhb60AHU8CVpIKWHP1UYTaMfZQ64o1IMvyYby%2Fe0ZP90Yf0cXZVZcvl3nyKpAE1m4ZXT2OVtEmICZ37Xq4Eily6DEWgkHAVeP9zHgawjhAS8dLccf53b9V7PZUkEuppuQ4Dn9j0vCRQ2rd7RoC7uscuXAMNZSmIal%2BMupDcavzPrYAuRmnk9t5cBvjA3UI1aE8NUJ7MvoeDbs59y1SFaxaoC56U%2BSCNO3ybvRAi1jZfoH43YRG%2BTMIarisoGOqUBGm3QecoyXA47lvsYlk1GqmCf2hA4iTuqpfWIYJ7a7LMRc3Ls9WF26AkN23G20zHdfqpbxVInPR0f7RvkpizXhgu3kcEm%2B2BPKZ6CRyqgQm1A1y%2FyraqTCmLRLyXLct6NCjsg%2FrMdbuy%2FAaWheozwG%2FjGhyTb%2FFROype%2BMwci8sj%2BlaBpGny8aeCVg0WVERzGWW7oiDnaDfrDDZv5%2FV7twsIIZlVY&X-Amz-Signature=a5739cf77e196de35843ca12a4a91bb23da36c4b7760756f3e18cb9cc731f505&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
