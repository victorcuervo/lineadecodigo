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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZOOC43%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBj%2BSC1abSAW%2B0D5k0Y3JvKJYwzRGk95FzC9PKFUt3sIAiBkmALl6oJReRBJ508DSwbJfYnlFGckes1EmF6iJ7WmXSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM4phCtC6YNiWsV8rsKtwDE%2FNgaFxUYGioPR2c1hKrkr%2BWdWW%2FFU5MfAA9YnvNxQ6tj3rRWTF7VZaWyzMDjuxodCPlpKn5g3IR7l0lKkQwYRR09iD9vxSjhQIooDnqLtWBcmwGYvrur8Ut81KXw%2B6bOerMqioRBI7Eo%2FK3YobrN5ntOTU%2FvAnc5sdClWav7pl1VdPR5inB3M8Zq93ktaFfy6kXRAjTYv66F%2Fx8hFrDc943i70LNOvR9824MKkPc6fCuxD7yMjoLOQGSWB%2Fu56ivU2RcNoMyLxQFEd1uHWqYN3afJkrlrooIz8fnCqgJtF6MeVTJVoDKLxlSvxe22ATAR3e3ysrjSipy0oWmrdxUjxEMGOzcLdiO4mRDS21w9ttgK70s0ZOmKzdkSrvPnBJneRJBxpdze89e6BPKCCjRVTuK%2FzaKuLOpPVRmayQ8MMe0wcxEF0vPSBDyjajTudgibpjPRcXr8mf%2FdmED3Skf3Ka3pqMAntJAAJFVVsXKEr0InWunWfvLSgEzR55sCtXy6wsLUH0Yxg4NhzqNHCywKLa41fDDtpIFKpGK8JhEDA2qwE9y10SNiVtJF6qt0meuMtzqwV3cy4Tq3IrqWyBvJj6Hco9faBdXYMABvYkuSPEuK0HkKUMMlZo9bow7u%2BJygY6pgEd1uXbQ%2BISUsyW0e8H454miqjzRDg3CFTc4A%2BUpq7%2Bd0FTItZCSCviUBuE5rEhftxXaam9jmMzLjq%2Ft6wslEvG3NTnyCfyuirXLbX5PTfJ40rEv%2Fln4%2BmdA4nSVCSkmZmGXijRcKxJodV6bSp%2BAVGsnukENCWvqHTXcjBwYm5%2F9sxWB2dVb44nE5WQTnbr%2B1TEyAxzqOIOQUfZcL27EXZ4Ehk2m4Yg&X-Amz-Signature=ea7d308b21ab1fdbb866a35c63bb071f9f63765c101222226534fd74d98b4050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UKZOOC43%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T094811Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBj%2BSC1abSAW%2B0D5k0Y3JvKJYwzRGk95FzC9PKFUt3sIAiBkmALl6oJReRBJ508DSwbJfYnlFGckes1EmF6iJ7WmXSr%2FAwh6EAAaDDYzNzQyMzE4MzgwNSIM4phCtC6YNiWsV8rsKtwDE%2FNgaFxUYGioPR2c1hKrkr%2BWdWW%2FFU5MfAA9YnvNxQ6tj3rRWTF7VZaWyzMDjuxodCPlpKn5g3IR7l0lKkQwYRR09iD9vxSjhQIooDnqLtWBcmwGYvrur8Ut81KXw%2B6bOerMqioRBI7Eo%2FK3YobrN5ntOTU%2FvAnc5sdClWav7pl1VdPR5inB3M8Zq93ktaFfy6kXRAjTYv66F%2Fx8hFrDc943i70LNOvR9824MKkPc6fCuxD7yMjoLOQGSWB%2Fu56ivU2RcNoMyLxQFEd1uHWqYN3afJkrlrooIz8fnCqgJtF6MeVTJVoDKLxlSvxe22ATAR3e3ysrjSipy0oWmrdxUjxEMGOzcLdiO4mRDS21w9ttgK70s0ZOmKzdkSrvPnBJneRJBxpdze89e6BPKCCjRVTuK%2FzaKuLOpPVRmayQ8MMe0wcxEF0vPSBDyjajTudgibpjPRcXr8mf%2FdmED3Skf3Ka3pqMAntJAAJFVVsXKEr0InWunWfvLSgEzR55sCtXy6wsLUH0Yxg4NhzqNHCywKLa41fDDtpIFKpGK8JhEDA2qwE9y10SNiVtJF6qt0meuMtzqwV3cy4Tq3IrqWyBvJj6Hco9faBdXYMABvYkuSPEuK0HkKUMMlZo9bow7u%2BJygY6pgEd1uXbQ%2BISUsyW0e8H454miqjzRDg3CFTc4A%2BUpq7%2Bd0FTItZCSCviUBuE5rEhftxXaam9jmMzLjq%2Ft6wslEvG3NTnyCfyuirXLbX5PTfJ40rEv%2Fln4%2BmdA4nSVCSkmZmGXijRcKxJodV6bSp%2BAVGsnukENCWvqHTXcjBwYm5%2F9sxWB2dVb44nE5WQTnbr%2B1TEyAxzqOIOQUfZcL27EXZ4Ehk2m4Yg&X-Amz-Signature=5d9ace593de73db21c9f63998cd89dafdfe2ded603920ba2e50b01b704488aaa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
