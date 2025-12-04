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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZDT3MZL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQD052TAAcGpKARla8chZCagzuWrUxPj8gYIj91Ro%2BxGxgIhAIklvEhtVDDwil90V7XXTn8%2BPKsgBDKqc9frMPVSuFtBKv8DCEAQABoMNjM3NDIzMTgzODA1Igxf%2BM%2BxDOgEotWfJPYq3AO6lX8wUcAZ5tMrYzViSXvFtTR4Cah4giNF2Jb5Dmzyhgqu%2Bw5L3A1gJhVQlIdBdbs9Fs3wzZovyZ%2FmsoDCos%2F9Cs7PnfHEDE%2BWGvv%2FMZ8f%2BQQvuYZoK%2BYHX8JTyX629LYpLaa03rlTEUv8kHXBktLJl6JjnavMxiyjB9wHSvHN7dvxe3OlQPc3gdEWvbMVEEfUJxaCOGLTTQv4Np6RnXZvAqMx98TIa8qMTsxXiZQmVINlkLQN2jyeXcE5sTQ6ysPr90a%2FxH21VHiK4r7DcTybjpyece3UOyMhS%2Bsm9sqz2y999T6yeBivr2MEQKB%2BjY8KW2TeqywXkPFfyBGulrk5Xyt%2Fim0fFPGJ4yaaCcBoISH1vq84ylo2GlE82EbhpDhr83AzFb2kLB%2F1aQQ%2FtT55vS4j2eAdhPbvVuy7Q06M%2BYZc8vSScVJLL7ntw%2FbT0stuERk3J%2BljK9FNkrrbSQxVHprebal%2FDB4HjXa0YXqnGAYsPzS8rSnkRZ6FCKlbKS633GXQnZrrG0vnHbWQ7kuLSPnPzMQ%2FKzZdTyeu660SbgFs8pk4yRMUCGnBMFzFvzkF%2FOqEJEgPScKwxnqtqZD%2F1D7RQ1OWMKHCj2eeSpHJ30mgWhHd%2B8cBXJI%2BIjDH58TJBjqkAUjVIMN2piao3PSe1JXWaPd8dj2JbqkoBol3%2BtJfl4YRGseF79u1P1AiKUp4U5jVOpyX6H5Sa8YmD21NaVRZtENaZLgsYWjU5IKgMFKO%2BloeX6gC%2FZOm37dzLkM6Y6RvnxTHpeyTOkgun%2BgEgKKtk290Rr%2FxMGJvvRrHZ6AHBXR1vYChe7BtFKbJe1EFtfoF9TmGxjKx9wPo9Qx%2FASsKat9UYTM8&X-Amz-Signature=6b3b885ee31b3ac0a5e7f7d241fb48f5ad9b7b701b118ea24aeadbffe5c28265&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TZDT3MZL%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T075143Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQD052TAAcGpKARla8chZCagzuWrUxPj8gYIj91Ro%2BxGxgIhAIklvEhtVDDwil90V7XXTn8%2BPKsgBDKqc9frMPVSuFtBKv8DCEAQABoMNjM3NDIzMTgzODA1Igxf%2BM%2BxDOgEotWfJPYq3AO6lX8wUcAZ5tMrYzViSXvFtTR4Cah4giNF2Jb5Dmzyhgqu%2Bw5L3A1gJhVQlIdBdbs9Fs3wzZovyZ%2FmsoDCos%2F9Cs7PnfHEDE%2BWGvv%2FMZ8f%2BQQvuYZoK%2BYHX8JTyX629LYpLaa03rlTEUv8kHXBktLJl6JjnavMxiyjB9wHSvHN7dvxe3OlQPc3gdEWvbMVEEfUJxaCOGLTTQv4Np6RnXZvAqMx98TIa8qMTsxXiZQmVINlkLQN2jyeXcE5sTQ6ysPr90a%2FxH21VHiK4r7DcTybjpyece3UOyMhS%2Bsm9sqz2y999T6yeBivr2MEQKB%2BjY8KW2TeqywXkPFfyBGulrk5Xyt%2Fim0fFPGJ4yaaCcBoISH1vq84ylo2GlE82EbhpDhr83AzFb2kLB%2F1aQQ%2FtT55vS4j2eAdhPbvVuy7Q06M%2BYZc8vSScVJLL7ntw%2FbT0stuERk3J%2BljK9FNkrrbSQxVHprebal%2FDB4HjXa0YXqnGAYsPzS8rSnkRZ6FCKlbKS633GXQnZrrG0vnHbWQ7kuLSPnPzMQ%2FKzZdTyeu660SbgFs8pk4yRMUCGnBMFzFvzkF%2FOqEJEgPScKwxnqtqZD%2F1D7RQ1OWMKHCj2eeSpHJ30mgWhHd%2B8cBXJI%2BIjDH58TJBjqkAUjVIMN2piao3PSe1JXWaPd8dj2JbqkoBol3%2BtJfl4YRGseF79u1P1AiKUp4U5jVOpyX6H5Sa8YmD21NaVRZtENaZLgsYWjU5IKgMFKO%2BloeX6gC%2FZOm37dzLkM6Y6RvnxTHpeyTOkgun%2BgEgKKtk290Rr%2FxMGJvvRrHZ6AHBXR1vYChe7BtFKbJe1EFtfoF9TmGxjKx9wPo9Qx%2FASsKat9UYTM8&X-Amz-Signature=6078cd0c717597357cb5fa515c9b639d5a9a4c59779fdeae32f895163f23dfee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
