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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y7OCSFS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByZ6BAEHpGvk1olRz274S998T%2Fcrw1CKWWIRNdMJ1R8AiAXBaNGB%2Bd3pevEThr19rdgLpD%2Fj7YeT1v24%2B8iySMIzir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMHrNfDfj9IJg1QrxdKtwD%2B7WPtYkCuNvNkBm5rOOu%2FGaZ7UD6tys3yp9U1wmXfqy4ZzkKP8tP1qMvlLeFlTbFBThFF0xtEuphMgoMx%2BskCw2a%2F5JPaQMUOYqmgZNUmDnyH%2Fe4ioXSQir5sivwlp99DqWcQelgiK9mGj1%2BgY8oeamEomIl19tXwqVU6%2BSt2AevhUMsl%2BFVt%2FyiIKqQMtG7tST4Zv%2F1LK2WJVuxDqKL48I71k4SIqFlLktQqFzHkRjzO%2FkwxEL%2F7IMM3oe1YWvjVJKz%2B%2FeqawNB4G0cP2VytlMq0HMOei8RwNQ1BAQz5HgJx%2B0t2dth6F0YuMSm9QgryR%2Byay73rtVzIRnWjEtj%2BMYaNEa8iyB5VfduxQOHKaSTRDlx%2FPlxpFB6wjj%2BPCDChm%2FY2ITWk2etMO2%2B6mPZzEfn6%2BVwwrgUGBPCCQXCKW%2BoDVGKIplktvd1p5B%2FEjXs4sdWwR9Euh0h9RjflSzLNhV0FAOq41Se%2B%2FSl3B1yqS7mPvLO8hWxmOQtutbL85V%2FS2ul%2Fcmys%2BDV5x7ngiJv3qqyrmtry7wKQ2bgMSiHDZlz0cuGSRhJZ3D8Sr00CzKa%2B37UtxKld0RYUnlm%2BPFpmOZl%2BE4xk70Dhkmiau8QAPsDyDfUpyYDugu6NOIw9IvIyQY6pgGONaR14JzYKWjENJ%2FxsoPDaGnRVhpV%2BIZVE8%2FcQ%2F5cvGefsznkyz2W5Gk2oBTdjxopsyei0Yk%2FF9GPOQMz98b6738mkHVHIJbwd%2FJHEIGX7izSWKDUvK4Wiz9fn4zdaPN7wDGhum5c%2BqdFohf1AOb9eNmrlvZGn7YFbsdfPsokWBI14hb4w8tWumigToJZpCDIevlDw1UMvFfL6155W4%2FdZ2594IG7&X-Amz-Signature=e820fbca160cbd624610ae07e4a1939a5f14c6fb72ec8d4b5744f7792e57e72d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Y7OCSFS%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T001958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIByZ6BAEHpGvk1olRz274S998T%2Fcrw1CKWWIRNdMJ1R8AiAXBaNGB%2Bd3pevEThr19rdgLpD%2Fj7YeT1v24%2B8iySMIzir%2FAwhPEAAaDDYzNzQyMzE4MzgwNSIMHrNfDfj9IJg1QrxdKtwD%2B7WPtYkCuNvNkBm5rOOu%2FGaZ7UD6tys3yp9U1wmXfqy4ZzkKP8tP1qMvlLeFlTbFBThFF0xtEuphMgoMx%2BskCw2a%2F5JPaQMUOYqmgZNUmDnyH%2Fe4ioXSQir5sivwlp99DqWcQelgiK9mGj1%2BgY8oeamEomIl19tXwqVU6%2BSt2AevhUMsl%2BFVt%2FyiIKqQMtG7tST4Zv%2F1LK2WJVuxDqKL48I71k4SIqFlLktQqFzHkRjzO%2FkwxEL%2F7IMM3oe1YWvjVJKz%2B%2FeqawNB4G0cP2VytlMq0HMOei8RwNQ1BAQz5HgJx%2B0t2dth6F0YuMSm9QgryR%2Byay73rtVzIRnWjEtj%2BMYaNEa8iyB5VfduxQOHKaSTRDlx%2FPlxpFB6wjj%2BPCDChm%2FY2ITWk2etMO2%2B6mPZzEfn6%2BVwwrgUGBPCCQXCKW%2BoDVGKIplktvd1p5B%2FEjXs4sdWwR9Euh0h9RjflSzLNhV0FAOq41Se%2B%2FSl3B1yqS7mPvLO8hWxmOQtutbL85V%2FS2ul%2Fcmys%2BDV5x7ngiJv3qqyrmtry7wKQ2bgMSiHDZlz0cuGSRhJZ3D8Sr00CzKa%2B37UtxKld0RYUnlm%2BPFpmOZl%2BE4xk70Dhkmiau8QAPsDyDfUpyYDugu6NOIw9IvIyQY6pgGONaR14JzYKWjENJ%2FxsoPDaGnRVhpV%2BIZVE8%2FcQ%2F5cvGefsznkyz2W5Gk2oBTdjxopsyei0Yk%2FF9GPOQMz98b6738mkHVHIJbwd%2FJHEIGX7izSWKDUvK4Wiz9fn4zdaPN7wDGhum5c%2BqdFohf1AOb9eNmrlvZGn7YFbsdfPsokWBI14hb4w8tWumigToJZpCDIevlDw1UMvFfL6155W4%2FdZ2594IG7&X-Amz-Signature=940fdf00492d62275f37db2ed3ca028f536f9f23c122813617099e4ffb0137f2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
