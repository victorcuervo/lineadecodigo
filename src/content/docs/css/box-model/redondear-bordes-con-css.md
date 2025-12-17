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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZKLIZ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLLgdMJlO38RLyLOgw9tptjuKZpUvS0YmwIQGEyBDd%2FAiB4FKAJbjOXIwvpnmELtDWw%2BzJydrWXmkKzX3LLevfuWCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMLuWdYjSawIUbGxaXKtwDFbZuGMYt%2BykFJD%2BncTjQEdYyr52J89%2BeZaSe8za60oJ75EgWdgtQN3gVaNlW%2F5YMbSlh2VEoMaR2lmbKQRfN%2BFje%2Bu3G6uHlBXGprSUZF4LkmDxX0L0hyfzidzmrVyTN0ZapwhKCaKjCzTwGN%2BPjVA39VpLH1uFcprweYGQ9TN%2F%2FtuImyHii22MM0ZBJfHs1Eu0d0t6I29Zq6GojAXXZRLJh3v9y4ovq0dy4R7q9TMif%2FwSkWR8rDHKW4WKAF54BB%2FB0TGTKVwj0KInhNpoGQ8rhpnu9yPhg96DWGVWMEXC%2F1wwR4z52JwINNrXbW%2FLWNI6zisvlxRGoCDhGxvR%2BhYlwRGysA9lTvCYUWoQvwXb2jWHW4giDK6SljRs44SC5zRIH3rziSkd640W6t5OrUzpdbUoF%2BQNWs6o%2BVgEMfMQN1OZGkidoiJna6upM%2FjFdBRczgVSFzEGF5MBzOi%2BbS24AkwD3ousu1myhGImA%2BZFJEy8xaCFBWJg%2BGMYXRuVfgz6tRal7cifYrLTRe%2BxLR2vnq1JRKKYQwr2m70aG4ks9wlJgCx6lzYPRWqfMsSQabLMP7emMzfDBxjY19bGkfMSC%2BWfKcO0BXBDk%2BCfZC6Y1h4aVirfFkYZzreQwzY%2BKygY6pgGNdUhEzGVkKOTuFLcRG1ixaNxrHfnOZ5mjVNVjliNDrTiAKX6PFMf1KEXJAWm3yHi1wZqhEpU4vajbWtUVzjbVjzkL%2F7c7yR5LiN2jLwxCqA1%2FyEJTOr05vRkXih8rfU8qd9hcPdrJ99P1IEhVVL5n88D6ByWO30t47RX%2Fxuj9W8a06%2FTf5Cq2a59%2F%2FiWQE%2FV7wsfhm%2FdZ0jlKK5SnJIfNU4GDsrvc&X-Amz-Signature=b3e82481b80276eebff81da4f9543b03ba110d9a7f780b1a41e20a77b014e129&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666VZKLIZ2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105852Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLLgdMJlO38RLyLOgw9tptjuKZpUvS0YmwIQGEyBDd%2FAiB4FKAJbjOXIwvpnmELtDWw%2BzJydrWXmkKzX3LLevfuWCr%2FAwh8EAAaDDYzNzQyMzE4MzgwNSIMLuWdYjSawIUbGxaXKtwDFbZuGMYt%2BykFJD%2BncTjQEdYyr52J89%2BeZaSe8za60oJ75EgWdgtQN3gVaNlW%2F5YMbSlh2VEoMaR2lmbKQRfN%2BFje%2Bu3G6uHlBXGprSUZF4LkmDxX0L0hyfzidzmrVyTN0ZapwhKCaKjCzTwGN%2BPjVA39VpLH1uFcprweYGQ9TN%2F%2FtuImyHii22MM0ZBJfHs1Eu0d0t6I29Zq6GojAXXZRLJh3v9y4ovq0dy4R7q9TMif%2FwSkWR8rDHKW4WKAF54BB%2FB0TGTKVwj0KInhNpoGQ8rhpnu9yPhg96DWGVWMEXC%2F1wwR4z52JwINNrXbW%2FLWNI6zisvlxRGoCDhGxvR%2BhYlwRGysA9lTvCYUWoQvwXb2jWHW4giDK6SljRs44SC5zRIH3rziSkd640W6t5OrUzpdbUoF%2BQNWs6o%2BVgEMfMQN1OZGkidoiJna6upM%2FjFdBRczgVSFzEGF5MBzOi%2BbS24AkwD3ousu1myhGImA%2BZFJEy8xaCFBWJg%2BGMYXRuVfgz6tRal7cifYrLTRe%2BxLR2vnq1JRKKYQwr2m70aG4ks9wlJgCx6lzYPRWqfMsSQabLMP7emMzfDBxjY19bGkfMSC%2BWfKcO0BXBDk%2BCfZC6Y1h4aVirfFkYZzreQwzY%2BKygY6pgGNdUhEzGVkKOTuFLcRG1ixaNxrHfnOZ5mjVNVjliNDrTiAKX6PFMf1KEXJAWm3yHi1wZqhEpU4vajbWtUVzjbVjzkL%2F7c7yR5LiN2jLwxCqA1%2FyEJTOr05vRkXih8rfU8qd9hcPdrJ99P1IEhVVL5n88D6ByWO30t47RX%2Fxuj9W8a06%2FTf5Cq2a59%2F%2FiWQE%2FV7wsfhm%2FdZ0jlKK5SnJIfNU4GDsrvc&X-Amz-Signature=65884717a218ad84ff85a4254b18de9c3d8a4a822a5b81a90aadcc68784c9cf3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
