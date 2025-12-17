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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AAUIWHA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtionWfIRmwV5hc0bb2%2B0gRbXYChnaba2xnKpBm75ChAiAHVcEp2YOgv1dbmshCLi%2B2zAofUWj7NShwDFKGSuEHayqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTsnXCksK0aFCKPJCKtwDH2QCfE8y6%2Bt4C5g39Ta9GrXECFdbirWqtwNGkPmTMdbk5RiDAICK9C8t00mxj%2Bcj9Kne0mqQkFCyKvzjN5FB7pYYzyuLHcgLtZuZ%2FRzeNUmG9%2BMRFnroASyETBbz9F2k2fByp6k4waxDewIL0GI3HlBh%2F1clj2kdibBHM8%2BXhjwEe1M9ARnM5M1cRfUGO6eKa%2BD5GJXcBChzpH3YiPR8%2BmeOIduJdMFzH36Km40SqefXJeDCk4oA3ToGAqoQE0MaEdZlEKkrEJoKwIIHS8q8jtuJjvuNM4bPZJgQGxCk2SVB%2BvqplSu1AdMKUqzJhRH0w5Pg5LBrPzrwMIEbNwldtJS9Qu%2BxT2t8Rnp13TCcqAcWfra4eKNKkGC00lL0yMx3WZKLFCz7ORnwtuu9gTq1CLm%2B8CIlW3jXL3N1%2BAXpseeMbU0%2B10BGQ2%2B5wVs2xpCL4%2FQRc%2B8koky6k2ExBHgvw6SMOzSVCGBIhw9HJyZuBOz%2FhOhuHUIzT%2BmX2RrGz8lIkl0oWo97iMBFd5HovhJplsda3jjfNNLL8PfCah2gHCZyOxGH%2BKM%2B5LTMK7o5YwuPA0o1Rc%2FjK9vp5yiYi0ysm%2BoBzHLdSx82TICHGykDA%2BtwpYD7%2BVrA2hPKZscw6%2F%2BKygY6pgGp8wIy01uVTw1xwkkbmsNGb0mX0yTUfbqJOhprBrjHnlNMyRbzos2IgwkPetASYpnzqYHp9PPGc9OEZYXM%2FDnlxm2JVOQ8xGdas4fKpsHJsNmENYIfa%2Fu66%2BQPyrGxgCu6Pazboup4NC7utY0OTHU1R3ij8Tc60Dmhtp7kaM4x%2FtHWZnblOP7A%2FuTfRqPjNbo97XrS4MNQcHK0GwOP6eVkmdcoF3PP&X-Amz-Signature=35f802f4048e4b26c56bb58b385d383416b89fdaed3a374864c840b1474d69f6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664AAUIWHA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T145230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICtionWfIRmwV5hc0bb2%2B0gRbXYChnaba2xnKpBm75ChAiAHVcEp2YOgv1dbmshCLi%2B2zAofUWj7NShwDFKGSuEHayqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMTsnXCksK0aFCKPJCKtwDH2QCfE8y6%2Bt4C5g39Ta9GrXECFdbirWqtwNGkPmTMdbk5RiDAICK9C8t00mxj%2Bcj9Kne0mqQkFCyKvzjN5FB7pYYzyuLHcgLtZuZ%2FRzeNUmG9%2BMRFnroASyETBbz9F2k2fByp6k4waxDewIL0GI3HlBh%2F1clj2kdibBHM8%2BXhjwEe1M9ARnM5M1cRfUGO6eKa%2BD5GJXcBChzpH3YiPR8%2BmeOIduJdMFzH36Km40SqefXJeDCk4oA3ToGAqoQE0MaEdZlEKkrEJoKwIIHS8q8jtuJjvuNM4bPZJgQGxCk2SVB%2BvqplSu1AdMKUqzJhRH0w5Pg5LBrPzrwMIEbNwldtJS9Qu%2BxT2t8Rnp13TCcqAcWfra4eKNKkGC00lL0yMx3WZKLFCz7ORnwtuu9gTq1CLm%2B8CIlW3jXL3N1%2BAXpseeMbU0%2B10BGQ2%2B5wVs2xpCL4%2FQRc%2B8koky6k2ExBHgvw6SMOzSVCGBIhw9HJyZuBOz%2FhOhuHUIzT%2BmX2RrGz8lIkl0oWo97iMBFd5HovhJplsda3jjfNNLL8PfCah2gHCZyOxGH%2BKM%2B5LTMK7o5YwuPA0o1Rc%2FjK9vp5yiYi0ysm%2BoBzHLdSx82TICHGykDA%2BtwpYD7%2BVrA2hPKZscw6%2F%2BKygY6pgGp8wIy01uVTw1xwkkbmsNGb0mX0yTUfbqJOhprBrjHnlNMyRbzos2IgwkPetASYpnzqYHp9PPGc9OEZYXM%2FDnlxm2JVOQ8xGdas4fKpsHJsNmENYIfa%2Fu66%2BQPyrGxgCu6Pazboup4NC7utY0OTHU1R3ij8Tc60Dmhtp7kaM4x%2FtHWZnblOP7A%2FuTfRqPjNbo97XrS4MNQcHK0GwOP6eVkmdcoF3PP&X-Amz-Signature=d3919007c16f61d20338c7e8007d86bdfd8f44dd56ff12f21967fc1e7580ab79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
