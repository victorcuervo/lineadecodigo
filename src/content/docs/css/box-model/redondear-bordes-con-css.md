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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GQNJ2JJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHV4uB5yWIFHSTitk3pKw2JQ00Po9ujdWty4qz%2BWpkO2AiAGCNtENUaAyEpLs6KaVj%2F3I43Sl7AmUQpjSUaA7JZMzCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMvHUvQlcI0fO6GbTeKtwDWJIj1Tg3kyZCYjdta85GvLTH0%2FkhmjZlxhgHzH1FukqRZmlVDNVGQECZYZUZDeda6JsVF1doYDhbpsWAxcLMNgF3oNCm03%2FG%2F07WLBhxpyFLZTweAiKbQNMPydFgY%2B23IVvj1zJ3JLKaaWLHnz6IuwIURIuf%2FW7qp3VN%2F8z28H4690sKG%2FaQEXRUQ1TsvXTg0SwZYw3q61wR0%2FBPJMu9D8Swcoqy7QkbRfwJ1KFA9OTvu1L9JpNSpGE8OYEZZtZuAVWl5w6s9XVf7rc8S71%2B3HQQGZ%2BXOd7%2Fmmyd2C9g%2FUnTW8kt0%2B0jfhT%2BBQYDuwUdXH7JXuskI3N7czCL%2FDjMAqGC8Y%2FO31PgVsIflaCuDDx%2B05rjOpS0ffQ3lKCu0%2FgKYMSFNcMjZNapkDPQ9B2Pod9R3VQwHNjM3yhtBgRNBDQ8X4ATUAza9qSnbkbGEXZLawJnm14qAEcLpmmNGnX959yeP6WYpUCkq35Saps9Bt2BBVeaI3gfs1z55HIyeMjatDWr4QSIrFOYqLs8zZKWqodAAZsOOn90PuKXSCz2tgmp0Bvd3bmpRJP6Ac7BcSkaoiNiu4%2By6qXR6AIClti1t0DyMHXOUiF%2FnilLNAeK8p%2B1pswVx%2B4a4XwMvsIwv%2BmIygY6pgFLbo8vn3vraCVmiWmq5dyc8ZIxUqo8Qg5gkr2gJY3cFsLOz5t13j0IdzOng0qt0AzAudDivgPr4ABLvFSyZh8FObx%2BdRY8uSqVdVUv4ueTRaliR1Ievq9N5XWG%2FGI9%2B2daOlN0LQuyCs11Dy0GPZzqFMzfmMHNPIVjnTEUP0CsO4EYfsSdBggo43Ww6TNZrnfNSbt1UlwaxYJF2806HexnD9K52oR9&X-Amz-Signature=8a4098654b7783ce97481942389df59bc3a490706b3d84000b695cf85debde4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667GQNJ2JJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T052057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHV4uB5yWIFHSTitk3pKw2JQ00Po9ujdWty4qz%2BWpkO2AiAGCNtENUaAyEpLs6KaVj%2F3I43Sl7AmUQpjSUaA7JZMzCr%2FAwh2EAAaDDYzNzQyMzE4MzgwNSIMvHUvQlcI0fO6GbTeKtwDWJIj1Tg3kyZCYjdta85GvLTH0%2FkhmjZlxhgHzH1FukqRZmlVDNVGQECZYZUZDeda6JsVF1doYDhbpsWAxcLMNgF3oNCm03%2FG%2F07WLBhxpyFLZTweAiKbQNMPydFgY%2B23IVvj1zJ3JLKaaWLHnz6IuwIURIuf%2FW7qp3VN%2F8z28H4690sKG%2FaQEXRUQ1TsvXTg0SwZYw3q61wR0%2FBPJMu9D8Swcoqy7QkbRfwJ1KFA9OTvu1L9JpNSpGE8OYEZZtZuAVWl5w6s9XVf7rc8S71%2B3HQQGZ%2BXOd7%2Fmmyd2C9g%2FUnTW8kt0%2B0jfhT%2BBQYDuwUdXH7JXuskI3N7czCL%2FDjMAqGC8Y%2FO31PgVsIflaCuDDx%2B05rjOpS0ffQ3lKCu0%2FgKYMSFNcMjZNapkDPQ9B2Pod9R3VQwHNjM3yhtBgRNBDQ8X4ATUAza9qSnbkbGEXZLawJnm14qAEcLpmmNGnX959yeP6WYpUCkq35Saps9Bt2BBVeaI3gfs1z55HIyeMjatDWr4QSIrFOYqLs8zZKWqodAAZsOOn90PuKXSCz2tgmp0Bvd3bmpRJP6Ac7BcSkaoiNiu4%2By6qXR6AIClti1t0DyMHXOUiF%2FnilLNAeK8p%2B1pswVx%2B4a4XwMvsIwv%2BmIygY6pgFLbo8vn3vraCVmiWmq5dyc8ZIxUqo8Qg5gkr2gJY3cFsLOz5t13j0IdzOng0qt0AzAudDivgPr4ABLvFSyZh8FObx%2BdRY8uSqVdVUv4ueTRaliR1Ievq9N5XWG%2FGI9%2B2daOlN0LQuyCs11Dy0GPZzqFMzfmMHNPIVjnTEUP0CsO4EYfsSdBggo43Ww6TNZrnfNSbt1UlwaxYJF2806HexnD9K52oR9&X-Amz-Signature=2be1025b7639a3d26da08657aaa9f7e4e389d25c00639af4b11b3e80b1d7ec03&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
