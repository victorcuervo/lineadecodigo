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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZDN7SNB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmbb9g%2Bm62QkDwx8AMTXwwQl9zUll7gOLNjtfoQB%2BVnAiEAgxAB522THshgWFZGv5oFgS1ktzf3TtaFZ97Be2QPl%2FUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFXBmBoUexyM9Zd5fyrcA%2B%2FmDsKA9A%2BPgiI99Ka2NZ9JHQaZpAh6yiZuNb3q5c%2FQ%2F7z0UoFXMybKhzI5RS6Ih8dmHTgxGRNeUKWbRid3vhNecwAeyH2L4S6Om7mi4XK6Rm%2FrDCmQhwzWztI7XS1JPeOHrSJw8N0chaOukrYOQEn2K9MucsUasgZMn8tsAesXxzWDgGAZY1x9qRhKqz51nY8mSI3FsiN1mxZBawaUGCwWdWoH%2FTbOAxKyrQYnVgnh9G2Pc1RQKuMjulP5%2B%2Bzw1vL8RWn929YMUpG716bVbGKibCer5pKRe%2FxPd3GzUBAbvONZI%2FpFuO0Ko5YZwaFjNYSjY9dxUnjfdtyp72ZyknlmO3stIIJpgcSLEpVVNbZNQOG6hGt%2BQpEj878TyYCEy5Om76BGkYef9RC1txG2%2BgZANDcZT3Ae1TnDCmI8ZR0whan2A3hTj6lRv%2B9N9oI2pdbj8w7wxzZiHArRLKHrCTAUW7O2kVvlS93W96RqzOVBLwTxrnxrzZn7QiZETYK7MFUfIuabV0Y7YtsXX1l3Z19e27Twv7E4KGnTfdohWjFeykC3n5s0M5w6SG7uPJEI%2FcYkR8SawA4vKYcEV7qWRyW%2Bvv3YNeK1kFUEI4kBSO0ejLI6p2kcWAqedL30MMDOyskGOqUBDQXaYl05OEuVGSmXGdvTUc3IhGB4QknCql%2FB1VKJOZhzVBJB%2Biu7tGRzFmagu7Z07MqVb8MsHf5gAfFIF1YeDwpxSpGeHx1P3u11ikZOQdpPMe1AbXEOSLEK%2F7iAzFpi5h8zVqMytlhizKcwDLTDVZeP%2F7YbEBdV6J9XQw1tG568ONcYtuyDDnOgTsH9Xag6S%2FkGXvkCZPQiPBj6CCfU6OiacblB&X-Amz-Signature=bf91f7270e3c6e6dfdeefa66d678c89c00ebc27ae6ff9400f80226c5b136b252&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667ZDN7SNB%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T141924Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHmbb9g%2Bm62QkDwx8AMTXwwQl9zUll7gOLNjtfoQB%2BVnAiEAgxAB522THshgWFZGv5oFgS1ktzf3TtaFZ97Be2QPl%2FUq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDFXBmBoUexyM9Zd5fyrcA%2B%2FmDsKA9A%2BPgiI99Ka2NZ9JHQaZpAh6yiZuNb3q5c%2FQ%2F7z0UoFXMybKhzI5RS6Ih8dmHTgxGRNeUKWbRid3vhNecwAeyH2L4S6Om7mi4XK6Rm%2FrDCmQhwzWztI7XS1JPeOHrSJw8N0chaOukrYOQEn2K9MucsUasgZMn8tsAesXxzWDgGAZY1x9qRhKqz51nY8mSI3FsiN1mxZBawaUGCwWdWoH%2FTbOAxKyrQYnVgnh9G2Pc1RQKuMjulP5%2B%2Bzw1vL8RWn929YMUpG716bVbGKibCer5pKRe%2FxPd3GzUBAbvONZI%2FpFuO0Ko5YZwaFjNYSjY9dxUnjfdtyp72ZyknlmO3stIIJpgcSLEpVVNbZNQOG6hGt%2BQpEj878TyYCEy5Om76BGkYef9RC1txG2%2BgZANDcZT3Ae1TnDCmI8ZR0whan2A3hTj6lRv%2B9N9oI2pdbj8w7wxzZiHArRLKHrCTAUW7O2kVvlS93W96RqzOVBLwTxrnxrzZn7QiZETYK7MFUfIuabV0Y7YtsXX1l3Z19e27Twv7E4KGnTfdohWjFeykC3n5s0M5w6SG7uPJEI%2FcYkR8SawA4vKYcEV7qWRyW%2Bvv3YNeK1kFUEI4kBSO0ejLI6p2kcWAqedL30MMDOyskGOqUBDQXaYl05OEuVGSmXGdvTUc3IhGB4QknCql%2FB1VKJOZhzVBJB%2Biu7tGRzFmagu7Z07MqVb8MsHf5gAfFIF1YeDwpxSpGeHx1P3u11ikZOQdpPMe1AbXEOSLEK%2F7iAzFpi5h8zVqMytlhizKcwDLTDVZeP%2F7YbEBdV6J9XQw1tG568ONcYtuyDDnOgTsH9Xag6S%2FkGXvkCZPQiPBj6CCfU6OiacblB&X-Amz-Signature=ad58eb7383da1a3944081efbef5f6140c26493260627caf1fffb4f8f970dd44e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
