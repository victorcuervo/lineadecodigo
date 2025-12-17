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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V5HWLOD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd782wbR5zActtgsLxT%2BYBLIqYRzep50zIAZ5YhBCaLAIhALLeHzuVYYXfR9rGXelhgNv9Ho67pYVvhiQuC7%2BmTigLKv8DCH0QABoMNjM3NDIzMTgzODA1Igy7djJPoSDzEEcicdEq3AM%2FC6fzR8CojiFrpOPiAvosRldyxlsytRpKyswQklOk0TZU1LkNDb9qDzYm6wjMlndAkT3x%2FCOHtS1xfwfOoUfR1eAlF9s43XxW%2FpLvdXUL2eHMLwMS47AyfAOXZQUzByWgMlKKX43nI3fEAn07k6q7ALpIOS19kgjU%2Bk30HyMTgbY8AodJr%2FRJGXzBvO5dBKotjUf%2FuduF75tvsGaP26mxCE2fdHj089pSZxwRgnVeObiIDnPZ7o%2BFxOBwq78cOl%2Fkq6u6bDmkDrhsHy60vJ%2BP%2FvzhqoKsOxaSFVl3P6GyW0iB5pWv0fPT4smdbPX4VG81uCSguE3PjgVEO2xTxCjV9pdVW7wdTyY91vB3NMAEd%2BXzclmEnfCTK%2BTrHxMP3H2bmeX%2BTDdi9LVbzk9vOQvqy2TBbHr9AK217pNtsj1xeFYMQWpc9bTOtM1WqtZcjyzlucGsPaZRw2GSk5u%2BONS7xkHUUvFNpsIoXmwwjs1eam5a1qyN6SW%2FjSow9pOoIq0xDky%2BVhp89ExanLSzYXF9m0xFUPstqNKT1KbyKdqTzurp6Jpq6PLnKroLThbHp8cKkCTM7O3P5TiLZD7H80i7dMsFd3cD%2FIBZe9oW9u4NYoVeoRSnjwaEtyWrKDD3qorKBjqkATIxtYl60Yoc9UvapZ3Lz2hIc5EczK3QsgJh0VvimFgdI6g7w7QXxTdjUosk2QdYwMwNebBZ2He8Y3zboOcE7k9cXJ%2FKW4DaFXpXceZBZr3s9HIsMOEfuVCiU0cbaH2XTivDZWgXwwLelg%2BPEZqyqk%2BfPLmj%2B9zUXbJ0EIQubxS0AX8QwSkjnwXqQdGvdkAi%2FGxQz5Lph4WRsZXZJLeWC1iGktFF&X-Amz-Signature=07e65e304f34f92a729cccb39156eae5fe6b087906e634f0b750594370632e43&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662V5HWLOD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T120626Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDd782wbR5zActtgsLxT%2BYBLIqYRzep50zIAZ5YhBCaLAIhALLeHzuVYYXfR9rGXelhgNv9Ho67pYVvhiQuC7%2BmTigLKv8DCH0QABoMNjM3NDIzMTgzODA1Igy7djJPoSDzEEcicdEq3AM%2FC6fzR8CojiFrpOPiAvosRldyxlsytRpKyswQklOk0TZU1LkNDb9qDzYm6wjMlndAkT3x%2FCOHtS1xfwfOoUfR1eAlF9s43XxW%2FpLvdXUL2eHMLwMS47AyfAOXZQUzByWgMlKKX43nI3fEAn07k6q7ALpIOS19kgjU%2Bk30HyMTgbY8AodJr%2FRJGXzBvO5dBKotjUf%2FuduF75tvsGaP26mxCE2fdHj089pSZxwRgnVeObiIDnPZ7o%2BFxOBwq78cOl%2Fkq6u6bDmkDrhsHy60vJ%2BP%2FvzhqoKsOxaSFVl3P6GyW0iB5pWv0fPT4smdbPX4VG81uCSguE3PjgVEO2xTxCjV9pdVW7wdTyY91vB3NMAEd%2BXzclmEnfCTK%2BTrHxMP3H2bmeX%2BTDdi9LVbzk9vOQvqy2TBbHr9AK217pNtsj1xeFYMQWpc9bTOtM1WqtZcjyzlucGsPaZRw2GSk5u%2BONS7xkHUUvFNpsIoXmwwjs1eam5a1qyN6SW%2FjSow9pOoIq0xDky%2BVhp89ExanLSzYXF9m0xFUPstqNKT1KbyKdqTzurp6Jpq6PLnKroLThbHp8cKkCTM7O3P5TiLZD7H80i7dMsFd3cD%2FIBZe9oW9u4NYoVeoRSnjwaEtyWrKDD3qorKBjqkATIxtYl60Yoc9UvapZ3Lz2hIc5EczK3QsgJh0VvimFgdI6g7w7QXxTdjUosk2QdYwMwNebBZ2He8Y3zboOcE7k9cXJ%2FKW4DaFXpXceZBZr3s9HIsMOEfuVCiU0cbaH2XTivDZWgXwwLelg%2BPEZqyqk%2BfPLmj%2B9zUXbJ0EIQubxS0AX8QwSkjnwXqQdGvdkAi%2FGxQz5Lph4WRsZXZJLeWC1iGktFF&X-Amz-Signature=bd6bcac1c89f5e97c8f36096e4d4a2addce20853597868a3e9316b0725fef42d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
