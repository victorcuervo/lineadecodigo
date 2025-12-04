---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665RUWVFXF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T151624Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJHMEUCIQDpG22%2Fj0CoRDXAtf1WBkNb5i2sCUjwmX1QmKgj77EmJAIgeFJyqEW4nfowtdHFAOrwOkRi23LmHlafF8%2BtSBvQ5skq%2FwMISBAAGgw2Mzc0MjMxODM4MDUiDIuCJ4zgvFb1zHmrlyrcA7x%2FW%2BNiscNR2b81lqzk%2BBaeVtocVov%2BnSOeq6KzfB3dlYS8UdRaWkGp0ApcHRNlO2NLdBrSxfmXhCo4iS0aG%2FhLGzqRj464mkqcJfUNJI5fDcXiKmokHV44Swuao%2FFDlQg%2FUkq5AM2uQsSCmjXrJn8cTuZHZSS9VTlSBB7g7MAnCj%2FvcW4m8X%2FLTGt8417UHgI3NiivnSmJsIK%2FMJnjkn6fuWwM%2FMcojUESjbwajkxY0QSgdY3JqSr368pHjg9NrJVKvhlqZhj1OAsUUgfJIF0qV8Tfy7FelYrfk32kpRlNu4wv1uAIDp68InOuB%2FTwgLDUhKY1E2c9wsoUGnKA2hN82H%2BWXSChDwhroe2Bkmbb%2FnAcWYcdiiXndj2FVeuR0ZK775n9XXSs%2Bv2ehlhhWqVmMGiAIrpE%2BzJVKNQnbZxFlBmYYvQnQoQg2Jxsan6n2jX5rN47ZB7eQ%2FWcozjhrLyss5NjxznwrU9cytfna%2B2FSzTrer9gVQ1Q%2FNCBcMdqJogxd2Ax%2FibyFXtM86TgaDf3RgzYwgvg0p%2BW%2Fyu6L%2BCbHobU70sfCIeuAxg6VLmObs9I4XSPq88yrNmZKoY2BWY6bdE0AsY58JvcZIXkCKkBzSZLOCGF%2Fw2XN%2FsrMP%2B%2BxskGOqUBznk%2BQcLMDiPZ6KVvQ%2FNOzJ55gTfYNecCBsZN39GAHfAfOrP%2FK6xqa9V4RmUpUTe8MRPO%2BvAiwp1egOS4yVY0FIlXzXf5P0CTVYGqPvHSGRrTDcvbiAn%2BAIz4KST28eTH%2FraopFqsRMC9e3POAWnq4hiOAjtbCFe2QnO%2BUfU6Pd6d95cpNDmOk%2FHu4O2uXx3Wpge8IsxD%2Byo8IZh2pzxUjoVzAVec&X-Amz-Signature=a62a37ddfc0960ea9bcbf572d52663cfc42116210640d497a11e7819c8db8cc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

