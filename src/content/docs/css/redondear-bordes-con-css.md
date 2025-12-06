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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYGIXSK7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDob%2FMbtG17BkUBUIbNldpXk87MCK0lOTnDazOK6n1azAIgJ%2F66QSyZgnKORI2hMKwj1b4j5rx7P0VEEmnMeuxEC%2F0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIDdiNhqCv78YZ5WhircA21j9eZfugNZLLysNjTWugcACFM%2F95TM%2BRWEpCp3GKiXIVC%2FfCSgr30ZPQsTUH7l1n9w5G4kB6JulKcbdDFaFGDat9UXGRR2qiG6ofz1H4vSDvTWxpO%2FW%2BVkbTIdcS%2F1wNOmsRypqhI2sjlxXskxskEnjh1Y0f1Y6OGPdB3h6LkfGkzGJJlqbbhfASyK2lv5uaPTedW%2FFrDZKCM1JpbCNCbpksKt%2Bwq%2BsPFRlAbPOuZFrd%2Bkz%2FXQrlZD%2FSQ0wAv8peOsbEoF%2BZFG12HlwtauK4Yhw5hZvWICJzTaB7jcoXwk8NmA35oUwzZzrVMnftTThjw8rljsO9koOxnqoWl1Nd6Uu8hId%2FfSUAeKL52MuYw4nXbsL9YEyRDxmW58XZmQvSubA7WarfGiWEKASYzvBK3qzTHEKUcITtfMoRLzHRROICi7WUULJhaUy9RpmNU4NwZkF9tXi9amJChgS00lZSDiUuCco%2BwDaPQ4vdqXOUkvKseCaWNNKGRA6ks7P4jjunMvscBcbmsyxcVce2uNOCL8n%2BS%2FozBZKZDMmBbjNrU8B13VlkqqmMrcA3eh5yPT6qD9HzqJX03QR%2BqKUkk2oZY3S%2BqFv5s%2FE%2Frn3tNCNG%2BQc2u2ipiuuk3bqUYDMP68z8kGOqUBMmPu4VErk6A7L0va3pWWmJGSYn86ucmAbqi3oZVfPKzHznhVk4TbLvD437G1%2FkcX0UPN6Kv73IqGZHSZYbUDz0807naysx1k2oDktvWw3Im4ij5woTxaHFYmIOP4gwt88sgnBfh%2BKTI4lt01pO5%2BD%2BNy9RhhslrcRMgI%2FYo0RX9zyfqFqXFrAa4NfthYgqS3eiNPsdhX4iPFh%2BRRyBgYZSCXPwPS&X-Amz-Signature=0d597571715e8bff0e4c835c001dae865f37d264702669ad1af0b57d5d5c2610&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZYGIXSK7%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T083331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDob%2FMbtG17BkUBUIbNldpXk87MCK0lOTnDazOK6n1azAIgJ%2F66QSyZgnKORI2hMKwj1b4j5rx7P0VEEmnMeuxEC%2F0q%2FwMIcRAAGgw2Mzc0MjMxODM4MDUiDIDdiNhqCv78YZ5WhircA21j9eZfugNZLLysNjTWugcACFM%2F95TM%2BRWEpCp3GKiXIVC%2FfCSgr30ZPQsTUH7l1n9w5G4kB6JulKcbdDFaFGDat9UXGRR2qiG6ofz1H4vSDvTWxpO%2FW%2BVkbTIdcS%2F1wNOmsRypqhI2sjlxXskxskEnjh1Y0f1Y6OGPdB3h6LkfGkzGJJlqbbhfASyK2lv5uaPTedW%2FFrDZKCM1JpbCNCbpksKt%2Bwq%2BsPFRlAbPOuZFrd%2Bkz%2FXQrlZD%2FSQ0wAv8peOsbEoF%2BZFG12HlwtauK4Yhw5hZvWICJzTaB7jcoXwk8NmA35oUwzZzrVMnftTThjw8rljsO9koOxnqoWl1Nd6Uu8hId%2FfSUAeKL52MuYw4nXbsL9YEyRDxmW58XZmQvSubA7WarfGiWEKASYzvBK3qzTHEKUcITtfMoRLzHRROICi7WUULJhaUy9RpmNU4NwZkF9tXi9amJChgS00lZSDiUuCco%2BwDaPQ4vdqXOUkvKseCaWNNKGRA6ks7P4jjunMvscBcbmsyxcVce2uNOCL8n%2BS%2FozBZKZDMmBbjNrU8B13VlkqqmMrcA3eh5yPT6qD9HzqJX03QR%2BqKUkk2oZY3S%2BqFv5s%2FE%2Frn3tNCNG%2BQc2u2ipiuuk3bqUYDMP68z8kGOqUBMmPu4VErk6A7L0va3pWWmJGSYn86ucmAbqi3oZVfPKzHznhVk4TbLvD437G1%2FkcX0UPN6Kv73IqGZHSZYbUDz0807naysx1k2oDktvWw3Im4ij5woTxaHFYmIOP4gwt88sgnBfh%2BKTI4lt01pO5%2BD%2BNy9RhhslrcRMgI%2FYo0RX9zyfqFqXFrAa4NfthYgqS3eiNPsdhX4iPFh%2BRRyBgYZSCXPwPS&X-Amz-Signature=9c825e3fd7aed6abadca42fbf7a961c910cf5e331a9d9d820ef1424a478df3cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
