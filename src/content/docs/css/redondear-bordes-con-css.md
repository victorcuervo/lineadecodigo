---
title: Redondear bordes con CSS
description: "Ejemplo que nos explica cómo podemos redondear bordes con CSS mediante la propiedad border-radius y sus valores el longitud o porcentaje."
lastUpdated: 2023-09-17
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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIV4MV5B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHNdhMODSHlL1b3oSlTsqQEJxujfSCnhgX9GHgFlCbriAiEAjE6KM74WBZ4F2gwW2Mc0CGkT6W5Hl%2B7a2QgBnZZWBlMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDD%2BWlsVmL3stXog7lSrcA9jRJLcFjsTGXP4cgdqaquP2Yh5EqeTcWT1O1OHklqKjijplXxhPaUhvyMD1hPKJpPJLqM3ovPC86qtMUgyJfglly%2BnfpP4nVfLtLJezluSkuJbBrVe1JUZWLyk2irwDhmO7APcvOQl2FNd%2BoIvjt%2B4eD9YXEohOCd18wdEkSAQdHL1b8IdWHJuACsezjGp71wrTVX7zeZq7UQB29ayqxbeFx3cmHKIGmweemf9zt1DpGL3JU7MbBE4HOcKGgdZotlWNx7D5kfV2Jd9YFYv5iM4D4dAEKNv5oCbtpjMacw%2Fa8aiPTp%2Fte%2FhSSzZb7QlVNYEGWhOJVk7MPPQhRjaZ%2BExtEaH1hYvnC%2BRpBOZ5cOAc4Dtfuxh9UbpOxH9n2k%2F3gufsjW2nwmzlLJ5m3NglgGXpfXqE3Lu0VM3E4KcAXtnUDOorx24uek%2Fe7IOw20UTtqPXXGEg8zAbxNcjIEhe%2FQWJ7GS9r1tZ7drsLu5%2BYMIv0CWTzVivgYRfsXw3I3pS3%2BxlL8Q%2Bd5%2FxusYHnovf1xLzLUi3EUe838LUxNait913S59ijvfgsH%2B9i3QRBx37IDdREi6etQ8Y%2BWtld26l4yQJTRPsc%2B3FLIKYIExYM0p28Kil2RxvvrKjZ09tMN7MxMkGOqUBSq%2FAwWA8Bh4uwN8k01vXGmgM2LtHSKBKmkkrBJxR8ijt5cIq8YWymBmPjxbUfHRErH%2BxHOLNNoCckueu8qa%2BA0TMjzssRui3C0LQc%2B38YcPeoXV52pnquLG9rnFVryn46v5D0wD4%2BPHEiatA%2FPl8pWIv%2FU0lmG%2BhpvAd5IdylLwxRsJNn%2Bom8oTt1LC2I4Euw1tUnBQUH3OJhOWuoy%2By7y7DdwsX&X-Amz-Signature=57cf74a8e8e4bdf439581104148c71e7659c721c3ee351ff4948ba48782268f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIV4MV5B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T061645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIHNdhMODSHlL1b3oSlTsqQEJxujfSCnhgX9GHgFlCbriAiEAjE6KM74WBZ4F2gwW2Mc0CGkT6W5Hl%2B7a2QgBnZZWBlMq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDD%2BWlsVmL3stXog7lSrcA9jRJLcFjsTGXP4cgdqaquP2Yh5EqeTcWT1O1OHklqKjijplXxhPaUhvyMD1hPKJpPJLqM3ovPC86qtMUgyJfglly%2BnfpP4nVfLtLJezluSkuJbBrVe1JUZWLyk2irwDhmO7APcvOQl2FNd%2BoIvjt%2B4eD9YXEohOCd18wdEkSAQdHL1b8IdWHJuACsezjGp71wrTVX7zeZq7UQB29ayqxbeFx3cmHKIGmweemf9zt1DpGL3JU7MbBE4HOcKGgdZotlWNx7D5kfV2Jd9YFYv5iM4D4dAEKNv5oCbtpjMacw%2Fa8aiPTp%2Fte%2FhSSzZb7QlVNYEGWhOJVk7MPPQhRjaZ%2BExtEaH1hYvnC%2BRpBOZ5cOAc4Dtfuxh9UbpOxH9n2k%2F3gufsjW2nwmzlLJ5m3NglgGXpfXqE3Lu0VM3E4KcAXtnUDOorx24uek%2Fe7IOw20UTtqPXXGEg8zAbxNcjIEhe%2FQWJ7GS9r1tZ7drsLu5%2BYMIv0CWTzVivgYRfsXw3I3pS3%2BxlL8Q%2Bd5%2FxusYHnovf1xLzLUi3EUe838LUxNait913S59ijvfgsH%2B9i3QRBx37IDdREi6etQ8Y%2BWtld26l4yQJTRPsc%2B3FLIKYIExYM0p28Kil2RxvvrKjZ09tMN7MxMkGOqUBSq%2FAwWA8Bh4uwN8k01vXGmgM2LtHSKBKmkkrBJxR8ijt5cIq8YWymBmPjxbUfHRErH%2BxHOLNNoCckueu8qa%2BA0TMjzssRui3C0LQc%2B38YcPeoXV52pnquLG9rnFVryn46v5D0wD4%2BPHEiatA%2FPl8pWIv%2FU0lmG%2BhpvAd5IdylLwxRsJNn%2Bom8oTt1LC2I4Euw1tUnBQUH3OJhOWuoy%2By7y7DdwsX&X-Amz-Signature=0c7854f1c2c920f1f9f2fee091b6c6a0d0d864b54640192fbfd8c3ce57c57f44&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
