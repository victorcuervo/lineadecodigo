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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QGIEDE5A%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T062358Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEqX3KtuAPEN9XgHqoxVQew0KSrSsuEfCxel4Z3R04HvAiEA1uEvy%2BO%2BwIo92VAAY3KeIfuiQH0jePMvOpqBIjfVnTkqiAQIh%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFHcwANzDb2OeX1DBircA4GJS%2ByBHwj2yGQG7m4nXJvCS2Ue6LSAf%2FEt3ik7ZdVMo8KGQxscDn6QuWjuSctusjvNgJ0TLjs4nES7ovsSTZE8%2FHCp56Ij3Mox3bofnqwSjD5T2PscI0J2lC%2B3xerkb87ALeUDwc39po7fsCcA1Xv4suRmshObs9aSdyuLyuMW%2BzW%2F9lY16D7XdIA0ixej3%2BL%2FFRa%2FUMnteNyvh%2FiY0yd%2B0HlRdxEU93QiRcq7ibvLMytHYUX763Cml78b7iyqA7CTg2P%2FY0fGc%2BoGOTzSFfNBNU2IQMRzQAx6qmBVtccizsOfM3%2F9sM78OMzu7KqWwni4AjIvOPmZTM2JCXdxEDWNOP34yICE%2FmJel3hR9El8TQMUs8C8Q%2BHc7VQMQB%2BwBHcBJDpjzMcXynQ1xbJFnKklT2hYYKSzDAnGRxV0vFX2%2FdOvrPHa%2BoNQtSGJWgTWiXqkKbMsdUOb0uJDuPfOxbHkTCEOj5lkCaoZZvPiPVhuaqjkORGwAfEcPDBkIjtWRqk459N2ThvvOWG633K9m3%2FGZsxLuqcwx8aQRqSSKqjt2rSkTvXxfk0D7Lp5RJ33gsYqDXHZZ6lafkLJUfF8u8HQ%2Fz3Rb0vt3tTioMnfsImZnpwEtHzDPLtKnHr3MKui1MkGOqUBmgSoKCe7dn3dByEJnQT7wcD6SH36NQHz2tOsoI1fZcObh3Slg47rgdyJFZWN6FmYbFQJ1X0tEvOgE0Zvok%2FkldyEjTZCmDeYWsawxK2Pt4m8q6KiJ5ezq5PGiiXkkcu467JDW61wkAPdN6XYiDJr%2BvD8nV8k6x%2B0An87PXhd2CitPOtx8QK8lDDEgA0XeSrwVcuhmiQAKv23gbX6fQoE7%2BpUjCvJ&X-Amz-Signature=4c01bdaecab5b610ce0d8ac905d9bfc72293fb9ce982bba9e8968cd8cdb9e3b4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

