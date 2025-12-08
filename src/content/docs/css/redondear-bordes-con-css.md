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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQDZOJX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIWlVH68fqA4yxfXyYG4MILcXuFbt3M0dRfNMc5p%2Fq3AiBSEUsVAgFJQ1pAEz1TKFEOyZvZHQszJYeIl5M7frsaxCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGE4zJmssi7ha%2BBJjKtwDhhbs9XjXvAjlk5nufYwpwrUu4YLdHDbBgdMfufyQV4MG1gYCAemU4WkR3RSQR9u4IOIxm32U4krMwtp%2BtJgIZZ5TWHuP4Jd9jnoNK69jgr3AzZ5OCiudd%2BqQlfrfGYOBPCH8LdOPrG0NlAyZ01ywZORSXCTXA4hMRg7PAaswL3KNxfNUiF12jwafqzPi7mhGTGt3HzpQcsCN9Whd5NN8%2Fp7I8k9D880uQqZiL6tThMrsu6p1WpFQ06szgVCsaOaVJkICuGIUHdVuDrU%2F6lsu3NE5lpniZGgzq63i%2BBrEKm%2Fq27Gh8H3AvpHsrhOCmJ3FQfRIMcZJKO%2FvyXm3apEUOyDr0d%2FCqrxEv9y0As4jGH%2Fox%2FK6ZGGHjYWb%2FS6hs0SWEcBYts0TwOhKpKeP7F9PIhA8xjwxhCDPYw2cgdt6vK8OFe7mOCstFU%2B90vioKj%2FBfKzYUQzrZRSY66Hi3hdvvOs4cnwiCFBDTUUSdsFqcGBJhgknADrf3gRfJaf33%2Ff9y3vrbQV3ejpE6t7TAv0DqnTw6owtzf%2BKF1xb5RrC8Roqb6TIJq8xKfyiKZYIUO6C3RJs%2BkWuMQCLysWIJbqKLy3w3If8OagnPo8Tsl2PFchUgZue%2Fj7iPtpC5%2Bow2KHYyQY6pgF%2BjRdIEsWcMksUVTs3bN0xDEzAKZbxE1WgE%2B5tujecaQrv6FeFtdaCDOG6wZBxvVIM2nhLuD6q79CazhwbvL3GHyRkZUoGm6frzRJHEZbxkmHc%2B771Qet4WPlreto7iW44feRZZqTNHVoq%2BSxoQ7JEObE9XhRe3Jz1oKYrrJNgwIR31jBupi8Lgr5dw%2B1W4KA9k86q8BCyotl68vgRPceywkN2yifD&X-Amz-Signature=43bcfbe8b5c89ca10c3fe3cb25a09ba5148d99374b34db9045745991529b9c56&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662TQDZOJX%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T001606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDIWlVH68fqA4yxfXyYG4MILcXuFbt3M0dRfNMc5p%2Fq3AiBSEUsVAgFJQ1pAEz1TKFEOyZvZHQszJYeIl5M7frsaxCqIBAiZ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMGE4zJmssi7ha%2BBJjKtwDhhbs9XjXvAjlk5nufYwpwrUu4YLdHDbBgdMfufyQV4MG1gYCAemU4WkR3RSQR9u4IOIxm32U4krMwtp%2BtJgIZZ5TWHuP4Jd9jnoNK69jgr3AzZ5OCiudd%2BqQlfrfGYOBPCH8LdOPrG0NlAyZ01ywZORSXCTXA4hMRg7PAaswL3KNxfNUiF12jwafqzPi7mhGTGt3HzpQcsCN9Whd5NN8%2Fp7I8k9D880uQqZiL6tThMrsu6p1WpFQ06szgVCsaOaVJkICuGIUHdVuDrU%2F6lsu3NE5lpniZGgzq63i%2BBrEKm%2Fq27Gh8H3AvpHsrhOCmJ3FQfRIMcZJKO%2FvyXm3apEUOyDr0d%2FCqrxEv9y0As4jGH%2Fox%2FK6ZGGHjYWb%2FS6hs0SWEcBYts0TwOhKpKeP7F9PIhA8xjwxhCDPYw2cgdt6vK8OFe7mOCstFU%2B90vioKj%2FBfKzYUQzrZRSY66Hi3hdvvOs4cnwiCFBDTUUSdsFqcGBJhgknADrf3gRfJaf33%2Ff9y3vrbQV3ejpE6t7TAv0DqnTw6owtzf%2BKF1xb5RrC8Roqb6TIJq8xKfyiKZYIUO6C3RJs%2BkWuMQCLysWIJbqKLy3w3If8OagnPo8Tsl2PFchUgZue%2Fj7iPtpC5%2Bow2KHYyQY6pgF%2BjRdIEsWcMksUVTs3bN0xDEzAKZbxE1WgE%2B5tujecaQrv6FeFtdaCDOG6wZBxvVIM2nhLuD6q79CazhwbvL3GHyRkZUoGm6frzRJHEZbxkmHc%2B771Qet4WPlreto7iW44feRZZqTNHVoq%2BSxoQ7JEObE9XhRe3Jz1oKYrrJNgwIR31jBupi8Lgr5dw%2B1W4KA9k86q8BCyotl68vgRPceywkN2yifD&X-Amz-Signature=534a91b6231097939ca4b8533accba57ed2d03b140695ec79bce42bd310109f0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
