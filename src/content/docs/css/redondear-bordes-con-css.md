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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM65XCPN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG3KmC790XDKqlAkEybgYIxly7wy8a3LFHTD8c%2FLIPbAiACHjs%2B1VciEVMnCjC3fRFTxXG6P8NaTXoRSnM5K0g3zSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMdB0Bu%2F%2F0JyAd177XKtwDQNwUOGVvSb57%2FFmZ7Xd1LFidwsD3iYX9%2BnuTgOipMFfDtof1TkTa2KvGMJSUVW9HLIY6J1TtUkfBA%2FPenLiRfMGpFEPcAMqHjtgRF76q56wYVvu1EvdnYrmyCRAe8kivjR6DEQ9VzkcFDXS9WGTD5C%2BHmLEgi4ZpunLh7yth%2BVOa8mGxuNjo146mvZGgYCvOYZKKAqD02nVjDfNTP%2BV%2FMRwZyQvfuu%2B3hbwagqg769t4LhUCl2T3mxzZJM4joSWPIhbztquGvz%2FHbD8GXElqlOwx94vNJI9Y3d4NWyUEPsZDdUQBwv2ur3FkkatHy7yxfal9nN%2FVH1EWFUqt%2BxQdN23mFtNw%2F4e%2By%2By6nxR7UCh5M%2BlXJt2sH9TxznZYqnj3fx%2F9HiP5KB4D0AJwpMdI1zokzGs9rYBx5DEhByHzsIctZHgY7VhIqX3NLTFaGk7g8z7DXp41omN85zLX%2BlibMBux4I1cX3bFAXUPUUuf%2FcxFQcr9OFojb5%2BnFWXprL0uV%2B7hAt%2BeoSx1xQi2TZXnsniUORp0k6eqCWiwlE3LeWfDQHY8EO5zsXhzxV06QnzDfN7LGpsxjeYlB9XVuUKIrzr%2FiR0WkcZn87P2lNlje%2BTF4KzWK2JHbnAmFjswgPDMyQY6pgGlMyFYtVxpr84JfQdEHGLEu%2BVhrXW%2FxCx1Zv5dIffKTinYeEWYhK%2BZFuUk45r8NXiWPv8srBwMl%2FPBcWVBl3KvgInF53oefu0H1XX2yfK5CQpQoQsUEaYDxEb5zd1mhYKqBi7Bwrj0f%2BW9j2VNH5Iw3m6eW2xwOUdOGJoqBN1sKzNmPRc%2ByJTeZx3Rn%2FgTuYnP0iCgPczZYfnqQ%2BgUawS0mTcV%2BvsT&X-Amz-Signature=e721995f38308efb041430baf4cdc37a5a80a27e3284653be5aefaa90a398fe2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TM65XCPN%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T213435Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBG3KmC790XDKqlAkEybgYIxly7wy8a3LFHTD8c%2FLIPbAiACHjs%2B1VciEVMnCjC3fRFTxXG6P8NaTXoRSnM5K0g3zSr%2FAwhlEAAaDDYzNzQyMzE4MzgwNSIMdB0Bu%2F%2F0JyAd177XKtwDQNwUOGVvSb57%2FFmZ7Xd1LFidwsD3iYX9%2BnuTgOipMFfDtof1TkTa2KvGMJSUVW9HLIY6J1TtUkfBA%2FPenLiRfMGpFEPcAMqHjtgRF76q56wYVvu1EvdnYrmyCRAe8kivjR6DEQ9VzkcFDXS9WGTD5C%2BHmLEgi4ZpunLh7yth%2BVOa8mGxuNjo146mvZGgYCvOYZKKAqD02nVjDfNTP%2BV%2FMRwZyQvfuu%2B3hbwagqg769t4LhUCl2T3mxzZJM4joSWPIhbztquGvz%2FHbD8GXElqlOwx94vNJI9Y3d4NWyUEPsZDdUQBwv2ur3FkkatHy7yxfal9nN%2FVH1EWFUqt%2BxQdN23mFtNw%2F4e%2By%2By6nxR7UCh5M%2BlXJt2sH9TxznZYqnj3fx%2F9HiP5KB4D0AJwpMdI1zokzGs9rYBx5DEhByHzsIctZHgY7VhIqX3NLTFaGk7g8z7DXp41omN85zLX%2BlibMBux4I1cX3bFAXUPUUuf%2FcxFQcr9OFojb5%2BnFWXprL0uV%2B7hAt%2BeoSx1xQi2TZXnsniUORp0k6eqCWiwlE3LeWfDQHY8EO5zsXhzxV06QnzDfN7LGpsxjeYlB9XVuUKIrzr%2FiR0WkcZn87P2lNlje%2BTF4KzWK2JHbnAmFjswgPDMyQY6pgGlMyFYtVxpr84JfQdEHGLEu%2BVhrXW%2FxCx1Zv5dIffKTinYeEWYhK%2BZFuUk45r8NXiWPv8srBwMl%2FPBcWVBl3KvgInF53oefu0H1XX2yfK5CQpQoQsUEaYDxEb5zd1mhYKqBi7Bwrj0f%2BW9j2VNH5Iw3m6eW2xwOUdOGJoqBN1sKzNmPRc%2ByJTeZx3Rn%2FgTuYnP0iCgPczZYfnqQ%2BgUawS0mTcV%2BvsT&X-Amz-Signature=26ae7e9b5cbbf278c9fa0b29c655a572d5259121fc7332b27a4f4dfeceb5e052&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
