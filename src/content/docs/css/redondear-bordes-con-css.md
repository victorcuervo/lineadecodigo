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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGJIS5F5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD9BUZU8tGn3Cn9gyC0Lr%2BiWjM4mwXvQt7HdP%2BOh0XBIAIhAKgb7OOuM102rblMrPsJYWAQent7J4VZ1b0XynlDyQH5Kv8DCDsQABoMNjM3NDIzMTgzODA1IgxWWYAyD3BLICixdxsq3AOH4A3NcjIu1Yexg0gJFH0ichaD3w19NC17b7o72y5RTc8sphngyrJhiNWzuCvc7dXo9DtwsmWOcEs3qgdGWEOOUJasIhl3u2LVOjvZY%2Fw9EZPK0xShV5A4rAAaSueS9rmhCAT3BCFy140STw7VvcNEbFRD%2F7dtDMQ7WYh5PQBjIGJtX1MLCDS9NsoK1HGXCEGA37ruXOxBpLUqdwTrZLkC1lwxaVkcvC%2BUxTjcQRlCl5Mq9axv2RX8G7taTMLlcb%2ByHznMlNyGAgx1nAa9Fk8VjT%2BesOawVeAkVoH7jQJohqHMob7MssTPjblSD7arUR4%2FS67H1RmpJgZjgnXM59AFadTevOcXeAdTdAKR9XUoU1Hpkvo26vrj4jwB6i9gBOdzChIkylUXRrTZAZVNHs3wsJLV4csb12R4ip43MKqn32%2Bmw92iV7Msgs%2Fui%2FJToIlyu9foJfvrhAI2%2F%2FlNxAkf8QPFh0jUSss14aw3uXK3Faod5ETWQXnwImaj4LWYG7quS1A7TPf7IsMFuTo6jYRJ7Y9GXX8cIEXYk4ETWnPBwZT8M6f%2BLiX4fUdww3zvPX6FdR9JqVMUoCBMq4tcr7%2BF1caecSCYEklSdj5DJfM6vBDYnxEFNDm2Q%2F7JmzDK1MPJBjqkAfqiKMSXuEsZBwgwaGhA2kb2Tx1X6t6G3Ly5QRL0AIhei3p8tgUNaGAauM6oLW5MUEwU1NGfC5r%2BysMRfDatwnEGsGtkkQEZyd1pwJhWm3GSR5f%2BfrYJfWCMzE2vMcIixr7T8Df7LQ%2FDjDVjQAf6tOmPIp6oifvCC%2Ft94aOx%2FgU5anyMf8pQFOJzG7J0ed6v7MufFQO7SI2srNhnYDHcPESuOIXO&X-Amz-Signature=c3175c756a0098c3cfbada85105e53d7279c054775e8312f2fa3237f90ab13d5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGJIS5F5%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T023325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJIMEYCIQD9BUZU8tGn3Cn9gyC0Lr%2BiWjM4mwXvQt7HdP%2BOh0XBIAIhAKgb7OOuM102rblMrPsJYWAQent7J4VZ1b0XynlDyQH5Kv8DCDsQABoMNjM3NDIzMTgzODA1IgxWWYAyD3BLICixdxsq3AOH4A3NcjIu1Yexg0gJFH0ichaD3w19NC17b7o72y5RTc8sphngyrJhiNWzuCvc7dXo9DtwsmWOcEs3qgdGWEOOUJasIhl3u2LVOjvZY%2Fw9EZPK0xShV5A4rAAaSueS9rmhCAT3BCFy140STw7VvcNEbFRD%2F7dtDMQ7WYh5PQBjIGJtX1MLCDS9NsoK1HGXCEGA37ruXOxBpLUqdwTrZLkC1lwxaVkcvC%2BUxTjcQRlCl5Mq9axv2RX8G7taTMLlcb%2ByHznMlNyGAgx1nAa9Fk8VjT%2BesOawVeAkVoH7jQJohqHMob7MssTPjblSD7arUR4%2FS67H1RmpJgZjgnXM59AFadTevOcXeAdTdAKR9XUoU1Hpkvo26vrj4jwB6i9gBOdzChIkylUXRrTZAZVNHs3wsJLV4csb12R4ip43MKqn32%2Bmw92iV7Msgs%2Fui%2FJToIlyu9foJfvrhAI2%2F%2FlNxAkf8QPFh0jUSss14aw3uXK3Faod5ETWQXnwImaj4LWYG7quS1A7TPf7IsMFuTo6jYRJ7Y9GXX8cIEXYk4ETWnPBwZT8M6f%2BLiX4fUdww3zvPX6FdR9JqVMUoCBMq4tcr7%2BF1caecSCYEklSdj5DJfM6vBDYnxEFNDm2Q%2F7JmzDK1MPJBjqkAfqiKMSXuEsZBwgwaGhA2kb2Tx1X6t6G3Ly5QRL0AIhei3p8tgUNaGAauM6oLW5MUEwU1NGfC5r%2BysMRfDatwnEGsGtkkQEZyd1pwJhWm3GSR5f%2BfrYJfWCMzE2vMcIixr7T8Df7LQ%2FDjDVjQAf6tOmPIp6oifvCC%2Ft94aOx%2FgU5anyMf8pQFOJzG7J0ed6v7MufFQO7SI2srNhnYDHcPESuOIXO&X-Amz-Signature=84730e7fdf1f8a5b05e221db8d6471c2f5e843a5075d52cee4c1c6918473bfa8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
