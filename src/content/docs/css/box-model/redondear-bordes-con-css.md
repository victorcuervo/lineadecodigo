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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WYLLYH7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3EqtrViGESb22FXYhksDFhBsF1w1Zsx0JpWPoa0vXLAiEAsaKiewQwBSFTSIEVdU%2BiRM48UDFQchRmLHDleV5xYcgq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDtVjKS6kWrW3y3eRCrcA9KxhfPsXUzqhV1AxQ8fLqo4g5snzlcoIc6036XWediLIpRFWIw2v4seroei00gkMUcrnd4x8DHL1509HkEx6lTuVHcm9fOBnQaomVsKiUjISwaqM6p6eVOBLVZdAtWdsM%2BgiJjAbB43Cc1QMj%2F%2B1akQc9kNJ5ixHKnJ10gJKGEjKn3XrkZE2kh%2BzdwJnpTVLucdO217Ual6cKdWJV5JNBQqCFu9cpUGcHXzBL8MSRYJrhJLO%2BD31XGPj6QGYRXs5zGAC667ftez89wyB14mKTkRHOxCecnU7k2bLOoJsYI0rHu7s%2FrcJIDqsRyA1sZK2T4%2FUsFA0ny9uOvpGkRJF17hAyNmkbctWWCeoEyn8QuHhvqDF2eD0LZK66Ky4UBzH14wLGTLH%2BLrA3Jo%2BmVsil3XIcYA%2FxvrBlm0iRdCofxZwhDn7oaiIyMR4GtKyQvMzMBTNR7yHkJpvxfYURl3mfsKNwH2YoxCpEVw%2F43v41fX3OGD2fPY1ANhLVEFQunwInm35qtlvU7Hhnkt8TRldOGY5Qzv4WbYAfBsZf1MI78PyPJWWRPcUkaxM7gEhbunlERPYzstLt9R8hT6lXYoqG1wZJykV%2FMn%2BsZv1A6385yY%2F1meTFN8z5xLnYWpMLePisoGOqUBQ%2BQIf1V8ZLwQyKcgbdL5fySJRaxYTw5iOQr7dSF%2BfqiJJzwhJUB5QSqdOSugk4ov3iIj2dsgOoYfGfkYtuZ%2BKUfTpg8OF76nTrVBPt1JbRLNcghZiapBwp2ruQzjzHTnvHBFunS3FZYl%2B4Pw4c7TL6MYZccyXAnoQ5QVw1LgqgDbLXiNV6W560kj2WRBd7qwPmHG4y3sShvjh%2Fouw6qz9h8nv2Yw&X-Amz-Signature=3bd125f87ea36724ff4e496cfbe2722347db12647dc030f4295b43654d13f91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WYLLYH7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T113221Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF3EqtrViGESb22FXYhksDFhBsF1w1Zsx0JpWPoa0vXLAiEAsaKiewQwBSFTSIEVdU%2BiRM48UDFQchRmLHDleV5xYcgq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDDtVjKS6kWrW3y3eRCrcA9KxhfPsXUzqhV1AxQ8fLqo4g5snzlcoIc6036XWediLIpRFWIw2v4seroei00gkMUcrnd4x8DHL1509HkEx6lTuVHcm9fOBnQaomVsKiUjISwaqM6p6eVOBLVZdAtWdsM%2BgiJjAbB43Cc1QMj%2F%2B1akQc9kNJ5ixHKnJ10gJKGEjKn3XrkZE2kh%2BzdwJnpTVLucdO217Ual6cKdWJV5JNBQqCFu9cpUGcHXzBL8MSRYJrhJLO%2BD31XGPj6QGYRXs5zGAC667ftez89wyB14mKTkRHOxCecnU7k2bLOoJsYI0rHu7s%2FrcJIDqsRyA1sZK2T4%2FUsFA0ny9uOvpGkRJF17hAyNmkbctWWCeoEyn8QuHhvqDF2eD0LZK66Ky4UBzH14wLGTLH%2BLrA3Jo%2BmVsil3XIcYA%2FxvrBlm0iRdCofxZwhDn7oaiIyMR4GtKyQvMzMBTNR7yHkJpvxfYURl3mfsKNwH2YoxCpEVw%2F43v41fX3OGD2fPY1ANhLVEFQunwInm35qtlvU7Hhnkt8TRldOGY5Qzv4WbYAfBsZf1MI78PyPJWWRPcUkaxM7gEhbunlERPYzstLt9R8hT6lXYoqG1wZJykV%2FMn%2BsZv1A6385yY%2F1meTFN8z5xLnYWpMLePisoGOqUBQ%2BQIf1V8ZLwQyKcgbdL5fySJRaxYTw5iOQr7dSF%2BfqiJJzwhJUB5QSqdOSugk4ov3iIj2dsgOoYfGfkYtuZ%2BKUfTpg8OF76nTrVBPt1JbRLNcghZiapBwp2ruQzjzHTnvHBFunS3FZYl%2B4Pw4c7TL6MYZccyXAnoQ5QVw1LgqgDbLXiNV6W560kj2WRBd7qwPmHG4y3sShvjh%2Fouw6qz9h8nv2Yw&X-Amz-Signature=9fd79511ed74e8d2352875bb418b34bfc3e333b5e30859e1900ae7f8cc3ebbb9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
