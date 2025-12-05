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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YC63Y6YT%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T062840Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCa8B0cxkPm3ZjLGALpgo776xuSyylmgFOLobnMGEtyOgIhAP%2FyRvp7O2l9kt5Tor2pUos8qTFKaDeMrTJ%2BN9q6HuiFKv8DCFUQABoMNjM3NDIzMTgzODA1Igwv45GK97JSx6511Joq3AP9KVkFE%2FnDvPDEyS9tOfpDjt9yekWIhjqTN4Mwbtv0VLoqH5oSn9aoe6QVQ1%2BVi%2BGG4OVMatQo9Ph32F8r9Ll%2FfykubojNEUhwCexoe486M%2F5Gq%2FoByoZ9vuFN6UF3wCIMmwnbPXtws6XyH04UodLfNmu1nsG%2FkS3ma9OfaRcB3h2%2BbVdYxREHb6WfSl%2Bqs6UFXW78Z7%2BHcrK3Zz2%2Bbdpj9KbQheSyGhQ0E0%2BtCiFz%2FrMS7nkRCKv%2FF2MEvCiLhejSJXoaxRaoULrMg0dPEqlTiHVAxmI33v6aDxM87p3SLKTWk1vcFA%2FBoF9hq4ZKqFgyt6gTZwpd%2F8J5jLbjUGpASXdeUo3h%2FU5CU2ar8CDuEcaD%2FARQSji3QcUtRCLvn6PrWEn1ZOsIcUXpOpn5w%2BwRC%2BYUFadUUguXrGLPruBctyJ0LRtmho97xUqhz0usY3dvVohvezZHY%2F%2BnHmVN5gvB2Ars4rA0alQKK%2BzpUpbw79b%2FXGYG%2BBWPv%2F2ZmUiA38bTF29yP9Znggk7FRt8c3Ub%2BWvYHt48eiP9dU5QIxZVAzpW175tEMAXu7wZlsAOcVUdLOBo%2FQY4KPo6Zsc82759MlsfRvIZC0Sth4oLAZfIWZJLbsIYVMfFbNHRDTDIqsnJBjqkAQb19nVel8hl98pJEaAFNSUez1KEOxCgq11YO0Jdla2oXpzPxqj9chBKW3%2Ffy5we7%2B2ygN4O9Fm%2BqfjEuXc5b34RmV8p%2FcfZ4gaDly4BuanXlLUike48vPt6FyKArRSDFELoXnnPU8DPPKBzzshnPIXNFcBAUQmetkgWn%2FDBhLeUMp%2BM%2FuXhYB%2F5eutUJN%2Bg9e7Xyn3mkLE%2Be9Ej%2FNy%2FsjWg1AWr&X-Amz-Signature=35e650115e9d6ce9e34352418c88415f81845eb08d23c5a69981f83054c63765&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

