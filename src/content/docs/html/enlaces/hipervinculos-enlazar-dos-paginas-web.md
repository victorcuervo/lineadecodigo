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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663O2GFVDC%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T043711Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCcj%2FoYQb7OZBujr6H4sspB1teY7UHfklmhyntnTdibhQIhAOuVc24j0WRZfMWGDWtJ%2BKi60WogWKOmoPueacsuDfChKv8DCG0QABoMNjM3NDIzMTgzODA1IgyXOy3i87IFQxi2aFAq3ANoews%2Btm24N4aPOiKuccxbu2Cm%2BPbuGZDasbYfP3U6uwPmsp6PW58Zgy6bdUjPJ6aC4YArBKMceRzXEmatzz60lT4UK4h202QsxjNPtmlNmQdtz2g8s9Yo46%2BeC4O6aFZ9CjJkLLx91WWKju3flM0mVRCWK2MNUVmMqu3LHgScZ1IIsWiuVIlhce4mBVWwrIx3jIdoRwNZDmL5e66LQokPZgW%2Fj54q2brtLhJ%2FPVDAsS5C0tFP8IVF0GAXvKVOFdTJvKHpfnnLdE7SfhnqHKExk1OHcxYs%2BoeLhQr7r%2BKQckZNsJMkE1I9qLFfXTFTi13xN262%2B27ByHm3axzocRhVIOZWRZigkAdATcH0eMY30FMV7v2IOlruK42NvQDGLdWMmp0q%2FxhuXh6Pr0l0O8HXe0GVMDCeZ68pcIZrQsbzSld57coGhDXXrdZTGFb7xKmnU1pV1%2BfWTEbe7%2B%2FdcqJBYoWt7MdtW3xjYtXxqWk9iGk6HpRGc1%2FMv34hd%2B82rpyKKrTjFD%2B5OSBwtg0Kjv%2F14l0PyNXfAdnu4%2BrhuJWsZud5j9L0jidAGsMVND0onMJxyfsX7khhv5A2zWqFRaDedlP6Zw%2BvZGE3TtNlT7zpcL89aEiDnwXml6DLZzDz3c7JBjqkAa7npPNDRa1T99eaPc1colgIBTDX2abu%2BUkSLmAZSo9%2BEnobTLz2F3Z0Mr1zcCOnJ%2FdNOxyLLBmlCEmbmIBrFqX5H099UDaahfXAo%2B4ZxjD1Qr22n9iVNHzyLLye3O2lrsJc5qWQJavwLaY7yDuT32Kg1QO4PFUCllE78iCp90r1Im8EJZTACi6C2OZq1NeooBqM%2F9f4K7b%2BZvJs0mscdG4aiExp&X-Amz-Signature=3e48b1d5e79df1aafc97ecbdbbf8ee39a0c904ca203e16192ef39792dc95af3d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

