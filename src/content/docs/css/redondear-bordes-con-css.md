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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ3BKEBW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID34qkwxO5oLBHsTNGRUTz%2BTsdJaKF0iUyOsc5xPCFzEAiEAnqeq7UGeX0EWD%2Fp7ISMfLFydcIwcJxEgplgT23EV1ekq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDO5Gi0N3FnmrL3oMiSrcA%2BdzEAeWH2taNEA8nY2A1doVP%2FcBzlo7%2Bc2amHYIns8OfHzMUOunUTrkoyy8Z3790Q2SD%2FqBYLd%2BUXmPeYhgxFMnlyOweVfkw3dxHuPjiTOdewHhMV24kRdgz0Po%2F6yvBMUJmxfEPCxFdp3OfIH6%2BVUAAMK9bJ%2BV2RUES9H4JiLOkxlsd5ryMurysbnvcbCpNlZX1jc%2FoNgjtG3vJWnIy%2B3Iv57ciIQ8wz53Gdog2vh9LZeUTBA%2BbHFs0YLizUdhPKd%2BDWb5YZUVx%2BzDHVXR5oa9s4X21BTL%2FXNOOH45QXIgyfHUb6l863HtmeOqH3qRpBniLtxElkdsqtYAjXibfTxHqIPlvouugYpzZIdw9ReU2qkKppLwEtXSGeRwWHUSwA3R9P4wk%2FnHpvzfqZz8Pbm60ki2h4eRcQG2kaura2vosoBktnVL%2B5L0Z9LAPzJNBQi%2BmzyaKm%2FFA12OtWS30Y%2F87HKG%2FDdftWtBkmBY2KXtWzoZe71Gz0THPfYhPvO%2BdnXNYNibBkk1yObySe0oP78f%2FgbcBfrmlPcb%2BzjWGspLhcMTB46GsPOQnU3zru1jqDw4N5f6FjR4S5GqEQUsA07ZEHbekHcrLbSt%2FhE4epUc5S%2FuiLBL%2BX79dUnfMMOMyMkGOqUBAGlV5HNJxYC3R50EhjQEHLlv1N4EAhniDP7oVHfN%2BA4HftGkE5xunqlPBWZEoassv0QWbzzQk6nCsu%2FDbcD628%2BGgOqbeYGtN5xu1kucd4NnLq6bUX0N%2BQfSeZYYdXVJMrAmZ2EGE6o7d%2F8E1mbMsq6OBx7Z%2B2r9nxJ5WV%2FJbrUyjRTF8GRVfvQ3bw%2BpWMwOBjdTZgWzdkAFrtTultDigcLKFfXh&X-Amz-Signature=ca8e8964b641a6c1fcf8043b27a358e2143b55fd6a5aa39f36789c98ee66fd22&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VJ3BKEBW%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014123Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCID34qkwxO5oLBHsTNGRUTz%2BTsdJaKF0iUyOsc5xPCFzEAiEAnqeq7UGeX0EWD%2Fp7ISMfLFydcIwcJxEgplgT23EV1ekq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDO5Gi0N3FnmrL3oMiSrcA%2BdzEAeWH2taNEA8nY2A1doVP%2FcBzlo7%2Bc2amHYIns8OfHzMUOunUTrkoyy8Z3790Q2SD%2FqBYLd%2BUXmPeYhgxFMnlyOweVfkw3dxHuPjiTOdewHhMV24kRdgz0Po%2F6yvBMUJmxfEPCxFdp3OfIH6%2BVUAAMK9bJ%2BV2RUES9H4JiLOkxlsd5ryMurysbnvcbCpNlZX1jc%2FoNgjtG3vJWnIy%2B3Iv57ciIQ8wz53Gdog2vh9LZeUTBA%2BbHFs0YLizUdhPKd%2BDWb5YZUVx%2BzDHVXR5oa9s4X21BTL%2FXNOOH45QXIgyfHUb6l863HtmeOqH3qRpBniLtxElkdsqtYAjXibfTxHqIPlvouugYpzZIdw9ReU2qkKppLwEtXSGeRwWHUSwA3R9P4wk%2FnHpvzfqZz8Pbm60ki2h4eRcQG2kaura2vosoBktnVL%2B5L0Z9LAPzJNBQi%2BmzyaKm%2FFA12OtWS30Y%2F87HKG%2FDdftWtBkmBY2KXtWzoZe71Gz0THPfYhPvO%2BdnXNYNibBkk1yObySe0oP78f%2FgbcBfrmlPcb%2BzjWGspLhcMTB46GsPOQnU3zru1jqDw4N5f6FjR4S5GqEQUsA07ZEHbekHcrLbSt%2FhE4epUc5S%2FuiLBL%2BX79dUnfMMOMyMkGOqUBAGlV5HNJxYC3R50EhjQEHLlv1N4EAhniDP7oVHfN%2BA4HftGkE5xunqlPBWZEoassv0QWbzzQk6nCsu%2FDbcD628%2BGgOqbeYGtN5xu1kucd4NnLq6bUX0N%2BQfSeZYYdXVJMrAmZ2EGE6o7d%2F8E1mbMsq6OBx7Z%2B2r9nxJ5WV%2FJbrUyjRTF8GRVfvQ3bw%2BpWMwOBjdTZgWzdkAFrtTultDigcLKFfXh&X-Amz-Signature=8c5934ab20823ba53cf6c0c1a05f652030af4f77796db59d5ef099c1504e0f51&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
