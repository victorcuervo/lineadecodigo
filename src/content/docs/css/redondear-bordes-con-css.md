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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UALQC4G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4mBo9Sk9VlNQZxS6Hn9maksKyWGD4bzBBcb1KPY0cyAiA520B28r679%2Bltvkt7if%2Fcrg1POtCdAoj5UkCdYX8LWSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM4s6Vjtr3L%2BwVd0hoKtwDSGFQzC%2Fu9b8QJxSR1PwrzVl47GKOqRj2Ie47q4jZ6qg3em9uUS0WtkM23OlwETxqlfQPfvzZ0rJSG5dx43u0fmzsLDnH6F8PU4B%2B6H6HuWqFbu09ATga2TOJecF4KokEqXiN8N%2BKIEiBc9mJr%2F%2BbYP3ZzJLXOANU792N8llLnAT2Y0TN9VcS0zKNh%2BuxQ2VOEonJ2IyQsNGVglwAjpGlvm68dX4c%2FVeWzhmehsE974mIwPg3H4eXBuyirOAbYh9xh23l%2Bn6hk45ITlH1DiZ9jCn3wW348wOhYNjnU%2B4Vfe37NCRmAchruYuVPO7KFu69j9pGb%2B91hqivOlklPS53A7lQWAmDBWS5RBYPixwsmB9SWV3tIazDSO67Y5gVGREloVdOQEuFGX9KiqLo1lGGa1xxHNIOuQDJ26APNHve28Ii4jpkXlwC5W6js3mS2Rs3vvNymS1m8eDd9xEOmZ51K8wqzP%2BX9xEUCdGKLkNBIugQbj4XEZKlEVNh2neNGoM%2BdljXGvwReQ6NZDiv59uCVdIgLsDIlT%2BVCtDl0AAy4E8R1taaRi1rd5zpa1fgxbA22yCBL3MrRxZFd%2FCtJY4fLwbz62L4TjpU2sXfg9TdTMekmsupr02%2BYln4j84wkafQyQY6pgHspPizmxwUhVzBiMu6q3zY5OH0hxWquon2stw80Vk%2BO%2B49iK8iJBrrCANEnnP4VMqLzeHyWcInThzcx6tBmItynrXB327MMNYIVfu%2Ften%2FYbBriaLxjaD4LYQETuPJCUG1AgWuMl0N%2B%2FfD6sWiAjznGc%2FaaRwA1eyzG6wmanbHhht%2BUcpUSbG5mCkXzjh0EyEJImpcIoQure2wzbUYivN08uSmk1%2B1&X-Amz-Signature=60815c57b6fe2dfe8b38af44b48ef76526e0f8555976c621faf115e021670424&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UALQC4G%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T141834Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCID4mBo9Sk9VlNQZxS6Hn9maksKyWGD4bzBBcb1KPY0cyAiA520B28r679%2Bltvkt7if%2Fcrg1POtCdAoj5UkCdYX8LWSr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIM4s6Vjtr3L%2BwVd0hoKtwDSGFQzC%2Fu9b8QJxSR1PwrzVl47GKOqRj2Ie47q4jZ6qg3em9uUS0WtkM23OlwETxqlfQPfvzZ0rJSG5dx43u0fmzsLDnH6F8PU4B%2B6H6HuWqFbu09ATga2TOJecF4KokEqXiN8N%2BKIEiBc9mJr%2F%2BbYP3ZzJLXOANU792N8llLnAT2Y0TN9VcS0zKNh%2BuxQ2VOEonJ2IyQsNGVglwAjpGlvm68dX4c%2FVeWzhmehsE974mIwPg3H4eXBuyirOAbYh9xh23l%2Bn6hk45ITlH1DiZ9jCn3wW348wOhYNjnU%2B4Vfe37NCRmAchruYuVPO7KFu69j9pGb%2B91hqivOlklPS53A7lQWAmDBWS5RBYPixwsmB9SWV3tIazDSO67Y5gVGREloVdOQEuFGX9KiqLo1lGGa1xxHNIOuQDJ26APNHve28Ii4jpkXlwC5W6js3mS2Rs3vvNymS1m8eDd9xEOmZ51K8wqzP%2BX9xEUCdGKLkNBIugQbj4XEZKlEVNh2neNGoM%2BdljXGvwReQ6NZDiv59uCVdIgLsDIlT%2BVCtDl0AAy4E8R1taaRi1rd5zpa1fgxbA22yCBL3MrRxZFd%2FCtJY4fLwbz62L4TjpU2sXfg9TdTMekmsupr02%2BYln4j84wkafQyQY6pgHspPizmxwUhVzBiMu6q3zY5OH0hxWquon2stw80Vk%2BO%2B49iK8iJBrrCANEnnP4VMqLzeHyWcInThzcx6tBmItynrXB327MMNYIVfu%2Ften%2FYbBriaLxjaD4LYQETuPJCUG1AgWuMl0N%2B%2FfD6sWiAjznGc%2FaaRwA1eyzG6wmanbHhht%2BUcpUSbG5mCkXzjh0EyEJImpcIoQure2wzbUYivN08uSmk1%2B1&X-Amz-Signature=91c571d8f6d1218af0f7355ae1983d2297836deb8aa81da84e88424553452d39&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
