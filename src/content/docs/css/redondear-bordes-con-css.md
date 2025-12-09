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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLDVXPY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfHN1CvBwzHm%2FDuUbW1HhZgKHmD0V14X46aptqTAjoOAiEAytPboSl29wpwRp75HgOJjlofJ%2FBP1Z8rIG8IW5n%2FFaEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzHO45zGYWbPdfulyrcA7xZFE1Ht8cYCbtzP9%2BNNEraz2DHiuX5onT85tK3dr0D2O5jXwe%2FkV%2BdsLhbyB0HWNM5Ia7vmJYzLfz%2FE813zpKkye%2B6HTiBRomjXWhzEOeKrweAvLqGQN4GpnMRHhq6LAesfUH63Ow5mK3h3Ssrmfe1Q86sCph0fgtjf4IfeSBx5vooPACqjNLb1kP%2B3K79weyB8q79DLXQR5TGEUE5oYJUzIaObf4YwqWoiRzTnlZwpKJ0G5xh2Lig8hBksPrXe9rqNgdatZXUvC9Sc88W2Rqq9eHYdlqxhefjW%2FBt102KaalVA%2BNQ8pd83oilU2GhipXLkY8x%2Bo9jTrziwTha70DUU340EoCnw4l4WR6GROWFonTC9eN8H3CiPV38Huqig2XucnTexCmMEzX9DDzHssVJnH4K5cAfnca7dzF3LiZmNXPC2EXiR93Hr5VMggaNawbYjoP61vG7XXnD4muP8mmk1SGPHqpBduW6t%2FGou14FH%2B4e%2Ft4lyFAQxtOLiHezlS6R7qeXIpw6ggEBY%2BRlBZiSISsBE6z%2BoqdVeigtjRDXetIT09pfFbZd1uIaCFbkDMZRjpchS%2BMTB65HU%2FlbGtz4fL2niuAuyWZnNu0fChfClsSldfgJw%2BSidWRcMO3o3ckGOqUBrlpbyDfYU%2Fdj8Oh6n67NvX6Nbi5nxs2MuKoOJHHM7pSaqDn5i%2BiF0xdY9yBLar9MNu3bPOWln6SAZENt7xUtpmDkOgiOHYOwHSl9AMKO7X%2FmdjCFCLN0nmVG29aqoisRa1fn3rarr5XMxDZwG%2BqFSNe2y23X2y4M1OTMEX1m0Vv2%2FjhQBkypMUelKgsES%2FTBFkYn8Bbe3m33ZXq%2FNDMf3aLBBvol&X-Amz-Signature=6c6aa75c941630c85af7ff6c1b44480b30f5b14fcb34d050021aead05348f953&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VDLDVXPY%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T011101Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDfHN1CvBwzHm%2FDuUbW1HhZgKHmD0V14X46aptqTAjoOAiEAytPboSl29wpwRp75HgOJjlofJ%2FBP1Z8rIG8IW5n%2FFaEqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPzHO45zGYWbPdfulyrcA7xZFE1Ht8cYCbtzP9%2BNNEraz2DHiuX5onT85tK3dr0D2O5jXwe%2FkV%2BdsLhbyB0HWNM5Ia7vmJYzLfz%2FE813zpKkye%2B6HTiBRomjXWhzEOeKrweAvLqGQN4GpnMRHhq6LAesfUH63Ow5mK3h3Ssrmfe1Q86sCph0fgtjf4IfeSBx5vooPACqjNLb1kP%2B3K79weyB8q79DLXQR5TGEUE5oYJUzIaObf4YwqWoiRzTnlZwpKJ0G5xh2Lig8hBksPrXe9rqNgdatZXUvC9Sc88W2Rqq9eHYdlqxhefjW%2FBt102KaalVA%2BNQ8pd83oilU2GhipXLkY8x%2Bo9jTrziwTha70DUU340EoCnw4l4WR6GROWFonTC9eN8H3CiPV38Huqig2XucnTexCmMEzX9DDzHssVJnH4K5cAfnca7dzF3LiZmNXPC2EXiR93Hr5VMggaNawbYjoP61vG7XXnD4muP8mmk1SGPHqpBduW6t%2FGou14FH%2B4e%2Ft4lyFAQxtOLiHezlS6R7qeXIpw6ggEBY%2BRlBZiSISsBE6z%2BoqdVeigtjRDXetIT09pfFbZd1uIaCFbkDMZRjpchS%2BMTB65HU%2FlbGtz4fL2niuAuyWZnNu0fChfClsSldfgJw%2BSidWRcMO3o3ckGOqUBrlpbyDfYU%2Fdj8Oh6n67NvX6Nbi5nxs2MuKoOJHHM7pSaqDn5i%2BiF0xdY9yBLar9MNu3bPOWln6SAZENt7xUtpmDkOgiOHYOwHSl9AMKO7X%2FmdjCFCLN0nmVG29aqoisRa1fn3rarr5XMxDZwG%2BqFSNe2y23X2y4M1OTMEX1m0Vv2%2FjhQBkypMUelKgsES%2FTBFkYn8Bbe3m33ZXq%2FNDMf3aLBBvol&X-Amz-Signature=9aa5179b185e316a000442dee267e6ef92ef76a288654a3323268b52e0f484bb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
