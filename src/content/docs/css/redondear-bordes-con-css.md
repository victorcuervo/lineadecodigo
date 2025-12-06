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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXASYT4S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK8MyInnh9OUtiJ7reE3ce67uTfjFcSxtQpj0b4f3qLAIgKQiuOznW1mNUu%2BRJc0a9PKCf6BGkvBBR4FypDktA5Vsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLshrbqdiulfI8cITCrcA1VvPp%2FroCSthMJfb0x1E4jz%2BtRC69PYwf12UFm5IPqFxihXw4zc165jMBIYCBolb%2BFAsSx1smVfG7P3RJ5BNFtMgD1ajiWpQAS7qha%2FcfcoHF1jNS2Z59amneCmnkWv9pyz0riMrboIH4boeNhCbYwioQeUUQRs93i%2BmgMwVqV9uxFzqW8GIYdaosJ%2BrUzBxeDAiN7xDpivrMH9ZomYyiRQYJTAT972oZ4RjLrKjqmbEOZ66W8%2FC%2F4py5ORG4wHvQhj7OugrnEpBR12DA8038tfelpzPNFDf5Puyy7%2BFvK0V3gqL8h%2B1FIPJWk6Us0NPsICl5ql%2FUdAOrPe9fNLvTTak51hQApNmEXZnG6guyqb8mahN6PXKpzIaHebav51ad3cQt9cavL3kXfJAPMBZoZyEIflLOSF2vYSFL4Rl04eO2MRvG%2B%2BXmuBD2duqB6jxsNYvADHzEcLzwWoopselzGaMi5F8lcEdzucR206EXBf3g6ptumc4yARXY%2FTkSTk73Wk8GSYKqR3o8%2FPQ7jtr6OOqPjAZBiQb6vFwCN4pPc9JhxD9qqvauUtM%2FMFDRx8GtJRAuk%2B7xqA%2F6djR%2FA29C%2Bj5vDsVQsu8DTjS2m8zn5YkSOZu%2FsRNEC2Sc%2B7MKi8z8kGOqUBBjo5HX4tVeJh680hWXqb3m7zlj%2FTFsg%2B2aKcdEcSRzQJphedR8Q8sTT6M2POF960BmosUSMYAO0lzMxYFpqy%2F3EHCnIU74jupl7Byxz2kTRcqgcW%2Fp6yn7aWEUb8dzoyGJoLMH8hK2LyxOpUZST6qawv%2FJ5O7g2ozIepPnU3nXR4Wgn08g7rC2tnEWQkAnutc7PJYLy13sBjIS2pjqciBgOr9s3P&X-Amz-Signature=2e14b06573ff7ea52b66bd7c9072eb0dfd940c04cde4e29f7a26c809726751f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VXASYT4S%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084428Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCK8MyInnh9OUtiJ7reE3ce67uTfjFcSxtQpj0b4f3qLAIgKQiuOznW1mNUu%2BRJc0a9PKCf6BGkvBBR4FypDktA5Vsq%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDLshrbqdiulfI8cITCrcA1VvPp%2FroCSthMJfb0x1E4jz%2BtRC69PYwf12UFm5IPqFxihXw4zc165jMBIYCBolb%2BFAsSx1smVfG7P3RJ5BNFtMgD1ajiWpQAS7qha%2FcfcoHF1jNS2Z59amneCmnkWv9pyz0riMrboIH4boeNhCbYwioQeUUQRs93i%2BmgMwVqV9uxFzqW8GIYdaosJ%2BrUzBxeDAiN7xDpivrMH9ZomYyiRQYJTAT972oZ4RjLrKjqmbEOZ66W8%2FC%2F4py5ORG4wHvQhj7OugrnEpBR12DA8038tfelpzPNFDf5Puyy7%2BFvK0V3gqL8h%2B1FIPJWk6Us0NPsICl5ql%2FUdAOrPe9fNLvTTak51hQApNmEXZnG6guyqb8mahN6PXKpzIaHebav51ad3cQt9cavL3kXfJAPMBZoZyEIflLOSF2vYSFL4Rl04eO2MRvG%2B%2BXmuBD2duqB6jxsNYvADHzEcLzwWoopselzGaMi5F8lcEdzucR206EXBf3g6ptumc4yARXY%2FTkSTk73Wk8GSYKqR3o8%2FPQ7jtr6OOqPjAZBiQb6vFwCN4pPc9JhxD9qqvauUtM%2FMFDRx8GtJRAuk%2B7xqA%2F6djR%2FA29C%2Bj5vDsVQsu8DTjS2m8zn5YkSOZu%2FsRNEC2Sc%2B7MKi8z8kGOqUBBjo5HX4tVeJh680hWXqb3m7zlj%2FTFsg%2B2aKcdEcSRzQJphedR8Q8sTT6M2POF960BmosUSMYAO0lzMxYFpqy%2F3EHCnIU74jupl7Byxz2kTRcqgcW%2Fp6yn7aWEUb8dzoyGJoLMH8hK2LyxOpUZST6qawv%2FJ5O7g2ozIepPnU3nXR4Wgn08g7rC2tnEWQkAnutc7PJYLy13sBjIS2pjqciBgOr9s3P&X-Amz-Signature=e8495fa489f183b6a3ef29db9a5b4e9089ce9f098d7cff5aa48c770aca2862dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
