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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ZWK6BF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKuZRQ0wflUdsIXL5M%2BQhR%2FvU4zveHq5bprD%2BbHEOo4gIgHaXCNjLf6sZ1stOzkxN5v7mVonhD%2FsCj5lbcH7vvj8oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDIwChGEAmeV3V6Wa7CrcA5cqMexMcbehTFYULvCqc59jJ1K%2Fn1xCNIJrCnXDCSBfaM5CDxRQIl4ZVhcR53%2BUDjbN0%2FsG7A0uTCR%2BEB72WmdA2GyEBAsr8K3qT3HnSnIgUP1iy8OxKZx5dmQ87BuoTJnZNDXiiFRPeuYABig80RlXCyukB5uBcUhdc5yp8BrrTR8wNzAyonq1c9mOFT2fO%2FVdbEDTOYEvCs11tflv9m5sj4H%2Ftmc8oToJOJWY5YGU%2BySFFz7UHKn4wl6VwvXG5pcyCeUyeI7UWecjOVkP%2F0WrOcTl02vyxoTuRRuGLgTuMe2TJIC5yFEsfgcBZkf5LVrW1ZE%2FKuj7mXYG3NmZKvr9ghDY8b0%2FIQ8NDDI2EiKdnnJW3cnjUj8yfzO4N%2FJcMGI6u6shEJj4S8fHjDQnIMGq0nnTH2ryOIVj0PtZu54Y%2BfGKgHIrHRPVbW%2BbOPu1eOCoDlYsba%2FcAUBDJvRrUJH4I9kOdph%2Fwq0PPEtLR7%2B1zan%2B9o0Bpqcv6ZdC6hxeJv0xTo7UGQP9gYolxUtTNEBaKjQRHTblIqBuQBNDa054ROzLx%2F2g3oU7tayL9nTMysNI%2F6Nl8yXwA4%2BPuvmkSG7%2BTnOjSwG2aCRc9LQjekeIDOH%2BBFadOscZ%2BxAhMOyyiMoGOqUB3LWn3fVddkGa%2BAZdIwI%2FH%2BhUgFjB3uVyDw9sCTmPA9d5i8szVnokFcG0BWv3d%2Fa87DnlBUJ1emtyf8ETfIeQQ1Q6UHO3JJPXDk%2FTSEERtDfpme%2FzS7kb2XK4n8lRvr3OzsqS3rJrv3H1sKh%2F8codsOLlmuXXvKvKhDRL03HoSoHwglJy6p5Fg%2BE96Obo5qEGR4yDHLDE2Edqj4bSgKpTImOT82AC&X-Amz-Signature=992a87037af8363229655c34aa8a01dc9d488514e753282c67bf26602fb4fba2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653ZWK6BF%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKuZRQ0wflUdsIXL5M%2BQhR%2FvU4zveHq5bprD%2BbHEOo4gIgHaXCNjLf6sZ1stOzkxN5v7mVonhD%2FsCj5lbcH7vvj8oq%2FwMIdBAAGgw2Mzc0MjMxODM4MDUiDIwChGEAmeV3V6Wa7CrcA5cqMexMcbehTFYULvCqc59jJ1K%2Fn1xCNIJrCnXDCSBfaM5CDxRQIl4ZVhcR53%2BUDjbN0%2FsG7A0uTCR%2BEB72WmdA2GyEBAsr8K3qT3HnSnIgUP1iy8OxKZx5dmQ87BuoTJnZNDXiiFRPeuYABig80RlXCyukB5uBcUhdc5yp8BrrTR8wNzAyonq1c9mOFT2fO%2FVdbEDTOYEvCs11tflv9m5sj4H%2Ftmc8oToJOJWY5YGU%2BySFFz7UHKn4wl6VwvXG5pcyCeUyeI7UWecjOVkP%2F0WrOcTl02vyxoTuRRuGLgTuMe2TJIC5yFEsfgcBZkf5LVrW1ZE%2FKuj7mXYG3NmZKvr9ghDY8b0%2FIQ8NDDI2EiKdnnJW3cnjUj8yfzO4N%2FJcMGI6u6shEJj4S8fHjDQnIMGq0nnTH2ryOIVj0PtZu54Y%2BfGKgHIrHRPVbW%2BbOPu1eOCoDlYsba%2FcAUBDJvRrUJH4I9kOdph%2Fwq0PPEtLR7%2B1zan%2B9o0Bpqcv6ZdC6hxeJv0xTo7UGQP9gYolxUtTNEBaKjQRHTblIqBuQBNDa054ROzLx%2F2g3oU7tayL9nTMysNI%2F6Nl8yXwA4%2BPuvmkSG7%2BTnOjSwG2aCRc9LQjekeIDOH%2BBFadOscZ%2BxAhMOyyiMoGOqUB3LWn3fVddkGa%2BAZdIwI%2FH%2BhUgFjB3uVyDw9sCTmPA9d5i8szVnokFcG0BWv3d%2Fa87DnlBUJ1emtyf8ETfIeQQ1Q6UHO3JJPXDk%2FTSEERtDfpme%2FzS7kb2XK4n8lRvr3OzsqS3rJrv3H1sKh%2F8codsOLlmuXXvKvKhDRL03HoSoHwglJy6p5Fg%2BE96Obo5qEGR4yDHLDE2Edqj4bSgKpTImOT82AC&X-Amz-Signature=87d997d91b585adc0ffad16226da7d48ca08f6a89abc5a8cf8243d877667c117&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
