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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQC54SD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGq4X0P4jaY6AXfZ6cDjVf9zBMXcsif81JBNJwOnmPqAiEA9d3y0vb8UimG9i86nY5QY19lBPpVFJcGKy9temtk7Ccq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEpFrVqGPmDqyjD3vCrcA%2BaJyozhog6koU%2Br88uvgPqHfruXx8V3qltpflHg%2F%2BPdLHLWOc787gDswPiixiM6F3fWTm4Rd%2FEt5dccmMYeYD%2BcIpMti9SAW26IJxjgP8Z63QghBugkXenvF5vmN07eXkWHM0iJXKdwRarme06pef5F6SsdVrpUZv%2BkeiXTPmn7U1VECj6KEadHKSSLVVw8lmjixWMgbF%2BGGCtjWce0cGm76GZ8G3Ngjb2KfxqdUOo38Pw%2BJJttxzGblUrpqOMXMTe2ZbOY12miRysz9ne0thv9SSYd1CyReo%2BS0WthnnrNRwg3n0RbYZnxY27DnwW8Nm2ib9i4KnehU3BXflxqWzIu7Y9Ck0kw%2BpGT7nOALRT%2FulADyRnZFkbq8ou0JX69vTSHeFRanlEdTWsuEze4nEpLYjUdYF6ccZmfaZM8GlAo9D0XSxOVkKRlGtoar49GO5CkPHQ7HZjF%2Fkxs%2BnicTUqr8IsSVzXx3Qk43NThLJ4rW1kqtmQ2NkJ%2FQDXZMIZv9ZIIAFMSaFc2z2eNZf4hvdt%2FyKKmIR2HdEXL%2B1RWr4qrHGkZ70JCc7dUrcvZ6O3b3yADzrdJLunE85vkMLSZ4H8NjlVBAgp8Qgk49TSRbG8t08Litp85izdVZkzjMImyiMoGOqUBDbDAf8TrA%2F7QLlbp%2FhMBWnHQJ%2BXFBdXGxqt%2BmqpjXf5nXOWwOcbRat5c9R%2B07fCli%2Fsl0dt%2F4onHYXmfp1QBdYxbcrDLXTpzcs5%2BbnL53z4dMJHoui74w%2B3hFelYitvIISdPcLcoEW8xliGzWVRjuCwROlyjE%2F87Ln4lgGCcdBKTP0yNngTKsZYQphnOgMAz09%2BuuXvU8VP%2BqOqYsuuxB71mUXc%2F&X-Amz-Signature=cbb9d95a4985336d93269853938f343b965d238fde6ace72a5cad036e7228461&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIQC54SD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032629Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEGq4X0P4jaY6AXfZ6cDjVf9zBMXcsif81JBNJwOnmPqAiEA9d3y0vb8UimG9i86nY5QY19lBPpVFJcGKy9temtk7Ccq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDEpFrVqGPmDqyjD3vCrcA%2BaJyozhog6koU%2Br88uvgPqHfruXx8V3qltpflHg%2F%2BPdLHLWOc787gDswPiixiM6F3fWTm4Rd%2FEt5dccmMYeYD%2BcIpMti9SAW26IJxjgP8Z63QghBugkXenvF5vmN07eXkWHM0iJXKdwRarme06pef5F6SsdVrpUZv%2BkeiXTPmn7U1VECj6KEadHKSSLVVw8lmjixWMgbF%2BGGCtjWce0cGm76GZ8G3Ngjb2KfxqdUOo38Pw%2BJJttxzGblUrpqOMXMTe2ZbOY12miRysz9ne0thv9SSYd1CyReo%2BS0WthnnrNRwg3n0RbYZnxY27DnwW8Nm2ib9i4KnehU3BXflxqWzIu7Y9Ck0kw%2BpGT7nOALRT%2FulADyRnZFkbq8ou0JX69vTSHeFRanlEdTWsuEze4nEpLYjUdYF6ccZmfaZM8GlAo9D0XSxOVkKRlGtoar49GO5CkPHQ7HZjF%2Fkxs%2BnicTUqr8IsSVzXx3Qk43NThLJ4rW1kqtmQ2NkJ%2FQDXZMIZv9ZIIAFMSaFc2z2eNZf4hvdt%2FyKKmIR2HdEXL%2B1RWr4qrHGkZ70JCc7dUrcvZ6O3b3yADzrdJLunE85vkMLSZ4H8NjlVBAgp8Qgk49TSRbG8t08Litp85izdVZkzjMImyiMoGOqUBDbDAf8TrA%2F7QLlbp%2FhMBWnHQJ%2BXFBdXGxqt%2BmqpjXf5nXOWwOcbRat5c9R%2B07fCli%2Fsl0dt%2F4onHYXmfp1QBdYxbcrDLXTpzcs5%2BbnL53z4dMJHoui74w%2B3hFelYitvIISdPcLcoEW8xliGzWVRjuCwROlyjE%2F87Ln4lgGCcdBKTP0yNngTKsZYQphnOgMAz09%2BuuXvU8VP%2BqOqYsuuxB71mUXc%2F&X-Amz-Signature=66c8d89582ae8636d95e28eebf4761686f26d330f71fa7b9351d70ac168b7e53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
