---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2025-12-17
slug: css/redondear-bordes-con-css
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPCAP2V7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA66jM98HFCEF3h9VmQ3cBkqOE46y%2F9pYqn7JWd0jfGmAiEAx5%2FhVb9tJcUANYCj3qhtDfY2AFJTevSnDTmPWjJAbCgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIwd8EAOCvO5CEfzSSrcA6g1EzriUWecVSQBChXx4cykehLYhpySGXNZTocbOKmFpDzZ4xskvBaNyz822HwCcZ9tK2tBFBX6S0Sv2gxO4Sw6kOiR49gbbMIKDevae%2Fi0aYE5P1Xfd%2BEcBA4rMwyieVhrGap%2FTQvXg%2FDXYHUCLe13ErDN%2BZ0pFbqqpyl2GLQmUVTR%2B%2B8FdPGjkou5pAHscqYp%2FSyHU%2B5Dx7xuxwa6RSdMkNv%2Bt%2BG3qyr6SWYEWGUbWFWJgK4uBS5CSUrq3mQQSLbJbshTOZQNJwCNdV1wJM56HTVEor2K2UQEtGvZtG4CAiCOK%2F%2B5t7qNmuJbwGxJ618qlnCGlr5KiFgC%2BJ36BBrRxFRLjZLvSGyO%2FgvfjF%2BMV05uNn8MOpIzdXVHoke2xRAzLF5xj6QAokvzT1%2BNcbiAVFQE%2FeP7C6%2BIniNRUz8N13xHsNznfTLEeOFYM476s6TzJJY6Cr7DpmneGuygkqIzrlLWQjH3sMVT%2B3CVfPn1OA7Hv99WQQmAmVR6tv691Ft7bqvusekoiFQJ5RZpg%2BhcQnVqD0o3DXsupPN6MUDa4%2FR5BAaNg5BSsPI8vEBo6loesBgJlW0%2FOJ16TY%2B0ax5XkMwkbyQhk6VoqRZGMwOcR58r8psqf11ueOj0MPbpiMoGOqUB4P1locbTPSTEjIhAl9trl%2FdmVJlKfvb7PodIdVgtkXvRyudCWD9BRdGX0T0ywNo0fu%2FyxdBTwcO%2FH2RlM5%2BOWrjolw3SWlP3hKr1ftP%2BIw9%2BTePrZjWds8AkMywp7QNpnssZwSJRZZJjt7hzyCzDQnax7ojTSaPZ%2BskLCAVGko2jDpkZHFHRhDG%2F7%2BGhdhMoxg7E33v4j%2FtutPN8FMy8shcBk1Zb&X-Amz-Signature=9d0e72b20ae4a0ae049460ec990ec7b18521a50eb97305ed43991815e0596474&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPCAP2V7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T053442Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA66jM98HFCEF3h9VmQ3cBkqOE46y%2F9pYqn7JWd0jfGmAiEAx5%2FhVb9tJcUANYCj3qhtDfY2AFJTevSnDTmPWjJAbCgq%2FwMIdhAAGgw2Mzc0MjMxODM4MDUiDIwd8EAOCvO5CEfzSSrcA6g1EzriUWecVSQBChXx4cykehLYhpySGXNZTocbOKmFpDzZ4xskvBaNyz822HwCcZ9tK2tBFBX6S0Sv2gxO4Sw6kOiR49gbbMIKDevae%2Fi0aYE5P1Xfd%2BEcBA4rMwyieVhrGap%2FTQvXg%2FDXYHUCLe13ErDN%2BZ0pFbqqpyl2GLQmUVTR%2B%2B8FdPGjkou5pAHscqYp%2FSyHU%2B5Dx7xuxwa6RSdMkNv%2Bt%2BG3qyr6SWYEWGUbWFWJgK4uBS5CSUrq3mQQSLbJbshTOZQNJwCNdV1wJM56HTVEor2K2UQEtGvZtG4CAiCOK%2F%2B5t7qNmuJbwGxJ618qlnCGlr5KiFgC%2BJ36BBrRxFRLjZLvSGyO%2FgvfjF%2BMV05uNn8MOpIzdXVHoke2xRAzLF5xj6QAokvzT1%2BNcbiAVFQE%2FeP7C6%2BIniNRUz8N13xHsNznfTLEeOFYM476s6TzJJY6Cr7DpmneGuygkqIzrlLWQjH3sMVT%2B3CVfPn1OA7Hv99WQQmAmVR6tv691Ft7bqvusekoiFQJ5RZpg%2BhcQnVqD0o3DXsupPN6MUDa4%2FR5BAaNg5BSsPI8vEBo6loesBgJlW0%2FOJ16TY%2B0ax5XkMwkbyQhk6VoqRZGMwOcR58r8psqf11ueOj0MPbpiMoGOqUB4P1locbTPSTEjIhAl9trl%2FdmVJlKfvb7PodIdVgtkXvRyudCWD9BRdGX0T0ywNo0fu%2FyxdBTwcO%2FH2RlM5%2BOWrjolw3SWlP3hKr1ftP%2BIw9%2BTePrZjWds8AkMywp7QNpnssZwSJRZZJjt7hzyCzDQnax7ojTSaPZ%2BskLCAVGko2jDpkZHFHRhDG%2F7%2BGhdhMoxg7E33v4j%2FtutPN8FMy8shcBk1Zb&X-Amz-Signature=e1dbc5af5d21a2eeb3eb35485211bdcc329a09f3042dd601875daebc18d1dd2b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Si queremos modificar los dos radios de todas las esquinas podemos utilizar la versión reducida de [`border-radius`](https://w3api.com/CSS/border-radius/):


```css
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


```css
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
