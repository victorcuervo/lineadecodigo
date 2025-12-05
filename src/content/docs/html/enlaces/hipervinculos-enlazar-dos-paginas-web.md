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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YIVJLDOE%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T212640Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIGPjLTR3%2FK6L4vsk7pC2JIsAqkdJBUPTra5ZvSZoCSoyAiEA0Z%2FD65J9qiRgEDjSjuMtFQoFRJ6ZWtH3SHlbiLBJOWsq%2FwMIZhAAGgw2Mzc0MjMxODM4MDUiDOtMg7fW7xnLw2AcgircA3gpblNnbZsw5zDlA6ArpFCY8F58SVZExE%2BBDfbfpgCM7olK9HnggBrL%2FA4iiee6%2FegtOAjtBYCSTyUnElm5aehxTsKyvX2GBHBBSqlmY0rKT4ZLKP%2F%2FNm%2B7d3sLMTvUqrbPZMgPKfPei%2FOijen%2BfFPzGlFlsFZkUaAb711NWLMMMMk8LdkuEtlMf0f%2B%2FiCGCgEIuIhZsUdpoES9chgbXR4oJNVrwpyxfdTZ0f%2BE3CcDrNHhRFVgejp83cmRiHJllkvYkpUWmS4An3qoRFm04JiokBOmWzl%2BZD6phpS0%2FWzJErgkGe%2FpDinwsCFuf5loqaHyhtbbdANsyWKlVlmHYOIQuZOrFxnYNkXKtzRV%2FPIuc9HQf68G1MgR7E0sidPmBWNq%2ByjpV8hPyRf6FZlwbcZfMyf%2BhUEa6zu%2FmwNZ%2BizpjOv%2B5B5x6SQT77hTgDki4cczqI7BjtDvNwPa7m8LVXgHA1N3JnYjvCRDMB0aEnbeGZUGnJgZK0VIfDhbhJDtWK0Poqi1baSNDQLOnsnll3qSyDtwQai5hLF8AHsJoj%2Fy6J%2B2le6QymL8R5gKXX52Nrn9pW4U4mMrIcUsK3HUvSSDSXSi6Rkar59Ad4cP9Oljo9%2FvZFbDlxgpbO34MOiGzckGOqUB%2FAtF5CkkOBkUI8lFzolbmYEsK3ftnrCHRE0wFoR%2F8vLQIitDOhMe3pucLMbLPnez%2By7SJbwWLn76Ek65eqaSLz6q9vcyG4iSGEGJdDyD43UBXQ2otHOQnDwh%2BRoFn%2BbQyOfPnbHId3cj%2B6Y0o%2F5pTFJhwkOBJebv3eMXQsk4dEkrF3%2FsD%2F4zv5RuVMrpJY2ZSGZuOtt%2F0AIxsJx9m53An799KjU9&X-Amz-Signature=8d01081fd52af5d90dccac5b322a89ed6a9307513ea049ecba42d47b8b80ed64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

