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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDN3GWHE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC%2Bd16X%2BLr9i4jQyn%2FiD3e2gCiBvibM9gq9gQ%2FfBK5QIgSvSSbdsdNHFcwu4o9Mrp5JQgFHliFOIckKGVvlAFoKYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQjLVDzsRSNg7kEkyrcA6TsJLlGJ7H67i6y4sdB4gFSwsgEy0DGmYhbb4kZwB%2Fn9LllTXzcAhTjgGfnywcIEQcq9GwVaw%2BwlqZ40DuS2x84bVl5O76JLtaqFhmNcWLN1YFf06VMj0%2BhnsMvvZnHJCP9%2FVpra86LMyvxZ%2BUBPnHYHzMggJi0nWlj3A7G%2Fwqwd5OdAG2xwULWYmnJKrPIV27Fjet%2BuQ7C88WbtUOfqzLbou7KIpN01VIn%2Br6tMFVTeHUqAS0ydv%2FwFcfg6yCesoJqGLYV4RjQUUuU6FuvLPrtl7CSO8CluA3KNz1EeCCXuEKf77vRMkY%2Bud1MhmTtW8aczsBagNLTiUt93EFAAuLUalK88ilDj1mE%2FWUfp2uFXu%2Bvb3o03dxXF%2BMz4XrMWrBP5Un8NLPkT0QfE1c3%2BsOAAPOMMLbmQVPFa7NuppC5vK1J7ZDF8RUkwu4MsBQ%2FacbnWYTr9J9pV8zo0%2BPbuHce6PpfwGjo3XJhp2OuGhsLP0YALPWpr4QNhsbWsDD5mm32ySTfAHZiX%2F2JrFt%2FLxbK6ijWhwqS7duBT%2Bz%2B8fxhMgXkop76pqTfMMjef02BMlfW8D%2B2PRvYjD7IVYQPCi2dlHSEfA8brspT5j0RKL%2FIs%2FbC0885om%2FKafO7MNWA3ckGOqUBKYf6B3miM9%2Basixg%2BF1YrTgWTFDosYKZxApG3ar6XpP%2Bphq08fvxno8U1ppfHt%2FE2l8GOcUynx8mGEKytdge4S7o%2FuQniHFAPu10ucF8neSJoottxHnIFve4jn4uFh%2FUWMpdA5IkeAQ28lOt23CUVSLUjVfoUW6jySUoTQjgpvZwS0jsFRg1i3Y0xDvhyixtfnXrcfMtSkoxVhLngIOhYENFlXzv&X-Amz-Signature=c643d543bbdc41e287dbba76ed40ffdd9422fead32b9b0e378130e1aab33c961&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDN3GWHE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCYC%2Bd16X%2BLr9i4jQyn%2FiD3e2gCiBvibM9gq9gQ%2FfBK5QIgSvSSbdsdNHFcwu4o9Mrp5JQgFHliFOIckKGVvlAFoKYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAQjLVDzsRSNg7kEkyrcA6TsJLlGJ7H67i6y4sdB4gFSwsgEy0DGmYhbb4kZwB%2Fn9LllTXzcAhTjgGfnywcIEQcq9GwVaw%2BwlqZ40DuS2x84bVl5O76JLtaqFhmNcWLN1YFf06VMj0%2BhnsMvvZnHJCP9%2FVpra86LMyvxZ%2BUBPnHYHzMggJi0nWlj3A7G%2Fwqwd5OdAG2xwULWYmnJKrPIV27Fjet%2BuQ7C88WbtUOfqzLbou7KIpN01VIn%2Br6tMFVTeHUqAS0ydv%2FwFcfg6yCesoJqGLYV4RjQUUuU6FuvLPrtl7CSO8CluA3KNz1EeCCXuEKf77vRMkY%2Bud1MhmTtW8aczsBagNLTiUt93EFAAuLUalK88ilDj1mE%2FWUfp2uFXu%2Bvb3o03dxXF%2BMz4XrMWrBP5Un8NLPkT0QfE1c3%2BsOAAPOMMLbmQVPFa7NuppC5vK1J7ZDF8RUkwu4MsBQ%2FacbnWYTr9J9pV8zo0%2BPbuHce6PpfwGjo3XJhp2OuGhsLP0YALPWpr4QNhsbWsDD5mm32ySTfAHZiX%2F2JrFt%2FLxbK6ijWhwqS7duBT%2Bz%2B8fxhMgXkop76pqTfMMjef02BMlfW8D%2B2PRvYjD7IVYQPCi2dlHSEfA8brspT5j0RKL%2FIs%2FbC0885om%2FKafO7MNWA3ckGOqUBKYf6B3miM9%2Basixg%2BF1YrTgWTFDosYKZxApG3ar6XpP%2Bphq08fvxno8U1ppfHt%2FE2l8GOcUynx8mGEKytdge4S7o%2FuQniHFAPu10ucF8neSJoottxHnIFve4jn4uFh%2FUWMpdA5IkeAQ28lOt23CUVSLUjVfoUW6jySUoTQjgpvZwS0jsFRg1i3Y0xDvhyixtfnXrcfMtSkoxVhLngIOhYENFlXzv&X-Amz-Signature=3ea1c24c5adf5264ebacee7a69c88fbb034b0cea87baefa6a6940ab3509451c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
