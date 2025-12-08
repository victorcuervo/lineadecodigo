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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q76JCPZH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNY0kcRXVLkUSRm%2BMtP6dySezQsa8bbkSwoiakwbmvtAiEAwo4wyPObEH2M25QZF95ZO9tpSn%2B6wgiRr11Y8PdQlEsqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FoxOdXU5qAqEygtCrcAz1oek9L%2Bkx4G4lPXbaEXzxbADYK%2BdfanwawrPiATzRekGtWjYywdLVZNoPGQCdbMy3Svgewbgu25pusSa9tIodYxHKrFVKTlfk2VdHsPhVoYy%2F%2FXMXcUjiGHC5g%2F9ZjS2PGEW00mCniZNyTB%2FZCoMAPI8GCuDUnO%2FAsqMjKeXazuq1tlScmkO%2Be4B%2BQmELiFg7BjpUsgN2GtmB7lUNKZmWq%2Bvs2U60%2FydEyl8SwPpy2%2Fy4wt%2Bvz8ai6LyesqtMYKwCt5v4ZwvN7mBicKyVeWOD7%2FayyHAwa2KIgUZs8pLclT5tNB2NyAJbsl9%2BtJ8JdEPXgUUvkTx8nyl5ROxlkSh7EJyby1MJv45kdHtnOFPbFSHuBDN4ztSsSr6WzdXxewnXto1RQppMdLio4QJaIVw09iiQB1nVbf%2FrSvxZd8y8MXQJrAvMO4PWCyWh6BxL6j2tkrvBpmVGrr60EBeJEk%2F3dFdKnkKYHVdLM9xWY1Uznlv7H%2FS3%2FIVh9dWFYzXwRmeGa9HUH2nUNMkADsHSEsTdgcKrozkRa74A8XnE4u8xv2hbFkBuvnqGnuqxSK42IpLmSMmsgynAsNFF4dtpn46E3n2sYdnzbfN%2BgL7bd5%2Fk7owVjbEdYWO%2BIKGfrMMWh2MkGOqUBy7yqN5AQTvpMVpDgun7ODXmpsovzEBZZ99W0BixNoA6P0pIQ%2FG5rQ7sEblDIWUHW5N0b0f3inG6RGIdVKhzMCBgDAX5FQDWBx0kdgU8oZtZ%2BhH%2BhISNmKdwiOk20MmJ1ismLwIIMzwdZLUlCfzMHgijos5HNxoxXhgJZkraVzoSEFE2xVfH5Lhq%2FERVWbvMJlwZ7pVYqgDyVSfHN9fXZpaMe%2F8HS&X-Amz-Signature=9d61d346e590d079d43c2dd647ccacfead23e35b471bff9054a989b5f22176b5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q76JCPZH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004513Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGNY0kcRXVLkUSRm%2BMtP6dySezQsa8bbkSwoiakwbmvtAiEAwo4wyPObEH2M25QZF95ZO9tpSn%2B6wgiRr11Y8PdQlEsqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ%2FoxOdXU5qAqEygtCrcAz1oek9L%2Bkx4G4lPXbaEXzxbADYK%2BdfanwawrPiATzRekGtWjYywdLVZNoPGQCdbMy3Svgewbgu25pusSa9tIodYxHKrFVKTlfk2VdHsPhVoYy%2F%2FXMXcUjiGHC5g%2F9ZjS2PGEW00mCniZNyTB%2FZCoMAPI8GCuDUnO%2FAsqMjKeXazuq1tlScmkO%2Be4B%2BQmELiFg7BjpUsgN2GtmB7lUNKZmWq%2Bvs2U60%2FydEyl8SwPpy2%2Fy4wt%2Bvz8ai6LyesqtMYKwCt5v4ZwvN7mBicKyVeWOD7%2FayyHAwa2KIgUZs8pLclT5tNB2NyAJbsl9%2BtJ8JdEPXgUUvkTx8nyl5ROxlkSh7EJyby1MJv45kdHtnOFPbFSHuBDN4ztSsSr6WzdXxewnXto1RQppMdLio4QJaIVw09iiQB1nVbf%2FrSvxZd8y8MXQJrAvMO4PWCyWh6BxL6j2tkrvBpmVGrr60EBeJEk%2F3dFdKnkKYHVdLM9xWY1Uznlv7H%2FS3%2FIVh9dWFYzXwRmeGa9HUH2nUNMkADsHSEsTdgcKrozkRa74A8XnE4u8xv2hbFkBuvnqGnuqxSK42IpLmSMmsgynAsNFF4dtpn46E3n2sYdnzbfN%2BgL7bd5%2Fk7owVjbEdYWO%2BIKGfrMMWh2MkGOqUBy7yqN5AQTvpMVpDgun7ODXmpsovzEBZZ99W0BixNoA6P0pIQ%2FG5rQ7sEblDIWUHW5N0b0f3inG6RGIdVKhzMCBgDAX5FQDWBx0kdgU8oZtZ%2BhH%2BhISNmKdwiOk20MmJ1ismLwIIMzwdZLUlCfzMHgijos5HNxoxXhgJZkraVzoSEFE2xVfH5Lhq%2FERVWbvMJlwZ7pVYqgDyVSfHN9fXZpaMe%2F8HS&X-Amz-Signature=eea52cc6a7888e0a2790f8ec597c2edead1b0fc7249aacad7541e10631e24eb4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
