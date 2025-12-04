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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXDUNA2Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC53KQ5gdXQDONjjVHRdN1dNHmba8jkBOFpdU3VmPzr4QIhALmVnT0ebZlsMbUDKpz7Ywd8SnX50ofJr4GXDEqzIYwMKv8DCEAQABoMNjM3NDIzMTgzODA1IgwUK9AG7DKnoQy7M6Mq3AN2liiqpTpfyfex4%2Fr2pXfL2ud47oJs5gww3MbUTWmd4IEcEQDxyOCrXdp8CVJpftWAXeil41cqBiycDVC08jnu55DNzGm1vKAKWIHODgMsDoSAeJDcv%2FmjSTOZ6bkA3dp3rp5GbXn7uAFC10ztj4YIuKPLl2IQfCJky8%2BxHAJqR0QjhBGDGq1pBbRN8sKAcrCbRs0lWm6vjbddR41XIL1GUl%2F36eXqjeT27a5QmH3TOtyYzTdMX%2BkgWcsmUokM9xYqZul5XucpMVzJlBrfGpD5c0nAhtfoKzs484o7KX%2Bdfv9Hiq8ja7h%2BU9arZI8d%2FenPBveeUhu74d54SJWVMLNtKUEUAoodFz2KUNAegQJm%2BmHUoXZttYrs6ezzwBdKP5B0klhL%2FaczDF2vnbfRnzPUXw8e66RgFSAOFnKctGRxqata2LXk4dVVGzxoqw6IcBnqQEcmO32breuYZa45C8Mz%2Bcw%2FHgJdC55oFMpOC31CIJu1FEVqOfyh5ixdvxt3fwf9t8NKCZ3XFS8YJGifyhrreUhbPEeS1Bk7RsjQhwGlBXhwT4nZs8cw5uDuMZxAZtQqi3UkERYlwoyo1GCEZP%2Bj9vCc8NNGdhuEGEP%2Bse7k10RKbVgwhX3%2F%2B2fJxDDR6MTJBjqkAfnVj7UnHNoTZtREaNmBvTpAmf2oIS1V6vAcsfljzWzmYckr7eRu9LmKAv2wd9WE%2B3oq6R%2BMigHtS9uuJhstilrgM%2FuvO299Kyw4Cue6Fv6Lg%2FmCgyvNM%2F7Epn23K7qcP%2FsKNo%2B6rdfDD7kPMAJpsCaKU47OnHt3JvxVdkdzO4f%2F46I%2Bq4EOPpDr998uLev7H%2FSIiVDT0oJ464QTVmafndvddWdw&X-Amz-Signature=540d1c377b12f70e8ab21acb9373c29d74fc1b5985aa64bc3f12e61e13d3c34b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XXDUNA2Z%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQC53KQ5gdXQDONjjVHRdN1dNHmba8jkBOFpdU3VmPzr4QIhALmVnT0ebZlsMbUDKpz7Ywd8SnX50ofJr4GXDEqzIYwMKv8DCEAQABoMNjM3NDIzMTgzODA1IgwUK9AG7DKnoQy7M6Mq3AN2liiqpTpfyfex4%2Fr2pXfL2ud47oJs5gww3MbUTWmd4IEcEQDxyOCrXdp8CVJpftWAXeil41cqBiycDVC08jnu55DNzGm1vKAKWIHODgMsDoSAeJDcv%2FmjSTOZ6bkA3dp3rp5GbXn7uAFC10ztj4YIuKPLl2IQfCJky8%2BxHAJqR0QjhBGDGq1pBbRN8sKAcrCbRs0lWm6vjbddR41XIL1GUl%2F36eXqjeT27a5QmH3TOtyYzTdMX%2BkgWcsmUokM9xYqZul5XucpMVzJlBrfGpD5c0nAhtfoKzs484o7KX%2Bdfv9Hiq8ja7h%2BU9arZI8d%2FenPBveeUhu74d54SJWVMLNtKUEUAoodFz2KUNAegQJm%2BmHUoXZttYrs6ezzwBdKP5B0klhL%2FaczDF2vnbfRnzPUXw8e66RgFSAOFnKctGRxqata2LXk4dVVGzxoqw6IcBnqQEcmO32breuYZa45C8Mz%2Bcw%2FHgJdC55oFMpOC31CIJu1FEVqOfyh5ixdvxt3fwf9t8NKCZ3XFS8YJGifyhrreUhbPEeS1Bk7RsjQhwGlBXhwT4nZs8cw5uDuMZxAZtQqi3UkERYlwoyo1GCEZP%2Bj9vCc8NNGdhuEGEP%2Bse7k10RKbVgwhX3%2F%2B2fJxDDR6MTJBjqkAfnVj7UnHNoTZtREaNmBvTpAmf2oIS1V6vAcsfljzWzmYckr7eRu9LmKAv2wd9WE%2B3oq6R%2BMigHtS9uuJhstilrgM%2FuvO299Kyw4Cue6Fv6Lg%2FmCgyvNM%2F7Epn23K7qcP%2FsKNo%2B6rdfDD7kPMAJpsCaKU47OnHt3JvxVdkdzO4f%2F46I%2Bq4EOPpDr998uLev7H%2FSIiVDT0oJ464QTVmafndvddWdw&X-Amz-Signature=e79b11fe21bdef392ca8365bb253c6e2c701ff8bff56ea7c2aebd6cdb9874501&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
