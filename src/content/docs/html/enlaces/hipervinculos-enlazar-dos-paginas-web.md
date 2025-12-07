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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666HCMMZSR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T053931Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpJVAXP7yAT%2FIJMnLm0r9JGgYGxVaMI6NCqA%2B7vdeR6AiEA3qansea5fMVVae8cNDSn8b34ae4gTAXL23KstZt7N18qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDF%2Faf0GP29feEOZDTircAyA%2FH6ftASCR6UztNVnhek6uKiF%2B2%2BHCvtPJsL30jleqzx8jsKee9wDaboibTZ3poPjMARkmp5NR6o3s3Ml8u%2FFAHoFtfmH4OMN0kaiy4TELvUFbUNB82ASCUwpVbT03XJvL80ChkXBl3NvklVpkL%2FVVwbV9o92AGP87cOnstgK8dtObHmOjJVEekiSAmniZuDHz4L%2FeFJ5K3puGoBym3BL7iqeSlkFYKHRZwxkv4VHEyLwRhSPU%2BpJ7eUGyZn4%2Bxfxwzjb9IVfpn4e3c9%2Bd9ZdVHGy472XIIpE5FLf0BSzswVA%2BpbMGXL9PI%2BrRIMOqHTbLHdThVa%2FLJm6azXqvTgWOZARhh2CcDByiXqgBCqYUJHZp7KKJuqYwRVclE2Z4s%2BECeiaYaXgyvWaLPRXSR8aJDwYGN10AsodvcFCeGRynfa06V%2FPqeyX9FYYUSw7N%2BS3efUBLnDxci%2B3LHdc3Vo%2Bf8666d%2B6AS48jCwq0Eryl4DcA0ADOehWUYlsPy8yfYaRMzBn1Ia3DajTKRY5CyjSg%2FvqDg2TljgaI1yuDYvR7W%2BZ68mTu2ou%2FaZNW%2BonFgpkyp5fimbU6AbniRK2nXiApq%2F2TzfI1gC%2FRwC0ja44ebu70oQz8XUmWemacMM%2Ba1MkGOqUBgNbB38slC0sMhQ5L7P6AICSynv%2BIBr2JkcKhl%2BNHWHzwHIO8Sg2%2FNdBd%2FW0MLKPUyzz9nKteVu09uBpUWvP9waJSRESpiBaCuiBCT1iEDm2x%2B5BoKJrIPD5pzSR1G6%2B91zzrvPJhWFutP1oQ7XgVWMYAJrkBO9u87hCe9QLL9aBypNhFxOajin%2FCpmzTbQGyhP%2FaIeALSjwC%2B4%2Fs7K%2BrIIBZ2CjR&X-Amz-Signature=3179f61ad7b2c8d470ed56e63bc56ef13ed77a3706f1c616668c64f24fe7105b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

