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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCHQG4BH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0xTX2KELYpxuxsURWyMT%2FE8dP%2Fh6aGpSxFv25gHHaFgIgXO2JpLNYlurbMSRpvH5JSmHjVaAuShmuDh9G0csSv74q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDG4EMytFU7iaHd5nPircA6jk0OlDSKJ0Rn2rPoypFC%2B6qB0ggzy0ACEVLgMNAraxvy7OQXN6R8ElCyGK1wxOTTy1V7AGEgfqMSwbjHNQPo75y2Lgtt%2FJWbrS3YxYJqWjNxX4qopWSkyoVLBUHJLGgtiZlHUCkaDbN14GdDQpE4rojHWud51Y5iuQSaIHo3h2idXVTArzo6zv779HJRaGrL56cBGPWQ2zdXMAywSFS%2FVgSdBGhRGm7uLiNItpPdS1biSQQKb0bEXOX7e9%2FH9RkJP4OaYNaT2cMOWd%2Bngyiir%2BmmIDdHV1SJ3CFoRxwRSHchTB8BDXr0kUQ8%2B0e51iTWtQTJj8Vs%2BW1EiIV6MNdDaEE17tN0Fg5D%2Banm1eRu4xSQT4uT6rJI2VswT1TKaa9xygEdgHeVI8KUdYu%2BAmA3BVo5noRXlGpQD2wiAMQdZ%2Bkc%2BLZPXmDIGgJpBpnRIM9ZMvEUrHR%2B8QrbYkkxpmjJ2zcTlrAwlwc50dA3%2FfsHMWzUWf9VvJ9YgKsJ3CpxfkyWRrDosr%2FxuT41QD6FpiH%2Bly4HdJVXkjmza5Tg59HNRkz%2Fl0P4gzg4YZmaUbHn8NqdxiHvGBcQ9AFMbziar50cz9OIZRdfFZ0so0TLvIMOo8DjTPva6WCzkbotylMKbOyskGOqUBwv5d75oos6xkHfYIjtTkkwL91puvYShS7WyxaNiP8fZ0Mu9R4DD63tJIdEu%2B%2BHIWFvWTlmLynIDyCke8AKkd6MyMdOBNn8V%2FOWZMJuVb2d0ub6%2FVGwrDqMd1wRJrsSpBYIy8I3irJHe5XZ3qgwzMYn%2FZFzbkg2pR6hXOGQ3sCUHhgtJjFZFaILnbmvH5fZhMoI%2B3Yxe8MyRZSeGDqXrRoWa%2FfMqu&X-Amz-Signature=924b336887ad22ae4c40156843a6850df9658f5c667693ae480c23790c7193b9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UCHQG4BH%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T103121Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD0xTX2KELYpxuxsURWyMT%2FE8dP%2Fh6aGpSxFv25gHHaFgIgXO2JpLNYlurbMSRpvH5JSmHjVaAuShmuDh9G0csSv74q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDG4EMytFU7iaHd5nPircA6jk0OlDSKJ0Rn2rPoypFC%2B6qB0ggzy0ACEVLgMNAraxvy7OQXN6R8ElCyGK1wxOTTy1V7AGEgfqMSwbjHNQPo75y2Lgtt%2FJWbrS3YxYJqWjNxX4qopWSkyoVLBUHJLGgtiZlHUCkaDbN14GdDQpE4rojHWud51Y5iuQSaIHo3h2idXVTArzo6zv779HJRaGrL56cBGPWQ2zdXMAywSFS%2FVgSdBGhRGm7uLiNItpPdS1biSQQKb0bEXOX7e9%2FH9RkJP4OaYNaT2cMOWd%2Bngyiir%2BmmIDdHV1SJ3CFoRxwRSHchTB8BDXr0kUQ8%2B0e51iTWtQTJj8Vs%2BW1EiIV6MNdDaEE17tN0Fg5D%2Banm1eRu4xSQT4uT6rJI2VswT1TKaa9xygEdgHeVI8KUdYu%2BAmA3BVo5noRXlGpQD2wiAMQdZ%2Bkc%2BLZPXmDIGgJpBpnRIM9ZMvEUrHR%2B8QrbYkkxpmjJ2zcTlrAwlwc50dA3%2FfsHMWzUWf9VvJ9YgKsJ3CpxfkyWRrDosr%2FxuT41QD6FpiH%2Bly4HdJVXkjmza5Tg59HNRkz%2Fl0P4gzg4YZmaUbHn8NqdxiHvGBcQ9AFMbziar50cz9OIZRdfFZ0so0TLvIMOo8DjTPva6WCzkbotylMKbOyskGOqUBwv5d75oos6xkHfYIjtTkkwL91puvYShS7WyxaNiP8fZ0Mu9R4DD63tJIdEu%2B%2BHIWFvWTlmLynIDyCke8AKkd6MyMdOBNn8V%2FOWZMJuVb2d0ub6%2FVGwrDqMd1wRJrsSpBYIy8I3irJHe5XZ3qgwzMYn%2FZFzbkg2pR6hXOGQ3sCUHhgtJjFZFaILnbmvH5fZhMoI%2B3Yxe8MyRZSeGDqXrRoWa%2FfMqu&X-Amz-Signature=aee8ef79d00209c0fe38b64554196e39e08d0dd22bd9efbf21ce8ec2a045a61e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
