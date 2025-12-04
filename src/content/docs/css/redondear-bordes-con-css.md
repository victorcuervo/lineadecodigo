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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLOYI4Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFkppVyeowccgBS%2F64LWkakRzFpUTLGknBxrNEIYOlA8AiEA57YYneruLUjap6JsD%2BsUPV9CeupjzpEK4Sw6B2XWdz0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMSqJZmRr%2Bv8GiR0rSrcA%2FH%2FVeiXSpvtVKAELwUoNC3%2Fpg7U5e9GnqOpoTuhBibRePb0lipiIw4OYopsKwniPSueJdh6gjPhgDJaD4Ytjz7xAYH7t%2Fy1RI0TO%2BKpA1IB9IEW20H9%2FRwapkBBt2wdbdWmWedhaR%2Fyo%2Bsxdn1c6ClKTyN25SNlp4vWACN9BaTE8WUbR8%2FYhZ1LZYswSG6i%2BjMEZ7nLWgEKQa7OJ8K5S4X4HBKE6OQHqNdXmL9Nff53sECAl1FWumUQy3ZFstMQp1IP0TPOke%2FyljwK3KtZjjICxQPvRVFyzvArxd3YLORMPiuEo6SuIqd5DxGye23PBD7Qrz27FM3r2RRlQELijRRHdAnUv8wzG1SYlo%2FQuqdHQIOYTeO9WVecYAAbP%2BlPBHHSWEzxsKoTZRwrarF8FuarR5G%2BlZL6LHP9Mf8uVDmKh6JDxfkGRdiN26z2fn9Hm%2FF%2FwkmcNUe%2BXxYNSAA9SuZKRMQn4%2B923tSA2cMSp5rCLDneS2RcmC5XWETdlK1W4iPDiEkvOAMPczQHdjN3qJaWO3niOu1iTyWntWuh8oRMJfbqmdwbr1ZAiEo7QDagVCMQF3Mo8xE48PHHsljRbpa7Mgs8X9GvEwGrCCNFXqQAiHTbvv0TMbBSwaUvMOiExckGOqUB0EqRB%2BNPCzm2u6ffAf81zytENdUxACxzxq34gXXBwg20YLZq98af%2FzJt%2BchtXRC7getI4Qa1FtODC8a5mUvp8RV8m6ji2aqdqXwKLyA2h%2BmI4mn1fQKYeI058QlmrYhmxA6EjFXXXiOFdbxvB52b6lw7hdmTtcdsBKNru2NbKStAwQYaBGsi5vQ7BmuQGK6wXgKKux%2BsWFzidPMg%2BZ%2FGw%2BblT%2FFm&X-Amz-Signature=da46c96a5eb86c4c0bb3be57a96a34a206dc97f30cb9e96dfc1acf0218d40e6d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VSLOYI4Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T091304Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHgaCXVzLXdlc3QtMiJHMEUCIFkppVyeowccgBS%2F64LWkakRzFpUTLGknBxrNEIYOlA8AiEA57YYneruLUjap6JsD%2BsUPV9CeupjzpEK4Sw6B2XWdz0q%2FwMIQRAAGgw2Mzc0MjMxODM4MDUiDMSqJZmRr%2Bv8GiR0rSrcA%2FH%2FVeiXSpvtVKAELwUoNC3%2Fpg7U5e9GnqOpoTuhBibRePb0lipiIw4OYopsKwniPSueJdh6gjPhgDJaD4Ytjz7xAYH7t%2Fy1RI0TO%2BKpA1IB9IEW20H9%2FRwapkBBt2wdbdWmWedhaR%2Fyo%2Bsxdn1c6ClKTyN25SNlp4vWACN9BaTE8WUbR8%2FYhZ1LZYswSG6i%2BjMEZ7nLWgEKQa7OJ8K5S4X4HBKE6OQHqNdXmL9Nff53sECAl1FWumUQy3ZFstMQp1IP0TPOke%2FyljwK3KtZjjICxQPvRVFyzvArxd3YLORMPiuEo6SuIqd5DxGye23PBD7Qrz27FM3r2RRlQELijRRHdAnUv8wzG1SYlo%2FQuqdHQIOYTeO9WVecYAAbP%2BlPBHHSWEzxsKoTZRwrarF8FuarR5G%2BlZL6LHP9Mf8uVDmKh6JDxfkGRdiN26z2fn9Hm%2FF%2FwkmcNUe%2BXxYNSAA9SuZKRMQn4%2B923tSA2cMSp5rCLDneS2RcmC5XWETdlK1W4iPDiEkvOAMPczQHdjN3qJaWO3niOu1iTyWntWuh8oRMJfbqmdwbr1ZAiEo7QDagVCMQF3Mo8xE48PHHsljRbpa7Mgs8X9GvEwGrCCNFXqQAiHTbvv0TMbBSwaUvMOiExckGOqUB0EqRB%2BNPCzm2u6ffAf81zytENdUxACxzxq34gXXBwg20YLZq98af%2FzJt%2BchtXRC7getI4Qa1FtODC8a5mUvp8RV8m6ji2aqdqXwKLyA2h%2BmI4mn1fQKYeI058QlmrYhmxA6EjFXXXiOFdbxvB52b6lw7hdmTtcdsBKNru2NbKStAwQYaBGsi5vQ7BmuQGK6wXgKKux%2BsWFzidPMg%2BZ%2FGw%2BblT%2FFm&X-Amz-Signature=27d9e45bb529031156494a32bef18b6fc8972167c3b2f2e6d90a32eafe01b92c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
