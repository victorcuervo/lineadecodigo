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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJWXYIG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLaCqIuD5lQewjeHSHmjAt0wZXm%2BbFIo2w%2FVF0HnrltAiABU8J9ZGSQxPhjwEdob2repk%2FzZdDFTsnzbtp%2B2VfNeSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWJaWpg5EoyKy7PndKtwDiYmINtDlcDZvL3O7MypY75%2BFr28Mg%2FPTk2baETMnA3i2zomiHUMH%2BafxDPiaouRVRH%2F8YsDXP6NNkF7u05kgD0bi90627m%2BwV0jPBEqesDtp5dqKoe8rFjZbWURlZWh2Cg369xSl5Q48662RADVUFmWFHY%2BMdw%2BOE9Tp3y87gtup3778zT7dkkGvAA8YtASS7hHWDw0MREUxbqg3a5061L7s84GBrFAZR8Na1xqLF2B5CsWvCCoT53YVRe1jHr60HYduK2dlDJ4VBzsgQOeddCrlTeN1Tsz%2FjAOkq078A%2BZgvWVQXSlQFGiTbjvMMY%2BOifAL14%2BSRr1GsvBKOixj%2B1VOCK2BTs4S4sjsTOpVde%2BCA0rQX7XAGkRBr21LolP52NvybkFMDpGcPAX8SN%2BXdoKRpW4n4JFs5rcNhj%2FPWGuzP8j1hg4N4Ialz4URKUzsR2WZ%2BcJc1Y%2BlWSWbNBhqmY2tqYWdxIco8RQm%2Bpsn8a54TlwD8lwVOpBy6ZLvhR2DIClZN699bZ%2BBwutpIc72aPd69GTNf3plNTpWEBulHWt085XJ0Seviw%2BYc%2BuuMYBDQarKQj%2B%2F0YfkSlTpFIuQOhgbF0W3CaraO245vogRkkYzecwfzH1jSZhwFxEwzrbWyQY6pgFtSrQlgWTz6mHtTPJt0z1VvkQeBXJ8VLJBwfDsKZPJaoZC1i%2BrvYc5pzOdpN9JqV15tgLdalbfVLTJPwOfaNNfDBGJcaV7jIoffgCQLPjo6PRFrjXhCBpf8WaL0fvVBYKtY021Hjfxy0zILKE8QZRzhZ4CphvuKPzOv7N9HUU4h78b9Dc3ESBLkUfNkbiGWgPsSF1YlywAwDSYiVt7q2PY2Q7xDkbr&X-Amz-Signature=1838b12439db17ad2092bd2943364208d52c46f6593722c45a187e06c32135be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XUJWXYIG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T183842Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHLaCqIuD5lQewjeHSHmjAt0wZXm%2BbFIo2w%2FVF0HnrltAiABU8J9ZGSQxPhjwEdob2repk%2FzZdDFTsnzbtp%2B2VfNeSqIBAiQ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMWJaWpg5EoyKy7PndKtwDiYmINtDlcDZvL3O7MypY75%2BFr28Mg%2FPTk2baETMnA3i2zomiHUMH%2BafxDPiaouRVRH%2F8YsDXP6NNkF7u05kgD0bi90627m%2BwV0jPBEqesDtp5dqKoe8rFjZbWURlZWh2Cg369xSl5Q48662RADVUFmWFHY%2BMdw%2BOE9Tp3y87gtup3778zT7dkkGvAA8YtASS7hHWDw0MREUxbqg3a5061L7s84GBrFAZR8Na1xqLF2B5CsWvCCoT53YVRe1jHr60HYduK2dlDJ4VBzsgQOeddCrlTeN1Tsz%2FjAOkq078A%2BZgvWVQXSlQFGiTbjvMMY%2BOifAL14%2BSRr1GsvBKOixj%2B1VOCK2BTs4S4sjsTOpVde%2BCA0rQX7XAGkRBr21LolP52NvybkFMDpGcPAX8SN%2BXdoKRpW4n4JFs5rcNhj%2FPWGuzP8j1hg4N4Ialz4URKUzsR2WZ%2BcJc1Y%2BlWSWbNBhqmY2tqYWdxIco8RQm%2Bpsn8a54TlwD8lwVOpBy6ZLvhR2DIClZN699bZ%2BBwutpIc72aPd69GTNf3plNTpWEBulHWt085XJ0Seviw%2BYc%2BuuMYBDQarKQj%2B%2F0YfkSlTpFIuQOhgbF0W3CaraO245vogRkkYzecwfzH1jSZhwFxEwzrbWyQY6pgFtSrQlgWTz6mHtTPJt0z1VvkQeBXJ8VLJBwfDsKZPJaoZC1i%2BrvYc5pzOdpN9JqV15tgLdalbfVLTJPwOfaNNfDBGJcaV7jIoffgCQLPjo6PRFrjXhCBpf8WaL0fvVBYKtY021Hjfxy0zILKE8QZRzhZ4CphvuKPzOv7N9HUU4h78b9Dc3ESBLkUfNkbiGWgPsSF1YlywAwDSYiVt7q2PY2Q7xDkbr&X-Amz-Signature=b9e66885689d1f05c58f0d5bc45a7c9a75b71b4bae40c104695ae14755ff87f4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
