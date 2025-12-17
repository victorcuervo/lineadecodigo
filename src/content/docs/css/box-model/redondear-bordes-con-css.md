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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSCN4HA5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0cOmQySrc09mNMUYPOvPVDsftmYTVSAD%2Bflg9TVNEOAiEAgPCmxnXD4eEFjmkAVjkXZL0REofXF6F98iAV%2BslOMj0q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAQCXVYS6fXfzlpvaircAz6mBp%2FvQK04yMqHdBf5TbXxvhFBu3RhAC6Yb3AKCE%2FofoS0a8bsuQwTpDkzEwLlQsvwpCgD0z%2FISc3r6t5dLJaSBUIWia%2BmAWPxdCaRmbfoXfoV%2F9G1dJFIl56XBW5OsIAOZ4bkkOsYasvtqvduLLZjgj0H%2FXTidyLsqXilnZg01PLIrEgCaY3VbApmFw7LLpNBn4QzULKNY8zyxhKyidg9G7WFWRrddrl%2BIYChq7I%2BuHXvG3lCkupTxCtoXUjxxICS4wMdlsaeF40Zhb4yg%2B5k2c%2Fl%2Bdes6d9FHS6JlG5xCdP5SwC0NquoIBoTQdxk3yuN8mbG7fruUBW0PGLuJx6AHlHKrr4NUQpRWWmKk6R%2F7YAQaKIBnlOSDbw68tGlmO%2B0PgjFJAHXrxt5bsUenBwIYg76MhqNT17uucXqkHCHMVVQKGob0nkoZYb6hh%2Bp9ObJIh%2BxTL%2BlEuD1wuRhnp9PBw4%2FMvmizLwvVm%2F1zGJMq4aN0gYioyw%2BxZNpx%2FTqcY4poadj4qR9Y8RaVR%2FXDCxSDAn%2BG01qmwDt86Nl2%2BLOzzQrHgd%2BsSLv8%2FY3ActjgLXx%2F3Djcmc92UgiArpcM5YhogMJoGFSQvO0fOdv%2BzBwGmUf8MXyUonqUt3jMIq3icoGOqUBIeKp0wW64vwp%2FrTBQ4ZvQMa61DRvmqHhA%2FePr5KfNPN9ihmPXELLutSH%2BJ2%2FmrgyHi9KZwyntR8z7JMq%2ByCZ7H%2FoJ6RH6qYt8Xqugd%2BUZ7nEf6%2Feot7M0MSpbOILrqqJg6twA04XRwXWOt3%2FwN1C83KGm5CFqIYAe5lTAXozMU38UUliT9fMgtpjQ5vlpkatiiSCnz9GKG0XNqCVQ5quqm0sPoWE&X-Amz-Signature=b28df7d884513cb4cd32643f42496cb24d178327977c0326d3e22c632ce0b97f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SSCN4HA5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T080249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIG0cOmQySrc09mNMUYPOvPVDsftmYTVSAD%2Bflg9TVNEOAiEAgPCmxnXD4eEFjmkAVjkXZL0REofXF6F98iAV%2BslOMj0q%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDAQCXVYS6fXfzlpvaircAz6mBp%2FvQK04yMqHdBf5TbXxvhFBu3RhAC6Yb3AKCE%2FofoS0a8bsuQwTpDkzEwLlQsvwpCgD0z%2FISc3r6t5dLJaSBUIWia%2BmAWPxdCaRmbfoXfoV%2F9G1dJFIl56XBW5OsIAOZ4bkkOsYasvtqvduLLZjgj0H%2FXTidyLsqXilnZg01PLIrEgCaY3VbApmFw7LLpNBn4QzULKNY8zyxhKyidg9G7WFWRrddrl%2BIYChq7I%2BuHXvG3lCkupTxCtoXUjxxICS4wMdlsaeF40Zhb4yg%2B5k2c%2Fl%2Bdes6d9FHS6JlG5xCdP5SwC0NquoIBoTQdxk3yuN8mbG7fruUBW0PGLuJx6AHlHKrr4NUQpRWWmKk6R%2F7YAQaKIBnlOSDbw68tGlmO%2B0PgjFJAHXrxt5bsUenBwIYg76MhqNT17uucXqkHCHMVVQKGob0nkoZYb6hh%2Bp9ObJIh%2BxTL%2BlEuD1wuRhnp9PBw4%2FMvmizLwvVm%2F1zGJMq4aN0gYioyw%2BxZNpx%2FTqcY4poadj4qR9Y8RaVR%2FXDCxSDAn%2BG01qmwDt86Nl2%2BLOzzQrHgd%2BsSLv8%2FY3ActjgLXx%2F3Djcmc92UgiArpcM5YhogMJoGFSQvO0fOdv%2BzBwGmUf8MXyUonqUt3jMIq3icoGOqUBIeKp0wW64vwp%2FrTBQ4ZvQMa61DRvmqHhA%2FePr5KfNPN9ihmPXELLutSH%2BJ2%2FmrgyHi9KZwyntR8z7JMq%2ByCZ7H%2FoJ6RH6qYt8Xqugd%2BUZ7nEf6%2Feot7M0MSpbOILrqqJg6twA04XRwXWOt3%2FwN1C83KGm5CFqIYAe5lTAXozMU38UUliT9fMgtpjQ5vlpkatiiSCnz9GKG0XNqCVQ5quqm0sPoWE&X-Amz-Signature=990f0f5e6e432819e0ad04db9e3d5949c4638e0817ab46a47e9136a776027b48&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
