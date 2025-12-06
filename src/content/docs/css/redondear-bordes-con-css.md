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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYSOE5B3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9oMbt0vh8VOFCmeACm3xy4vKpGE0CnfeZAM446uiuNQIgLHLRggwyLrKOmgFxkKzo4WWKKZAk4Jf51YH%2Bx4gS4FMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNPstODjQ7fTF%2BAH%2FircA9RzYGbximF0rOMrdatJnzGm5xZ5Li9r1pasDX%2FyBboXftqr2cmY3A5ze5fIZ%2FLDAikVGRrXLnlKNTaVAVJTI2sDIyRo7Q0SmebGWZXRI3fJuL9QwLYCPzegqD2Hbdvi0T1X5CgxC2Y8iEGSi0mr2smWvqx9HhMUA6pPCH%2BAEdCkyzlqh0G9XCiB6ifJaOu49v%2B2kJOUVlH%2FzN9Mc6CI8rU6jCYqy910wLOJgHNwZBc4c04jYlODSu8JgMEIjqZ2f9UWrb0DGZ13gSY84AIQTr1nO12nD0MDkAEXlMC9RwJ2czz7s%2ByzL%2BlzDXNWy4kDAfH9RVrop9ZuGWZ%2BekWuqKpDcFLWOygXxi2fuzUfrDt%2BD8a%2FoUYCInCj%2FMTYrrCj0iKbeJdnNsIfRBvSiT%2BgRWO7dpT%2FNCGy2DakrBPDHikzJGT6G2rLpSilSdNkwONazx5VexLsH4lXLRGiY1xoRSK6zS7HCBbfBrTxUQdNMXAo9nzwbM4D3nZ2q0EzNAfszx9PaM6YBxBPxbWI7NgTLjmDAFM5IzgYaTjzH4SNo4KMXSHro8wjHIAQEsKwlMbvTLkiU1PZ%2BeLpwLVTf3AAGuI2%2BeQ95j8YRAz8ktypyPQGWcRi1nWiits9UaFVMJCn0MkGOqUBwDUZ5BlYgD9DO4oSWLYVW9FpxpJkfzjl%2B58Pr0PvjA4uZKm%2FX0fR4xxLukteucdaY15S%2BqF%2FzBuAxfCN0lvCsk9VThbF4wJwPqfnMFY2p9i2yqw%2FTyWSqy4QKu6jdxHRVVAP5jh6kqtUwCQtoqGZUQNNcvqnDyNjgTCn4KqLPFqpmGJKlGdl14n7GPqBLf7pB5TG0yvYukXH2mlMEfI0xvlLmlcD&X-Amz-Signature=21cdf6e85af46a8d75378ddd0f7c01965f5be0f08b849abd474cbe27cb587854&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYSOE5B3%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC9oMbt0vh8VOFCmeACm3xy4vKpGE0CnfeZAM446uiuNQIgLHLRggwyLrKOmgFxkKzo4WWKKZAk4Jf51YH%2Bx4gS4FMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDNPstODjQ7fTF%2BAH%2FircA9RzYGbximF0rOMrdatJnzGm5xZ5Li9r1pasDX%2FyBboXftqr2cmY3A5ze5fIZ%2FLDAikVGRrXLnlKNTaVAVJTI2sDIyRo7Q0SmebGWZXRI3fJuL9QwLYCPzegqD2Hbdvi0T1X5CgxC2Y8iEGSi0mr2smWvqx9HhMUA6pPCH%2BAEdCkyzlqh0G9XCiB6ifJaOu49v%2B2kJOUVlH%2FzN9Mc6CI8rU6jCYqy910wLOJgHNwZBc4c04jYlODSu8JgMEIjqZ2f9UWrb0DGZ13gSY84AIQTr1nO12nD0MDkAEXlMC9RwJ2czz7s%2ByzL%2BlzDXNWy4kDAfH9RVrop9ZuGWZ%2BekWuqKpDcFLWOygXxi2fuzUfrDt%2BD8a%2FoUYCInCj%2FMTYrrCj0iKbeJdnNsIfRBvSiT%2BgRWO7dpT%2FNCGy2DakrBPDHikzJGT6G2rLpSilSdNkwONazx5VexLsH4lXLRGiY1xoRSK6zS7HCBbfBrTxUQdNMXAo9nzwbM4D3nZ2q0EzNAfszx9PaM6YBxBPxbWI7NgTLjmDAFM5IzgYaTjzH4SNo4KMXSHro8wjHIAQEsKwlMbvTLkiU1PZ%2BeLpwLVTf3AAGuI2%2BeQ95j8YRAz8ktypyPQGWcRi1nWiits9UaFVMJCn0MkGOqUBwDUZ5BlYgD9DO4oSWLYVW9FpxpJkfzjl%2B58Pr0PvjA4uZKm%2FX0fR4xxLukteucdaY15S%2BqF%2FzBuAxfCN0lvCsk9VThbF4wJwPqfnMFY2p9i2yqw%2FTyWSqy4QKu6jdxHRVVAP5jh6kqtUwCQtoqGZUQNNcvqnDyNjgTCn4KqLPFqpmGJKlGdl14n7GPqBLf7pB5TG0yvYukXH2mlMEfI0xvlLmlcD&X-Amz-Signature=5c63dda0675d62041a6568c5f2d43bcb140dab6aa36cda455542585bbc18a9df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
