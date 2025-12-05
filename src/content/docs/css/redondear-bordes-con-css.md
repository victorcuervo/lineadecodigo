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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYYIFR7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDBtRjd7bri%2BXvcztHZeSrauN%2FRwakZKhKwFQ3E7MHvAiAUWmCtbZAgN8l9b2LOAUO2nw2uZ6%2FlkVPSeLRvRzTgPCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMNAJhLVh6fREW78N7KtwDlZRn2MLizBAnJEj5Fc4aTC2x5eHQMSS1i4v6g3a88i1tzATvnTinaC8XIGYyEKW7Sqy4635B0e0Ub8UCk49MvqokHl9Qb2ANwen%2FV8DXgDN7LaXwfl6N3ZC2ArYqKlozPEnzwyiStKaC2Y6e1m2aK4tjVWZ2AzcQu4bpOSU5dcuWc6gLIsglKoumXsK%2FXDo3MFfiDTx%2BFUGxZEw0EZc%2F0HCh2ekNrv1qAux1f6Tsnb7y%2BT3hgGHAxptNbr9OccW72HyXl1%2BJzFFxoI1T77QjKDFy2%2F%2BRAVjjnlm7lJr4gHUsDehpEyN3lSDau7k0CWzDwv%2FKVKNzlxaXZI1jC4mK%2FXlRC4xJnTXqkwSRvDHtcmiDy1go2rIPqX9KxntvH2Mlb8g4ojkM44SLM2DtombQynUKOp3w%2BaPanLrLYF3%2Ffj45uHpegS3PPSlTS0T1kWPA4vnzEaPmRawHTq7wiMB8VuYfymQ6xvxY3gwDyHoFAMZzbSKGHzHJP3Ql6LDqkqyNEJrXvXXvnnpuUWb5P8DNb1JUCQ6WV%2F16RwlgpRAua8BeddD77Bud1tcWl7byG%2BizIDyujcVn3uSsG%2FfmRXAuriwncji6knzxdOwRBGdGIJZ%2FrL3BIAS18jWyOP4wuavJyQY6pgFX9c1%2F2cyg3KVbQQMMKxMjWtW6tiHix3G1JihP49wtrjAN3atzEKboQmaqPbFX9k6oDnMncOOrXdJwdMk7kuq0cFdOaz%2Fro9bynTZhsM2t633bjodZhDOGFZmQnU22qHRCDwZGgEwr6ehVRQum%2BzRy6ZZctH3juI3NWJuYRVINLK9hoxlr80ev%2BEGTz4nV69P4%2B4DVxUwy9S9Tx5iavVSHxG83oGIO&X-Amz-Signature=1fcec11f8c46e95ec0f6f6d5c08b585b4d2bf96b0c51af46ae6d70c11ba4a4b2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SKYYIFR7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T063332Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFDBtRjd7bri%2BXvcztHZeSrauN%2FRwakZKhKwFQ3E7MHvAiAUWmCtbZAgN8l9b2LOAUO2nw2uZ6%2FlkVPSeLRvRzTgPCr%2FAwhVEAAaDDYzNzQyMzE4MzgwNSIMNAJhLVh6fREW78N7KtwDlZRn2MLizBAnJEj5Fc4aTC2x5eHQMSS1i4v6g3a88i1tzATvnTinaC8XIGYyEKW7Sqy4635B0e0Ub8UCk49MvqokHl9Qb2ANwen%2FV8DXgDN7LaXwfl6N3ZC2ArYqKlozPEnzwyiStKaC2Y6e1m2aK4tjVWZ2AzcQu4bpOSU5dcuWc6gLIsglKoumXsK%2FXDo3MFfiDTx%2BFUGxZEw0EZc%2F0HCh2ekNrv1qAux1f6Tsnb7y%2BT3hgGHAxptNbr9OccW72HyXl1%2BJzFFxoI1T77QjKDFy2%2F%2BRAVjjnlm7lJr4gHUsDehpEyN3lSDau7k0CWzDwv%2FKVKNzlxaXZI1jC4mK%2FXlRC4xJnTXqkwSRvDHtcmiDy1go2rIPqX9KxntvH2Mlb8g4ojkM44SLM2DtombQynUKOp3w%2BaPanLrLYF3%2Ffj45uHpegS3PPSlTS0T1kWPA4vnzEaPmRawHTq7wiMB8VuYfymQ6xvxY3gwDyHoFAMZzbSKGHzHJP3Ql6LDqkqyNEJrXvXXvnnpuUWb5P8DNb1JUCQ6WV%2F16RwlgpRAua8BeddD77Bud1tcWl7byG%2BizIDyujcVn3uSsG%2FfmRXAuriwncji6knzxdOwRBGdGIJZ%2FrL3BIAS18jWyOP4wuavJyQY6pgFX9c1%2F2cyg3KVbQQMMKxMjWtW6tiHix3G1JihP49wtrjAN3atzEKboQmaqPbFX9k6oDnMncOOrXdJwdMk7kuq0cFdOaz%2Fro9bynTZhsM2t633bjodZhDOGFZmQnU22qHRCDwZGgEwr6ehVRQum%2BzRy6ZZctH3juI3NWJuYRVINLK9hoxlr80ev%2BEGTz4nV69P4%2B4DVxUwy9S9Tx5iavVSHxG83oGIO&X-Amz-Signature=2e21f4580253f57362171bd986ce8920432f2d6452d57b7d16a33e456c39f24c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
