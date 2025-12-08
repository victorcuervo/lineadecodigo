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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZAASAR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7hY1cpYqPHuECLjv9AtkbdLRNU3FeS0AmogCnzZ6%2B2AiEAiDows%2FMm3vPgjHMmw26FlHujjeO5%2F6M%2B237JCpDCzvoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLANczboOffOEaTQiCrcAwlVs2cFIlO7iAnziz0fEbIma3He1HP5X8fizIcxJwiO14HpTC4HxNFwYrrT1%2Bu2KT7SzdSXSg0%2Ba7MoBmuN0AePbZJ%2BSDamnYmxYhE1aZd95IyiwF7J3puLuyawE3sPgw9J%2BUWElhnccvorkTwaGuTLZHVOKi7im%2FJUq5QmBJUoF4l2ZK89bK%2FeQkMV78NbWnW5DXD1jrKMA6puR6l9rBL3jF1pBoTnbGYJrZu%2FuEUDEm3pljcdRVj0otACho%2BBQCpp50nNputENC1y5KXogWFxU5QKLe9MgOnyeJZWn6GBr4StRy71RbsKgKwUvzw%2FVRXKUYWjPazeNiQ9X8F8t9Sd0wibRaNlwiXtAmGHmrBWUq8w5G%2BZdkudWjG6IKpKxZpvqtGePpujCjHO5z5lYuYncJJPexbm27Q94lRxnaAaPAUarNtQTXZmPpclnEpEkBf6LwFkrym91xntiWJhLanZgsOIY9592Ww4Z1aKH7VaN6zxVsyTkJsD%2B7TiJTFFK1pbGeWb03E64V3TwCMPuKBcul8ByHL0jorXLXPZEU%2BahwnEndUR4Fp%2FbbJBjIKQRo3H5JvoGyTjkUQ%2FfPZJ3KRckFKJk%2BwIoZ35a7yrjWexjxTDewHrUIZmM1qCMKPu2ckGOqUBd40TZpXVaIcRmvBKzx2D5JeudfOaygYgP1u52tdJ5vHGPG%2BZkeWCVKiHzQGmAd2rT1VKzSOpukERgKuVzMXThbwUHzpjbuCkGzGBpyNxP%2F7WIk3SArjv57hBTsWjJACvv%2FlsKAoQ7rkkMaQ4%2FYPIivTDSPYU5tmuv7KDphV3eL3oK1SxxWu6sLuoYvkLP3S%2BOlfkDrmEvH9jOb638Ri783YHIyUm&X-Amz-Signature=5a200eebb928891fb0ebe0559b782cf14e44ab802ac0c9fa624ecee4f397d20a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JZAASAR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080246Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIE7hY1cpYqPHuECLjv9AtkbdLRNU3FeS0AmogCnzZ6%2B2AiEAiDows%2FMm3vPgjHMmw26FlHujjeO5%2F6M%2B237JCpDCzvoqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLANczboOffOEaTQiCrcAwlVs2cFIlO7iAnziz0fEbIma3He1HP5X8fizIcxJwiO14HpTC4HxNFwYrrT1%2Bu2KT7SzdSXSg0%2Ba7MoBmuN0AePbZJ%2BSDamnYmxYhE1aZd95IyiwF7J3puLuyawE3sPgw9J%2BUWElhnccvorkTwaGuTLZHVOKi7im%2FJUq5QmBJUoF4l2ZK89bK%2FeQkMV78NbWnW5DXD1jrKMA6puR6l9rBL3jF1pBoTnbGYJrZu%2FuEUDEm3pljcdRVj0otACho%2BBQCpp50nNputENC1y5KXogWFxU5QKLe9MgOnyeJZWn6GBr4StRy71RbsKgKwUvzw%2FVRXKUYWjPazeNiQ9X8F8t9Sd0wibRaNlwiXtAmGHmrBWUq8w5G%2BZdkudWjG6IKpKxZpvqtGePpujCjHO5z5lYuYncJJPexbm27Q94lRxnaAaPAUarNtQTXZmPpclnEpEkBf6LwFkrym91xntiWJhLanZgsOIY9592Ww4Z1aKH7VaN6zxVsyTkJsD%2B7TiJTFFK1pbGeWb03E64V3TwCMPuKBcul8ByHL0jorXLXPZEU%2BahwnEndUR4Fp%2FbbJBjIKQRo3H5JvoGyTjkUQ%2FfPZJ3KRckFKJk%2BwIoZ35a7yrjWexjxTDewHrUIZmM1qCMKPu2ckGOqUBd40TZpXVaIcRmvBKzx2D5JeudfOaygYgP1u52tdJ5vHGPG%2BZkeWCVKiHzQGmAd2rT1VKzSOpukERgKuVzMXThbwUHzpjbuCkGzGBpyNxP%2F7WIk3SArjv57hBTsWjJACvv%2FlsKAoQ7rkkMaQ4%2FYPIivTDSPYU5tmuv7KDphV3eL3oK1SxxWu6sLuoYvkLP3S%2BOlfkDrmEvH9jOb638Ri783YHIyUm&X-Amz-Signature=8523e353b771d20340bcae5cad01fc80f39c5668850ed6d0007569055ebe75b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
