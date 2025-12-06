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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGMW2VML%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM8lhynf%2FnKyoORr6XrCvf1jJ0KOvRh0I5aqQ48i4EZAiEApg3qJ8wi%2BZEQjiygSPI0WjLpNDcu9WtazfRNvEJM0GEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBpgNne%2FMsDD7gR15CrcA87CcSFZtamTvEuO3%2FjkD7Y%2BDsJPk3rLlmEYDPbEoIsRBnLFv1lMcCHbB2GofrdicMmlVLAxqEj7k3uaPKVp6SjgOfY45X9%2F1C8FNY7E6NKelTAwwyVSANGSyllImuSxPXWUeaxGsxOqxAhDGMxeG6yODWyhBPMprgAPaSe9%2F%2Fj2USPGt9stEuUFxU38C3fnhSloC7oqHqB2ClK8EkOcGw7YqNlcchixoC8XAhERHWCDWzwD3AEnv%2Fj6yAlAw9wLedAyBnm7Z6jBu5czrYaz0EIFC7g1i%2B2iUlJ%2FQKR0%2BVa1mKMqJcfYdmd6C13Sg62K4emDne9uXuBjrEVdkBUcuwJz%2F9EQkd6WGnvhL6UHHRy0asgdy8OYo73J9BEKiFHPwREK2B44OkNrvmiFPnS%2Bvyv1%2B%2F%2BlunZE9vsZnbPA8aIRrDisGP3IL1cK6i19cKloGSl6jCo9f9Zq3kkmFbn0GC7U8hyWanOBhbjxKcYqyC5l9U9jJacvt0E92ptsuL0B4PnOHBrFsTdtjFt6Ig8mnfJQqtdpn8NiBzXoAE%2FwQZzRj1u6Q8QjiQk8ecqEIzIvnQJAIYvF9Bx%2BDe%2B9AM4Vw%2F6%2BhOHMGL1eowOlRfKugs%2B%2BFkO9S2PVVIoQr9Q%2BMMWm0MkGOqUBLGHk1U2POd7QbG68Mdn03kiJy9HA6KfDXb0DNbUE1Ce%2Fn9BX7L0tGOOPyMQeOR4SQib76k%2BIQIV%2FgmfUK9iRdqA1EVMYdzMLgmSlVqVSan4dfXfoxTwe91YRCW4jpTLUmSerS%2BElY6KDBv9G1DJk3DQhVIMbOBKu%2BLPIgQS5LfgWVP9aAvo0H8P5yjd04ntPu%2BYQnOmzvf4FMsj8pv31Z64Eb6Nh&X-Amz-Signature=0c3f151a73646469d14f840a97b98bdf43e41afdf5659fb26be076c9b8df1b43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGMW2VML%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T144721Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGM8lhynf%2FnKyoORr6XrCvf1jJ0KOvRh0I5aqQ48i4EZAiEApg3qJ8wi%2BZEQjiygSPI0WjLpNDcu9WtazfRNvEJM0GEq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDBpgNne%2FMsDD7gR15CrcA87CcSFZtamTvEuO3%2FjkD7Y%2BDsJPk3rLlmEYDPbEoIsRBnLFv1lMcCHbB2GofrdicMmlVLAxqEj7k3uaPKVp6SjgOfY45X9%2F1C8FNY7E6NKelTAwwyVSANGSyllImuSxPXWUeaxGsxOqxAhDGMxeG6yODWyhBPMprgAPaSe9%2F%2Fj2USPGt9stEuUFxU38C3fnhSloC7oqHqB2ClK8EkOcGw7YqNlcchixoC8XAhERHWCDWzwD3AEnv%2Fj6yAlAw9wLedAyBnm7Z6jBu5czrYaz0EIFC7g1i%2B2iUlJ%2FQKR0%2BVa1mKMqJcfYdmd6C13Sg62K4emDne9uXuBjrEVdkBUcuwJz%2F9EQkd6WGnvhL6UHHRy0asgdy8OYo73J9BEKiFHPwREK2B44OkNrvmiFPnS%2Bvyv1%2B%2F%2BlunZE9vsZnbPA8aIRrDisGP3IL1cK6i19cKloGSl6jCo9f9Zq3kkmFbn0GC7U8hyWanOBhbjxKcYqyC5l9U9jJacvt0E92ptsuL0B4PnOHBrFsTdtjFt6Ig8mnfJQqtdpn8NiBzXoAE%2FwQZzRj1u6Q8QjiQk8ecqEIzIvnQJAIYvF9Bx%2BDe%2B9AM4Vw%2F6%2BhOHMGL1eowOlRfKugs%2B%2BFkO9S2PVVIoQr9Q%2BMMWm0MkGOqUBLGHk1U2POd7QbG68Mdn03kiJy9HA6KfDXb0DNbUE1Ce%2Fn9BX7L0tGOOPyMQeOR4SQib76k%2BIQIV%2FgmfUK9iRdqA1EVMYdzMLgmSlVqVSan4dfXfoxTwe91YRCW4jpTLUmSerS%2BElY6KDBv9G1DJk3DQhVIMbOBKu%2BLPIgQS5LfgWVP9aAvo0H8P5yjd04ntPu%2BYQnOmzvf4FMsj8pv31Z64Eb6Nh&X-Amz-Signature=c2369a62ad1e78829e5bf2d5f1bdbf28d2487afd7699874c339ec8408229b6e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
