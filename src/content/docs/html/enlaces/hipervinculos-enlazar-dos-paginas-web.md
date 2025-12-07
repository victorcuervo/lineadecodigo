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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WJYA34LT%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T133432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBg7xbsSVJqsX7gJDbiXtXJMVGbBi7urbKmDgo7E9%2FVjAiEAojZZvHsQXLPixvglokyoTu6d0E87moC3rnHGfgLJ%2FhMqiAQIi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLJb3xb67hyhotJqSyrcA4%2FGalLw8rmuCxT3SsVPwRf9LsxuwWgaeRpij%2BmyuZB5836G6i8%2BkCO%2FHnvD3X25ZiHPxFk%2FQu9PX5QQnUeu%2BwTbx9%2BZWFipyBYeMDOje15Fo4h6Qp3xIPCcDgDDcn6QogzU6W3sab1MjJum3wVX9x%2FjbR5q51CX%2FJbgVBu0%2BBpkEzK%2ByUadP%2Bnh4ELz6TkJ0Yo%2B6HIqGhoi2ePX444WVb7KBBkAbZcgyUsahREeIt3juXBu8srYOp6szaPKzEEZNb%2B94hz%2Flk2R3JFc1Q%2BPTifNO1UgD3b8kAWOv%2BQ%2Bn9OoeDLL0IeDZ05MleWh9WTbmIl4KV2ZU%2BtFCPaRX%2FXKUNBewG%2Bf39y5sK6a%2B2W%2FDiP9eGYWItiArF0r%2FXuW8c%2B%2FKyC7Xcg9iONI0YaNYBV07nZtevci%2Bz2Rh6ABtafp2%2FhbgKG1cZ2rTfcl2x%2Fp059JfZNJI3OEfZxt%2Bf5m9Sf1pKw%2BdUmXBsncYyiQep0qaop97q73tFtmXDOfkkgxYarmQ5URopqvc3VLvbrIOS8T52dv2DO1JczYOAaApCRSea4AvDa9qN7mkLBi%2FVKhciJqVmBOkGn6emJewuOQ0KcozItllvCTNCgOdFuP7fWrwzviK72TRC5NyxelTHXaMLaZ1ckGOqUBZRuJcEQrMCPrdmu4sHAH4Ml1pi4SnNkmJ1y9tphg4KVkBoOCplsfrRpMJdOQ6g8xljS1aFs0ryDWZkvQ%2BmhwH8glb0Nrg77SyHDV3AK9Z1%2BMxUyCRnDIilfgFPUPcCrUbYcTG01EPHvHxZ7874F5GwcpnWgBHvp5Jpp9B4%2F%2F7ErieO5Q9LY7%2B%2BPTj4ZP3gs9%2BYnQEvFlUx7O2InFw9Wk%2BFsrLczt&X-Amz-Signature=45c0890336dbfc4f6b00e32a476d1a2ff18aee2d42fb72ff30a1a8e1e2862009&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

