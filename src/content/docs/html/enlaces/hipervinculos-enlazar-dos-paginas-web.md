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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZY7BHYE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T080838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHB5t9gQlRHs8khvkUplpEDguEc6fG9t1i6rc6zC5Y%2BXAiEAx4lP%2FRapCtUbmujgLW%2FAqbyfbgY0MvDKuWbrYQfei%2Fkq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDAffu2t%2Fl39EP8huqSrcA00A%2FxYisOcwg0QPpt1J%2Fhug3ng24N7ueKb3n%2Fjqdk32pimcvfTkPGlHT6EOVlj152MYuk94%2Bm6MFJk8oQS9lRkJk8j%2BaapcTwXirLbLG%2B8tTktaecuz7wrSZLMUXVX%2B7G6B902ZveKlV1UNS0FJt%2BCFoKVJeAVUydyZ1ij0sEiAzHWyIRo5PPICNAoeFUvp8N4JYf3v0%2F0oDRez53qF7sl455vveqLpKizqZUBFGE6XIeVhlpP%2BFlIPiKwY94vwKYnslpfry5rmKdyV5qJ%2FaVdHGd5wh26y0Ma%2Bvn3IeApCi8mD0izIbMAs8F%2BM29KCT0Kk337aa8Dra0UiVN4eMiPF6s7TkqeWSMkeMnPdeWjk2ew3GkxfEcOMer%2F7lDiV%2BHgyTfGUE5if5iQh1skxK34ZY4SsbuGM9eReB9%2BD6jyFRxJqBTNvrvF0MnVrKSm9W7prN5xbERUcVFJQiydxaW%2Br8xuMaZ04Y%2F%2BysKB11M6Kcu9pYsE6eHjWcoaHwxlp2RaEh26ulYO3Xm0HpWapdWk8xMt7DKSro9iyvpKxrhHmZd7J5npB1qsghE2iUa1CS4m7ty0eh1XgEKmhxoEsBJUNrhlmh89FBggIDyQIYlw2CF4RE0v7XaLuWfvGMIqsyckGOqUBxSMmaxVk%2FjFd1Kmx6KX1vUwX3PWpfcjScAaZigqR6ByK68mhxfzMEBMkpY%2FwTpaKDry0kMUkBEsDIuigbjvbAhfx0ltabqujD%2BHBYA3F%2BMOwaGOvnBJmZz3cqoGzL%2FjSoZ0C%2F%2F5PY%2BIW%2FfdjNGUbRzARUkUbCLkfiHxosoHLDT4nkkR3ISh6fyPBaK31KlVTKHjN6AX4eagQbjXhNExJ0KzpfVX2&X-Amz-Signature=2c055589e4a2be868127cf1f567125fd86a506caec69a7b483cff8607dd65fd0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

