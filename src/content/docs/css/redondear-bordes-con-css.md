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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4SEN55C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQXMvKQfmHA9iajpORrFxVaXYJnn4OQOFY1n0XIkMAFgIhAOXnq%2B1ZHwCJyIs19%2FdiPTOMTk2u%2F6Po7SNVK546ijZ0Kv8DCFUQABoMNjM3NDIzMTgzODA1IgypBxfG%2BjBYjEJ%2FHzcq3APVJbOYnelFtbfbq5vR0a04XFBDZCPVd3THsDlepBg7fFduP6cfxLGT3ndlrMMD1XWPedCjhjealHEGTmt2JA1%2BNm5x9lhYTBFC9ipa6JvU5HAoPVLNp5sTzpungoP%2F5cXCbHwh%2BhMfR%2B4bxOD%2FlwyTcJHooNpd6sjXk0ol500aSrIsS8kxWktEGXyC%2Br%2FBFGflVzyfHQt1nnCZY0GHvQaSuPg4wFk1A7UXw5N7hK4ISISl5A7gqQrKbkkt3fWUOV0O48Hapi5%2FMcjfrt8is%2F1mQ5PlOI3UYjKrlPfhiRh21xj%2FNJNQgMbWyuRBmUphIMWbC2I%2BPoKYU1yBwZ8l8FwuTg89WldnvDOaRoczn6Y95VAYZPTQF3aK05Q7qkj0c0qyCtf8ge2clcl3CN%2BuMCENk37N86t1bJBLgIeMfuVScS3L10R13A1PINGRRO8mfMjQteIhp0GCyUuEc2S6xrhvGV9SDW%2F0RY6tGuRauV6xpqhtr2BCaQ%2B1JYKp1sN8R4Y4FSCOl0%2BVuPBcgPMjpRqla4FZfDV77oDSTTF2L8kpJZg%2BOMWhpwG0%2Bq43F%2F2pdcA%2FT%2Bx%2F5EBV8zwY3hzk60DZDC99dqK6Mt3wHLYNYlVw2oZSuhSyZ1rDf%2Bb7bDCxscnJBjqkARdIKIH3QQml5PqqoNbIawJ9orKjWJtbDX1LsY40e88yiIVcPPn04g6BF%2F8%2F%2BvB0cCYAcFPI9X7XAyoljqsx4ym7c4yyfozcK1qpj5F0EyVRYhBBmcVsnKGuLTRzx%2B5PsfGtK6w3DOAbxlTE2ckaSqc9Zi0d8sS7HnvSCwOEmIYB1ylNTqXRbWbIstLkzDouOCBzFw4TBY3qFYA5%2BkjisBMrBqQ9&X-Amz-Signature=8f7aff76bbfd2fbcfb2f50fda3f829c8795d62c4772992529254aac22e62c82f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4SEN55C%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T075431Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCQXMvKQfmHA9iajpORrFxVaXYJnn4OQOFY1n0XIkMAFgIhAOXnq%2B1ZHwCJyIs19%2FdiPTOMTk2u%2F6Po7SNVK546ijZ0Kv8DCFUQABoMNjM3NDIzMTgzODA1IgypBxfG%2BjBYjEJ%2FHzcq3APVJbOYnelFtbfbq5vR0a04XFBDZCPVd3THsDlepBg7fFduP6cfxLGT3ndlrMMD1XWPedCjhjealHEGTmt2JA1%2BNm5x9lhYTBFC9ipa6JvU5HAoPVLNp5sTzpungoP%2F5cXCbHwh%2BhMfR%2B4bxOD%2FlwyTcJHooNpd6sjXk0ol500aSrIsS8kxWktEGXyC%2Br%2FBFGflVzyfHQt1nnCZY0GHvQaSuPg4wFk1A7UXw5N7hK4ISISl5A7gqQrKbkkt3fWUOV0O48Hapi5%2FMcjfrt8is%2F1mQ5PlOI3UYjKrlPfhiRh21xj%2FNJNQgMbWyuRBmUphIMWbC2I%2BPoKYU1yBwZ8l8FwuTg89WldnvDOaRoczn6Y95VAYZPTQF3aK05Q7qkj0c0qyCtf8ge2clcl3CN%2BuMCENk37N86t1bJBLgIeMfuVScS3L10R13A1PINGRRO8mfMjQteIhp0GCyUuEc2S6xrhvGV9SDW%2F0RY6tGuRauV6xpqhtr2BCaQ%2B1JYKp1sN8R4Y4FSCOl0%2BVuPBcgPMjpRqla4FZfDV77oDSTTF2L8kpJZg%2BOMWhpwG0%2Bq43F%2F2pdcA%2FT%2Bx%2F5EBV8zwY3hzk60DZDC99dqK6Mt3wHLYNYlVw2oZSuhSyZ1rDf%2Bb7bDCxscnJBjqkARdIKIH3QQml5PqqoNbIawJ9orKjWJtbDX1LsY40e88yiIVcPPn04g6BF%2F8%2F%2BvB0cCYAcFPI9X7XAyoljqsx4ym7c4yyfozcK1qpj5F0EyVRYhBBmcVsnKGuLTRzx%2B5PsfGtK6w3DOAbxlTE2ckaSqc9Zi0d8sS7HnvSCwOEmIYB1ylNTqXRbWbIstLkzDouOCBzFw4TBY3qFYA5%2BkjisBMrBqQ9&X-Amz-Signature=c9415094977b8ae07a8f7673e28b1d0d359c8f51dea6cafcc0ca02d94cefe362&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
