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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663LYTM4Y2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T122550Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFr5WqlQpcZXXfZuKgHsGFE9Kl8NaaA3zZCW4pVMYwfdAiAKGrJu8Ul1DRhL5%2BcIYtJ05SFz3%2Byg84QRDiQ3RJXxtCqIBAil%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMhm2d1uriotCkjy8WKtwD4hi3Dxp%2BG44w6dpJIYB6qc5MY2bDu%2F1wClxvknU%2B6FLB2hMWhv5pe8kxnyxZPXNeVWzxaqMs2Cd88xO3VleSPQFxF4nB%2FzOK2d9qkarH39FWLiJ2ffp9VO%2B7j668y6eVvBeLzwhJlUYTbSahy%2FwpKe5suVLKKrck3y4xJQaSAj%2BtH5aNRXmfdBh9j97OOmeU2GOyx6x5Kia4Mv4DZ8OWesSD5ZAJPMbf5CNiDNvnjOqDI7hgp5FOsHCCxfl4a7SlsRwqUD4GgvYddY%2FIphe111WqBfEwuelRrggVy%2Borr1Upwm5BGnBNuaJqYM6trVLUUZvyDCRXe46TWRjPEskGMU0TGQM8IwYRX2InvSn1uwugrAtYGAJqEQzLffb7d%2BmHYtBli0D0%2FGziKzq6Jp8X2RIKiWxZoEQ9OHCZX2%2FkoKnUOno7ZGG6pzjr7ihQHTpPCnLPTh%2F06hC2k500bd8wRa67PFr5m1%2FuoHkzcnrDtwaM%2BT6MxE%2FlAQCata836U67j%2B%2F9rM%2B32n6AVdtGFXK08qPC9%2Fthzbmgz5eCR09gaN%2FtEWYspD%2B9uy00qbCziVmxTBNgM%2BRRDUqd4vylGg8T9PkZpU%2BIoOEtMchc8DoLJl9%2FAqvyOarYrAPx3YQw%2BfLayQY6pgHEJ6iPnWTFG4cLsdfxQEWSFMkfxrBGPvgBc8p5bhi3L2JnpHwHRy%2BWoOksqI%2F1Zpw%2Bb0MOY11oGDge6WiXhj4ZWn%2B8URNPd4mg4tFyDFIc1CMCMx66%2F7CDVNyqrfYCVu6JAeIyN68CSp%2FjoyabLV0Su8VvTieFhZYuyWZBZio6TBurQ2zIh04AZSmievgKkW89Sg3ej7vRQcGBp0oCnaLMFZo5U2ei&X-Amz-Signature=8db9d8b2ca9a20f8cc080f69843f6a01a942d056359ece59fe7c2bddc8642027&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

