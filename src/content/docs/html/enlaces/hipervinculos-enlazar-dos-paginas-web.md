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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XJ2AU4QL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T225614Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCDuOlHCtfz8yLOl5KbBllO%2BEZSz4iLk1NZuSkxzM67vQIgVh%2FyLTecSc5%2FmX2qp%2BGSmD4aTXTng7S5tqESCir4fgoqiAQImP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPtRT%2F4wlEafnrE7dyrcA6fiOE3T2gpRXC7f70vYMPJ%2Fb38XFOVqBRs59WFJy3zV%2BR6nZPFC3Un73jwWfWAdVzZdQdadARBiBvExkzKlu%2Bis3TeROcezTvPFAjPYbeWLjFkrnKY8azKun6RvGMcs5Ky2Ywsjaxh%2BDno%2Fxvcgc7NJ6OIELtm4x9KLjIa0lS%2FoHDKThQfn%2Fuft0rDqbnKG0lUcgAtUIndhl1zy%2FyA2Iml6LogJIiSCQrh81pXZ1dgB3DW1uQW25tez%2FKVwsBXbWvf3KCRZit1vp9GpcGOfECTJdJ8XtT5nMF6nbTBB%2F8fYiY%2BStE7svE4bBPQvoEX%2FEmUhzVFVsPe3BM3vOko01vMPLgk%2FIH8M83h8aHT2%2Bs2dYzX9VbZNDLk8J8TYFI0iaWH49%2BgUeMu1wVpJqU6tGMW1wlrPiJ3AhMvPG22kJ3N51Fuy71TgB9HUOYOfdfcU2LhxTG1nk%2BitzD2hQbJWgN9reQOeE03gOe3a8cH%2F1zp1QFhJz%2FKv9ySsYzfdbEH7FVHslsPEM9S%2FacsKgClJhe%2BXWgEyOsf%2BzwaRjVpbufM8Dc5ZwObuc0OUFRKvbHva5eNDpZVie4proDYVMqO8h%2BWt2cVe85Cm5tI%2BmKj3zxgjduNVYdXSz648SW2AMKWF2MkGOqUB9ho1V2albdeqRQ4eDjnL62LWdEc270L8x5EcGbLtWdFeouxYv8cnYcZmkAMyjoeL6OtqirOtYNTT%2FbBZ8Tyqb7XWXHfN90v2heeB%2BibN3NjjhsGOz0T8rtnaqYDCBptycWKUibHKS85VOFl0jVNwMNbxD%2BhulfqSW3H%2FhW11yQwDE4%2BnIHf04hbPQ%2Bz1qRIqGnAucYhjvlYWOPV6onh1LBD%2Fi922&X-Amz-Signature=5c16135c6674e1c0c5506aeecf889c338e8173eb3ab6c93e5d04c18dda77a8aa&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

