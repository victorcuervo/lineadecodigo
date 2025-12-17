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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W4P3WGT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgR%2B1GMCMH74s5y2ls83JRWIaGoAb51cdFlDthMUnghwIgL%2FqI7i2bw2qAMRCtzWS%2F7JFbNcDhVtNR%2F06HU4v6vAYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7BFtiyKF%2FwsTzApyrcA8eyTxda9ijXNhv0EYa3DayIlDjhJw9E8%2FO%2Fv4wNu%2Fz%2BhX%2BhGJsL89Uy7yFDZSqXV9l0JLbt3XZsL%2BYR3yb%2Ff1WuT%2BVCKPMHnmgqeHxk%2BC78jdFGZi9ec0vkyUN18g%2Bezso%2Fcy4Ag2GvgVT9MA7KQF62N7%2FGW9oiHUD4%2BomxEEOgVLqTRlyNKquUqxhkiIy%2BNtNhaJDQ4gmz6CE1jAp4LJhc74kUCQFG%2B1FuDqDcP3JDO7fFy%2Fg%2BBx7UIx0G4ccKpQjsjQl3JAnjEkjUSsrODKN1W1h%2FYGPjULdWwqWh7isssjyrLdYwjS06BOB0U7JvHqqmj1tCxlOlLmMQ0Uo7h%2BwG70G%2BN3a5VMraI76%2BISjt9tYiJld5xp79Oxs4ttRCTHVvP7JltajenZRQaAqhfBnkESZy83Otf0aNqHQ52wLio7cBjHLhSR32mcZwp%2B9ce89wXEbFjw30PFlr%2BMMYzx3uFAj9FkEH3Bu%2BB70uoUsJl5IQUawfbKdJhMVfDMkPl%2FJ9k5G73lGja77LGpAWPJNKEKK9sk4as6tlmLpm55GkoOuGj08pUD9eKQ66z7FXDbBUD%2FvMG02H8vB6519x5Wfo9KQGlQVKndvz5i3fLTVoVenP%2BzZ4bmgb%2BrzfMLCfi8oGOqUBUCi5nr0ZXUsGiSQ83X7edgxU1MvcBeM3OBea1FnvwNIEDbCNNSuaOdGEVH4F%2BST%2BcNWkPo%2B2Kg6SUpqea7A8N4p8BBW1osOCKsMMUWTTx0x%2BnE7pn5eflEWuj7dYUSnTu51TunclF0j6W6cYueVMZh%2F9jZ2PZ%2BOS5UvHIBlnVGL5htBfP0T0hq4FH%2F11qexGOctjxztJKz6ymse1LDtiqTXXPe%2Bo&X-Amz-Signature=ca290852fdfadcac7f1675f84c3c4d1d55120089f1434ae772f4a2e8f2ddbde7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665W4P3WGT%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T163452Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCgR%2B1GMCMH74s5y2ls83JRWIaGoAb51cdFlDthMUnghwIgL%2FqI7i2bw2qAMRCtzWS%2F7JFbNcDhVtNR%2F06HU4v6vAYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDG7BFtiyKF%2FwsTzApyrcA8eyTxda9ijXNhv0EYa3DayIlDjhJw9E8%2FO%2Fv4wNu%2Fz%2BhX%2BhGJsL89Uy7yFDZSqXV9l0JLbt3XZsL%2BYR3yb%2Ff1WuT%2BVCKPMHnmgqeHxk%2BC78jdFGZi9ec0vkyUN18g%2Bezso%2Fcy4Ag2GvgVT9MA7KQF62N7%2FGW9oiHUD4%2BomxEEOgVLqTRlyNKquUqxhkiIy%2BNtNhaJDQ4gmz6CE1jAp4LJhc74kUCQFG%2B1FuDqDcP3JDO7fFy%2Fg%2BBx7UIx0G4ccKpQjsjQl3JAnjEkjUSsrODKN1W1h%2FYGPjULdWwqWh7isssjyrLdYwjS06BOB0U7JvHqqmj1tCxlOlLmMQ0Uo7h%2BwG70G%2BN3a5VMraI76%2BISjt9tYiJld5xp79Oxs4ttRCTHVvP7JltajenZRQaAqhfBnkESZy83Otf0aNqHQ52wLio7cBjHLhSR32mcZwp%2B9ce89wXEbFjw30PFlr%2BMMYzx3uFAj9FkEH3Bu%2BB70uoUsJl5IQUawfbKdJhMVfDMkPl%2FJ9k5G73lGja77LGpAWPJNKEKK9sk4as6tlmLpm55GkoOuGj08pUD9eKQ66z7FXDbBUD%2FvMG02H8vB6519x5Wfo9KQGlQVKndvz5i3fLTVoVenP%2BzZ4bmgb%2BrzfMLCfi8oGOqUBUCi5nr0ZXUsGiSQ83X7edgxU1MvcBeM3OBea1FnvwNIEDbCNNSuaOdGEVH4F%2BST%2BcNWkPo%2B2Kg6SUpqea7A8N4p8BBW1osOCKsMMUWTTx0x%2BnE7pn5eflEWuj7dYUSnTu51TunclF0j6W6cYueVMZh%2F9jZ2PZ%2BOS5UvHIBlnVGL5htBfP0T0hq4FH%2F11qexGOctjxztJKz6ymse1LDtiqTXXPe%2Bo&X-Amz-Signature=9c7955709324b509294ad7ecd8cc2e588ca6eff80c69cf47b171889fce498bc0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
