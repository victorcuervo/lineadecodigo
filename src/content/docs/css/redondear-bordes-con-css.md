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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPMOHARJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5Fqbdmup7SHR7IKHYBCz7NCQ6UC5qO0hvMsVO1%2BEJtAiAfe0G2v9ZdJmDaS9YcUAPqGJCacsnWJh8AspTYkQVltCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBl5re8DP0OXKFsxhKtwDRqQ8D2eD%2BdRlgtlPJwmb1KQvgaGub01wuD%2B8dD02USgnzmEYsZAVik1Y6aqIvkaXArdefersLTP2Z9ciuCHqZ07G25dIf6qjyBAJaoESNSpdWarOIoG3s7O0PXTEnLInzI%2BXNvrtRRZxFUAl77nr8uvgS4W1T8hpHs54jWrsE54zppYhBgBEz0RouJKn8DYNv71sDi1fO8zUWvvZi744goWN1BVP3cdMFAav6Wd0Ofs8J8%2BrhomiJ7QPoRKyV98krIh5l%2FBnAKPaa6MZ2au0%2Frc0Grm3HaLWU98r7%2F7LsQHw9TwiSaaZFS2j3fRPFYXi3uoUTv48QsGiWBnBQ3NSJ%2BiDZwOVcEen89d32Ycp61%2FjmpihOcxBRvOn0Wmw2NyeGBWE%2FEpjdWJA96v61hCjeGiJjwkEQlrJWSjNFSA5D1H9kslfvixYMhoQEKbw3gm1eHZJgmD8A14xsI8FMDMHwVHID8rq6qRILrFT6XQ%2BcW69bK6X8czkvNHFZntGD2ubOUxXNWOdjn%2FV6jqzQDoCv7bSPBhLciIv6Q7EuN%2BNSl3wH0YqdK1jO5FKzMTF932H1Ra9fCD%2FQzhRyC%2FucBoEWTFmGlhohVYpi%2BkyIRBln6tF9UMH26NIegnc1B8ws9HYyQY6pgGKVRLMhvdpVRXP%2BJx%2B8IckO%2FHvok7MTdsaabvDkpIYNu4l9TRDnqLqdR%2BWG%2Bww2chnMe6gwPyfNf5LcoIVjyCHns5THTcEas9gBirrD2JhXkZxvxpXbaiCUXF3FMgDaG98rQxZUvGirwgStsoI7FTtcTsv%2B7EXtajZ1qvuivUqT%2FlxYEvh2rCyxa9jLoXm%2FuHD9bP6UO5TQSZAfScR8w00mpMOPVJt&X-Amz-Signature=c6b54152100e7a5ccc23ab16c16053e6b8e1ee6fd6849d9dda4ca582e6c4c2fd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TPMOHARJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T021813Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH5Fqbdmup7SHR7IKHYBCz7NCQ6UC5qO0hvMsVO1%2BEJtAiAfe0G2v9ZdJmDaS9YcUAPqGJCacsnWJh8AspTYkQVltCqIBAia%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMBl5re8DP0OXKFsxhKtwDRqQ8D2eD%2BdRlgtlPJwmb1KQvgaGub01wuD%2B8dD02USgnzmEYsZAVik1Y6aqIvkaXArdefersLTP2Z9ciuCHqZ07G25dIf6qjyBAJaoESNSpdWarOIoG3s7O0PXTEnLInzI%2BXNvrtRRZxFUAl77nr8uvgS4W1T8hpHs54jWrsE54zppYhBgBEz0RouJKn8DYNv71sDi1fO8zUWvvZi744goWN1BVP3cdMFAav6Wd0Ofs8J8%2BrhomiJ7QPoRKyV98krIh5l%2FBnAKPaa6MZ2au0%2Frc0Grm3HaLWU98r7%2F7LsQHw9TwiSaaZFS2j3fRPFYXi3uoUTv48QsGiWBnBQ3NSJ%2BiDZwOVcEen89d32Ycp61%2FjmpihOcxBRvOn0Wmw2NyeGBWE%2FEpjdWJA96v61hCjeGiJjwkEQlrJWSjNFSA5D1H9kslfvixYMhoQEKbw3gm1eHZJgmD8A14xsI8FMDMHwVHID8rq6qRILrFT6XQ%2BcW69bK6X8czkvNHFZntGD2ubOUxXNWOdjn%2FV6jqzQDoCv7bSPBhLciIv6Q7EuN%2BNSl3wH0YqdK1jO5FKzMTF932H1Ra9fCD%2FQzhRyC%2FucBoEWTFmGlhohVYpi%2BkyIRBln6tF9UMH26NIegnc1B8ws9HYyQY6pgGKVRLMhvdpVRXP%2BJx%2B8IckO%2FHvok7MTdsaabvDkpIYNu4l9TRDnqLqdR%2BWG%2Bww2chnMe6gwPyfNf5LcoIVjyCHns5THTcEas9gBirrD2JhXkZxvxpXbaiCUXF3FMgDaG98rQxZUvGirwgStsoI7FTtcTsv%2B7EXtajZ1qvuivUqT%2FlxYEvh2rCyxa9jLoXm%2FuHD9bP6UO5TQSZAfScR8w00mpMOPVJt&X-Amz-Signature=35c482b7543734dc0ce47a1e89ed9504d5e4bc8fd3ac1a9c2dd96c99faa9091c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
