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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPB7IDNR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5rI7cboeYQrZKgWYD0mBZiW9s9mTooJhPO3n%2BHzH0DgIgXyR2QtghShNZNzk4KWji%2BIB2tOPedOl%2BpFrVBxTyARcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDA9%2FDCzRDgkML3kd9yrcA8M9F8%2Fr5H4DMYREinEJKkjxRrCNjsV8y1x3XJfenE3wiBDst3ntjN4ZC1ltjmSJpPlNry8gZW0wx4fAWuX6dvl86qjMk6pqOxmUOtldWgDVh5ZF2KuMH3A7GjJ%2FVDxXjuaYvjw434YPDLxOXiOc%2BfivG%2F9352fOhLhjVLKNDDOZ87XyWSswFfTMj6RHHAKha1CwbFGyby9hWrE5Q647go7IcAFSRdk5jWIQvtOzjRTmP4geYcDZXS6a6cH2KBOcuGL53CSpJv788ITHoOMN2YwEx6cJ16BBb9T6s3EnEWL%2BrfWOsthixxmk%2BtHB5dS1s%2BCigGZZqPpYuYTjMDkzxBvpiCIJ8aDFbG%2F69WF5l4t1ohc%2FRethcR%2FIX3IBw7%2Fmz4o0Kh8cyh%2Bo%2FCOPdpYn2NCa5gojEev8WdmD6f%2F1rBJEhFOP5b4pV3bAZUJJxHGGfsEIjYBBZIxTpGJC2FAnCnEuo0dpjVJCwU%2B2HFtNcGg1%2Fp4V2eAlkWZ8hDsefzgWOZKqe9MFWMN9Bahzb6JkMJbFBkhBnRjV8vbQveNTxdYYB%2FYX5o%2BrdJKfKdwNpDJ5FkXZgQEzheQcal25YAXN8lgyaqFN1ObHOeVD%2BpKm5WDOV4yjK7TGY0SBjsYbMO%2FKy8kGOqUBGr5BzssYrjSMTdqlgisJLOrmDHPgH%2FHHAMBkuJk2wD5A%2BBAn4G3a4FPp2hbSws6JCbsNTCSS0ImauhA48ZtouuZ7L9g8%2FdaYYwD7l%2BomvoUfY5dV6CPMvLYN4gK8ciFmgllKhLRg30HrihW0TkUhWEUlpTJ%2FaLF6yRZlx0RPs6fI68eCLZO2lmxNYBeMV1NHl0zkVONdCDCIsO6CZVxZ28o3xYX6&X-Amz-Signature=11a154959cf2d537c4f4f2a971f089792d9194d834c818f59a550c7adad74893&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QPB7IDNR%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T184253Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD5rI7cboeYQrZKgWYD0mBZiW9s9mTooJhPO3n%2BHzH0DgIgXyR2QtghShNZNzk4KWji%2BIB2tOPedOl%2BpFrVBxTyARcq%2FwMIXxAAGgw2Mzc0MjMxODM4MDUiDA9%2FDCzRDgkML3kd9yrcA8M9F8%2Fr5H4DMYREinEJKkjxRrCNjsV8y1x3XJfenE3wiBDst3ntjN4ZC1ltjmSJpPlNry8gZW0wx4fAWuX6dvl86qjMk6pqOxmUOtldWgDVh5ZF2KuMH3A7GjJ%2FVDxXjuaYvjw434YPDLxOXiOc%2BfivG%2F9352fOhLhjVLKNDDOZ87XyWSswFfTMj6RHHAKha1CwbFGyby9hWrE5Q647go7IcAFSRdk5jWIQvtOzjRTmP4geYcDZXS6a6cH2KBOcuGL53CSpJv788ITHoOMN2YwEx6cJ16BBb9T6s3EnEWL%2BrfWOsthixxmk%2BtHB5dS1s%2BCigGZZqPpYuYTjMDkzxBvpiCIJ8aDFbG%2F69WF5l4t1ohc%2FRethcR%2FIX3IBw7%2Fmz4o0Kh8cyh%2Bo%2FCOPdpYn2NCa5gojEev8WdmD6f%2F1rBJEhFOP5b4pV3bAZUJJxHGGfsEIjYBBZIxTpGJC2FAnCnEuo0dpjVJCwU%2B2HFtNcGg1%2Fp4V2eAlkWZ8hDsefzgWOZKqe9MFWMN9Bahzb6JkMJbFBkhBnRjV8vbQveNTxdYYB%2FYX5o%2BrdJKfKdwNpDJ5FkXZgQEzheQcal25YAXN8lgyaqFN1ObHOeVD%2BpKm5WDOV4yjK7TGY0SBjsYbMO%2FKy8kGOqUBGr5BzssYrjSMTdqlgisJLOrmDHPgH%2FHHAMBkuJk2wD5A%2BBAn4G3a4FPp2hbSws6JCbsNTCSS0ImauhA48ZtouuZ7L9g8%2FdaYYwD7l%2BomvoUfY5dV6CPMvLYN4gK8ciFmgllKhLRg30HrihW0TkUhWEUlpTJ%2FaLF6yRZlx0RPs6fI68eCLZO2lmxNYBeMV1NHl0zkVONdCDCIsO6CZVxZ28o3xYX6&X-Amz-Signature=47be53851114a07af2c342b8a4eea19f77ba65b54a40e968f39454851bfafec3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
