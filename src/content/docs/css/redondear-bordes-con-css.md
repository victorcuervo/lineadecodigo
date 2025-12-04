---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY65E62W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDllnRv4AVHDXORvld%2BImV5aEhVRTDXb1yI%2BBzredb%2FfgIhANDELzserKzP%2Bia5wV7pznlK2Yn6wu77FQrJ1vuA0w03Kv8DCEUQABoMNjM3NDIzMTgzODA1IgwS%2F1G9rD6spHafOm8q3AM07i7cargAjB6LA6XTmgYttMnRcQv1V3AnfY2LJqItQcjl3Ll3EJOG0oc%2FybT2kknRBRW2tKpit4sRG45t6CChZgA9mYGqjDB1Q3BmeNg4UkRToKUkQtQ41cEzbPd7LDcFJojf3hdF5nzS8kqWpeilpgn5lDHXuRAT20bfGpd4JU5bRsssdTs0YtVQBMTMAtlMErVJR%2Ba7KdNivetE3Ko9ea0Vg122868jMGp3DQf3AJK4DN2XFJQ%2F8wPxuhrtGFh81xiqnihViKfzAr27Rss0mNlBOWuCMHJhYuYejfl6KCUwI6AEFP1H7GOlmB3xFRCfi4nr4rFyuoozvVJbdWgwS2e5FP4l55cIkHfo8i9zaMmzho2oMUtlfBjeUp6g%2Bv%2BDJsPnRjTm%2BjyyH4ii1LfkEKFwQTH5%2F1acTpBMXtDUh2GBKkw4xPbI7BWl9wnb09Om7anQGos0JKE9DVP%2FWuit%2FZ%2BGxdpy6w1%2F5j9nIP4S9fL731LnPiUprWMj1RoO%2FJaq76vu8QS%2BHKMezDHzwBKW6RB4xlKQdrYhq9y3ebzaXxW6mSMB0v8Yc5e8FWAjld6xxb7spDVvj3kvY%2B7iE7yEatRyFUVwoipgdfqDTwzx4J%2FyUIkdGGSClR3fTzCa58XJBjqkAUTBU6RPbK%2B3LIff7%2FDB3XretHeKUe%2FKKRWINXgB4sBB2x95rEqLWR%2F%2FHo84g6RDGjRAltgIz8AIbwLk7d%2FDGcilvvbRWSomh3Vu2mNxOvo6A5uS61K%2F0IYuYP5C%2BFFVGVbRNLqzX5lE%2Fnab7SerjMVz6TFYwtxRrKJ7HZANq7k7f4N%2F5aWMlcqcdsnXZMWBws1GgoLzQd7XhxkJ3C%2BNreWy8k%2BX&X-Amz-Signature=55964ffa8b078fcff028b55b25a0b8cb52e9ddff8e7a0bd2f6b8090eab0a1bd8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY65E62W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T124326Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQDllnRv4AVHDXORvld%2BImV5aEhVRTDXb1yI%2BBzredb%2FfgIhANDELzserKzP%2Bia5wV7pznlK2Yn6wu77FQrJ1vuA0w03Kv8DCEUQABoMNjM3NDIzMTgzODA1IgwS%2F1G9rD6spHafOm8q3AM07i7cargAjB6LA6XTmgYttMnRcQv1V3AnfY2LJqItQcjl3Ll3EJOG0oc%2FybT2kknRBRW2tKpit4sRG45t6CChZgA9mYGqjDB1Q3BmeNg4UkRToKUkQtQ41cEzbPd7LDcFJojf3hdF5nzS8kqWpeilpgn5lDHXuRAT20bfGpd4JU5bRsssdTs0YtVQBMTMAtlMErVJR%2Ba7KdNivetE3Ko9ea0Vg122868jMGp3DQf3AJK4DN2XFJQ%2F8wPxuhrtGFh81xiqnihViKfzAr27Rss0mNlBOWuCMHJhYuYejfl6KCUwI6AEFP1H7GOlmB3xFRCfi4nr4rFyuoozvVJbdWgwS2e5FP4l55cIkHfo8i9zaMmzho2oMUtlfBjeUp6g%2Bv%2BDJsPnRjTm%2BjyyH4ii1LfkEKFwQTH5%2F1acTpBMXtDUh2GBKkw4xPbI7BWl9wnb09Om7anQGos0JKE9DVP%2FWuit%2FZ%2BGxdpy6w1%2F5j9nIP4S9fL731LnPiUprWMj1RoO%2FJaq76vu8QS%2BHKMezDHzwBKW6RB4xlKQdrYhq9y3ebzaXxW6mSMB0v8Yc5e8FWAjld6xxb7spDVvj3kvY%2B7iE7yEatRyFUVwoipgdfqDTwzx4J%2FyUIkdGGSClR3fTzCa58XJBjqkAUTBU6RPbK%2B3LIff7%2FDB3XretHeKUe%2FKKRWINXgB4sBB2x95rEqLWR%2F%2FHo84g6RDGjRAltgIz8AIbwLk7d%2FDGcilvvbRWSomh3Vu2mNxOvo6A5uS61K%2F0IYuYP5C%2BFFVGVbRNLqzX5lE%2Fnab7SerjMVz6TFYwtxRrKJ7HZANq7k7f4N%2F5aWMlcqcdsnXZMWBws1GgoLzQd7XhxkJ3C%2BNreWy8k%2BX&X-Amz-Signature=c52e23c523ecfe6237542b7d291b2a36371f98db785641c4c71e084f88b9c4c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
