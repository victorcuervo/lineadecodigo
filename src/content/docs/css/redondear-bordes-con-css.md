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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZN2PUO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx2X139nUWMbdTkx5mGuvKttTkUOjxncjcYz6K063yJAiBGCiuR%2BZMOyih7d0sVM9rAtXPiK2l2EQbxwpW6RgmZOyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMWkfQaswRcW%2FtpiGnKtwDGQA4X2wJ9wDfOz8j6XUX%2BGGrKuBnzJ9JGI5OqfsdyHl73EsDtKBtDwHXqU7FImAYgox4vRJbgTEDa7jJZ5QGOiLbq7C624Y2r2TFfA%2FUBgDC8%2FykDz%2FYNdyJsBNbcNZQxSUSOTLXyHMka3oh5sR4UxZ9W5aw9DMCqz%2FjPBHJ90ygvBSfJEXB6UofwSFbvvQVGwYCRVmBuwo1xvHgOd1Onu2mAl6WSq9MxUSI6UQpQKCihip88JhDSjhxt8f%2FUkGLAnTzHZYj9IsyN820K7n3wdJDEAiSHIbL1cpox%2BH4qV%2Bgn41SobNcI1RbFtyoiEokwF2ssQ44rL%2BMicK6H6OmDrqhcAHv66SzdVWE5Jicl2BAQQs2WFORyitlazpPvqQiypjuAqDMw8Kd8CK%2FzlTq1TX2P%2BBqOBSpseaGr%2BVbjIwNt%2F1pziM80Tsi5suyeNISre4rJ7fm5rDo3tKkCLb0rB4A9orZMkBtFu0hN2OLabxCERVd9g5kGUcIEdZnYe8%2Fha7V%2BBbHTgjEcMotNHpKgl2bc%2FuWpiPVb1wTv4472pnLS68fstC9bKruL8tk%2B7siDmCHNnuHYDFwTw8CtxJsmnkOZvlIs0o2bb41AYz3Qb4wogHxFg86%2BvI1E%2BownMbNyQY6pgGP6ERju1mvE5b6L9pcSrwZDG586%2BpVp4HvF60AswTCIaCSCri0rvMAQ%2B7%2Fpv3HoHVvQpOpDJ59CIySzpKlhQGhJUh0Zt7%2Fv7kpo8eRtTXd7yIT5bTubL875tX9EFis4d83yBgV02hDwwTmpYu4hZss%2FM3V3eobpUS11o5dZRrfZ1QCr6djuS36N0k3REpPXDTZmhTWAXTsyML3qNxmJmmugCOA%2BX8n&X-Amz-Signature=d4b0be3571a35f0978999e4a9b708f62d8ac1b7084054ec09b47eae8707e33b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WFZN2PUO%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231714Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGx2X139nUWMbdTkx5mGuvKttTkUOjxncjcYz6K063yJAiBGCiuR%2BZMOyih7d0sVM9rAtXPiK2l2EQbxwpW6RgmZOyr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMWkfQaswRcW%2FtpiGnKtwDGQA4X2wJ9wDfOz8j6XUX%2BGGrKuBnzJ9JGI5OqfsdyHl73EsDtKBtDwHXqU7FImAYgox4vRJbgTEDa7jJZ5QGOiLbq7C624Y2r2TFfA%2FUBgDC8%2FykDz%2FYNdyJsBNbcNZQxSUSOTLXyHMka3oh5sR4UxZ9W5aw9DMCqz%2FjPBHJ90ygvBSfJEXB6UofwSFbvvQVGwYCRVmBuwo1xvHgOd1Onu2mAl6WSq9MxUSI6UQpQKCihip88JhDSjhxt8f%2FUkGLAnTzHZYj9IsyN820K7n3wdJDEAiSHIbL1cpox%2BH4qV%2Bgn41SobNcI1RbFtyoiEokwF2ssQ44rL%2BMicK6H6OmDrqhcAHv66SzdVWE5Jicl2BAQQs2WFORyitlazpPvqQiypjuAqDMw8Kd8CK%2FzlTq1TX2P%2BBqOBSpseaGr%2BVbjIwNt%2F1pziM80Tsi5suyeNISre4rJ7fm5rDo3tKkCLb0rB4A9orZMkBtFu0hN2OLabxCERVd9g5kGUcIEdZnYe8%2Fha7V%2BBbHTgjEcMotNHpKgl2bc%2FuWpiPVb1wTv4472pnLS68fstC9bKruL8tk%2B7siDmCHNnuHYDFwTw8CtxJsmnkOZvlIs0o2bb41AYz3Qb4wogHxFg86%2BvI1E%2BownMbNyQY6pgGP6ERju1mvE5b6L9pcSrwZDG586%2BpVp4HvF60AswTCIaCSCri0rvMAQ%2B7%2Fpv3HoHVvQpOpDJ59CIySzpKlhQGhJUh0Zt7%2Fv7kpo8eRtTXd7yIT5bTubL875tX9EFis4d83yBgV02hDwwTmpYu4hZss%2FM3V3eobpUS11o5dZRrfZ1QCr6djuS36N0k3REpPXDTZmhTWAXTsyML3qNxmJmmugCOA%2BX8n&X-Amz-Signature=70427f3e80cee941e9cc810484e8acd8034aef27938ffabe3f10c1fc382c9f02&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
