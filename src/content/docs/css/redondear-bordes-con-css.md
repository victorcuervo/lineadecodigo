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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBKIIJ57%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkAE7Rmdl7bBOc4VuKiDNYkgac1J880BhYp7UeRvMGNAiEAzggG%2FzldUjSrcdcxD5A5WoFfKVwQCBQYncWZ5vGQvDMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWPC7%2BnPrVGZvJ%2FsSrcA%2F9WucLuU2rpaLh8APFD61qKzfVsPrqnptuH1trzB2uPqGFlHACh2JxXI5%2F071PuCIsGX1%2F9QBoHMsUTDJ5JV9n1hdzmRZweFetZC1kQFZVX93hvu09GObJKc80Pps9R4KGGoejtTGnxsNLXYyf1UGGoSkleRrONR3Twkc%2ByZdg%2FUICobCY8zvVum2zYOMCditodq4c5GL71x%2BZHnejydJHWmO7K7PaA3VMmJ80aBCeXHBYHHqQdOtby70brCrhFdsdV%2BXTuLyASFLy94pnKzx598rCGmSoz%2FSV4O846W1%2FrnW%2BMcBZAy26s8V0AKYUgFPGZ19IYMwsV%2BukaCes9oieqiW%2FAAbCbPmKfAE8BKiJgKh%2BWXu6DIrMjDVz83p6TqMYLXHVBI8VQm3zz5gafpX3xwzSrOYLy4Zr2u4glld%2FGoUsC3R%2FNcVSIyCyaz1U2CXoIcfW0s0kkVu5vDXM2ZdX3e%2BCGcz9yIkauKmO73Y3vT5RzzjI1QEeAzaMC1Q37q41Rlgbt3SoDSVY1MV5G8eOd8CHZafzc1A0JhmZ5RjqK40ECn%2FVnAo1Uzbtv7nZ6cjOYP6NVKti37PTarNRfTq0ZkvRjeen%2BRGXHq42VD969TvB%2F0sngIcwSH6%2BpMMiZ1ckGOqUBmFr95im%2FqbFbwSQvATNxDMSDZr540QThp1VpMSJzRSb9J%2FmAn7n8K%2B3ZQMfPdw0OFwEiLIUQH0ZRHgPUCuNo%2BfKr7%2B%2FTzbVWRQzYHS4nHMoUV21I1ZRmYUCs9dVYs%2FkVpzSEqNJs8ayUZz83v4sFSf0Ptt1hcWBHu7XA8mUIU8rlEt17JIaTmGN2HxBk%2BVtwfVD5HFEFyMqizqV2z1r1YXnQ4jrE&X-Amz-Signature=99f6011cbb6f65bf39846c47128fbe6797c78c1902ccb0e0a5ba5447dd8b6b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBKIIJ57%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T152858Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFkAE7Rmdl7bBOc4VuKiDNYkgac1J880BhYp7UeRvMGNAiEAzggG%2FzldUjSrcdcxD5A5WoFfKVwQCBQYncWZ5vGQvDMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBWPC7%2BnPrVGZvJ%2FsSrcA%2F9WucLuU2rpaLh8APFD61qKzfVsPrqnptuH1trzB2uPqGFlHACh2JxXI5%2F071PuCIsGX1%2F9QBoHMsUTDJ5JV9n1hdzmRZweFetZC1kQFZVX93hvu09GObJKc80Pps9R4KGGoejtTGnxsNLXYyf1UGGoSkleRrONR3Twkc%2ByZdg%2FUICobCY8zvVum2zYOMCditodq4c5GL71x%2BZHnejydJHWmO7K7PaA3VMmJ80aBCeXHBYHHqQdOtby70brCrhFdsdV%2BXTuLyASFLy94pnKzx598rCGmSoz%2FSV4O846W1%2FrnW%2BMcBZAy26s8V0AKYUgFPGZ19IYMwsV%2BukaCes9oieqiW%2FAAbCbPmKfAE8BKiJgKh%2BWXu6DIrMjDVz83p6TqMYLXHVBI8VQm3zz5gafpX3xwzSrOYLy4Zr2u4glld%2FGoUsC3R%2FNcVSIyCyaz1U2CXoIcfW0s0kkVu5vDXM2ZdX3e%2BCGcz9yIkauKmO73Y3vT5RzzjI1QEeAzaMC1Q37q41Rlgbt3SoDSVY1MV5G8eOd8CHZafzc1A0JhmZ5RjqK40ECn%2FVnAo1Uzbtv7nZ6cjOYP6NVKti37PTarNRfTq0ZkvRjeen%2BRGXHq42VD969TvB%2F0sngIcwSH6%2BpMMiZ1ckGOqUBmFr95im%2FqbFbwSQvATNxDMSDZr540QThp1VpMSJzRSb9J%2FmAn7n8K%2B3ZQMfPdw0OFwEiLIUQH0ZRHgPUCuNo%2BfKr7%2B%2FTzbVWRQzYHS4nHMoUV21I1ZRmYUCs9dVYs%2FkVpzSEqNJs8ayUZz83v4sFSf0Ptt1hcWBHu7XA8mUIU8rlEt17JIaTmGN2HxBk%2BVtwfVD5HFEFyMqizqV2z1r1YXnQ4jrE&X-Amz-Signature=3119a1e06fb625b4a00d7829b61500fb8807284de4ac03d0c85763626801b624&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
