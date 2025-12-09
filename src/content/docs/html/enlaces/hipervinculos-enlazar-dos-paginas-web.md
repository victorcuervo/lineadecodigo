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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VFOPXUHJ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T155220Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICqwMe6d7rJ78%2FbXK4rOBC9rWkP2GLVG9S0AG4NDgtSSAiEApb2bXZ5Q%2F0XnWNWpgeyzdB5%2BAmYvGB86JvdMi6OqtHgqiAQIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJGhMfsgdAf2CwCQuyrcA%2Faruqpg954w5lfSfp4Lw3mEwMBNoOoEfM0eDhLEPU6wPNxP4zXCv%2Fya5CxjBj9xnom7U0oxVrPC7%2BJ6mDRikbCv5ETU4IqcVRqTc5eVPCj7fWUZkiigykKspKSnYvlvixWvWKZDNrw9%2F%2FcAN%2F2iHFOyoW5kpxtg4SKTGD5h%2BZcQIzma%2BgLKVKk%2Bn20Y%2BDS5NsSht4Cr7VcAOmDqLM6%2FlbpEKK3KRja7V7f%2FbXHxTAh4OIU33MujlWSef3CttFkrgm%2FeoR%2Br%2BqrXdEKma37u136Dj%2FEeb8MaHDIlfUiUp6bFDjK5uGKgFIk0AWc7sDdfRiDafrQqPT4vhwtsm%2B9HtP7PpyTeevOP%2FRSJwwYdaQ2lJXr7mnECcMrCsACl%2F2ntsknns0WFKxA6AIn2bQ%2FPhNWf%2BAmAbHjVE%2BnZM4XfCBdPBMZ96OQL3uDqcknFG7GbTWueXWIbUBZSnBAusrVJ8PlYI46PVlVAn0yVI9Mq6r%2FkMW4RtKlGhIVAm7xTJMypF7LPLbESrEjw7SFHvhePlfa8aseV98VpTqlJtptXeFqR4PtXIpql97rhyt5TrjwBSdiQnYwZdFL342VFWRhlYlH%2F3Q%2BENhaK37OFJ%2FZIpKotIulocpnQ%2BASYW0yEMJbd4MkGOqUB84EzZxzJEFvQK92ohZ9FfuDhvrrIaI2ZJBKz58MIbEEuLcOOa2sZoUA%2BujoFNHsJScw0VHcCQHreyypS25MIAsoz0wGhmlVm%2F0x6OsHUAuXJXh%2B6c5%2F2YlAHPZZRaIX50GQ5aqtnv5Hdq9XjoqGuHQKm2knIrYfxPz7HVNXoWd%2FW%2FB57u8OJyaS0x9tXajEDBS4rGXSi04SP6BnUCN1X5uSllQjG&X-Amz-Signature=517b1c84e845c7a2a91326d4a3e1e5e9f00ed3fc7e29724e0f942de654d7d986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

