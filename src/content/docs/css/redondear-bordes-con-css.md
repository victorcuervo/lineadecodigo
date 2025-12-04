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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JSX2CL3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCh4eRD9vZoIQK0fOiQUgNq1xQPCLLDSotGqx7WiY%2BNTAIgDWyR5dkwoM7Bp0VOd2%2F1ZrS2sdztsf5SGj8agk2aM2wq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDq3yQc4wC%2Fp84wRFSrcA%2Bv2ArBK0RA5hdLIrARIuKlciDqahHSrieI30%2BFOHYnxvdwZeVz%2FWzwTYiWG4SJWZU4XHLU%2FE7IOmB9FCmn3IxYzwJEZEuoa9dhjQfDE9Hlc%2Fsl30H72UWvvxWCQ2CoWB04H3X0av6LYkQ6CZYGD4npdnxhvPOaxwXWs2Ifl3EFYbK2Y6iC%2FCh6%2FaOL3Yxbixg%2Fpkv%2BydqWlJl1SSvLt0v06WNbkfp3sDkOL%2FRFbzFp1lq%2BTMCletygvgywZ9qS2XuU3GR5rtxvsoesJvhjLMONM7%2B1b%2FmmbYRaTfVznwZxvayrrmeUgYmcjlTCGDFE5E3NSQqh7dU2675GIl3R7h7aF21mQCI06INg1j%2FSCeyjb2tvAMlcgJeXn2dA0Ur6YBCb21xeQnJHcsl3yzneXwCRhvBIf2iJfJHJm3pyApsmJWPqJkZMaArOIK42czoU0FDGKqXyym5pDHSEfhJcxNk85O7RNIUNFQ4OAqa1W5LmwPofxny7gdsE88%2BUC8TCgwbmXoqgR54jCq4lx2xhaNeel3hUfrH6r5aZLwIgZyZrxh3jT4kS9wfKBCyRq4R2rUUFfpU5A1PSepVSJGhdRbBl%2BDuKotZ4eZrNp%2BkS9QHwRSAq2L2ni03qDWxEbMJKixskGOqUB1vbCvHKf6LlzEpKo3BDdWkCl675yoBZs7MYbfbDuROJHgdmeMRGKRA3aLqt%2BB0zyxbO3RHKxRSacAiE1oLt85Mqd0IQJ7dTM3yG4YQ5ACGWSVu2VznTkEFOObk%2FejXqlSV3cK5Eg3yTkeNnRjkRhTp7OXIPDiEb%2BJlAVVHr18UB27ve1sivUEWTS00XOrGkALnzq8uXBFb7n9M3zvRFh29gEdA58&X-Amz-Signature=6565ff5acb3625a5ead92c6d1814cbda1056a853d753f0d807d8098a3dfc621b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JSX2CL3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T143456Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH4aCXVzLXdlc3QtMiJHMEUCIQCh4eRD9vZoIQK0fOiQUgNq1xQPCLLDSotGqx7WiY%2BNTAIgDWyR5dkwoM7Bp0VOd2%2F1ZrS2sdztsf5SGj8agk2aM2wq%2FwMIRxAAGgw2Mzc0MjMxODM4MDUiDDq3yQc4wC%2Fp84wRFSrcA%2Bv2ArBK0RA5hdLIrARIuKlciDqahHSrieI30%2BFOHYnxvdwZeVz%2FWzwTYiWG4SJWZU4XHLU%2FE7IOmB9FCmn3IxYzwJEZEuoa9dhjQfDE9Hlc%2Fsl30H72UWvvxWCQ2CoWB04H3X0av6LYkQ6CZYGD4npdnxhvPOaxwXWs2Ifl3EFYbK2Y6iC%2FCh6%2FaOL3Yxbixg%2Fpkv%2BydqWlJl1SSvLt0v06WNbkfp3sDkOL%2FRFbzFp1lq%2BTMCletygvgywZ9qS2XuU3GR5rtxvsoesJvhjLMONM7%2B1b%2FmmbYRaTfVznwZxvayrrmeUgYmcjlTCGDFE5E3NSQqh7dU2675GIl3R7h7aF21mQCI06INg1j%2FSCeyjb2tvAMlcgJeXn2dA0Ur6YBCb21xeQnJHcsl3yzneXwCRhvBIf2iJfJHJm3pyApsmJWPqJkZMaArOIK42czoU0FDGKqXyym5pDHSEfhJcxNk85O7RNIUNFQ4OAqa1W5LmwPofxny7gdsE88%2BUC8TCgwbmXoqgR54jCq4lx2xhaNeel3hUfrH6r5aZLwIgZyZrxh3jT4kS9wfKBCyRq4R2rUUFfpU5A1PSepVSJGhdRbBl%2BDuKotZ4eZrNp%2BkS9QHwRSAq2L2ni03qDWxEbMJKixskGOqUB1vbCvHKf6LlzEpKo3BDdWkCl675yoBZs7MYbfbDuROJHgdmeMRGKRA3aLqt%2BB0zyxbO3RHKxRSacAiE1oLt85Mqd0IQJ7dTM3yG4YQ5ACGWSVu2VznTkEFOObk%2FejXqlSV3cK5Eg3yTkeNnRjkRhTp7OXIPDiEb%2BJlAVVHr18UB27ve1sivUEWTS00XOrGkALnzq8uXBFb7n9M3zvRFh29gEdA58&X-Amz-Signature=e09a060d30a50031d030030d6f7437b8d22711c5c613ada0a79aa0572722d7b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
