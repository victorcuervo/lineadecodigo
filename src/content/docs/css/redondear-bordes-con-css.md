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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMG6RXYS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIwJ1jHoIuzJsQlw5laNgyB%2FDzbVeveiag%2FbtcXIxpXwIgURlcvvd83auisACtb0UHzJ1qptSLR%2Bcca6PU61lwxAMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCIX4LX1DmK5Z%2FqUMCrcA6HbfqEEyn0JY7VEwmyGm1cstPbBUp8GcdMQcOzxkHNa2EfHnwvc16ttJC0zLKBsGbPB5fy2Y8UZ88PDbzR6tyEYq1RelmzFE8gHw7PPFpbG0jcEbz5%2FHu4H0o7dDM0fYiqa4D8%2FcE1nqMsoyMoQzL4ghdEdhYmwDxkRrSe43bWB1ZJGQfkU%2FusPSn%2BuVpeflS0tSBuxa7mh8KKoSTd1nnxncoTuADUkaIWCv6g9L0mtq2VkSOaAFqoZ0cFLmr7qbGZbf45m0faSJ0rfpNBo1vPdydsWfNuZUE4riksNA7aQy3G1pctJU9StYqgm5k9P%2BzbPAloZncLqiyHvnaPgrLJ7wTnXYr6y8ak0%2Bi96U5Zlmr6KvzVe2hW8cAUamURSogR9LlfB4KOfcP7q0vP%2BqYyPGILfskFwj34oicOfRid3D%2F7wC6fkXfxmRI2YSJe7G4MamBGMZ9Pl4U5Ks9jeSgOwPdwJ0mOC69QA0GDqspuRxnRNy0UY6QMuYXuPJoJh9lOFjIZ75%2B1OOg3lmXIWnoiZqKi3dIuDVfn3kg%2FR3JsNq8dO7wb0zyomtSw9ylzg63TioIE34Tcpwfxvldv6I68NdDGEpZnP2StufYeK9yP6Ri9iwHoWbaDQnl0hMLOvyckGOqUBO3S3vyi%2B0iWWlZPtqG8ihli1xhUpwpjYXM0tVNfS67lWwuYhfGlRDu6ZonrXr7LKVtRa%2B6BXrc1jT3nYQGNv7xDKE9fY6prJbEj9KSKKJObZw6Jd8C7fX9VlxPqHMvdQUxiqbcKSpfcZxDRVGTEEDgIeNjsw6HlmX6i5ShAlzQPt5m6QuBY0bnkhXZ8Hmos81VEqymnWq31W2gIHvspaw9dkfTzO&X-Amz-Signature=d9b4c279410524effbb5722218ec3428d5cc15b774cba5e189025bae594b06c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMG6RXYS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T082836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCIwJ1jHoIuzJsQlw5laNgyB%2FDzbVeveiag%2FbtcXIxpXwIgURlcvvd83auisACtb0UHzJ1qptSLR%2Bcca6PU61lwxAMq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDCIX4LX1DmK5Z%2FqUMCrcA6HbfqEEyn0JY7VEwmyGm1cstPbBUp8GcdMQcOzxkHNa2EfHnwvc16ttJC0zLKBsGbPB5fy2Y8UZ88PDbzR6tyEYq1RelmzFE8gHw7PPFpbG0jcEbz5%2FHu4H0o7dDM0fYiqa4D8%2FcE1nqMsoyMoQzL4ghdEdhYmwDxkRrSe43bWB1ZJGQfkU%2FusPSn%2BuVpeflS0tSBuxa7mh8KKoSTd1nnxncoTuADUkaIWCv6g9L0mtq2VkSOaAFqoZ0cFLmr7qbGZbf45m0faSJ0rfpNBo1vPdydsWfNuZUE4riksNA7aQy3G1pctJU9StYqgm5k9P%2BzbPAloZncLqiyHvnaPgrLJ7wTnXYr6y8ak0%2Bi96U5Zlmr6KvzVe2hW8cAUamURSogR9LlfB4KOfcP7q0vP%2BqYyPGILfskFwj34oicOfRid3D%2F7wC6fkXfxmRI2YSJe7G4MamBGMZ9Pl4U5Ks9jeSgOwPdwJ0mOC69QA0GDqspuRxnRNy0UY6QMuYXuPJoJh9lOFjIZ75%2B1OOg3lmXIWnoiZqKi3dIuDVfn3kg%2FR3JsNq8dO7wb0zyomtSw9ylzg63TioIE34Tcpwfxvldv6I68NdDGEpZnP2StufYeK9yP6Ri9iwHoWbaDQnl0hMLOvyckGOqUBO3S3vyi%2B0iWWlZPtqG8ihli1xhUpwpjYXM0tVNfS67lWwuYhfGlRDu6ZonrXr7LKVtRa%2B6BXrc1jT3nYQGNv7xDKE9fY6prJbEj9KSKKJObZw6Jd8C7fX9VlxPqHMvdQUxiqbcKSpfcZxDRVGTEEDgIeNjsw6HlmX6i5ShAlzQPt5m6QuBY0bnkhXZ8Hmos81VEqymnWq31W2gIHvspaw9dkfTzO&X-Amz-Signature=8840f4d4d8f271b3db67f2ca7f2f1843d61f30a72f36d8c9c883001304e3eb13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
