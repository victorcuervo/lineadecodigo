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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYE6AIT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH3s6u4fSBe9iWPm6aZVu%2FRo3Ln5WzpoBEdiEzFSKpGAiEA7az4xwvvuBZ6NZS%2BQcM5C9ZuviUOKu1Prznuest0VxwqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEoF1MLUT5bwLnpnircA%2BCXQ%2F1fxOegL4A%2BlKJONd%2F3uP8%2BTrldl5CEWGIik5bDykl%2FjGpgECM9RzQcNRVSAZSWxSPU7SmoMAsnnapZTK4JIaV2DAEu5rKaI9cizXX7zWdbDnMCMOv4PfAiemE3LXrwoCzJXF5X3SAJYf8EQt0jI2gZGFeV0yROT7vG2RMSnQh9wxbJBEvL0Jo1pHLobrU0%2BxEnPXlJt1AqOnpXHL8mbRpeDfpb4tVzreQTq%2BKX8DGy7ZNUxbuBv0rrlQc8H4f2iGQEbKl86uXXg3aq7x3B3Y4oqPcivXQZDOdFCvZCph1qFQRg7TEAiKQt7H5ywoBeGr5p2JZeegw1ixrEFYD%2Ff6R8DQsaH5Jook72F98niD04fJO4P2Qy6F3GT9SzyVX5OMs4TRzKqrCITQCPXkkI0enPirdO10KGFpPlygJPfcUzvztT2MdC3feJo5YTJPys3yUSGFR6prnnQ8tB9PJn1CR9jioo%2FXIHKoJCw4ctwiawLjfcQpgzzyPmdgEmduEcB5HExySsVCkVHyKQBv%2BR%2FYZE0r%2BS8LqAS975bkN1s4sEnZ7LHI43%2FUSl6tx%2BwzOw4QsEv9SEQoQ5039y2k8fLoJ2guV2p%2B2alMb3MRtWpIqJC4qf1gv%2F8XrWMN271skGOqUBeX2Q1XITufgyoFbjRPEGCC%2FJyyn%2B0A10lW6aDJa2du3fzaxtYKFdqsFGsEbxWSFVwmeq5%2BQ2vxTbFHiupD6ui8mx1cBbpsRXoiYKdOoX49KeStrZSlJBlZqXyINDcbDLfq4N81I7Mn8MOgda7auWe4NYUC%2FrpqW1cASZ%2FVzg1kbojmbAcFBZUGVmubLkg51GccEQ3UP0jHSAwm%2Bn2U8Oh7tjLV7N&X-Amz-Signature=812d14bcab2099bdd93a6660f5945a40b07df092f2c0ebd4f25127fdb6208513&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UBYE6AIT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T185251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHH3s6u4fSBe9iWPm6aZVu%2FRo3Ln5WzpoBEdiEzFSKpGAiEA7az4xwvvuBZ6NZS%2BQcM5C9ZuviUOKu1Prznuest0VxwqiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHEoF1MLUT5bwLnpnircA%2BCXQ%2F1fxOegL4A%2BlKJONd%2F3uP8%2BTrldl5CEWGIik5bDykl%2FjGpgECM9RzQcNRVSAZSWxSPU7SmoMAsnnapZTK4JIaV2DAEu5rKaI9cizXX7zWdbDnMCMOv4PfAiemE3LXrwoCzJXF5X3SAJYf8EQt0jI2gZGFeV0yROT7vG2RMSnQh9wxbJBEvL0Jo1pHLobrU0%2BxEnPXlJt1AqOnpXHL8mbRpeDfpb4tVzreQTq%2BKX8DGy7ZNUxbuBv0rrlQc8H4f2iGQEbKl86uXXg3aq7x3B3Y4oqPcivXQZDOdFCvZCph1qFQRg7TEAiKQt7H5ywoBeGr5p2JZeegw1ixrEFYD%2Ff6R8DQsaH5Jook72F98niD04fJO4P2Qy6F3GT9SzyVX5OMs4TRzKqrCITQCPXkkI0enPirdO10KGFpPlygJPfcUzvztT2MdC3feJo5YTJPys3yUSGFR6prnnQ8tB9PJn1CR9jioo%2FXIHKoJCw4ctwiawLjfcQpgzzyPmdgEmduEcB5HExySsVCkVHyKQBv%2BR%2FYZE0r%2BS8LqAS975bkN1s4sEnZ7LHI43%2FUSl6tx%2BwzOw4QsEv9SEQoQ5039y2k8fLoJ2guV2p%2B2alMb3MRtWpIqJC4qf1gv%2F8XrWMN271skGOqUBeX2Q1XITufgyoFbjRPEGCC%2FJyyn%2B0A10lW6aDJa2du3fzaxtYKFdqsFGsEbxWSFVwmeq5%2BQ2vxTbFHiupD6ui8mx1cBbpsRXoiYKdOoX49KeStrZSlJBlZqXyINDcbDLfq4N81I7Mn8MOgda7auWe4NYUC%2FrpqW1cASZ%2FVzg1kbojmbAcFBZUGVmubLkg51GccEQ3UP0jHSAwm%2Bn2U8Oh7tjLV7N&X-Amz-Signature=55b8d1eb5dda61c627e7d5c6cf17c38c5b661d4ad5566611256611e63829072a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
