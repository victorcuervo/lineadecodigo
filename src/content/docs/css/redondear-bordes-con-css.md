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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5A5F7P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6yGAOmGYXvqFHrhz4lvAVpKblRYZa%2BIpFgNQUT4ByzAIhANlY%2BREuAZ3jbj0GTlaBkUOBOe%2BlSx4r%2BsGijcN6S87VKv8DCHQQABoMNjM3NDIzMTgzODA1IgyK5JmkyZrG5LAtjmQq3AOHSvBi9FRHXgHDYdC4fQltYGCO%2B2T6FtIqXiQlf0eitqfYjXFAF4p7zuRayKpvWft2wpUsfW2lWXvWbpBVykNQktcnzhJbwMxiW%2FagbsgHU%2BsGE6AWbpsLUQFXz2ek%2F2nJYmL%2Bgb8ePpAwHLO68ZDK29A6LGL79ussgMgw2OeYELWCVTeH%2FT1sGJfiu8%2FhUo5HhnaqgT60rvwq2NvjGMqnWz%2B9PgIIpIqkdJyH0nrk4gBNKlKWPPDyGUP23XFpvAMc%2FnAiCTImpJGAikjDMfsJgoYa6kTjtYxecCp64Xvx5WuQeGx2Xda8AeCiz5cWfRx1vC2QJVNCE7aPqDEMI6inzXvyukuO55hfoCwqlLis2QL59E2tDUqkUapUUv5Coo%2BD2zpY7EZFkrPagcyyjTycHsTFhGUaW2G%2B039RCu1Wuo6KUm7R%2FFrV0LkSFyitZetB7X5%2FxZTIUYuG4ZDv8KipH8FYIjPiCXhWZQ%2FVbwmEtl6gXOf16eU%2BR0qzKwnI6MxDQWNE8yoK8Hdg6Du0MxTcrFjQP8QUuUVviGSk0qZaZpXlIcyDtlC7YliAXeNBp%2FQiUmgNWcmrrRhNUeXwBpCB8nY0WtlysPbfgsEVqOeW3pz4vwzMj4lDekju2zCjptDJBjqkAbzcJQ7Gr5VZN15gB%2FLfNEV42YrRDqAQ1hqfxmvi8Ajm6taxCljbe6b2Rm1mBKmD49K8CO65RhtH%2B1HOd0KDqEhEfNwEgErxL%2BJ4wEI6VoJu1rD9STOFxXPeWUFtqpld7MuebuZxobOz2W0iuXHYNqTLEODdsM8JwXheM6Xs3E8Z0uvF1V%2FbAYb%2FH21Pt738CgRHHsqY%2BH%2FEuSBgo9kiXTsuhanO&X-Amz-Signature=91a3c79bda616cc35d2ae5c4169ddce1a5864377f874d25f42fdc81c23cf6ada&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XB5A5F7P%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T113359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6yGAOmGYXvqFHrhz4lvAVpKblRYZa%2BIpFgNQUT4ByzAIhANlY%2BREuAZ3jbj0GTlaBkUOBOe%2BlSx4r%2BsGijcN6S87VKv8DCHQQABoMNjM3NDIzMTgzODA1IgyK5JmkyZrG5LAtjmQq3AOHSvBi9FRHXgHDYdC4fQltYGCO%2B2T6FtIqXiQlf0eitqfYjXFAF4p7zuRayKpvWft2wpUsfW2lWXvWbpBVykNQktcnzhJbwMxiW%2FagbsgHU%2BsGE6AWbpsLUQFXz2ek%2F2nJYmL%2Bgb8ePpAwHLO68ZDK29A6LGL79ussgMgw2OeYELWCVTeH%2FT1sGJfiu8%2FhUo5HhnaqgT60rvwq2NvjGMqnWz%2B9PgIIpIqkdJyH0nrk4gBNKlKWPPDyGUP23XFpvAMc%2FnAiCTImpJGAikjDMfsJgoYa6kTjtYxecCp64Xvx5WuQeGx2Xda8AeCiz5cWfRx1vC2QJVNCE7aPqDEMI6inzXvyukuO55hfoCwqlLis2QL59E2tDUqkUapUUv5Coo%2BD2zpY7EZFkrPagcyyjTycHsTFhGUaW2G%2B039RCu1Wuo6KUm7R%2FFrV0LkSFyitZetB7X5%2FxZTIUYuG4ZDv8KipH8FYIjPiCXhWZQ%2FVbwmEtl6gXOf16eU%2BR0qzKwnI6MxDQWNE8yoK8Hdg6Du0MxTcrFjQP8QUuUVviGSk0qZaZpXlIcyDtlC7YliAXeNBp%2FQiUmgNWcmrrRhNUeXwBpCB8nY0WtlysPbfgsEVqOeW3pz4vwzMj4lDekju2zCjptDJBjqkAbzcJQ7Gr5VZN15gB%2FLfNEV42YrRDqAQ1hqfxmvi8Ajm6taxCljbe6b2Rm1mBKmD49K8CO65RhtH%2B1HOd0KDqEhEfNwEgErxL%2BJ4wEI6VoJu1rD9STOFxXPeWUFtqpld7MuebuZxobOz2W0iuXHYNqTLEODdsM8JwXheM6Xs3E8Z0uvF1V%2FbAYb%2FH21Pt738CgRHHsqY%2BH%2FEuSBgo9kiXTsuhanO&X-Amz-Signature=ce8bdc3f88f70047e38cda989fd2475823939dd7a9a5b7aa20e69e9d4605a433&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
