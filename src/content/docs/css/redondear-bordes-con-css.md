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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3FPPWWM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgtmQF8fEOWs5MysjtzjJ9piFfpmf9V4MKDtR4QXp%2FQgIhAKuYdjK3qbwIZ3Rb2VaOdSCRjZUx2FdXYBLjfJhfTmZ9KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdP8e%2BpZ2D9WXW4Qwq3ANNTGEya8bH30I3901m6Mlsktn2OkWpaBS%2Biwg4auQihKU0LLw6jJQHnGsnfp73rZYXXXISWmxLOwvUL%2FrxGPo9P7xOdaW%2B0IyUmnTXJpOm57h%2F%2BtJpB%2Flz%2BTzpUWlJF53oEnwWG6f%2Bpd9uFJdFjalclokC48dxJa92ujezWzUeN9K40H%2F16x4Dz%2BhtcAQisoTUoQgFgmGr8XmzRrfFG2s1JVgtTIuwyRc7zvPQFIHs1ifCVQDYz4waZ6ls88DsGMUmKk%2F%2BFkZ6wzQkrKFPzwAPDdGVAzYT8yt546jqXfprFjDwCKvNJDzwwq2tuIvsGGa1nZ5ZYcIvkiXshB6VVObI6pecM8d8CoEu8GVQDc4hAEHPuoi2rqGsuf2Qe%2BJw81hj242PMTuA8uAx9MNcpXOaAXm7dSHuXLAE1W2qcp0iaQT82GYPVsH%2BlDE1UOKYtDZ9Dtn1MBUmGcZRzeoj9s6eAEcciLUMfoE9gyFjR%2BTJaek9zT3%2BIFCdYforT%2BXncWTPeD7wFx9tYx2HKmfSeKqHhM5Eg819VGmuC1RMZL9heecJTDZkYr1V7oMSI5DBrAeFA517fSw79DoPwaJyeo%2FdGiWbMcXVduO9voLJWWXWMPRF5eAmrUc3xaOXiTDw9NrJBjqkAZKps286cMAt6HAKLqDJDV8rCQb%2FyOunvpJp3Mw%2FuuCy3bVqHVJcqJO7AF3jGmldqLt0kkhteE1fGlX%2FINKdKSHl%2Fr3lnfbhjHITzf1HVz5sl1Y%2FdiL98IkbMIcoxTL659Mzyyw3WwwL7IvXAr0xD0Ma3M0J2s5Y8zhJ4O0zH2jEvcQZaJkwtqWVXXJNkga%2FwFG6Qyt9%2Bv0x3zK490qHvcDLuCiX&X-Amz-Signature=5a75bc8666d3fb6684478dcdaa641d0a367dcca97cd9f303c3462658ffe3224b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T3FPPWWM%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T115739Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDgtmQF8fEOWs5MysjtzjJ9piFfpmf9V4MKDtR4QXp%2FQgIhAKuYdjK3qbwIZ3Rb2VaOdSCRjZUx2FdXYBLjfJhfTmZ9KogECKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxdP8e%2BpZ2D9WXW4Qwq3ANNTGEya8bH30I3901m6Mlsktn2OkWpaBS%2Biwg4auQihKU0LLw6jJQHnGsnfp73rZYXXXISWmxLOwvUL%2FrxGPo9P7xOdaW%2B0IyUmnTXJpOm57h%2F%2BtJpB%2Flz%2BTzpUWlJF53oEnwWG6f%2Bpd9uFJdFjalclokC48dxJa92ujezWzUeN9K40H%2F16x4Dz%2BhtcAQisoTUoQgFgmGr8XmzRrfFG2s1JVgtTIuwyRc7zvPQFIHs1ifCVQDYz4waZ6ls88DsGMUmKk%2F%2BFkZ6wzQkrKFPzwAPDdGVAzYT8yt546jqXfprFjDwCKvNJDzwwq2tuIvsGGa1nZ5ZYcIvkiXshB6VVObI6pecM8d8CoEu8GVQDc4hAEHPuoi2rqGsuf2Qe%2BJw81hj242PMTuA8uAx9MNcpXOaAXm7dSHuXLAE1W2qcp0iaQT82GYPVsH%2BlDE1UOKYtDZ9Dtn1MBUmGcZRzeoj9s6eAEcciLUMfoE9gyFjR%2BTJaek9zT3%2BIFCdYforT%2BXncWTPeD7wFx9tYx2HKmfSeKqHhM5Eg819VGmuC1RMZL9heecJTDZkYr1V7oMSI5DBrAeFA517fSw79DoPwaJyeo%2FdGiWbMcXVduO9voLJWWXWMPRF5eAmrUc3xaOXiTDw9NrJBjqkAZKps286cMAt6HAKLqDJDV8rCQb%2FyOunvpJp3Mw%2FuuCy3bVqHVJcqJO7AF3jGmldqLt0kkhteE1fGlX%2FINKdKSHl%2Fr3lnfbhjHITzf1HVz5sl1Y%2FdiL98IkbMIcoxTL659Mzyyw3WwwL7IvXAr0xD0Ma3M0J2s5Y8zhJ4O0zH2jEvcQZaJkwtqWVXXJNkga%2FwFG6Qyt9%2Bv0x3zK490qHvcDLuCiX&X-Amz-Signature=1a07191c0e1fdfbf5a6cc75a298d47a8aea77faf306caf20f670a3fb71dd7c8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
