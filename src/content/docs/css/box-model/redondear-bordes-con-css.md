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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMAFOZR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSX7B%2Fc9K461I%2FFcSd8APTWjl5h%2BylYMcT4rlQMB6tZwIgD2sb4gxxZGXUvr%2BpZ4EKMH2oIuuFah1ZCJmmYxemYAgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDO%2BnzWglGkGUR1R5FyrcA4Hg1%2FHGCce81DisD4ipvNwkFpDLd5yhh%2FuX4LhJIq0NHS%2F9XXT7wfk7wyFaq36uLMFYkPXk6LdIf6Rs1d2b31OY4n6B52FdN%2F6z4lXJYhJzbVICuGvAKuM6f02wGV0T69PTGyafk0VFaBD9qf3QJLsK7R5kGrsBT57I5Ysrsp4vHmXatNBU7f8MuOSebWkWY4zDlCfWUGUY9K3dZEPgxDRDL1lg%2F7784NpMEJIq8SYs8hoEOBlkpYNIYLsbE2DnauPpncklRV%2B02g%2B%2Fj4rJiW%2BfDMiYB9sE5mn9K9S9pK%2FRw7mhlXOyBF14R6U%2BevNwWiJneQYTvIhLNgRhhrT%2FCIWHft8fM2Lv%2Fq5G5swz3zl2AY0XRVMNTlT0RGqDcXnYWtNQNpZW17M5nLf4ielUi5vDHi9OKinadxutUTctts2FMon%2BIvUJ3P7stCpa39tojV85wiwGgoPIdNnmEDxxwHhDKPk27zO4kyxZK%2FhBLhXn%2BK9Fw1SjUrfWzEr1azXx4fO0nNW5oxG5DxIWEoMs3dIIYa4Pqa1%2FTWVWg4UdySaOX501paGqxhsQBouQqTnSuIJh4ECBC91%2FFYgQt4rqlMFdCX6smES2leGXvRW0IMobBsvW7On0WCbx%2Bsa8MK%2B4icoGOqUBdjLBWnD6PG0XWszC9%2FGsIS%2FKgt3Wmr%2FyI5Ytz9seveNFmMicUKSLMA0VTBokOYAI3zn24w0NBnz8eZ6eAd2%2FZFkZAjNv2N2DoTjHQCX15K8JEjdkrq4VOkFdf6GK5A25VyL6BHZu6SNlqorjlxWJr2HiuyIrz8wHmVm2mKK32GbmzKYQAIX7AQtKWaHBQSmWGi25Wrx%2Fn9%2FCJLfTeleNUNlB5OKP&X-Amz-Signature=6fd9df244a19881c8322fa6f7cce72799d8106f9ecbb637c4f730509198ad41a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666EMAFOZR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073501Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDSX7B%2Fc9K461I%2FFcSd8APTWjl5h%2BylYMcT4rlQMB6tZwIgD2sb4gxxZGXUvr%2BpZ4EKMH2oIuuFah1ZCJmmYxemYAgq%2FwMIeRAAGgw2Mzc0MjMxODM4MDUiDO%2BnzWglGkGUR1R5FyrcA4Hg1%2FHGCce81DisD4ipvNwkFpDLd5yhh%2FuX4LhJIq0NHS%2F9XXT7wfk7wyFaq36uLMFYkPXk6LdIf6Rs1d2b31OY4n6B52FdN%2F6z4lXJYhJzbVICuGvAKuM6f02wGV0T69PTGyafk0VFaBD9qf3QJLsK7R5kGrsBT57I5Ysrsp4vHmXatNBU7f8MuOSebWkWY4zDlCfWUGUY9K3dZEPgxDRDL1lg%2F7784NpMEJIq8SYs8hoEOBlkpYNIYLsbE2DnauPpncklRV%2B02g%2B%2Fj4rJiW%2BfDMiYB9sE5mn9K9S9pK%2FRw7mhlXOyBF14R6U%2BevNwWiJneQYTvIhLNgRhhrT%2FCIWHft8fM2Lv%2Fq5G5swz3zl2AY0XRVMNTlT0RGqDcXnYWtNQNpZW17M5nLf4ielUi5vDHi9OKinadxutUTctts2FMon%2BIvUJ3P7stCpa39tojV85wiwGgoPIdNnmEDxxwHhDKPk27zO4kyxZK%2FhBLhXn%2BK9Fw1SjUrfWzEr1azXx4fO0nNW5oxG5DxIWEoMs3dIIYa4Pqa1%2FTWVWg4UdySaOX501paGqxhsQBouQqTnSuIJh4ECBC91%2FFYgQt4rqlMFdCX6smES2leGXvRW0IMobBsvW7On0WCbx%2Bsa8MK%2B4icoGOqUBdjLBWnD6PG0XWszC9%2FGsIS%2FKgt3Wmr%2FyI5Ytz9seveNFmMicUKSLMA0VTBokOYAI3zn24w0NBnz8eZ6eAd2%2FZFkZAjNv2N2DoTjHQCX15K8JEjdkrq4VOkFdf6GK5A25VyL6BHZu6SNlqorjlxWJr2HiuyIrz8wHmVm2mKK32GbmzKYQAIX7AQtKWaHBQSmWGi25Wrx%2Fn9%2FCJLfTeleNUNlB5OKP&X-Amz-Signature=10775b9bbf400ebe198f9fc672301ce5183533ad1fb6212f2753794ad6bcf52e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
