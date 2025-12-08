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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XAPQIVO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9yhX%2B4EH8lT560WSfjX6GeWW9xbJhVQz%2BpSPLr0BXCgIhAP68D5HSWcR1HiOYugmuoLeRN9ql30D40pnD9nvatq1AKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FKq671AGJCrgX4QUq3APVJb7Rs%2BMADlqvUc2yNQAcK%2BwOq%2FbbvBIYRZDUZXcShrKSGDuBmyL78685%2BWnwr%2Bgc5Jnu2nKUuTJLK65MsqM%2BELasIIn8MCWCqrK%2FYtG0BRAA%2FEHZU8%2F4ljp%2Fy8tozLNxOgJ%2FRogEmX6Vfhu7weV%2Fa4QSff3K9K0AAmACgpsDlTBNIDU5biYTYVUXUe9bctbJCgowQnXBHrCcTK6PlhwxBel7OwwvQCo%2BXfSx5W5mZ90WY9z4qwVaq%2F5zYyqQ8i1SV55RYeWXBuMTOuV%2B8pUI5jCPRFzbgMCphvtycMUStlC5ANFYLxpTr4Z234XkrQh61Aoe4jGeYfpZIZJ%2FzDUQUHzozJqRp8juyXP7y91aufTBjOb1ZYcvh4hLkS1MnIN8vxN9yuhgyYb05suEdDC34ELGqIyn0vYJ%2FqRU6y54eMcXSVvvVRNzlZN04fEip95y7Nba8w3DUsavnzixOnxYx4VnSOrRCA5VaNtOMJARwp1zITh%2Bxvrf%2BB0HpHs%2FqGsxALz7h7HItOS3iE3esnraeI4RjIHp36Pmb1x75uSasXbwDqD6s0kX%2F4eLVc6qhbcBRc1wfeWeKl9bhzhEvsw%2FnRX9AVbe%2BS%2B%2Fj0aSfp4o%2FZw7nfHJvvb%2B16H0UTCDotjJBjqkAZzDAdC%2B5PGm17dMeAnOtn1ltYgy3ZW6%2FbZuh3lsUIrQojbSRU6lo8bQhCtQEJFRa2DDAr4feK9V%2FS%2FUHmm0U5xw4gfnYGawgdUL1O8e777MejlVVBMeDCbEBG854Ms6VI6omB53eYSxcX0rQAyi91HqFWlTCwVPz8bsLIk8bfV5oCn1hSVeUNFTZdJ2PnnG4iUd4zErX5gDQL3ZtVBOoDBA3vbj&X-Amz-Signature=f44969b78132f85ef7694b75c9bd9da1311cc6e043fad7fc69c9bf3b96492c01&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667XAPQIVO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD9yhX%2B4EH8lT560WSfjX6GeWW9xbJhVQz%2BpSPLr0BXCgIhAP68D5HSWcR1HiOYugmuoLeRN9ql30D40pnD9nvatq1AKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz%2FKq671AGJCrgX4QUq3APVJb7Rs%2BMADlqvUc2yNQAcK%2BwOq%2FbbvBIYRZDUZXcShrKSGDuBmyL78685%2BWnwr%2Bgc5Jnu2nKUuTJLK65MsqM%2BELasIIn8MCWCqrK%2FYtG0BRAA%2FEHZU8%2F4ljp%2Fy8tozLNxOgJ%2FRogEmX6Vfhu7weV%2Fa4QSff3K9K0AAmACgpsDlTBNIDU5biYTYVUXUe9bctbJCgowQnXBHrCcTK6PlhwxBel7OwwvQCo%2BXfSx5W5mZ90WY9z4qwVaq%2F5zYyqQ8i1SV55RYeWXBuMTOuV%2B8pUI5jCPRFzbgMCphvtycMUStlC5ANFYLxpTr4Z234XkrQh61Aoe4jGeYfpZIZJ%2FzDUQUHzozJqRp8juyXP7y91aufTBjOb1ZYcvh4hLkS1MnIN8vxN9yuhgyYb05suEdDC34ELGqIyn0vYJ%2FqRU6y54eMcXSVvvVRNzlZN04fEip95y7Nba8w3DUsavnzixOnxYx4VnSOrRCA5VaNtOMJARwp1zITh%2Bxvrf%2BB0HpHs%2FqGsxALz7h7HItOS3iE3esnraeI4RjIHp36Pmb1x75uSasXbwDqD6s0kX%2F4eLVc6qhbcBRc1wfeWeKl9bhzhEvsw%2FnRX9AVbe%2BS%2B%2Fj0aSfp4o%2FZw7nfHJvvb%2B16H0UTCDotjJBjqkAZzDAdC%2B5PGm17dMeAnOtn1ltYgy3ZW6%2FbZuh3lsUIrQojbSRU6lo8bQhCtQEJFRa2DDAr4feK9V%2FS%2FUHmm0U5xw4gfnYGawgdUL1O8e777MejlVVBMeDCbEBG854Ms6VI6omB53eYSxcX0rQAyi91HqFWlTCwVPz8bsLIk8bfV5oCn1hSVeUNFTZdJ2PnnG4iUd4zErX5gDQL3ZtVBOoDBA3vbj&X-Amz-Signature=ff789ae37a91942d4e72ee137fdae39ced09070a03fdb5dbcb717a44b40aaf67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
