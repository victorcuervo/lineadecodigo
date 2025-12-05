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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLAMZZB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2MUPYm2CeiyygXQarz1zCKABZE3eU00g%2BYMEt5YnZOAiEA0LNIz3SUSqDvPhRxAYcTExGNewdmCWo5pJg1MZsR0Fcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDOfqSAyAY1tqg6YUSrcAwKPF8gGWgnOQlr%2FFNOqA3KSNqQnPyJlaN8jTubbHWjAse%2BX09PuDIA4lg20ctq5njST71Q95l15ICSjTdp8r0d5R%2FCTd86NiUnchSHHQjaSjWHnbXiSZ4588rZToZFaqmkMoXnYVjHNSNouq4KFLjssw88ly3HbBmxakMkeLY%2FS2zHfWdPmxmQ1YQxkdrNqZUfatWZPNpS%2FM5WDY70hdJkpFUyNZRhuVeZBd5jjNLzKTMCigwzvEHDKzxNd2t3wf3SLa1qTGmJLCimmTHvvCMasWiThLzE15nHQ4ZsnsylfwuzXVowaJhEOb8EP99xz8eBbr3hULM6vAvg3Ec7wd7EkSlVXjU%2BljfA6Osp8nYXa9p9LU%2FoPaB3RwEYqKtaZG1ybvACk6I5rJht8whj48N1lnTgOa7IagWaCGyEd364w94O1UCvQx6AB%2F77uUAi6UQ11VtyL7%2BbaLBhixyTvhBFjYGPL2kwMbT9LJbY2%2BxvUnfweCVztlitF7KrLRvJnzmU8JS1tMPyW8po3U1YEolKDNtBa4e9dgw8VVhWtj%2FMqoBsGx3NUmvDUuXZhTl6F4AiHHIttk9xca3QxAFqaWsmGV2GkEDEG6W59a0AQAIB1fwhxk2rA5ZFYlsaZML6MyMkGOqUBNGbYIvRskdyvP%2BQ8VkiTj7mavodwbDrKYVyUT9YkzSqMWwzJ%2F%2B0efYiE9N%2FywDQgWbqXvsCx5wJ7%2BaU7W3tGfnSUKavE5IhCTYd%2BQcmIKI0giz%2BoxLfQ2aFc7lwS4GTUmYxwHkFz68QJDiWM%2B8YPxhlbqbb6QxhIVrNh%2Fs1WleGyHP4lkdCUGgAfayVCeeB%2B%2BBXdOhyh1hQRTqUi0YtcPLir0XKK&X-Amz-Signature=175c1b595b874f8af879c6a074a1aebb1f1048674b2a6015a99df054f23c7cc8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663RLAMZZB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T021943Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB2MUPYm2CeiyygXQarz1zCKABZE3eU00g%2BYMEt5YnZOAiEA0LNIz3SUSqDvPhRxAYcTExGNewdmCWo5pJg1MZsR0Fcq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDOfqSAyAY1tqg6YUSrcAwKPF8gGWgnOQlr%2FFNOqA3KSNqQnPyJlaN8jTubbHWjAse%2BX09PuDIA4lg20ctq5njST71Q95l15ICSjTdp8r0d5R%2FCTd86NiUnchSHHQjaSjWHnbXiSZ4588rZToZFaqmkMoXnYVjHNSNouq4KFLjssw88ly3HbBmxakMkeLY%2FS2zHfWdPmxmQ1YQxkdrNqZUfatWZPNpS%2FM5WDY70hdJkpFUyNZRhuVeZBd5jjNLzKTMCigwzvEHDKzxNd2t3wf3SLa1qTGmJLCimmTHvvCMasWiThLzE15nHQ4ZsnsylfwuzXVowaJhEOb8EP99xz8eBbr3hULM6vAvg3Ec7wd7EkSlVXjU%2BljfA6Osp8nYXa9p9LU%2FoPaB3RwEYqKtaZG1ybvACk6I5rJht8whj48N1lnTgOa7IagWaCGyEd364w94O1UCvQx6AB%2F77uUAi6UQ11VtyL7%2BbaLBhixyTvhBFjYGPL2kwMbT9LJbY2%2BxvUnfweCVztlitF7KrLRvJnzmU8JS1tMPyW8po3U1YEolKDNtBa4e9dgw8VVhWtj%2FMqoBsGx3NUmvDUuXZhTl6F4AiHHIttk9xca3QxAFqaWsmGV2GkEDEG6W59a0AQAIB1fwhxk2rA5ZFYlsaZML6MyMkGOqUBNGbYIvRskdyvP%2BQ8VkiTj7mavodwbDrKYVyUT9YkzSqMWwzJ%2F%2B0efYiE9N%2FywDQgWbqXvsCx5wJ7%2BaU7W3tGfnSUKavE5IhCTYd%2BQcmIKI0giz%2BoxLfQ2aFc7lwS4GTUmYxwHkFz68QJDiWM%2B8YPxhlbqbb6QxhIVrNh%2Fs1WleGyHP4lkdCUGgAfayVCeeB%2B%2BBXdOhyh1hQRTqUi0YtcPLir0XKK&X-Amz-Signature=c9f13dfce4d7482775c9aa2f4f9f9ef86311bacb0742b93a9b466be0666e9bba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
