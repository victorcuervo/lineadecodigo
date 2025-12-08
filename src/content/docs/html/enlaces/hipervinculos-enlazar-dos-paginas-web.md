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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466R7GKHYH2%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T184633Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICrZZZiNoRUE7Y2tEveJfxt2vbdo775T1TU2IX0j3KqrAiEAn7z6ReITTKQ9yKTf7ECdmVLOFU9DsIaog1Sez3T0hy8qiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPK5MjB6UbCHynZS3yrcA8S9MlKlvzxxbqrOr87zBGiklEgU0mTvO%2FC5Hl2ePqFOqrZy1tq7BJHS8nVNrXvq8AiQWIbB7%2BgAe5cMdB5f%2FEfLjfje%2BRLYlQrgiTj5UydcXiIdHQzMaSxU30pvFHiA2qaSlntqP2Nb%2FbYMWL7HDPgmSvVI03ndhZ101ieKwg1oxfwyEA27kCdmLFKr%2B0Xa1PKdcAVroWsVhRJZo2CdULj1h0mxlVq%2BmFGYAXJIYYMP7Xxd6Vsm%2B%2FFQvCc4pBgjPV%2FBZjPye8pvrNEceTmu%2F5dusJ1fVzSFR%2BsKi29kVcKay%2FrhDOGa6MKtL7w7J992jqdFT3BXn2%2BQYICH0rbNrPv%2FNF%2BYW%2F3KvQXwv7aotY8qFqpzi2PU1rwvBk6rBCwg1CZjKl2I0aR3AEVFGfGHoSMMUaedyjEE9IkM44GWoATj8eKd93pGjG9T5aOMqZl1Iv%2FpkW4TUZfJ%2B6jbbv%2FwYEmYJgsnonIxxT%2BNk%2FbqhbacVSQqnuTgd652Qvkz9Tv7lYranuf5lTVsyrXfa0J3oaDOLqWColmDxwxa1g%2ByyH%2BLBm%2B1rTzfIS9wAOG207bR6BkyXLoWcx3TdMJkvqswlNq3OajJggqq1TV9bQxQJ0YPCSbQv7%2BawfLJ4jvbMO2z3MkGOqUBtk7s3kdanDrmDHwM9BOzg0C8%2F%2BKBgPSZG2eLe8krPz%2Bmmr5B2byPGWGSQuK7k59jtIyvJ4EYUsmyB3il3XiKReAYxt2e2XJYQpkVHtdKkVQi48kWxOMqGFMsBv4sNDOhCyvz2o8ZDeUVq0dMZTKjjcECRiUPXbbkjEp3z9p7A2pT31gUM%2BxiMZieA%2Fty9uyGHoARNtE%2BJwK6HGlXQmVkmo1eSyyT&X-Amz-Signature=b90fec95433e6a734197debd4715bf790338015b49f35beb13da487a8966f700&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

