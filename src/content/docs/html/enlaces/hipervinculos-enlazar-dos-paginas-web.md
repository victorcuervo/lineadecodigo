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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665FEU3UCX%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204423Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGqa0oa0IBf%2FKpLXj3wWpSe76EiTRKFGG9XjdmwhmmZVAiBJDxBpZa9REEmY5WoCiih%2BVYiXUVirkv8zqptwDOIw4iqIBAiW%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMwyhY8D8r2CwVCyXhKtwDm71sShzCItJdlcTLbrh7YXcnjzhZqDEzlfdh7vEMGIXqAqXx7KdvuC7JNUrLQ0XJITt7F9r496pFadZktcYBrVZoqd0CKkYJXL7slcqcRHgGSN2geJBr0zB%2BG4rlInuy80h70DdlyfCMBUZc12UpxiJKz361nyhE%2Bp9ybH%2BZS1uljfMbM%2BEr7fnHuF01cjagQsLEQ9GISjprmTnmwIlBV6OXuUnfjVWU6fC%2FbtXUpYYlIdjGqxDnDVHzScmnc4d1hTmvs%2FHvn4soicpLE4y%2BsAL7mUo515dY3AnXQIuci5%2FlbV4NUQPW%2BrM%2B50euieHx4TPXXmkaTfk0VEYwJxngSgNs3wDptmWMhgJAvjX%2B6o2SQX1YB3lGdLeen1ixxGdFXGKM%2B%2F5QDvyko2SDUMjLL%2B27zgtw%2B8YUFpUbX9B5u1f3CVxuwTDb600lpDnm0CnX2Xw5uOXNZIWCKsYtTNCwyVYcWjG3Y3%2BstqqOG9QPl8RBq%2BkhEsjk7ho3%2FGVCWjoT%2BuUDGbi5BCLH07pAB8YPg8eaGBN1M4Zahk7x3KUCuMqHG50My1W07IeD6bQ5AXayYshG19I%2FdMV1cHHtFMFs1JKBu9sWHvqswAr1wyFuiqBZfQ4yAyLFp2lmYzsw9cbXyQY6pgEsu%2B9AKuBo%2BGxDiZ8LocG9vmDnYMOgcHzRswTZiW8fQXqh6I0DaYOrV%2Fx0vWIDGK6Oky4oA08WBNkqV7UDwC%2BXkaBG%2F0Ewydhbp%2BcIFALW6FwQx48k7%2FVEZEbbr35Jg%2Bpd0ZvRB2IR83bHUlQnw47ItABF7k7zQTyYPMgAjOUzmyTu1OlwP32U2bc4bV7oDWn6PvHnFHRoQ5WgOTxjuIajg2%2BMoKcb&X-Amz-Signature=48f386a462d58e144bb3ed414df91cb281e707f07315abfe347e723d06d978e5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

