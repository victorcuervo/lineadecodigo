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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVAKQRT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6CDfcEtVX3EzvaEj5jdE64cpplI8bMCOF7GYHV1lCbwIhAJKnA%2Frhrk%2BDiTCarBhZSzpX4VWG20F4gQ6OVmMJf0ZoKv8DCFoQABoMNjM3NDIzMTgzODA1IgyoHg7nBQzTR3jPcTUq3AORigOWZ67fFw8NmKfErbhY6p%2F3b0vikwiCFmRnAwEPwaIE7CKGqKVvvq0yN27364W9knz1KsaevmYolzYFlPokO2S8A3gCVPjB%2B3vzbkYEOUpW2c%2Frjo2k%2FGeCX6XkFDjkpKoHcSvrMRoj9%2FLxbXjr0SbnJONF1po5dsaQ88tC0GYpujD%2Fy5wdkjE9MsFiZEmsB2ZymLMiNmjdiNiEtSbk59OsmlgSpIB%2BZf2Y%2B4YNcpUtM6IPcyadC%2F4i3DogmAWI11fw97C4Mj9B70YyE9mjBHwHmv1FwB8NDqIbaVAvuLUwN85wHGGYrNaChlDFcbalnQCQHEe3RT4Mc4mcQyLkulJWh7QM8EcZjdcSV9W0XWXJako9RPs8QVu4hQwoRcBSOtjs%2BZT07ZF58UwZrHvIcdSLtM%2FHlrhWRNk9LphRCmsl7ZE3%2BUkG6YEbYaS0D%2BeBUC9dxhHChQb1YWjy3QbgrTCZAKNMaRSI%2BbXyVWx%2FzwFy88urFMXfRczdsUam%2FEGom165Csjo%2FljwcNj42B93C3h9ZGkPOhhwJABvOhmZD4tWwaQZ%2BpWZfq0NzSzRmXT%2Fw0TQZLPBmjrKo%2FAOq8LB6himYZLituRvPLxngJZfm5H12L7ke%2BtEWI9xzTDqxsrJBjqkAVWe%2FhA2aEy6HRhAWhxtw%2FRRqQ4TUa0I0MJU4hQ3DXvI8SwykZXuUvy1xnQ6MPueeo%2B%2FkjTwK6qVOKN3EMg4KappebOsxNSyqUY%2F4SiRJn4oP93qhwTpHo5JgbnpJZYXJVDEeHn%2F7a2kryen4qCdxXf2HlI35UpQkLDv0PHGzTXIWKe9QLcCwlv2TLDoYNZefMSVNhHycDaiiLoqBcC%2FcJy%2FrpRm&X-Amz-Signature=4c24b5a6e96ef59f12520e82a1098914280302c0955dc18b771ca03d9ab50290&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSVAKQRT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T125806Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD6CDfcEtVX3EzvaEj5jdE64cpplI8bMCOF7GYHV1lCbwIhAJKnA%2Frhrk%2BDiTCarBhZSzpX4VWG20F4gQ6OVmMJf0ZoKv8DCFoQABoMNjM3NDIzMTgzODA1IgyoHg7nBQzTR3jPcTUq3AORigOWZ67fFw8NmKfErbhY6p%2F3b0vikwiCFmRnAwEPwaIE7CKGqKVvvq0yN27364W9knz1KsaevmYolzYFlPokO2S8A3gCVPjB%2B3vzbkYEOUpW2c%2Frjo2k%2FGeCX6XkFDjkpKoHcSvrMRoj9%2FLxbXjr0SbnJONF1po5dsaQ88tC0GYpujD%2Fy5wdkjE9MsFiZEmsB2ZymLMiNmjdiNiEtSbk59OsmlgSpIB%2BZf2Y%2B4YNcpUtM6IPcyadC%2F4i3DogmAWI11fw97C4Mj9B70YyE9mjBHwHmv1FwB8NDqIbaVAvuLUwN85wHGGYrNaChlDFcbalnQCQHEe3RT4Mc4mcQyLkulJWh7QM8EcZjdcSV9W0XWXJako9RPs8QVu4hQwoRcBSOtjs%2BZT07ZF58UwZrHvIcdSLtM%2FHlrhWRNk9LphRCmsl7ZE3%2BUkG6YEbYaS0D%2BeBUC9dxhHChQb1YWjy3QbgrTCZAKNMaRSI%2BbXyVWx%2FzwFy88urFMXfRczdsUam%2FEGom165Csjo%2FljwcNj42B93C3h9ZGkPOhhwJABvOhmZD4tWwaQZ%2BpWZfq0NzSzRmXT%2Fw0TQZLPBmjrKo%2FAOq8LB6himYZLituRvPLxngJZfm5H12L7ke%2BtEWI9xzTDqxsrJBjqkAVWe%2FhA2aEy6HRhAWhxtw%2FRRqQ4TUa0I0MJU4hQ3DXvI8SwykZXuUvy1xnQ6MPueeo%2B%2FkjTwK6qVOKN3EMg4KappebOsxNSyqUY%2F4SiRJn4oP93qhwTpHo5JgbnpJZYXJVDEeHn%2F7a2kryen4qCdxXf2HlI35UpQkLDv0PHGzTXIWKe9QLcCwlv2TLDoYNZefMSVNhHycDaiiLoqBcC%2FcJy%2FrpRm&X-Amz-Signature=019451ef26d64b5e141f256843a76596caf5d833c06e1a3d6c15235fa95cbf6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
