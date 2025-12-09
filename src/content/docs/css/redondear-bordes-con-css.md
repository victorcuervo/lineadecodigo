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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUE46YI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0XCcPxCdmUOdtU%2F2G3qoGu8Ki4dbEDhfpxVbnHtcUpAIgXHbNWhdIWt4mZfROtyw4MTnYktUHZlIY94n9HRVgTJYqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmk1KpPfWu9ZmVjEircA3Ps5CrrFGYPDwCkeANXlwFNXPuhUMiZyMUQlww4BLHTQYIZyLfI4dkItT%2BNqYO4ycOUjWSXYsXprT7MUNNe0ekL1Q9JDpNZUrMk1sfhVQHbW8%2Bw%2Bl%2BYgrmBQ1Dj6EjQs%2B8DUrB1YyuHyXFy%2BwWW5%2FFzJ2nOccmlSms8VnQL9WMd5%2Fjkkvut73en%2FD1XUmFJSM%2BMt6ky6aQ48XAJQOLu6p0eHrnN5QTzVhoQxXTDviWGY80QjpYp9nQN1%2BJsO%2BbDp5p3YlMKpvyCCvpPphI8Kdz5fU1LX9yykocj6jUozBzvr8tFosubj1iDZx9uZs4b9TELUy%2FV0l60%2Fue7Z8NBAeAfVXz0bbswgjP6r%2BKT4Vnx7xTCwwdU4FAvfafLKpMmhhKMpL2LqDiLPudgAWbaOkPUGbkQJWLzjdi2FEV1FPqGJbPWDpstxDxkbwQPR12fBLlC9ZkOp3LOIO44vKY42zOqO%2BrN6uCvNGzzBXOJyF17j0C0xLUBgPDtAIW0SqqPcNvHwy%2Burn1Sj5lhJm%2FxeQ7uGttnaMcc6xLZRMH2O05L%2Bt%2FnePzxtSpv2eMCTfp%2B713JUo02ccX1EmSojxPsgAVeSN3B2CB3%2FB%2FdmfiaNsXF8H5fbvj%2Bs6H1hHWmMOet3skGOqUBe3wGSqkBwfXFuz79TPXxT2YhJ5Kq27NvRDRY%2B1Irie226YWPSVU7dQOHllosKruvhiSmm6Sf0MDrqXhel%2BVJbQVc2jFDe6lAFBPkbDRom0q9nG6KqqQNCeiy%2Fn2MobuHJKt8SHI6rYaFEWsZG4kz7a9jagW%2BspACNOmCya%2FZOcYq%2BUSct8XWlu9bbb89GSgNy2P%2FkCeuDa4Pzk7vBNLgQkdquoKX&X-Amz-Signature=18dce26cb090b5e7103fc30f87e7f558b580a1e8fddcf8ebb545a3b1d0fe23db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664PUE46YI%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T042357Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC0XCcPxCdmUOdtU%2F2G3qoGu8Ki4dbEDhfpxVbnHtcUpAIgXHbNWhdIWt4mZfROtyw4MTnYktUHZlIY94n9HRVgTJYqiAQItf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHmk1KpPfWu9ZmVjEircA3Ps5CrrFGYPDwCkeANXlwFNXPuhUMiZyMUQlww4BLHTQYIZyLfI4dkItT%2BNqYO4ycOUjWSXYsXprT7MUNNe0ekL1Q9JDpNZUrMk1sfhVQHbW8%2Bw%2Bl%2BYgrmBQ1Dj6EjQs%2B8DUrB1YyuHyXFy%2BwWW5%2FFzJ2nOccmlSms8VnQL9WMd5%2Fjkkvut73en%2FD1XUmFJSM%2BMt6ky6aQ48XAJQOLu6p0eHrnN5QTzVhoQxXTDviWGY80QjpYp9nQN1%2BJsO%2BbDp5p3YlMKpvyCCvpPphI8Kdz5fU1LX9yykocj6jUozBzvr8tFosubj1iDZx9uZs4b9TELUy%2FV0l60%2Fue7Z8NBAeAfVXz0bbswgjP6r%2BKT4Vnx7xTCwwdU4FAvfafLKpMmhhKMpL2LqDiLPudgAWbaOkPUGbkQJWLzjdi2FEV1FPqGJbPWDpstxDxkbwQPR12fBLlC9ZkOp3LOIO44vKY42zOqO%2BrN6uCvNGzzBXOJyF17j0C0xLUBgPDtAIW0SqqPcNvHwy%2Burn1Sj5lhJm%2FxeQ7uGttnaMcc6xLZRMH2O05L%2Bt%2FnePzxtSpv2eMCTfp%2B713JUo02ccX1EmSojxPsgAVeSN3B2CB3%2FB%2FdmfiaNsXF8H5fbvj%2Bs6H1hHWmMOet3skGOqUBe3wGSqkBwfXFuz79TPXxT2YhJ5Kq27NvRDRY%2B1Irie226YWPSVU7dQOHllosKruvhiSmm6Sf0MDrqXhel%2BVJbQVc2jFDe6lAFBPkbDRom0q9nG6KqqQNCeiy%2Fn2MobuHJKt8SHI6rYaFEWsZG4kz7a9jagW%2BspACNOmCya%2FZOcYq%2BUSct8XWlu9bbb89GSgNy2P%2FkCeuDa4Pzk7vBNLgQkdquoKX&X-Amz-Signature=3cac7f327b0f4f93cceca1516eb60ad1960ef9a5f65f60e2572616159985fdee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
