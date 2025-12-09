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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TS3354BT%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T154408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIHD%2FTC5ihY5vXb1ul73vgZRHcpLf%2Bv4VhixUy6j45vHJAiEAj2WRmnSvXadlrRMuZT1A%2FnNC8fUN27AXmEH3eQPhopQqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCE7STWhUDAtG9bhECrcA20XQvFGJML4Deo9S42bq6p68nMnYpwwmZGto3ftXQtiYg2GGVT%2BqYBTStMAA8wiuUJ95WTKY1fU12EPU9fK0Y203hF%2BpJn%2BnHzzdFJ6cAsiXmAOyeXZ%2Bajx%2FuXzPXFNSw9HOewUMc3Sjqyui5G2Oi14uVIRbkVDCNAyvjPW2qEHfAuvtgedQELrHMBeoKYavg%2F7VIAVZNFX0bx99%2B8%2FA%2FNr39VFD9YMWg72N%2Fc3pjKzTeKn0K%2BHw%2BMg9%2BySp8mlflLXMbEUAeq9GmIP67dtUulrPSrz4gThRBIwG2Bt0pBLynUtvxMJcwSUsniarHwY4g0DSxD8z8HSBTYrgLCVS9FZzrruTNRGDqrEO3isCRn75t2sqeg%2BaJ4WlmGDM2UpYE%2BQhN94dTSuMRLC6XltyUpOdSdy7msH%2Fo0oHl5vs8KC%2BQAW3xMCAUgFERcUkpWBRsOx7m8ofFQUJBhlmshttKvY2tFApv6FRweo6Guu%2BwZ2oAp9hY%2FsO2iUa0XGhnkyYGfjkNa9vg3yDvYGnueAzeNWSr%2BqJ6IPjI8b%2BS2d0PgyxMp0dNPM99ybVNYDF14n1f6H1koiNGkIUncQ%2F4Ywzg7ykDbpGxqFHLleiWdh65zPSUWbJ54EL78gnjmEMNbd4MkGOqUBwEUQh4bZIxiV3BdsO80vmeaHi7Pobaf2sOkexxs9ObdL9RnCh9mZjnVH1jtu%2FyW%2FHodqYgwVzzfr%2FdSLHYiihfQHTHAG9zCt%2B2h9gKW8rk6wKhR2CzmTgNlMlo%2BLKSVUIl0zeVjHEguUcN9hCHBUxO%2B7yAESu2dtKGaVk5cHPkEmL%2F04cTGyFfbA09qvo6tB2KEHYrb3dugA9YcGpRkxn2lMxQIO&X-Amz-Signature=cd41041e608a7891d31f68eccaa424642751b26f4ef872f21433f23420279093&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

