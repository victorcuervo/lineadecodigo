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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46632MKBXUD%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T233653Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQChzN0W7wVcMbcLXoP%2B4qF0ThHn81BcgiTDs2rKaMWcLgIhAKaNZEhfRoKEf%2FSXBAghrXQ%2Fz%2FYPmU5m%2BXKEk5pe6ubZKogECLD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxLGGyaqCL1wTYKfe8q3APvv%2BHJuUu6GsdFr5JbjaBbtbcH9DYHD%2F1YLvfMcoHquLfOS18dBsuz7c5qI4zW%2BPms%2BsL6sBLTyTuZjwDSlmkbQhRHKqv9ZVxnTa63qJ4H9n87A8kOa4hTUYgb8u1PyVPxMVqDcraK%2F3nxFSF2r1BDBhvyhyCcTVIJUcDijlbFLiTsDUlg6QXppFyS3Ha9OQBoZ9%2B4WDi31r1hrzVEbmSM1WnjYo9gsVnZvhbgschWr1Wsv6BYoxKazEjHPZENJCzpDwgC8BOS63Gt5CfQjgIRsXo%2BnR68%2BgaXV%2FujJfFZXlXK0AQD%2B1Rrql7IWiS3CWdfGe4%2FLa%2BUoWUGEleI4R2j5MZA3HVvHCbCwee%2B1%2BlaPF5Cw5OOos%2B3TqM2oBC04qEEict%2Fm8sg%2FAZfh%2Bvt2OmzBQZSquAkxKm3TsNebbpVtwgBfODU1mKzNzBAQh9VMBKLCKOTo7pP7W%2BhyrIKXvzd5pa%2FSDRnmAO8CaWHXyNKKGQGZLM%2B7k%2B194drr7FKAtesrWL9os%2FalhvUkpIBnsVXLT6cuOGiz71YCZIBExSEP%2FLY%2BFtM5SQdQDILp3yZFXmTC0iyzNL89jwQP%2BhNr7bsbSRPjab2hkc9077DSW0A1w%2FaVKcoAebi6%2FiXDTCoot3JBjqkAYjZstD7PcMrngono0tH%2BM6MeyNCu4YfdA49HS1QaiePjFsBOxlGEfDJu%2FrXQUUBY28HYMR6yvQadw5JV0oO4hEU6lmQtgb89exWHdveLndUdVhpoHCIzVnp2T8YtzIlFBnT4SgKe4Inr%2Fsk9ryBZz7qjelatC17dGeW02mP6k7uMcAZwcxEb8JBc7OgjZ7sltHjw7%2Bsuk2sQ4Q4USU9hEyyZKSY&X-Amz-Signature=88cc2614ae1b15cad2e2d869c54d27aa29484b7208d6229cd531fa34dbf6b8ab&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

