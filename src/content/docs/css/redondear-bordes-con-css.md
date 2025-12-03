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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QMEWELT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDju1m887e9SpejzSeJCQ%2BuOaJpuNwjgyIx8nvHi0mt5wIhAKKFn%2Fs8fv5mBbvc9c0vz5rxMHgPaLKOTN5MLXZcRzxgKv8DCDgQABoMNjM3NDIzMTgzODA1IgyAU9Z%2FFc1EUF2zFlwq3AMBzkh8xLP6W1AnTNPwE%2FufW2AN28aiz%2F%2BI82vKoRxM65gJE%2BG68YF5QMKpKxSEIPVLYG8zLFFVWN5bhmSQ3RySRl%2BxYEBc0DE3CQyMnXS6%2Fc2dEHWnQu%2BDkqEsuyB31N%2ByoaEkNz8nUss2u4Gvyh1gOeZ71XwXX228qC7RFlod%2FL%2FcyCQvo54KiEcL%2F5VAySXZL2n9XXg4hdbcGU6VT3k6bQbsM9QeZj3Inf8rvMVxRhO%2FA4c8GX3qwdAmpwael48b1gAUlnzgrkBIJ35R9b1FryR1vkk63FszEtVb5QWDP85bAS39R%2FZ8BGIdQ%2FwGWkUhcj7hJbPbs2H0fGp7R6ZBeZc6DVr7pwZXIDhKG9RnbGRjtx4oZwZwmX%2B2m3DuF8rO76OTMy4%2FkCC933bEmsl6uiBJrdxaGqgRxou2onCFg0HCODgVYJqLP%2BU78dSpUaGKSKqiRIJpb3ILg8SSPNlzkx%2F%2BH9oNjnyH%2BjicYKuZOvntwDKb83FyDXEzVIW2l4KqWqw0dTdm6TyOl1YW7wZpXWC2VJVGCc6rX8VVbiPRq0VqzzGKgDsiS6Xcw9ldKWDJnkveBE9wDTzpeBZWWJFuM7N25oIh1KEwntZnsggiHzgVDkeJD7fqUQ3V2DDF98LJBjqkAf8QRX9YuB8uJwwbYtoKPIm8ShFir4lCewefc0ROWgoQ9ku8dHsrPARLFfJRcIqBFDnyWphEnHU9mVnRMWFvO2ZVVHLQc9zAx6ba3hcvRrsdVzdLme0PU17o9S63hQNrpQZ2NTyXI6l9vn6WEn9hdaL1PxYAfF9wqnc76jImHPHre1mnZfiwAG4cYlkgjQ%2BMxn0MQy0%2Fi3zTXcpN8n11GcFV1YXx&X-Amz-Signature=cabeedddda0c5642e7b2ffce4f59f019f3ac31c09f85ebeecb874d700ade415e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QMEWELT%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T232926Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJIMEYCIQDju1m887e9SpejzSeJCQ%2BuOaJpuNwjgyIx8nvHi0mt5wIhAKKFn%2Fs8fv5mBbvc9c0vz5rxMHgPaLKOTN5MLXZcRzxgKv8DCDgQABoMNjM3NDIzMTgzODA1IgyAU9Z%2FFc1EUF2zFlwq3AMBzkh8xLP6W1AnTNPwE%2FufW2AN28aiz%2F%2BI82vKoRxM65gJE%2BG68YF5QMKpKxSEIPVLYG8zLFFVWN5bhmSQ3RySRl%2BxYEBc0DE3CQyMnXS6%2Fc2dEHWnQu%2BDkqEsuyB31N%2ByoaEkNz8nUss2u4Gvyh1gOeZ71XwXX228qC7RFlod%2FL%2FcyCQvo54KiEcL%2F5VAySXZL2n9XXg4hdbcGU6VT3k6bQbsM9QeZj3Inf8rvMVxRhO%2FA4c8GX3qwdAmpwael48b1gAUlnzgrkBIJ35R9b1FryR1vkk63FszEtVb5QWDP85bAS39R%2FZ8BGIdQ%2FwGWkUhcj7hJbPbs2H0fGp7R6ZBeZc6DVr7pwZXIDhKG9RnbGRjtx4oZwZwmX%2B2m3DuF8rO76OTMy4%2FkCC933bEmsl6uiBJrdxaGqgRxou2onCFg0HCODgVYJqLP%2BU78dSpUaGKSKqiRIJpb3ILg8SSPNlzkx%2F%2BH9oNjnyH%2BjicYKuZOvntwDKb83FyDXEzVIW2l4KqWqw0dTdm6TyOl1YW7wZpXWC2VJVGCc6rX8VVbiPRq0VqzzGKgDsiS6Xcw9ldKWDJnkveBE9wDTzpeBZWWJFuM7N25oIh1KEwntZnsggiHzgVDkeJD7fqUQ3V2DDF98LJBjqkAf8QRX9YuB8uJwwbYtoKPIm8ShFir4lCewefc0ROWgoQ9ku8dHsrPARLFfJRcIqBFDnyWphEnHU9mVnRMWFvO2ZVVHLQc9zAx6ba3hcvRrsdVzdLme0PU17o9S63hQNrpQZ2NTyXI6l9vn6WEn9hdaL1PxYAfF9wqnc76jImHPHre1mnZfiwAG4cYlkgjQ%2BMxn0MQy0%2Fi3zTXcpN8n11GcFV1YXx&X-Amz-Signature=49fe141e00c20713e8cdc5588899eac269b5df8b2e73653c692b5ef6fd6e7270&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
