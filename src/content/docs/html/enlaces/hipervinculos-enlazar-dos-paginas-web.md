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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RTXRPQ7F%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T154230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBiJCK8OVbNbbCMYnrWfJN2SguXzXaq4Zn8orj6U5bRLAiEAg9eW6sDins0OsCxZ41ZXZkZyg2UVodRrgAMGFyIMnNMqiAQIp%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDCmo9KpkigLGOQDzpSrcA9igMHbmrDja%2FzOOFdZMDqKfZRbM5%2BuTkDuwJAHC%2BgQ5Hantx4rOOU4Go4SVSW1e%2B46q7WK9JQYugroKbsM3psDpc61k7ijGzVQx%2F%2FxikVgdtCItevL1j%2FfDRZHh3%2B%2F3JL6vf8Tva%2Bb0fzGy08pPtXFkODElsE04OK2rBxIlqkzG1lzn2oGw%2FtXFedZXUFHHsAXQBXL5ZfyCIWDEHZzNf1G0nrQc0VN1ZJuiLeUk%2F6BK0xrDzZ7q%2FT6Ep428Ck7WBus%2BlrYigmiFjnuAtkKXALETw5uMP7U5c4P2DanwaMqoT3yT%2BfmXFBv65iCFvShDYGDC6T70G4LjG4BAcghxf4GhRFDhvONTVDwbksmHJwXrGqFnugK5zaqgWSZjT%2BTw0SDRJbB8SRbZJ0RRRYWE3BAEW3FmVajrTZcLrzAYxcR%2BNrs93a3AfMTNPrF3njoRsrZGWK6cW8hc7j82qNMi%2BjZk3fJVRPSGq62%2BX9ixWBF0lM8P31ZIslSoJPx9eXto5E85bke%2Fu9sIZ4yfRmyHfG3D1tpY64LFLG6Bj%2Bb3ux12Ou44g99Ib2MZgDHO4YZWC%2Bsqg7TkHm%2B9fQtkP070RtyM84Dg79cUg6Nt4Qa%2FYzUp5cPS3wbtVgxcAIpCMJPB28kGOqUBoIfDR8%2FteHRYg1tDpKcapD1we1Rs83dk5WgKPxTk9kuYAn%2Fv2%2BbdJCHKtLZMvKj4yYVu9dS%2FoXeD%2BXi%2BzolI0MorWmcSLIpCL1HXR1X2SiJKrCyoyL3Ad5gpJ3q189BjSYGS%2B0%2BUWJ9SyQqXKnN3pnLW2z%2BYAmbWxS4Y43fFiND3FcrNqjhpLWSc4FZ0KiLbHWXcH%2FS9CeIcH2X7L94WjoWmE9H3&X-Amz-Signature=be79c6e5039d15c1be90acb73bba73ac9d7e451ec1dd24d766e534ea48753d91&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

