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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFBOBCF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCX0bE5AY35llAaBV1wSo2cg3tgp9fuhxU0C4vDFlWIgAIhAIPzn6vgKd19ml3MoYrCz%2BHuuGGdrh4c5%2B5nFFo1qiO6Kv8DCEUQABoMNjM3NDIzMTgzODA1IgylLWGD8cAE82BMVZMq3AOrH0eM%2F9SsAnacu6XF5KmpRhR1fZktB50Mb7%2Fj49b3hKNzTkWmTbZWdYMvaVju3bkDicR8eGCmqLoVJvNIvcARGarJB2VomWmeCI7Zs%2BfKYrflISU%2FKfP7RBbNC3aJrxsMNA%2BXhWgc1c%2BfCF6Hu8ep2DWIK01wvQgel5a3alOHhDrktNf%2FyhhUZLOGIIlZ0T4ch9r2Wftss0Z90CGMMrR%2BvF%2F9vnN9dYYsBhfxhg4GPxEADjxg8ezoQjm8y6yzYqvdkWUGsrnnxPybOrTDxs2%2FrBb%2FX59uE9wboys8nZDHuVC%2F6Jp4RHOfvGl3XAeODA%2BEEIuseygMCvqtUVcd0pSlwCN4TyRC9Eppi%2FpctN461RNT195GfSTswsXTZhBHo%2BBMrKmCZ0604G6p7gwgx2XSPZ8rlNz%2Fb7RnpYmuBVYyvFbGxrBhf1N1Vbw%2F2rt8q2VNEV%2FNUB7oxgy1sslx%2BdqU2tNgJb6XBjCmvkfmFWQmD08iwBfOL8DuEOT8nLdyVladKsHAioInl4h1VCy1gJnO3IMydBCxm5yA3k%2B6nRU%2Be4eqBN4m4l6tUSUGTVzwahbvqHSUoLcRcQnOBBHAzEQmz3u8bETVSVRLTEKn%2FuZGVKLJNDlAEP9U7sYmWTD15sXJBjqkAR51asB4SLDrAaaUO8EBk2bHPJVIPwQKK2TpnyV4%2BZ1v5MJ4l9F2BeCaZZ3DHUa7MMiAR9lRhqGjjyZMFrx%2B4tGJPpb1hx6lL%2FOXgs06F1njEvnjHRc%2FETwcBL7B8DVB7%2FcdrjQa%2FsEjUO4pTMtbbv0MsBqCSTmR8dqT3qOCIdF%2Ba4CWC78OdgBalI57fnR6TM%2BV1msaGJ8T2f702YE4mvqBs5OZ&X-Amz-Signature=c005c55af26a57b2e5e9b6039f43a38b261a8267599663d78b8ae55932ee30c7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662NFBOBCF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T122455Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHwaCXVzLXdlc3QtMiJIMEYCIQCX0bE5AY35llAaBV1wSo2cg3tgp9fuhxU0C4vDFlWIgAIhAIPzn6vgKd19ml3MoYrCz%2BHuuGGdrh4c5%2B5nFFo1qiO6Kv8DCEUQABoMNjM3NDIzMTgzODA1IgylLWGD8cAE82BMVZMq3AOrH0eM%2F9SsAnacu6XF5KmpRhR1fZktB50Mb7%2Fj49b3hKNzTkWmTbZWdYMvaVju3bkDicR8eGCmqLoVJvNIvcARGarJB2VomWmeCI7Zs%2BfKYrflISU%2FKfP7RBbNC3aJrxsMNA%2BXhWgc1c%2BfCF6Hu8ep2DWIK01wvQgel5a3alOHhDrktNf%2FyhhUZLOGIIlZ0T4ch9r2Wftss0Z90CGMMrR%2BvF%2F9vnN9dYYsBhfxhg4GPxEADjxg8ezoQjm8y6yzYqvdkWUGsrnnxPybOrTDxs2%2FrBb%2FX59uE9wboys8nZDHuVC%2F6Jp4RHOfvGl3XAeODA%2BEEIuseygMCvqtUVcd0pSlwCN4TyRC9Eppi%2FpctN461RNT195GfSTswsXTZhBHo%2BBMrKmCZ0604G6p7gwgx2XSPZ8rlNz%2Fb7RnpYmuBVYyvFbGxrBhf1N1Vbw%2F2rt8q2VNEV%2FNUB7oxgy1sslx%2BdqU2tNgJb6XBjCmvkfmFWQmD08iwBfOL8DuEOT8nLdyVladKsHAioInl4h1VCy1gJnO3IMydBCxm5yA3k%2B6nRU%2Be4eqBN4m4l6tUSUGTVzwahbvqHSUoLcRcQnOBBHAzEQmz3u8bETVSVRLTEKn%2FuZGVKLJNDlAEP9U7sYmWTD15sXJBjqkAR51asB4SLDrAaaUO8EBk2bHPJVIPwQKK2TpnyV4%2BZ1v5MJ4l9F2BeCaZZ3DHUa7MMiAR9lRhqGjjyZMFrx%2B4tGJPpb1hx6lL%2FOXgs06F1njEvnjHRc%2FETwcBL7B8DVB7%2FcdrjQa%2FsEjUO4pTMtbbv0MsBqCSTmR8dqT3qOCIdF%2Ba4CWC78OdgBalI57fnR6TM%2BV1msaGJ8T2f702YE4mvqBs5OZ&X-Amz-Signature=1788444765d05979069a26b06b91be70b6213a78c8df2f544691c27fc03704cf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
