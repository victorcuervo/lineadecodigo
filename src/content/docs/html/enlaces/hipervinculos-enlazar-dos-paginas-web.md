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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZKJLDR5K%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T041251Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDcmYCDZe6jPILwaEYPk8%2F6IvDNbg4kkhqZCoLoykRaqwIgd%2F1QZm3Vh1pdMW4Uzm5qrU5kXqAikw%2F%2Bp7qbyf8ZDKAq%2FwMIVRAAGgw2Mzc0MjMxODM4MDUiDLKVcqBusQLD91f7CircAxLxsHQYQsEDkm%2FnS%2FRiWBfTeXefW4lgVgkv24soxQyGn%2BAutf0I0R6cOMY%2BXeRTpuOfkenol8SzmiEUhI98mtPmiJkafFmW6mG0DgQn3CyiA4Thgk5oLFH%2B99uOljVdD8mf1e%2BCYr%2FNglGnz9GNiCB05wdrxKq%2FYwsvJr0J7jXdZ7eMSUfqU8D9hjnElltjmMv8%2BQ2DHkh2NtlkHian56z2hB5ITxR%2F574N1s1rjigk4Rd6n1pxozZ88qzADEB6JdntX8ga25QiS7%2FlKinpC72%2B43fjjLGYNjhqlEzUXjthh52oafO554aJpAln%2FasP6KLlI0Ama7tAWvNq4K4ypalSAUPBOXrmxiUQStCJzbfuYW55ZKsA%2Bgwlg%2BakuwUNQ%2B8mr7dAJsXfd25gCnmYq9DBcIoH8fxMJosarlqCbqxqNmPcRCNtJcIc0HM3YA3JzPR9Tf2TzdhLdbi7sxF5HE0rGXXjTlcquE%2FUJQtw2BpmdF9eHzXRuSu6MdTME0m7ypZq73ssGAl8bZ%2BuJP9weRgBon2PWSm7j4eQ0GwQSgjS29QRelKnNMAQv%2FRR5ai%2F0iy01WqNEXYKviILqKbn1vWTS3LmkzXrSS3zxtCfNXEaBN%2Fv9pTOP6TE7LChMNWyyckGOqUBzoT72RwHaIHlY8lx4PjaQlRY4y1NBbm6L%2F0v1WXDmsf3ovVx5rIokj4YCowWXL5f0pF3BrDNt7%2FsNQ8iZR%2B74T8h38nso5EcqPbZ0CxgLZiIlYv66OWI6wVQvvPDzFrdlW85iXNUolTm3MnKlzTcxJ3dlQB9zhogv2oMTNnpv5uh%2FsRcqBrfVhTLw3df%2BxSBE2WUtDQPDfBXtbtywfmgZPqvPVRZ&X-Amz-Signature=b43d1e0f788e7605e02f304ccd1e79fafe3622c53af0bc339352adf45c864344&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

