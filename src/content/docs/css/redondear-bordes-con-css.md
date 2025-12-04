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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O7KH2QZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDl9MpjULQStORwGEfXTnxht8oNrpeTnQfNIsA3upvE7QIgL48oBRT5%2FHPbQkhCcDcciQ74BfBsbR8J%2FeqcJEEPUHYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDE0Haq2ClbxWcuxcSrcAxmwTU9al08hRhOljrZRCYPgaYfa1oMxHYJ29%2FMi3%2B6ZhRaK8oKY1sclAWKeIkbVvs1yEB6743nKXbXa2kIXMESzG6evvyD0oUnp3L7ZKELjdGmrlJX1SWfBAXC45JiX1upw500CpPPh7c%2Fg6SYfP6hLVJLaMItkDMeSs%2BfrCLX%2FftpgIUAPb3SXNQYqT03K2ym7WIY%2F3b0eWk%2BNX2gUzK1%2BEE0FXNKRNsKy8Csr3VXSN7BqyJ4UaduKf%2Flz4SA32rXeL1W%2FSBQkEJvrDSG9vKlJrhEbe6sJSujJuEXZqM7biPLOzZBxQpuZ4bf4mjn9OPa4vDso3D8fx22THFqw38KgEPG8zAxiBs%2BlT%2BLdv8C%2BDsM3gpRrnXCoVVdyfXe9bKlVr6msmhJJjgIQ2pa%2FkIAjsgK%2BXneIZN%2BJanVypAY6zHUK7rt33GWsEPtw3bqnkNcXD9A5Z4SE8MM146VaUo%2FQQLFAAJMN912lh0sN5o%2Fx%2FmFbX4QUcOVOEwIOMmOgxaZJThtZl13Yg1JIQGlHubc98H9Thk1G3DbQv2pBakMfySnylV5lgzwK5JSW%2BedepVsdop1pvvhet%2F7SnnlEbWDimpkxY9zg1DDM24ZfLHDKRSzGaVS8MgY5p49SMOfoxMkGOqUBxwEiYhWGJy08%2F4Alc%2BppeGrXbNdCdDqFmchZ%2F7%2FDOr4RseX%2FXSs1jX0eOTBh%2BDbpd9yuW4bbM3OesDpvpVcQkC0hvsNVNjpvQSaQ502K2%2BUEhWqdUA%2FhWttdNUANzJNNa7NPEmtRylvSPAcO7NpZwCscbI%2BvDu%2BVCLzg5eCj6O1sTjoVB5rboJMKAaQQmzQa29KwmBcifZksL1d75y8R%2BJTPVD1A&X-Amz-Signature=05f6d58f6eab9b88a7c1fcc13a2ea3cfb3ceab746e97b1908bdbc52796c0b0d0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664O7KH2QZ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T081127Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDl9MpjULQStORwGEfXTnxht8oNrpeTnQfNIsA3upvE7QIgL48oBRT5%2FHPbQkhCcDcciQ74BfBsbR8J%2FeqcJEEPUHYq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDDE0Haq2ClbxWcuxcSrcAxmwTU9al08hRhOljrZRCYPgaYfa1oMxHYJ29%2FMi3%2B6ZhRaK8oKY1sclAWKeIkbVvs1yEB6743nKXbXa2kIXMESzG6evvyD0oUnp3L7ZKELjdGmrlJX1SWfBAXC45JiX1upw500CpPPh7c%2Fg6SYfP6hLVJLaMItkDMeSs%2BfrCLX%2FftpgIUAPb3SXNQYqT03K2ym7WIY%2F3b0eWk%2BNX2gUzK1%2BEE0FXNKRNsKy8Csr3VXSN7BqyJ4UaduKf%2Flz4SA32rXeL1W%2FSBQkEJvrDSG9vKlJrhEbe6sJSujJuEXZqM7biPLOzZBxQpuZ4bf4mjn9OPa4vDso3D8fx22THFqw38KgEPG8zAxiBs%2BlT%2BLdv8C%2BDsM3gpRrnXCoVVdyfXe9bKlVr6msmhJJjgIQ2pa%2FkIAjsgK%2BXneIZN%2BJanVypAY6zHUK7rt33GWsEPtw3bqnkNcXD9A5Z4SE8MM146VaUo%2FQQLFAAJMN912lh0sN5o%2Fx%2FmFbX4QUcOVOEwIOMmOgxaZJThtZl13Yg1JIQGlHubc98H9Thk1G3DbQv2pBakMfySnylV5lgzwK5JSW%2BedepVsdop1pvvhet%2F7SnnlEbWDimpkxY9zg1DDM24ZfLHDKRSzGaVS8MgY5p49SMOfoxMkGOqUBxwEiYhWGJy08%2F4Alc%2BppeGrXbNdCdDqFmchZ%2F7%2FDOr4RseX%2FXSs1jX0eOTBh%2BDbpd9yuW4bbM3OesDpvpVcQkC0hvsNVNjpvQSaQ502K2%2BUEhWqdUA%2FhWttdNUANzJNNa7NPEmtRylvSPAcO7NpZwCscbI%2BvDu%2BVCLzg5eCj6O1sTjoVB5rboJMKAaQQmzQa29KwmBcifZksL1d75y8R%2BJTPVD1A&X-Amz-Signature=7f902172908757508040134ecffcffe6dc2df2eeb2f3dc12ffe852c6b4e3de41&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
