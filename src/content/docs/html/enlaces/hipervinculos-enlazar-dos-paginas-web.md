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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665KARWFTL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T201657Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDf2bdRv2xtXEskf2zP6GkxaCo2XQGeoD3Cpv7apJ0uLAiEAyjb4vCWDAo%2FwJH1On5BE7aZtawPL%2F8sC5FnUWl24dzoq%2FwMIYBAAGgw2Mzc0MjMxODM4MDUiDPVkTJ5YeKL6qG1DvSrcA6ZREQjweuWBk8eCGjjrShhc88Rt1y4HMN2N7FS86pAcOhhhp95zALZougyQNsribDbZY9lsTPDDuzMLPU6jcElGCsrIPWqXAa5dEkKCUaEYTJqozIhNuw6CRcEwcI5OUrKgvkOT3JmQ3YI%2B%2F1XFXc%2Fxm%2BXFRz3NuaBkhTKRrCY0756PpGHfQAWEMPq%2BK%2BWtUvL6EpPxAAdL88x8DgsaJjHGYVcpqb9aJtM1VOVYE6gemBGADTRQtm7wjAdmB%2FqMms9xxv1mF3cc5TIh2IzlpixAYO%2FqhSNxCfzUZa%2BqNmjbZ0YMH01Lx8zxKO75HYjuH%2FNoqNRgCkgwdgeLQ%2FwEBhToE0E%2BtT3yYMYiWRu1GVQfRCelY2JeUg9ttgQtsRqi4yrEUDkiepcSjZvBBo46QZjxx0jErVjQda%2FQRBHFH%2FGcu8khKMmIP6o%2BXUDbPq%2F9qUrws81khUWP34cZ843GsqttQw8BsIP8Ayi8GvwEPhbFkNoFXTRi2qqpBNLpIgNlZQIF%2FhqLDOYl4GG0t2KQma9f%2F5dRf3DxGb%2FxuPvUAubgV4AZdEMY3fwpGKwMcXuAhE1WfhMyy1cl0jKWCYRJmxrKq%2F%2FW0bTc8%2BiA%2B5LoI1OaI3MBayL7i4BvVtVtMNfly8kGOqUBQlk6K2dVRuEneL4bUJtT%2BMr9QzJrGoXRMgijvQZMkC6iwttfwY77Prre8zoKma2pIkNknoBriSNPi9TdnGxRZu0%2FfHrbybMOLO6LP9fX2Byi0d27G%2FYEKYw2TPLUTpSas9W7FndC1N3aSe%2BHhOTuK%2F0%2B6Xlo8fbN5%2Fl2NmuSFHeClWECFNWnYmJ01zwQcTTZqlWZ8R9NbNMpDHq8dbyZD2OGpf2v&X-Amz-Signature=c79eae1e0dd345836d1517811311c31a028334fd81e9c1ce6b5d807059c89b7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

