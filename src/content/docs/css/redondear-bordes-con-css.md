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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JN4SKOZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJvuTLMCzHjrqIo0DbPYtGWcsl%2FCvCtT0ce6BxWgN7gIgMq9XUe4IERh7p8aOIGnLBWraNIABQPDg3oW47Xt7aM0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzevOe0l0aI%2FDQWJircA5WjfdnZqrV6TcxIpejt37ViH4LnEKHrCuKPJgU4RCm6KTBpT%2FQYcYwBvBcmgIvG%2BmxdPzZ7SVuLK8X0P6ztixKCcmwPWBn2useIo97FFi%2BgaL1T9OBmmIyfgUl7cwfXFs4DRF7Qlxutg%2FMC7JuuTbp7%2FdSRacnCI3ZIgZ8R%2FaL7QejOWuKgk%2Bp5EUgnO6q5VGNKy2JwpuY7E6Qbf5p1l7hX2ZGQBpHps%2Btpex67conuSfruuOBH8wCztKB0bici6WNXR%2FtwxX%2BjoC1CaOOEZZhMN76T67pUpNDu2t2V68jvDGe8ccpLa2pQrSpGJaMgASFczCxJ6bUq6iGslOIb70blIlA00xOhb4F0K33VDUUTdrRTlMze43zW9DGwhn4TEV285CGURAU%2Fa9V%2BmfrO1reXHp6EcT5hBm%2BfKMoPzz6BULpd7Hc5KC%2F2Fgj0Q5SrLb5Br8kw4BY%2FkfWvlRA4hCjXsmf5KMCj3s%2BX7UgoEehkIqZBWlYHGTQ7wfcojDrTh5pnDHa9g%2Fitj%2BsbAe5q4X88zdIVbrzI8%2BQXc2TO%2BIXvxQ36cXl%2F6J%2FvEkMkmrr4gmA8n5OR%2Bwi7vq1tgZd9qrt7vN5p7n39OjScVGpbVeeoXQu6LlfC2%2FyXgTuJMLPk28kGOqUBHTcF9eFj8SBIl%2Fbdm39hG4Qmv9XrO3GwocvVSlZiX8lN%2FvKMro78iLBGERnri3N40vKm85WK2%2FQVVbs2Vzju7cpgs0J%2BS0xFOt4hZijjCDyiSKhQjaNAuMRE5YQD7%2BbRrKJtuMBAl1MV%2FrpnA4iNh87aE2DTuZVmkKS%2F5uzsc%2FT66Q3r9VISqJKlGPVmXyKcqrLdW%2Fe%2BWOSQPR3mqptFo85k9j7i&X-Amz-Signature=931c50815872d4ffa41337b4fb34d1babdb21287b14a56f372bf4a6afb89f64f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JN4SKOZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T160408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDZJvuTLMCzHjrqIo0DbPYtGWcsl%2FCvCtT0ce6BxWgN7gIgMq9XUe4IERh7p8aOIGnLBWraNIABQPDg3oW47Xt7aM0qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFzevOe0l0aI%2FDQWJircA5WjfdnZqrV6TcxIpejt37ViH4LnEKHrCuKPJgU4RCm6KTBpT%2FQYcYwBvBcmgIvG%2BmxdPzZ7SVuLK8X0P6ztixKCcmwPWBn2useIo97FFi%2BgaL1T9OBmmIyfgUl7cwfXFs4DRF7Qlxutg%2FMC7JuuTbp7%2FdSRacnCI3ZIgZ8R%2FaL7QejOWuKgk%2Bp5EUgnO6q5VGNKy2JwpuY7E6Qbf5p1l7hX2ZGQBpHps%2Btpex67conuSfruuOBH8wCztKB0bici6WNXR%2FtwxX%2BjoC1CaOOEZZhMN76T67pUpNDu2t2V68jvDGe8ccpLa2pQrSpGJaMgASFczCxJ6bUq6iGslOIb70blIlA00xOhb4F0K33VDUUTdrRTlMze43zW9DGwhn4TEV285CGURAU%2Fa9V%2BmfrO1reXHp6EcT5hBm%2BfKMoPzz6BULpd7Hc5KC%2F2Fgj0Q5SrLb5Br8kw4BY%2FkfWvlRA4hCjXsmf5KMCj3s%2BX7UgoEehkIqZBWlYHGTQ7wfcojDrTh5pnDHa9g%2Fitj%2BsbAe5q4X88zdIVbrzI8%2BQXc2TO%2BIXvxQ36cXl%2F6J%2FvEkMkmrr4gmA8n5OR%2Bwi7vq1tgZd9qrt7vN5p7n39OjScVGpbVeeoXQu6LlfC2%2FyXgTuJMLPk28kGOqUBHTcF9eFj8SBIl%2Fbdm39hG4Qmv9XrO3GwocvVSlZiX8lN%2FvKMro78iLBGERnri3N40vKm85WK2%2FQVVbs2Vzju7cpgs0J%2BS0xFOt4hZijjCDyiSKhQjaNAuMRE5YQD7%2BbRrKJtuMBAl1MV%2FrpnA4iNh87aE2DTuZVmkKS%2F5uzsc%2FT66Q3r9VISqJKlGPVmXyKcqrLdW%2Fe%2BWOSQPR3mqptFo85k9j7i&X-Amz-Signature=fcbdabd66d535da01276aa19dbf2999263c545829a57e969ceb4279d6e738d62&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
