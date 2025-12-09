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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBM5ORIQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFw9mqSIPQN8zFe%2BFZEURR5OSPEzlfG7Ye6WmUvNhIijAiEA%2FfyGdNjn6Exqp6hZ%2FtCgvkqtyaWBGKh%2BKY9OXwAPXpwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn5tUSKrxrMizsEhyrcA9nXdTOHvJBgkhRBzntpPYiQi3frtvrYUIA05dnoLUiMnNHX8kXRSimb1Ea9mLEUZ2TgOqKx6zeN%2FDOlq0y1xK5m8lCmVMVAw8e8Hy%2FQ0%2BY7B4r1gvurNmzgMfeUSJ6d2Ntyedk%2Bmv%2BKbPTeTxvwWM%2Bqvxh47u6yFkKEXH3Pl4f2l1L2WHgnuZHVzbfckErVi8s1nTNfeQ5jj7%2ByowOtbyCmjdvQtn70j8YidHQilXUp30GgVGqB7iv4J97cxRK3TmSQ4TE93aE%2Fg0Hie9Uv7SaidSEf%2BH9ZHSuvJMskVNtmIrGLar7aReLVYRguVKmf7AsNlORCx2Dic89nzvW1HQIoUW8vJkGFGOsI6JDz8lSBzFxAtWpp8meiOp8KPbTZgZZe17mgVVQYXV%2Bn46l82XVU8IJjwoxpzDr75jODIm2I%2F%2F7LwpePx5xysPDFpKJzRC1bb%2FqQArOMVuNoM4Ir7XfObmRVLq3QnAR%2BXGMp7LKSERitdnyIJPq5%2FueisibIkYAmq%2B3DqWBQH%2BXqF%2F91SOGIq81XzQEiOjN%2BXdWX%2BRaIo2yUsndY3jvyCwd1xE1Aaxgc3M7y55VyxASltguKcOjBRG2Ii8oIjWokLruVzXPu7pn3HyuHgTcBn5ebMLuN3skGOqUBGm2zCFBNAWGV4ghuo5GTSA1Hpv1dVWIimtZomIT5nLv4LMIA5M250HVSDCB75bomOXdh%2BIT1c7Psr9ouHncUecW43FU4DAhnDolsDD90%2FUDoC%2FpSBAobinIspOk5cZR%2BzcROyucs1djjjUpov33fwstqopkXMuy3I3N5bhuKQctLesPqlAbvnLze4anj%2Fx5WdGL7sREHgQyLxNZ224Z8BUEouWND&X-Amz-Signature=af220fb0cc5da0633543fe90b234ca1c89527389680752d9f997a2cf08b923ee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YBM5ORIQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T023245Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFw9mqSIPQN8zFe%2BFZEURR5OSPEzlfG7Ye6WmUvNhIijAiEA%2FfyGdNjn6Exqp6hZ%2FtCgvkqtyaWBGKh%2BKY9OXwAPXpwqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBn5tUSKrxrMizsEhyrcA9nXdTOHvJBgkhRBzntpPYiQi3frtvrYUIA05dnoLUiMnNHX8kXRSimb1Ea9mLEUZ2TgOqKx6zeN%2FDOlq0y1xK5m8lCmVMVAw8e8Hy%2FQ0%2BY7B4r1gvurNmzgMfeUSJ6d2Ntyedk%2Bmv%2BKbPTeTxvwWM%2Bqvxh47u6yFkKEXH3Pl4f2l1L2WHgnuZHVzbfckErVi8s1nTNfeQ5jj7%2ByowOtbyCmjdvQtn70j8YidHQilXUp30GgVGqB7iv4J97cxRK3TmSQ4TE93aE%2Fg0Hie9Uv7SaidSEf%2BH9ZHSuvJMskVNtmIrGLar7aReLVYRguVKmf7AsNlORCx2Dic89nzvW1HQIoUW8vJkGFGOsI6JDz8lSBzFxAtWpp8meiOp8KPbTZgZZe17mgVVQYXV%2Bn46l82XVU8IJjwoxpzDr75jODIm2I%2F%2F7LwpePx5xysPDFpKJzRC1bb%2FqQArOMVuNoM4Ir7XfObmRVLq3QnAR%2BXGMp7LKSERitdnyIJPq5%2FueisibIkYAmq%2B3DqWBQH%2BXqF%2F91SOGIq81XzQEiOjN%2BXdWX%2BRaIo2yUsndY3jvyCwd1xE1Aaxgc3M7y55VyxASltguKcOjBRG2Ii8oIjWokLruVzXPu7pn3HyuHgTcBn5ebMLuN3skGOqUBGm2zCFBNAWGV4ghuo5GTSA1Hpv1dVWIimtZomIT5nLv4LMIA5M250HVSDCB75bomOXdh%2BIT1c7Psr9ouHncUecW43FU4DAhnDolsDD90%2FUDoC%2FpSBAobinIspOk5cZR%2BzcROyucs1djjjUpov33fwstqopkXMuy3I3N5bhuKQctLesPqlAbvnLze4anj%2Fx5WdGL7sREHgQyLxNZ224Z8BUEouWND&X-Amz-Signature=2922d85ba12e0ebe11577ae12cc2a5c6a691b634b0e1867ee9dec0ed4994f2c5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
