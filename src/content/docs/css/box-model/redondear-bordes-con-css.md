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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH4BJUT2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnSTI0HK3J4TaBpbsouodkIqVuhdxOxTPe%2FN57wg%2FpAgIhALreaLkGAdQdZVP9p94rA00XezEh4%2Ff1tJOKSvc%2BA9e8Kv8DCHgQABoMNjM3NDIzMTgzODA1IgyItlD%2F%2F2MxgqPjK34q3AO5%2BlAW4ljuHnucHgca%2BbHe8s5ZpqiCyKepVrMM%2BLR60PpGzx6T4tCYmQiL8kS0%2FTaaEPq5eSYi07EhiIt9vfEfh9hV6OeXlL4xmq0HfDF1J%2F4xJvNgK1GCaOyXh3jGAwMXAjNG61Lz82rr2OuJ9j4aixF73rOj8fHWXMe0769rcz0kby9Uml2cE%2Bvp6VIrgdoW7MQvpmglRpYOUBiR7HkEgo8ZzkXgttR%2BndhGQzwSF0yJbYm5bY%2FCEu92B78mnHT9aJ7OFDwTs3Y1rFaaGXtw0cCJYgMdJ00C9npUBUkwWOatAyMr5JkT20GzEKdAdOP54SyzCge90dum8C%2FKA%2FJjXsb0QTF9WIvlJHJb%2F%2BWu6JLn3pKa312wLK%2FGca%2FeFyZZ%2FsFmyjiMBNL2UUifNXNMKS6%2Bb5tVHXoVt3VHxoMuiVz18jHf%2Fe52q2CNeOJ1zGKDeSFkkqEBeA4%2Bt2OXS12IzbK4zjyW1SkQKCAx%2BI7P%2FIjv%2Br5SiER052nPl6QcJmWVw10qyYTt4W2GAoYnNbvHQOLM11J7r0ue%2FC3Rt32puv0qXDcU0dwvITFk%2FLPWxkVgd%2FK4gnRu33LGfILraNfY%2BR8eziA0BbA17GamX9DOsXUCWs6G%2Bs2Nj2jU6TCrnInKBjqkAY6snucszz1GAkIUw9ymyUJRV16Du1Z2%2B1g5%2FycQ6Kp0ACy%2BXCU2HKkUNQ5MNZzPf%2B%2Bas0Iv8DQfhAiKz2iSs%2B22PEGZZh4HCuPBTRyRQgXS6%2FD0cmUChGVAOlaXGa3KaDVbV8vKI85iYC%2FKm8%2FQCJD8h70fEBmCcGT%2Bay%2BnaOqbbzSeOP6c1nwqUlUdzitdJfHDdrri9aMWf7McOg7fNIUZnyaa&X-Amz-Signature=16d3a2705f5077c932e7bfa44a1361685a477ddbf94491403ca69758e6abac82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QH4BJUT2%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064718Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnSTI0HK3J4TaBpbsouodkIqVuhdxOxTPe%2FN57wg%2FpAgIhALreaLkGAdQdZVP9p94rA00XezEh4%2Ff1tJOKSvc%2BA9e8Kv8DCHgQABoMNjM3NDIzMTgzODA1IgyItlD%2F%2F2MxgqPjK34q3AO5%2BlAW4ljuHnucHgca%2BbHe8s5ZpqiCyKepVrMM%2BLR60PpGzx6T4tCYmQiL8kS0%2FTaaEPq5eSYi07EhiIt9vfEfh9hV6OeXlL4xmq0HfDF1J%2F4xJvNgK1GCaOyXh3jGAwMXAjNG61Lz82rr2OuJ9j4aixF73rOj8fHWXMe0769rcz0kby9Uml2cE%2Bvp6VIrgdoW7MQvpmglRpYOUBiR7HkEgo8ZzkXgttR%2BndhGQzwSF0yJbYm5bY%2FCEu92B78mnHT9aJ7OFDwTs3Y1rFaaGXtw0cCJYgMdJ00C9npUBUkwWOatAyMr5JkT20GzEKdAdOP54SyzCge90dum8C%2FKA%2FJjXsb0QTF9WIvlJHJb%2F%2BWu6JLn3pKa312wLK%2FGca%2FeFyZZ%2FsFmyjiMBNL2UUifNXNMKS6%2Bb5tVHXoVt3VHxoMuiVz18jHf%2Fe52q2CNeOJ1zGKDeSFkkqEBeA4%2Bt2OXS12IzbK4zjyW1SkQKCAx%2BI7P%2FIjv%2Br5SiER052nPl6QcJmWVw10qyYTt4W2GAoYnNbvHQOLM11J7r0ue%2FC3Rt32puv0qXDcU0dwvITFk%2FLPWxkVgd%2FK4gnRu33LGfILraNfY%2BR8eziA0BbA17GamX9DOsXUCWs6G%2Bs2Nj2jU6TCrnInKBjqkAY6snucszz1GAkIUw9ymyUJRV16Du1Z2%2B1g5%2FycQ6Kp0ACy%2BXCU2HKkUNQ5MNZzPf%2B%2Bas0Iv8DQfhAiKz2iSs%2B22PEGZZh4HCuPBTRyRQgXS6%2FD0cmUChGVAOlaXGa3KaDVbV8vKI85iYC%2FKm8%2FQCJD8h70fEBmCcGT%2Bay%2BnaOqbbzSeOP6c1nwqUlUdzitdJfHDdrri9aMWf7McOg7fNIUZnyaa&X-Amz-Signature=9b3b89a865ebda584a88901f2ff6c888bfd4797107131595fbbb507e0d4e8d41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
