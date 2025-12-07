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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666DEQM44P%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T074841Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAKKiDstqava1GxdyrnOiEsdSXnsm2ha5gv02yabr12gAiEAjQohH3ZOLebzbl%2Fv%2B%2F2%2FyUysK2ijoh6N72XSv%2B7CrdEqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNwuuIxDRvTe%2FVc%2BdSrcA9G5PrOGr7TvMI6XfCrOMu8MYkrb0BUscX%2FJt9n16KbjzyAJYElu6eWDMyIcxlanPZvX8ia95gsCu9ox%2FDq%2Fu95O1%2Bo15pIkiCNirLjC0%2Bc6wEWZQSb4hsmByxi7lziwPPc0vHIO6x%2FHbKohUWfgNQoyHpPCcDjbimpmRqViXwXXqT4vtQKba4s3XSO5uA70Imlbwl2ct5602D2Wy5dJw8IrQSl6fzs1cFrYgA%2FwIutUKlPwgrkPvq44xbj5j2c8OTX22uJja%2F7JDOWa4vsUPA5188taK9XZ5HU7LfADiPuaX9MueiBNP51dCB6QjWGgtNnppexoic4aM33JNdrvkFpppSCVdl%2BgIFNXNnNjZaaCipKME%2BOmksdmbj94QFYB2ee2h7T%2BiSKUNLpeAQG24LTU1q0wmP99rMKw0q2AFBW2RzgfV%2FDwmy%2F1SV8NoHp4eqiTPUpDkvGisLT1NpZJSoHPtCfbE%2B4UcVr73cN9827JAJ%2FD0FBsjhrPJEAB4aLzHtfWBhCAJam8CL%2Fv159U%2FItDe4oDYyxkuTZ8tdaDHCeFi9pwJKuptMGlqSershfSJJdAaxC8KuM%2Fi%2FiD%2BTi8yQ7u4ClutsegcuOjH6AWbRCwUuwHDRrfeCtEckhdMIKc1MkGOqUBpWRLLVABMucz0pe3QjmWAc2lEaA5Mx25EqDmGefb4eGllBmmLBCaJGWfGu8OZNDiF8vQGkE0bwc2GtY0ISz6MSqfILDdQ9RfppiYJyjL7UlC3migQ7Bf0Wik0wF2wGX3dV4hJLkSAcaoP19YC7jh13qQFptMNL1hr0FLYxB1A1UiPGk7xv0kCIeAgnG8aCp98txkGCl7ywXPxpQEORdoTNP7AgHO&X-Amz-Signature=9eec98da884a72a8ed2a712fd25aecb3c158be7426ffece03eb287419fa5b4c9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

