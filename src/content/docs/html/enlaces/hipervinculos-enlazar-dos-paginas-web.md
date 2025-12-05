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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664XXEQUVC%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T014356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAWLbdWRLJd9ioxOfXKPgjukZ6PoqI5DsgAzEXRpNql%2BAiEAygTBXhbzCUPsWXzudq%2BAYvPLCdfD1M61FKT%2F5B9NxtYq%2FwMITxAAGgw2Mzc0MjMxODM4MDUiDDT3B3YPOXCNzJD%2BcSrcA%2FMkpi4hVU33SDV8KYxtXKPomMGcaBiCNEZQmDqOsqqOS3rPqtfrldicB4rH6aYuz59JXjF5670iWSCD21DZagL%2F%2B7gyH9OJvI0gLMhfqJDXGlc7Pa%2FYZ4kYYNP7ltn3XIk4mzIMgOLa7Fp5yJP2glzPbGV6GSqnNQbN%2FaeBwXBVIk7A0odRQuCq43GfpguOqj%2BZWgKypGkf1X95qlu9YbT3JdUEIdr51WyJ6aP7CYKkvSGL87uKQcnN9jBU6C46O4U1x62nGzKxsXnPFgg4%2BDz77qu7%2Byg8sU3FjJb5oF%2ForT7brmDZvfnzLYfa50asCZV%2FGm89HotglcAza4OpOmejThBIbffAlqsVmfFwuKUAPoupNz1As8KX%2ByURySe7p13D7yHQ8wZoOiG4GBesXGrqRCACI0UYNxchTage%2FDBsRGvYbjZQL9%2FoizK7DfSFde6hXx2C6S1p%2Fy6hJGdbtcuDjflnECFSCWMVfC9u8%2BInC%2FesSqFff0isGePsiCr5oYFTlsEOlDnkkRJw3I2aW3Nga0Z54IFXsI6NoNgt2EWDmimI633Q1N6EGj09gr2PHms8J8vKXdR8Sg4aJpq02U3bDu64VJChE7LLyTf7Qc4PJxeD42lHqoqbu6KCMIuMyMkGOqUBJTE0M%2BAe1qrpQvFGT%2FACC%2F0TfvBDzMyvJgSlKelX9vmpFWkeKS6XR82YjQDWT5Vk0cnFQyOAuykpsMchiANHTHa3iexXtko4hhGslQoVBCt5F8IoyjvjAAOtnkI3h8AvDxdjECLY8%2FEmo2eE%2FZch9ViJvam%2Bc0Y0GGx0pRNIeEa7ax5yr5jmorFnlwyMraRtTTMO0N1j3WfjUz1oUseZmuc6xQ7y&X-Amz-Signature=82c71230e5843f01ec65716ca0222780824e972a066f46efdf1d0e61dc3f1371&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

