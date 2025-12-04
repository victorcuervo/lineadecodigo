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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGY74IOX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDo7RLVueQQGTPPaJXpskfPvq3JHP%2F2UgcKvkAoLbwUNgIgPIdbyWKjRHINlFRmfqZdTm8f0pw058%2BTNtErq4xH%2BkEq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDPHk3ai89WhYmdwAyyrcA%2BDZfglTAwLPApInATlmDNH2FIxoBHagaHHvxQQrNHqjf9ZjZoCsNKEQsFV6VNMsbGl7rWoP5d5Iz9zj6x%2F%2FdiD8hIkfcfreNOZ%2FRYeGSn7PJ4L%2FYgGavLYWAo2zpz3qrLgrIp44SJgKdCCZ6abham8DU%2FgqMsdDticYovqPiHQK%2F%2F%2BriZc%2BDi3R4ska6Mt%2B3z2tAqSTMBX4nJ4DBZhTLhKTjXZW53%2F6euX7xAfcYjNZnDm3os%2FwOex5ruYHcfK0z9Rk0RTVe5MdAAXK8hUq8T31TfytQDBDa%2FscFCEvnEKrkDYA7EqqTpvNwgfNEi%2BWLO91gbLfSxPR1oXr3lctlKyaWCiu09fvSEbagPNfZJ0i47k1fOw2eBhtnjC03cbSyeEg%2FjooahzW08ITsFrc%2Btv%2FTKUDYeHYZqTrRQNaCd21CK8b1UYgHgyf9xsgc%2BrdyWWyFJjsx5fQwvtD0igfIbiBy5WDgykLAkn1AOP%2FkBy%2BtXQbf4d6Mv7BNk%2B%2F%2FqgENAssWeXYbdGUX375%2B%2Fct%2Btjc6euZx7CFkvXPIW3Me31TX%2F12RsK26FbVulnhJiK8oDkaMTvKtgYVsZNB5Hw1%2BpPO9vZhOZ8XpHeFnPzyapCGa6cr9W7774CebN5lMKG1w8kGOqUBoS3PbbxWOp69N9%2Fq7dTe1tbTCOGX8LyC564Bq4OT%2BYGQiaKwfbg7y1uWar7nzR2X4F8x0D%2BZLNtoavwG2yd5ABPhz4BUVeysEhHV7VXP%2Bk1qhQOF19juxDedn1wieuR5NWUo2tG0P9QsrsUm04L2La3MOWHitlsIz%2Fax4pKbRM5A4m%2BNJdRWu7VOHh%2FeWUF8IFA0rH0vyV6CGoI9bl8X6O6azrGp&X-Amz-Signature=6818a8fbb37d2213c32651eb5fb517ffc14d1d77c30dd0f4cbbad85571afd562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WGY74IOX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T014129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIQDo7RLVueQQGTPPaJXpskfPvq3JHP%2F2UgcKvkAoLbwUNgIgPIdbyWKjRHINlFRmfqZdTm8f0pw058%2BTNtErq4xH%2BkEq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDPHk3ai89WhYmdwAyyrcA%2BDZfglTAwLPApInATlmDNH2FIxoBHagaHHvxQQrNHqjf9ZjZoCsNKEQsFV6VNMsbGl7rWoP5d5Iz9zj6x%2F%2FdiD8hIkfcfreNOZ%2FRYeGSn7PJ4L%2FYgGavLYWAo2zpz3qrLgrIp44SJgKdCCZ6abham8DU%2FgqMsdDticYovqPiHQK%2F%2F%2BriZc%2BDi3R4ska6Mt%2B3z2tAqSTMBX4nJ4DBZhTLhKTjXZW53%2F6euX7xAfcYjNZnDm3os%2FwOex5ruYHcfK0z9Rk0RTVe5MdAAXK8hUq8T31TfytQDBDa%2FscFCEvnEKrkDYA7EqqTpvNwgfNEi%2BWLO91gbLfSxPR1oXr3lctlKyaWCiu09fvSEbagPNfZJ0i47k1fOw2eBhtnjC03cbSyeEg%2FjooahzW08ITsFrc%2Btv%2FTKUDYeHYZqTrRQNaCd21CK8b1UYgHgyf9xsgc%2BrdyWWyFJjsx5fQwvtD0igfIbiBy5WDgykLAkn1AOP%2FkBy%2BtXQbf4d6Mv7BNk%2B%2F%2FqgENAssWeXYbdGUX375%2B%2Fct%2Btjc6euZx7CFkvXPIW3Me31TX%2F12RsK26FbVulnhJiK8oDkaMTvKtgYVsZNB5Hw1%2BpPO9vZhOZ8XpHeFnPzyapCGa6cr9W7774CebN5lMKG1w8kGOqUBoS3PbbxWOp69N9%2Fq7dTe1tbTCOGX8LyC564Bq4OT%2BYGQiaKwfbg7y1uWar7nzR2X4F8x0D%2BZLNtoavwG2yd5ABPhz4BUVeysEhHV7VXP%2Bk1qhQOF19juxDedn1wieuR5NWUo2tG0P9QsrsUm04L2La3MOWHitlsIz%2Fax4pKbRM5A4m%2BNJdRWu7VOHh%2FeWUF8IFA0rH0vyV6CGoI9bl8X6O6azrGp&X-Amz-Signature=f2bb65062c6dc5dd83e344c3ef6867e2f773e6891d0a4f84480b44cb55fcbb3b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
