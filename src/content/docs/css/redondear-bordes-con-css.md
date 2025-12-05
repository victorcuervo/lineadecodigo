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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466773IXDXD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJdIRk%2FOAyu%2F13AKDZU7gP64LssPZRwtLhcdH4XPnOMQIgFQG6EpHoO9R%2BxiEyD7puKwee2a3x%2BcMokvFOiJjmok4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOs0JbMhyEQEn8N1LyrcA%2FnZT72fGmL249IhGksK4CqZeda4w9B5KRwy9wZDjZv%2FUBnJFKR5HNckRWvIYOJ5g6Rl8VLSxlxv24GU7PbwoEyXUapi30cjbNF%2FvWNpzpdXaFWXlJ%2F4I51DSYq7F5YAuAzHPf0EXA%2FZ6CgG04RORdDkfr64TTu9jlZQ8zuqpuHhWENExSlO84QWXEoB8bu1TmKHDdlbGrvsBi6f%2B4sKLMWAuBrlWOHLG8h7JtnjoyOlgzhU9nAnmnVWMinmTw5%2BWkT6OmtxpCsQnDbSxkTpYRvn2hUFDYw10BvTS1REEXHSkAkhW7MeK902TEr8%2BOfToDUmKVyfZ7DLNNap7SSqx5WrQe6PE8hWkJULlRu0j7LRd6omt3TS%2BgyWV9gixI0zT7xGaDNyirVfeYcDeXiMmlNhgv7GGrhATnBEsp%2F2Dh56VTi%2FVo1sh5z%2FBIjjlkIP32fzfvVBTjjVCX38saOBKoEQqIG7oQyRQyd0r1XXC%2FcfQd3MnSYhPxIArvjv3X9jQCkOaiZkPrqhmKNYM2Su1udJVkONHeFtHeT07IOd4k4Zow6cASMLFDIcPcEXa82tDYBU43RFpYJfy4N3KVx7yh6T6dMOVH3CQXGlfbGX6oYuxz2t6Q29swaucayOMNSqyckGOqUB9RF3yVtfGhtl4rYRA4IcTEN%2Fp0Ud4CkP3UMU%2Fq1%2B3oRpPsnaEYPu7vuF%2FOqQqGtQtNxNp1sFd7KguG8%2Bs%2FXBB9EreZJz2NdnpK3tj6cqm2KZZ4pydwd9axD35xLq5%2Fp%2B7%2BVPhJFajIMemGkuJ1FqNknPPXpzEYHhDOzWXTBOvxaSy60qAu%2BsH%2BcW5BY8cOKPv704DBBAdFlhqioqGfmWaZlVZkS7&X-Amz-Signature=d6f067eb6d074c3c6d7e330684f73744e595414085c8e0674a0d2da04e35bad8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466773IXDXD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T044604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDJdIRk%2FOAyu%2F13AKDZU7gP64LssPZRwtLhcdH4XPnOMQIgFQG6EpHoO9R%2BxiEyD7puKwee2a3x%2BcMokvFOiJjmok4q%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDOs0JbMhyEQEn8N1LyrcA%2FnZT72fGmL249IhGksK4CqZeda4w9B5KRwy9wZDjZv%2FUBnJFKR5HNckRWvIYOJ5g6Rl8VLSxlxv24GU7PbwoEyXUapi30cjbNF%2FvWNpzpdXaFWXlJ%2F4I51DSYq7F5YAuAzHPf0EXA%2FZ6CgG04RORdDkfr64TTu9jlZQ8zuqpuHhWENExSlO84QWXEoB8bu1TmKHDdlbGrvsBi6f%2B4sKLMWAuBrlWOHLG8h7JtnjoyOlgzhU9nAnmnVWMinmTw5%2BWkT6OmtxpCsQnDbSxkTpYRvn2hUFDYw10BvTS1REEXHSkAkhW7MeK902TEr8%2BOfToDUmKVyfZ7DLNNap7SSqx5WrQe6PE8hWkJULlRu0j7LRd6omt3TS%2BgyWV9gixI0zT7xGaDNyirVfeYcDeXiMmlNhgv7GGrhATnBEsp%2F2Dh56VTi%2FVo1sh5z%2FBIjjlkIP32fzfvVBTjjVCX38saOBKoEQqIG7oQyRQyd0r1XXC%2FcfQd3MnSYhPxIArvjv3X9jQCkOaiZkPrqhmKNYM2Su1udJVkONHeFtHeT07IOd4k4Zow6cASMLFDIcPcEXa82tDYBU43RFpYJfy4N3KVx7yh6T6dMOVH3CQXGlfbGX6oYuxz2t6Q29swaucayOMNSqyckGOqUB9RF3yVtfGhtl4rYRA4IcTEN%2Fp0Ud4CkP3UMU%2Fq1%2B3oRpPsnaEYPu7vuF%2FOqQqGtQtNxNp1sFd7KguG8%2Bs%2FXBB9EreZJz2NdnpK3tj6cqm2KZZ4pydwd9axD35xLq5%2Fp%2B7%2BVPhJFajIMemGkuJ1FqNknPPXpzEYHhDOzWXTBOvxaSy60qAu%2BsH%2BcW5BY8cOKPv704DBBAdFlhqioqGfmWaZlVZkS7&X-Amz-Signature=74adc4f938f34e3be0bc9770a0c86dea48cce0d77ec799782ca2ff28b4668e44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
