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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/850d7b78-c18d-4936-afa4-b133940116f2/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZUHQAN5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTxzF8c4iv6nt16Bd5tI%2FYElHUX%2FRPwDC%2Bpy6MHvekxAiAaFO0HuwRWj5X5hu9B7GhnIEVjaR83IsSKeiY1nILh%2FCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1f4m6IbgB4zYlTH%2BKtwDGB18GSkbySS0ayRAIwFkabOGfOAh5bSeEKLKwXqu3itWSDr1dTSWVwkiKf0fzlempGS8K%2B8kzDtbdyj2TIox9B3ejmq%2FACX6APo9okequWZao87c039bZ7Iom65DLQ43ACGii02tMERXA8m14mpRDvKmxUtNfyKGQJRWrZqqkCxb%2FcYLhfv5FUucio00jBA7TbiGcIc8h4qSfz5hfXyJIpxknmOhPfvTLGz8ApwIKe8pR%2FE7Wo1iQcGgxvTLni%2FuN1A%2F3PACveLbkk4xj4xQlJu2eiffopEbbryKwkpLcp7nKwu%2FwT%2BpRYWLjZvkswD%2BcaQ56nwUXf32xNUZAa81MQkcejj9Rbegd5BY4GjO24jyu65Yk5wRIwhttlhr0avWz%2Fe68fZE%2F5%2BPohTskSvXa49RmAaJqEU17p2CY1n%2Fu6WhhR8mME3G4PapdZsLwTUCZQ6cas40MHcopEc%2BxZrB3jdl2nvOijNpNV0XciGpH0%2FA%2BCdXaE6AeVKlmBZPtGly9yg%2FRUDNPYR424zsYIV%2BS08m32V94%2BkzYHu%2BIkJwxguDQnyDs628e2r8bfu3pjWHjTS7nvNS1zeK9FGflAQ%2BE7n2Ev8wWxN8hsyGl0yeoBbUtOm8UojibuQWdukw%2FsfXyQY6pgEj1ysYZLCC08dI6AiTzO9dAU5v7VDjwqO9gQLeI4n%2Buw3lbHS3HiX65JdTF01vIh52CBGLWS1rBZnCZHkLjxgLerc6ypTkL9I4ecVxuZt%2BRvj3mdcObf99j9dRKMMf16cfTYd0aGAlzNnuwiUb0PtRCT%2BykGUn3Yjg%2FQHVPjZtT3Z9o3Yy6tYmczv8kIVkQybmeiLGPJ8l0SbZBe8OjIT1n3vd6JWt&X-Amz-Signature=4c0f37e765d83ed00a8323cb98d77b994cd3bba98513b2b8d9cf9a64e8f36678&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/15c6991a-0bf2-42db-8b7b-95ae526de206/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RZUHQAN5%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T212906Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTxzF8c4iv6nt16Bd5tI%2FYElHUX%2FRPwDC%2Bpy6MHvekxAiAaFO0HuwRWj5X5hu9B7GhnIEVjaR83IsSKeiY1nILh%2FCqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM1f4m6IbgB4zYlTH%2BKtwDGB18GSkbySS0ayRAIwFkabOGfOAh5bSeEKLKwXqu3itWSDr1dTSWVwkiKf0fzlempGS8K%2B8kzDtbdyj2TIox9B3ejmq%2FACX6APo9okequWZao87c039bZ7Iom65DLQ43ACGii02tMERXA8m14mpRDvKmxUtNfyKGQJRWrZqqkCxb%2FcYLhfv5FUucio00jBA7TbiGcIc8h4qSfz5hfXyJIpxknmOhPfvTLGz8ApwIKe8pR%2FE7Wo1iQcGgxvTLni%2FuN1A%2F3PACveLbkk4xj4xQlJu2eiffopEbbryKwkpLcp7nKwu%2FwT%2BpRYWLjZvkswD%2BcaQ56nwUXf32xNUZAa81MQkcejj9Rbegd5BY4GjO24jyu65Yk5wRIwhttlhr0avWz%2Fe68fZE%2F5%2BPohTskSvXa49RmAaJqEU17p2CY1n%2Fu6WhhR8mME3G4PapdZsLwTUCZQ6cas40MHcopEc%2BxZrB3jdl2nvOijNpNV0XciGpH0%2FA%2BCdXaE6AeVKlmBZPtGly9yg%2FRUDNPYR424zsYIV%2BS08m32V94%2BkzYHu%2BIkJwxguDQnyDs628e2r8bfu3pjWHjTS7nvNS1zeK9FGflAQ%2BE7n2Ev8wWxN8hsyGl0yeoBbUtOm8UojibuQWdukw%2FsfXyQY6pgEj1ysYZLCC08dI6AiTzO9dAU5v7VDjwqO9gQLeI4n%2Buw3lbHS3HiX65JdTF01vIh52CBGLWS1rBZnCZHkLjxgLerc6ypTkL9I4ecVxuZt%2BRvj3mdcObf99j9dRKMMf16cfTYd0aGAlzNnuwiUb0PtRCT%2BykGUn3Yjg%2FQHVPjZtT3Z9o3Yy6tYmczv8kIVkQybmeiLGPJ8l0SbZBe8OjIT1n3vd6JWt&X-Amz-Signature=26ef0428b6f3ce9b0a6e79a6c051df7286526469c11f5125e24b69f8509bb743&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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
