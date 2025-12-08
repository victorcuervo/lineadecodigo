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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SZLDSCVJ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T173033Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC8Oqkc08VzcS33hXbYn6D5InZ07VwOxiw0kAVd8D506QIgVsetRzZh8sTdSmmLimNpCfJi8VkV52vLWNvscdKYc0gqiAQIqv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPI%2FbnLiT8M8JFzZHSrcA%2FjBT5k5tPPZGkWleJ2loUCCsNtDXJwbsZZO0Y3Ii9EKiEW7t5p94Rdb80jtHj1nXHUp9G936SUei4vZdLPd3OghbekYvk31h8indtu%2BViaAkIJv7yY5CqqtKWlNaX%2BH%2FPZmQjhandaso5FyhGFjWsTqhE4RaEykPBVeAN8%2FHQRgZPZiLzD%2BlFHX%2FVwIm%2B30E2gpkMyB01L86s42QPNMqVrdIC8O%2BdAiksd5RD5%2FWzTkqoRf%2BaVu6kAuTxab6c6q3MFgm0018A0hEhUCZBkIMnXgnRQSldIiLQY708hiSBobOUgB5%2BxvXRm44duZ%2Frf8zM2bYSGFgY1KbH3PFIAxyCtlaYBKawGwsZSeAmwaPo9z9JBrV2SGhziutbyOv%2BqCNPSA3itmAMGcolJyD1zboiTHdu9qOSrJDlrUo0b3%2FxwnAkcm7RAtoVyWjcJH%2FQUWb3Glcck8eiiWq%2FCQMWDrnn980HQF7Lch%2FUGu7Nmghyki7hNw4WTbjcSp21DTFsFA2clGemRMYFcJP1NQ29yXeIdRC%2F6U%2FAUTZNih1uzT46Vsb6eaKbw1AOGhjzGnh0WaO5a0i%2B2w7H%2F%2BCrisgxLtIt8VwQq4lo16zvoGj%2BeOX0ljp8Yb7Jf54WUqO8eOMMGH3MkGOqUBrO0Vi2OlfYs4pQXS3uhjCBOGf9uLer9131mINh83j2M%2F7aI6AEZpdSMj3loQ5srpdprdQwJcCuLysCvnaq0kYeCLWyIDUNFpRKd5chleHiPIXeZbNiFkHqqscB8AxPzCPR7d%2F3qCEkpb7Qzr3%2FGmvSYHp5CLI3Rz9TI24Z6hcruFrU7%2FYmh65kj6NKkU3UFjex3HE1fhtubklAexFi3Sajxh%2FF8C&X-Amz-Signature=2ef5f77ae0c66c90620794bb70d1eccf81e664a4bee22e9feaea719f77f358b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

