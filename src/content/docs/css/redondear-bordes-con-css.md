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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A6NNKBF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDo45zNi1k2eZbx93K9ZOTFwYPmRvGYmjrwK5VIOqZrIwIgTcHG8FJq3x1PKkiM7YFnABXbARM2tWWC1zeGL%2FglAO4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMtJ1o1bZNS1t0nbPyrcA1GOyCY6J%2BY%2FtXzdPdXR5ynsLf%2BjexjYHY3RXe1kFeVqJzUBHJ5s65C6AhM6Iw4u5WoYcf3RJ%2F1wy8MWZhqoyuhKq91oxYQT390epqBv4PVme17rfCVpzDzrogUFHfmGtHGePu0Bv9bONYA75uXGT2ZMLF5x%2BkUJlwn5jDHMjCIqjstmdEB3xdaXO1YbTqAwaFPsAVVZzzqfVAT878hgHJLlXEkjKNVtfFimNaYhvtIlbJkOTWYsqI%2Bp%2BhGJbpvsAp2gMu8ulFPFuuwvuQ0q84GWGdUaHLUgHxYa7987aRcEO2qYZHZRfrPLJL6G%2B9kgPE9LTLPr4e4WN0iD0VxaXzCWGb5HGPjEP3fwblYy5%2BdsKr2%2Bp4WX%2FXyv3bt8xwQ1SW87kmx7HVE5uWaArsQknGaH9zzDSTraXZLI0oBGoLOSY2eH4D%2B2%2BjyAshufY%2BA5D8BXTiAcXpOga%2FcLnWrVSbN%2FRrQeB2ry2oIUqWhQTcBX3v3UlWGzEe9esPDrzXRHVkcNKGLWXIneB2%2F8b03o00HCO8tWMwYZF8t9DXIEm8MKcztSr1n%2Bh%2BKsDktPAImFWntefX7cYlz6IimaKCX%2BOzdvwq2Djk4U5VkchrgWF74zNorEqse%2BBNvk9h5XMOytxMkGOqUBrzSzMKnjNnagl52pf%2B4qhMHy9QPa5g4jd8eC5w3YhIsQ1w5mSdhpU0Jf5JQt6A3dKM9Vc7uoaYOAwOzASadjo3eNHaggXKjj5BSONfcgg5jw7NA3OMzxeE%2BWFDgZvVznRBe5Ew9kihB2qVnEjtyY5BUVQVUE0SMJFFu4yZ1RZy6gd1FKANuI2TNExHmF6qpyaxH26AMp7Tni%2FEajNmisAwIhpEp6&X-Amz-Signature=09699cd317748478eeada4c585fe61c900d5adce6f7a6f9c264ad4ea63502332&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666A6NNKBF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T054840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJHMEUCIQDo45zNi1k2eZbx93K9ZOTFwYPmRvGYmjrwK5VIOqZrIwIgTcHG8FJq3x1PKkiM7YFnABXbARM2tWWC1zeGL%2FglAO4q%2FwMIPhAAGgw2Mzc0MjMxODM4MDUiDMtJ1o1bZNS1t0nbPyrcA1GOyCY6J%2BY%2FtXzdPdXR5ynsLf%2BjexjYHY3RXe1kFeVqJzUBHJ5s65C6AhM6Iw4u5WoYcf3RJ%2F1wy8MWZhqoyuhKq91oxYQT390epqBv4PVme17rfCVpzDzrogUFHfmGtHGePu0Bv9bONYA75uXGT2ZMLF5x%2BkUJlwn5jDHMjCIqjstmdEB3xdaXO1YbTqAwaFPsAVVZzzqfVAT878hgHJLlXEkjKNVtfFimNaYhvtIlbJkOTWYsqI%2Bp%2BhGJbpvsAp2gMu8ulFPFuuwvuQ0q84GWGdUaHLUgHxYa7987aRcEO2qYZHZRfrPLJL6G%2B9kgPE9LTLPr4e4WN0iD0VxaXzCWGb5HGPjEP3fwblYy5%2BdsKr2%2Bp4WX%2FXyv3bt8xwQ1SW87kmx7HVE5uWaArsQknGaH9zzDSTraXZLI0oBGoLOSY2eH4D%2B2%2BjyAshufY%2BA5D8BXTiAcXpOga%2FcLnWrVSbN%2FRrQeB2ry2oIUqWhQTcBX3v3UlWGzEe9esPDrzXRHVkcNKGLWXIneB2%2F8b03o00HCO8tWMwYZF8t9DXIEm8MKcztSr1n%2Bh%2BKsDktPAImFWntefX7cYlz6IimaKCX%2BOzdvwq2Djk4U5VkchrgWF74zNorEqse%2BBNvk9h5XMOytxMkGOqUBrzSzMKnjNnagl52pf%2B4qhMHy9QPa5g4jd8eC5w3YhIsQ1w5mSdhpU0Jf5JQt6A3dKM9Vc7uoaYOAwOzASadjo3eNHaggXKjj5BSONfcgg5jw7NA3OMzxeE%2BWFDgZvVznRBe5Ew9kihB2qVnEjtyY5BUVQVUE0SMJFFu4yZ1RZy6gd1FKANuI2TNExHmF6qpyaxH26AMp7Tni%2FEajNmisAwIhpEp6&X-Amz-Signature=6266c0d9c58e8da4c2be0e95e41f8a9007730b46d876c50df572982b4443d126&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
