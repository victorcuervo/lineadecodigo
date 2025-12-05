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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZAUCDZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl9mZ9DLCNWI1iX2pdqK7NGGZRPXoZY2Jwy6E2ycHLLwIgCjn0fgIGYpBR3YuhKI5dKgdlY1mZyT8riLTCqRISYNAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGu04e2Ar05KVkH0iCrcA9Guhph%2Be%2B7vtEsigQA4W%2FsPEr9ILv4b8LW86kgEts%2B7pyAA96YllVNGdUrOfX6%2Fo6iFkM5UJpWlB2VBJeNw5FfnphIydAkPzKAlOJkVphA5YExVaDrY4zWFJ1h6CPC4%2BdlcS9Cs2HJNrVDwtZ8idSXzZBqW2A7QJThfLVduPCQPxEHa9bP1muWco3wDPMB1jAqPDDq48UkyeTuEwqeDCf1G4EzU%2BVY4UCjoGINOZPpzMVEItPp8jAJJyrTjqkVRyx%2B1%2BPAi2aKJldpBxBnnxwovXA94o%2F%2FQxK4fGOuX5n9EVT7Xmblfj%2BDJN2O3kEFyPoFmJsBK9rVd75BPtvcpAUxMYfUssmkIBWWOicoiGuhKvyrr3F9LVtuoKO3rMmU75pdEQgrvzPQEBY3gSH68Orj3OY2Vn%2BVDG2o7uZ8TWqg%2FvrQDY1kLZeSJLClmi6ncCimvdY%2B17PQwKPuctEz5ZCm34Eti2MS73t79PPRyNWnvVrrZCPO0G%2Bq0GsV37Zh8MNSh3tf7KDHY3ROgv0BifoX3ByHHWymJDCnal8KUyvG%2BvbAu8%2FuQnQL%2FxEjBjXIU7j4NETOpLC2K9mIPv1JSeeInila2i6HJVoN%2B2XwR6%2Fg3%2B%2Fs0V14iA1PfNDuSMOPNyskGOqUBI%2BvHfePkzccF1tzDWoD8lcYcoi3bHqWymLIre6phSPjC9CtacWWfjpJ7hSMtZrJi6tYWstV7ztPcdKUFiG8p8PbpwqOzsbzuOp09%2F%2B6X7Se0Tn8T0FHZMeIPGI45S9C0QOhnJOc%2ByYTUmneedyJJldq%2FFHYPeorN1kMKx0ug%2BzH8C4Yw6BtYrjQX0UQrvXGVlm%2Bgr2V05wP0pxrV7H%2F1YYlwb6Vg&X-Amz-Signature=7d9997289accd8993d97160afcdf37eb71494de9d2a1dcf5186616fe16872b7a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4ZAUCDZ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T142856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCl9mZ9DLCNWI1iX2pdqK7NGGZRPXoZY2Jwy6E2ycHLLwIgCjn0fgIGYpBR3YuhKI5dKgdlY1mZyT8riLTCqRISYNAq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDGu04e2Ar05KVkH0iCrcA9Guhph%2Be%2B7vtEsigQA4W%2FsPEr9ILv4b8LW86kgEts%2B7pyAA96YllVNGdUrOfX6%2Fo6iFkM5UJpWlB2VBJeNw5FfnphIydAkPzKAlOJkVphA5YExVaDrY4zWFJ1h6CPC4%2BdlcS9Cs2HJNrVDwtZ8idSXzZBqW2A7QJThfLVduPCQPxEHa9bP1muWco3wDPMB1jAqPDDq48UkyeTuEwqeDCf1G4EzU%2BVY4UCjoGINOZPpzMVEItPp8jAJJyrTjqkVRyx%2B1%2BPAi2aKJldpBxBnnxwovXA94o%2F%2FQxK4fGOuX5n9EVT7Xmblfj%2BDJN2O3kEFyPoFmJsBK9rVd75BPtvcpAUxMYfUssmkIBWWOicoiGuhKvyrr3F9LVtuoKO3rMmU75pdEQgrvzPQEBY3gSH68Orj3OY2Vn%2BVDG2o7uZ8TWqg%2FvrQDY1kLZeSJLClmi6ncCimvdY%2B17PQwKPuctEz5ZCm34Eti2MS73t79PPRyNWnvVrrZCPO0G%2Bq0GsV37Zh8MNSh3tf7KDHY3ROgv0BifoX3ByHHWymJDCnal8KUyvG%2BvbAu8%2FuQnQL%2FxEjBjXIU7j4NETOpLC2K9mIPv1JSeeInila2i6HJVoN%2B2XwR6%2Fg3%2B%2Fs0V14iA1PfNDuSMOPNyskGOqUBI%2BvHfePkzccF1tzDWoD8lcYcoi3bHqWymLIre6phSPjC9CtacWWfjpJ7hSMtZrJi6tYWstV7ztPcdKUFiG8p8PbpwqOzsbzuOp09%2F%2B6X7Se0Tn8T0FHZMeIPGI45S9C0QOhnJOc%2ByYTUmneedyJJldq%2FFHYPeorN1kMKx0ug%2BzH8C4Yw6BtYrjQX0UQrvXGVlm%2Bgr2V05wP0pxrV7H%2F1YYlwb6Vg&X-Amz-Signature=31b37f13377be2d35c544b58d6f77dd4b85c67a6f2b76a6dd7080bba812431f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
