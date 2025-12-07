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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WPYHKKBP%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T014303Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICcnw0ckNSvYdQtsWvjM7CTFATO7z5lMaYdejvRHBjaTAiEAl5HhpGuqBV7P4w87xE5nNCP1Rm%2FAUsGE1JcwaqClbKYqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCwFl7tzHV68kdxefyrcAwBauwldKAg2jLdybaAJh5BcgATr6Eqld7%2B59mvwPRMpgZUywvf4ldqAokU4VDIXu7cRMyCjff%2BUdnbTpnDbuLJkEsSxxSHnQIsy6HD0uxzmHELI4%2BOqRUIl3A50KyZ1slUcP%2BZAA4SsvLQm29opuszP4ttzcQZnRUc44qmotcGMUWb5dpo118Ztpgcfn1vkTNCjIdMoafJqf395hbkvieIsHL8NKKtCsaRebOJ2tkAwsAVKnYv9Ty7eYLZdSyF05mmc%2FjyOAIl3ZNu%2B3YSb785Aq0QjRw80Mn3XLflaDyM0urLOOqFnWNvE%2Ft0p%2Bhk%2BCdKLiNhJzJmcHiZGF9jj%2B%2BhjuxaAmkAzUNb9Q%2FEgGZFf5uEhh1Ps8VclGLZvATZP5E3kp1oBh9L2n67r%2FD%2FqX%2FhlN9%2F%2FSmeK51rOQCaLrpUTEZw%2Bg%2F0gSXIJGyqS8sGR8yAOYrBkad1%2FmRrR6qerVBXtyOVghdKisLlzmz3cxxt0XWV2cwCYdlp9JgvdjlrZZwqU3pnG3Q3O%2Bw0BSw25mu%2BJV%2BO8f1GQ%2FVFc4DiouCPw10hHfIh6lPXpxnZHszn%2FHZHR1UMtR1rPH%2B2Jbsz%2FdEYBZ7i1yV4GqZIch8078U13T5z%2FoVCbbPVHgBAwMPP90skGOqUBo6TvzdDHlPxxS7uT83yMUoWgIht0U841NGH%2F0ccLU%2BD1vc0TFjY7eRgiFOMfgvhosFaDcpj8n%2BaO5oKCnlk2ib5N3WR%2FD%2B5P8vF%2FyfpAqdnCIIUqsPJorxxSOZdnoXh02%2BnGj%2Bg2R1P6pBiiGcj0ihi3fw12P5wwFULovrjNAFdN6XADXwsbcLNdXBJuf6lt%2BoqP3j9PWdrkfHaryTijClYsverK&X-Amz-Signature=0ea144e04e914d175d077614604f2b65e1dadb6fea1bf8e512d6dd2beed6bd29&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

