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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466536QBTLB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T100744Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAQ28qZE0KBuQO4sPluUfOVuz7cZrdN9PZyhQEhiJwdQAiEAt7K5RJbFRq%2BDgd65NHECFHiePjuOwmD1qdsScpiOEasqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNIf5pWVB2EyByeqbSrcA0zcfOCc0ga2EaIDGDOHhFlRQtgILx%2BpwZd3D18KO9so2ucLwTchY%2FgxWPE06%2Ftz2QmvaY04qOqSSbo6LKOO81VFXoJNHALvcWuSB9tCN5C8vb3UqMOTLY%2B2jnNtjNFOJ74xUhkr09eKr8kBTxBxEOASrLkc6AT9DTcWzLtTMRjI4K03RcHrSxCnxRypPflx7CN0uaNABnEh5vzXuC9CzHF4o0%2B4WRGmCu1j8KTUlmI9v2MwzdiNwuYGLwSJTyPvD9UMz25ogYh818mbRxdwRERh7gJLTGBX9N9smwl8lXaMe3OlNWc0tRQrre3EMULbCS6l6u%2BisVo%2FtDTkvKyd8pPxH3OWgVFDusCfF5NNaRnX%2FjsJOFhf%2FqLlwaJ67lFEHhx4jqnFDbxP71zxWxpXKqByU6CNpHhvgIaMYkNp9MfR%2B%2FW9S8CYC%2FxquoKcKc%2Fkx1S7qy03jdOTvwgoYFvNW%2Bn6u6YjXNIxU38y6zgIb1GTd6HIeIE1L%2BIjfmYmAibwq%2Fva%2BMmZC%2Fycyz9ZI9Vc2V4GKaOs1giCN%2BIc770SzWKvnn3jOMBHOzFJXEC1h576BR1a7xIH%2BLfnfHwAcEkO2nm3blf2yu5fCHUx4pV3VRmLK7B4tfxjtHmBkHuoMPfD38kGOqUBaCSUJEJilTiRbdKGgiPj7QXIAw%2BlD5Pxmmywn2wgL%2Bu711rq%2F6t2wgNXBvXvHn%2FdSVuBBW1MEXMfXmyrzIoKtFQ67CHDu4WzT1r0BQ4A0MkcKpDzaGzksnFL6vA0WN7KfnyvqG8OVBkASKcIritcTIKjuB2KgClrWstDDCIx88pruRPEGb532V4Fyq4lKJ9MiRZcfV%2BXqRxslW%2BozO01hgdYFqgw&X-Amz-Signature=094eb07142c053716e880299866cad90afb9d058e0f8b6028ffafdefb5ba4a9f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

