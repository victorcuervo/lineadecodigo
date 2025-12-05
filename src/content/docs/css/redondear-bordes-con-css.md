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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2JUXIM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH8vC7iGRB5x%2Bg6bVMOLo%2Be0V8usdkrr3B4uTqooIixAIhANotIfpga%2FX2y9geFrYxGyIjw%2F9EcBIQi2zYKC5XQbz8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgyeTfcE5g5rRqCH3o4q3ANnwX%2F7KLDY8WwRWUJmhXkw4OCW8nod1VuXVSuWXssyjAqFxmoFmnAnsomR1n4c8RFYamlLGFdKZXYP1kmaDNTdmokNg66jHVp8e4zM%2FxHoBK1UDGT4%2F0jzjCjYexnMBFefZFnoDDZKHCATxYITZWxonoYz4MCj102ZxS3YFxc0gR19rrXKbzK80XAQmNVRZ8Uq02ncBPdNJQ7XQqqQ8rWceRQmuMt2H55sn8BOhkDkrsSw%2BVtaqwk4dvk%2FnekYNaPtt9BYzzIfQ1RCx%2BvWYODb5V1pCUpgYBmykx3%2FTJHj1RsxoRckfNlr%2BRWFDpS%2Bml9W0DLjVxuPWiD%2FZ8tsmeOPO1unh1lHP16IUr%2FiqPWnyeWqfxcNFimj76ECPp6KYmZlhv%2B8itnZGhs1hOshKbxYCK%2Bp67StaIt4WREjlibaL3K0%2BC4F1I6QNqOy77iHBd7tvttgUX6NhUVL531aUeODJsj2GjX21D%2Bm1FLvti0WpAG%2FQOVIg0iEeeOgMPc3v2zCHh97sbY7o1PzsoGHkk5sMHJ1SupTTDm9eWK56LisqWE2MQpkSs%2FA0o3X6Ci3spv9k7BRmm%2BeQedUQ0bWWmFyjluS8zybLJntZRGJTMz8yMdHcClM%2BLcc8jHiFzCLysvJBjqkAadhsrTutEHpT%2FCX2Byj0NFpVRsRIsIHxQmtV66m3%2Fwt3iGau2SbYU6Crlt0O%2BtwfnArm4LS86Wf2N47Ee8zXC6GMXQDNpGGzihU3tUg33IA4eQl%2BJnVk81g5ZaawTOu3CrLJT5zpWshX24hqDtpLd4m9%2F03dsacNGAsquxqDpmOnH8NiFicURFBWZ3ZuqBsIJsncuuKCKIyV0GtykNMoue3pmwx&X-Amz-Signature=10b45899b92d891885c626529d5153f87667858fb3152476553aed03c60b02e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VX2JUXIM%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T170957Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCH8vC7iGRB5x%2Bg6bVMOLo%2Be0V8usdkrr3B4uTqooIixAIhANotIfpga%2FX2y9geFrYxGyIjw%2F9EcBIQi2zYKC5XQbz8Kv8DCF8QABoMNjM3NDIzMTgzODA1IgyeTfcE5g5rRqCH3o4q3ANnwX%2F7KLDY8WwRWUJmhXkw4OCW8nod1VuXVSuWXssyjAqFxmoFmnAnsomR1n4c8RFYamlLGFdKZXYP1kmaDNTdmokNg66jHVp8e4zM%2FxHoBK1UDGT4%2F0jzjCjYexnMBFefZFnoDDZKHCATxYITZWxonoYz4MCj102ZxS3YFxc0gR19rrXKbzK80XAQmNVRZ8Uq02ncBPdNJQ7XQqqQ8rWceRQmuMt2H55sn8BOhkDkrsSw%2BVtaqwk4dvk%2FnekYNaPtt9BYzzIfQ1RCx%2BvWYODb5V1pCUpgYBmykx3%2FTJHj1RsxoRckfNlr%2BRWFDpS%2Bml9W0DLjVxuPWiD%2FZ8tsmeOPO1unh1lHP16IUr%2FiqPWnyeWqfxcNFimj76ECPp6KYmZlhv%2B8itnZGhs1hOshKbxYCK%2Bp67StaIt4WREjlibaL3K0%2BC4F1I6QNqOy77iHBd7tvttgUX6NhUVL531aUeODJsj2GjX21D%2Bm1FLvti0WpAG%2FQOVIg0iEeeOgMPc3v2zCHh97sbY7o1PzsoGHkk5sMHJ1SupTTDm9eWK56LisqWE2MQpkSs%2FA0o3X6Ci3spv9k7BRmm%2BeQedUQ0bWWmFyjluS8zybLJntZRGJTMz8yMdHcClM%2BLcc8jHiFzCLysvJBjqkAadhsrTutEHpT%2FCX2Byj0NFpVRsRIsIHxQmtV66m3%2Fwt3iGau2SbYU6Crlt0O%2BtwfnArm4LS86Wf2N47Ee8zXC6GMXQDNpGGzihU3tUg33IA4eQl%2BJnVk81g5ZaawTOu3CrLJT5zpWshX24hqDtpLd4m9%2F03dsacNGAsquxqDpmOnH8NiFicURFBWZ3ZuqBsIJsncuuKCKIyV0GtykNMoue3pmwx&X-Amz-Signature=20e585e9395551ee38a4b8c9d420f3e477de41917f97229d8e10d27018dd21ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
