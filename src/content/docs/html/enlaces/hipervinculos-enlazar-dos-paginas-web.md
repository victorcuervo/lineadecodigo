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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662T46DFMB%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T020237Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDLd%2BKTGUXbt0InLsbZ6LJndAM1wO95DWCEFUMwY3T0wAiEAswuL8Ni95tyTULJt50vkdWMHPwdYhISQNVyTZMCbExcqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEVhK5%2BWOz%2Be2M9rDCrcA7viJZiVqY7BD7TWNn%2FBKlqwMqfrzwzSdCePKqRnbOgPD%2FrjP4eUjJIWshIumKxJts2fnqEnemoiaMpsTPl8W2ozqPniQGE0bdgrpaNwyKe%2FsUdyVPQxThqV%2FJwA1U%2BkDT5BW%2FCR8jmXVmbbtI%2BBPtTi8SjbjCBdr3efvqzA1qbd6rXjfpikvZMdJMW%2FEl76uXvVzCG4FfCF35%2BEVmi5FEk7n%2B%2F4x8sB8vpiogjw9UoTdTM5t9p86zQ8ooZNi6E%2BGHnxX2L4OlL%2B%2FVIEEj%2BI4FEKU4gK5E%2FeazMC%2BeNXTzd7%2F%2BoKhHCBpr6VPoC%2FERb36NDGFoj5H9OGKpJmpszy5wrlVYoyjYzw1rn%2Fkqdw8RSfZ7SQNCcdsE9cd8b4v5YNgLtsUZDWWPFzOLZwIK3nJhpEru3aAh56sPT7M7vsCldqBsHJbHcnR%2FhWjNQcmo2KIFYFiwmWhEfnTl8NkUFkaiP9iJ1xuMWhoht2UXjug7NSrzWaiqEIP4GdfSnuA06l5WRrbVLBFGN3NCm274Ov8Coc%2BhKgipS4kAbCCmxsuDI%2FdaKs8X5zRMszSEFo5X9nkSnRjXudizr59nwBHjrYiiU5gcrpLRCs3Fv9zbtY1KP1AJ%2BPEKs3onR24Ie6MLLp3ckGOqUBIbpCmhb8uOodLqph7CazIkUQZ2DrgC8uwm0A0s7Ihnklk08%2FTG4Ug%2BqM3es0KqWdDQH%2BDxMyiuheQeXEOT2%2FmDzXepbsxmYJk%2BbnRvgmJ8SQwW7C9OHXFQ7nk2xLUI72v2B6DOmWdxkaxYxyrZxxg7KVyFmts92QeBvWrCN%2Fh3zXL2jF6kqgjO9b0fOhhGmZLRuxj%2BLATj96eTrlXOXvMmmaCKOD&X-Amz-Signature=5a37352a8b31c816b51a037a55dc6d96272c6ae0d5313e9181ee976f6df375ba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

