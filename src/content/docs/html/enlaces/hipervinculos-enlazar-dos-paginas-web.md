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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YZ43C75N%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T060939Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCqUIpGIHuc9%2FqrHPfucUWWnekP9bgy8MPV7JcoLDy2WgIgfGptuRdUvWKjjAtO0w20g6b93gKy0nqm8LHp0VHE6qQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDIZd7lXPprU2bf5QwircA2VpZliT0DgCyZKQmHNpa1A77dZRG5irDB%2FMcNbUPALGv%2FB0dpztYvvZjbC9ZXOL%2F0e2AOZTxqmFtERpOe37lbVxx9LQ7adMdOVMBDqHuaW3Zz6jFi0OUE70FFKu9h1cd6tITiC05m5S%2FHbHwkZlJ2jFfdPRCP%2B7nstKY%2Fj7eCEeIodur%2Br9peUBfFs1rCHl8Sp2TOcJtUnxVo%2BxsY%2B2L0cClf0MZ0wm2q5aOYelbnPuxl5W74r1Qo45nb4t1JG6X%2Bk0naEVo%2FWIoyaO0bMzFWD3lc3k1jbiaGkVqubnP0uAI5S68kU%2BD75atFmkwwh4HGJxzybPS2LZX4gm9Cc7R0Wwex6WTmXbVPJz5aamB3V4dcyHmqJIFZ0D41OAo%2FPUgG%2FcQTlb7LxmGQ%2BVc7A%2Bl3IOgHFxheWlvZ4KTSOgj9H54DAir4bdAYFdaffOJTPFXzcsWdNpqRPNI%2ByQzJjD%2FypKDDHtF3bf0tUj4zgD7ke6duYLF%2Bl5Jg5o4kLu8ner235d%2F1oYc1fB0f6XbsnaqqRE1TPLnTRlG63pQUq3I1Ii0bRtzr2A%2BNEORs2WmbIfJduOsqwyP4HjzNur60JHj4hzibWB%2FafgV986%2BVUKG6ORTx1p1KVdb7kDqIpHMPTQ2ckGOqUBsHzamqoSpGfP2%2FeVqO8ynEDEJBpnSp46N90EFNqLhtFPSOAr57fNw0p8ZiB7oFAqr1QGwnjAuR37TCO27n9SwGVPYUc3Oq%2B%2FnNQYplO%2BPabNzN3wAqnVOvNwLUGKLCmTNXdqxdh%2BSJAW8Z0TbS3VnkU%2FjmFottw%2Be1%2FG8XqpmMsOmyNiZG%2FQ699EBYiTnr7um8zVVtVWWkz%2BeUzdloyPXSo9ZHQo&X-Amz-Signature=a15cd9c3d11ec9823f5a1f25d8c16700776db404f43465b6c4c2a12564b79308&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

