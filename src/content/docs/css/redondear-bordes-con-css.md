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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMTV2DYV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoLzz%2Fb4tDt2QjcShSPVT8GDmdL5P6pHmjShfTmH2HMAiEAsmdhYyT0W11Fm%2FL8Bp9S14TBjlm75gT%2BEtsxzi1e2Qgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOrOTtl0wC9IP8l5zSrcA7XbtSgEJNf3prbcE2bXVZMQFS2%2FhVWPhlFr24CAC3T%2Bxj9D92mIadfj5UA%2BkeDcOP5VVpclGQ05YcrXU%2B62Wc7Tmo7MUWajlXe1YmpgxXMLPXNpHbzHPps15nMhlTksudqSCHlgkeGUO24Yu4yaSDjJApOWXYe17pXIWDmt%2BXU5QEgkXuUcNTYybRV%2BDKceIL7Grt7XibacpcdYrDvG4r6SFwFSi3nOFsEBsp4JjRbE%2B6l99OMUK5o%2FhoZPJGjT8FfBt66J0JBHMR9JTgE%2FozVPyqNrB2%2FPq4VK7IqLzC1k2VIaPZPkeH9M9JDdVfffLXryF77OK6fk8RoTHyVu8%2F3a%2FLd2IsCW9gxDA%2Bce7ksDXGCAW85t4r7SdHSEBIhOPuaU%2FQRCaMbUyLKmnsQp92i4nLYQifPL7G%2FqPpis0FEY%2F0W%2BikGVI3TC1HFK2A2a5KltbBrsAMhZ0HWxbp7XSjpvkMPlnNXqPZlgzLZD8dvROdTP23B%2B%2FW1aVjvzp2gCerUOn%2B2sTWvKfCGjOUTK6OZFT8iyV81J8BkpH%2B0JD2G9FmsAoYdQJYyj1DvwY4TkA2S6WTL%2FOJsxjWqlPsBu8tz7H8EZN29XsdDXL5fuWvI5k1pYe%2BYiQZnBcYSvMMjK0ckGOqUBDZbrxkghVqsXbfDdvzsAf%2FZGmMdfVw%2FORVt3PgJ%2FAZ6wKe%2BnnL%2FV4p%2Fl06N6P3aftbQTFyUvSK4JWsrrwGYOLlTh5P7ar8a%2FOtO8EH5KLm4AvVxLD9wdyDqLEHfVjEABVJy7ZuFs787VIQWc%2FKFxaAQ5sGO5bGy5RnrPblSEEgv3P35x2iwy7SLacWKG3cY99mnSCMnXCbxF4CAKzAJgamDA1Wny&X-Amz-Signature=9661a298645e9981ac600b10d92a5e2a489f7fad974b3d6a70b894e9efad7fae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RMTV2DYV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T211035Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHoLzz%2Fb4tDt2QjcShSPVT8GDmdL5P6pHmjShfTmH2HMAiEAsmdhYyT0W11Fm%2FL8Bp9S14TBjlm75gT%2BEtsxzi1e2Qgq%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDOrOTtl0wC9IP8l5zSrcA7XbtSgEJNf3prbcE2bXVZMQFS2%2FhVWPhlFr24CAC3T%2Bxj9D92mIadfj5UA%2BkeDcOP5VVpclGQ05YcrXU%2B62Wc7Tmo7MUWajlXe1YmpgxXMLPXNpHbzHPps15nMhlTksudqSCHlgkeGUO24Yu4yaSDjJApOWXYe17pXIWDmt%2BXU5QEgkXuUcNTYybRV%2BDKceIL7Grt7XibacpcdYrDvG4r6SFwFSi3nOFsEBsp4JjRbE%2B6l99OMUK5o%2FhoZPJGjT8FfBt66J0JBHMR9JTgE%2FozVPyqNrB2%2FPq4VK7IqLzC1k2VIaPZPkeH9M9JDdVfffLXryF77OK6fk8RoTHyVu8%2F3a%2FLd2IsCW9gxDA%2Bce7ksDXGCAW85t4r7SdHSEBIhOPuaU%2FQRCaMbUyLKmnsQp92i4nLYQifPL7G%2FqPpis0FEY%2F0W%2BikGVI3TC1HFK2A2a5KltbBrsAMhZ0HWxbp7XSjpvkMPlnNXqPZlgzLZD8dvROdTP23B%2B%2FW1aVjvzp2gCerUOn%2B2sTWvKfCGjOUTK6OZFT8iyV81J8BkpH%2B0JD2G9FmsAoYdQJYyj1DvwY4TkA2S6WTL%2FOJsxjWqlPsBu8tz7H8EZN29XsdDXL5fuWvI5k1pYe%2BYiQZnBcYSvMMjK0ckGOqUBDZbrxkghVqsXbfDdvzsAf%2FZGmMdfVw%2FORVt3PgJ%2FAZ6wKe%2BnnL%2FV4p%2Fl06N6P3aftbQTFyUvSK4JWsrrwGYOLlTh5P7ar8a%2FOtO8EH5KLm4AvVxLD9wdyDqLEHfVjEABVJy7ZuFs787VIQWc%2FKFxaAQ5sGO5bGy5RnrPblSEEgv3P35x2iwy7SLacWKG3cY99mnSCMnXCbxF4CAKzAJgamDA1Wny&X-Amz-Signature=b26f71ecd079b4f05d715f299d399918e681cc16d20c4feb079c4231153c5ae8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
