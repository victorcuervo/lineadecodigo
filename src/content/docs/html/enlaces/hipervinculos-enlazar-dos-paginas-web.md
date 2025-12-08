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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZGJQZQ4R%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T225621Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBhcvH04ktG7%2FC2%2BDYq5gRKzuvYleVJCbZsTis8JGWVNAiEAngvmlr%2Fl5BlbPgEAYngrsKNh31Oic8dKyp5hx3LQ0F0qiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDEbG9v%2FDwP1cHOo4OircA0NU2Je7GAluAap7dcew1yYmV7BZ3neSds1dZxzb9SezK6xbCDbUJatxFVAUOIQl1pgDqpbfccC0LVbpmxpJczumYPI6iEuEJVIVczgjNyBNKNFE1PZIh7%2FLs2qoscICQyFk1hjyYDiwfsqKfXi8ZfceN%2BYnlZxnWQ57kh4T20oMuMs2ucIrGJ3CKXZN6qtFz01mzST0FF%2Bhj9RsvMLVyZK8xuTr1q5ej4csfbAgh6M55CHYJ%2F%2BXeklRLT4nTDWgb56eploVuv%2FoUkSP3fjZ3wmOs1xYu3G91WKH7sGDqSOUiwnIByUqUNQY0ibb9v%2FVJUJzfCIG78mZWDFx4FGqqIPFaSvZKmDWFuCh3aVvHvVweQLzpB0m9kIEeRof8r4Ll8FkRIHFw7343MoYrwfGe6kKLZMm6ktvOgFyGJC49NwJ4Z4%2BZ4648%2BqoghboFTLiozncxMqpGdcTjPW%2FP2xmknMTdvPl9IPplpZJ%2BHR165fYAdtYGT2Es0gpchlKiBKWAi9y5fVRX3d2t73HNi3jKenWI1fqRlBkzggpqMec4G%2FX%2B1TNHcrnf1Id2358WOdfksomVARDU2ojPHUvJi6eb4ZTUdHKFQp09fCgVFJw0UjSpxob1AzJha5sNCI%2FMIii3ckGOqUB7fbqbLFa21seGfFlT7juXFNMtN5ZwXygSVPcbkTzIJjvMbaS9UteBzF76tItURyTSNsBBV%2B6XSB0hrUSXeoNoZ53MoeEm0MgPJS9vjwawHCCConbEGHtlT1HhG%2FlhSBPOpgHABVh04%2FkXyCprM3SsE3IINXquw4R2Y5BoKFcMF4icb0%2Bz0jCcAaPFGH9VA2oo0llovMDns5erxBOzeLLnQaVDvhA&X-Amz-Signature=3badbeba91ec890a35201c7600b5d0a67c5007c68fc86f2ad026c3bf5795e61b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

