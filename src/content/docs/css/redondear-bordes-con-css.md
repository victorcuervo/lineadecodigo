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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NXBIDF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDC8o06SZBY%2BNU%2Bmd1fom67bT4w2eMiSsLFDz9Agpcv8AiBglzEPIcXWnQNsUGULv0auDlQRnW3BEeFAqkV%2FN5zroyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMyNdBlgZWkv7ZXImJKtwD9BZhb3%2BL1XDLW984n7I2T1ueDjfwpPb4bFrfOH7DenjxmS%2F1xkmxXqsUfnE%2F6pzDyWJ%2F4LJZ6kgoBovq%2BeRikVlYpRJ2L5FjVDFrbpexBXYWYuDmOrr5mBlXEIivCSYSZUKhL%2BozDl80WHL57gNVK5tIs9umYTRGr22ukXt9e7e3qesr3uMau21LpEbu2dPIF1SQQcf7YA6vYt7MJxvIEgnav3hiBnuxwBa0eJM0Ckr36%2FPbvLlGW4coTvA4qow3fyy86qxyojibgn1spTHFQMx1B4UKhAxdOocnRRst7UKAJ5AOWTIGZgNDrJgJbSq1y3eFjmGM0gtSZm310TXAxegzJzYGWHkjJdMPdU0cRYmlmkenU8TEBZPUZrzsFyMAbrhunRzwlNpq4XYOD18EmLBGo1ucVNcRH6iZMgz0%2Fqrohictv0iXEerefDcEfLeo58QdnMZzpwFaOn4gmXNO6J73qGPWggSjEpnQcAzCkrQ3Y%2BR4KbphuN8jqAcFoa113%2FDul1XeM3YF0rGGASHuyEghoCqSQMeaaF5P%2B7Eh5rih3ciFJ4U0IeJroBxQ0V6ZdCcz5yLeP5uxbQGUR9FbHqnDQhA2Lp7D8AXlbmCYy6nRhhgOFa4Wa%2B8givsw2KbQyQY6pgHrTUAREtZXrdRMPK%2BZxM1I8JVz09qqgn9EUViujdD8kJ79OGNmfjyA89iBW5PrW3CTLhL3FscejJxdz%2BEKPFI4OVOSdNWS1rzmChXN1C7%2BSpBZVvhBeLfC7gP4ddE%2B1hs4ADNW5MhVFxRqORVnJSKt4f8ilJrNBoGA8fE2FBfgNSSLKjgOfNbNTlIn8XTxJa7uAQTgoyLY8pHGCX7vEnT4Adbbbwji&X-Amz-Signature=43d8172cec343ad5a1688da36260a32e13f41de0d164e252e7ca936382cfa1d7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46657NXBIDF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T114003Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDC8o06SZBY%2BNU%2Bmd1fom67bT4w2eMiSsLFDz9Agpcv8AiBglzEPIcXWnQNsUGULv0auDlQRnW3BEeFAqkV%2FN5zroyr%2FAwh1EAAaDDYzNzQyMzE4MzgwNSIMyNdBlgZWkv7ZXImJKtwD9BZhb3%2BL1XDLW984n7I2T1ueDjfwpPb4bFrfOH7DenjxmS%2F1xkmxXqsUfnE%2F6pzDyWJ%2F4LJZ6kgoBovq%2BeRikVlYpRJ2L5FjVDFrbpexBXYWYuDmOrr5mBlXEIivCSYSZUKhL%2BozDl80WHL57gNVK5tIs9umYTRGr22ukXt9e7e3qesr3uMau21LpEbu2dPIF1SQQcf7YA6vYt7MJxvIEgnav3hiBnuxwBa0eJM0Ckr36%2FPbvLlGW4coTvA4qow3fyy86qxyojibgn1spTHFQMx1B4UKhAxdOocnRRst7UKAJ5AOWTIGZgNDrJgJbSq1y3eFjmGM0gtSZm310TXAxegzJzYGWHkjJdMPdU0cRYmlmkenU8TEBZPUZrzsFyMAbrhunRzwlNpq4XYOD18EmLBGo1ucVNcRH6iZMgz0%2Fqrohictv0iXEerefDcEfLeo58QdnMZzpwFaOn4gmXNO6J73qGPWggSjEpnQcAzCkrQ3Y%2BR4KbphuN8jqAcFoa113%2FDul1XeM3YF0rGGASHuyEghoCqSQMeaaF5P%2B7Eh5rih3ciFJ4U0IeJroBxQ0V6ZdCcz5yLeP5uxbQGUR9FbHqnDQhA2Lp7D8AXlbmCYy6nRhhgOFa4Wa%2B8givsw2KbQyQY6pgHrTUAREtZXrdRMPK%2BZxM1I8JVz09qqgn9EUViujdD8kJ79OGNmfjyA89iBW5PrW3CTLhL3FscejJxdz%2BEKPFI4OVOSdNWS1rzmChXN1C7%2BSpBZVvhBeLfC7gP4ddE%2B1hs4ADNW5MhVFxRqORVnJSKt4f8ilJrNBoGA8fE2FBfgNSSLKjgOfNbNTlIn8XTxJa7uAQTgoyLY8pHGCX7vEnT4Adbbbwji&X-Amz-Signature=8b1f2533912018989e96d489eb728271ec6ace55ffabc372872ecb73a7ab0542&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
