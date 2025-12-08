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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YWC2CCUT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T162022Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDdsFKLn6xvL00jCQEpRMJa06dDsHhL61j3vNDn3eWaDQIgD%2F%2BaFC5t3v5oS%2Bmsep%2Fm0ZaFBKIx%2FXUSbFd1UcrartMqiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMwg2tbhR4Mpxl4SdyrcA6JgQkzyntyKeUqv8YbHC5uX0J3YLtYaM4ITKVj84VT4pKHdKGwBOv%2FseYo1x9NQqWc5fvnXQO55VoLiKyh8S5k2dbmVIZe9XCHqf1RfEJtvGYGhcWqDB%2FrQ%2FL5wd5I1Gzn5af%2F%2BT4HtvvJtjHZZO%2FwEa5%2B%2BFXmFHUz2ukwu%2BlU0Sa136cYXIdnRg7Fbpy4ktOVgEuIZ6XTFQ9V8CQ%2FSsD7z%2FFOWcrrLmb8vms8MyOlGlrok6%2B%2BNuochHs4Sw2nhzdFAk5%2FDcm4hKLfv%2Bf0qDSBEmqeNAT96hfBRYMvV2kpK4KUOCMyGbH2svJODBGBA08r8T%2FMYX840voAivZnGt%2BidXImBKp1Y2AoGdp9w%2Fwim0Hgl1LdViQGc8LAHYU3wud3PF%2BE9OCNCYGNg4NWx72pQ2OrSiI4QYwGNME2PhfLymZA9VCCWJwZU%2FJFHLgtHvHjUNCrApXMdfeLodjAe79dFIPPeryo8dixWEGmLDzfy6azTv48lnhCOP6wfxlUDrCWlcOBiDOePQdT%2F2GeyYfMMc2Jg2O6c03kBkgO%2FV5PSU2w800K%2Bq0WxGGpYn9qwTcaODIQAUsRyTkXyhzdqDj0m8DnAxkCbIx9xnP0flwSDn5v888UXYulckosHMJfk28kGOqUBX64HLc2m1gvb71GbhuoKHMhsREyNgNeam81%2Fol5X6%2FKw7paALiQlDfEf8qNafSN8GgTE%2BFXo6S4naRG37uhHlYBVo0itcygAeDk7Pi%2FSUy7MPEuQcfweXdPkmEzo390H0fl6jjqhIRUsXqHoiG3b8qM4K%2FKyMXUcF3zTk25OeYamrw%2F6Pkducq2uJNOPB8mtya7F2jmf7zo33Pw8kTU61q96FBZ3&X-Amz-Signature=8a631ac74b4a98bd79091717a5716680f011e248125f203aae5f4bab9399e710&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

