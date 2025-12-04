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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WG326Y7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICRHw5rUILYihESRGkNNqUxXOlsPbwgr4oeT4%2F8CAj5kAiBLD9gOjsGDRgml9261Y2spplEx0J6y%2B4xjeRWeqspH5ir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMVUkJQe%2ByegWHbMQKKtwDCXHYsvhArmDkjttV5utcgx15znBH1G58zU9jxHa7Zekukah3r00oN8NWDqRmLum4dvLmviTBl%2Bz91ad%2F8lLIt%2FGQsoFBcVHDAfkSh2EVG0b0%2B5AR2K5E2wlPikjKNuGDEOAfM7wZZ75Z79Ell2g3JoKwBjIOadHVBzpwB64t9GhNqaETGxyDPAy18Ky9eMHQGoua%2FLFEE4IQbSXye6%2FjxBMmJGFkKTPfYjgVv55RlRX5RvnwSBpUyT6cpnIIBgN9YUvLF1hPTk4ze6GvcuW1CuXa8oZ8%2FpP%2FgqCnb%2Fwr7mdpFUrCLnIcWkCAo1bYNsnDJP94gCdURefqARTAIS82nP3kxV2RHHee5zm02FuHltk8NDDiTQdRe41%2FW6zsMVfPQuFqJcf7lGFwEN7p4TVhWNNQcFkNnvsrms1FB%2FsYaOcdlQwkXFQ%2FXSGmFCe3Hkzwjd8BTGWAbWL8oekA2tOH5MZJ3epCXuLO3azRvd5dIHTY5KRM9P8avh%2FS%2BQv5GZPTr5TNYhmb24GPDBzZNgfRsupgaf27yvdX6QIRCsFoaOk0gKstSiAXRKJsJF83WQdQkAhhkmAITEgCDtj%2FNzXHqZl1ldBiKV0kpiWETiay1kzXKZGXDDOjzACiUckw7tTDyQY6pgEwSbbtaYNj%2BXMRVLAlgbkoFAm%2BwksGwU9RKmNy2KoRAZYLvh04HVw1oT1sWh7Z1VKChWyJhDryzX%2BfBIt%2BIqnomDiIoYNqTWJmiTmKrdRHwMs0u8UztVBeeAiOOYCrxL0UgIIljmiZjrIkzQe%2BgP%2BmWnU5TN03slswUYTgv7p4X2Swk3pHWc7%2FLdRQkFfEtPAnefoukDhAlVXYXPbVBmbHQuacyxZi&X-Amz-Signature=ff771ab44b8c8944c537aed20d05f96760ee4aebeb577d6a51ee1be6fef3fc0d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667WG326Y7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T022824Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHIaCXVzLXdlc3QtMiJGMEQCICRHw5rUILYihESRGkNNqUxXOlsPbwgr4oeT4%2F8CAj5kAiBLD9gOjsGDRgml9261Y2spplEx0J6y%2B4xjeRWeqspH5ir%2FAwg7EAAaDDYzNzQyMzE4MzgwNSIMVUkJQe%2ByegWHbMQKKtwDCXHYsvhArmDkjttV5utcgx15znBH1G58zU9jxHa7Zekukah3r00oN8NWDqRmLum4dvLmviTBl%2Bz91ad%2F8lLIt%2FGQsoFBcVHDAfkSh2EVG0b0%2B5AR2K5E2wlPikjKNuGDEOAfM7wZZ75Z79Ell2g3JoKwBjIOadHVBzpwB64t9GhNqaETGxyDPAy18Ky9eMHQGoua%2FLFEE4IQbSXye6%2FjxBMmJGFkKTPfYjgVv55RlRX5RvnwSBpUyT6cpnIIBgN9YUvLF1hPTk4ze6GvcuW1CuXa8oZ8%2FpP%2FgqCnb%2Fwr7mdpFUrCLnIcWkCAo1bYNsnDJP94gCdURefqARTAIS82nP3kxV2RHHee5zm02FuHltk8NDDiTQdRe41%2FW6zsMVfPQuFqJcf7lGFwEN7p4TVhWNNQcFkNnvsrms1FB%2FsYaOcdlQwkXFQ%2FXSGmFCe3Hkzwjd8BTGWAbWL8oekA2tOH5MZJ3epCXuLO3azRvd5dIHTY5KRM9P8avh%2FS%2BQv5GZPTr5TNYhmb24GPDBzZNgfRsupgaf27yvdX6QIRCsFoaOk0gKstSiAXRKJsJF83WQdQkAhhkmAITEgCDtj%2FNzXHqZl1ldBiKV0kpiWETiay1kzXKZGXDDOjzACiUckw7tTDyQY6pgEwSbbtaYNj%2BXMRVLAlgbkoFAm%2BwksGwU9RKmNy2KoRAZYLvh04HVw1oT1sWh7Z1VKChWyJhDryzX%2BfBIt%2BIqnomDiIoYNqTWJmiTmKrdRHwMs0u8UztVBeeAiOOYCrxL0UgIIljmiZjrIkzQe%2BgP%2BmWnU5TN03slswUYTgv7p4X2Swk3pHWc7%2FLdRQkFfEtPAnefoukDhAlVXYXPbVBmbHQuacyxZi&X-Amz-Signature=6720fa0272257b864bb0777bd80c865a81ac2f1a53fff8394c84123c395aee63&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
