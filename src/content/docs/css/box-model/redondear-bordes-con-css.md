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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22VCGM6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQypJ0MKVYOSXhu9%2F%2BCUnBgPdqf03A9XdRxykavC7BmAiEA%2F2GPtRdD9AzsAPR8GzyTsRSpCUe76Xquxjy4%2FlpAaScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCmsOX8CwjRZXaAqyCrcA%2BwoZlq2Hi%2FS9mHb6qnZlZTA%2B3h7KW7oGEVCW1nWPrnlQ3OmK2uNxrrHVpPwtGYKW1lZWzG%2BYTabimI%2BNeSPG%2BOCysITFdoADR%2BALVqgwX6AL48TktABJCeAheFXQD9ny3PEwiz1eCqDIsMcIv%2BM4oNYTxkPMwyWJbnXlol0EShGiciMSsUVYYA24R3hPy%2FlAkaUaRNchyLvcEoxQVfAqDOuEF4SIaNIu3SjbulbvpZSJe7k3aPasrXHErp7J%2BRD3YZYiss1UZBPJgVvmsooqrpEItcXrqZxjX45K%2FC6N3z67C28voER6%2B%2FRpOwfNpGiNGXBoZrBdvFQu%2FpglPcoX7MiYZz59tlpK6a2yaHYMcqM28WsyKVxG4OrEUYE5cPhag8pa%2F9NFp%2Fo1Bzi3cCZYD9pidfhhmhAdmCy0Bey2MVfjJAaFkT5XGpeY3bwt2quYVEEq4pcQSNscwl82eMj0FtGgg%2FxelOigFsmLCnHP82%2Bjd9msnuLFc7jTT3M9jr0SlRQs0ita3QMsxF5u6MdkJQ3wqijD7K1LWedese7bt6J%2FpjZxVHntVSPj9AyJwWdiVfTw8fIeZoPFlSHc%2Fv9Y%2FKZlxglWwaNAJv9TMzKcKlo12uKvBDl7PxLRlVcMKH7h8oGOqUBGBBBV7p%2F7iKMCa1RxtSxCqHc2T1mfAOaVG93AQvd8fer7TIJQu7flR6hIUc9iChQq5%2B1ClDqnCm0olBXdsTtD3WIo6o9IkkUVVOu2BvVMDU3u6ObwNvmbkleP3sKun4W9d32ZtDSJyy6tjOCi3NQzVh51jVAScN4hfIuvebrCxaXh3nfcvXoFyKoaFy%2FcyS84YEy4CRlr03RHWfqCRNfW65yo6U7&X-Amz-Signature=eccf9e1002b671c886856cd7e65c007535f98e9877b19a706950a500fa98847d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X22VCGM6%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014445Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBQypJ0MKVYOSXhu9%2F%2BCUnBgPdqf03A9XdRxykavC7BmAiEA%2F2GPtRdD9AzsAPR8GzyTsRSpCUe76Xquxjy4%2FlpAaScq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDCmsOX8CwjRZXaAqyCrcA%2BwoZlq2Hi%2FS9mHb6qnZlZTA%2B3h7KW7oGEVCW1nWPrnlQ3OmK2uNxrrHVpPwtGYKW1lZWzG%2BYTabimI%2BNeSPG%2BOCysITFdoADR%2BALVqgwX6AL48TktABJCeAheFXQD9ny3PEwiz1eCqDIsMcIv%2BM4oNYTxkPMwyWJbnXlol0EShGiciMSsUVYYA24R3hPy%2FlAkaUaRNchyLvcEoxQVfAqDOuEF4SIaNIu3SjbulbvpZSJe7k3aPasrXHErp7J%2BRD3YZYiss1UZBPJgVvmsooqrpEItcXrqZxjX45K%2FC6N3z67C28voER6%2B%2FRpOwfNpGiNGXBoZrBdvFQu%2FpglPcoX7MiYZz59tlpK6a2yaHYMcqM28WsyKVxG4OrEUYE5cPhag8pa%2F9NFp%2Fo1Bzi3cCZYD9pidfhhmhAdmCy0Bey2MVfjJAaFkT5XGpeY3bwt2quYVEEq4pcQSNscwl82eMj0FtGgg%2FxelOigFsmLCnHP82%2Bjd9msnuLFc7jTT3M9jr0SlRQs0ita3QMsxF5u6MdkJQ3wqijD7K1LWedese7bt6J%2FpjZxVHntVSPj9AyJwWdiVfTw8fIeZoPFlSHc%2Fv9Y%2FKZlxglWwaNAJv9TMzKcKlo12uKvBDl7PxLRlVcMKH7h8oGOqUBGBBBV7p%2F7iKMCa1RxtSxCqHc2T1mfAOaVG93AQvd8fer7TIJQu7flR6hIUc9iChQq5%2B1ClDqnCm0olBXdsTtD3WIo6o9IkkUVVOu2BvVMDU3u6ObwNvmbkleP3sKun4W9d32ZtDSJyy6tjOCi3NQzVh51jVAScN4hfIuvebrCxaXh3nfcvXoFyKoaFy%2FcyS84YEy4CRlr03RHWfqCRNfW65yo6U7&X-Amz-Signature=5b29a0606ea3fe6905d0c0db42911e85833f757d4250741e5c47eced43c538c4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
