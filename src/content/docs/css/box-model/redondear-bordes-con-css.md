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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXHFQ3MS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfo%2Fa7viCDsub2RWlR%2Bye48SqJEyBzSjPn59hQ9WH7nAiBaUH15%2FTn2XujysOd%2F2LkpgwEBuuIL4Px5NtU4jwD5Kyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMdkLacn5yByaSADzbKtwDevsrYxM2kBb8NqV9HSkMtNuk4B6XSL%2BD3zJ8vbWmLiKSkSAmOS7URCSgKGZ1hzlgiiF1UB6Resz8GN9JF3azQLsYBFO1xImCHbDccnl%2Brq4Pgbyan57XKFgdZ9A1yOxPLD7wTyKZXi%2ByBYCZGjkc4ALLp5Pgf%2BhnKOpkn7oRPMCdB99smdQja8L%2FUTTMPmpahKedArN%2BHKl7XsHmkU8XSNfMGCOm2%2BKwLNJE1qc%2FNYV%2B4orD3w7V7%2BdYFEN8lA2q5x2O2OI66IaWbg6esJYWBnq7Z5SFHWxUxO79vxCFF1BlLY25Le0JR%2F1TUMoxLfUDQ7brbiDw7fKPwH6U4ku2aFDnBUzJWdpTEddWsDw5hIZ3D0B%2FDCLaEZRLqOE0Ki6NFMCzVma8zk5mSmqGAHOLswV7Jw1dAqpeu5U0ZaCMKn8StA6Ka0YrC1VHnKBsMM57QXNe8nGGbWDXFDHbH%2BhwA6GGFbjpfyLaRcNyCZNwpXA4RjorLO26ztuGwYwDEFyvzPSWS63xq9LhgCF34gUKOQ1OJE3QgA2nzMqWGUqappxBSHylItsvfQza5ak56k5xHa71Rnx%2BmHrvTa5NQ1PuDc34QEcANwFFKfo3%2FkyuLm%2Fm6LXMBkJGWV2THt4wkYOJygY6pgE0MNqwctYP%2F8NKC0QlBvhSwzchqACx93qK6R5IlNaiFUFKSpq%2BBdFUo2eWu16e5liqdeOMPIjDKqQfy2wYGQVQw1fdAI5dE04S3gwjB3ZsUy%2Fd%2FetKD5cqjAEVRTELWDdk0NDZL8xdS4ExCkma%2BJXn%2FbcYQIFVenI45coeyyeeb4yqtaZbOEppQs3iGCZKX8y2dHTjR48%2FoEUTyEDGxkr62vm0Zp5%2B&X-Amz-Signature=77a4d5ce0f19f60ae4ee3ca889cc0af109485b00cc14f1f0bf92d7be3e6545fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXHFQ3MS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDfo%2Fa7viCDsub2RWlR%2Bye48SqJEyBzSjPn59hQ9WH7nAiBaUH15%2FTn2XujysOd%2F2LkpgwEBuuIL4Px5NtU4jwD5Kyr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMdkLacn5yByaSADzbKtwDevsrYxM2kBb8NqV9HSkMtNuk4B6XSL%2BD3zJ8vbWmLiKSkSAmOS7URCSgKGZ1hzlgiiF1UB6Resz8GN9JF3azQLsYBFO1xImCHbDccnl%2Brq4Pgbyan57XKFgdZ9A1yOxPLD7wTyKZXi%2ByBYCZGjkc4ALLp5Pgf%2BhnKOpkn7oRPMCdB99smdQja8L%2FUTTMPmpahKedArN%2BHKl7XsHmkU8XSNfMGCOm2%2BKwLNJE1qc%2FNYV%2B4orD3w7V7%2BdYFEN8lA2q5x2O2OI66IaWbg6esJYWBnq7Z5SFHWxUxO79vxCFF1BlLY25Le0JR%2F1TUMoxLfUDQ7brbiDw7fKPwH6U4ku2aFDnBUzJWdpTEddWsDw5hIZ3D0B%2FDCLaEZRLqOE0Ki6NFMCzVma8zk5mSmqGAHOLswV7Jw1dAqpeu5U0ZaCMKn8StA6Ka0YrC1VHnKBsMM57QXNe8nGGbWDXFDHbH%2BhwA6GGFbjpfyLaRcNyCZNwpXA4RjorLO26ztuGwYwDEFyvzPSWS63xq9LhgCF34gUKOQ1OJE3QgA2nzMqWGUqappxBSHylItsvfQza5ak56k5xHa71Rnx%2BmHrvTa5NQ1PuDc34QEcANwFFKfo3%2FkyuLm%2Fm6LXMBkJGWV2THt4wkYOJygY6pgE0MNqwctYP%2F8NKC0QlBvhSwzchqACx93qK6R5IlNaiFUFKSpq%2BBdFUo2eWu16e5liqdeOMPIjDKqQfy2wYGQVQw1fdAI5dE04S3gwjB3ZsUy%2Fd%2FetKD5cqjAEVRTELWDdk0NDZL8xdS4ExCkma%2BJXn%2FbcYQIFVenI45coeyyeeb4yqtaZbOEppQs3iGCZKX8y2dHTjR48%2FoEUTyEDGxkr62vm0Zp5%2B&X-Amz-Signature=ff7826ef9aabe5a06bf4f0f66bd78678987201fea16c962dbad8e1ae21e0eb38&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
