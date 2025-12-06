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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665YCX4QJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040017Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCrJ0P0rBLM77X%2FHaFrOhMQlhbutTsJkYdbSX%2BS%2Fpo%2FQIhANsQobVmYOCViOH6s2u6iR71%2FPxqlfDzGxVcs0UXEqJCKv8DCG0QABoMNjM3NDIzMTgzODA1IgwTToBHk0r77P0lM80q3AM0A3RzKZZ%2BpHFVS4DG09NJW4siCnTmMxduHBUfmTIYZ1CL%2BxUyb%2FA8zs53a0s3EsF9OiwOlVB0IZwoVjRg8adoN%2FEUczGAOB%2FZtNGcjs4gz51sBj2t%2BFgZMZQCcizjZdI1VK8G6B9PhH5xuOVHrqExzJEfZZvH9evwe9Ywtd3jDhQn%2FYfxAC244u%2FZmvgIv5RAVBGGvjzoRZ8Kfbn8OB1SIio4jN7ulrZhHoVnTcueazm4uDmGKB1AvsNyDhG1tQX1WzKhKkl0Zm7dMd8eTajXNI5tAS3RR%2B7kzfLDSj9zeYp7G9V2BHWvaYDKBJCOHvL1Wg%2BQQ3agJfnST8QRwDsYpuVcX6U84MyE7DPHbU3%2F4Up4O33mmxDtdaz0tJK7vdbcaUmQKTW4%2BIs7ljpG%2BMsUDqcU0kPX%2BVfUBt7Jy%2FMcNMmD%2By8CGDogyRZe9tVrrlXFI13ObRPyJl4WF%2BE13gPDMR2nFljWibGmYk1pS8XBOO8R%2FREDDgJb%2FxLdjpAX6jYvCfkjtFsW66AM4H%2F4fXEEfZaY5nxxAUTGmHyLeMVmtHN%2FhbVwQfr23djE2EZZRzEOss9uyIhmYYOJxUzFp4cBTU4wi1V5eyLkIjJrUP4tH7Srl78XtFEzJomoGjCww87JBjqkASK5ZdClw5IJRGOP6eUxYIPFJU6aAYlRx6iaxBQZPeEmuQZHYxS%2BdWzLH%2BT7dWQ5w45qOMFk3P%2Bj4pwO2SU3j7%2BK5AHJudJBbDHLyVvAQt4UQXXc5zk%2FnZrVJvluHXstcqIqoCkOa5XdufJsES9mgXRvxWCJYOj0mNQCTKgn9ssIWeUpx%2Fi9%2FdVlzl8dXwV9MpeLf84Tk407HMBHmfLyAOID5IHk&X-Amz-Signature=40456fcc82ef13674c72f92010f904c8224de1522187d8699f2037ba86467eff&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46665YCX4QJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T040018Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCrJ0P0rBLM77X%2FHaFrOhMQlhbutTsJkYdbSX%2BS%2Fpo%2FQIhANsQobVmYOCViOH6s2u6iR71%2FPxqlfDzGxVcs0UXEqJCKv8DCG0QABoMNjM3NDIzMTgzODA1IgwTToBHk0r77P0lM80q3AM0A3RzKZZ%2BpHFVS4DG09NJW4siCnTmMxduHBUfmTIYZ1CL%2BxUyb%2FA8zs53a0s3EsF9OiwOlVB0IZwoVjRg8adoN%2FEUczGAOB%2FZtNGcjs4gz51sBj2t%2BFgZMZQCcizjZdI1VK8G6B9PhH5xuOVHrqExzJEfZZvH9evwe9Ywtd3jDhQn%2FYfxAC244u%2FZmvgIv5RAVBGGvjzoRZ8Kfbn8OB1SIio4jN7ulrZhHoVnTcueazm4uDmGKB1AvsNyDhG1tQX1WzKhKkl0Zm7dMd8eTajXNI5tAS3RR%2B7kzfLDSj9zeYp7G9V2BHWvaYDKBJCOHvL1Wg%2BQQ3agJfnST8QRwDsYpuVcX6U84MyE7DPHbU3%2F4Up4O33mmxDtdaz0tJK7vdbcaUmQKTW4%2BIs7ljpG%2BMsUDqcU0kPX%2BVfUBt7Jy%2FMcNMmD%2By8CGDogyRZe9tVrrlXFI13ObRPyJl4WF%2BE13gPDMR2nFljWibGmYk1pS8XBOO8R%2FREDDgJb%2FxLdjpAX6jYvCfkjtFsW66AM4H%2F4fXEEfZaY5nxxAUTGmHyLeMVmtHN%2FhbVwQfr23djE2EZZRzEOss9uyIhmYYOJxUzFp4cBTU4wi1V5eyLkIjJrUP4tH7Srl78XtFEzJomoGjCww87JBjqkASK5ZdClw5IJRGOP6eUxYIPFJU6aAYlRx6iaxBQZPeEmuQZHYxS%2BdWzLH%2BT7dWQ5w45qOMFk3P%2Bj4pwO2SU3j7%2BK5AHJudJBbDHLyVvAQt4UQXXc5zk%2FnZrVJvluHXstcqIqoCkOa5XdufJsES9mgXRvxWCJYOj0mNQCTKgn9ssIWeUpx%2Fi9%2FdVlzl8dXwV9MpeLf84Tk407HMBHmfLyAOID5IHk&X-Amz-Signature=250ee4f5018bb01944a8719e0078b4a4c52369b3515fa25c16004ad50bd725f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
