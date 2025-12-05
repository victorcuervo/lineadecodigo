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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTBEMXFA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCToxcndC7ndJvBzotbIEqO3u203cW62ZRehcUQSpVo1gIgQHs%2FHq1JdcKVYdYsOq44T2MDZSO%2FDAejQqXoNIiTdJQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDO1JGr5A%2Bwcm1ngheircA8sHhsvJHZ74GyAXPHOs1M3WnOOGZssLVcrygNxl%2BXKQGcB8ekk8vZz%2BAN4CwW%2FXDVyYCMlQqUk7s4VKoeSf9PwYHIzQvg8Z9%2BRblcNg47QOmXD57M2372YB%2FsgZgJeJ034z6xFrTyd%2FXLwOZ15u1nKWJjbu4O%2B7Qtalv7hTtc%2F%2B%2BCRfOGE1vptfC%2F3rmulW2Ivd51ro4wC40cm4FNmC7%2BpqUb2R%2FawgJ6SHcT7OfLLZdX85CG1a4fDloUTGgi0CGhprIQXddMztNYXSa2N12WF7PyBGcr65PZ%2F51%2BIz%2Bcq8NK9w05Ly0cD5tn0rCS%2FkyZuAbbaXH9iXcwMlCsgBdZOx7rjSJISsyKjWyB2T2SkHauDtDQ5%2Bmdb2yFaUBueQ6W2syUD6Tszk06WP4R%2B3YANnI8qfBAKFv0NlIWBHUEe30r87mv%2Fb5b9iv8yawRLrSF5wKH%2FuH41KEmUMptd%2BZJJBIkB8W8cef7Oe669kexKSebKWcmu%2Bw1f6d0HpN8qEd%2BNAxdy3R9IHXpBkPEruVcGSY6xn2op76loYwur4C1o%2FUBDM8KMu2bPVWmDQG7nAcNX6I4zsVS4MszV8jM5r7vUFxCthMYUFlcwSQAgBeMlE3N19VmQJQPXT%2B8tVMJ2MyMkGOqUBtCbSoaMqIzMDDyoDYHqdjz%2FANeGt9G0h9%2BVPhx7P6wsj6Q%2FIVZ8ZwI1pwgnMRP4eNeX4JLzDehl6W7lSDxDQh%2Bqd8vRKmUEASgmTnIhEPjQuN58e%2FZ5%2BnQcvdoyjRZ9OQ6D1PPep7Xrt15V7jGq7YrGcd%2BSuhEQbK27NXnoudRl6R17Ue1fPE9GnHseJPC62dHRRhINi16AuYkgKRCayq5ILUQ3y&X-Amz-Signature=4079ae83db204d1b7c8d8541651119b60b512fb8c301855d1bab2094c94db550&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TTBEMXFA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCToxcndC7ndJvBzotbIEqO3u203cW62ZRehcUQSpVo1gIgQHs%2FHq1JdcKVYdYsOq44T2MDZSO%2FDAejQqXoNIiTdJQq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDO1JGr5A%2Bwcm1ngheircA8sHhsvJHZ74GyAXPHOs1M3WnOOGZssLVcrygNxl%2BXKQGcB8ekk8vZz%2BAN4CwW%2FXDVyYCMlQqUk7s4VKoeSf9PwYHIzQvg8Z9%2BRblcNg47QOmXD57M2372YB%2FsgZgJeJ034z6xFrTyd%2FXLwOZ15u1nKWJjbu4O%2B7Qtalv7hTtc%2F%2B%2BCRfOGE1vptfC%2F3rmulW2Ivd51ro4wC40cm4FNmC7%2BpqUb2R%2FawgJ6SHcT7OfLLZdX85CG1a4fDloUTGgi0CGhprIQXddMztNYXSa2N12WF7PyBGcr65PZ%2F51%2BIz%2Bcq8NK9w05Ly0cD5tn0rCS%2FkyZuAbbaXH9iXcwMlCsgBdZOx7rjSJISsyKjWyB2T2SkHauDtDQ5%2Bmdb2yFaUBueQ6W2syUD6Tszk06WP4R%2B3YANnI8qfBAKFv0NlIWBHUEe30r87mv%2Fb5b9iv8yawRLrSF5wKH%2FuH41KEmUMptd%2BZJJBIkB8W8cef7Oe669kexKSebKWcmu%2Bw1f6d0HpN8qEd%2BNAxdy3R9IHXpBkPEruVcGSY6xn2op76loYwur4C1o%2FUBDM8KMu2bPVWmDQG7nAcNX6I4zsVS4MszV8jM5r7vUFxCthMYUFlcwSQAgBeMlE3N19VmQJQPXT%2B8tVMJ2MyMkGOqUBtCbSoaMqIzMDDyoDYHqdjz%2FANeGt9G0h9%2BVPhx7P6wsj6Q%2FIVZ8ZwI1pwgnMRP4eNeX4JLzDehl6W7lSDxDQh%2Bqd8vRKmUEASgmTnIhEPjQuN58e%2FZ5%2BnQcvdoyjRZ9OQ6D1PPep7Xrt15V7jGq7YrGcd%2BSuhEQbK27NXnoudRl6R17Ue1fPE9GnHseJPC62dHRRhINi16AuYkgKRCayq5ILUQ3y&X-Amz-Signature=f74b96c5499696bd5f58e1489d57fec5344a8f5076b46eadcd02a1ad6816b3dd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
