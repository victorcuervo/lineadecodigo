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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQFWOJN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA8ip1H10l31zPtlYt5mORS7xVIO%2BIFJmWwhf5YozG1AiBYLnK0WfI2sVRMT%2BYqn6yvWGVmAVIhepp1NBB%2F3muwGiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhKorjU8eC4Lss%2Bh2KtwDhcKB45tGNOBVJJlhJLs61O52ThC9dQveEfdpfnfGJY59BCyLmg7ZmJ6J3iwb13DYSrzSFPsZOdKtppbYMaF52nDZ%2FJHsmO9tBQluHPUMbK81vmnzlgY7IlLuuCTuZ3G6VomldqRQYZo%2BqZreaz6OLmbsa9K%2FRtQrK6JFeF3Ncx8yDguJ%2Ft4%2BCODjKTAyCrGGHwjDVcQqSgMVwi0CZ7q5M9jEqp5lENNIx%2Bd%2F17agf8JdLnYiuG3xb%2Fw5rBn6HQuXNlXauNFSr1gCa%2FPp2GR4jPropQv7ag8jQLYD9uZYGmL6ViWQd9o4SshyuSzY%2BkmmkQjWlyLc9a8xGsTd1kbOOSzyDF%2Bn%2FSzh71ZZcr3067u72qE6kxYfFcqzguFswwDzgsOnMu7LJX2mEztkCwSXNNvqoxNKyX7zCiytazPBs7XbRtEGjXKGG1hXBdA497MLqklj8B8CKlHgWwjkIYcMwv%2FAn9C0u7peJYnOAiKhrf%2BeC2kK59ciEIN8i%2FMLXOjrwjmwP9aJd99ok9zHbhxuNWJ%2F6zBPrG%2Bns3GWVTYNCEkZqRCbEG0Rif86P3ThzfJqKBeA26RqZbuT1rneeTORN3TwvwqK5zyRM9b7mfHKZl0I4jql4V0LelP5JYMw0K6MygY6pgGa8KvUXq9i04hb9hgabq6MByztCbk1q514wZPW7Uu87Nyt0GiEnDaXL2zi%2FGA2PgJnUu0PSKRfBWeHzFaVi%2F0ipujM4DdlKS8n03YW%2BNP8XDAWaG4ZysN9c30Oku5%2BcxCM82cQHC%2FQ2LXjAyDAuBArrsbjQEYTdespCsltyd9RuO4oyyriccSkCZb2MQZtdcYEzyeOViQs3Jpr6HN3yOQPrQe%2FRfD4&X-Amz-Signature=b832ecdf3f7b560c8eebf4685284029dfd742a356deb32e66ce293c788708472&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZQFWOJN%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T211528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICA8ip1H10l31zPtlYt5mORS7xVIO%2BIFJmWwhf5YozG1AiBYLnK0WfI2sVRMT%2BYqn6yvWGVmAVIhepp1NBB%2F3muwGiqIBAiG%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhKorjU8eC4Lss%2Bh2KtwDhcKB45tGNOBVJJlhJLs61O52ThC9dQveEfdpfnfGJY59BCyLmg7ZmJ6J3iwb13DYSrzSFPsZOdKtppbYMaF52nDZ%2FJHsmO9tBQluHPUMbK81vmnzlgY7IlLuuCTuZ3G6VomldqRQYZo%2BqZreaz6OLmbsa9K%2FRtQrK6JFeF3Ncx8yDguJ%2Ft4%2BCODjKTAyCrGGHwjDVcQqSgMVwi0CZ7q5M9jEqp5lENNIx%2Bd%2F17agf8JdLnYiuG3xb%2Fw5rBn6HQuXNlXauNFSr1gCa%2FPp2GR4jPropQv7ag8jQLYD9uZYGmL6ViWQd9o4SshyuSzY%2BkmmkQjWlyLc9a8xGsTd1kbOOSzyDF%2Bn%2FSzh71ZZcr3067u72qE6kxYfFcqzguFswwDzgsOnMu7LJX2mEztkCwSXNNvqoxNKyX7zCiytazPBs7XbRtEGjXKGG1hXBdA497MLqklj8B8CKlHgWwjkIYcMwv%2FAn9C0u7peJYnOAiKhrf%2BeC2kK59ciEIN8i%2FMLXOjrwjmwP9aJd99ok9zHbhxuNWJ%2F6zBPrG%2Bns3GWVTYNCEkZqRCbEG0Rif86P3ThzfJqKBeA26RqZbuT1rneeTORN3TwvwqK5zyRM9b7mfHKZl0I4jql4V0LelP5JYMw0K6MygY6pgGa8KvUXq9i04hb9hgabq6MByztCbk1q514wZPW7Uu87Nyt0GiEnDaXL2zi%2FGA2PgJnUu0PSKRfBWeHzFaVi%2F0ipujM4DdlKS8n03YW%2BNP8XDAWaG4ZysN9c30Oku5%2BcxCM82cQHC%2FQ2LXjAyDAuBArrsbjQEYTdespCsltyd9RuO4oyyriccSkCZb2MQZtdcYEzyeOViQs3Jpr6HN3yOQPrQe%2FRfD4&X-Amz-Signature=ec3eab83065fa0f3286226173e4cd3cd5bb57893219b9cd63b2375f4c615193e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
