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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OMGFBKQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwYVsrfTDdwWqLVNZWbR19Q16y7Ydx7m3V5tcqnPk0fAiEAvvYO2oMkuU7fL%2BqOta6eUEEe2dWNpU%2FKZQIJ%2Br26LJEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOftDzOcvqvTnGAW9CrcA%2BJz3durh%2F9UffG95RvkPzVVc%2FzTbNFOFbaXaYa3ASAc5HoMxtO2YpVPVOso6bYZr4Abw3sI29fhLijiGv7hjjp56MKPBd2Qb%2FpwMobavQA6ITctSZOY7d1%2FnPdRDNSkXEGzWEBFfMRahUElqi6m7qoRxg3%2Fd%2BF1Ji5I1MWK%2BRTaXonYYV%2BQtRVeSUX2E1fTdOgvgNAnosEE7tpKyC4OJWr4%2FrE%2BPuODvr8XV1QD9S2sc4DrYOwK82oAr37h6Sjvp3GnN9bh%2B54c8gEvy68%2FQEsOhjOA9nChcNwYjgNDVjti08%2FDV86oo2oVflK6cyFEFl8OgX2n9deFbEDMVCoUKDl1WsgLTyC71eqL0rmN5apwvsx7J8sS3yYbMP%2Fyw8grXz97KOQ2nzJh2Ttn%2FbrnDxK49J6hNgA6oQAJH2M2u2nhuif7xlvbl3b5%2FfwjbNSOiSMXNC6SlkKfHwbKwiFv8NQSf4qwODEkn3z%2B9R82BSAm7U8TZvWn%2FmYsf7G%2FbLiYjwnG43Ozd1LYjT4WX2yU66qkmHLRBcXnAFvdr2vYSyGXc8wzubnnaL1IeNd7vtlBSc4zMJWdTtdwYkELpN9wLvkROVxC7vkEFM%2FyQChSeM2xbXxFv36QWBmFPuBnMMGe1MkGOqUBY0BLE5K%2F6ospQIFauP60rVULvP42utf1sU83uYogIjMtUEYA7fC5LgKivLp9z6TOX3BAWIMGkPLjSr7SJjzrIl4Ck0OsWtJwtKCpDyIr08B6OVVM7aC%2FruVmuRnC1MoohWRTviTiftNfPTcUceYYC9FTj4WcfiyDM4ORr0u8Zu98WUsZEi1o5jZKkN33ZID21NRmw7TYPiao5YwbGfhnNMx7SmmL&X-Amz-Signature=6a6d851a2033dfe7eb6a52936d6b989f404557e7ce960a351b87d4f57cfffc9e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662OMGFBKQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T070218Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDwYVsrfTDdwWqLVNZWbR19Q16y7Ydx7m3V5tcqnPk0fAiEAvvYO2oMkuU7fL%2BqOta6eUEEe2dWNpU%2FKZQIJ%2Br26LJEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOftDzOcvqvTnGAW9CrcA%2BJz3durh%2F9UffG95RvkPzVVc%2FzTbNFOFbaXaYa3ASAc5HoMxtO2YpVPVOso6bYZr4Abw3sI29fhLijiGv7hjjp56MKPBd2Qb%2FpwMobavQA6ITctSZOY7d1%2FnPdRDNSkXEGzWEBFfMRahUElqi6m7qoRxg3%2Fd%2BF1Ji5I1MWK%2BRTaXonYYV%2BQtRVeSUX2E1fTdOgvgNAnosEE7tpKyC4OJWr4%2FrE%2BPuODvr8XV1QD9S2sc4DrYOwK82oAr37h6Sjvp3GnN9bh%2B54c8gEvy68%2FQEsOhjOA9nChcNwYjgNDVjti08%2FDV86oo2oVflK6cyFEFl8OgX2n9deFbEDMVCoUKDl1WsgLTyC71eqL0rmN5apwvsx7J8sS3yYbMP%2Fyw8grXz97KOQ2nzJh2Ttn%2FbrnDxK49J6hNgA6oQAJH2M2u2nhuif7xlvbl3b5%2FfwjbNSOiSMXNC6SlkKfHwbKwiFv8NQSf4qwODEkn3z%2B9R82BSAm7U8TZvWn%2FmYsf7G%2FbLiYjwnG43Ozd1LYjT4WX2yU66qkmHLRBcXnAFvdr2vYSyGXc8wzubnnaL1IeNd7vtlBSc4zMJWdTtdwYkELpN9wLvkROVxC7vkEFM%2FyQChSeM2xbXxFv36QWBmFPuBnMMGe1MkGOqUBY0BLE5K%2F6ospQIFauP60rVULvP42utf1sU83uYogIjMtUEYA7fC5LgKivLp9z6TOX3BAWIMGkPLjSr7SJjzrIl4Ck0OsWtJwtKCpDyIr08B6OVVM7aC%2FruVmuRnC1MoohWRTviTiftNfPTcUceYYC9FTj4WcfiyDM4ORr0u8Zu98WUsZEi1o5jZKkN33ZID21NRmw7TYPiao5YwbGfhnNMx7SmmL&X-Amz-Signature=ab041793803b9567a2adf6e49cab22a54c678292a0e734d2c712a5c753b6ff8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
