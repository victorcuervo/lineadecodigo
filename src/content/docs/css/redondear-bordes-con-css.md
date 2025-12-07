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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43QTP56%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAu0IMJ9IjUvMO65lQWlaHgKHwbH4KEnKk1grjBfMaNnAiAJU5yTR2ZjDHcIVRJnDVL2c8LiVHHpIPYqFphJVJW71yqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVvZsseHGzgaPNv6GKtwDi989edMsgdn3fZZxUt0ffsbMdoPpt8PebxDoUSKBImleY479E%2BZVWQsie5qoDKYvhZuDPh3UhNuqKibbdkPiP94HgmxZpPrk%2BjXLptOfuC0HADwu91gVSyVPmIBI8FIqNbbLb8r3Qapa2T0JrRNViafXTyjtolVfCyKd1pm5slz5pBa00D9YeI97U0NjYKFBgh9CZrY6cZWdbjQ8Z0uSS1WBuzJPlryCxj1bUK94%2BxtXW8PSDDskmzjPKEWjbRwGYY5eMgj6J8hko3AaNb0Ru8QQJ0xf%2BJ7uBatdfgojVnCV8oUU%2BkV4h1gnHEca%2FjOG0UJj%2BK83D%2Fdfu%2BM6hEYyOPeGBh8od4SGgZER%2Bmej2IJdln7bayV9rEumvBmIk%2FIX3TfIKGsCmx707Hht7PAewQ5iOFKoykddDoCiEVTXKa7SfbRdGz3PqldL1mlIVh2EnryjeBQpARmT5YtclmWPMoIfeFp7EkZ6RTbfo416J%2FZHeDY2cFOk4lDkV0oXOdy1FhjGYayTFbEj1vMU5PsWUD%2FWIOnpYAqElKsxG8DwSuPCrgRJ5hgMsaNJIPpdjjyxktD1RoujL%2BbXO72jG6R%2FUy8kSKhpu58Zts%2F53ZahZHH4QCaWXujXI9cmSTAwgcjXyQY6pgFRKgLLxWgTcHluccI158kiQXWyPhCL1lLt3LWtUCJkE%2Bc1N01bIoVEbQsaviPJyCDvOacryeUoXunN%2F0nYZWhikPWc5XHv%2F%2B4SsCXm34ilJVUiITEx4aZqCx%2FC74BHK1cGqU3ll8WQ74IrYa9m0K2pFp56Dyq0eYUyHk4MqLQZUHqDNn608KiY78JfsCMCOIZB7DFfsDykgwou184zo3RLp6nNZlfk&X-Amz-Signature=8e01664e4728595d43f9cab4812befe85d886864d48fea86a70012f39d6496f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R43QTP56%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T220556Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAu0IMJ9IjUvMO65lQWlaHgKHwbH4KEnKk1grjBfMaNnAiAJU5yTR2ZjDHcIVRJnDVL2c8LiVHHpIPYqFphJVJW71yqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMVvZsseHGzgaPNv6GKtwDi989edMsgdn3fZZxUt0ffsbMdoPpt8PebxDoUSKBImleY479E%2BZVWQsie5qoDKYvhZuDPh3UhNuqKibbdkPiP94HgmxZpPrk%2BjXLptOfuC0HADwu91gVSyVPmIBI8FIqNbbLb8r3Qapa2T0JrRNViafXTyjtolVfCyKd1pm5slz5pBa00D9YeI97U0NjYKFBgh9CZrY6cZWdbjQ8Z0uSS1WBuzJPlryCxj1bUK94%2BxtXW8PSDDskmzjPKEWjbRwGYY5eMgj6J8hko3AaNb0Ru8QQJ0xf%2BJ7uBatdfgojVnCV8oUU%2BkV4h1gnHEca%2FjOG0UJj%2BK83D%2Fdfu%2BM6hEYyOPeGBh8od4SGgZER%2Bmej2IJdln7bayV9rEumvBmIk%2FIX3TfIKGsCmx707Hht7PAewQ5iOFKoykddDoCiEVTXKa7SfbRdGz3PqldL1mlIVh2EnryjeBQpARmT5YtclmWPMoIfeFp7EkZ6RTbfo416J%2FZHeDY2cFOk4lDkV0oXOdy1FhjGYayTFbEj1vMU5PsWUD%2FWIOnpYAqElKsxG8DwSuPCrgRJ5hgMsaNJIPpdjjyxktD1RoujL%2BbXO72jG6R%2FUy8kSKhpu58Zts%2F53ZahZHH4QCaWXujXI9cmSTAwgcjXyQY6pgFRKgLLxWgTcHluccI158kiQXWyPhCL1lLt3LWtUCJkE%2Bc1N01bIoVEbQsaviPJyCDvOacryeUoXunN%2F0nYZWhikPWc5XHv%2F%2B4SsCXm34ilJVUiITEx4aZqCx%2FC74BHK1cGqU3ll8WQ74IrYa9m0K2pFp56Dyq0eYUyHk4MqLQZUHqDNn608KiY78JfsCMCOIZB7DFfsDykgwou184zo3RLp6nNZlfk&X-Amz-Signature=51ab7c00bb1fb5b861439e05cf0a1e7af2822050fa019bad842d26c446aa0a91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
