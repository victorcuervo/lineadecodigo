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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2SGSF5N%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T164430Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCaZ8u%2FaImbSg5QGjVrYmEYF7BXh%2FpFGPziVaEGE7kJAQIhAOcEb5MEkKb1HpRoPqWsQGGjMUlHCcAlnNAhEi9WOz6uKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9bWITMsuF%2FFxnm4oq3APVvIWb1oVL3h7jQudfz28oXKv71DxDGL3aPgSEmMzuaizkZ1OHu9ipM%2B3uHu69eHw%2FIn8oB6JU52drMMoTvWiVlXvZOmagaYQs%2FLSmsBilygNBPbs5lFfHWEB2zNGIPZNaJccClUBv3KbWj0BCQsN1deZf0toFxsH%2B9XoLEuaYBSMLBTiBXTbynUes6j5OmG3qFmjoeBCGfNz1jfWh4s08moLnb%2FYtILpNAJZ9DhzZ1kgpaLM%2BzIPfaT%2FQhetvs2kAq6JUZ6r%2B46d5U73Ve%2F9crdJwryL4hOoOhTDRQnGC03fbzvFL4usWDrHaXine3VPN9goiuUA%2BNbfayen9eoo409PFqToVO1Ro8cwGsADDGhpIB8eO4xO2Wx9YhZqlToa0%2B33rxU%2BUVHGd15lDsu3JZfzTClWHTdApyz5%2Btn85rvmTicKjp1XLmhXQ0avC1EhAc31gYJXZn7%2Fzn%2FXM06%2BiR8Fkbd8D1luns33OLCiwPAILqUvxXl8f%2BF1hTKrdY4RJ08y7HR8DAXDJVZlS2z2O%2B3fNXUMGvKHRmIXMUeDwh9aMVE4mhsTfdoIiKfquwBxDfqSVJTxrPxMWgTBoRmTBLhGsVuYeDNUy3mmYWeuKIrUpeTX0qKnQy2iQxDCxmeHJBjqkATKf0mpwFvFwEL%2FlTG0kKwbTB1ecNiQt4DUkG1NLRguzCMtSt%2F2FdsJzb%2BXIvyNbFaxTre2IP9kjjYQX%2FxgybgympSlYPJxhkSaaDPDVUOjQ6BIPDywm73SfcgtFA8HfqhRPrb%2Ffh%2Bt9dIwkLSUxRMbZ3s9hBMqOnbLSiuQ3JSw%2FWFp8YfkdOvc9mMgTawoGTSURJlOfLSbfGayC3GKB1FCoWu73&X-Amz-Signature=9004c69c096ca2fe7bc277e4b09294a908b28958b2da97bc9d5bb983c49d9e25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

