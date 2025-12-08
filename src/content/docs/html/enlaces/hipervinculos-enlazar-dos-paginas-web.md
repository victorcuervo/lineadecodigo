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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z2XRNFYT%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T174217Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIArNV478DNtJ%2BvdQc64lsOUCGnVVcPnFe%2BO%2Fu9T%2FHd4NAiAXiFMaEN5dkFPuSnr1B209tHl7wAvh7bt0RPjb3eELBCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMdNK7tKqWPRcB1RXpKtwDJXnzKhbTnF0lRLRsfxcAcwbLGgOkiSmF4JtWPdWJNUAIH5d42ASwgxH3g84SA8dRqIRlPG%2BzToEiFy6lU5Wqu9kJ1%2F3ud%2BFdK3ae%2FYjA3x4jGRhzNhQfk4xCMRwIhrepwXb0G9KCJxX48bV30jE6NuYf5yn7OtKBZihOaV4wtyBKsiW1s8HLFO5q%2F8C2UnmdEftSG8STytu8XRSQ1j2%2FnW0kQM7xGFSrSppRs8PIWYOYQhwLECPA979sng%2BWgIhs2DKgFBAEqxtmVtWDvpsuBAeEkIrIY3RrmrvCfnMyan3csFafMv5AX01ngrf0EMR23ZtzgOtA7lFDCfFbxXuY5BPa%2BlxfdES4G7CriCitv60Sfs4CZT2Z%2BXt5Upu3H72IH1rmaK3BmpKMN1wO862Dsiug8N3S%2FT4aIYq1MYLSgBGRKvMDn4Z73BqIjdwjEn437UkE8AcZBscJGxGKJnTlKHLSoBIe%2BiDH5k7b2AohQa2w%2F7nxWKFHzXDbUIB%2FHiF45dxE3IL3xs6G993DxuSy%2B0VYLdJm3SXAkK216OHxQoWDPace250uzqC86N37Dv7PUNfAXG0npqA6BoznZ7boZYpUy2iRI1n1HnGfUIfcl9zpqx8%2Fz45F9kg2g%2FcwvIbcyQY6pgFV6pdwaapg4oegAnbLbTgeg7R5M6vH6TA8CVyI0xPhMxGB7DuNbVaA0L2IoXm7bZa91YrzEzyUzKf2heOluRocIprVeFVKPm6dkdL6PbRLH%2Fr5skUfGkF1wg4XFkcbjH5z2PL501xZJLBBMPBzPh4DqbaiiFkcFmqhox0dz8MJDe5Dt72EHqT27FzmxFws5kwwTbcu6DnkPJnyX2Ywg2LMIPeZU9Q3&X-Amz-Signature=b11cfa446251add8d6cd1c507f9120c2698c99f2fc568cea52be3875308177f3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

