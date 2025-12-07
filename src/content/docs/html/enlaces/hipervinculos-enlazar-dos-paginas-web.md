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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQ2AEODS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025328Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDtGdxBtzeIWk2%2BYek1YPCKIzVXnBG4oPGKiGXvwxrfGgIgJ3m4Vl8kgw7qbtRFQwpZEd7oqfCZ0eCOhZG1e2Ps80gqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLUXa5pXRfBv%2BpfQAircAxJ8JvblRuaSb1V2TxDsBFk34ud9AqcfogQD3%2BfNlQjrDFyrr6ebpepymzKub93F6SIgnXwVR9%2BXW8ZrJAtTeXtV12n7BaW2g9X4T90ajQs40lFuP8wwdOLF%2Bnp%2Bl31ZpVOSx00%2BZ%2BsSxbvVSPKvVpL3d6mpTn%2FDqo9NEyr48rj1K7nj9m9uKLyuTNcczysp%2B0IKXDM9Sw3aPMhU08lSx%2Bh3k3utAmcDY3fPXhn3oaRRqwqfBz6tjrdQo9xCrlwMkgrtY3idosXJUzYEOl3wiI8IdgaJ0j8%2Bau6lfpKEwItOFCBsaF%2F7VDWn0CynyfJ26MH13TbP7NPM71bJ4%2BwenBLC%2FGrxBJddLfZSGpkA5fRXA%2FdUoBKd0buWZnYFSoD51Tmce8%2B9AXJTgOBHEN8otvU%2BqiKpNPBGZlxYrhZSmdSvSmCM8AsT6UlvMxRz8uLWHhmiKREMCjoPLE8PFopA0kpDG2Gni8%2BwWMbuLFZJXbXIsmGWVKwNJ0oiJ492C1VGQ0Pm1Qwp7rODqFmCSXAFAkkBH4zS7%2FcgYjAA1FGSYqAD72NsO2tE3dN%2BgTh166SJOTGAXvIXu4BNI0vdqaY80%2FOSBcz6mSe1h07lVtG0lMYqxySqdnx%2Bz0ht7oXFMLD%2B0skGOqUBaxw8i4uC16Tltn6N%2B9vEp1TXJqyCXyjmZwT03cMCnxWE8F5g%2Fs%2FJHYgVEaLVQmejMA%2Bfy01OS%2F8jf%2FAfuvwhq7c%2BOdyR3lzoNviwKy2O4DI%2BD4rdxtFt8Qs4hgSe0MAFHNpYrQkG7f6I1wlk2Nj%2BIxYVCaUQlhOeWds%2FdXEwiTwiSUk%2F4PyyFe%2BHmimHLTkNPSZKzK638aIlFUkFIM5oQogubf7J&X-Amz-Signature=9b80af8951c80d4ce1ec056eab234f08c65982536b70d3740f2fc661dd869eb3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

