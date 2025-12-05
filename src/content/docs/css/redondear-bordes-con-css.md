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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JHKRSLD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrloVdKczEDqlSWrgLMinccKRDf4aGtMuON1hU6oZTdAiA%2BEWf%2Fct0iti55joS0JdgKIDdCz1RuX%2BbknkW981j%2Fsyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMmzYaxJArPy%2BpJGeUKtwDD7xZgJN9NuFffcAjx2yOMtCI1FrCmxzWswVKzXwn91vQay9h6Z53ZF4tHZtvhGbSlnOVII0z3uyf7JuldKqfttiq5iOqZIxt%2F8t2TlVcMazcZwzjEbIPeI2rM3fTEzHZGKonChWfeGgRaGMxtwCNQ%2FnBT%2FnWmCcKvlpDKtLQWx5u14K2LV9laNysnWoNUDEZo0h0j06dxBg3IMzLAxOoetA72%2FVn%2FHqfM%2FgtpSYXuWFnh6sdwFULwlxnVjrmwkiLGDJNOcc238lPC3jxHATOFc%2BS96j%2FiFAywg6275AjgabCEAcibxqh%2BQKqs1vzmh1pgtKC%2F8UmvcnyJ6LgNA7PvlnRauauOKXoY80P3jzWbIhmI7tRoB4sOwdwFZtxL9INfcChhBIRwOp7HIWiqvv9rhS3C0QomYb203cNL8q8Cvkn4yn4xtzWNdFaK%2FMrTCzUAsNFo36%2BsYq33bMDGo0Ka%2BMO6jFCuSxk99Vbbfdv1rao2Ro%2BgFbm8xBldghkNzpoQuoTyBflNCGJ08oAKw4W%2BXNFR4u8UbWNjGS0GKeFH89bCLEMDSBqvbKRZnkzi%2BVqOP7Rg4ToV%2F56obStqjc%2BC3KbGToHzkwycSOvps6vjj5Eokest8L7ejG1H%2F0wisvKyQY6pgFwzz9VP34W7bgoSIg3sKpwSrnmfDZFGbosl9UGg4ehikqpVHCWNi3XPI5M6unURzhjBzD3yAYgc6jlTYamgrBlbOpfI%2Bp5QchbZ4BTAqpVCWzQztBKewd0xSL7dlIvDMtVrRKXWmVpE0vmEClNHer69iSRUfzn8VjWSU5QYRcAWl2gsyrdj%2BRhP9083G%2B2xRwqOVRExYii61SbeW55vrm0%2BnXFjFeS&X-Amz-Signature=20cc8501176753d17715c2f4e0ded24307cc9d45d934c1d322be5ab213806164&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JHKRSLD%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T123254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFrloVdKczEDqlSWrgLMinccKRDf4aGtMuON1hU6oZTdAiA%2BEWf%2Fct0iti55joS0JdgKIDdCz1RuX%2BbknkW981j%2Fsyr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMmzYaxJArPy%2BpJGeUKtwDD7xZgJN9NuFffcAjx2yOMtCI1FrCmxzWswVKzXwn91vQay9h6Z53ZF4tHZtvhGbSlnOVII0z3uyf7JuldKqfttiq5iOqZIxt%2F8t2TlVcMazcZwzjEbIPeI2rM3fTEzHZGKonChWfeGgRaGMxtwCNQ%2FnBT%2FnWmCcKvlpDKtLQWx5u14K2LV9laNysnWoNUDEZo0h0j06dxBg3IMzLAxOoetA72%2FVn%2FHqfM%2FgtpSYXuWFnh6sdwFULwlxnVjrmwkiLGDJNOcc238lPC3jxHATOFc%2BS96j%2FiFAywg6275AjgabCEAcibxqh%2BQKqs1vzmh1pgtKC%2F8UmvcnyJ6LgNA7PvlnRauauOKXoY80P3jzWbIhmI7tRoB4sOwdwFZtxL9INfcChhBIRwOp7HIWiqvv9rhS3C0QomYb203cNL8q8Cvkn4yn4xtzWNdFaK%2FMrTCzUAsNFo36%2BsYq33bMDGo0Ka%2BMO6jFCuSxk99Vbbfdv1rao2Ro%2BgFbm8xBldghkNzpoQuoTyBflNCGJ08oAKw4W%2BXNFR4u8UbWNjGS0GKeFH89bCLEMDSBqvbKRZnkzi%2BVqOP7Rg4ToV%2F56obStqjc%2BC3KbGToHzkwycSOvps6vjj5Eokest8L7ejG1H%2F0wisvKyQY6pgFwzz9VP34W7bgoSIg3sKpwSrnmfDZFGbosl9UGg4ehikqpVHCWNi3XPI5M6unURzhjBzD3yAYgc6jlTYamgrBlbOpfI%2Bp5QchbZ4BTAqpVCWzQztBKewd0xSL7dlIvDMtVrRKXWmVpE0vmEClNHer69iSRUfzn8VjWSU5QYRcAWl2gsyrdj%2BRhP9083G%2B2xRwqOVRExYii61SbeW55vrm0%2BnXFjFeS&X-Amz-Signature=d81e23567fbfd29f396a42df032946c0b8ee52b562ef052bc8d376522491965a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
