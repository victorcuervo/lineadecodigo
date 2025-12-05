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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U5HCPJY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfrTeUo%2FRiERUaU4DXHO7upJ%2BnnIEZGZ5K0E7Iyl3PKAIhAIq80svFkee3dMD%2FITBaTWvQvN7PjgjLPLGIHNYPTsrhKv8DCGAQABoMNjM3NDIzMTgzODA1IgzpzI48XX85Q7rp9Xgq3AOtIx%2FsoXRpzNTV%2BO1fmsZYu3tp4Gd6XIbssZZPPvl%2BLbarqg6rofTNWImW88XFIfi1IWQOLSLhySmNLmwtRku0TBVGNUZy%2B8OKudI54fCtkKFod43KhYECofmiuJ1QSmvaJ5sAibCa7GduUHjyDJBRuyioGpTO5q%2FTH%2Fr1RiBdOfA2cSOigIpvhFwc0%2FiwYLH4OQ24zoiiR8pBACJhixTIj3biNBNQcVjbz7pKaUiwG5hVvoMvJgEHWF2f5Ow7g1Acr3xane9qhbBq5wUijXNFcEpn8%2F0ZlpiA9QflzxLdwntjVBIL4uk5y50y7xUSFmR79ctDlP4oAzn0Dr2t8PR1B9tOaN4BscQzSrtreDNah%2F5jiknhGG79fxyJ2uyy5oP8mUXFSDzuIVvZe1nykIIDdP3NMuczkFWwNkuKQ7DsuFZu0tYfh63PyGPKdFj5Go6SeW%2BPcagroVgm4b5glV5xk6vgf7xawvM7%2FUr8cMYyVRUtEWCOp65DqB%2BQz3EzhTQ1IwKNmevo3Xhu%2FFqyvMfv%2BRgC8n3wmy26VThyhuMXDSfiKqSqrN4lCjJEmVnGkupb7GKUzUQtv0rF9Qv99V1w8Uw4FUCZCU%2BDFvvS4kjNMRlNnF%2BEfxz56xHENzD37cvJBjqkATC9f0ZJBvwJ935UV3ahoho%2BBifsPXfHyqDK3yyQuMG0ss%2FWGkSkR3JJn0GKj%2BJ5Xdwk%2BSWaf%2BefebL1BtYjyPSvddylzLF1jZNO4r5gML%2BAO2w8vu1ocH0%2BD%2FlwxPLcqFj4g4zjEMM9d%2FSU%2FvwCERz0XR6hncb2qp1SepGwlxbDL4xaDFM5%2Fz49QZUH2ZRgZS0%2BndT9oj0HuhS5kYVNlAOkoPdN&X-Amz-Signature=2d86f693aef76d844b7c0cf8d654ff25851c45a233edb9b4019234a98098b4c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667U5HCPJY%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T195231Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDfrTeUo%2FRiERUaU4DXHO7upJ%2BnnIEZGZ5K0E7Iyl3PKAIhAIq80svFkee3dMD%2FITBaTWvQvN7PjgjLPLGIHNYPTsrhKv8DCGAQABoMNjM3NDIzMTgzODA1IgzpzI48XX85Q7rp9Xgq3AOtIx%2FsoXRpzNTV%2BO1fmsZYu3tp4Gd6XIbssZZPPvl%2BLbarqg6rofTNWImW88XFIfi1IWQOLSLhySmNLmwtRku0TBVGNUZy%2B8OKudI54fCtkKFod43KhYECofmiuJ1QSmvaJ5sAibCa7GduUHjyDJBRuyioGpTO5q%2FTH%2Fr1RiBdOfA2cSOigIpvhFwc0%2FiwYLH4OQ24zoiiR8pBACJhixTIj3biNBNQcVjbz7pKaUiwG5hVvoMvJgEHWF2f5Ow7g1Acr3xane9qhbBq5wUijXNFcEpn8%2F0ZlpiA9QflzxLdwntjVBIL4uk5y50y7xUSFmR79ctDlP4oAzn0Dr2t8PR1B9tOaN4BscQzSrtreDNah%2F5jiknhGG79fxyJ2uyy5oP8mUXFSDzuIVvZe1nykIIDdP3NMuczkFWwNkuKQ7DsuFZu0tYfh63PyGPKdFj5Go6SeW%2BPcagroVgm4b5glV5xk6vgf7xawvM7%2FUr8cMYyVRUtEWCOp65DqB%2BQz3EzhTQ1IwKNmevo3Xhu%2FFqyvMfv%2BRgC8n3wmy26VThyhuMXDSfiKqSqrN4lCjJEmVnGkupb7GKUzUQtv0rF9Qv99V1w8Uw4FUCZCU%2BDFvvS4kjNMRlNnF%2BEfxz56xHENzD37cvJBjqkATC9f0ZJBvwJ935UV3ahoho%2BBifsPXfHyqDK3yyQuMG0ss%2FWGkSkR3JJn0GKj%2BJ5Xdwk%2BSWaf%2BefebL1BtYjyPSvddylzLF1jZNO4r5gML%2BAO2w8vu1ocH0%2BD%2FlwxPLcqFj4g4zjEMM9d%2FSU%2FvwCERz0XR6hncb2qp1SepGwlxbDL4xaDFM5%2Fz49QZUH2ZRgZS0%2BndT9oj0HuhS5kYVNlAOkoPdN&X-Amz-Signature=199b39e71164e823a28f636601967511cab92ff0de11c3d9e63435955e31b5a2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
