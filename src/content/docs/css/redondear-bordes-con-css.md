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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS6R6MQD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS2WsuNCxODE3JNoHwatg9tmi1Gm4%2Fj97CWsevHpFLswIhAP7qeL1hzk2tnS%2Bpn2YkAD2r7cCHvv78%2FtbwZ%2Fe468YQKv8DCGEQABoMNjM3NDIzMTgzODA1IgxA7XvhGpmOwn5rascq3AMPj%2FVFhDOxieHwpVAoHg2wkAkWDrz7bACR7dWWpxQ6sNfcjd%2F8n%2FjEmLUJBt9bY4X%2B7b1tezNZ8Aldz5SSLSCyykfRvHbh7zVL07Nnovv9Rx4XYfhSqaXv6LKgy6X6z3hZT2jJJ82i75M240C9dSQgMZNry%2BVxOoS%2B87PaOywWZg%2BNqz2pR8ZVFNfiCrfIt%2BRPbEn1ggfwFsi6jKr5xM9pDXBAP9gTO8b8IQHYB9qeatonez7rfSXBKjlhWf9l6nDlYgOk6eSregakBk5ou4k5RBwxYYHvMvu%2F94%2B4Xq1ahrQVj7fZ%2BmAuQIFumRz9Q2oZv4dJMElF0PGHGmP2W6N%2FCtUD5bLFwmhJD2QAi%2FuY%2FnxDQdtiEUo0zsUQadlQ09NAdH6Lnc7NzSNo644cm65ofvWtx4QPw9tWfXeCKWWsxP7CI0mrX4LVVlpkszBGiOkxQyRilTVqcfoaoLvgDTn%2FlHm1e1OQfBlrUDuIqYRH7o%2FQLOEVCLTKnt2oK91B0ZyPcw8bnL8O5s4ltlUnrfSvO7JXr96oMTz%2Fpx%2BY4Fjv5xUBuskrylqNSTUW0uGa0EJaZJSY3b59marRSf3KePNnw3mfA8VlFVW63el%2BSvKPq%2FxX5On0fmXdFAfIGDDT8svJBjqkARTdmODPNkkJa5%2FS6a8v8m3g3Xvqd%2BV0k9cABl3Gg%2B3pEg3ro5vcrtKYhWSw8zQNERM63vA1eYZKknN%2BNz00DAPPn21ucMUJ1tGvT0L5Ae1DwexoWLLlhS55Ig5W5wAmcmRkdoHOF%2FSUEipirXuPL3nxZZUSUOwcHOifEzfhMx6Y%2F%2BcSD4QNyXcyhmQ%2FoDv90nOJu2JEF6l5sxRM0BmXt4bPomhP&X-Amz-Signature=d035fabcc370bd0210c53d4c28d589e837d75d04fc8e166d4888010da925b0f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WS6R6MQD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T175409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCS2WsuNCxODE3JNoHwatg9tmi1Gm4%2Fj97CWsevHpFLswIhAP7qeL1hzk2tnS%2Bpn2YkAD2r7cCHvv78%2FtbwZ%2Fe468YQKv8DCGEQABoMNjM3NDIzMTgzODA1IgxA7XvhGpmOwn5rascq3AMPj%2FVFhDOxieHwpVAoHg2wkAkWDrz7bACR7dWWpxQ6sNfcjd%2F8n%2FjEmLUJBt9bY4X%2B7b1tezNZ8Aldz5SSLSCyykfRvHbh7zVL07Nnovv9Rx4XYfhSqaXv6LKgy6X6z3hZT2jJJ82i75M240C9dSQgMZNry%2BVxOoS%2B87PaOywWZg%2BNqz2pR8ZVFNfiCrfIt%2BRPbEn1ggfwFsi6jKr5xM9pDXBAP9gTO8b8IQHYB9qeatonez7rfSXBKjlhWf9l6nDlYgOk6eSregakBk5ou4k5RBwxYYHvMvu%2F94%2B4Xq1ahrQVj7fZ%2BmAuQIFumRz9Q2oZv4dJMElF0PGHGmP2W6N%2FCtUD5bLFwmhJD2QAi%2FuY%2FnxDQdtiEUo0zsUQadlQ09NAdH6Lnc7NzSNo644cm65ofvWtx4QPw9tWfXeCKWWsxP7CI0mrX4LVVlpkszBGiOkxQyRilTVqcfoaoLvgDTn%2FlHm1e1OQfBlrUDuIqYRH7o%2FQLOEVCLTKnt2oK91B0ZyPcw8bnL8O5s4ltlUnrfSvO7JXr96oMTz%2Fpx%2BY4Fjv5xUBuskrylqNSTUW0uGa0EJaZJSY3b59marRSf3KePNnw3mfA8VlFVW63el%2BSvKPq%2FxX5On0fmXdFAfIGDDT8svJBjqkARTdmODPNkkJa5%2FS6a8v8m3g3Xvqd%2BV0k9cABl3Gg%2B3pEg3ro5vcrtKYhWSw8zQNERM63vA1eYZKknN%2BNz00DAPPn21ucMUJ1tGvT0L5Ae1DwexoWLLlhS55Ig5W5wAmcmRkdoHOF%2FSUEipirXuPL3nxZZUSUOwcHOifEzfhMx6Y%2F%2BcSD4QNyXcyhmQ%2FoDv90nOJu2JEF6l5sxRM0BmXt4bPomhP&X-Amz-Signature=49a6a5b5b20ce52ec2a3395d32b476dafd4a548d00761d1d17e113202271cdcb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
