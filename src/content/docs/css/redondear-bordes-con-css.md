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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z52CVQ66%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICcSYDOpige%2BKsSZGN%2F3tZQve1cWFbC0e3vQpyS7Mh7EAiEAxUs9ctnPSL6UiQcmgKjw0qJC7k0XmUPnIkS6JhrOFmcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOSOtzp4Tb425ooEISrcA8PFI4bbKhdTi7bscrIg1jiHZcIcvkP%2Bna0hA9SSyZ%2B4LcWHmNBtgCWZHnopllFKoMmLsdhpXbhy0lemDlWwDDKBtgCeW6q6w0ugHUerAFYvZyqFWIcbxdH%2BbiM0plhTUrYLwWyjhWtMosxtH8T5Py5CQ8t7l6WyUy%2F8NMdq0Ihbbaaz97VVazx2ERB6EGxrxKBJVipGfKdvmtt3O1uc0nepOfwcDUQbEy%2FimzLC9K91a3ItmleO%2FtJXTamJrLpU1NoGXzTciVYOGZ5Pum4CsPyT%2FjriJ7YtvYTtoiSUtVKzG%2BnwidMyYSVt5PkGJOZqVgx6PXvnMyVMxEWRMOLLYLRgBtpBG4XAfNYTlMJ9%2B3zyxJOvNdswZ9jS%2BibxQwu9Nitsw2Dl9jGywjq6t54lKDpyjNB1BzOme25gXK4VkhOFTXxwbuav%2FIT4FjcV8sgMv5HBB9DiE%2B79QYk9%2FtEQaiXka5OTdfjAuXZKHwd7ituCT86YgjSTqPz3MS6QjzI0jnMNaGtWinAIZYygrMpEVnXUPeBGFZhGEqh497oq670vHgm9nCsk%2FVkWBT3Xt%2FSPDTZgY8AKnyUb3GluuD%2Fk5mLBF8eCHqWzK1g6b98SKIy2yuevy4gVOlKG8Rc9MLDTw8kGOqUB7LFqwGKgVsnzlsPH5uLrkLKfaQ%2FfM5oZ08YWRU1Sj1eXOKjbB31o9TCvGgCI0HdRjX0RgJuN72ecrQaKxjjSrBzKtULiUgWIkAdEDGjyLvQKVxeM07jGx%2F%2FlRKjYZTh3RRqYSaZGVyUy2P9c8JeSrhet7ShjbedFEpsqBxmY65sUjEIlQgwO1zLK5P6RKD82bViFFrRbgEYzB1Uq6e33nM%2FTUeq3&X-Amz-Signature=b519e2fc0b2475c794b708e293498fc082cf84e1afde655587cecef88d2fa153&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z52CVQ66%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T020945Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJHMEUCICcSYDOpige%2BKsSZGN%2F3tZQve1cWFbC0e3vQpyS7Mh7EAiEAxUs9ctnPSL6UiQcmgKjw0qJC7k0XmUPnIkS6JhrOFmcq%2FwMIOxAAGgw2Mzc0MjMxODM4MDUiDOSOtzp4Tb425ooEISrcA8PFI4bbKhdTi7bscrIg1jiHZcIcvkP%2Bna0hA9SSyZ%2B4LcWHmNBtgCWZHnopllFKoMmLsdhpXbhy0lemDlWwDDKBtgCeW6q6w0ugHUerAFYvZyqFWIcbxdH%2BbiM0plhTUrYLwWyjhWtMosxtH8T5Py5CQ8t7l6WyUy%2F8NMdq0Ihbbaaz97VVazx2ERB6EGxrxKBJVipGfKdvmtt3O1uc0nepOfwcDUQbEy%2FimzLC9K91a3ItmleO%2FtJXTamJrLpU1NoGXzTciVYOGZ5Pum4CsPyT%2FjriJ7YtvYTtoiSUtVKzG%2BnwidMyYSVt5PkGJOZqVgx6PXvnMyVMxEWRMOLLYLRgBtpBG4XAfNYTlMJ9%2B3zyxJOvNdswZ9jS%2BibxQwu9Nitsw2Dl9jGywjq6t54lKDpyjNB1BzOme25gXK4VkhOFTXxwbuav%2FIT4FjcV8sgMv5HBB9DiE%2B79QYk9%2FtEQaiXka5OTdfjAuXZKHwd7ituCT86YgjSTqPz3MS6QjzI0jnMNaGtWinAIZYygrMpEVnXUPeBGFZhGEqh497oq670vHgm9nCsk%2FVkWBT3Xt%2FSPDTZgY8AKnyUb3GluuD%2Fk5mLBF8eCHqWzK1g6b98SKIy2yuevy4gVOlKG8Rc9MLDTw8kGOqUB7LFqwGKgVsnzlsPH5uLrkLKfaQ%2FfM5oZ08YWRU1Sj1eXOKjbB31o9TCvGgCI0HdRjX0RgJuN72ecrQaKxjjSrBzKtULiUgWIkAdEDGjyLvQKVxeM07jGx%2F%2FlRKjYZTh3RRqYSaZGVyUy2P9c8JeSrhet7ShjbedFEpsqBxmY65sUjEIlQgwO1zLK5P6RKD82bViFFrRbgEYzB1Uq6e33nM%2FTUeq3&X-Amz-Signature=a154aa80ee87b57e9c135c7c99ba497321e96a0d2fea0cb258149361debf829b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
