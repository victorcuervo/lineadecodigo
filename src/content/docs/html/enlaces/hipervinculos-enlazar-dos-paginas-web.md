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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VN545ZWC%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T173830Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC06gfMjWqaE%2BpkFqQzxG6lzuXSejy%2Bh4DAk2cC9rChuAIgf62pbi2vPXhcD6sDUKvyyPLlcj2vgMavBY5wmyfoT94qiAQIkf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMQWuce%2BYbNmfFVLyCrcAz4R82PHUl%2F8SFoLeskp5jX918zVhdzSeq4k75LjIgDGgPVsugG%2F%2Fz7XMT09pbNFD260v95A6ux8UVbP6z9hSUecoPWdV4JwY81JY8QKikyyF5sQ0TcXjTNDyGJld1Jh%2BVOx7PqGZpfKmTyTB4e5uehWPdoizZqsrzOYXHC2xcIukLhIcjxpleOi7ZqFux5ccn%2BVpPw8zpkfOUgnfxaq%2BTmm7xP3g3J31xZB%2BK7peBXktawzxJQ3Y0%2BkArv%2FLa05ez8KlaQ6ZZDqzDMkASoUXHD14TDkJcepN%2BonUWZjj7wG%2FjhE8u2Q6kaAINBYSj8nFIb7ngSSQLZkf%2FFuCgI70PaIJ0GFuKGWzocI62aQ5Z7DQQ3056h6SfdZenSwhoB6J4We2XZ0cpnjiSWVkSRldYK9nTv5ZlPElclL5OKZwFud1dH%2BnzMBrhH9KoKcTvQw9e32aRDipSMODycoi3us9ERdDXayqkImzgXa2g0LP19FtkxNr39Ggno9QcA5MO4u58u%2Bjdaie5%2F0CXUfxDS4%2FNONwJH0wkj%2F6pkSxAE%2BTvguPdfRUNaj70jTzeT1U849OUP%2FqZqeIO0C%2FgDn83fCd0sKQ99%2B5Bv3O6c2FbYUuPEcg7lNRKKoH7iDPt2lMNC51skGOqUByzUmjj%2FaOwyRZJbApHfC7BclFny5MvOAQmMyeGXl0X1yPzQH7CkAfYCKW8KILiSbcddmyCx54Ff30NXl13rH6171NHyJwH4xSQW%2BsDBSMso7WE9hT%2Br0ppppC12T%2BuYS3xkYdwA8%2FGVCy8txaLYRBP1twiP7vkmcmOQeZj2AiWcl5SqFrmjpYYNyiNqtRRWCXT%2Fu%2FGeYZ4N8AgwIeQgMISJMnpmP&X-Amz-Signature=e1714d0c9c7d2081cc2bbd2fe96146e925b0f2e5cbd048630d33c9b85a155546&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

