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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MPTNH77%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI9RD76mJ1IoDv3EeqI8CIqqdOgAkncXxM3upuvYWXdQIhAJkHJgfQtqEvkBNguNt3zsFv0Fo1kAH3Wa%2B3nlMxNDcXKv8DCGAQABoMNjM3NDIzMTgzODA1IgxO5x3DrgbJWRD%2FoiIq3AO%2Bx7iivyO2sVgl80zNZZssus4kw6J0THOJpraRJ4JTqMX2MLYX3sn30vl4M%2FIopS9n46Lrl5TqDwuinKp6s7LhbAoBgznvXS9MChI%2FXn%2BVDdN6QErIMlTYdybwKz5dqobgrPfueRCQnrNRc2wAjI%2BDG9W92FhVDRMKOMlQ60txlKC1B7GLs1tkPteJj0fZIpAw8bJJS%2FQsNGOMYXimvT2P%2Bg1VeUpmewdlZ5tcUe6nLi1pEOt%2FLFAtkWb02dlUCzoSI3fOKc7JkU3YJq5qEy3MXepu07uxOTUzYD%2Fsnv2nsRJA2t1UdLeWkrk5CKicUA1QzWi34A%2BQuqYNZ7S7QaAuYyURjGncuzu54VCNg3nbFxJV5fW8QCbWstLUYwSGwJ88oWV89Iz%2Fd6OkgATFBTD7rXffKiaHdezFFLYaB6ScQEq7C06C6TS1Q6Ce7JMU%2B%2BIBqSHZRtOaf3j%2FUww1jgw%2FkBjv1IXU8TOx3Vwf%2BbiJdiFwiwQ8%2FK9zkah7idFiiIhgkVH0PeQolobCfAx0rHaAi8KkJhIDWB6%2By7x9QgQ3YPx3q2IU%2FdXSkny%2Bb%2BrfjN74yPxxglXefN%2BeGgfmQupm5aEYmq5Bze4GA4shnGuFFDyWDoqtHMtZOfvk2jC978vJBjqkAYxcTBYLd2uQF2Ai%2BhDpBmc9K3Ulb%2FIxtmwpmYrdyCnn1md8QYkaWORp1RmSdAUae037mV1ztXmFKJdhb7L%2FtNhsKMRtnFV0hj8zEUIY0v87ozdKaOYs8xIzXkCIoLfPRxLw54o2WljFqEneqSqPy7td9QnsrXbtROPku0x6XRijA97Uxmg1SITeOcfDYbeQl3t28qsaJd36Q9umDuNfK4x4zH4l&X-Amz-Signature=5890b18866e81c2e8408eba534cc35ec0a0dd13858e1c41715f8fa59b28bd9fa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666MPTNH77%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDI9RD76mJ1IoDv3EeqI8CIqqdOgAkncXxM3upuvYWXdQIhAJkHJgfQtqEvkBNguNt3zsFv0Fo1kAH3Wa%2B3nlMxNDcXKv8DCGAQABoMNjM3NDIzMTgzODA1IgxO5x3DrgbJWRD%2FoiIq3AO%2Bx7iivyO2sVgl80zNZZssus4kw6J0THOJpraRJ4JTqMX2MLYX3sn30vl4M%2FIopS9n46Lrl5TqDwuinKp6s7LhbAoBgznvXS9MChI%2FXn%2BVDdN6QErIMlTYdybwKz5dqobgrPfueRCQnrNRc2wAjI%2BDG9W92FhVDRMKOMlQ60txlKC1B7GLs1tkPteJj0fZIpAw8bJJS%2FQsNGOMYXimvT2P%2Bg1VeUpmewdlZ5tcUe6nLi1pEOt%2FLFAtkWb02dlUCzoSI3fOKc7JkU3YJq5qEy3MXepu07uxOTUzYD%2Fsnv2nsRJA2t1UdLeWkrk5CKicUA1QzWi34A%2BQuqYNZ7S7QaAuYyURjGncuzu54VCNg3nbFxJV5fW8QCbWstLUYwSGwJ88oWV89Iz%2Fd6OkgATFBTD7rXffKiaHdezFFLYaB6ScQEq7C06C6TS1Q6Ce7JMU%2B%2BIBqSHZRtOaf3j%2FUww1jgw%2FkBjv1IXU8TOx3Vwf%2BbiJdiFwiwQ8%2FK9zkah7idFiiIhgkVH0PeQolobCfAx0rHaAi8KkJhIDWB6%2By7x9QgQ3YPx3q2IU%2FdXSkny%2Bb%2BrfjN74yPxxglXefN%2BeGgfmQupm5aEYmq5Bze4GA4shnGuFFDyWDoqtHMtZOfvk2jC978vJBjqkAYxcTBYLd2uQF2Ai%2BhDpBmc9K3Ulb%2FIxtmwpmYrdyCnn1md8QYkaWORp1RmSdAUae037mV1ztXmFKJdhb7L%2FtNhsKMRtnFV0hj8zEUIY0v87ozdKaOYs8xIzXkCIoLfPRxLw54o2WljFqEneqSqPy7td9QnsrXbtROPku0x6XRijA97Uxmg1SITeOcfDYbeQl3t28qsaJd36Q9umDuNfK4x4zH4l&X-Amz-Signature=adcfaab6cd4224a0d9aae49289bbc7eefcacd325014146d732a8337ab55c95ce&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
