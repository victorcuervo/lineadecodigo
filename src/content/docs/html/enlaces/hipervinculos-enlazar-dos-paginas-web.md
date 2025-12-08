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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TBUB6T3W%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205413Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCM7YjTp%2FZNPs0unXRdqe8dzBYeiYabxbAGlrfDKyiNvQIgcLXSFLjwSwETM0OQomFGHiKEFF2HH7BDtWjkYT1%2BGdcqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJUx1TTWMu6Jl%2FsBLircA91go1Jm8ZWbyw1QoW%2BltAWYGTuYf1hk3gFG7oDjVHxAM%2BKVDAkrmwOO7KuIfxIbaarBEP%2F%2FhVPofsyaU9XNxp8skALvfGEsz51pWygl%2FW71BBd1inkwx%2FtMk9ocSQh25Fy0%2Ffo5hXFZF36ZKyi05uWoELDFwaIA9FlvNFB76BIAkxFNlLMdO4zo2DEZPJXDmlLCFcsFEj%2Fjgl2BBX3aNtKITBbmxEeUQ%2BrtlucsGvk4huszTT7fnVM0h4d6BSCrD0cHMCiocor21cRa%2BhUstmcLdNmWJ5JZROl8GFbsqdL24nnbO%2BWtQYDR9NJvTDdrpXR%2BnYcTzywlN3URa1aSmxfb32luzntcRGhjHOVIYunKQnAF41MaL7AmLCdQy0N2DO2%2BGjhIM7hOS0HzUgk6ixy0Km8FJHcqL8Ai97AUTj7wH1%2B4hIMlrN3sONebuzSz1C0CCo%2FXpMtaKhjpXK4yNJDOZADkTt2wlvgEVBne%2BMoMeWoRZgrEGzbFTZ%2BTIh3BTmNfbQexgD9l57TwVeTfSV7BSzlPxujLSlTfw648UNyhmKD73PTomtvUBiKQTwmWGCO1NYHaCFQVi%2FJcL6ZPa1BydynEHX3eG8u8hyYnBMDCBLHSC17%2FbnIE7ifIMKLd3MkGOqUBG47GikltBx4ZByRDmRFZc1QD7%2FOjAKq0C%2FWBfWiD%2BLPrwQEKNuwx%2FxLJSbgKb%2FBM6nfxynt1SXC%2BXQjlfMisItMm1byXLJVn9Gml7DoQk1CtV6VZXVavcRBFriTJAnmx%2FtPIZE49LWD1KoVJEXmg%2Bjfr1FhNsOj49wBXvTUfenXAH2qjsNbOG3V%2F%2BKOG1KTNhag1L9zPvpOBMzttW3M%2BFJYkDzVk&X-Amz-Signature=5146bb67da3eb664a893aaeedbd0c1e6e8635a6cc33db3b069c5675871b90f84&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

