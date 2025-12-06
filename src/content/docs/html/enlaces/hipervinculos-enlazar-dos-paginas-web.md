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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Y33W55H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T003616Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHo5DpMARJtJcPhRqf%2FINIJM7cXQ80kKaw2di%2FZYT5pSAiB6Thfoq2gSQSusuydiN7HNE1iWWkyZZgT9s1K7oiKVVSr%2FAwhpEAAaDDYzNzQyMzE4MzgwNSIMI%2FAL3CHn8Lga6mddKtwDGlyGKyqjIeGpCj4pSEGG8%2FcREOjLPJdPTUesWQEgNQx0o931UT%2FwifW5GRsbXBXYjuXtUFpX6xoiZWtczR4uX9LXV37IdgHC9iM7850z3Ns6w9ERvu5SPdbymswJVQeguf%2BHpjHFlBxMUKg0RsWlWuP5bJ51pGCx4tr7kb8ehkO8C8z6kNfnrd4O0ptd%2B59%2FepSVGOWcnX3SQZSAk0EWeY0woJGGrLaFgoN8oYxxJSDAFuSEOoWTlrxlVzcclRdsajnz560CfV0oiV6D9wsyJe5zvVENeSTPFuQA45mWOWfsUMXU8ZwiSgdrdRBzuCUZr2ESvxHf0FVpKaVZKB0u0n0qaShGjQ7DXkpaWkE8scBzem%2FTKkYhg9sKUyYXd0HFA7XMnTfEltrgjEcfct%2FaS9a2Wf5GEaBdFdWS50ihibFZRFMZ%2F0%2FoqtRI4TVQTpqfXnVQG%2BMPy7H5SaDHoMkGXZ%2FuHo8co8C0ygyNSj%2FGL0DUvnQ147VqeIQmlZhzHljRQVJtlSUfysOBOQB%2Bz%2F6D9xGtxFi6dAlUBhYFAbtw0ROBvEQkXUCpORU%2FTghNv%2FWHY5pjG04GamHT9KfAf%2FwHCBktx2nPX39T2i18cG9jwi6USJOTc9aoFHACIGIw4unNyQY6pgGwIIpaZhNU3hUC%2Br74GR%2BM7yHBF4Obz4srrkgOk%2BlaDGZLDlRKlBop5lpI%2FS3aWAhKXqiLupjHYRdazw270BauwTD8lxiajZdHHu0lTXKtzlu7piKuoZwFb2KWSpyGy8QCOOY3LsxttSKI0UrEEmC%2F1mRf9H7r9oP8IEUY4ceWtznOmNAO9%2Fj6bw4EBMX2gCE83HBO6%2FOmQqo0mhre71vRCHHdFkLN&X-Amz-Signature=31341eebb6893ffd9537257a306d60d665fed37212bf389d9bfeff948916fa3e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

