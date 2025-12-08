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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662UVUG5NO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T004325Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIELvDz6tc%2F49NzwS3Y3pwk1aoPpmaPlJr1bJMi%2Fk%2FWNIAiEA%2F0ggvSxMf3n1vkEJUUDorwBxzoKOX8NCKBikM9zSlXgqiAQImf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIgt4X9J3M6zp9YKvyrcA0exy8lX7R%2FNjsPu%2Bt9VnlfYnBKqasy9whSxBheF9qhY1RL3uYdJxM%2Fy1ziR5ztV3nRAihbJ3vZFiecVd8D6eju5qkarkZ0w4wCo1SuQcY7x60FFe56XkUx38%2BVo83P%2Bo5S3MasSd7BTzu5tfCIi6VaWXp%2BH%2BEFk8OIgVoYGEAu1zIJ9xxLPQm3NOJ2oaIfSAriP5YZ%2BqvxTS0UMLCzQMMzc3Dv8z8myPGji9F1pv4BmqRLnfVBXdUkSOGeOZrcJmw3mLg%2FBukQRLgygergcFligkpyf6aGMVPGNAScQUFcBr5n4InbvQ3sQFAjqbHBKTBOR71CblkXlSMQw6miBhN%2Bhk5jwMPXFNsXmD7eAohH97cACQduTThHnZK8RwCeLM6HJPV3PfnP6ElbVKaf2%2B09NYufszownZZLWTtxZDcnqZkNOkHScZBLd%2BjRoiED6Q6EA6lydZkqWxso4yayOPPnX24Ql5UZEzUmKWB%2BCDt7nj0vL3q5ER2HFzWwX6Cuc2fL8zVv5dA8yi5W8CLRHBdQtxytknx%2B3N9ertQSx4lGv9U93Am5SfR6dyuA1Lzaj4iK%2FYsTxTBJZoBsLN62I%2BsUB7aiTkbIshExyJq5qPfdUCOLeipwu8XtMuzcSMM6h2MkGOqUBROnuzeuvPin%2BV2JIGR8ziyDNOVv3321U8x4qayw%2FX7smA4AODcqUVCY4hG9EhvNThXkfMU1tr2BbaJ1EigcOBgNG5PXyBNWBwW6GNm2V2iYSvOPvin9wzqqeuEfBHnN9S4qhSwcRrf71YC%2F4HtoOxA6vOsTMjWNiYnZLnlR58COChUkjqGbb3d%2FHRAt8QEZI98A1DURT%2FS%2FNMYlEpNn0cv9DMQ6I&X-Amz-Signature=93ae4a9745f12eb89e481854a91027875586eb748489912b0a89ae2e8e6eb913&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

