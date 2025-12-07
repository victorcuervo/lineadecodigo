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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665JCEYWMG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T172042Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDVdb%2FQ4vT99AZWkL4yu0%2BchsME1R8VE3ATrh2drOEXlwIgD4XyViBKCgFW5cur%2B7ujlK%2FpLlER7XXzG%2Bejd1vUnj8qiAQIkP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFK7BKH1jsQBSx88XCrcA2iRXIcKzzSPJCAkewtnjx9z4TQ%2BUqjZQdnm67%2BAsGr%2FkwcDtxPPRcf870CL7mBl2p87VZU367AsIp9cuGootJS98brGKQbbD%2BYvgEbeOEbpJ9NYIVUI0Mig9KxV3TIFkc8TpoxlM8Rea59c9h33WU3CKRWplnFwKG%2BRsgXVu091yZSQo9fKxHUSgFuwXVGpR7573FH8AP0j%2Bwr1dB30QWeZi9NYCYecTN8jf3M2zjjVjiyv0WaDR72QfQOzR3%2BUCn%2FrWheapMeZov65NnEbrPL5NTnGgyFfc8FscZ3933x0h8BdLnoy%2BJmJ6Nn9h5ragsCRrU85%2BiWwPAE46G6zpKO30khq3MC1LxuJbFdXXDV74lZCSqpNBUWV8vrqHQTe%2ByMPhOUMuOpfYCoQBRcEFxCpi3TF9fqjKbCNx4LF6sVkKbjmo3Jj7nPotwQ8IkHeewDuUgdxdRLqYRL0mpslu1LNl8J4hvmgCfA09hf40wOALMRfXmdIYDXSNLbHjOeG8hQCPKscY5paNQ7PrPTwCOHGI%2BhjK78Zakz9WM8sd7GaDDOwVtURR8DUC7WHH2oXzkBVnQH7LVWEAqvWn45kXcy50NXklg8QJ9KuORkG%2Bp0JwKOJedutlnEJ7NtLMM621skGOqUBDgVPjppyd%2FXon%2BurM4lTqvzUBRkae%2B6mXBQyn1KKU9lHd75EDgUpNFXx0xopTjsLVfym9A4D%2Fio8yD2jEmMS7%2FJmUcd2QsC3ioUyrMyyzmc9UJvOFSzW%2BtA%2BUJG1sBDCv7AYbCQ5e9sxZsONQLSoGOip%2BKKT1j8Kxzpg8jAML%2FYPSzLz05z4%2FXghPcxows5FKMXrswCirl3v%2Fnhs4Hp7MvurDcyB&X-Amz-Signature=527a1058e213e1fec6d4effcdd0ae9af38fa765cdcb0e967d7bcdeb1f105ecec&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

