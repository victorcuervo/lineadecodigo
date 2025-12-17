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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKKCQAZC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbQAu2%2FNPsAKJHDU92s7zinl05sEvrpMumeG4wgQYyHgIhANcG5oToxtn1YV6WmPgRuxHFi33%2BrXslNuaA9swDfzCLKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtzJ%2FVH%2BCZEdXfBnUq3AOHwtd7K5Ip0Ak0H1A%2FXj0TJKoh3FSYpuZ5qbEVlh6%2FNSCIYS%2BfPNtLSFQu3SpNFfHy1OueQi8MMk6ou%2BZ8n6lQ5u5lHQhJFQfoJtbPOTXyTNOai1QfNDl1bYJ6EUq0h0ax24XB%2F0SCDM1YYQP6PzGvk2LQZkBXTgTsoV0YqMqHIhCCBz8mETmqAP3LhPa%2FUfv8p55RFXpfJEUET4xcSeJL9BXXLjfgrMpGgZYntMFbm7%2FRKcNk1GKOu4s12OaBnzSeIY5spK8Mot2mf8VgaEBJ80KKKD17lVY1akPuvOZI0G2yrP%2Brh1rlmTAIJRwp8a0R6MsH8GuUGOjqgwhaF7kezhPa1SIsUw%2Bmb1T6gATxneUqObPEgAuPjCCYOexrN92WkYYKdgcy0OzrXlwKdiqU2vvTIgMnKkaUXlnSP1v8%2BTBcMQN%2FxMkRHbk5cIWbqtNWxANVKZHlsy1uweJAg6yL%2BJcX84EQj07ZialZF1KclwCP%2BSyOX0GRUXKiQcXn7uVr0G9%2BBUiYaL9HiZncQzwnDrXsElKb36TOUCRO8IwCsMoEeahIeHhlRyqrD0yVAPWaKZOReNnEbsLsT9RxOm943zgwB8rB5Ylb%2F5pVx812Yn79T1I4Ija4vtLNdDDtoIvKBjqkAWHZ4utbFMxrMA9OqzKdbUrcDTBZD9vI2CrJjq54IXw%2FeNek%2BBzpb0l%2BdvPqmJWzanyFMc%2BW7LsWcQCaU8LpgJhvldrUJxcPh7Uj1ZuIzlnj8HhZxoksL7LQ%2B5Wt45Ks4ttWJr34EKwQYHYj%2FnC5BEN%2BxPiCNCRVL1c8ZB4uywF%2BMbLMZ4nVMLRkVVwHDOpc3nM%2BkGe%2FLzSgyyq0R9QGWRrbq5p%2F&X-Amz-Signature=01c6a28a2783446b337e6d57136589dea04d9814b9b681415fdb2d7612a83479&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKKCQAZC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T165633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDbQAu2%2FNPsAKJHDU92s7zinl05sEvrpMumeG4wgQYyHgIhANcG5oToxtn1YV6WmPgRuxHFi33%2BrXslNuaA9swDfzCLKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwtzJ%2FVH%2BCZEdXfBnUq3AOHwtd7K5Ip0Ak0H1A%2FXj0TJKoh3FSYpuZ5qbEVlh6%2FNSCIYS%2BfPNtLSFQu3SpNFfHy1OueQi8MMk6ou%2BZ8n6lQ5u5lHQhJFQfoJtbPOTXyTNOai1QfNDl1bYJ6EUq0h0ax24XB%2F0SCDM1YYQP6PzGvk2LQZkBXTgTsoV0YqMqHIhCCBz8mETmqAP3LhPa%2FUfv8p55RFXpfJEUET4xcSeJL9BXXLjfgrMpGgZYntMFbm7%2FRKcNk1GKOu4s12OaBnzSeIY5spK8Mot2mf8VgaEBJ80KKKD17lVY1akPuvOZI0G2yrP%2Brh1rlmTAIJRwp8a0R6MsH8GuUGOjqgwhaF7kezhPa1SIsUw%2Bmb1T6gATxneUqObPEgAuPjCCYOexrN92WkYYKdgcy0OzrXlwKdiqU2vvTIgMnKkaUXlnSP1v8%2BTBcMQN%2FxMkRHbk5cIWbqtNWxANVKZHlsy1uweJAg6yL%2BJcX84EQj07ZialZF1KclwCP%2BSyOX0GRUXKiQcXn7uVr0G9%2BBUiYaL9HiZncQzwnDrXsElKb36TOUCRO8IwCsMoEeahIeHhlRyqrD0yVAPWaKZOReNnEbsLsT9RxOm943zgwB8rB5Ylb%2F5pVx812Yn79T1I4Ija4vtLNdDDtoIvKBjqkAWHZ4utbFMxrMA9OqzKdbUrcDTBZD9vI2CrJjq54IXw%2FeNek%2BBzpb0l%2BdvPqmJWzanyFMc%2BW7LsWcQCaU8LpgJhvldrUJxcPh7Uj1ZuIzlnj8HhZxoksL7LQ%2B5Wt45Ks4ttWJr34EKwQYHYj%2FnC5BEN%2BxPiCNCRVL1c8ZB4uywF%2BMbLMZ4nVMLRkVVwHDOpc3nM%2BkGe%2FLzSgyyq0R9QGWRrbq5p%2F&X-Amz-Signature=207d9599558c0f305a75ac881d434a56958c89462e55a3ea5322d88234214f94&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
