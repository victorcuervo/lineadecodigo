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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFRYE2W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDn3h4mkY2exzy%2FvEcnuN3VJNWUqvwhR%2Fp4XgiaTPkznAiEA6IKsqNxEBY%2FxkMwof78QvD5fZ3NTU%2FFpTkEdJ5kKEYoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAUVX2LAsRF5jiTsDCrcAzDv0AGhsA8yGgzyTBLvNB48RULN%2FcNQsLbtzOA4IfwAlSv632I%2BLo%2B9XjoM3vCsUZkDUkrOW4V7rqM5tlAQyYFksnAdfUMCEw8Qra7%2BWlrfetG6pV82rAw4CXRqlYNBAR95a7RHvm03liYBlrZI%2Bu4sDEaTMWG%2ByGio5x6ZvblsKGAL2Cvg7ZwGCmcrGKPPNfWQ54X%2B67gXD%2Fq%2Bp8NyD30aYipHLCsxW26ATGbPeuDGPKf9h%2BBrjccZjr%2Fbk9%2Fs44Sw%2BFUHztBcxe1uPuWQaHQiCLJ0UHlGEYLY9m5fwz9NBxnAppTpAB7oVNYLU5LmLEffqThK8a%2FprPrVSCizkJUna%2Bfnv0%2BSYmSywe7%2FFDEK3fHjzzKI9e4P8sm1ZWs%2FqdCKQja%2Bd7%2B9qT9oPM0ScvLtnOIMAMiadjnqSBxXLHAMPc4iO7nIcO8rWMLwSq39iC9cK6soKHxmsDWsdLb6BvW5L%2FLpb04Yxmn%2FaAaYGZh9aYS5wKRkDAlzubEe3kSQo7JZVVHFq0NjA0GpNweR%2F1II7Sc%2FzeuDlyAhHgQyK40HC7E3HVQpTBm%2BlGRTSqXny27wCBH%2BOAF%2BDUyquumvWasMbpXj5193gIQVTWpmybsteNtHIUpUs%2BWPrWaCMMTKxMkGOqUBwdMaTIEyartcy1ZsOaw36WA3L9VLeaAs%2FbWHDUZeRdPA5jInZ37Cp915a0XQooHJRKuMsG6Ejxb55M%2Fw500MObP8YqQPfL5bFhlZpe0ynkx724gLVpTwYizfXp8gYqKm71j%2FPsMweugFmyUPBkSXpKnxcgzc5tdt8zhV%2BVpkGf76TdjNe9Wufa1lSdPaa%2FqOaDN%2BQRdge1X1qyqdH%2B2%2FnQohZp%2FW&X-Amz-Signature=7a07219f537fb647f11f4b316b27098bf61758ded5f22a93fa36eaae20fdf7d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664NFRYE2W%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T070324Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIDn3h4mkY2exzy%2FvEcnuN3VJNWUqvwhR%2Fp4XgiaTPkznAiEA6IKsqNxEBY%2FxkMwof78QvD5fZ3NTU%2FFpTkEdJ5kKEYoq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDAUVX2LAsRF5jiTsDCrcAzDv0AGhsA8yGgzyTBLvNB48RULN%2FcNQsLbtzOA4IfwAlSv632I%2BLo%2B9XjoM3vCsUZkDUkrOW4V7rqM5tlAQyYFksnAdfUMCEw8Qra7%2BWlrfetG6pV82rAw4CXRqlYNBAR95a7RHvm03liYBlrZI%2Bu4sDEaTMWG%2ByGio5x6ZvblsKGAL2Cvg7ZwGCmcrGKPPNfWQ54X%2B67gXD%2Fq%2Bp8NyD30aYipHLCsxW26ATGbPeuDGPKf9h%2BBrjccZjr%2Fbk9%2Fs44Sw%2BFUHztBcxe1uPuWQaHQiCLJ0UHlGEYLY9m5fwz9NBxnAppTpAB7oVNYLU5LmLEffqThK8a%2FprPrVSCizkJUna%2Bfnv0%2BSYmSywe7%2FFDEK3fHjzzKI9e4P8sm1ZWs%2FqdCKQja%2Bd7%2B9qT9oPM0ScvLtnOIMAMiadjnqSBxXLHAMPc4iO7nIcO8rWMLwSq39iC9cK6soKHxmsDWsdLb6BvW5L%2FLpb04Yxmn%2FaAaYGZh9aYS5wKRkDAlzubEe3kSQo7JZVVHFq0NjA0GpNweR%2F1II7Sc%2FzeuDlyAhHgQyK40HC7E3HVQpTBm%2BlGRTSqXny27wCBH%2BOAF%2BDUyquumvWasMbpXj5193gIQVTWpmybsteNtHIUpUs%2BWPrWaCMMTKxMkGOqUBwdMaTIEyartcy1ZsOaw36WA3L9VLeaAs%2FbWHDUZeRdPA5jInZ37Cp915a0XQooHJRKuMsG6Ejxb55M%2Fw500MObP8YqQPfL5bFhlZpe0ynkx724gLVpTwYizfXp8gYqKm71j%2FPsMweugFmyUPBkSXpKnxcgzc5tdt8zhV%2BVpkGf76TdjNe9Wufa1lSdPaa%2FqOaDN%2BQRdge1X1qyqdH%2B2%2FnQohZp%2FW&X-Amz-Signature=4520bfb2d9fbe282cb552bed4fe209e070b517389804c0811b398076b1fdf754&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
