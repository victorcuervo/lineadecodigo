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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL3L6UQJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHNApujdA9yMZxhfmRUqoybwedUMf3ju%2Br8xoum%2BJSoeAiEA%2FN1MUVKeFcQLcV%2BqQNO9sWNp4EGlmFaLEvOQt4n%2FxLEq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKyMQz1%2B7iSAr%2FpT%2BCrcA0ycpt%2Fddp1q19ZRLg1oYxUsGDyPC4leDIN%2BRkKhYMJbFNiOdRb%2B9Y1O7EFq8CmpXbNHaQoWjfNiG9vt4Rr0OQw6pUKWGtBaNGrDZ2y%2Fb9BJAa8V2Ec4DbWzOKTrrJ3T1nxMz2%2BJE7Wd9e7PTvhphuT1N697wvIa05pq8%2BeWDIg61G0OINFSlPaf%2F4d5sSZFY1lIr3p6Gu6Kt3vIEN6iQpWS%2FwIN%2Fv0HvLxCya%2F7LKqJ1EehDqkZlMdjL7dSAbMXIClvs3zByEsNP9QAYWy0OT4tc6pnd9LLbHfO1v51AyQaurh1haYPtBA9zL1CccvBuzuxHxjmzY0OSOTWT6RasrFS2k6sPzNe8evE64XoAzxn4sNVCZ23zKaM0ewMkYhsETmMuC7ycwSv7aMy9LoF6hU76nEMQ3T9IK074HW4Egm8I1i5Yzky9UcK154XXZL9zyJdfxhPTgoJ10jAOIE%2B0t7VWxFfiRTDsrVk34Borw3P4G22%2FPR3j5Q7VeeQW%2BD47dJM3FWcns2JEVV2NpELRdB1%2Bfs2urdQdd%2BkpX%2FHSgNgYunN5M8Ld5FBvcvBGJK50XDMCh8QAoZUh2GcYn5knRLdCIgp%2FXnWxToGgQHcq8i%2F4mr4U5NuiyXy7QhoMNu1w8kGOqUBU6a5zuBYkKIoQVX%2BSZqaCamRGk5dm56HTvmyn4%2FV8U9tXMYxL%2BRZaArtaDXyjeSEcbPK1JIslCSMBXYbKyoLaORQfUcYcpZIKoaAKnvUbiekF4Mo5msc2cyMW4SsKlfqnwKSbTNF5gwQURQYu0UIPrCIhOqfK3kbz1vV7Hw0iFqcatB%2BhlR2eGp8UvaDGOcZN001JsTGrS3d%2FRZozwM9yO0NEesB&X-Amz-Signature=4ecd2750d69b5844ed2b2ecd3031343b4b9a94d8ff3d8d8621940166c421d8f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WL3L6UQJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010044Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJHMEUCIHNApujdA9yMZxhfmRUqoybwedUMf3ju%2Br8xoum%2BJSoeAiEA%2FN1MUVKeFcQLcV%2BqQNO9sWNp4EGlmFaLEvOQt4n%2FxLEq%2FwMIOhAAGgw2Mzc0MjMxODM4MDUiDKyMQz1%2B7iSAr%2FpT%2BCrcA0ycpt%2Fddp1q19ZRLg1oYxUsGDyPC4leDIN%2BRkKhYMJbFNiOdRb%2B9Y1O7EFq8CmpXbNHaQoWjfNiG9vt4Rr0OQw6pUKWGtBaNGrDZ2y%2Fb9BJAa8V2Ec4DbWzOKTrrJ3T1nxMz2%2BJE7Wd9e7PTvhphuT1N697wvIa05pq8%2BeWDIg61G0OINFSlPaf%2F4d5sSZFY1lIr3p6Gu6Kt3vIEN6iQpWS%2FwIN%2Fv0HvLxCya%2F7LKqJ1EehDqkZlMdjL7dSAbMXIClvs3zByEsNP9QAYWy0OT4tc6pnd9LLbHfO1v51AyQaurh1haYPtBA9zL1CccvBuzuxHxjmzY0OSOTWT6RasrFS2k6sPzNe8evE64XoAzxn4sNVCZ23zKaM0ewMkYhsETmMuC7ycwSv7aMy9LoF6hU76nEMQ3T9IK074HW4Egm8I1i5Yzky9UcK154XXZL9zyJdfxhPTgoJ10jAOIE%2B0t7VWxFfiRTDsrVk34Borw3P4G22%2FPR3j5Q7VeeQW%2BD47dJM3FWcns2JEVV2NpELRdB1%2Bfs2urdQdd%2BkpX%2FHSgNgYunN5M8Ld5FBvcvBGJK50XDMCh8QAoZUh2GcYn5knRLdCIgp%2FXnWxToGgQHcq8i%2F4mr4U5NuiyXy7QhoMNu1w8kGOqUBU6a5zuBYkKIoQVX%2BSZqaCamRGk5dm56HTvmyn4%2FV8U9tXMYxL%2BRZaArtaDXyjeSEcbPK1JIslCSMBXYbKyoLaORQfUcYcpZIKoaAKnvUbiekF4Mo5msc2cyMW4SsKlfqnwKSbTNF5gwQURQYu0UIPrCIhOqfK3kbz1vV7Hw0iFqcatB%2BhlR2eGp8UvaDGOcZN001JsTGrS3d%2FRZozwM9yO0NEesB&X-Amz-Signature=798878d90c4f8a970ed8c72581fdc1883b446c69f78f7bbb7f778f5e84f9f0d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
