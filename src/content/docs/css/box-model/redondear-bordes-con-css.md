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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJD5SF4M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoKz2sWva3aJM9wNs7fORzRI5Ai%2B%2B%2BNqgY2gWM0BUqegIhAOwjYPswnAE4Vw82WBNkJwHIJr4GSlWUCq79Fm5oQIQUKv8DCHQQABoMNjM3NDIzMTgzODA1IgyNwmz3%2BdWW08HbDpkq3APdIW%2F01KUUXyDz7%2FloaRXG7as7VkLH91Nxm%2B3c8qxuKjFq21nqp7oHGOcry1d%2BbB79CLntjPPH8g5LPzP3CkFCZ97DhsA%2BATJt1sGpiKQxcQRx10pvCmnC6DaOCviY%2FSZCdFswPzjEWIPL19jwsDIMGH4AWleTeix2o6W3Yq5UpXoqxx21%2FLcJwS%2B%2FhrHrzU9Wie2BTj3FUjGYmRku9%2BamU%2BsSwruZU9gF87y7fcn%2F3QLvLHvmYmB81YKdZAaZJs8lOQIOXdROyzrrP7tS%2BEF6fI8LNWwYIWYJ5hCcfe7BFJ8fcaO4k0nN6%2FOmXI598fmAHy2tsLUmjxJa9E%2BdAwhEDwJmsyhd%2FqRpKZfPqUEEXznfZDOiygoV8I7i9jsV%2BMYW9MHKMcDh%2FoosChdPqs1IdF55AuJ7L%2FhSmqci0kNdlvyBh8zE4n%2BoM2sUoLwQ1fXQj2dX2GTg3HDOgaDc4owde6g8pRAojZaxjYcSWc251p2P9uaBGFnWHL9PaeViZblWRhtgA9iNSAVGW75GoJoWiWcW55Q%2Fi5fTCcW3b6Ju833ecT2RzyCAhpxYl5rPCpETq5XNfBUF%2BhejZXHMJCvvSwrPfXjiAySKIHggtFCJ%2FpxbFkBD0LMhxsoDdDDDsYjKBjqkAXwbZJfcqOZRzOICCJdYVCul0tk6oHcbJ7EyMrX%2BJc1yAmKEpWJMZRB5PvJ8Lb6gsoey56UTCJjPRSQrHe%2BNxx3YmNPq8uC6d8OBk7V64JOnNdgb9mDSl7c4pyr7S7h9cNYckqWSpbO0A1guJ1AXur%2F1tCqqtuQn8fYVoFiRHt6aAV%2FIOOMpzRwQn6rWYkfVSsZ4%2FxsJ18kpKFAJW0wzunHvg8jz&X-Amz-Signature=01ede4a1cfacd5d70985ec2e8c16a48102068c88855bf33fedba996a7a378aa6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJD5SF4M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T025522Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCoKz2sWva3aJM9wNs7fORzRI5Ai%2B%2B%2BNqgY2gWM0BUqegIhAOwjYPswnAE4Vw82WBNkJwHIJr4GSlWUCq79Fm5oQIQUKv8DCHQQABoMNjM3NDIzMTgzODA1IgyNwmz3%2BdWW08HbDpkq3APdIW%2F01KUUXyDz7%2FloaRXG7as7VkLH91Nxm%2B3c8qxuKjFq21nqp7oHGOcry1d%2BbB79CLntjPPH8g5LPzP3CkFCZ97DhsA%2BATJt1sGpiKQxcQRx10pvCmnC6DaOCviY%2FSZCdFswPzjEWIPL19jwsDIMGH4AWleTeix2o6W3Yq5UpXoqxx21%2FLcJwS%2B%2FhrHrzU9Wie2BTj3FUjGYmRku9%2BamU%2BsSwruZU9gF87y7fcn%2F3QLvLHvmYmB81YKdZAaZJs8lOQIOXdROyzrrP7tS%2BEF6fI8LNWwYIWYJ5hCcfe7BFJ8fcaO4k0nN6%2FOmXI598fmAHy2tsLUmjxJa9E%2BdAwhEDwJmsyhd%2FqRpKZfPqUEEXznfZDOiygoV8I7i9jsV%2BMYW9MHKMcDh%2FoosChdPqs1IdF55AuJ7L%2FhSmqci0kNdlvyBh8zE4n%2BoM2sUoLwQ1fXQj2dX2GTg3HDOgaDc4owde6g8pRAojZaxjYcSWc251p2P9uaBGFnWHL9PaeViZblWRhtgA9iNSAVGW75GoJoWiWcW55Q%2Fi5fTCcW3b6Ju833ecT2RzyCAhpxYl5rPCpETq5XNfBUF%2BhejZXHMJCvvSwrPfXjiAySKIHggtFCJ%2FpxbFkBD0LMhxsoDdDDDsYjKBjqkAXwbZJfcqOZRzOICCJdYVCul0tk6oHcbJ7EyMrX%2BJc1yAmKEpWJMZRB5PvJ8Lb6gsoey56UTCJjPRSQrHe%2BNxx3YmNPq8uC6d8OBk7V64JOnNdgb9mDSl7c4pyr7S7h9cNYckqWSpbO0A1guJ1AXur%2F1tCqqtuQn8fYVoFiRHt6aAV%2FIOOMpzRwQn6rWYkfVSsZ4%2FxsJ18kpKFAJW0wzunHvg8jz&X-Amz-Signature=baa5df9f098e4fb008a4c38802d546202e1137c5db35e54ee2612d5a729fd079&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
