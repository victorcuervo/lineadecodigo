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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X234L3LA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICg7pzDzl1deFEZZdNCbz%2FM4lwlvCDyVWUR8nXAsfecyAiAlPGayEBXNTdfuHVCDV9rerhM%2BMSUk8cpzwrVarfcLtyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMecfpiQmIt89QE8mbKtwDliZqoMXo3qkfgsjyxjoWDcHyIdqUaalEIZvHd8CTFBMe4QzYGN6xDmO2BphK8XydzvZ%2B9SdtaYKkYLyePm6Jkqy%2FqEisdN%2F7TTP04CuFIZB4RgkoUPSODmWovlLjLD6EpWh7G07iJbYt8KJhTt4irdf0cQL6g8EanPF7jBoE7YIDIF7yXP0CgXSA4%2FLci%2BvVaGYITk%2FQObTk0WEwauw%2FiYP4UjUb%2FKZ385W0lISZu1b4DO2iZS2yC7N4qE9jsRtSAE0trg6KBQBaGrWp090dTMhmlvy%2Ba8yQ4BtQeu%2Fp7rNnsnVMU537sVrbQLe%2BbgS3fH9U0fG9rsQUaJS7eYRd%2Bm0Z243cwjehhgpBpUL9u3FbKEzV2CJ0jaHHbIpo6mKhvhhIIWzrUqLiV0z%2FW4ZxtisGEhN7g3QMSncnXb1gt1hmVYcT6RSGz2tmTYgm53a3GcwO4k4wyWOM07%2Fr0urv2qN0vowXZquiE96IrRNjmgXQi3kNdeJXItTWERdEQfjsEPgpOJew8Lsc1H3G0iwQZq6cZ8FtARbC2aDbcfDTOQZZyukLX5MU7JI9XAQ3x%2FrmBksBlVOhCDIqcsqRX06oOK3%2F08lN%2FUZkpa4miBxyJIFv5jlz5QkHA2MPSGAwvYzIyQY6pgHmd6TEEZgvGa3%2BjFODp4wUdRsfllmsNPr%2Fb7tENpsVnzWlMyVlM1ui3LhhkoyACyGoUyfnDVxvHISQ4O0vEIOoU2qM78EXWqpA8OZB1mvfC0cl7nmVt8SfILtEdmJsvO%2FllrjtwRp7tL2t30o6wN6yVDuxYbt14b%2BxjZzm1VdCpC1UQwa4Fg%2Bhwa%2Fim8e4gQ0qZaM2dlRJ3U9cRN%2B17PO2bpOsednc&X-Amz-Signature=d70d53da30a29621b75196cb4fafac6870df098af746ce287c4bd5ebdf8e2fe7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X234L3LA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T012933Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICg7pzDzl1deFEZZdNCbz%2FM4lwlvCDyVWUR8nXAsfecyAiAlPGayEBXNTdfuHVCDV9rerhM%2BMSUk8cpzwrVarfcLtyr%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMecfpiQmIt89QE8mbKtwDliZqoMXo3qkfgsjyxjoWDcHyIdqUaalEIZvHd8CTFBMe4QzYGN6xDmO2BphK8XydzvZ%2B9SdtaYKkYLyePm6Jkqy%2FqEisdN%2F7TTP04CuFIZB4RgkoUPSODmWovlLjLD6EpWh7G07iJbYt8KJhTt4irdf0cQL6g8EanPF7jBoE7YIDIF7yXP0CgXSA4%2FLci%2BvVaGYITk%2FQObTk0WEwauw%2FiYP4UjUb%2FKZ385W0lISZu1b4DO2iZS2yC7N4qE9jsRtSAE0trg6KBQBaGrWp090dTMhmlvy%2Ba8yQ4BtQeu%2Fp7rNnsnVMU537sVrbQLe%2BbgS3fH9U0fG9rsQUaJS7eYRd%2Bm0Z243cwjehhgpBpUL9u3FbKEzV2CJ0jaHHbIpo6mKhvhhIIWzrUqLiV0z%2FW4ZxtisGEhN7g3QMSncnXb1gt1hmVYcT6RSGz2tmTYgm53a3GcwO4k4wyWOM07%2Fr0urv2qN0vowXZquiE96IrRNjmgXQi3kNdeJXItTWERdEQfjsEPgpOJew8Lsc1H3G0iwQZq6cZ8FtARbC2aDbcfDTOQZZyukLX5MU7JI9XAQ3x%2FrmBksBlVOhCDIqcsqRX06oOK3%2F08lN%2FUZkpa4miBxyJIFv5jlz5QkHA2MPSGAwvYzIyQY6pgHmd6TEEZgvGa3%2BjFODp4wUdRsfllmsNPr%2Fb7tENpsVnzWlMyVlM1ui3LhhkoyACyGoUyfnDVxvHISQ4O0vEIOoU2qM78EXWqpA8OZB1mvfC0cl7nmVt8SfILtEdmJsvO%2FllrjtwRp7tL2t30o6wN6yVDuxYbt14b%2BxjZzm1VdCpC1UQwa4Fg%2Bhwa%2Fim8e4gQ0qZaM2dlRJ3U9cRN%2B17PO2bpOsednc&X-Amz-Signature=11bc7b827194bb4fd5cb0fc0d615b100001642166beb78c071c48af367d0a046&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
