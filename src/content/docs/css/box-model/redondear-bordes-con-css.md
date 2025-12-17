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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CN5MNRS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNobjJTLkHBcNYUQlXB7Q%2Bi4%2F9%2BsUWYwV35m%2FJlnTafAiALii5xW0FeGOGHPKdxz2UfZjYrPuK0HmXAHVsLNvQ%2BZyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMH5UEx2uv8eEa22N9KtwDZRp%2BeN1ryj7lB8j8faYWI5NLT0eNedFLHzYqvSffV6GhVCGBNNlq4TL1CxHGcl4d2FMN4lRsYxhzKBD5oRGIfMau1FTaEkTc%2BSqyjwFcqtJEfQultJq%2FDgU3pq2UIVo43RgRGng%2FYSbN4zvrnv5axr0NrsHk4tHxUtIu1gQHdJuNejr%2BR%2FyJnl9XQ3uhNxgHBF44%2F5LItaWe%2Fkg52qSNb1go5ij8BB3nzchz3MY%2BuXC8YVOnK84lNsqPkfB2zNxN%2Bd9TTosp4nD8kpka8EA4APLqajFcuDYrldaSZppDxVy9YUyBC7FSpCJo65I2maUMFYsa1dZM1HvZIKeeF2D9nZQGtyTQwX9R17AGwNw%2FsJwTPJU7saB1M0jbS0a%2BbrTxjJmb8unBEtDe8ESaVlQXJ2euK6VyqoV6INdmf543G0JVDJ66%2FCwVagK4OFgy%2Bm8zjy6vqNYJ57lcYHDjzZGCs50QxeOGrqaXAs77i%2F0pBnQm61oIGi8Tm3r1pO635d3epLd4oDin%2FN2X4rXV3Xs1DkyzO%2BUiE026bLQybcfu%2BYQRI%2FbJuWADvfSXXeueBhsjJP4tgATx7KXmFtfigdkg6FjuHqBO3qtL6y0TkHFgS%2FhYimuC%2BTQ9ZKc9k8Yw6OGKygY6pgHBQiZZb9RNIdoVTbtwTDVt1ZFFxmriXuyjPgm4fcY7K6W3uy1Fph5KM0IKtCLXnw6WJEW2uEAvpZEqC%2BRX240JBfTD8L1ZwMQJ%2F5obP13VlOaoGOUwFFl7JaXEp5GDflim0eK0ANix%2FK%2FqsK4Mi%2FqAwtAhtuJ556pqL9PYse9%2BEoTcRyBeqay2GOGs3L8h9BtXB5AG1dNVVOzE%2BPUsG7rWzlZnXObk&X-Amz-Signature=0eb790b55122e017d367af1674a24f996ad0f0b12ed9c45e8daf96f7745d0e17&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664CN5MNRS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T140504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBNobjJTLkHBcNYUQlXB7Q%2Bi4%2F9%2BsUWYwV35m%2FJlnTafAiALii5xW0FeGOGHPKdxz2UfZjYrPuK0HmXAHVsLNvQ%2BZyr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMH5UEx2uv8eEa22N9KtwDZRp%2BeN1ryj7lB8j8faYWI5NLT0eNedFLHzYqvSffV6GhVCGBNNlq4TL1CxHGcl4d2FMN4lRsYxhzKBD5oRGIfMau1FTaEkTc%2BSqyjwFcqtJEfQultJq%2FDgU3pq2UIVo43RgRGng%2FYSbN4zvrnv5axr0NrsHk4tHxUtIu1gQHdJuNejr%2BR%2FyJnl9XQ3uhNxgHBF44%2F5LItaWe%2Fkg52qSNb1go5ij8BB3nzchz3MY%2BuXC8YVOnK84lNsqPkfB2zNxN%2Bd9TTosp4nD8kpka8EA4APLqajFcuDYrldaSZppDxVy9YUyBC7FSpCJo65I2maUMFYsa1dZM1HvZIKeeF2D9nZQGtyTQwX9R17AGwNw%2FsJwTPJU7saB1M0jbS0a%2BbrTxjJmb8unBEtDe8ESaVlQXJ2euK6VyqoV6INdmf543G0JVDJ66%2FCwVagK4OFgy%2Bm8zjy6vqNYJ57lcYHDjzZGCs50QxeOGrqaXAs77i%2F0pBnQm61oIGi8Tm3r1pO635d3epLd4oDin%2FN2X4rXV3Xs1DkyzO%2BUiE026bLQybcfu%2BYQRI%2FbJuWADvfSXXeueBhsjJP4tgATx7KXmFtfigdkg6FjuHqBO3qtL6y0TkHFgS%2FhYimuC%2BTQ9ZKc9k8Yw6OGKygY6pgHBQiZZb9RNIdoVTbtwTDVt1ZFFxmriXuyjPgm4fcY7K6W3uy1Fph5KM0IKtCLXnw6WJEW2uEAvpZEqC%2BRX240JBfTD8L1ZwMQJ%2F5obP13VlOaoGOUwFFl7JaXEp5GDflim0eK0ANix%2FK%2FqsK4Mi%2FqAwtAhtuJ556pqL9PYse9%2BEoTcRyBeqay2GOGs3L8h9BtXB5AG1dNVVOzE%2BPUsG7rWzlZnXObk&X-Amz-Signature=2ff17a493b34d2b11243391e945a87da039c0f10fadbe6c871fddce0dd4c2fdc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
