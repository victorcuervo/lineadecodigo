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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBJT7RJY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElARsgOsd0zWd01eaLMWTWG7DZnCulDjpGOTBB0VIfwAiBmB1Z6XcWJtj93GjXqH7znBZ0dnbbolfdtfK2VXh3eRSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMzMQVuxQh3HYcJs06KtwD3IW1%2FQVIQXiuggxCWruVh9xME2JFOw9BczI4iZKrnR9we8Xjmv9KlnkrULQXaM0V3g9spTf1UuMwtmgWiiF6zfQbOcmQtg99aNaW6jjdpBY32UH1VvqIqMhLTQijNqAeWcLdd9sQxNugpYZCEwZqNXm0f%2FkvnxActzj8YyOMaV7KBsBVDVE%2Fyn%2B6RL3BhDYuFIWDvX9FZiV%2FjBA4yKwUEtPkV11FSm4lBKRHK%2Ff7ZlX542sdd5YPJS9TmK08HPBZy68Jo3OQD%2F%2F4d4KQgCSF2F3g6ccni4%2F47wHAGGMCxNC3VEDP5341N2yKQ2a3ytrD6pAADPnA9zh9%2BgqnkumHdbjU7W1Ij%2FY4vUkD7r38oCPsW7Snh2Rhp%2FCSaSa7hlTkEmrHdp9LCcmrKfFmj7V2vy%2FWQteSbrvnFdDlvnjm4EwjbEe4Rjx0AGmpHLfKvrbVVCXx3MCHkTTKqV3%2Bmu6LZX42jpGu1EMfOG277QfVaPjFZ%2BbgGYthZM8121LgG0QMPqfFL7aGG4181g2IfTDphwIOwBTBy%2Bv9xTEHeZy4zr%2F66IwfX8fOlnAZa6ycskaLANIDEzoF%2Bj7izIvQ0xLRX5Eq0oD4Da7gQVZJMzjydMwtl6a8sSysV5PdlNcw8srLyQY6pgGzVc4lMH4UF3nlGcj2IV1LSN1pPrDYO%2FiKIYFK2TLSXey%2BRGqx3DqKMwqaZ3RKxqJ41%2FxQzU%2Fsk7p8DbiOGvInqHGC21ysmZXZnE%2BPzBi%2B5Ewh6ZaOpqe8bvRvNTK%2F4j%2B08V6UIYo6woM4nbONAbIMQkbbCxEIi2vOX%2Bd4zaQLbmyP3vY9hwTUsHeHWXLjGuuZ9nO7LPBLCN6ownfC62lU7V9JyHgd&X-Amz-Signature=d7efb299adfb9e864d2ed1d3090ca5577eccc1fd1b8ec2372614c9a1566ae299&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBJT7RJY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIElARsgOsd0zWd01eaLMWTWG7DZnCulDjpGOTBB0VIfwAiBmB1Z6XcWJtj93GjXqH7znBZ0dnbbolfdtfK2VXh3eRSr%2FAwhfEAAaDDYzNzQyMzE4MzgwNSIMzMQVuxQh3HYcJs06KtwD3IW1%2FQVIQXiuggxCWruVh9xME2JFOw9BczI4iZKrnR9we8Xjmv9KlnkrULQXaM0V3g9spTf1UuMwtmgWiiF6zfQbOcmQtg99aNaW6jjdpBY32UH1VvqIqMhLTQijNqAeWcLdd9sQxNugpYZCEwZqNXm0f%2FkvnxActzj8YyOMaV7KBsBVDVE%2Fyn%2B6RL3BhDYuFIWDvX9FZiV%2FjBA4yKwUEtPkV11FSm4lBKRHK%2Ff7ZlX542sdd5YPJS9TmK08HPBZy68Jo3OQD%2F%2F4d4KQgCSF2F3g6ccni4%2F47wHAGGMCxNC3VEDP5341N2yKQ2a3ytrD6pAADPnA9zh9%2BgqnkumHdbjU7W1Ij%2FY4vUkD7r38oCPsW7Snh2Rhp%2FCSaSa7hlTkEmrHdp9LCcmrKfFmj7V2vy%2FWQteSbrvnFdDlvnjm4EwjbEe4Rjx0AGmpHLfKvrbVVCXx3MCHkTTKqV3%2Bmu6LZX42jpGu1EMfOG277QfVaPjFZ%2BbgGYthZM8121LgG0QMPqfFL7aGG4181g2IfTDphwIOwBTBy%2Bv9xTEHeZy4zr%2F66IwfX8fOlnAZa6ycskaLANIDEzoF%2Bj7izIvQ0xLRX5Eq0oD4Da7gQVZJMzjydMwtl6a8sSysV5PdlNcw8srLyQY6pgGzVc4lMH4UF3nlGcj2IV1LSN1pPrDYO%2FiKIYFK2TLSXey%2BRGqx3DqKMwqaZ3RKxqJ41%2FxQzU%2Fsk7p8DbiOGvInqHGC21ysmZXZnE%2BPzBi%2B5Ewh6ZaOpqe8bvRvNTK%2F4j%2B08V6UIYo6woM4nbONAbIMQkbbCxEIi2vOX%2Bd4zaQLbmyP3vY9hwTUsHeHWXLjGuuZ9nO7LPBLCN6ownfC62lU7V9JyHgd&X-Amz-Signature=3ff99b56c36aa47ff070a18a6be9a5fae56785f020f02de8c20a9b6ae5c327da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
