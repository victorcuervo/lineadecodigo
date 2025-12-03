---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastupdates: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635NQUJGO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCQlB5DSirFred52oNuAik15KQcZpz%2F2h6QS8x%2FoDRLkwIgMVrRT2xldmF9xLYzi0ZZ7Sbb8SUFRH4z2BPIOhTxQfoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHycczjNjIPL63Th1ircA6pjQ7%2BRuxAkgS7u%2F4Z6CB1%2BBe0%2F6cTd%2FTWc6PU5%2Bq0ssXQompSOsvezSPl81710m8%2FsNfmZq7d2mh3FHJp%2FpDtA1Ft2hK1DpeWnPr%2BfY59%2BZMaq3iu9tNXVuE50rUFTiihIFnX8wgQe5qC%2BQV%2Fbakj7NW4pZ%2Bo11woDxSyhBvL%2B8zzy9zZFirQUU2O1EPVMrcJWQc169vvS62qELWRSk9p874TWdUWpKFZIt9TysYlD0TzVBXVK3RU7c5Bk3tpnlSxbCqR5wNOqFWqoaDQFoWioRI2v5armFvOJsJMpZDoOO01vsnWlQyOflGwF7BofssYfAFy2%2BmZM3gQj3r%2FYl6N9MfPd8KVQqZRm2wmtEVlfd4cys%2ByutHbJ8JLGTW%2B7RulmslfzPh9b80VcF0jg0JXVVu9IWafVL9I5A3LE1ZOjW231PCRgpHhwD%2FCkaQJGizwSH3XowbjsOv2clKVrER73Ks%2BRRzkHAfXl0y5MGJbyQsFlAwnyLYCqFvCwZfE2B2EnTjJyBEkulREQnGLuzP3diI4qoTanefErDKL8jA9ooHhPAywW%2FbZuKZsEwi12V8Ti18aq8sry1m2ICa9EpamQuomJ1SpYB9qceUHrwt39h1J6ouY0zDezuiysMNrcwskGOqUBfV25fMq4yMxiZQeYn5ZgO4rqldqgIUdWu6OBFW8%2BUeiGTzY9H5eyIRBx1salYBhxSlVHrTWIWTIcDDPR9pMjjzZbCpLZAq38r5C5zBZtH3WLQS9L6bNUhUiJmKscn%2BmHj5TBj4DEuylSBrdvTncvWs0eVgYlsBfDjaSkrp9p226vTLsZstugk2MVwmueMiYp0fiKP2bQVagKVx6X0KeGPDIQ8uez&X-Amz-Signature=dd48f7c3519b3b9bbdce7155ce87579bf142b723f7510314225718c6afcdf5a7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635NQUJGO%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T214312Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJHMEUCIQCQlB5DSirFred52oNuAik15KQcZpz%2F2h6QS8x%2FoDRLkwIgMVrRT2xldmF9xLYzi0ZZ7Sbb8SUFRH4z2BPIOhTxQfoq%2FwMINxAAGgw2Mzc0MjMxODM4MDUiDHycczjNjIPL63Th1ircA6pjQ7%2BRuxAkgS7u%2F4Z6CB1%2BBe0%2F6cTd%2FTWc6PU5%2Bq0ssXQompSOsvezSPl81710m8%2FsNfmZq7d2mh3FHJp%2FpDtA1Ft2hK1DpeWnPr%2BfY59%2BZMaq3iu9tNXVuE50rUFTiihIFnX8wgQe5qC%2BQV%2Fbakj7NW4pZ%2Bo11woDxSyhBvL%2B8zzy9zZFirQUU2O1EPVMrcJWQc169vvS62qELWRSk9p874TWdUWpKFZIt9TysYlD0TzVBXVK3RU7c5Bk3tpnlSxbCqR5wNOqFWqoaDQFoWioRI2v5armFvOJsJMpZDoOO01vsnWlQyOflGwF7BofssYfAFy2%2BmZM3gQj3r%2FYl6N9MfPd8KVQqZRm2wmtEVlfd4cys%2ByutHbJ8JLGTW%2B7RulmslfzPh9b80VcF0jg0JXVVu9IWafVL9I5A3LE1ZOjW231PCRgpHhwD%2FCkaQJGizwSH3XowbjsOv2clKVrER73Ks%2BRRzkHAfXl0y5MGJbyQsFlAwnyLYCqFvCwZfE2B2EnTjJyBEkulREQnGLuzP3diI4qoTanefErDKL8jA9ooHhPAywW%2FbZuKZsEwi12V8Ti18aq8sry1m2ICa9EpamQuomJ1SpYB9qceUHrwt39h1J6ouY0zDezuiysMNrcwskGOqUBfV25fMq4yMxiZQeYn5ZgO4rqldqgIUdWu6OBFW8%2BUeiGTzY9H5eyIRBx1salYBhxSlVHrTWIWTIcDDPR9pMjjzZbCpLZAq38r5C5zBZtH3WLQS9L6bNUhUiJmKscn%2BmHj5TBj4DEuylSBrdvTncvWs0eVgYlsBfDjaSkrp9p226vTLsZstugk2MVwmueMiYp0fiKP2bQVagKVx6X0KeGPDIQ8uez&X-Amz-Signature=7e1652071cde183a5989fd1f8e892900110bccae464068b84d4b004adf1c8a8f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
