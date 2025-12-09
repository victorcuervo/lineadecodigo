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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7TTBWUM%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T180233Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDKSM70C0zaSbZlDxQ2RXgcdyBHfOcI6TeQMvnpYXJBhQIhAIan45nh9ASN6VIvmlGkH2dKTfFuBoVwZ2O2bCggUnBoKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyvowz6ErF2wzk5SL0q3AOzposN747%2Fm9TdguFl0SQ1Cl5EDmG51ywLfcDXDYNZ5Brp64rT%2BBpqVB3z8dDkomA1JrRvI4B9qxdU%2BoVp8vCBJzxSnmYXXoQl%2By7RdLtlxoyWcx1nRM%2F8LGZ4ivJKeJrjSNr3GFP%2BGwcnfvJj8nIY6zfhv%2Bz7PIAzWqioNKLTcnSiBprOE2r%2BTbW6VYiAOvozM2%2F9OOMhbrEXCrR2xv6tNR5zeBdBu%2F5h1KCnTTFFqzKyAe8Ak%2FODsRfFTRsYjmEIvXoo6LuZisi7wv8n2DNs2jLOGx0m%2BnEPyHy8sGGj9HqG87I4Cjp8GsYzDjkkUjvOPwHIqA0r3hhh1e3YaH1u0Ami4phtW244IpRPOzBMO8dV9z%2F8wVMXnU7vECWqZG01Rd27fzkqIHVQyiQsR6uIkprdeRJem5G8%2F3G%2FQC9g%2FOhAcZMOqC6EA%2F%2B0KUHJyW60HWWSLqu8WbbV5Xyfbhf5wm%2FK7jeYLJmo3QXI%2FA1N4%2Brt2Eiq76nlSawarNXe9nYlcqcz3DcJU%2FfJe53g95ZNQqJSXGnF8kzxD0lvlMFJ1u%2FRrb%2FseTnhoCxmVP48ICu3kk8A9uwo7GNtb9foIO088j7LNXvvd8Y18Mky749lz301vcJs5Mnn%2FnCsLzD%2Bu%2BHJBjqkAWjFfTlL31IIO8UbryEPWAtaE0YCQj35ayeYy6S%2BbOEdKvnKLXayXDJyBpClN9cBpLM8FRL576ebSx7yz2mDtbHw2tVMQfuaqAisSqDOPHnSLL78TdFtBDMi9WT02A98X2fGDLTz%2FZVza2rv5ZwxbEUQ1vEDT2WzzuotIuNOCTfaHdz1dOE%2F74mEDkQMt4l3EEFtiRplWNugPIzUJcDLzezzFvFI&X-Amz-Signature=6f4595791703a21074f797650a603ec2e124013e3d955cfdabc992f05fd88223&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

