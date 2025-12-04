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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E4ATRX4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8apmw2mi7iNDoUURcwYl5%2FQf83gXXYKw7CPfSLyPC7AIgBPXCCksuyKMMrM%2Fsi9JZ%2Bek0C45QEg4CDxx%2BcjP8PNcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLva%2BM6auQt8zVk5KyrcA8x22AnhWg%2F4YqDCs%2FggQJNMbqSw032WOlRC8c2dq0EbEmCWHDc5yZ7Le79ZT9KZoyM0ayeWbOqlr4G61%2FXt6lnvR4naqSWhZ3bYpJZokIx%2FHuOKJDGO4rGpJIgTVOJs6G3TPKqn3zkigKKXT8WuOjBKrQ4cwWAPM9v0oD0oL%2FXpzDUO8EaqvNlPyy678mvLNc1YvbFVWJwwdQO2LjRHMm61teyNuBXrGRcIn2B%2FxWfpwPjmJZIOlXL9x%2FbCOU%2F1RaXaX%2BZfluSeBvMiLsZx90Au5rVol98bc%2BvrQ71iCbqoA05KtslitEu%2BNHAjCPbhPTs36nPHq0RP8%2FC55%2FR%2B9s%2Bs2MLbH%2BSp2A%2Fmkl1VpvgM2es5OFXiD%2Fq7A98NSN0a%2FpArj7DVcnqCPn4%2BTPiKE%2BZT7sxmPeK1bmUh3OoToCHfufrHeW78UKnilQkJRdYhvD5do7zoK2ZrgMRD3%2Fy13A%2BmtU61TutC42lG9Whup%2F%2F35qPR4Xg39WHWCN1M45Vn0UOahaACO6w8cJO0PhxUPp9vkQapyhJzno%2FXRGElnI3Alb8uTSRIJCZOFt6bUoOECXHBas35KntcN%2BUzyh59zWoHa20oxAOXkxz4XHIXnlLLRDJg0qraYmn8Fo%2BnMKb6xskGOqUBIq3DJEk82Y5a3UOzWZCV1elQZvv92bm2gFPON6FIss09vhyGIkEnIU3Y1H2vfcpnNrzZb93FQtLjtu4hMwFkPixZ85ZwMLW%2F3po4meVnXfEMUmVwRsn8CB8waJIpduZ6ezObaWuRv3TiKlzR3%2BJmKhb1FIh1R0ZoPgFXW%2FS%2FgoXGkcb1vAPXN0dhz9NnxukzqWT8HGVq47gLSHEvsmb5szOs4ZUt&X-Amz-Signature=47d9da04991cacbb0ee841925a6a73bece5e7d1ed98e0e203e9f6fc411a1fe9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664E4ATRX4%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T171340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD8apmw2mi7iNDoUURcwYl5%2FQf83gXXYKw7CPfSLyPC7AIgBPXCCksuyKMMrM%2Fsi9JZ%2Bek0C45QEg4CDxx%2BcjP8PNcq%2FwMIShAAGgw2Mzc0MjMxODM4MDUiDLva%2BM6auQt8zVk5KyrcA8x22AnhWg%2F4YqDCs%2FggQJNMbqSw032WOlRC8c2dq0EbEmCWHDc5yZ7Le79ZT9KZoyM0ayeWbOqlr4G61%2FXt6lnvR4naqSWhZ3bYpJZokIx%2FHuOKJDGO4rGpJIgTVOJs6G3TPKqn3zkigKKXT8WuOjBKrQ4cwWAPM9v0oD0oL%2FXpzDUO8EaqvNlPyy678mvLNc1YvbFVWJwwdQO2LjRHMm61teyNuBXrGRcIn2B%2FxWfpwPjmJZIOlXL9x%2FbCOU%2F1RaXaX%2BZfluSeBvMiLsZx90Au5rVol98bc%2BvrQ71iCbqoA05KtslitEu%2BNHAjCPbhPTs36nPHq0RP8%2FC55%2FR%2B9s%2Bs2MLbH%2BSp2A%2Fmkl1VpvgM2es5OFXiD%2Fq7A98NSN0a%2FpArj7DVcnqCPn4%2BTPiKE%2BZT7sxmPeK1bmUh3OoToCHfufrHeW78UKnilQkJRdYhvD5do7zoK2ZrgMRD3%2Fy13A%2BmtU61TutC42lG9Whup%2F%2F35qPR4Xg39WHWCN1M45Vn0UOahaACO6w8cJO0PhxUPp9vkQapyhJzno%2FXRGElnI3Alb8uTSRIJCZOFt6bUoOECXHBas35KntcN%2BUzyh59zWoHa20oxAOXkxz4XHIXnlLLRDJg0qraYmn8Fo%2BnMKb6xskGOqUBIq3DJEk82Y5a3UOzWZCV1elQZvv92bm2gFPON6FIss09vhyGIkEnIU3Y1H2vfcpnNrzZb93FQtLjtu4hMwFkPixZ85ZwMLW%2F3po4meVnXfEMUmVwRsn8CB8waJIpduZ6ezObaWuRv3TiKlzR3%2BJmKhb1FIh1R0ZoPgFXW%2FS%2FgoXGkcb1vAPXN0dhz9NnxukzqWT8HGVq47gLSHEvsmb5szOs4ZUt&X-Amz-Signature=dcb127c504ae7efbfc7255301ecbf990f849bef138ff1763d92c4fd54d116273&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
