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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REXSA77N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3jYIWlyDu6AxsA5OfQcj3H0%2F32i9kPru3ASaiV%2ByWWAiBasVt0STO34KA7Oq79%2BtxEhdtjIqQd5H%2FDK8VocfWLkCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpTYI3fNp9xKrjihFKtwDJUGPCYLiyZPeQEYkJB8cmJTMmWV%2BafViJjbqEbZeVcVOuoVNbuRcH2AubAsM0%2B3UAnY%2Fj3ksdjPtFQCPmVMhpoTxc0OaMcwe8I8HhVj2xFnLVWMAFB6kEX7giFcjPR6EvtWLYhnwKwVTlV8e1aSIWbfSuiGh5Z9%2FLXNODPpuh0eEz%2BTb%2BVDUIrUEKJKh%2FC3TuQSNeDB2w%2FrSlrFMenuOogvu5kKZCyFWENryEpRZw6oML0A%2Bq6qUIktLURdwI%2BQRMw%2BVuH3NXK5raopVF%2Bs0%2BFu2GOmqvsvRVPK%2BrjEFEsDSmrwaYLN1z1pFmta8T1JyLK9x1ln7RxUPIWWG2wiDAJTdF00K7ubdJKq7VeFmdWLP1RxV%2BRgv55tObirIuW07tSth0K1liUWMRh0L6xehFzUS3id2%2BbTigMhISrBmV3BfJsGED5jx882srrj3kHTo%2BgbsD7S3p0PNSlQ9TYMkT1by4qBYPZ8%2BCRPqJDZpaEZbUJ%2FhN7FwtU1EW4PvraKGqIenjNZcfVSOF1Hibszuids%2FxbP8eMAfPPIhnoAchBlJo5fnrCAAEk6FLjT8864NsUrr1%2FLO1wFc%2F0qUKoxzYFaZri4h91v91OcG5HxDSdKEDe1PmSag4g676TcwrqDUyQY6pgG899zW3ybgDaOFIgK83lgorbD0a4Yye8MlEi2IMGKg%2FOebNa7DZC2lIDwfn9u2%2Ff8XZYw9GzXcfjUdqNRssJMGwS9IUBzwEA5eBuxbUNuiPaepK%2B7gj1P4I408NbV9erpes2tww1qhDC25qQ%2BSD%2BYkMVl44Pz3G0hjm%2F5LcvW1aIDNSfk5uZiuuT8MB%2FABiz%2BSz0KYy%2Fdc90NyLgSHGX7rR3ieLLaB&X-Amz-Signature=f365f55ba61d5ffa8980a5baa72533163525df176a67b6de7f95098b38c83c8d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REXSA77N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T094359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3jYIWlyDu6AxsA5OfQcj3H0%2F32i9kPru3ASaiV%2ByWWAiBasVt0STO34KA7Oq79%2BtxEhdtjIqQd5H%2FDK8VocfWLkCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpTYI3fNp9xKrjihFKtwDJUGPCYLiyZPeQEYkJB8cmJTMmWV%2BafViJjbqEbZeVcVOuoVNbuRcH2AubAsM0%2B3UAnY%2Fj3ksdjPtFQCPmVMhpoTxc0OaMcwe8I8HhVj2xFnLVWMAFB6kEX7giFcjPR6EvtWLYhnwKwVTlV8e1aSIWbfSuiGh5Z9%2FLXNODPpuh0eEz%2BTb%2BVDUIrUEKJKh%2FC3TuQSNeDB2w%2FrSlrFMenuOogvu5kKZCyFWENryEpRZw6oML0A%2Bq6qUIktLURdwI%2BQRMw%2BVuH3NXK5raopVF%2Bs0%2BFu2GOmqvsvRVPK%2BrjEFEsDSmrwaYLN1z1pFmta8T1JyLK9x1ln7RxUPIWWG2wiDAJTdF00K7ubdJKq7VeFmdWLP1RxV%2BRgv55tObirIuW07tSth0K1liUWMRh0L6xehFzUS3id2%2BbTigMhISrBmV3BfJsGED5jx882srrj3kHTo%2BgbsD7S3p0PNSlQ9TYMkT1by4qBYPZ8%2BCRPqJDZpaEZbUJ%2FhN7FwtU1EW4PvraKGqIenjNZcfVSOF1Hibszuids%2FxbP8eMAfPPIhnoAchBlJo5fnrCAAEk6FLjT8864NsUrr1%2FLO1wFc%2F0qUKoxzYFaZri4h91v91OcG5HxDSdKEDe1PmSag4g676TcwrqDUyQY6pgG899zW3ybgDaOFIgK83lgorbD0a4Yye8MlEi2IMGKg%2FOebNa7DZC2lIDwfn9u2%2Ff8XZYw9GzXcfjUdqNRssJMGwS9IUBzwEA5eBuxbUNuiPaepK%2B7gj1P4I408NbV9erpes2tww1qhDC25qQ%2BSD%2BYkMVl44Pz3G0hjm%2F5LcvW1aIDNSfk5uZiuuT8MB%2FABiz%2BSz0KYy%2Fdc90NyLgSHGX7rR3ieLLaB&X-Amz-Signature=6ffc7954bf468fd1645c7beb37904fcae917d5a26d423cacec5fcfbbbf5f3cd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
