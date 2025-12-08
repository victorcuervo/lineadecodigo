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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EGVZC3Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBl1yoJYFOlATjNh4P%2FMSTQyqjdDCMd2ffNUupWgoBLEAiEAw4i0PrtlEw44i%2FZqE3In0wKJQsAAcyPzd3OcHbzvDs4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOefu298KLpsWA26RyrcA%2FkPiZ47yAHr0qERZRpKgSMNrN8uJQd%2BE%2BJZYxL3urYuZvfZSzBfu8Zq1o1bzKUKDFZNfGhe04F9o5tcxtw%2BJWhhg%2BeyZv%2BcRgN2ZEs4ICKy0HGX%2B3Bmc5b8PBzGH%2B%2BXIub%2BEUCfBCz1dI%2Fj%2BGgEWuZXatQQp2g%2BqUHHnorimYqq%2BsQHcG8LKxgNx6ssaxkeScNI1HaIZj9U47Qiqhu7BCfRsIlCGpcGwPDnCArMV4QrSHcStY2STBJPqXhZJFNSCpO7JwLjXBSJNM%2BjFlTAIeWzkJWVuQksBcH4WUYC92%2FUfBFa2wBBjKULQ%2BEmyxzAuKuwgTo7jaEjnkpgjCcEaKMdc96ycOja6xnz96iYnxbpQVFttr407VV2unPf79UFCaw%2BXLTIttMKai%2BAoib%2F7Y8eJFRJ1LY5jl1%2B1VLoiIIqtLifvhYjmU4uzG1XRTpx4xXCTA0fxOluROryNAp2bFKUzwWq7eHA3n3zHLjUB%2FJz3VWOCgwHixoEUGLwT%2FgzcAVsmBmyTbJ%2BFuOq60J3JCNkO2A74i9KwzyIw81HJM7Dzj5EI6z1K6ma9CoeBl47iDL1ssYzWqzyzCt9UgWKWQNatcwzGI7kwrsXhln1W%2FFd4T%2BJkE2Fr0ZaisThMIPt2ckGOqUBvvs8bp15RMLTwQWhfFuuWUyD4yrwKf8PFwvizmmcHtkMQbUeUX5oilKrud7D5ywBNWg3GdYpI6ORwjTwmY5wfxEM0uIRoHaEkr%2F87PuW3L3oH%2FqnHiFGTaAU%2FPSQOM3zC5LBkn4aLC3q77x2dtdbwq2ilC6XWNHqSf30ZzWMDEAkddevVBvkcnhglUNed0xMZM%2F4v0HxfEoDN2oR4AM0gYAUeTjk&X-Amz-Signature=40fff4ff3894cad8aad167479e0690a9dd339a67ba158b8de5cd666f6f1342ec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667EGVZC3Q%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T075000Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBl1yoJYFOlATjNh4P%2FMSTQyqjdDCMd2ffNUupWgoBLEAiEAw4i0PrtlEw44i%2FZqE3In0wKJQsAAcyPzd3OcHbzvDs4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOefu298KLpsWA26RyrcA%2FkPiZ47yAHr0qERZRpKgSMNrN8uJQd%2BE%2BJZYxL3urYuZvfZSzBfu8Zq1o1bzKUKDFZNfGhe04F9o5tcxtw%2BJWhhg%2BeyZv%2BcRgN2ZEs4ICKy0HGX%2B3Bmc5b8PBzGH%2B%2BXIub%2BEUCfBCz1dI%2Fj%2BGgEWuZXatQQp2g%2BqUHHnorimYqq%2BsQHcG8LKxgNx6ssaxkeScNI1HaIZj9U47Qiqhu7BCfRsIlCGpcGwPDnCArMV4QrSHcStY2STBJPqXhZJFNSCpO7JwLjXBSJNM%2BjFlTAIeWzkJWVuQksBcH4WUYC92%2FUfBFa2wBBjKULQ%2BEmyxzAuKuwgTo7jaEjnkpgjCcEaKMdc96ycOja6xnz96iYnxbpQVFttr407VV2unPf79UFCaw%2BXLTIttMKai%2BAoib%2F7Y8eJFRJ1LY5jl1%2B1VLoiIIqtLifvhYjmU4uzG1XRTpx4xXCTA0fxOluROryNAp2bFKUzwWq7eHA3n3zHLjUB%2FJz3VWOCgwHixoEUGLwT%2FgzcAVsmBmyTbJ%2BFuOq60J3JCNkO2A74i9KwzyIw81HJM7Dzj5EI6z1K6ma9CoeBl47iDL1ssYzWqzyzCt9UgWKWQNatcwzGI7kwrsXhln1W%2FFd4T%2BJkE2Fr0ZaisThMIPt2ckGOqUBvvs8bp15RMLTwQWhfFuuWUyD4yrwKf8PFwvizmmcHtkMQbUeUX5oilKrud7D5ywBNWg3GdYpI6ORwjTwmY5wfxEM0uIRoHaEkr%2F87PuW3L3oH%2FqnHiFGTaAU%2FPSQOM3zC5LBkn4aLC3q77x2dtdbwq2ilC6XWNHqSf30ZzWMDEAkddevVBvkcnhglUNed0xMZM%2F4v0HxfEoDN2oR4AM0gYAUeTjk&X-Amz-Signature=b7fe1803b8b90927dea395d2d5c847d3ad1c68a9f6ea5f647e5eb57da74361f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
