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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ABGJDWX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN3GQTUzJCZLXR3FGOIPm4KfYYgITvE%2BotVE0XFHYugQIhAKSV6nf7KzSLdHhB%2FCSu1A1UAmRXNu5Mwo5j3NyCs4I6KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEGIVsafg0pPpGO0cq3AM%2BHH3aoTB%2Ff68aXCCN7m7%2BRGAu%2FprwxZiUApP%2FwhBfowqhqu4PV6yL40GUXoU3gtlnBMNQG9T26TuwPIuXMU8UKbu%2FkxGAngFoDfsI%2FvHE4S5DhiDnLi61x0YVlBuFWWmeiOD9OxWx9ivzx0sB280FBXtReLkOVkl3mjusZSEJw76hMhZSMAAWtPbmEE1ZMv6WFscINZsrYR9nUfkh8BVmr8WySLpHIdRQKQA8kITin9%2B4XxdE66qciK5FvR3fLjnvow6Oe%2BCTycy%2Ft0LZ3YtRyd6AZhOmMsdNmaOTaLh85t2GCS7QIIybymhmvsAFdgbhoawEmXqQLuwtsvDUztc2TXu6LtJZEfudlwkUev%2FuQWRJD8oFQXieIShk5SOmth5K%2Fiin1wkSmFne3MVDSV9mjMzX77k%2Bc2DIsVcSy11YKe0Lurt8ejlWvxsdxOIa1k2Plds8xcQSOiObL5Rw1g7qbOz7PauqbBZKOUzu5jNNS9SURRiO7cXqUBZJvZtTfo8zp6tc1QUY5FOzHCdBvFR6Wctn8nWq2EO3UVTMCqGZrUCyblLO1J61pwjxNzXW4jU5YxNkO6MiywgescfoaSDASf9OCjXgQehP2b75Qy3jJCihhTwrBbmK3VVAaTCv%2FtLJBjqkAYMIMKiU833TcA0WqS3YFOhuaTpcIAtA1Ub4ngnBqcqNNYxdiL5lcrQezBRxH0j1fTw3DjSQsyvNqsEJmLnrvOA0vBKyXBUhNPiMRIG2UjNUqUW1qmMw1YEDZENdcsTnWw0e0sl7tWy8J6Ku%2FMvsblQTPrNvdMGrk%2B6JIRrXXjmAESK5cZ2c40JlQHtMpM7vky1%2FfVHuFagJyj5GNMTrLsUE1Hun&X-Amz-Signature=cb7a22623f264eaa619317c04f22d1f3796b14cc9e72347fda3f733478e6d59a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665ABGJDWX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDN3GQTUzJCZLXR3FGOIPm4KfYYgITvE%2BotVE0XFHYugQIhAKSV6nf7KzSLdHhB%2FCSu1A1UAmRXNu5Mwo5j3NyCs4I6KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEGIVsafg0pPpGO0cq3AM%2BHH3aoTB%2Ff68aXCCN7m7%2BRGAu%2FprwxZiUApP%2FwhBfowqhqu4PV6yL40GUXoU3gtlnBMNQG9T26TuwPIuXMU8UKbu%2FkxGAngFoDfsI%2FvHE4S5DhiDnLi61x0YVlBuFWWmeiOD9OxWx9ivzx0sB280FBXtReLkOVkl3mjusZSEJw76hMhZSMAAWtPbmEE1ZMv6WFscINZsrYR9nUfkh8BVmr8WySLpHIdRQKQA8kITin9%2B4XxdE66qciK5FvR3fLjnvow6Oe%2BCTycy%2Ft0LZ3YtRyd6AZhOmMsdNmaOTaLh85t2GCS7QIIybymhmvsAFdgbhoawEmXqQLuwtsvDUztc2TXu6LtJZEfudlwkUev%2FuQWRJD8oFQXieIShk5SOmth5K%2Fiin1wkSmFne3MVDSV9mjMzX77k%2Bc2DIsVcSy11YKe0Lurt8ejlWvxsdxOIa1k2Plds8xcQSOiObL5Rw1g7qbOz7PauqbBZKOUzu5jNNS9SURRiO7cXqUBZJvZtTfo8zp6tc1QUY5FOzHCdBvFR6Wctn8nWq2EO3UVTMCqGZrUCyblLO1J61pwjxNzXW4jU5YxNkO6MiywgescfoaSDASf9OCjXgQehP2b75Qy3jJCihhTwrBbmK3VVAaTCv%2FtLJBjqkAYMIMKiU833TcA0WqS3YFOhuaTpcIAtA1Ub4ngnBqcqNNYxdiL5lcrQezBRxH0j1fTw3DjSQsyvNqsEJmLnrvOA0vBKyXBUhNPiMRIG2UjNUqUW1qmMw1YEDZENdcsTnWw0e0sl7tWy8J6Ku%2FMvsblQTPrNvdMGrk%2B6JIRrXXjmAESK5cZ2c40JlQHtMpM7vky1%2FfVHuFagJyj5GNMTrLsUE1Hun&X-Amz-Signature=35b1b755387c113d3a4067fe5b7f14a6978e4be8aed0e69fe7be36a898e007d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
