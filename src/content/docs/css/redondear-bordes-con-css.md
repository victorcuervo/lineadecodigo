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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZESUBKY7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuhMp8WtjQPbrN8LpkqA7n%2FuRSMxtfLD769OArfDyK1gIhAMOh8Zuf%2FP8Kueo2sRNhcLO45H7lNFyKaR1yCaydQwfPKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHzVpMsfYp919m%2BKYq3AMrkcLOfyZy6u2mgoDWXUiGv%2BZXwP2FeP742ZfAPG9sjIolBWee1gsI8eh95QjwNNYt6JQqBwrivrOCb6jKFO9tQzJNeCK%2BhD2c39HXSENRTkAW3aaQKffguUOLVdu1Pd4gtPdvjgWhNXCcyeXY2BeeOaYC1S9dqQq2mBw%2BxTwTaMzK4UK4pCgxcl8hGsuZal851he0aSviXj5yPGK9al4EYdDOWlgM69a%2FwK5pyj2xe3ZNieo2ZeUCq9w1LcaqgI2lMsdazs%2BnJ896DdCiDoOG5w7sp6q7a5L887UjOG55fVzdqbUcrLas1ERwG0IrUfcFPK4jWNBk5mx2O5QkKa7vZ0rlGHEt%2FJEIKcLYjRC3UV3s8qs%2FSJCxzKH9FEi5bYzdz2011omrjuArkF1u2k8BiJKCzxgiDRQ7bkzn2U9VZH0%2FPB0xCBloEq7zhzSznefJzj2S604AG%2BlJNM5HUVyvbZzyeuG0421nMdjczkpmjxyLxj1O55g%2BKBnhVIjc7rskrYlzwPRk0%2BtwbcM8egnmsLgRE7yUbkuIeP1CUKupAHaMo7hYH8SMX5gyHZheUnz3LiBxDBvS8cNm9jKLM5yoRiVqJUWfh1mOk6DFc4Lcde%2F1kVhLk1PrWlFdkzCokNvJBjqkAfecVQEYEaPV5Ju1i2twtpNnXGxmIBBwdFrfT9rdsQbiNZUilsvXM9HVtSWbei9%2BR1aG4RLTSqigrZw%2FMS2%2B18BSedqxOr5KaD81W5C4STxmfwZKzDlHFFUsHs%2Fvpn7kkgAfEHGUlbdsalfdgz7uM9%2FFEkk%2FPf741SKybx8KHjfnX4KI4ckwbHgW%2B5kJEm8hoyttCg%2FYgEt3%2BQ3MJSfmhAarBdjg&X-Amz-Signature=d6315a94ec9f911746bb0ed1c021993a3cba2f27607106178265f82644619fe6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZESUBKY7%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T130508Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuhMp8WtjQPbrN8LpkqA7n%2FuRSMxtfLD769OArfDyK1gIhAMOh8Zuf%2FP8Kueo2sRNhcLO45H7lNFyKaR1yCaydQwfPKogECKb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwHzVpMsfYp919m%2BKYq3AMrkcLOfyZy6u2mgoDWXUiGv%2BZXwP2FeP742ZfAPG9sjIolBWee1gsI8eh95QjwNNYt6JQqBwrivrOCb6jKFO9tQzJNeCK%2BhD2c39HXSENRTkAW3aaQKffguUOLVdu1Pd4gtPdvjgWhNXCcyeXY2BeeOaYC1S9dqQq2mBw%2BxTwTaMzK4UK4pCgxcl8hGsuZal851he0aSviXj5yPGK9al4EYdDOWlgM69a%2FwK5pyj2xe3ZNieo2ZeUCq9w1LcaqgI2lMsdazs%2BnJ896DdCiDoOG5w7sp6q7a5L887UjOG55fVzdqbUcrLas1ERwG0IrUfcFPK4jWNBk5mx2O5QkKa7vZ0rlGHEt%2FJEIKcLYjRC3UV3s8qs%2FSJCxzKH9FEi5bYzdz2011omrjuArkF1u2k8BiJKCzxgiDRQ7bkzn2U9VZH0%2FPB0xCBloEq7zhzSznefJzj2S604AG%2BlJNM5HUVyvbZzyeuG0421nMdjczkpmjxyLxj1O55g%2BKBnhVIjc7rskrYlzwPRk0%2BtwbcM8egnmsLgRE7yUbkuIeP1CUKupAHaMo7hYH8SMX5gyHZheUnz3LiBxDBvS8cNm9jKLM5yoRiVqJUWfh1mOk6DFc4Lcde%2F1kVhLk1PrWlFdkzCokNvJBjqkAfecVQEYEaPV5Ju1i2twtpNnXGxmIBBwdFrfT9rdsQbiNZUilsvXM9HVtSWbei9%2BR1aG4RLTSqigrZw%2FMS2%2B18BSedqxOr5KaD81W5C4STxmfwZKzDlHFFUsHs%2Fvpn7kkgAfEHGUlbdsalfdgz7uM9%2FFEkk%2FPf741SKybx8KHjfnX4KI4ckwbHgW%2B5kJEm8hoyttCg%2FYgEt3%2BQ3MJSfmhAarBdjg&X-Amz-Signature=af4b14d1b9e46556658dab896b84aa4aef77b9b53ce57ab413bc62db30303384&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
