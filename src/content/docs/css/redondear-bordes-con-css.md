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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZBC32P%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFidd2w8mCg0lQnRdYM9JaR4VcaeA%2Fq1t9IKfLYgeRMnAiEA4loyOuYSl7ITn3SddJm%2BFKORrLJ6cK4ale4HR8J6qSgq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDM2W8PLfUI4IDU3miCrcAxHzupcCgxsjBzbijCTbdim%2B6DMJMKDHybUL%2FvVuKywlfQffbz9e%2BZid2n5BL%2B0bNJagBzUwg1v0HHZjkY0Vge%2Bfz4UXxsiDL8t04jZqoXaTpzg6RmoDUR48ZR1B5ikL2qnwaxcV%2FC1toKEqfFWxsczCcT6DuM3xE9HP2QCZn%2BMxO9nMWVZZ30URjgFqAE4THpoW21yzkUC4AqjxHQHd8BBiJHpdejejOW6MRQ7Xr5tAy9v5UE5PVB5Jdzjfn9hyVpb11aD8ncXEgrCWEqS%2B1ix%2BYtZQKKRDsqkR0%2F8s6RPeRVdnvSu9aW%2FZeSCTOIbo68v07YgXuZqHjKLU5H7N6gJuEHxrEddPs9D0YbIVVFq4NHju92pPEN2qiTxMFY81%2BfoTb9p1fNr88qxi7U2OAiTF9aJWbDph5lU1AjGkGWDGzcmpSkPmLsn1%2FEqdoPaws7YPDEZuIs64be7DXcEO%2BKFym%2FWuqePBe64RmiaKOEFaDSWa%2FV4FzLcCIWwlBUtSkky82NBpJoyI3SVuzCjXwyG4TwkaT%2FLShrYmm%2F4O6FAy7Df11w7dSdwlT5PUQemgtu%2Bf10kUSopUkpUInRlS4ASTYguAvlS6kCeYvU1h6C7oEJoCjj5fWjAWcCIMMM34wskGOqUBiTa5fu6qM%2Br86fPPB04%2FYtU0F6L23kcsC%2B59AglKpsRkmUEkCA56e1L9JWsDlsc7qE7S3a1dXTR0BG30JbwXoGpp0reDLAB6BnG9QTKy5Z3yQQNqhDONSVKWUNsqHRFD5nG2vIPWkhZoYGsBiMQw2%2Fc9fd2kaKt8%2FkVNxDVjXtw%2BQHnVzxSH4y5zOc04TuvTw%2F6g%2F505%2B4SVPl5n7opMuZcpc3G7&X-Amz-Signature=ce499c79da9712107d0949f930846bff16e9fa7dd0cb4fad9e110041bb264e91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46634ZBC32P%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T231017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG8aCXVzLXdlc3QtMiJHMEUCIFidd2w8mCg0lQnRdYM9JaR4VcaeA%2Fq1t9IKfLYgeRMnAiEA4loyOuYSl7ITn3SddJm%2BFKORrLJ6cK4ale4HR8J6qSgq%2FwMIOBAAGgw2Mzc0MjMxODM4MDUiDM2W8PLfUI4IDU3miCrcAxHzupcCgxsjBzbijCTbdim%2B6DMJMKDHybUL%2FvVuKywlfQffbz9e%2BZid2n5BL%2B0bNJagBzUwg1v0HHZjkY0Vge%2Bfz4UXxsiDL8t04jZqoXaTpzg6RmoDUR48ZR1B5ikL2qnwaxcV%2FC1toKEqfFWxsczCcT6DuM3xE9HP2QCZn%2BMxO9nMWVZZ30URjgFqAE4THpoW21yzkUC4AqjxHQHd8BBiJHpdejejOW6MRQ7Xr5tAy9v5UE5PVB5Jdzjfn9hyVpb11aD8ncXEgrCWEqS%2B1ix%2BYtZQKKRDsqkR0%2F8s6RPeRVdnvSu9aW%2FZeSCTOIbo68v07YgXuZqHjKLU5H7N6gJuEHxrEddPs9D0YbIVVFq4NHju92pPEN2qiTxMFY81%2BfoTb9p1fNr88qxi7U2OAiTF9aJWbDph5lU1AjGkGWDGzcmpSkPmLsn1%2FEqdoPaws7YPDEZuIs64be7DXcEO%2BKFym%2FWuqePBe64RmiaKOEFaDSWa%2FV4FzLcCIWwlBUtSkky82NBpJoyI3SVuzCjXwyG4TwkaT%2FLShrYmm%2F4O6FAy7Df11w7dSdwlT5PUQemgtu%2Bf10kUSopUkpUInRlS4ASTYguAvlS6kCeYvU1h6C7oEJoCjj5fWjAWcCIMMM34wskGOqUBiTa5fu6qM%2Br86fPPB04%2FYtU0F6L23kcsC%2B59AglKpsRkmUEkCA56e1L9JWsDlsc7qE7S3a1dXTR0BG30JbwXoGpp0reDLAB6BnG9QTKy5Z3yQQNqhDONSVKWUNsqHRFD5nG2vIPWkhZoYGsBiMQw2%2Fc9fd2kaKt8%2FkVNxDVjXtw%2BQHnVzxSH4y5zOc04TuvTw%2F6g%2F505%2B4SVPl5n7opMuZcpc3G7&X-Amz-Signature=813ae3426eed0ee3a4d1312af0e318f507b08fdace200a80b3ac2dbfe5b30f3f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
