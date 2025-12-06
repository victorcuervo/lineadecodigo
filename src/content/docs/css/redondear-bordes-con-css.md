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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642C45B5N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa4WCZCkiATnIOg7tVHVJBMHrfm2rzfaMf%2BvtZpiybAAIgTHPaBcvOqupRhCboCiR7FTN%2FcZVG3GrpljljQRsSuw0q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDzWVfn3P6scgbtnJircAxa5vMy8SzYAt3LtF1R1wLnsrZqKf3fci5YwUoS6K2qOBy3HTJpQcbm3ciVrkRWYHiUCFAjOXGr81FqLmbYrZaffn8wepjJhIOA3qCSeb6RzDmIEFHFvh8gxo06a9B1dHRAZBrCVvzMMPfge9YBR89BLIcC7xHbRbg5HcQGY4NHeOCZCUD14f1VCMfD5%2FF%2FS1UowZ0mgyWG5GV8A6%2BU1xcXLilPTlR4oBS3LhdolLy5pYyaee90875vy2pagPUsq8MXbVZyZ4RIalhKhLB3QTADhu%2B1v3Bd86LUrv3rVt7Ri4M95y%2FsYdAllmfk6AEQbgt%2FwUqbvjcXIla%2FGtMsdk%2F4pQQjeq0QeuyqvM7mjM%2BhlacCxCd%2Bob6esz41m%2FxuNwri2aab%2BeN8fpWguNwGIA6R%2B6r9kxCK%2Brnxtrb6d05smZQqgeGVrsOVikO8t9FdAALPfo5%2BdfP5OLpOxiUh29wQMle7wLm79pbe5P%2FDqnUhLI1ZfxXZ9IfaF8zXbWyd0ZsoZMG1fYTbjgFhazzn6yu%2Bn%2FCKRVEgMAXZALLNZ1YPjXvfAMCNkLIn%2FCNG603FTpLYggrDEyN3xocTIBP9b95QK6DEyCAssvIEDj9AXFM0CY%2FLHT09o0DkqSBo0MIvozckGOqUBjcJ2lMMhnfcCeTVRT8NCTuzEyzWMWz4UXCxHl2uZpGaTWL3N5OP22C%2BbbwRN%2FG5GCYdWiXlbUj3xx5lE4a6gxh%2BG5DeRxig9vdPZknJx59AXawoGvifeCBkLkcqqrBN4EktpEEMzXx2b%2Fj0PuDI%2FBopzich8JFvJnNuI7ylpa59t6TaAp92u%2BK82a9kNAjD8XB%2BHY3YP9%2BmqgbX8Mu8XN7ugySpM&X-Amz-Signature=fa42d3bcaefeea642687269a5924bd2a17e46c059419217ed34955e06773d708&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46642C45B5N%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T002009Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDa4WCZCkiATnIOg7tVHVJBMHrfm2rzfaMf%2BvtZpiybAAIgTHPaBcvOqupRhCboCiR7FTN%2FcZVG3GrpljljQRsSuw0q%2FwMIaRAAGgw2Mzc0MjMxODM4MDUiDDzWVfn3P6scgbtnJircAxa5vMy8SzYAt3LtF1R1wLnsrZqKf3fci5YwUoS6K2qOBy3HTJpQcbm3ciVrkRWYHiUCFAjOXGr81FqLmbYrZaffn8wepjJhIOA3qCSeb6RzDmIEFHFvh8gxo06a9B1dHRAZBrCVvzMMPfge9YBR89BLIcC7xHbRbg5HcQGY4NHeOCZCUD14f1VCMfD5%2FF%2FS1UowZ0mgyWG5GV8A6%2BU1xcXLilPTlR4oBS3LhdolLy5pYyaee90875vy2pagPUsq8MXbVZyZ4RIalhKhLB3QTADhu%2B1v3Bd86LUrv3rVt7Ri4M95y%2FsYdAllmfk6AEQbgt%2FwUqbvjcXIla%2FGtMsdk%2F4pQQjeq0QeuyqvM7mjM%2BhlacCxCd%2Bob6esz41m%2FxuNwri2aab%2BeN8fpWguNwGIA6R%2B6r9kxCK%2Brnxtrb6d05smZQqgeGVrsOVikO8t9FdAALPfo5%2BdfP5OLpOxiUh29wQMle7wLm79pbe5P%2FDqnUhLI1ZfxXZ9IfaF8zXbWyd0ZsoZMG1fYTbjgFhazzn6yu%2Bn%2FCKRVEgMAXZALLNZ1YPjXvfAMCNkLIn%2FCNG603FTpLYggrDEyN3xocTIBP9b95QK6DEyCAssvIEDj9AXFM0CY%2FLHT09o0DkqSBo0MIvozckGOqUBjcJ2lMMhnfcCeTVRT8NCTuzEyzWMWz4UXCxHl2uZpGaTWL3N5OP22C%2BbbwRN%2FG5GCYdWiXlbUj3xx5lE4a6gxh%2BG5DeRxig9vdPZknJx59AXawoGvifeCBkLkcqqrBN4EktpEEMzXx2b%2Fj0PuDI%2FBopzich8JFvJnNuI7ylpa59t6TaAp92u%2BK82a9kNAjD8XB%2BHY3YP9%2BmqgbX8Mu8XN7ugySpM&X-Amz-Signature=702fc31e00646ece3f9f67616ae136e62c890b0222b25795366b40d7c416079a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
