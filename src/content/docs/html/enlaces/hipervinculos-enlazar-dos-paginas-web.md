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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UTMSELLS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T081942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDjEXFelVapWxFvv1THiRf8uL8pF221zq7c8408h2o4dQIgLXuCvZI0Yucrd%2BcllIA6mGyUVK0ijc8LFwDk7I6veJUqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDH9q4eAqTt02qY15qCrcA6NFBU%2BDx%2BCtZiMw%2FYF9OFiWkc94javGMKXF0w6gCwuhSvSTIpL1fwFIeY04N%2Fy7HbTU8JOzzG2VLM1stktf%2BpcTIATEZtjBGkDq6qmeYDnP7jYziRVyQweSv3xCEDPYkXZtTE86dDYw6dD4gBn5y8GLE6IqIKqTjgPO0zvIAB5K%2FGVjv3drp4aB1kyXNcOpjsMTDP7wNDZKNdLrsCMDNxUhhaZ3yt2Ltl%2Fz3%2B6%2FLqJBXpCbxZOfDyioQuPuoE%2Bz4YXDsa%2FHN%2BSt7xN6S14vsYPT7EmKiQxn8cmZudzYnadCRtSF2oo%2FLS1WcTVXj%2BTULBziPOWmI%2FldcIR1ZJ%2FAsFOvpHAx2duzPnYuHvdffqKtCgrniisNzTEMZ6zIxn4wWhnPbs43ppvpCkr%2BS2Jn9JzdJ%2FkaSVTcVPilGvwGaib82vK3GsMqV2wszIodBXNeclQ%2Fw%2FRTwSz%2FohAS5h7Xax0MsUlNTZleWKublf6ttxVX330sqcaIBT5nndhCKCIwavJay3bHXAiftC0Pc0gqdKxWN5559b5pJdiRUMQuKBNGNw4eOKu0FrnPZGDFX6nZK4zHmmHQZUMx8Q8RQ9mB1g8ukOtxaCdcSPLF2bO6dFJs0h3SArr9I5wzoPBGMIHu2ckGOqUB5cxRSBuMH9K81u2WXv6PrjHbDW2jSE07qwU90u%2Fp%2F3qCqTAi8LQfo06jSm5y03EroN47Jqkh%2Btd42sdaAHOz4ztVeq%2FqWNaTLsDDmYZEDzrGygWFsOZfcLThrhsrTLREiPgB%2F0M1xswXxNiw2YSAnk%2F5G%2B0mBVxtpXOuLoNI3DIQ9pl3X%2FNkodT0aU6Rm0wfE9AiEVTJopGf%2Bh69JJgUdW1lmbcZ&X-Amz-Signature=75798d6dbbbb39658df738bee0d0004cfa78116a2988e950695311f1215f05f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

