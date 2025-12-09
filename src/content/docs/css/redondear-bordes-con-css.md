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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDGS4OO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN7dSJeEyn3jdAeyrxcFQK32jUYgcI7z1Cb1idjQFr%2BAiEArj1on5yhLnjD5L%2FX1%2FxwZNq5vwaqucWMvT0yLxTS9FYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBGbWGCxb%2Fng9XyhCrcA40VW%2FkZda66OYfi08AqHaVZhS0fQIKfQqknNKPza9kere0v2vul0UCN3Yoh9PyvaX0NEY%2B7BQ3ZwaFz98pjl%2B4xHSgaI%2FYYi7vWWMIdjiFlixVM9yBTATGOtVN00tInSVMmuyKXUhfRw41HJ%2FL6z%2FobrAMjDXKrwZRYBBiqm%2FqHFxutoxoLjx7kQ2D0W41w3bZ4Kneb7ZMcKk73F32othcVolEg%2B%2FyT03v%2BLpXd6oFIpC8WBqKNlNpt3LN7APSsxLTW%2FqPpjzM6GgnybnQKE%2FYcnZLN9oyyxb1vHQWFAmZv6on6jG3TaQpRrn%2FkpuSLNZsmi%2BUS%2B3K4nUYuYK8oQN4LyNAIbHW8KEniiDPfVw1MuJX5J9cdOrehvaaps2nYT4Zep5tXyGIZrHvyz5T08x1P3uj9YZoulQoIWjEWjnhpEbEvZ5EhiyfBMDUibybh1UQwcg0%2B7uFzEPTPGM52hKYefrrG7D8Jn%2FPeQvWkETCtrRrG9GJOrjEWUWtng6qYG4wXluPepUy7JbuNytsS5%2FnUKXslSwh8r%2BpMBqkr%2FI14Ayy4uoDPtcXp589%2BUOak6zU4EzgRtmMvQ901wOGcBzxNx5MKwaJf8Kd%2FLhYsAHiw8oiH0CoMoHXDOBgzMOLE38kGOqUBe58jH1Pt5JyALJt3flz%2FVvilVQp8mbPRrIgPhoDSnvlVEUEqooGAnQVF1NQApvoMgbSg%2BD5cSJOoMXa0vqhvxGMQkBObfa6UxlIHONTimtTP3tZXxfiaoTxy9dbjKlg%2Bd%2FFuo%2FUDGj412chV5q2Nsn%2BHLV%2BUj0wbKAv%2FHRQXO95lKY6D3jJFOIcmcM9Mpy7eiIireFjLPmuixux8MpX92wAdh2p0&X-Amz-Signature=55180c2829a4172fff5f070ed97fcfb40414bddc8fe29d290243879aa36748ea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WHDGS4OO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T085528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEN7dSJeEyn3jdAeyrxcFQK32jUYgcI7z1Cb1idjQFr%2BAiEArj1on5yhLnjD5L%2FX1%2FxwZNq5vwaqucWMvT0yLxTS9FYqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNBGbWGCxb%2Fng9XyhCrcA40VW%2FkZda66OYfi08AqHaVZhS0fQIKfQqknNKPza9kere0v2vul0UCN3Yoh9PyvaX0NEY%2B7BQ3ZwaFz98pjl%2B4xHSgaI%2FYYi7vWWMIdjiFlixVM9yBTATGOtVN00tInSVMmuyKXUhfRw41HJ%2FL6z%2FobrAMjDXKrwZRYBBiqm%2FqHFxutoxoLjx7kQ2D0W41w3bZ4Kneb7ZMcKk73F32othcVolEg%2B%2FyT03v%2BLpXd6oFIpC8WBqKNlNpt3LN7APSsxLTW%2FqPpjzM6GgnybnQKE%2FYcnZLN9oyyxb1vHQWFAmZv6on6jG3TaQpRrn%2FkpuSLNZsmi%2BUS%2B3K4nUYuYK8oQN4LyNAIbHW8KEniiDPfVw1MuJX5J9cdOrehvaaps2nYT4Zep5tXyGIZrHvyz5T08x1P3uj9YZoulQoIWjEWjnhpEbEvZ5EhiyfBMDUibybh1UQwcg0%2B7uFzEPTPGM52hKYefrrG7D8Jn%2FPeQvWkETCtrRrG9GJOrjEWUWtng6qYG4wXluPepUy7JbuNytsS5%2FnUKXslSwh8r%2BpMBqkr%2FI14Ayy4uoDPtcXp589%2BUOak6zU4EzgRtmMvQ901wOGcBzxNx5MKwaJf8Kd%2FLhYsAHiw8oiH0CoMoHXDOBgzMOLE38kGOqUBe58jH1Pt5JyALJt3flz%2FVvilVQp8mbPRrIgPhoDSnvlVEUEqooGAnQVF1NQApvoMgbSg%2BD5cSJOoMXa0vqhvxGMQkBObfa6UxlIHONTimtTP3tZXxfiaoTxy9dbjKlg%2Bd%2FFuo%2FUDGj412chV5q2Nsn%2BHLV%2BUj0wbKAv%2FHRQXO95lKY6D3jJFOIcmcM9Mpy7eiIireFjLPmuixux8MpX92wAdh2p0&X-Amz-Signature=675b65de3722da642ae601f47cd08996528d7c925bf7666fbf5ffb17d06e8c2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
