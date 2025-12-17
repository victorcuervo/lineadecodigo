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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GK4Z2V4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsxtKFFkVm3pJIFwDtj%2BQE05Win1pvI1IjceyR3qL4lQIhAPcl%2Fzi3VkeeRu9VN6epLsWrNq28AbZ2ovNySdeTaV%2BgKv8DCHIQABoMNjM3NDIzMTgzODA1IgyWVCG59i4h0Q%2FZpCsq3APRsx15IEGqljUrkHzJ%2FpM%2BpI%2FO9sams1Mf6MbHv8y6Ny4rK1dRE4KGtnTHKQ5q6THRb4D9mdcKL2se9zZQZvX%2B%2Fbd1VGBierjQ3StN%2FyPwUlx3rO1uqx11C4n2hsgCFCgDbMdsA%2Bj09ZJp8X25iuAWjpSNLvMbNwqFdxHHnJHBfea9xEg5DzDxuWJEFa8ufEo8bslsK1zgh5BOKZT67uESgOiz8h3iC%2BhF%2FByFJDgvEra0SgU%2FjIQqvIAevHOWBJyxVZ%2FyILJXwWgIkggPKRM%2F18RV%2BksKayEZvvtiNWWs0tiQ0lNcGizBTiIBpVEP6NFa9SqSH%2Bx%2FX3zD0rNHjL7q6wv6nqnDxUtGTIFwPcSUE7WRnnjdwUir43qxbpe%2B0Cu6dLUR2QLDsxmg7xQkhD%2Bx5dd71qnGYGK%2BqkQdLwjBWDx0nP%2BiNTkFWjzBMkL6%2BxJxgVjUAEP4VlMqSXYNS44UknnvETnFInHk88xd9T05Y9N51VrRDf1nrXUh%2FfzdhRmOro2fPfs%2BPEFCJwQHJou6%2BLU6X84HoTV%2BeYJkfci0YMCEFWDFRrOnW4jKa%2F%2F1wGW3M%2FM%2B5ywlvOBv2ECpt5X4uaKUjddhMC3PTvPTxAt0C%2B7HgXlT2hJ0YxX74zCJ%2FYfKBjqkAaHSHXdH%2FCaiZCAo3JGwHX%2FBrmvdQZ710%2FS%2BLfkjdcU26ZHKBx0yPrnrPym6rET9ir7yNj1w%2BQn6YfWeP3ddvhO6ixX4GZfgANHRhz1cvkccdif%2FYhdeYmEi5UkBk1HvIPGmJQ87eYSY9yV8YavBHXpHv8sZSGfpLqfywbd9ezGcRV14w35cTDINBL2PIvw3%2BR7y78eJ2m2i6UNpNZW4G7oAlC9C&X-Amz-Signature=0437671000c8cd90d663b1e932f0e1f592dd619eee6cde78971fc0abe14086be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662GK4Z2V4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T005554Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsxtKFFkVm3pJIFwDtj%2BQE05Win1pvI1IjceyR3qL4lQIhAPcl%2Fzi3VkeeRu9VN6epLsWrNq28AbZ2ovNySdeTaV%2BgKv8DCHIQABoMNjM3NDIzMTgzODA1IgyWVCG59i4h0Q%2FZpCsq3APRsx15IEGqljUrkHzJ%2FpM%2BpI%2FO9sams1Mf6MbHv8y6Ny4rK1dRE4KGtnTHKQ5q6THRb4D9mdcKL2se9zZQZvX%2B%2Fbd1VGBierjQ3StN%2FyPwUlx3rO1uqx11C4n2hsgCFCgDbMdsA%2Bj09ZJp8X25iuAWjpSNLvMbNwqFdxHHnJHBfea9xEg5DzDxuWJEFa8ufEo8bslsK1zgh5BOKZT67uESgOiz8h3iC%2BhF%2FByFJDgvEra0SgU%2FjIQqvIAevHOWBJyxVZ%2FyILJXwWgIkggPKRM%2F18RV%2BksKayEZvvtiNWWs0tiQ0lNcGizBTiIBpVEP6NFa9SqSH%2Bx%2FX3zD0rNHjL7q6wv6nqnDxUtGTIFwPcSUE7WRnnjdwUir43qxbpe%2B0Cu6dLUR2QLDsxmg7xQkhD%2Bx5dd71qnGYGK%2BqkQdLwjBWDx0nP%2BiNTkFWjzBMkL6%2BxJxgVjUAEP4VlMqSXYNS44UknnvETnFInHk88xd9T05Y9N51VrRDf1nrXUh%2FfzdhRmOro2fPfs%2BPEFCJwQHJou6%2BLU6X84HoTV%2BeYJkfci0YMCEFWDFRrOnW4jKa%2F%2F1wGW3M%2FM%2B5ywlvOBv2ECpt5X4uaKUjddhMC3PTvPTxAt0C%2B7HgXlT2hJ0YxX74zCJ%2FYfKBjqkAaHSHXdH%2FCaiZCAo3JGwHX%2FBrmvdQZ710%2FS%2BLfkjdcU26ZHKBx0yPrnrPym6rET9ir7yNj1w%2BQn6YfWeP3ddvhO6ixX4GZfgANHRhz1cvkccdif%2FYhdeYmEi5UkBk1HvIPGmJQ87eYSY9yV8YavBHXpHv8sZSGfpLqfywbd9ezGcRV14w35cTDINBL2PIvw3%2BR7y78eJ2m2i6UNpNZW4G7oAlC9C&X-Amz-Signature=2faa22af3397f2f0cb99359ccec8fdbc910c90546924de4a5381cd50d3cc681c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
