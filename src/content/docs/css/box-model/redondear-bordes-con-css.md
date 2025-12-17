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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THU6IX5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoypFrBaxB9NB5XDzqWM%2B7lQWeH0Pf4W0OuPtyu1%2FI4gIgCFyGuVj8pwPH2h5%2FTcYRzKQtcimTQI4JlA7MwQGwnTYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKW5hUinwyZmv0ik4SrcAwSTPzWQHK5yjjjmTWcubO2Uc8yRRrJa14qIGSwvRlo3MAz5aHaiJK3m2dzZ1Gi1%2BL2cuiLwHGFG92fE0yT3dX0i0s5g%2BBmtFhVrxQGcncgoDQY3RM%2BXALeKrDmuBPKBLmGZbTptHOTnDzwA5vpWGIlF3IR2RCtiVSt8OtBDGq1O%2FJkBuAC20yjAf0akNxO2ALzP5aGVQlwJE%2BaiKyyOgiy22g7jXnRMTj709KKWYbc2tiPhYCsiBUS%2BLjqWxiwQ6PiKiy8vDKcgq7v50n3OZN639UVqBm4AeVbCgPsPWxIUpgqLXNgbIeOrtLcRHzZcx3yeB29QZJ3HLeO5YLgdJFHSTca31Cn5NXDc%2B0iEFoR%2Fi9bKIQOQAR%2BeEGkfs2cAljuUu8tv23xYbx8vgoS8dBskA%2BJQwT%2Bh9ttFGUdOLzsLvkl8r0xX4O%2BLZBkZJZ9YjoXU9lRFk3yH%2FOJM0UEbMlKeCcN7NaOaO2QlushPL6Nwa2Lbf%2FbXDg3DLH9HiirV8eoP2KHeFVPylp9o6c%2Baf79%2FIJuXwA%2F03vrcTQixPoU8hd3Kt%2BvhEj9HoSHgBMdhBt3XA%2BzsezEf%2BHnn1CV2iVups%2BzJJiNxf5%2B3ZxALyXyzlLL2Opg8h25Q9BrUMPaXiMoGOqUBd2Fb%2FA8iznHXoormC6IBRMHgj0YBUiAhuPeZ%2FB%2FFDgX%2BSYjf86JdWoprpCdjVcTzSoZXuskhl6kL3aShIeQpYWDkPRcMySUrZuDXXW272CPYpV6t6i0m6N%2BfjFzFsYK5qGcMW1LLPRTOw4zitxH7mpuC7%2BYcxfYTNhh8bgEhnCnulJhTjKG2yqiKtoniRJu7QACMc6DNKZZWvAa886faA1x6wTV%2B&X-Amz-Signature=57e4f61c19e3d56b8908873a6ad9d25a3cb861248487aba81183ad2b36aacc52&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667THU6IX5%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T023837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDoypFrBaxB9NB5XDzqWM%2B7lQWeH0Pf4W0OuPtyu1%2FI4gIgCFyGuVj8pwPH2h5%2FTcYRzKQtcimTQI4JlA7MwQGwnTYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDKW5hUinwyZmv0ik4SrcAwSTPzWQHK5yjjjmTWcubO2Uc8yRRrJa14qIGSwvRlo3MAz5aHaiJK3m2dzZ1Gi1%2BL2cuiLwHGFG92fE0yT3dX0i0s5g%2BBmtFhVrxQGcncgoDQY3RM%2BXALeKrDmuBPKBLmGZbTptHOTnDzwA5vpWGIlF3IR2RCtiVSt8OtBDGq1O%2FJkBuAC20yjAf0akNxO2ALzP5aGVQlwJE%2BaiKyyOgiy22g7jXnRMTj709KKWYbc2tiPhYCsiBUS%2BLjqWxiwQ6PiKiy8vDKcgq7v50n3OZN639UVqBm4AeVbCgPsPWxIUpgqLXNgbIeOrtLcRHzZcx3yeB29QZJ3HLeO5YLgdJFHSTca31Cn5NXDc%2B0iEFoR%2Fi9bKIQOQAR%2BeEGkfs2cAljuUu8tv23xYbx8vgoS8dBskA%2BJQwT%2Bh9ttFGUdOLzsLvkl8r0xX4O%2BLZBkZJZ9YjoXU9lRFk3yH%2FOJM0UEbMlKeCcN7NaOaO2QlushPL6Nwa2Lbf%2FbXDg3DLH9HiirV8eoP2KHeFVPylp9o6c%2Baf79%2FIJuXwA%2F03vrcTQixPoU8hd3Kt%2BvhEj9HoSHgBMdhBt3XA%2BzsezEf%2BHnn1CV2iVups%2BzJJiNxf5%2B3ZxALyXyzlLL2Opg8h25Q9BrUMPaXiMoGOqUBd2Fb%2FA8iznHXoormC6IBRMHgj0YBUiAhuPeZ%2FB%2FFDgX%2BSYjf86JdWoprpCdjVcTzSoZXuskhl6kL3aShIeQpYWDkPRcMySUrZuDXXW272CPYpV6t6i0m6N%2BfjFzFsYK5qGcMW1LLPRTOw4zitxH7mpuC7%2BYcxfYTNhh8bgEhnCnulJhTjKG2yqiKtoniRJu7QACMc6DNKZZWvAa886faA1x6wTV%2B&X-Amz-Signature=9b3b26028bf39eadeebe759b048fda1e59f3b81529e90cdc9c48a8424684805b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
