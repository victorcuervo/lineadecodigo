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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TWMIOJ4U%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T104402Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDs%2BhcmLZ1jGrvCE%2F6bjOp8vdyyUbz1ewVClOxyH4q4JwIgUIbqVtQwC4xQ3IXSS6FaHqEa%2BW%2BNbDn2i1p4tnJNmDcqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMUHoeHpkjdAEv%2FojyrcA2Dh7xFam%2Bjax6c5%2FO6XpbmaMUSJSjNdV%2BIFhOBwodHATrUZReqb4OWgwJo467nhxxLbYaSQ2lxgko2DwRSzHJaoCMBV5r2OozmWArC8tgkINHgkGFkMoOykjJ7dD83%2BeWlVq5cqA3z7G8DAoyTEssPm2ckuhBe4337xasCAKXaGP3dMjXZa6pMvsRkxEA9fkxL%2FzqLGjA%2B9XaTgBPuFX4pZ2imoNwq8cRG3Z08OClOXvtUBaQDoUKl6%2F5SavVlVxAP5%2FQ0ZoeEim9QdplZQz2TLYz%2BJtzpXO1rT5KAlrhP%2B0v%2BZck7ge88DdF9rZrF0jKmSHduqIqMM%2FiI68EIQzoSKa7V5V%2FvtiIkPWY2EK3e0aH%2FcaLlg%2FTeK3z%2FmujFLNKLm6FI1WkY%2B%2F46066aQYVIxqW6v5t%2FMMcbPL8wAXGKelA6rb6uAb%2BlnnS%2FZCmwlIKqF5FJIJQgWStALjIuuQ8CYRGueY0KuG6NiIlPfNfBUE4MMaTBzcp5REyAsuqciTxveP3GoGzQCAo1l2IuPuvoEkD54nW6geBv0C6MJuIBJIeb4A%2BiMdFnC%2FGR9EI203hobbkV7GGdxL4gM5myR3bXsSXkxkEsesnRM9OBDAHQOGxz8V7zUM31BUsasMISa1ckGOqUB9ijlw4mLqY6oDPSHegXkJD7uQd5SFKMmasR9uRnY7spPFyxEjmaxFHP82xMQQK9PAKffh1yGB0WmTZPI7w0sDVbjn4kt2UhHLIbgzDzWlcksVVJkpaiOK%2FukPsgI9X1cSjUWBnwEA0wSY4TVf8ZTvCsLDNS%2B2wyt4b6bbu12wiy8v6lSFXNHo%2F5ol03OGNx1FMf5uoBOzrULgcMiVQuNTXrW86zI&X-Amz-Signature=ee60c927af244feae2439f2d75542affd2532974e5667a7380d8dde531192cc1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

