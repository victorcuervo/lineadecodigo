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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q6ODNCRI%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T065400Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDdrmm9zs6kmMLfc%2FVhnqSLVaDklOkKqilBvUR3ULDAPgIhAKfJmfPM%2BKflSzKzCPnCadhWO3OmrA%2BF%2FX5dKEHvLSkVKv8DCHAQABoMNjM3NDIzMTgzODA1IgzdFQ4JMkbjOlRQRk4q3AMufadKiKTR6sescRMiqx7yaS1oBEkdBToG%2BLdyL71LND%2Fq6d0r%2Ffly35XnIZ%2BGmMkPstM771gzPsEX%2F9z%2FIZKgPWu7D0eKfUQxFBj9BJBW3QpqzQtaccGHsycYweoY%2FwXjfID%2FwG9To%2BMplOdwsMN37b5B9oeozzGm%2FKAF%2Fzo4dnx%2BN4ndmj9rhpy2VJ7Ligw5yOVYY%2FikULlbAwjU6khPS8Igsj52SXrpBKC3y7B4dCghs8GXxWtvvjK1MYQjYuv7z4%2FQQAkrqxT2WXY9NKJ6YMOTg%2FxHmVTqwaiM49PLr9WUWx%2F6lqXSg6aSyTLIKUNPR2NQtY48P18X6c1a%2BDnG%2FFSd0%2Fm5pDOuzXuM3ahe0bhUma4i1HjLWcsJ2FEj9eo54i2lkTSHhIgk0YF6k%2BvRg9WUkcNo7QdED%2BkXWXE7zBB0dIZDwLIH1cjWRgVtVHEpE%2BcxkD89eoWqaXLMYb3tKPEsIkAl7Aub1hpQCg%2FbGFFBVPcxuaEyhpf8F8eMe0EDUv7ugmYnu5XZkdmEpITXRSBkdsXSJjhlIEFqOlGCHVY9H5u2A3Rd6Eo8OJ1w29CWtmGq4c2ysXvsQXij25Z8YFC1uwDnkij7ZcFaVqw841FQOMRzUgtCjOgNPzDyns%2FJBjqkAblunud2mUNZPuJp4nb33nj59M%2BTZgKUCh9%2FaBTXvn8rd0oiLoV1M8r%2BE1Hy0ApdlJD9dHwpLpI0r%2FJ7Qw4h9R77KN1ECKO8IHv0rHMgNRyQ1GUFolj4a9cQzUNfAPVj2wpBhvfp13ryHcRnHjz%2F3mfEOjgI9g3RWp4Rm%2B1j10heQN0t0iv9%2FS2etA1gyla6iKbEVuJNOqLo%2F%2FFZuFxDPlctb75y&X-Amz-Signature=62ba6a2483e7010a3d360fabda4d89edd92b97caa9f67437aa0c1fed5c3d949f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

