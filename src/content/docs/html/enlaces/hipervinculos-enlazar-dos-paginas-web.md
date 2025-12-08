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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665WTCOXEU%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T100929Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEHBOq1g5eaWUeNwKmNoHBayx%2B70jgpXXOwq35oPbZtNAiEAnU%2BsqdQUdMjNe4vhiVuskWFe2flgtaTYdJo7NdXP4VQqiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDw3jlo2arHIOhYXMSrcA%2BBfOJY0BNOpafEf5qUa9tYLvrcd2iRtXdxU8HazIIXLiFtL5N1OWKuKnNX%2BYqCUOhJ%2Bc8uPXCf%2Bh02PIbQVsUu3%2FHvgjK%2FAb5ssVC%2BljDOx8WC7ZMhEO2RT2ph6F%2B84sqtyGuHXSz1EnZ2qeTq5VESCmeCv1qkjPR6xr4o3H13cY9Cx7t%2BfJZbt8rTR22HADFY%2BOSh471gbO7xtqh9dkNgtBGBOJbuus0c9Gll%2Fc0vZeQEyJlb05s3spbxqPTNJPfudayllLFySPIMbl4uHBRR5FK0xxRRmudRlr9i82L8TSLHH%2F6djkaCXVYqlg%2FQnSmoCYfJy4BUyPJHidppmqVVnzH5icB1kkAXGxZfDGR1dRPCxoUmXCcxoPNYQnJ4Y6I9IZ0t3uHQ24N1iuQSbx89XzMhgPQ%2BFGivesOiLjs9U59EPSQaMscDzpk1X631dwTBCiP4BvcSJoyVP1ukWWzu%2F4k5Ixz3D64Fx5mnNhClAxOv5K8KIdfWEGxIdTCpr9iq2p9HHyZyCD2jbP4MNCaWAISxDLWU674oECG7MwwJzvQehSv%2B2gKQCjtN5ftS3aehhZZEFjwVjrghZEzaCZbySpfveHttgltYibKOIIa30KSMk1CEHRY6mfNGDMO3t2ckGOqUB6E9SvfH7ngWHHihNKf0QaXCb%2B03js%2BHXTFx6hSAYu%2FoW6I1A6R3MG1YYpWwxMoCP5t1pVD5eRtZVAh5KVK5UM6cRGuLqF8I7oXDBcX925b6Vku7%2BAhiFH%2Flxu3zjBMJfzzVma9qG6hfsmMw5rSwqzcfqpvddjLh5yVIC7abMxGxLWG%2BvYB6goCpbrPVckWZ6urW8aqO0%2B2%2FOqGGXTfOIcZHxfl%2Fi&X-Amz-Signature=39181440e8d51bcc0761376f59685c369648096e8ddedeaf93ef1bc4f569831d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

