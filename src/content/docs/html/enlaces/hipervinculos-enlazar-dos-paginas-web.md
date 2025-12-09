---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663Q2VD7OO%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T153358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDyNrLckNLMACg2%2BL2AeZb9KzDN3mNDzauKwbxjvtbZJAIgEI4DFR0Rot0o34tOrF1kgUvceKGJljXsV5iiIjyVKVwqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPsV%2FsA1o%2FR3aFQVOircAzfagKLgabXAjISscELovmjcg2tUGVANWqNev9XhZEtSxqZCS2%2BcqnWBOStNxQi6uAwDomFL8aazJNElpFzbrGHRhsedgJhBuvBT8Q%2BMYLwfU0Gkf6IIHB7vAI20fWeiCW9VnxLKYiwegEIZexoqBnDNvnS0QcrjuVlzejgsQt657EjrRhZ6%2F9ouOcS0tB%2BssWPrT%2F8ZRJRj365PH4kwsTJjR4daqI%2Bd5fRm6qSLYIn9JS82i6joaV25uTDjxAD4SpagXPAqIVsovYSTzSxEwCEOVLOLyfjKFCyUdzFbwqP%2FC3OdWJ5sEGDjHP6oZVBLY58vLjvOzrh1Zt9wBSk56nJMP%2BCaH7A7LrbrthD%2B9kaNfTHQkR6bDsmdNk6zMBKHUaeqesuIzYdzbErUkyd6OlfjoLs77rKYi6FpBfmAwVwdCQdNrAenTd3T56KFpZAl8VKzVzZYUsfgzZggbvh2NZlE1s17Mv4Mrutg5jyuFY%2BSl04TcX18WkO3QhceLeyhHCMsgriEfDgVa6UL5ao4%2BLekPQtd4WStjcbXcTz%2B5H0RW7Kg1CbDLVKrGumgPavrJkGJfwkcWoOjUG94CIKh5cUYY8PVV%2FB8XnPpnHkQ%2B9GmncpkyZEVjJOCJj32MILe4MkGOqUBECLXmuRNM3wgF7db6PpdqEWb50pcmwWMXd3Hp6MHUso0ci6p5C72CVveL%2FsHTmhKbIY7vkLPjICGWZDHiWF6rSnPAubT%2Fp%2B4lwU680%2BieXHr%2FWbyJzNNcmdjK7lzo3x1uu2hJt9N1vHWSby8Kb04OVsiuOyXng3aJWP%2BMSDHFKqqEwpDHEbTorwDhbKlHfszIt27E8b21z19mRlRDQ9YdD384cit&X-Amz-Signature=890cd45c9abba5c31e698240bad2e06be21a36ff9e922e57f8f8734c6e5f0fdd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

