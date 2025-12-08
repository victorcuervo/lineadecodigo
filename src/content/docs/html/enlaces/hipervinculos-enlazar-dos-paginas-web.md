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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QU6XZNDD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICpzkOclk6zfnvRt6W9zoy%2Fr2mc9jy9sibL42PcoqqLsAiEAx3iCFsee6PADzUaThS6G4yVo1qgnJnueYn9jsdApD74qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBAjg4s4HHHSJzqm3CrcA%2F2S3cge77%2Fpte0Bs1HsJKNj6xbyJcB7ZnrdPLZzj%2F03E47fKRf7RSqYjnHdES0AhHLnab5Z5FPEruYRg1R9Fibsh5FAjPP2bFFrLUDKWoIPwOM0JNiMFRnfaF%2BSvusLZpB%2BpN1OqNtRJsg7GqtKeJ3B4ePSuAa4fTMETpB16r55IXNsRdVfOax6lWaZNOl%2BqIuPtYCoxsZfkiFkYBLUu%2Ba94dttOzPemykNDOjtKLOs8mwFXEn8lrk72blQ4Nn2keSjeid7YmZIfngnSMkksulLhSEyDFul%2F0d8Gv2wG0VdRpQLCEnGvfxtW85xbWSubuPyz8Xgr9MU8hI%2BCnkeKQZzp2XPCgeeyMSGuls3L3GCfp4olcLw5wvuT4GjZbd3y194Bw9Itd2NTbkSHqYVNvTRatJYxginWIyw%2FqixSVynDRyLJo17oDWjX10Uayo8mfZmABWLsaTG8%2FdPGWPaH9XjqzCj3hXesvws7QGYurANBoN%2FbBDJ0PAyZB6r%2BYM1LUvlxfABvdRE8iATJBK2TXvtl4oPPDcT9kvk2F3zf0o8HJWQXR8uMRRFz8oRrYw3SiQXfxAWHYsEjUucI%2Fw01cHFbVJIpyBX6luN2KGgED3BTUyhCee%2BKhzZBoo9MKDt2ckGOqUBpS8M376KnNnf%2FSui8jN0Dk8MskflKHJ3APaA8rD1n8plh5I1dvakgPT3KKU11dUE9wJjd8SvvMlABJHh3%2FOlPvd8ay4xpDyPW8zy0xYV79%2BGn58mPX2XuHjoTyujw3RdycRUVMQL6lOkBF0k9TVW1sMkopMdhDU1odqOdditwaR0EvwPUu3s8rdgbYaxcYKk0hawtCAGKbo%2FE28I93yWMfyFoNtY&X-Amz-Signature=8a9977be63f2ad23164c95c528a418afd0e75eb992029a5a379598dc68cd1170&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

