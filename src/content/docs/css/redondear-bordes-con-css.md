---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOXJUN2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIF0XOIYJdo76YdlWjWlnPcldkX6o4ZSl1MhlgBLD%2ByAYAiBfJK%2Bj5P5%2BtAKLJpd9PNIe3LpSRFp46CwL6v4KSr2tuir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM4SZ5hO6Z%2Fdkifhx9KtwD1klnVaDisBoiRmHk3gKGhzOAzz5imL84Uuu4F0axZWCwn70cbNnTukeIFQQ4K6Nk%2BeexdOfyIzic3rETaLnoW0hoPKNgx9Kvrwjnu23kSuOcJ3RCmAJ5ZOasCMWYqLevQvtVxCRurB2CkBwKR%2BeVqG19KY7DXmcTPyk8pioRC0k9roSda8%2FnQTZroyVyL30eE4obyPPnaOHDr3Ym6Mb8ivvCFYDTUGmmUIcqVh8NXwP%2BCVlwK%2Fhg5t%2BYa%2FCVTDVdPUKPnrg3Mee2aqtEAVnDopMmjYhoodrgJS2v9uhb1Evb45L%2BCD2hFzhXWaFerFPpVBAmAnHKik%2F18AcepMtx4NGW54Q2Qz8HIXAIN3mqkmx%2BR2q0d8c8MwED5JHeDlARr5peyL%2BX7knWnD6%2BD3ioBhZYM39qBAr9YyXyWKR8IGpnKxbWZA8QohU%2FHdGttEGbQ%2FQ4jurAno4QO8cEK%2BQew21ShUnnjbWdmSZvYZr6XKqYkciAe2Tg%2BMvgokwwN1QJ4Euaea29zWO0lRw9eIFBighxjK4pWMhPVm3pR3kpCVbBxhLUIZQrzoESa8v%2BmfctUzC%2FpI649rPbzEFb2mYvtcZ3UyXw5PKYpXAHO1OL7wnKS8KqSuA6797Uk4Ew2oTGyQY6pgFSZ7573DWzfd36Yq92MdV3yh4satpTGIQKSJ0S4aJCg83xJ7f38sG77aGqkGpxYY2Hmb3hdG7ok4YLi%2BklN3gJWB2JxyzwmQwHlti3BkU%2Fco7cwuArP9L1n0gUmFoA5JkDUNN4%2B%2BitSzU%2BEcblGMQjKhzBMAIN3A6tpcARqTupUY3ed6J2sb5qQlBIDumzdwPPgycQUYV8Snw7%2FyXvourXx%2Fsrd4e7&X-Amz-Signature=2d2dd00002794968696697a770a2383f764db2e4bbbfc0b4e573e10ca47aa9df&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZAOXJUN2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T132343Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH0aCXVzLXdlc3QtMiJGMEQCIF0XOIYJdo76YdlWjWlnPcldkX6o4ZSl1MhlgBLD%2ByAYAiBfJK%2Bj5P5%2BtAKLJpd9PNIe3LpSRFp46CwL6v4KSr2tuir%2FAwhGEAAaDDYzNzQyMzE4MzgwNSIM4SZ5hO6Z%2Fdkifhx9KtwD1klnVaDisBoiRmHk3gKGhzOAzz5imL84Uuu4F0axZWCwn70cbNnTukeIFQQ4K6Nk%2BeexdOfyIzic3rETaLnoW0hoPKNgx9Kvrwjnu23kSuOcJ3RCmAJ5ZOasCMWYqLevQvtVxCRurB2CkBwKR%2BeVqG19KY7DXmcTPyk8pioRC0k9roSda8%2FnQTZroyVyL30eE4obyPPnaOHDr3Ym6Mb8ivvCFYDTUGmmUIcqVh8NXwP%2BCVlwK%2Fhg5t%2BYa%2FCVTDVdPUKPnrg3Mee2aqtEAVnDopMmjYhoodrgJS2v9uhb1Evb45L%2BCD2hFzhXWaFerFPpVBAmAnHKik%2F18AcepMtx4NGW54Q2Qz8HIXAIN3mqkmx%2BR2q0d8c8MwED5JHeDlARr5peyL%2BX7knWnD6%2BD3ioBhZYM39qBAr9YyXyWKR8IGpnKxbWZA8QohU%2FHdGttEGbQ%2FQ4jurAno4QO8cEK%2BQew21ShUnnjbWdmSZvYZr6XKqYkciAe2Tg%2BMvgokwwN1QJ4Euaea29zWO0lRw9eIFBighxjK4pWMhPVm3pR3kpCVbBxhLUIZQrzoESa8v%2BmfctUzC%2FpI649rPbzEFb2mYvtcZ3UyXw5PKYpXAHO1OL7wnKS8KqSuA6797Uk4Ew2oTGyQY6pgFSZ7573DWzfd36Yq92MdV3yh4satpTGIQKSJ0S4aJCg83xJ7f38sG77aGqkGpxYY2Hmb3hdG7ok4YLi%2BklN3gJWB2JxyzwmQwHlti3BkU%2Fco7cwuArP9L1n0gUmFoA5JkDUNN4%2B%2BitSzU%2BEcblGMQjKhzBMAIN3A6tpcARqTupUY3ed6J2sb5qQlBIDumzdwPPgycQUYV8Snw7%2FyXvourXx%2Fsrd4e7&X-Amz-Signature=077f200f94f72fbac6e1e8a6dc4e5acc3066a703d77a01f000585f204a24f5dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
