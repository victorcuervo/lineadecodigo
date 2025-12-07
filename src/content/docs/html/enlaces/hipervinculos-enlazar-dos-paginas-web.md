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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46654AEBTLN%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T162856Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC93R1np7tY8nXsPW66rpiuobVXMtTzG9P8gDaFb2NexAIgRkOwMwSonosA6LM56NZm%2B6Nt7%2F6wo5wCA4NTrne4ttoqiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNtoQpjUgdSrIrY%2FMCrcA5eXTCSr1mi5Yhp01IiJ7oV0W769hZk%2BgS7C5ygEYvtlI%2FeP4bKhVsNmzMx3zC4aCGS%2BYh7TEKA4UFp8yes%2FAMFEYC4l334uqQruY1LKMCW4g1PNkiW23f7OxBubRM42wUEu3TTL8NysVqtYHTLT7uMQfFY9WRPy5B1XM0cpx35Kgc7w%2FKzKVT%2FJ9XlygLAc41DN%2F%2FWwmxapG5wwr94BM6sCI1ZPPfmkjjTqg1KMxE%2Fii6bLkyrU77vZ3P4Rdam%2Fv14OhSzCrO22T3rUfyeTjC5IjM9JzZgtKLm3rvQ2naa%2BVtUz06HBXYAtR%2FC9jHsoQ2HQgoeyxB9%2BdJYuzqXWkOagYID8xXZkWvA30PMlnNU20EfNz2nCy700BiKkgaARRm9RTBtsRzNV7K1RswkTr5eLmH1c3NV%2F3z3sfkwmi%2FmoxADJQN%2FJ%2F92szcbDiG4YzsuwfA85RglQwAvJrm%2F81Sina4m0fe%2BgyNDXFoqsfnxFsY5KipHmQQf7gTWiX0o2M54VN06pKo%2F6fmC94%2BKMij6W1Qkjsp6k3NDWAdj7i20p6d5AAHG11TSLm78cTUEgiXyrxyPZkmZeYc6aUg10AgHiyeRMH4U5GnAVvqPXD30%2FkAzH6Bu17LdpQK9wMIS21skGOqUBKzVvqRc2RD1s8N32%2BnIl3NfYpWTagQLGAReCrUeMeTtXSnL6YEKgtnPV%2BX%2FpkBTTJKoDYVHSMA2LK0pzh5IFAf1qmgDZhYHkrYm41j8L2MYx%2B0eM6%2Fu%2FSRMvK4%2F%2F268ENS2v7mlaylPjODlD3eS2ZoigDbaFv%2BWE7qUvC66gnAk18CpsQvC3oq%2FOeH4HNCcVlVc4p0bZU2%2Fzw3ndbrJDPl%2B2TsRI&X-Amz-Signature=e9d910c90dce9f538284a6a02ec50309b4bf14cedcd80860eb50651d0cc1d753&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

