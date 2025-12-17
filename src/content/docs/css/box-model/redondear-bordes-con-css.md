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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P3NS7NL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxX2GkXpeaRPMIWPXLoJaTzE1LmqpsWz24WxAY6tarUgIhAP54rx23sFWsaqd00Tmj%2BxT7fAkbxJ%2FrNbIbwj%2FgB9pUKv8DCHwQABoMNjM3NDIzMTgzODA1Igx8Kg4YkY2KC8yRTEQq3ANQ17WTENAxSAo4FkoucsmRcJXFQ2%2Bu2GE%2B8Ut20Cwbh3h1EAtQNHP7aZ1%2F4TGwkidL6NftlFKVzgzho4aE1DRi45bOOHECFnbommdEjXfyJiWvluaYW112QzhBYx6xXhLDeof34cAEz3%2BDhDmvQb0rKaDelLg28v%2BmhSVhHnMRw4iyK%2BhixJcDIWBRQ0gMIHBz15SIsrFO%2F9n%2BYOdBkINRybIbM8N9ICDJiFNOqTVja4mm4pb%2BuVg2nl%2Bu722tr4Sul8gyXoeGazxVfsOCkSX0lJqtsk5cUkdktxy%2F5xKCqY9WUJ8yvQnJ6%2FJoSQCiQjhm9yD5RUaJKdpIAGKmXhJu3LQhIob%2BF62sFlaZ0KFdUUmdGOF67aISUh%2Bb9DiBEmSE3%2BfoXSofJ0WmnrfKl45ewadzFXnYs0cLleP6TdNfkKXw%2F4bNvtdqV37xyWFjHA2UbJJZSl5mGwkr9UaccMBatuRDAtpduyJWOpNUcpCXXwXXdX3YzPI6%2FofsdUIGw7VNHGgZqEnc7oFeBdXaZqiB8MxrHvf3IS1gyICWWnBvOCZruTxnOdt4PglFzfNQW7bD1XvD%2Fspb3HrUOWJVSeBgkcEtczWhYsqIR3DWMfKtqLDHR5HuOFCAwQiYbTCJj4rKBjqkAY4%2FP5p9sru89Y90U8ZqsCTC3JiGxw1uZ%2BGcAlsIqeJ62uaBw6tqEu43gt%2Bh9aUFr5Dl1xh6Z4IlYSyzrRk3TPwLDKF3Wvr8C57HKElzr40ftpnhhVe7CjdL5D5pGSKMgm%2BdLf7Ia8eFtkUwV2dp8pU20MzKbJzsewssgOsjyExeihfrJd0%2BiBCTlLGWKVe1Z6CgNUnIi15McO1lkv9U1%2Fc3sB%2Fi&X-Amz-Signature=72b8c5613e41d89a60a3624ace40ca199dddb12544c0b43faa16de2605fa7e85&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667P3NS7NL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T104049Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCxX2GkXpeaRPMIWPXLoJaTzE1LmqpsWz24WxAY6tarUgIhAP54rx23sFWsaqd00Tmj%2BxT7fAkbxJ%2FrNbIbwj%2FgB9pUKv8DCHwQABoMNjM3NDIzMTgzODA1Igx8Kg4YkY2KC8yRTEQq3ANQ17WTENAxSAo4FkoucsmRcJXFQ2%2Bu2GE%2B8Ut20Cwbh3h1EAtQNHP7aZ1%2F4TGwkidL6NftlFKVzgzho4aE1DRi45bOOHECFnbommdEjXfyJiWvluaYW112QzhBYx6xXhLDeof34cAEz3%2BDhDmvQb0rKaDelLg28v%2BmhSVhHnMRw4iyK%2BhixJcDIWBRQ0gMIHBz15SIsrFO%2F9n%2BYOdBkINRybIbM8N9ICDJiFNOqTVja4mm4pb%2BuVg2nl%2Bu722tr4Sul8gyXoeGazxVfsOCkSX0lJqtsk5cUkdktxy%2F5xKCqY9WUJ8yvQnJ6%2FJoSQCiQjhm9yD5RUaJKdpIAGKmXhJu3LQhIob%2BF62sFlaZ0KFdUUmdGOF67aISUh%2Bb9DiBEmSE3%2BfoXSofJ0WmnrfKl45ewadzFXnYs0cLleP6TdNfkKXw%2F4bNvtdqV37xyWFjHA2UbJJZSl5mGwkr9UaccMBatuRDAtpduyJWOpNUcpCXXwXXdX3YzPI6%2FofsdUIGw7VNHGgZqEnc7oFeBdXaZqiB8MxrHvf3IS1gyICWWnBvOCZruTxnOdt4PglFzfNQW7bD1XvD%2Fspb3HrUOWJVSeBgkcEtczWhYsqIR3DWMfKtqLDHR5HuOFCAwQiYbTCJj4rKBjqkAY4%2FP5p9sru89Y90U8ZqsCTC3JiGxw1uZ%2BGcAlsIqeJ62uaBw6tqEu43gt%2Bh9aUFr5Dl1xh6Z4IlYSyzrRk3TPwLDKF3Wvr8C57HKElzr40ftpnhhVe7CjdL5D5pGSKMgm%2BdLf7Ia8eFtkUwV2dp8pU20MzKbJzsewssgOsjyExeihfrJd0%2BiBCTlLGWKVe1Z6CgNUnIi15McO1lkv9U1%2Fc3sB%2Fi&X-Amz-Signature=8bc87dfe15cfaddf9f617dc1c27b19a1a658bc6e6a0bc66a2e7159d9947c575b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
