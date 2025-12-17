---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP35HDDG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcv7o9iT6HQjsqnbRtS8D1bXlOrvk0ZOUHqV2FYRfU1AiA5zo6S1VjMiy6H%2BmWVa1REPZ%2BlEmR%2BZaMLNpd4PtuwwCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoqE92YaTirkm4eW4KtwDsUEEz2fCV8yuH1TRuqzpcKWhgUbxQqk6%2FlDOmUUkLsa6kjW7DCgQkrO8W09l5M3%2BXGOSqNMdNVbgX%2B%2BkRFWhmNz1OIvdx44chAvp1q5bAwesyD2kiaeyL%2FUCUh47uoV4T5hutd%2FI8BJx5edFtDPSNSN70ED0f7ltJxapwkXdm%2BNch5WfVmMghpTjEql%2B6nhYJYYMMCuA%2FJkK%2Fwdshtpi1T%2FGahJD1L%2B7%2FWDC5xV%2F4xzgldhLw22%2F0DkTMmdjwjU0jz7SaF9St6e4%2B7hiWLnCKYnkYbCnFwKTFc0jISzbq%2FZ3B0DAu5axil0qfmazOcNcMY16e%2BK7i3bZLxJK9gonRS6CiCNcsMg3uL7SzojapfpOZzI%2F7MZIab6U8RCPN2%2BhU278vFY9n22eFofXWT5JKM8XOyS7BgEh%2BEGl8DpRu2pNm%2BiH3N%2Fw9tTT5WcVaoA1bZccd2DuCabyuZ1n1nkIpXKEjtw6Z7hJIRqm7yCKVnhghnmxVkyY6qvt9IDiMa%2FylDMMHp4khoqDT4ZSYLktcdP%2FlyLrT%2BGLCD13DhIr0nIIdHqFCuWwH8hmhywy280WStCWu%2BZiPYbvMc%2Bd%2FXCzfYGtM3xAQ2lDG97kwPrFdVJYruZeicZNa7%2FHULYw1P%2BKygY6pgFT8%2FJ%2BLJYiOSdR7IVaDprsZWNjoUffSY60oKtAdP0uRPdQHCdAIGcZFjhijopOlPhE9to%2F%2BMPE09L2IJdvAvBbLciyr3nd%2Fs7aU%2Bn8Pv01oJpJftOwZBMiPOv3B2JV9SwLoHIezNfrz6fbVPKEa8Ahl0kWJduwNKi9IEl0QGSJ%2B5CuotG037d4eHm%2FZVKTCU7E1XxSvAwZaZaq%2FAd%2BYUQ23GoWi9ue&X-Amz-Signature=67a6befd012bf69a82eff97617a93c1ef19675062b25d88e08c0af068a62513a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XP35HDDG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T154118Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBcv7o9iT6HQjsqnbRtS8D1bXlOrvk0ZOUHqV2FYRfU1AiA5zo6S1VjMiy6H%2BmWVa1REPZ%2BlEmR%2BZaMLNpd4PtuwwCqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMoqE92YaTirkm4eW4KtwDsUEEz2fCV8yuH1TRuqzpcKWhgUbxQqk6%2FlDOmUUkLsa6kjW7DCgQkrO8W09l5M3%2BXGOSqNMdNVbgX%2B%2BkRFWhmNz1OIvdx44chAvp1q5bAwesyD2kiaeyL%2FUCUh47uoV4T5hutd%2FI8BJx5edFtDPSNSN70ED0f7ltJxapwkXdm%2BNch5WfVmMghpTjEql%2B6nhYJYYMMCuA%2FJkK%2Fwdshtpi1T%2FGahJD1L%2B7%2FWDC5xV%2F4xzgldhLw22%2F0DkTMmdjwjU0jz7SaF9St6e4%2B7hiWLnCKYnkYbCnFwKTFc0jISzbq%2FZ3B0DAu5axil0qfmazOcNcMY16e%2BK7i3bZLxJK9gonRS6CiCNcsMg3uL7SzojapfpOZzI%2F7MZIab6U8RCPN2%2BhU278vFY9n22eFofXWT5JKM8XOyS7BgEh%2BEGl8DpRu2pNm%2BiH3N%2Fw9tTT5WcVaoA1bZccd2DuCabyuZ1n1nkIpXKEjtw6Z7hJIRqm7yCKVnhghnmxVkyY6qvt9IDiMa%2FylDMMHp4khoqDT4ZSYLktcdP%2FlyLrT%2BGLCD13DhIr0nIIdHqFCuWwH8hmhywy280WStCWu%2BZiPYbvMc%2Bd%2FXCzfYGtM3xAQ2lDG97kwPrFdVJYruZeicZNa7%2FHULYw1P%2BKygY6pgFT8%2FJ%2BLJYiOSdR7IVaDprsZWNjoUffSY60oKtAdP0uRPdQHCdAIGcZFjhijopOlPhE9to%2F%2BMPE09L2IJdvAvBbLciyr3nd%2Fs7aU%2Bn8Pv01oJpJftOwZBMiPOv3B2JV9SwLoHIezNfrz6fbVPKEa8Ahl0kWJduwNKi9IEl0QGSJ%2B5CuotG037d4eHm%2FZVKTCU7E1XxSvAwZaZaq%2FAd%2BYUQ23GoWi9ue&X-Amz-Signature=03526292630e8c549f5c4d67b6ddd74c48a2b8cd3bcdbddd1af918cc93b8f9a1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
