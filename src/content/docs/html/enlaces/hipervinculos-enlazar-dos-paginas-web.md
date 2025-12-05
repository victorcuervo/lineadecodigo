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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U662KHKI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T032710Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCe6DEeRR8KdHQtFVQbETW5%2Buj7fr3OL6Ct5KvrTQlsggIgFqbvRlBtTIbeE8H%2BX%2FhCtKKurKwGRtL%2BWlU7Lrsb7TAq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDKpoEHf6A9j4k7kobSrcA52X4WS3EV3B%2FLa6jbSm8QT38ru1LyB8bocGv5ykwC7MG%2BZWyZ%2F3HgJIPaqh1K7NrXHmlj2v%2BkaEQK%2BGd9d20WvXl2eHvIXz2phjA4UXVXsrYdNrACMpBjtul6R5geoAYRycoPgMU4QXzEcma%2F93inA6ukdG6nR5Ue%2B5s7vJHPqwra1L30kRWgb6lhBAmFt3j3ODNyQP4daovpPqScmxcKm5RQsvJz6TTlD%2FV68D9JGuSjbIxM1v6w7zHyabShyTpLUefdXGOJ6FJYJRqDnptr4Lb%2BuvO3IbgidFIo6sViH4Dv3bZxtqbBOn1IMoZIVg0s0dEPyoDJeEshiNtquf8SG4W9umE4Kvs%2BmbkHns5FXRI7UYiHdSiHMT6KP6%2ByO61mXQsQn2s0FVw%2FE9BJA53p8SV6ixsO47Yto7KzynaGGHCxI0Ht1MIwi7P2mdj2kGXPE%2BEymsrmHQtSTDnHUA9hR9yjuL0TiHtCl2d3K2ieK31%2ByufQ2JpGXbLSBHsWckkEAigXT4g52Z7ytaOHo2YXQpqL5ycNnSAAgyxFngHQ2fjLYQsFeaDKWV0l6qujMtFFPAEoS45rUdxcWM%2BGdxcg8btsNsb8py%2BnSHvyP%2BpoLZbmn7gPNiTWgbIVUPMPKLyMkGOqUBTtPWbOTn%2FREHxoV6jcTeEPTvGLeKVFaE%2B62PpkJsxiQMQWbQxc7OE2Bhvgv8pdDcdh6%2Fy2E%2BfJ0zu1pTRzSUTAWcL%2FgJAsWey7O3HJBz3u8wVyvAbFpXYqLaKqEyMKEIKtT3cwOyholut1NXACyGpEhZyHjesjCsFqM8ukKa%2FY57ygJeEgyJRDcydWusA20ixEuFhbGDb4%2Ff%2BgxkK6OGJAXi%2B%2Bm7&X-Amz-Signature=de1f1e3475df13e2a01504fd2b7df266451816bb62bc532f1a48f190257067ef&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

