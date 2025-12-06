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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VQD4LC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEP3EIRBT8m6pBtsVOHjwbHNRXeE43fwq4dwHT%2FSHH0rAiAEWh54DWlB2BfeA1N0X6K1du1c1omyauWGBkBzmQhK4ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMA6HtOIuGpqnCbPI%2FKtwDnlRuH4JgF1Qi3YOH8NdkH4vx%2Fr12k2ajwiz7EPZ6QYTp9V7qQAqR4Dk%2FLCfWFTnqg4d4EhMgMT0J%2FyagRr2EciKk%2BO1Xfi82u6RVBth%2FctAAJXqyGCMqPJg%2BL2S67Lre6voA3n2KkAKMwo62NIsLWTebhQGVx4Lz4%2Btyt76IcZtKUf1MFGJbckaZDwxG%2F%2F69ZhSASylm970a17pNEpLuJ%2FoOLBaBaKhNOxVYkzt%2Fqc%2Ft%2BMSr0P2ln5TPsZv9fdLIDlLbLVwLKYvRbax6ukTiIToeQ4jRx2HBMCu2a8GjtkouL1RmXaysFSsF8jPXXWFG23QMkh13ZvvQPoOmI%2FZPbEkuR4vOPnf3whDnv6J1qvClmRFbUeHc%2BJCe5SrZ1F%2FTUyoHLY91j3hzynBtdsW84e6RSAjcjQjMFitAbDxji44Xn%2FCNrb5uSNXsXmxodT49nCNcoH4soRppvdNjGLbFnoCSApY0GmOJADeZpZOz5jooKQnm0MDt5Zw73vjeAWs%2BFLnuMerYJri0b%2FgZc9TacBswIJ%2BriuW8hT8Af0GjWudaRI1x0UrWnYjTZsgnFRmGbJLcE1TVavm3SYgI7diGwCNbwFwr0BFS2i3VJzPr0rMOvWUZU0HCYlkd3K4wkrDRyQY6pgEHiIrvPu3fG1c3O1FzsmTHtxwKa%2FQueqjXldfCM2ag%2FsxHszCVGfD7I%2F8VTXkQ72y2thwfwqkDxnZ8cMn4TWuMxQDqDULXXTKQldvw7JLSk99UMVQRsvsxKhcQ4eO5rFHYykf0bEvVYeYI7hBUJhpXSmdJREDm2OtYq2Ndvlyh%2BGg2yc7PyD39rd9Wlj6aRcyqu%2BAKH4B679XqALKzUm7tUpYyjDRl&X-Amz-Signature=45b5ee9f5c2a942d77ed288c65bd1972d9d7a32ab519c5d72e410f5a063a6d82&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46674VQD4LC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T193528Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIEP3EIRBT8m6pBtsVOHjwbHNRXeE43fwq4dwHT%2FSHH0rAiAEWh54DWlB2BfeA1N0X6K1du1c1omyauWGBkBzmQhK4ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMA6HtOIuGpqnCbPI%2FKtwDnlRuH4JgF1Qi3YOH8NdkH4vx%2Fr12k2ajwiz7EPZ6QYTp9V7qQAqR4Dk%2FLCfWFTnqg4d4EhMgMT0J%2FyagRr2EciKk%2BO1Xfi82u6RVBth%2FctAAJXqyGCMqPJg%2BL2S67Lre6voA3n2KkAKMwo62NIsLWTebhQGVx4Lz4%2Btyt76IcZtKUf1MFGJbckaZDwxG%2F%2F69ZhSASylm970a17pNEpLuJ%2FoOLBaBaKhNOxVYkzt%2Fqc%2Ft%2BMSr0P2ln5TPsZv9fdLIDlLbLVwLKYvRbax6ukTiIToeQ4jRx2HBMCu2a8GjtkouL1RmXaysFSsF8jPXXWFG23QMkh13ZvvQPoOmI%2FZPbEkuR4vOPnf3whDnv6J1qvClmRFbUeHc%2BJCe5SrZ1F%2FTUyoHLY91j3hzynBtdsW84e6RSAjcjQjMFitAbDxji44Xn%2FCNrb5uSNXsXmxodT49nCNcoH4soRppvdNjGLbFnoCSApY0GmOJADeZpZOz5jooKQnm0MDt5Zw73vjeAWs%2BFLnuMerYJri0b%2FgZc9TacBswIJ%2BriuW8hT8Af0GjWudaRI1x0UrWnYjTZsgnFRmGbJLcE1TVavm3SYgI7diGwCNbwFwr0BFS2i3VJzPr0rMOvWUZU0HCYlkd3K4wkrDRyQY6pgEHiIrvPu3fG1c3O1FzsmTHtxwKa%2FQueqjXldfCM2ag%2FsxHszCVGfD7I%2F8VTXkQ72y2thwfwqkDxnZ8cMn4TWuMxQDqDULXXTKQldvw7JLSk99UMVQRsvsxKhcQ4eO5rFHYykf0bEvVYeYI7hBUJhpXSmdJREDm2OtYq2Ndvlyh%2BGg2yc7PyD39rd9Wlj6aRcyqu%2BAKH4B679XqALKzUm7tUpYyjDRl&X-Amz-Signature=bd3a6693ba9c6bcdd0884294b9beaa29b2890e5a467467c2bc7aa4aa93fabccf&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
