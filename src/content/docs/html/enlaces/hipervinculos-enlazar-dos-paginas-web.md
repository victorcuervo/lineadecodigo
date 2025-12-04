---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
slug: /html/hipervinculos-enlazar-dos-paginas-web/
author: victor_cuervo
---

Uno de los principios sobre los que se sustenta la WWW es el enlazado de documentos. Así que vamos a aprender a enlazar dos páginas web. Esto se basa en el concepto de Hipertexto, que viene a decir algo así como presentar documentos que puedan bifurcarse o ejecutarse cuando sea solicitado. Esta definición se data en 1963 por **el sociólogo Theodore Holm Nelson**, mucho antes de que naciese la WWW.


Una de las formas del hipertexto son los _hipervínculos_ o _hiperenlaces_ o enlaces (forma vulgar más conocida de las tres).


Así que si queremos hacer páginas web utilizando [HTML](https://www.manualweb.net/html), lo primero que tenemos que aprender, o una de las primeras cosas, es [cómo hacer enlaces](https://lineadecodigo.com/tag/html-enlaces/).


Para ello nos tenemos que apoyar en [el elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que viene del ingles _"anchor"_ (ancla) y que es uno de los elementos base del lenguaje [HTML](http://www.manualweb.net/html).


### Atributos del elemento a para enlazar dos páginas web


Los atributos [del elemento ](https://w3api.com/HTML/a/)[`a`](https://w3api.com/HTML/a/)[ ](https://w3api.com/HTML/a/)que tenemos que conocer para generar los enlaces son los siguientes:

- [`href`](https://w3api.com/HTML/a/href/), donde habrá que especificar la página (o recurso) de destino. Este podrá ser con la dirección absoluta o relativa al enlace que queremos poner.
- [`target`](https://w3api.com/HTML/a/target/), donde indicaremos el frame destino de la página. Si queremos que el enlace se abra sobre la misma página, lo dejamos vacío.
- [`title`](https://w3api.com/HTML/title/), título del enlace. Será útil para que se interprete por los clientes qué significa el enlace que se muestra. Suele ser útil en temas de SEO.
- [`type`](https://w3api.com/HTML/a/type/), que especifica el tipo MIME del recurso enlazado, es decir, si es una página, si es una image, un archivo de vídeo,…, ayudando al [navegador web](https://www.ayudaenlaweb.com/navegadores/que-es-un-navegador/) a determinar cómo manejar el contenido al que se está enlazando. Este atributo es especialmente útil cuando se enlaza a recursos que no son páginas web estándar.

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6JQRS2H%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T232923Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCCtONR8gIKmKmfqOdomFiejf0f3OkiOx5TImRdqE42cAIhAJuRZfdAdMt6ylQayqFOpfglBawlAHHqEhfS1xn%2FdMezKv8DCE8QABoMNjM3NDIzMTgzODA1IgztolsMedvsptX20lYq3AP3NEPimDly5kP%2BVoZuhA7v4MzoHOKRY5FlknMkF1OWtdO9fLf74RcB0srUAU%2BUITVF5F3J5liT%2B6uArC%2B3RCpVLFYKxIiuPj6D0vqd6JeA5a33M%2FIPFsTHSGK%2BvV3tQIsvVjEuX9q0r9Le5%2BVOVSVv01ulRH1%2BM0ZUKscWZB8l5Afq6aKj4DDkGEY1uivOAbslO%2BkPnyKNx%2Fesp55BffTEWJAYe7hBNQAmYEXGVC9Ebg2%2BaZK03nFKmdlRiYMUyXLUDgJsbgrbAALkUV4MNbaFw2foxdkdF3YL3tGDEpw8%2BZAX5UihJxKKeAljQW%2FD9jM%2BrwfcFtaPEWu%2Bgh0FAirhS0cYYYxKMjgSQLR6Hmh5OAIlEYKRhFp%2FG1gEtCHbqP%2FI67kY8cMgCUdo05awq%2BNyEe%2FT7DWiXDoNAGGBaQntre9r3pD1KRbyKBh2ixTgEJy%2B5vxEwzuNAWK0y9PMGrlG29YlDw5fpq8yU1O9%2FomEQabmHQwUrxm9h642E5WDsk4mxRxHfKAJwyMBHq%2Bwpr7V5VNMhQxRvSwzmGUDvlt2F743qDZo0xkKZE%2BpCj%2F1hZLyadGlX9DTngQeGFIkFCFJEvZA1Jrrg%2Byur88ZptVZMOI9j9DUAArSfeSfAzCSjMjJBjqkAZJUBjMND4LrS2G62WLKypYzEHKurd4AddSEm%2Fae%2BxgK8Ly2pQBEB0ra7u2V7I3EqR5dsPKz09QIj81GtYAbOVdLUHIuxodx8RDeKZ3sDwCb%2B6Mpf3IRJhbo75Dp3b5vhOLueQ9pdFhEI9kp54W%2BAtBs%2B8R4CcKZetl1EsdDqau%2FpXl7Vd8QsOMWyLqnRUTvh8JW79lHnLQHYO%2F7dqeeNRco9X1Y&X-Amz-Signature=a8058f11e2d885840ea7a80dd9a9e1ae481d2c782c4b9456e5c3ab123249bace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

