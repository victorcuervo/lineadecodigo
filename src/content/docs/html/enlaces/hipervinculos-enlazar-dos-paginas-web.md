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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SJHPOCF6%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T011934Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4ljH4FAE18DHLvz%2BuSirPH4PcFC5aPkDf4zLM8tUgIwIhAIzToY2JCOIHPAGYL8xRMprRZq8hcUAoLfGwZnPD9jpnKv8DCE8QABoMNjM3NDIzMTgzODA1Igz0TfVsC9w83wXRIE8q3AN8ZdPQZC1khvVEVG67p1x3i6vPx4WhE51%2BtSSk7wugu9qbD6mnSJkIRTAHD4p8jbmNoKEkDQAV%2FJ4cd0HQ6fL7UpFTu6Ni%2BIr1MCFwfndqEmrbUO3EKorC6UZUvzz48%2FrQEfxp5mErDx7MutfB60jacjI%2FJAdacz%2FHpvLhZDKYP8BqWmmhVfLZnPAOloumuma4g5HaV1O%2BPjSEQGyvSNTAmjyvUGlPwwthElen74Q2P%2FmSUh%2F3Als8nSJNCCMCv%2BG4N%2Fv2mgQVJEn8LlYi6g9pYQkJBMO8MmcQ1x36Ouv9RHLlEj6emFSabY7oWiXz1%2FhKFuCStA6p4Thhra7GK0%2FxO0SXbPL6REo0eX3Z%2BSk2v4fgwC3ttOH9Klp8VMpMDJ45U8jPblVuUZPnMGVwMo%2Fu0dg8FvgUzF1E8BIr9TuYM6uPQXequqx%2FSjFPgAGO1PPh3L3jvlf5fJ5akE5X0gZLqHECuFuUqzTSLRtB2CkY%2B5OmdPnEpFdRIT4E8vxugfMQ8CPYS5dJaLzbBB9tYWT%2F3Pyt7%2F2m3JDLjFyGVwiGrHd7XXli25MmqZfkQGhk5D6g4xpWEQ1jSs4O5LcUi%2BOhW3cDqtvgUpMjC3VhZ1G8AikEBxtJcaYPfZzByzD3i8jJBjqkASFSv78pAKYmm%2BmmL2P2YbMigIgYIGzD0EDvJet9kQO24%2BmmtK7gP8%2F8zBTcIywm4gf3TsEJBtkBsYzj7nrxiB2UcmdI5T8pNXVkjLLn4vs1Onvu1%2FV7o8nyCI1pm0h%2F83zgLLdqejqtMpy6jZni6DcpIMHkg3y4wQm9lywdTfKDSuPIYebUlApbUNoTtnrCOMqXLqp2SvT7SigXVShm%2Br8nrLkg&X-Amz-Signature=c802dec2a33b9fd4d9c56c1717538fe0775f1f29a161a7017aedf7700bdb1d2e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

