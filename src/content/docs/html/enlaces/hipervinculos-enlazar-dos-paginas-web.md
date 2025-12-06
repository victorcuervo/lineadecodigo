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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WBDKNHEV%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T163323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIENFgyN9dUxVcVcza5BnVvYLcKgKIKlT1VhfxaPB0wocAiEAx9G8K%2Bd4EMelj%2BhslUd7Yxb5EkAX%2BhQyuDfs3Upm1zMq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDAwes4dskWPcezFhfircA84cpeELESWe6ghGuJcZ7QMnefCD%2BVwylyMD4cqqZVRe9%2FPMU2cwpZBxY1g32WQRJvp8xoMp1%2FbKsfR73nP4LjHTHVes4cACqquvzg1qrmDrcpnE6yeo8jVEnQ5c5D2T0%2Fwt5cO3%2Bl4aLrlHLNYFdf2crbRYS4jTlKwaBpMJwDVHbeKJJd6bohpfyzJxq0ybAQqfeH6ZKZ2nc%2BVs4KO4WO38hg5E0prlr%2F%2B8joet3v%2FHb6F8RhWcaZ8oQdNJCblCT8YrPYjwV5Q2Ac1bBBq7%2BiYwVbbTfVudcIKy5IhQ6DkSQrMqYZ6nfHweOmTIXsVaFtun%2FyF7%2FXryWDh0UQWl5BK65c0kwErcdBQzdzOAftK%2BNP15a01RuGDHyAVoYlpCzXKrbjHlF8HxzkLL4qKUZbczORiInUL8tgf%2B7nEbGy9Wwjaki%2F0BhKp3Hl34ZRe%2FU2LSZ017SfMMTqSzxwYx5EmVlAd%2Bw4WRcQJPmPCFWlxoR2c%2BpYigedytMoVcz9ZRdSp0l4AkFrn5LGFGM7ihJpoyUP27QZH3nIUzY22%2BIzvi11kefuwwqq5s8SaryfH0Anv9PJ0GXh9fnDxGXdnqQnuDpIHJLBlZuOwYXaixlS3S%2BqHSvLk%2FUZb2cA8LMKem0MkGOqUB2fvHj%2FxUNNVUYjkf0Gl%2BeY0e1sUyYlmCLDKP8uu%2B0z0JZ%2Fh8CBISdzmE7qQeInlU7Phxp9yb5zqQe33CaFeP7AfmFFXy7ppyMx%2BQ1FMPf%2BWP%2BJxCKATeeJfdATA0odH57PeV%2FJXMpCJZyBTeGs9haV4X8Vga0Qh5TUN0CHF%2B0PdnY%2BhFkvKD13gKBorCDwLIeerSovdF8HYHL5SqD7TsT1Q4qkbJ&X-Amz-Signature=e3516af1721a67fdb0c9a66bd261b33f3edfd0cb7479026bd244626d9f7497f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

