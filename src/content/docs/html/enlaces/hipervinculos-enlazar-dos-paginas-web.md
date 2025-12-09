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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T7LVOF67%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T021053Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD2HeJDiO4XprnZ1uXH9K%2Bdx3OrXdwh44OoEVsEDdPswAIgXL2Sngukb7hvNovhAFNylpI0hNXM6dPyD%2FRpiTNYHhsqiAQIsv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJtc542jhRRREXS%2FZSrcAwWMBg%2Bh9f6FjZVeu2mhe2PenqcDOjZWhg7qHsiXVPZrP%2F8mzJpwp%2BZjDBGCv4NH6SYbCN3de5iwf3Jv099lTrG8wQaGmM4toqFQHDFJOqIT0PNCPXsBwu303uFYL1PWJSQlReuE%2FeG%2Fuj882MyJrNn8x6lMTvWq8%2FCIbJBTHRM0epXWRY5Zqwz2oPbu%2Fx1Da5rJoxalnawiPp77NF1nj3aWeUWFVeLgv4Wg9uFlUyeCVu9%2B5Ii%2FDITAzreQdJnMpJZHZVHdm0K2K167jruymJ9ckPtZuoLYuiOp6bICgBhpupfb7z9SDYVGP%2BgCpunyhpbRQK6DQXFexXJlGLMJgIsAh6xnl7VfZ2yeLoEkVDO9iInysLdRLXjfauCqRTYBp%2FnJdUDSZf7fdnrK1LPBXDFSIrq3xD0cRPT3fM1cGKUnTNIp%2B4BpEcwA%2BjQsCIcLdoCEEoXHNm0PNqeivWUKTv3ANldUy7WJbeN4s7mdbylP8H7gxaObKbeN%2B0ejSdyGXII8Gr%2F0aJtv8v%2BHxweQRWMS9wYuSbCG1wuGg%2FW4kSSGh38fG26VbBLqsqdNibG5s%2FlAn%2BqxQPum2CMWxOV5D%2BZdiCfxiq7pIFDkjRB1njHtLM6Jnn%2BNG6riBf%2B1MPrp3ckGOqUBmTT0nsiJE%2FTxvlX%2BEHQyRZ5UHmK7K2AlTcq98I1a3UTBC12IjBH%2FeZLZRsKsm0aLR6V4Ab3rXSIRzaypEnh%2BV%2FOKzbVElUOdAyeRpOVzV30dJwsIGQq4hHaKSs9KTWZboQvTv1tQnVVPrhMuLMO8fztkdYBj5Dls632CFBHizznA%2BV%2FVk9VtOSPLbtCkiX1UezTXivV2D8vsdhrWOjHCDKRLVtBZ&X-Amz-Signature=64fbac98db6b9f9dede39dcc0360bb019d7e13916410a9059ba848100dd7b64b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

