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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCJ5QJNG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgVbUFHoAuW1ls1BBSooISqGUO2sIoIVxDlNtstzp5VAiEAsdfkn8RrDSfH8Zup29jph0oKm3I4uFtsSn1wqBgL1zQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZa7eyro9TsO%2FgdMCrcA13%2BPnNLDyBn5h6qS1NQrnhZUMp2u6wvQDepsoEmAXHMaKTteB4nN30wndeOlipKNuHYMwfc5pPydjWkAA1vlFuH03kUwWT%2F6r%2FCCla3Flti09nK%2BqHMvdZ1HNR50T7u1scIa5bd3EB6pzIjzf2I5aDqo8GwvLeBQuYJPRjlK%2BXHWh5OieHxtjYEj2e11IliQrYm82MC2STx2PEOxOUc0tAOByVHPr1FXe2MEO1td34J%2FOyjpYiEElCyE3zUalioxK6CNiOgl2eD6jrorRF1Jsbq2nC1egQ962wtFOspxj614zShzFRisJ2UUV6VLZ9knR5XdE76HVi%2BH2XmzRjKyyTuQV4AesmKG%2Fbl8A3tu%2BbdvzxMhWBX0GXcYu%2BfPTJUJf62xTuoni%2FSU3VhI6e13KtF083hw0jwGzk0QjMLGykKiRqgeGJKMshWcS0tN52VoQL%2FCT2AF%2BLr7Hj9gF1CLICUN4oXiTyyA1GTaChGk86T55S6tGUgmdp9BZwV38QR%2BIlM8Nzdz9nt%2BqcOh13uUVZ8zuVQXwRjPTpkKBqElaEEmmlMZQH%2Bn1PVLhMx%2BfPSWz9nzzMkO352KsLSjdvOrHB%2Ft1%2FgUbBNN9UV0ZkBWwlzl5oIiNloqvik3lfXMMfQ2MkGOqUBdGJT6nQ69yAIIgW6%2FXgOV5Xvixvr55UQHnQZqe3kUBWek2YoBYcgZYbnFFGvtk0dSSO7W%2Bd5RBXM2QZq6Ozo98Y5ebeFk5qcB3iVhdU6NlFFb36ahiVuVAUMyrwd3OqeP7GODIOnfMNS3exHiDRQhvvsWvl523Vj6ijUxk3jTlpXZI2ZygskcUeT3Hn7uEXiFPaYALP58YgUtesG6PnjnO%2BpCOD7&X-Amz-Signature=bbdb783ce7cb2ddd3ee3814e08480e84d0a7c7a65b371970c81e228158048f2a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SCJ5QJNG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T022444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEgVbUFHoAuW1ls1BBSooISqGUO2sIoIVxDlNtstzp5VAiEAsdfkn8RrDSfH8Zup29jph0oKm3I4uFtsSn1wqBgL1zQqiAQImv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZa7eyro9TsO%2FgdMCrcA13%2BPnNLDyBn5h6qS1NQrnhZUMp2u6wvQDepsoEmAXHMaKTteB4nN30wndeOlipKNuHYMwfc5pPydjWkAA1vlFuH03kUwWT%2F6r%2FCCla3Flti09nK%2BqHMvdZ1HNR50T7u1scIa5bd3EB6pzIjzf2I5aDqo8GwvLeBQuYJPRjlK%2BXHWh5OieHxtjYEj2e11IliQrYm82MC2STx2PEOxOUc0tAOByVHPr1FXe2MEO1td34J%2FOyjpYiEElCyE3zUalioxK6CNiOgl2eD6jrorRF1Jsbq2nC1egQ962wtFOspxj614zShzFRisJ2UUV6VLZ9knR5XdE76HVi%2BH2XmzRjKyyTuQV4AesmKG%2Fbl8A3tu%2BbdvzxMhWBX0GXcYu%2BfPTJUJf62xTuoni%2FSU3VhI6e13KtF083hw0jwGzk0QjMLGykKiRqgeGJKMshWcS0tN52VoQL%2FCT2AF%2BLr7Hj9gF1CLICUN4oXiTyyA1GTaChGk86T55S6tGUgmdp9BZwV38QR%2BIlM8Nzdz9nt%2BqcOh13uUVZ8zuVQXwRjPTpkKBqElaEEmmlMZQH%2Bn1PVLhMx%2BfPSWz9nzzMkO352KsLSjdvOrHB%2Ft1%2FgUbBNN9UV0ZkBWwlzl5oIiNloqvik3lfXMMfQ2MkGOqUBdGJT6nQ69yAIIgW6%2FXgOV5Xvixvr55UQHnQZqe3kUBWek2YoBYcgZYbnFFGvtk0dSSO7W%2Bd5RBXM2QZq6Ozo98Y5ebeFk5qcB3iVhdU6NlFFb36ahiVuVAUMyrwd3OqeP7GODIOnfMNS3exHiDRQhvvsWvl523Vj6ijUxk3jTlpXZI2ZygskcUeT3Hn7uEXiFPaYALP58YgUtesG6PnjnO%2BpCOD7&X-Amz-Signature=1055a29c92c930516887f3b48bf1faeb8aec47fc9f49067974425b8dec339610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
