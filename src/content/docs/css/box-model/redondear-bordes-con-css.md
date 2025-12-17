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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYF4QFT2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiniMXsVpitQzXo1r9ms6EfApVXoku1XoCEcD%2FmDV0QAiAZqX5B0EIf74Qo1KZb9ncTYXqNj53s7RrPKdxFBmuNlir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMRmPgSGLwGqRmJmzwKtwDzvLB462w3JWUpnvyUxPcCjlPfEBtQe7nRrNJB6IMzLBXcfrNw8wxSYvQ2leqrWA7Y%2Bn%2BlVNJfVtTqsPmpgiWESMJscFecBPs1DdiRykWDxxNBxNcN3AhT8BkGLVoGT%2F1hDSpBSpiWKYOBIEr%2BUyuQRrO8m7HNzsGlkP3w4DaV5JRsXwU3%2FxAwtZHw8wu7gfERWlLId4pU0wzb02stnhb15tn4rrJpn8mldN8YLmijimqtoHPUafySDUm8JPVoXt%2B%2FgGn69EVVyNE7STUGPINxg24o0g7RpJsr8Qw3%2F0L%2B3Vyywug0wf029s7VyitJQpYdTgEYmhMEgXrgHe%2F1JtXBcpwdS%2FtjJ92K%2FMM8o6Krr8BbEMnM3ViY%2FQ49tfT0ULCZUvFy1g8DVdAaS%2BniN4B8yHRasZnn3P%2B9VkPd0GJxDIU1PVSyvhW3ywdUENedTRU%2BwoVTuOobZ5qz6vksWM1r3qsiHlEAXx%2Frz17KTswfAr%2FuDv2NnfFL9%2B7MBACtXFnGNhWmv8GmwXFhd3B4rUsWJ%2BCdrlvKNiP%2FQHz1DFjPrGvps0451fZikBq%2B8JD4Odl97VYNGpSaIvkHkFeQVyMi3pIJE9IQlLP%2FQucLmqrerz%2FtnB7MKuY4LHnuYUwpbiJygY6pgGfUYbCHga5027CauW1J%2Bnb0r8o4OIKEdqbjQSJt4G30%2BDiWNFsqfyad0kLpWeYQbpnWKXg8WbBHT7h2%2FfT4XO5gSHy7xc%2BWcT9gbeKMOpc8e1jZxN5eLBGtEHS8l8TnQabAB6E%2FbXakBFIWhtkaa78p4p9xLS3wfwHiME29lEIEuPar7EW2C8%2F11OnMUIaESyDD%2FcK1Or7IG6FdzlXM3jAfsOPjD1d&X-Amz-Signature=09aa014d90584d18ff8f29fb3dfba8e338e04fd94a575385dfe3b9d59da4e88b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XYF4QFT2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T075719Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEiniMXsVpitQzXo1r9ms6EfApVXoku1XoCEcD%2FmDV0QAiAZqX5B0EIf74Qo1KZb9ncTYXqNj53s7RrPKdxFBmuNlir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMRmPgSGLwGqRmJmzwKtwDzvLB462w3JWUpnvyUxPcCjlPfEBtQe7nRrNJB6IMzLBXcfrNw8wxSYvQ2leqrWA7Y%2Bn%2BlVNJfVtTqsPmpgiWESMJscFecBPs1DdiRykWDxxNBxNcN3AhT8BkGLVoGT%2F1hDSpBSpiWKYOBIEr%2BUyuQRrO8m7HNzsGlkP3w4DaV5JRsXwU3%2FxAwtZHw8wu7gfERWlLId4pU0wzb02stnhb15tn4rrJpn8mldN8YLmijimqtoHPUafySDUm8JPVoXt%2B%2FgGn69EVVyNE7STUGPINxg24o0g7RpJsr8Qw3%2F0L%2B3Vyywug0wf029s7VyitJQpYdTgEYmhMEgXrgHe%2F1JtXBcpwdS%2FtjJ92K%2FMM8o6Krr8BbEMnM3ViY%2FQ49tfT0ULCZUvFy1g8DVdAaS%2BniN4B8yHRasZnn3P%2B9VkPd0GJxDIU1PVSyvhW3ywdUENedTRU%2BwoVTuOobZ5qz6vksWM1r3qsiHlEAXx%2Frz17KTswfAr%2FuDv2NnfFL9%2B7MBACtXFnGNhWmv8GmwXFhd3B4rUsWJ%2BCdrlvKNiP%2FQHz1DFjPrGvps0451fZikBq%2B8JD4Odl97VYNGpSaIvkHkFeQVyMi3pIJE9IQlLP%2FQucLmqrerz%2FtnB7MKuY4LHnuYUwpbiJygY6pgGfUYbCHga5027CauW1J%2Bnb0r8o4OIKEdqbjQSJt4G30%2BDiWNFsqfyad0kLpWeYQbpnWKXg8WbBHT7h2%2FfT4XO5gSHy7xc%2BWcT9gbeKMOpc8e1jZxN5eLBGtEHS8l8TnQabAB6E%2FbXakBFIWhtkaa78p4p9xLS3wfwHiME29lEIEuPar7EW2C8%2F11OnMUIaESyDD%2FcK1Or7IG6FdzlXM3jAfsOPjD1d&X-Amz-Signature=d07825edc936dee6e0bce9afb1418fd05d772edee6525e27bd82ced9cae5b8fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
