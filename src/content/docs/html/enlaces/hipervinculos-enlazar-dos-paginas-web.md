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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WMV76Y5K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T061825Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBtZFRBBGZOdgOnb4JbQz1ZJ0Ty7ImlIePcIWyFUqL%2FpAiEAxAfuMfYOLMn90uyocMvgOB%2FtV5fXDY%2F6%2BzdhCDpq72kq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDO4KN6p2uiRtKhl82SrcA8rjssCbMHtZX%2FrTXMcivuV%2BBwW8Xs6zI7Ih89H%2BMh3si7cEKnbSJmz2sXeN9B5YfpGDK4qmWa0UE4eKPaFpi13gzKfodhTa1Q5sftnjokBY9ZM%2BMx8lPZ9opsTpTtwbW7ro1AgRBnIWCeUf8GmWAsCQ9y8nMoLA%2BSeqXFw5n9%2FPavZzH2uEKTFpqDM0pH5r5CpCCPgkPaqDoD78%2F%2Fxu4ATfDSgvd6lvPp8UDHSqErAxWgw3bOyardLvojZx9182%2BwqmABd7W%2BpT513nA5J4lwgUmHp3r4FI44%2FSqxcmHXY83nqxD7%2BXrtypzFyAdavNdMM00HViWb0BeHKNnZ8D18Zr3uk85LV17RijcIAvYIvjpMWRIOsEaOLHdn60tvImNsXcrzRbf6EBtRYUiz%2F%2BAA6Ou1Hxq5LS2sHVI8iLBEyUx2%2FKGVV059%2F8EUcHWndOD87UOImXGQVqbQDnOTDL8n7J9CtLNs0DYK1b2VXYKpf3oqJZKbDmNYKFrxtAkgr3vAHF0swrDQpPd4rlVqiTrdbpz8vpOM9D4kfOzgpk89at2wFDMJfTNSkj3gZUaP%2Bjk4FxUSfdWX1zzn6q5APti4BBIK9I1CA%2FpzWJ17rvWlrX8tuqaZ8Uf0R4MW9sMKewyckGOqUBqDR8qCml9vETKUuGLSkDPGIgbMrMgg7WaWhdV9Q4F8Xshco6%2FQ3xXpVnygKS2%2BJguTXvmYYadWh%2B4fyEzucSPDumMJBvBBS%2Bix9giu9Vxn1xp%2FALLseh8GhzFDCfyetY4CUYSD19Ed4F5x8fBCL9MItHSLmDUh%2Bu403halCkt4fd2h6juUo5BEv%2BFlxy%2BZ7wF8Q%2FpQvV%2FA70q9m8Bw0PuhqlxlTD&X-Amz-Signature=19b39b020a14ec0ba8d5ff2dd1774314c73660e6a6155641e461e5f3f3e511e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

