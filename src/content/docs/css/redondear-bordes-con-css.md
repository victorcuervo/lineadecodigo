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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGBUW43F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGRR91iI8fvt62R2gj%2FhrxeU4TP0eVHWqAyTx1KI3ohwAiEAzphRkP3vN9ztjZcJpKU%2Bm7l9pyoCS5QuMaq%2BXD5Dz%2BUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCU3sPrgQiActGrwoCrcAyQ7mEdCSQTX8pkKtd43%2FY%2BN1KFrkYT%2B8JlRCy7kroXmzyN1gkdkD%2Flsn4hRFDHK%2BgJCxKASTK6IIZoQi5j%2B%2Fcts8tkUd4f74ABEc1sOkNXoHDarcHHe7HaWxOzBgELKNjffgDpa8R3X3teqDnia3P0IuD9azQT9mTrHKalGrMUX81dUDutZi2AK5kHrbp6%2FoGwpoiZIZXu1GLFJIn0y7%2FsPLpWAXbEJjhO2j9BgXW5SeuSKm9brWOIlHVmiFkxtVSVPr64kmyHQJd383RTI9ROwVPSpSYE8HESXTmUflqAhhSTe8nLpqloXxL3MXgl2fUO04HR9z4BR%2BGc653yVBOsijcscPWLzoU6OvWzmqe5wCzvJPMJWILOWZauPs8qh%2BE8M74QuXYQcJ05gx29gR%2FRobLf5a%2Bl1m25G0YsXQ436jAOdhZAoSC7mqDBGvN4uNbT7Zp%2F91BnxpMtooWcSh3sDKq8kGdr%2FLXNWyYI%2BiapdBDuCki9IR49enYJ%2FaUAU%2B3432azEZvuwilum7WhxFczA8JrkTB21MMc0tQ%2BLjqeXYmLpIZnifmTAMwFnrvG0N%2FiuAFEvQ3d7%2F0uV%2FBWtBLUkE7zviYRUuEI16ZdW8ny7rX0TDxY%2FP%2BuK7L0OMJ2RxMkGOqUB7GrpVYvFjgGvVzL6bBzLfvnu8oqIeB13QUWNwa9fek1BWbfsTQ66idBwcbijK2Ypj7xzke5L6Lq3sem4G5%2B8vxv1F3gDIr%2B4ZUK3q2pOf5%2BDSMV4Hy9sbyFrSPNOrQwLS%2Bft3kcUo3s24wy5WBrASu1M3jnyAui8oP2oPSuymr7oPtBvOPfhiGILiK448MySlXfccO%2Bmjpt56B0ibLSfmXhJR5lG&X-Amz-Signature=7bcca2658ab13e8366a1707253f58b681d9bb708c61160cbcebdd4930a454a64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YGBUW43F%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T041840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHQaCXVzLXdlc3QtMiJHMEUCIGRR91iI8fvt62R2gj%2FhrxeU4TP0eVHWqAyTx1KI3ohwAiEAzphRkP3vN9ztjZcJpKU%2Bm7l9pyoCS5QuMaq%2BXD5Dz%2BUq%2FwMIPRAAGgw2Mzc0MjMxODM4MDUiDCU3sPrgQiActGrwoCrcAyQ7mEdCSQTX8pkKtd43%2FY%2BN1KFrkYT%2B8JlRCy7kroXmzyN1gkdkD%2Flsn4hRFDHK%2BgJCxKASTK6IIZoQi5j%2B%2Fcts8tkUd4f74ABEc1sOkNXoHDarcHHe7HaWxOzBgELKNjffgDpa8R3X3teqDnia3P0IuD9azQT9mTrHKalGrMUX81dUDutZi2AK5kHrbp6%2FoGwpoiZIZXu1GLFJIn0y7%2FsPLpWAXbEJjhO2j9BgXW5SeuSKm9brWOIlHVmiFkxtVSVPr64kmyHQJd383RTI9ROwVPSpSYE8HESXTmUflqAhhSTe8nLpqloXxL3MXgl2fUO04HR9z4BR%2BGc653yVBOsijcscPWLzoU6OvWzmqe5wCzvJPMJWILOWZauPs8qh%2BE8M74QuXYQcJ05gx29gR%2FRobLf5a%2Bl1m25G0YsXQ436jAOdhZAoSC7mqDBGvN4uNbT7Zp%2F91BnxpMtooWcSh3sDKq8kGdr%2FLXNWyYI%2BiapdBDuCki9IR49enYJ%2FaUAU%2B3432azEZvuwilum7WhxFczA8JrkTB21MMc0tQ%2BLjqeXYmLpIZnifmTAMwFnrvG0N%2FiuAFEvQ3d7%2F0uV%2FBWtBLUkE7zviYRUuEI16ZdW8ny7rX0TDxY%2FP%2BuK7L0OMJ2RxMkGOqUB7GrpVYvFjgGvVzL6bBzLfvnu8oqIeB13QUWNwa9fek1BWbfsTQ66idBwcbijK2Ypj7xzke5L6Lq3sem4G5%2B8vxv1F3gDIr%2B4ZUK3q2pOf5%2BDSMV4Hy9sbyFrSPNOrQwLS%2Bft3kcUo3s24wy5WBrASu1M3jnyAui8oP2oPSuymr7oPtBvOPfhiGILiK448MySlXfccO%2Bmjpt56B0ibLSfmXhJR5lG&X-Amz-Signature=d76a05e860130d9338243c17eb45aeac6f8cf6fd2e54baf36f1203ce4babe3a9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
