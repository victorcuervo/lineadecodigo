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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QDMIMKJP%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T234420Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCdWOcjRE6fn%2BDVJ85OOQev18RhG9%2FOqj6ADQjSm27PVgIhAP44vrPzULQrnN%2BojLD4L8ZEB%2Fa8mhki%2B9jS9Opc8RjmKogECLH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igy6oyG7lQJqAkqPoIIq3AM%2Bd2xByYDKyrETVxK5V%2FfqObP3xWmOgh07eeCKGBrc3A%2B%2B2Ak5w61ZQrNfRoy1W0SMhOQxpo6kDB5uP%2BP4Yl7zElsD0xQhkEZuLxrDOs6H5WZHUw7dy2SSg92xuh%2BQ3di10MvvRmDC3UoFLmCCdbIGKZ10s6NntOZ9YSbK1S71ZJkZ6UEjsTnGIghyTq4EdQ5GCdX5jVYdLPqVKKmK9taO0KBcH1MOSScwbgFZE%2FRCaFxH%2BOizMt9wvZKxHI2zFtnrwhKB8posZs3Mz8unYnR0MwhvCmYqlRv9rgRP6bHqWv79yHhPJirB8o385XcvA4pS3xMsNvLQEPvO2w0LTLOfFoEVETVjnQkrvZ1YCD8B7KefTvTrvuGqvGzheElUHoaYQyrEwDe9TSMnGerBxXMDOq%2FK7HI9mY46RfyKdS9RLPTWlmulSWLenbeowNsZ47sUeIlHs9KStTTEusDcdlKVP9Z6n%2FgPwrTPwfoDHONhYFop%2FLcfWcXNT4ete1T1gRLgszWfrqZKz%2FUizXLUgl5aCoHkoqoh023m31p8PtpZwRX7ZpTyx%2FbbilNR1hiXt%2FIrFcIqIof8YY4jUMEK7cJJPOQSzESVttqAb6f5MqmEM34I7Olq%2FmzJTA9ooDDcwt3JBjqkARgoePSxioM%2B8H%2FF%2B4IhlR3HLyvsUqueanaGJwB72w1jGGYox2yWZyfLBsh%2B0LyOw0iKnWoEhO4OOe23rgzZyrfHi8W6AuxQ53qFYN2VwdVX7bOh2HxUZ2WfEGRvfofYZihtJmy3LAOUUprV7G7Q%2FLzs2tGsS3aHzXYaY1FpA8qMd%2FmMRHJHlsc6TthymDILksPHApcNY2pmYAIJQ2Odhyd9xrpV&X-Amz-Signature=5c2d23e21318f94fbfa3da2e3d45533c9d18bbf3b9511fbc77a8f5812716f335&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

