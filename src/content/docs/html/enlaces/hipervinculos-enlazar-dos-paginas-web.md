---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663YYF6E5N%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T000927Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDdkZfMj4JKRdg8svqiHzUs2t7vbCiT8Bf8YE6y8ngSpQIhAJz0hW99kjM%2B4tCfALLyRCbEt8GmD9Uq4%2B6x%2Bi19BIMqKv8DCDkQABoMNjM3NDIzMTgzODA1Igy9QalWCm6Ibn4hy4cq3AOXWtF47wilgbrYYevxBfLeg9O%2FO0VtP0lHgIW3mqFpgFtbr4dynvwjDbMzOAtTUTZv9FtyJGpMVMmNQYRFEFeFr13VkZBdBVb3EIT4b3cB8tok%2FV4hU8mkO5HMNt4SX5%2FsL3cDvALDAPnJjzQz7Zz%2B%2Fq6B00kNv0PXbmePYj9Pge3ISWs6F57%2F%2BVhlem%2FH585s47ERylH7GvxUZVpga4o%2B0g3IscAkojP92DVOR%2BH1mhG1yZj6pxLY1mktJXy9UrRkDguboLbByweihromjVQ6Svoq8rVTojAeljvlXhFUyVvVh87qTxJB7z3qjYyK0OiiII%2BPMVduDUnEWAwYwYeFwQbadHd0u8G%2BujPCWaw0dXQQjs%2BAClZ9STpDULfF9x4d%2B6jfryOq5hkGFcOuZYTnMYcs6RMJmrvor%2Bnta%2FaIRKXluOk5lnVUkeuGqrDJVcYnZqWkvKa%2BfapcQyIzP8qRx5z74SYW5ArEFbe1G%2FLj8r8FdyjM08bzFMoIiZa5BKbNQqfGkneWRKdoMJsOo1WdhKPTWeNJsnBm9lY0LUKLH4eKsWhMY830zRJbnvxgFDaG2StFjSynT4Gr2nGS%2Byk9N1TyH%2BquDlg%2FrRo%2BTVeLvmwsycHnuYtgK%2B26VTCmlcPJBjqkAb3P%2FB3FZgKKrdiaReYS68tT55QdHCYo80C%2BCOPj8zD4NxeWrVLAr3XOAMC6QaaSKdEOgNKXXkk96oOp7DPojXg4G9fApbeLqnNuOIyLUhSBXXfF8J4MMVZycMLJ6cFFGXPqbLAojHC5Vi7pyJfUADRipqlJHr7hw334BqnFq90ASQv3GTji7WgqBxKMsK91dcq0nTyX%2BZXnZ6XPvZvcXW8K3FoZ&X-Amz-Signature=051758f4d7715f6f716986efed45c4225804835ab432ba0c3af920d068ef9c72&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

