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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2OJUUYO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T122854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCskLrjXjgFz%2FH%2B%2FmvcHGivTV6yGqgRE34xGZTQ1CJKJQIhAJTOhXTKuBJwlzgZJCZc5M3mQjvVh%2FYUzquXpBlrdkBPKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLrlGYHyFURUhkFgUq3AMUiOknuPj8hYZC7W8oD6qgZSSHFn31h5RqZJYT84RTmXhnFQv9gMZ5AuSYJXuTAubhfzLPd82MNPvNRlQHKZr0njo%2BEK4qaXVAf8dU8Wc1X6QBZcFKhzN9YyBPRG490m6sG9lBX4tfIs4%2FPlpi5Dv83GsAGAUynLuXFRC6g9F%2BDZKUSnwiUqzAWgMiCHTOoMd8bRjdx1IQLgutzRzbYDqZ06gNy6Iad5xI%2BznaJFafRb86s8pE58Z6wB5LCClHN21A74dEM3O8JTUYu%2BylNaQ8ikA%2FNkVto7RgGhfhHNJwWtWXzypbObWnOUNmGXzlaJQSF3I33%2BspV6%2Br0Kv6R9nPKMq7oa7x8XtUEmUUcnTcQUCcEtgMe7T5pBYiwosCTrlvv4NasOkqUKsSa9aXhhfGfsiNIOPRsB4gKwOhRg2l88EMtpk9%2BbpP%2BO0tQ3hB49vBfdtZM8Gw85Ad7Bpe6IeWUGBnT71ijfqU5OBiEwuX7R3QY%2Fyq0pklY0Dgqbqk7zKN7L32O%2B0nwJhP9FUt9XmYTI20W7eD7sEMyUY%2F2LEw4XwWjr%2Fdcw2f97oWProwvRfrd5Dkl2%2Bo%2FR3MOGufkZDSsIRMJNml8BCYywwqdjwoucv%2FpNjNGu5MusRWeTCXmdXJBjqkAdd4K%2BLib29o0P01vsJu68%2BGMkEraz%2FwoXjBHaaZs2fGP02ZOHQfmNtpQZpXq%2B04IG7qCAaFKgesOMrj%2B6%2BD8oggNCWMnhfSxhDbXM%2B8eE6%2FHfgPH5U4INfAP7ZwDi%2FC456vxiSIp9ZIEat7qbxXBeDQ%2BHXY0jaGTjxQJ0h%2F5ltsDW8WT758n0BAf0aIvn4AMFSMXBX2fDESvdjgdlxEuC4qx78v&X-Amz-Signature=02ea43dfe65b19344b63811c9beb619cb103dfb77a4930fadd4e560f23012bea&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2OJUUYO%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T122854Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCskLrjXjgFz%2FH%2B%2FmvcHGivTV6yGqgRE34xGZTQ1CJKJQIhAJTOhXTKuBJwlzgZJCZc5M3mQjvVh%2FYUzquXpBlrdkBPKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyLrlGYHyFURUhkFgUq3AMUiOknuPj8hYZC7W8oD6qgZSSHFn31h5RqZJYT84RTmXhnFQv9gMZ5AuSYJXuTAubhfzLPd82MNPvNRlQHKZr0njo%2BEK4qaXVAf8dU8Wc1X6QBZcFKhzN9YyBPRG490m6sG9lBX4tfIs4%2FPlpi5Dv83GsAGAUynLuXFRC6g9F%2BDZKUSnwiUqzAWgMiCHTOoMd8bRjdx1IQLgutzRzbYDqZ06gNy6Iad5xI%2BznaJFafRb86s8pE58Z6wB5LCClHN21A74dEM3O8JTUYu%2BylNaQ8ikA%2FNkVto7RgGhfhHNJwWtWXzypbObWnOUNmGXzlaJQSF3I33%2BspV6%2Br0Kv6R9nPKMq7oa7x8XtUEmUUcnTcQUCcEtgMe7T5pBYiwosCTrlvv4NasOkqUKsSa9aXhhfGfsiNIOPRsB4gKwOhRg2l88EMtpk9%2BbpP%2BO0tQ3hB49vBfdtZM8Gw85Ad7Bpe6IeWUGBnT71ijfqU5OBiEwuX7R3QY%2Fyq0pklY0Dgqbqk7zKN7L32O%2B0nwJhP9FUt9XmYTI20W7eD7sEMyUY%2F2LEw4XwWjr%2Fdcw2f97oWProwvRfrd5Dkl2%2Bo%2FR3MOGufkZDSsIRMJNml8BCYywwqdjwoucv%2FpNjNGu5MusRWeTCXmdXJBjqkAdd4K%2BLib29o0P01vsJu68%2BGMkEraz%2FwoXjBHaaZs2fGP02ZOHQfmNtpQZpXq%2B04IG7qCAaFKgesOMrj%2B6%2BD8oggNCWMnhfSxhDbXM%2B8eE6%2FHfgPH5U4INfAP7ZwDi%2FC456vxiSIp9ZIEat7qbxXBeDQ%2BHXY0jaGTjxQJ0h%2F5ltsDW8WT758n0BAf0aIvn4AMFSMXBX2fDESvdjgdlxEuC4qx78v&X-Amz-Signature=fde8da456943282c47bb023180de1206d7a9ab844db6ee801dcb1b94efc5a67a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
