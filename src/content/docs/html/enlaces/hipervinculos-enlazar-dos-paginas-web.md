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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46635GAKQPW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T195134Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIDzBRJOGJJ7Ph19BZ5KlBR9qBGL%2BN9K5nymUyw2kUkVlAiAoftK6LK546ye%2F0Xh3%2BaiBxuA2lZCMlDZzbaTrjP49yiqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMAUzEfoJWcczSRnhfKtwDeAKwSr54s5WLYt7sT7O03tnPCJuZlYH5%2FSgZRIqK9XS1yTTiOsm9TFssg2Gq1RbUhe86dpF9gXOhjGg43FCKi6DRgAMlgX1UkE2O%2BrS6gAeAPN0%2Fr54nhCX3r4rCya57NVBywLldKGRYD%2BP7t1PyLyrMhU87JmwL8ZVICNDeWVyWBgpEKH09krxdaSD4%2BE4ca%2F379D9xLXxJgiS1r3%2B2SYXT7MLRwXaLPE5%2FnAh%2BzYqcChm65kOW5aejYU36G1d8aFphcwN9h1nITEUMXpxBWNeHoVpE%2BjC6dxtV0F7MNzGh1NhMTR%2BibEB5Ty%2Fii4trTPN8wovRhE6b7dRayNDLKQ2Ra2WykS7xTeUpesI9MY49PoKy%2BgQxCaFKUrr2XTxCo0o5LB1icV3fxmsAtf9J9GIKNhGH%2FRj6qrvH%2B3I97mQMdl5ewStd6XvEM1%2FL%2Bzs24ewDu6ztX2AlljdEFMpeeENNa%2Be17UIEProIIca7HVPfLI%2F8WlDep2cFLRpffI33G36j6uywV3tOrQsFmSOeVZC6c4S38KJln7Oe%2Bgv79XpJ1A62aN03yB2Z3Qay9j41YBazY7eIwzpBUIXbtKojFhqHl5WH47zun8ZvlLmFSG%2FbHUcIQ7FBt2dOsQ8w9t7hyQY6pgEesyA800qCv1uYQ4rX7ZjLmSS5ojPO9XEBljk2zMC0p8rTF%2F%2BLpjW%2FFLqR2rlOQdoT058jRc1F8gf2SKkqcoYIVKhCNrgLSgriPBo%2FcxOBkRAmahJE6mJkV2R0%2F96xzhwQwWTGiEp8B%2BJy%2FpAeIqLV1X7xtW0cyjlHBMZqcPKLC4rZ3%2FIN4ZplePhPZ%2FQ0N6FQDV4GKKPcctcHaseDgfoTrUq0N%2Fcr&X-Amz-Signature=421b4a695fca7371cff87b94e08d9dabf996c20574201bb367130295266ad13f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

