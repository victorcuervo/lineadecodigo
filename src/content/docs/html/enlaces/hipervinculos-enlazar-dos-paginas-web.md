---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z5V57YSF%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T010146Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHEaCXVzLXdlc3QtMiJGMEQCICt1zJSabSguIXMAAiCvgkPY0%2Be97THiCJ479AfGfZXrAiAaFlZZG9sTQ5RJRH1HvgZizRcymv1mRScvfmNXXZSmmyr%2FAwg6EAAaDDYzNzQyMzE4MzgwNSIM0Tf9EKdcHnsXq09XKtwDaFjMyIFGruxEHZs091sdd%2FCB%2BeRlsAUtIZucIgvCkGmjB1sFJmVLJqgEiirx4nmz8caeHK5GdvwBmWxsVHOohvsgwGrDX1a0R27WwBS7WCavwtYim6W9POmi11kv%2B7WTazId7lbs9wV8e8pDj%2B1kAjtD1Z0isOqiiZxLiv11x6xK2%2BHmiEb8mB%2BOZ9x%2BXiltCCRALvRXUk7fAY7403iZE%2FoPy10Wocw8ws4pE5xKSGdIZ4Kqorbgu0nvZeV1X99RfUisXcWtyu5jp89Y53IPTIwKZX%2FW4Nd6%2B7FJ54xeCB3wRbyRZrpcZktE5M63QDY0ixtbOlgLRgcdS8d%2BrkQafkKCnuR7%2FWsxMcla1pZeK1r1Vq1L6zWh272vLAcV1de6T4ZAeUNJZIJDtrtm6RjBGdL9xWntSdTCTVIbuxCwd7N1BVVv7lAjV9W62neqhSi5U1yQNQAqFsc%2FgyghpjGLTdBawNGxJmxyEDRuysOi%2FadEZwq3IyPVQNR78P2AmxAJcDNQB%2FPzK8RO4SeacQl3QImtMmwwjR54kd8HREk1ibi7o8hsTl3QQI%2FrS4GoJuhy6Zwh5vrCoCJ4%2FnXfkF6bz%2B%2BejigOOtMMuPOusYPY2v2lSkXw3pXjBB0Jh0owoLXDyQY6pgGZowpKurDTDbYR54KGaNYhnnSiRCWih5%2FkZwyxHvulZ0ALK25kx9IeJLMUTSrZHiD8HbjJH9CGj8CmBz98rmmhbPk8fe%2FNGGD0eEB14StTGWnL1J00jPFH1u56Iu5Oq0Zm1J2bjYpaxXV9Gcw1q0ZISqk5ZUD2qBmoM00Mz%2B8rxYjcEhlFVR1vRY2meVBClWxroq%2B4T%2BuaxMuBfmnZY1ic3ewpZEvV&X-Amz-Signature=2ba3a06d0596b317bf9fdfa0901c7ac1e4e049b84e1adc838c1bf8f870cb079b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

