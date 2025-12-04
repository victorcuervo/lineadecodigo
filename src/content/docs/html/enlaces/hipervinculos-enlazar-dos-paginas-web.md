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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GSJDZW7%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T073446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJHMEUCIQDDeGEPeretKPUjTSX%2F8X2GWAuBQPw9SUE8vSPgao0b8AIgDmiYqf36wj14NJjchWSnU6CrashOgBUgFog%2BzQj2CvUq%2FwMIQBAAGgw2Mzc0MjMxODM4MDUiDBKIuJcyVMJFyQHUVSrcA0iXoeSA88vkDVGRYuAD%2FJWB9uIX1v78S2IwvjYlh%2FbBWJtAeTGN%2BQydtY4UcdOJ%2FenqJ7P208yvGBjq15w6cVg%2Bxl8kCoXyVspp76tYmPX2dqTOT5gsE8fCrqonu4aPkCfJBjTiVO%2FurHb1QpMPdTw5%2FsYk033KeXQj36t3h3VwCZzG498JpsswegV5T3VJpYMUpMYHDwRDC1t%2B8CLYlfheuUvDmtVU66YtzS8WrGgLTLTOGkGAXgz88da%2FbgW32nobo%2FURyDADBm%2By44XFY4JVFJ%2FgmrPC5tnjnTOuO2RIpx1u6%2B%2B6PVnfeT6KEDOoFmMzv3LGXNYkzf%2FlZ%2BOi9S1csMDU8FkIZ6j12a5wgvjkehuCBS2kIBpfCdls3CPxtgTyQobnO459ViMUb%2B8w3hcKvaHdAUBRRIDK%2Fzsd1Ws9UtDT60C9bNdmDsemE2ZDdqeyhaUsUiEBfok1rcek39DKbIHh62fhTrYX0ald6mdBZspUbG4ShiAeSRW%2FHkljsjPLbJlpV3NNV%2FhQ%2FrIEQkMpppZMtvqooyFV6UU7BUoBXEf5QLTVtxkUdx6MiHytiaXhWWjeLgiTl%2BkBh3lrIXCyXZuMTnruvT86XcpJWyXqV949a1EF6kpk23GCMMvoxMkGOqUB%2BL9SS0LhqARmbX04pV17LiLVYsuhralSUYs92XJ6%2FM%2FAn4wae%2FnkkniN4oAtbFuQeMJHVZWv1ceDFzm3XLGzmnGUyJ7rJjnZY%2FKgcglb2qlWjgokHH3VVFZr0Rkq5N3c%2BYRa3DvM6lDiBd8gWnbmSByntBTL2K%2FLh123Yu%2FjwNgDPBPYCdvn8abkJnKlmSHKTDK%2FQH9CXwqESFn9TYJYxH5f0bGn&X-Amz-Signature=6853dbc49e04939647144727f266a5277972c11212cda5bf91c6c241b217cc32&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

