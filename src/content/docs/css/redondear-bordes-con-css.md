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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UMZKMWY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC823nhMbePw%2Fu%2B%2FlGrbSbJhQkFR%2FUgsmS3xlOQFlpNCQIhALgGSXqvRlF6D6owXRR17udQXuN3sEO9mKBL0TUOOpd%2BKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8%2FZGZ9LjmoKgY79Mq3ANFdKXmi26%2FiZhg4mmCq%2F0xi0%2FiY5bryZ2c2Y6K7PTVF64lw0%2FlvHi7ZqZHNB6lYeFT0s271YYwXdWUDKjvumfRUvIXzBEM%2Fwi0mzasp1QjNSzN04QS8HWN6Q5ExKzEY43zGpeKKzg%2B2q2bhyUWWG8v%2F3fz9p9bs1oudUF%2Bh26YHXrdwVY4JEKIKPsvD%2BgFYGGJBVkJPXcud%2BgKR0VlI8ZtBhNK%2F8eFRssJjCD4f7oQhU2havoatlirIfJ0NDUq9j8zu2I%2Bp9EjmpYgQJsyeyTAou1Ioompp6gdU3RIBPeE5PZdDh%2F0yQroeRUxdjIS2TSWABs5e4iuoRdF4CghE0ehi92mE63HEDWRE%2Bq3qWaff3ihZ9lx5Yves1nVDQBsl3HPGslpKimdqaN5yMj0CtYsyy%2FMt87md%2BYgTaVX1VYdoj1ZaOTuN4%2F34Nx8sgENfu4ua2Yez9uTFJzNmvNK0hVzEsogmvqgg2wH7NPmqVu6XNyJ8HjK4YUQ3C%2FtL8byQrx5F9MNxisXtsW%2F02bdFZRCsQuSGjG%2Bi48NlSBrGko7YhIG%2F9Vf3sct%2B0KALPmMzYheHF8lqavz2i1hdJQw%2BawxdVD3ArrExKsXU4nvaOpylmq1oGb0oAbPUM%2BMbDCGtNzJBjqkAcfd%2BOmmPRDWnTPVa50BMv1S9QWB2XYvQzHr2%2F%2BSBNtgUbP9dIwJWF8Z38fZ8h9Jni6Ci2XlUMLP5dqUhtPdqkYbLNQofDWgtlBKKPInFKOhDp5LzjOzh9mSiFEHnh3S%2BkBx%2FBFGjrJmiEv%2B3hawUjFc4pJx7HUxXAdUdaVXuTYE1bGCIA8BLryTLagLzyBUaM7MU2spDCt8NkgN80%2Bs4O9ZOmnv&X-Amz-Signature=2417bd1e7ff25035629c3868405af20b991a2e66877638dc866f004b866f499d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UMZKMWY%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183643Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC823nhMbePw%2Fu%2B%2FlGrbSbJhQkFR%2FUgsmS3xlOQFlpNCQIhALgGSXqvRlF6D6owXRR17udQXuN3sEO9mKBL0TUOOpd%2BKogECKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igw8%2FZGZ9LjmoKgY79Mq3ANFdKXmi26%2FiZhg4mmCq%2F0xi0%2FiY5bryZ2c2Y6K7PTVF64lw0%2FlvHi7ZqZHNB6lYeFT0s271YYwXdWUDKjvumfRUvIXzBEM%2Fwi0mzasp1QjNSzN04QS8HWN6Q5ExKzEY43zGpeKKzg%2B2q2bhyUWWG8v%2F3fz9p9bs1oudUF%2Bh26YHXrdwVY4JEKIKPsvD%2BgFYGGJBVkJPXcud%2BgKR0VlI8ZtBhNK%2F8eFRssJjCD4f7oQhU2havoatlirIfJ0NDUq9j8zu2I%2Bp9EjmpYgQJsyeyTAou1Ioompp6gdU3RIBPeE5PZdDh%2F0yQroeRUxdjIS2TSWABs5e4iuoRdF4CghE0ehi92mE63HEDWRE%2Bq3qWaff3ihZ9lx5Yves1nVDQBsl3HPGslpKimdqaN5yMj0CtYsyy%2FMt87md%2BYgTaVX1VYdoj1ZaOTuN4%2F34Nx8sgENfu4ua2Yez9uTFJzNmvNK0hVzEsogmvqgg2wH7NPmqVu6XNyJ8HjK4YUQ3C%2FtL8byQrx5F9MNxisXtsW%2F02bdFZRCsQuSGjG%2Bi48NlSBrGko7YhIG%2F9Vf3sct%2B0KALPmMzYheHF8lqavz2i1hdJQw%2BawxdVD3ArrExKsXU4nvaOpylmq1oGb0oAbPUM%2BMbDCGtNzJBjqkAcfd%2BOmmPRDWnTPVa50BMv1S9QWB2XYvQzHr2%2F%2BSBNtgUbP9dIwJWF8Z38fZ8h9Jni6Ci2XlUMLP5dqUhtPdqkYbLNQofDWgtlBKKPInFKOhDp5LzjOzh9mSiFEHnh3S%2BkBx%2FBFGjrJmiEv%2B3hawUjFc4pJx7HUxXAdUdaVXuTYE1bGCIA8BLryTLagLzyBUaM7MU2spDCt8NkgN80%2Bs4O9ZOmnv&X-Amz-Signature=54ed9d04d70b90f61ed56eb1d729b281ab2c32a1b336250a768b28e5605ac310&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
