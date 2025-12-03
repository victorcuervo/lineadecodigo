---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Q55BPCUD%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T215628Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQDLAFRW%2ByDkOmUvrC01rCitH2ANK%2B9AyJb%2FlANft8W1PQIhAKkwbKPfC2U9AVf2ldu9KxRiWr7XHa7KqeQgsC25tTnEKv8DCDcQABoMNjM3NDIzMTgzODA1IgyXvGoBAam9NOOQBvEq3AOkLZxwacpqiNAB40mu9UA2d7ZmOEZyKtD%2BHN0%2BNG9mZkZK8fXlt04JXQhRwqUfp6PO4%2FWiQnrkKPyFJ9gVBKdA6TkLKBD90p0a0HuSlzRo%2F9rFIoVUMAb90Yz5ckNdVe9aVhRbUJ1%2BARQzLFVO1ozK7FEXWcWfBO%2BO7TkInSbYp2smm5zfFCdNkgpp52kmA7ZxH%2F%2B0qCFxh2BysHL68lrDDy0T7iCmXOsDu4EmZSr81aPYS459RsZuvzaxPC2FEbAqpbtsIzhIELEKTDtkbQBKdriMdPpcUxveqWEc1xGs88viQ%2FnIuXuVVOVcVHIWPK3xmFRHCJyFa8Fai5IFDiTVmDhuUsrPC%2BKshI83I3FJ%2FH5uctVHcyQraZxRHpzN59ItJh%2FhkrNw%2BpmcvwJ0rSy7pq33CxSbxRESZbQ0O%2BOePz%2BtV2IxWvbrUgS%2FLsGLb0PEoqtl2ku%2F5vmNpwaZo1u82Rg%2Fxav%2FUqo9AArjGPCpwNRcqWzv87l01i86C9fly7g%2B7a12z%2BoPnotIerMfSakM%2F9zROnaN4VcGkC55UFbkYF2%2FTa6mWeQBg5hDQUTL7lUwVhBIPKYvSTyWUw19wd9ev3wBwspv2CPUcilrjfOVN6fNnlR9r0FuBw4FwjDr3MLJBjqkAdWUPlwUPHADIjuhdSozCX%2BAV0wmzK9sEzWc7yFIujQV1eD6pFMRHyGukhhj4rsqnmNmO%2FFw4pzfZVaWVfQ0%2B5BoC4fK%2FC3UHq4DNYouw%2FmcQujnBWjzbli2UpB6%2B6o%2Fj5jUi1tKZpFhyUj2x0B9OulYkhgBBEjeJwwYOU0oOeBeAVe2%2BcL7PIJ26CFH301BUqwAyiTYBS9Tzc%2BX7mN0delkAoR6&X-Amz-Signature=a64c0d04276b79cfc8d256418d62a922b6f5cbeb332ef9c8b4931be5d4676ace&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

