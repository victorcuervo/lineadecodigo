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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UADMLNZG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T204301Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIA0yMDcU7HWN86lLAO%2BeziCnQAwhwpZfpHtDY%2FPQVA%2B6Ah8If%2FfL52p3gNH9RPr3gW%2BKJks0swn%2BpGiJjrv0m%2B8KKogECJb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwXwkebOz0YDLSCX48q3ANcrti3Efo0L4W9tj7HNl8Dxsxtd9cfUTzBJIJjmJG2IXhtkxQaMNWZZ51KYgL8koJye08V0M004p7Tey7E4Ycsren1upKkAz8MpeVmSvDTS1JWvV3GaE0DyFnq6GP9wVG57fKs%2FEt92uHAXUJgQODlAWo%2BIqRWKGzWvMBBJ2hUDOyYfwBnz3%2BMjGZj8fTC%2FW4AAP4oXUM8JSqfalphTmzNioam%2FuZs6uznHtTXR8Z5JpfJ9lqo0AjAwCSVObGjyuPA6tyIKVi727yzWv8yzOWIvhvOW8KY7ivDffuBrXzOFr1WRf7AeoPq%2Bmq5tyPEO7K0I4XzFAerPFmD9Kd8lCZhprBejUfb%2FT5Xzduav2SN0%2BQlZQcnKWI83dqkIUhMT%2FmuejWuBEJ4VkNwwq64YpSTG4WZ33Ahce4kFpV783mw%2Ffc2eHcaHJcsQWqdIUPS9i3PIHlD%2Fmwpfb3820cg0Mp94%2B9l7SvbHcsqErVyZ79ImMPLvjesPG0b9w6AeJBkzmtZ7yNRiNh56l0LcOkFN3Fd0Yjh8v5Ce8yQ7as8OAIo0aU8rKVm%2FUo7BPIqqs%2FtzhAzt%2BWNrFBoss6w46gIqKD3Nt4LnVmil%2Fzi%2BWS51cjorVs2FvLSGx34M6BSljD8x9fJBjqnAboIv9%2Bxh5L%2Fisayaqcp%2Fs0tcw4lf392SgSUtsqmikJNwVxZfZhU9Rd5cO8qYNOQhz6tOAbm6MJCVQJPdFtppBizyr93zd6PuUelLm57PAMLl%2BR7KRVo6OMRTUWkMlrlHFIxjEQdZUUc90UleBUEXet5ktAKZ3Zr4vcaye5efs49wyMzaxyYnCOsk8OI1mDIP8JFYBB%2Fex7E1TrU1WuzlVeoP44czoH9&X-Amz-Signature=49d8ffe74006feb02622db9809d414bada3c6c96dbb08f6a4fb2d7d1eee1424a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

