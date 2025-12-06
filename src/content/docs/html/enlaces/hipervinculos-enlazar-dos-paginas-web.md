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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YX2KS4IF%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T111651Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDDFxZitNPoRMfVrlKvYN8lOVljDVZS4AnyrvL4PFtCrAiBXtI%2FVjzT%2BkH9lb5GjFkNvV%2F6ts0%2FZ51HGLMamt2S2Gir%2FAwh0EAAaDDYzNzQyMzE4MzgwNSIMBM7ZDQSGQBbP0AUeKtwDMV%2BafIY2nqWqy%2FKUBayYwH0xqXzxprfMNqu9T9ELAygjOpEFzQm569O1OAQFnEMFZzhmKC%2BuO0tZ8yTBET4VSpE9GpknlnIiOmqjS0n6ibxlYYVHFhP5LjLyBwIDkeoQATLgJyxG0gqGLD2%2FVzwiGM4d1Rq3c1pOignGUopYG5DwyD5t42VipirzxrPnIbUwQbxSZnE6kYNBKcB5GQWATlNKEmUZPKuSlKLQ%2FQq29LDQya1MtAH3iAHBO8c7iUZZ%2Fw8HWGH4NA1D4HPWEljeo2NpQ5NdFUGVY8iwVEfSt7hRDedr1S7QYyQTNLNoSHroscaCZawRWw2rqPa77Ep3dv%2Bic9vKFwLFiuYLQ3YD%2ByFlaaMdLDxkCyLGBKWYplpuRQtxHPgunM3cLZrY%2Bno9cpyBBwISy3eaoShYvSpFVFu3A%2BI3wk0kG%2B4KVv8I6jw%2BlKWdWgCy3%2FE1tjdqlDpxU3yMXF3z%2FInjvp8rTNe1V6cdFIgPVRSVLueYuVZyyeBxhNHiSoD3N%2FStN7lOWutdWpoXBMEvxs47WpaakPfWOveHPViuOMsvvT9EdhUwnCo2fDzfwm%2F%2B1pZuurvncAM0z0uA%2FdOL2fmAiuz3oWU92%2B6Wzxgno7AWnVL3OzowgYrQyQY6pgHQASkypLRFrNmCL0jt31BrYjzdnksypMeBnUCi5opEbjtxVb0dyIHpVh%2BQPQIRTY5ht1qY6%2FwMozPcy7wIBi%2B0ECqXtO65P3uESoBv8pLa5hVMNbKl%2FyJlKH%2Bov01C1nsTdszLrZ1biso76BQkjEaG63lvXqesYe%2BgkXmgbeMZJGjcyXP6iXky9WDU0wDRcloITt1D%2FHQAbhvtdld7Yk2PJfxD3P%2Bo&X-Amz-Signature=a90f3bba941f04b0c1a842df7958d3de3e8fa20b0aabcd0e541a0968656b3d4c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

