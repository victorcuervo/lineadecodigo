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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOH6BT7M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjlkGErj8k1bXiaX57o3YcAqxdMjChYiy0v7XgqOHLxwIhAK%2Bod%2FiffOVwmAA7EpB01Z5f%2BcNVtb%2BNV%2BALzGA%2BMMeAKv8DCH8QABoMNjM3NDIzMTgzODA1IgwPQc3rEF5ttEYzRgYq3AM5o%2Fdv9r5V0gtjc9GvUdOVS%2B4J7MPzqCKvrciMXgbliFtZlbIJi93R1d%2BFpiOIyzyhusl2jWMIPrRJ71R%2FM83AgvP7sAqYVLI2tUIDmYG6ANTY9sQgEWq%2F%2F%2Fo4kZVt7Cg2QY2BVajz3pWjktzb7FharxAHUQKk7Hhhlsl49iaqk5yKLEwpSl1%2BLmv7jOs0uLAcqacxs1nn3ZEpoN%2Fx5mCdrkjIynMZ2iCxY8JahctdTTFYIjcoJlqpgr4rHLgdVJmp78T9a5FWmEU9RXMenf1mG2b8qYuXfwsgzSSyQ3U1DZ%2Ba9NQ5I4yRGk9cwvs6DBclz4mCp1oCRGMAaBOq%2BtXSMV5gXWGqjbUmhTcKl5htgUUucA3CH5khnhVhkfBejnj64TUkkKgixLQNv%2B9sd2dxUx3o2qcvq9BGu5w5b82RhIcR0p2VoDTB5fe52%2B4aA4qwTvCgGyxFek4hVRmxW2aNQURHK%2Fr4bXyeuFO9E%2F4gXifszgOKoe4u4Po8gcx3CGuKK86M2tTvP9Anoh2QGMedA%2FWw9DJ93M%2B8jIY7TXaw9tlz5t%2FdHhY%2BnN08L7vXIoB7g4QrQdRI4orvN8TYC0j5WXUFLtXsr4ncLV5dKxl3pbq%2BbJiUZO00UZTbZDDV4YrKBjqkAWKDJl%2BMYGLRU6T8U%2BUrgqexf4p40gTEH%2BRQo3K4sFBQN9CnP6EkSDI1hIvftPT7QffIKNVefcIpv73LcD2bycGb4HPtZrLSIZneHLWtt9S3m3GPLsYKkhXZSHrz%2BAFIDDbrF58ffEhEmRAuq8ueV8191lQBmzZWun%2F6pw15h7v4zi6EaGmxC0ds74ixkeyJvi8zDMgd20RlthuhWUgeofpOpnGu&X-Amz-Signature=ff388b2631337054530ed74cbbe2684c66ef2be10d35e8792c551146d677464f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QOH6BT7M%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCjlkGErj8k1bXiaX57o3YcAqxdMjChYiy0v7XgqOHLxwIhAK%2Bod%2FiffOVwmAA7EpB01Z5f%2BcNVtb%2BNV%2BALzGA%2BMMeAKv8DCH8QABoMNjM3NDIzMTgzODA1IgwPQc3rEF5ttEYzRgYq3AM5o%2Fdv9r5V0gtjc9GvUdOVS%2B4J7MPzqCKvrciMXgbliFtZlbIJi93R1d%2BFpiOIyzyhusl2jWMIPrRJ71R%2FM83AgvP7sAqYVLI2tUIDmYG6ANTY9sQgEWq%2F%2F%2Fo4kZVt7Cg2QY2BVajz3pWjktzb7FharxAHUQKk7Hhhlsl49iaqk5yKLEwpSl1%2BLmv7jOs0uLAcqacxs1nn3ZEpoN%2Fx5mCdrkjIynMZ2iCxY8JahctdTTFYIjcoJlqpgr4rHLgdVJmp78T9a5FWmEU9RXMenf1mG2b8qYuXfwsgzSSyQ3U1DZ%2Ba9NQ5I4yRGk9cwvs6DBclz4mCp1oCRGMAaBOq%2BtXSMV5gXWGqjbUmhTcKl5htgUUucA3CH5khnhVhkfBejnj64TUkkKgixLQNv%2B9sd2dxUx3o2qcvq9BGu5w5b82RhIcR0p2VoDTB5fe52%2B4aA4qwTvCgGyxFek4hVRmxW2aNQURHK%2Fr4bXyeuFO9E%2F4gXifszgOKoe4u4Po8gcx3CGuKK86M2tTvP9Anoh2QGMedA%2FWw9DJ93M%2B8jIY7TXaw9tlz5t%2FdHhY%2BnN08L7vXIoB7g4QrQdRI4orvN8TYC0j5WXUFLtXsr4ncLV5dKxl3pbq%2BbJiUZO00UZTbZDDV4YrKBjqkAWKDJl%2BMYGLRU6T8U%2BUrgqexf4p40gTEH%2BRQo3K4sFBQN9CnP6EkSDI1hIvftPT7QffIKNVefcIpv73LcD2bycGb4HPtZrLSIZneHLWtt9S3m3GPLsYKkhXZSHrz%2BAFIDDbrF58ffEhEmRAuq8ueV8191lQBmzZWun%2F6pw15h7v4zi6EaGmxC0ds74ixkeyJvi8zDMgd20RlthuhWUgeofpOpnGu&X-Amz-Signature=11e4f7da79ab7ba5750f3529ac0d51470f6a190100a5ea24ab8e4e427c1a6d0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
