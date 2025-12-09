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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662K5RNDHZ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T153658Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBMJuAi2j%2FZZA19zDaFel8H%2BrHvSaNDL8tewTr0q%2BSmLAiBKqNgh9un04guBffGKic9eFRQuoFr7SV69OEdT8mVlsCqIBAi%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMCfY%2B%2Bh%2FalfERCBuQKtwD6s1xSyyCT%2FcMypwawLbp6KFH9wh4HZKZrEPekGAAFGCfh46ScsVqIxseA5m6k38YdpXgPjZ0bvEsmImt9Su1ggHOvh3QD%2F0ZeYZaDkISMwqTDFRwi55ALVZ0DMnmnRYkr%2FXZGViL4H9Zp7TmAXr0ZKs7R89He98dYOKTRu32smLwnk1y1CFGwdSyaoIfDweMkTNK%2B%2BmKPSpxNsuO%2FY0dW8bV%2BQUWKruEr8%2FACSoUs4cd85rXHjVMSgpLhXF%2FQYR9v65mWvEZvNtFhFlzHHGbKBlmGLCI19Kfc4NeG0I2574oE%2B1V3ftKrffr5m0q40RvH2OK8shNvNNiQ4Pa288Zqpn9bipuHs81R3erpdDZzo66ya7bqdSl76UQtu%2BJuKu3YV3X7yDio4ETPAj20djvqv%2BOcb3oA9wjF30nR1qA8eJtDmIzNz%2Ba%2FWzoFSTztne5i170mO9pApAEL0EG%2BTGxxGp1t5T1qLXRetyz9EHCeWvDm5gNvIG%2FWg6fkDHNVFB4MXFzryNxOTuQG11yOHVDpP%2FEeBEBPv2%2F4LFsG9ntGWvuWQLXcrguTvO7m8m7tDhe9OHbxXXHoikfl1Zydfltbc7uqMqolRVDijankCQJOAERwxJb5TaJImTgZhEwoN3gyQY6pgFqYLNHH7AcVrTs8G0Ltk%2BqHcuXT%2BFpOZdUsFjMaHD4x2cQ%2BWFnWR5bt8%2BcH7FBO9Ui%2Bp1roarpXFVBsGhaV7YqjSDxzl8CvkSR0njvLOEhmnubnjEtbX2vp%2Brfz4f9RJRW5F8lLdjJvqLPfzd1uItDovTG0Z3RGdgc8mWTFriuWgu%2BErPbf2%2FWZ0FiKIGhG%2F9YCQpt9s3SmLM%2BrHDiR2mOTJYvpbBH&X-Amz-Signature=161fd779aafb20f9523886e1ca52858e0cc850714d9271f806a7c34903683057&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

