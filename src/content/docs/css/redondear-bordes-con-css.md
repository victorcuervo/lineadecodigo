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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUYCQ4CM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIA0AcLCqNC1H9FkHqjXTbO1tuYL6o4wDoin%2BPtooL%2FZbAiB7WrlqCHfey6D41b7lGvYnYoXnT4GCfUtFnDgao0kdEir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM2DCRC4qs5Djx%2FeOBKtwDcBcRfthk%2BzA9VHuyABXQzPnTdPD2g7YTngWuJT%2BHNTcyTBBX7doPgu%2Fj2ruyuVbaEJeci71UKQTHpGvgyYLPOvfRNZImIdSThmeKgCdeZU57abIG3cK%2B5p3xp%2ByjF4kL2uTHawNocvVh%2BBkORQjrJgZ60V%2F8%2FwslYCLGpMcW39hbLFjD1ad8efyJu7aewZkQQ7i9gBbKaaAnovapzlNgwQZwJQ7DoJ96jcb3cU08wIkebLxhCSaca%2FKWOfpeMmvzCrZxmysm3s4sBtzrJMJn1o9lWVs2l3uuKyC%2FV7NLXUEbEpFXJ7CR2nthn5wgQO1Vl%2B6JPgoIuf0EpYYqXvamtDECEOFVpA4zaaFwAtwEfoS%2FInHqLS2zDXkeuto0BWqlhrKMI0mEjo3QNaXaHIz45j6Eu6DIUzKFS7U04LsxDwjPmJQMdZRqpGO5wFQxNRv2f6OhtW%2Fw6PKY7AzN4eB3RxzVblHezQSh28FToUgPTM79po2DCjaLJSPEm6ToC0M9h2egjbsgaVnXC3qhZV9LNE8Z7XmnavwiXNVrDqcW2tU8V42mNa9a6SK2WHd3LaYZhWGCLYL7PzmJvr9l0UfvbqlYb%2Fz1YH8vnff4D1NYtSp9YWPvaG%2FTJMCIjwQwzIPGyQY6pgEhrZ7CxYpDuKW9V5kV2NQu%2FZseCpR%2FLDPLXK3J2tubUarsyPhdY%2FDb9tX7gBzq2qSpe3TEacBqnopVyuQWSaiMtSvTQ3J21aAj4eOgqpFmjX786w0UolLz4B2HKixGrLqlh5%2BbIttTkfMInlZ3W35uEQMkve1p0juIVXgx9vL5djJ%2FY22vuEpfCSWONAoJoMJN1uw%2Bh18qIdMBm5fXV2hyuPyPq6QC&X-Amz-Signature=72120e808cecef6cba8aa96e6bfaa53995b1eb30ddee91b3ae006687c40fb8c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YUYCQ4CM%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T130501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIA0AcLCqNC1H9FkHqjXTbO1tuYL6o4wDoin%2BPtooL%2FZbAiB7WrlqCHfey6D41b7lGvYnYoXnT4GCfUtFnDgao0kdEir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM2DCRC4qs5Djx%2FeOBKtwDcBcRfthk%2BzA9VHuyABXQzPnTdPD2g7YTngWuJT%2BHNTcyTBBX7doPgu%2Fj2ruyuVbaEJeci71UKQTHpGvgyYLPOvfRNZImIdSThmeKgCdeZU57abIG3cK%2B5p3xp%2ByjF4kL2uTHawNocvVh%2BBkORQjrJgZ60V%2F8%2FwslYCLGpMcW39hbLFjD1ad8efyJu7aewZkQQ7i9gBbKaaAnovapzlNgwQZwJQ7DoJ96jcb3cU08wIkebLxhCSaca%2FKWOfpeMmvzCrZxmysm3s4sBtzrJMJn1o9lWVs2l3uuKyC%2FV7NLXUEbEpFXJ7CR2nthn5wgQO1Vl%2B6JPgoIuf0EpYYqXvamtDECEOFVpA4zaaFwAtwEfoS%2FInHqLS2zDXkeuto0BWqlhrKMI0mEjo3QNaXaHIz45j6Eu6DIUzKFS7U04LsxDwjPmJQMdZRqpGO5wFQxNRv2f6OhtW%2Fw6PKY7AzN4eB3RxzVblHezQSh28FToUgPTM79po2DCjaLJSPEm6ToC0M9h2egjbsgaVnXC3qhZV9LNE8Z7XmnavwiXNVrDqcW2tU8V42mNa9a6SK2WHd3LaYZhWGCLYL7PzmJvr9l0UfvbqlYb%2Fz1YH8vnff4D1NYtSp9YWPvaG%2FTJMCIjwQwzIPGyQY6pgEhrZ7CxYpDuKW9V5kV2NQu%2FZseCpR%2FLDPLXK3J2tubUarsyPhdY%2FDb9tX7gBzq2qSpe3TEacBqnopVyuQWSaiMtSvTQ3J21aAj4eOgqpFmjX786w0UolLz4B2HKixGrLqlh5%2BbIttTkfMInlZ3W35uEQMkve1p0juIVXgx9vL5djJ%2FY22vuEpfCSWONAoJoMJN1uw%2Bh18qIdMBm5fXV2hyuPyPq6QC&X-Amz-Signature=4dafa40d98ccf6840859746fe400fd165e7071241300b471c643a47e848de411&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
