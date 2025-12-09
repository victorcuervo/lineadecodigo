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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662CEDGLQK%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T180310Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCEKryjcWjnfyaMh76oQtBDOjo9otIsGfIvmuDTS5elfgIhALo4fl2jG4VjLw2G006QEZ%2FJ2w6QEptmNrukcgN76fDmKogECMP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz4L9vXxioXRV5uyOUq3ANMeWhFqEPfxJuiDgQr52Ng%2FcLKmKa7%2B0Riulpswla%2Fl%2BoyzyLfwh7ONZ8ZxalCCFG3kqct6ZNawhjPsS2nHg4BzBc%2FTZ1bUQlr0yx9QYcOkXXe6jHDbdaP2NtaFbv3E%2F7cvpSvTXXhjLow4J7Txk0ZEtTi%2BgvLxO293qif1ymhW8yVZe6ZmCEGwdF4DttU5hRfj8zDAkEshLd0CM36TV9vyyKXGCbBsjRm62mdKn7GjQqhJKcQ7zvKYaeKlKaBEC40QyaHIt%2Ba598mZ%2FpBYUZL0PO4N%2BWIekGnYlWsh9Mk28xcN4njGNQfwvjwbi8t8hrY0slYSV85A55XQ72%2Bgah0uCSX5QBnVFpQZCS%2BQFOZcZ2A2obJ5tida8etAkHJfpqtutDg0iXkrc0m%2FpHN5GmJ%2FqyU1VTPB%2Btr5HLC0k8nt5u14ild2h%2B2YXMdtBPLzLGdgf4WyDOB5TF9KPjjeSmDzMLENAbnepzAgbzkYGV%2FL63MasxFVXOenXbHonLalkARANydW%2FKlYJnZEAnpmXzvvHPNr3MZugy6CrHCk91qM%2BQc4FUWFj9Wb0M7m84XWgcAz9in2KuWZGcN3JNsWy0HWnwt%2F%2BcfymHY1aUnW%2FyZO6GNrdurzKngs2LzxjCkveHJBjqkAVintOiqIJvb4G3aPJpqZzo15x%2BsG53UOYChvG4K96URcP5l8OUBVPKb%2FxpNPdIb%2BxZopkVT72lO7XBgpi1RuuiDNKMQkN9W4SqwSfix8%2FDtlT95uJ9ANXwQ7y7%2FDWWXM4WuYMNJWdLJ2SGwXZbF3xfyet%2FdFurzX8phVDZlqoMmsYMIo6RsSSE5m%2BqQ6pVjkKN5Nc%2B%2FSt5HwUV6rmKKqjnndhSV&X-Amz-Signature=3a24affc9c074110d1672ef4708c5b59305bf43ccb2853b4a2531b99388fdfc7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

