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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WV6WKU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmJLYGpKXqvj2EIXDNGkFklkBKkHuMfXR%2F4bHcvRSlUAIhAPAiud6PeEQ8KvBNkFv69vVJDu0wq3pZbntCllao48zqKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsOt7NLAecBXUw4ckq3APoBQIeSLPT4nwptjvBCj0EJwF1kHtMrrFozpw7%2Fw5DUYjWQD6nO1wTvjU6XAZDwS3YIjA7Z5GoOSUw9ZC04RhZYYzZ7yXEiyYAeZyVhGTOk0kbfpAiyzzpCKXAvc7qXIgUpEGz4fmQCKcMzvzzpYWrxZsrdWW6yCb%2BEqc8vsk6wqAreM3aoesPbD4cIaW3tFG3BFyrUs4vbLrliryRLh14x4W8WLb55kjAgGjty4XaCbqr2VUX6vnBw4HjX9mrsSnM%2BH3O3E4eu8tKBpZ7anK8QfsK%2B1BEqdIAq2PDwvw%2BFXYq0cNi15XIQsp3%2Fb7t6FExKKd0gKOxZuqrbdf6AOkf5a3y%2BGZSjFh4nCHuWIiAvyahJ%2Bg1xDk94fEo5XJ3df%2F%2BR3eaOqnEm0OK81mTd%2BPozHTcSQr9lI3qfT3qijAGInBVMF92no%2BoX%2Bn4Musw2L5%2FOF93wF1tttwhrBObJNQsdn8sAlHLaWxj7j1V6xGhk8dZne0VOppCHlYo7OQjQEzo3Q9%2F9mp6YVsGQBb9k3BI7rJneWv%2F3jxzNBgGSdfRWh4nU6N7eP4%2BBCNyXFfOftqEpkbzomr3o%2FFPlwFxZOvcWIwL%2FbWU88Mm9Ay7fuJTXZk1EZIj3sq%2BZ3psmzCXwtvJBjqkAVwmvZSmRnDrLxmzD3vxjUmh0Iz1MY1Qe79WbNNwYVHc9wNYeQB8wGxSO4uIVQYbX93NVyghRTKCvfpl1kWMw9sL4H5o%2Fkz3erBqNsbQwT0iV5Y3%2FEHMbxY0j1aBDx9lA0PZomz8%2FtHl%2FJZ70j%2BYTChlkVL%2BQ2un4aLTehBt5RCatA5T8gAtd889xhkOzaBKNdOBmmyQr%2FVBoWm%2Be8%2BdCWr%2FxBAZ&X-Amz-Signature=72197efc391270fa04eabdc9998450193ad2e1c03fd4fe931aecfac89cc14d07&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46622WV6WKU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T151514Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmJLYGpKXqvj2EIXDNGkFklkBKkHuMfXR%2F4bHcvRSlUAIhAPAiud6PeEQ8KvBNkFv69vVJDu0wq3pZbntCllao48zqKogECKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwsOt7NLAecBXUw4ckq3APoBQIeSLPT4nwptjvBCj0EJwF1kHtMrrFozpw7%2Fw5DUYjWQD6nO1wTvjU6XAZDwS3YIjA7Z5GoOSUw9ZC04RhZYYzZ7yXEiyYAeZyVhGTOk0kbfpAiyzzpCKXAvc7qXIgUpEGz4fmQCKcMzvzzpYWrxZsrdWW6yCb%2BEqc8vsk6wqAreM3aoesPbD4cIaW3tFG3BFyrUs4vbLrliryRLh14x4W8WLb55kjAgGjty4XaCbqr2VUX6vnBw4HjX9mrsSnM%2BH3O3E4eu8tKBpZ7anK8QfsK%2B1BEqdIAq2PDwvw%2BFXYq0cNi15XIQsp3%2Fb7t6FExKKd0gKOxZuqrbdf6AOkf5a3y%2BGZSjFh4nCHuWIiAvyahJ%2Bg1xDk94fEo5XJ3df%2F%2BR3eaOqnEm0OK81mTd%2BPozHTcSQr9lI3qfT3qijAGInBVMF92no%2BoX%2Bn4Musw2L5%2FOF93wF1tttwhrBObJNQsdn8sAlHLaWxj7j1V6xGhk8dZne0VOppCHlYo7OQjQEzo3Q9%2F9mp6YVsGQBb9k3BI7rJneWv%2F3jxzNBgGSdfRWh4nU6N7eP4%2BBCNyXFfOftqEpkbzomr3o%2FFPlwFxZOvcWIwL%2FbWU88Mm9Ay7fuJTXZk1EZIj3sq%2BZ3psmzCXwtvJBjqkAVwmvZSmRnDrLxmzD3vxjUmh0Iz1MY1Qe79WbNNwYVHc9wNYeQB8wGxSO4uIVQYbX93NVyghRTKCvfpl1kWMw9sL4H5o%2Fkz3erBqNsbQwT0iV5Y3%2FEHMbxY0j1aBDx9lA0PZomz8%2FtHl%2FJZ70j%2BYTChlkVL%2BQ2un4aLTehBt5RCatA5T8gAtd889xhkOzaBKNdOBmmyQr%2FVBoWm%2Be8%2BdCWr%2FxBAZ&X-Amz-Signature=37d234e6f4e87906f980885235a9837102f180f709cde1f28146dcff79f7bf41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
