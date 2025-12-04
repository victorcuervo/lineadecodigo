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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QJR335T3%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T164904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCfVH%2BIavVoDAsI7joQeiHeuH2JrmFxGkcn%2FNzQiEL8PgIhAOFyW9T61m1pdxgt9Y9ZdqyzAmRbISaz6AbbPTlEkJUEKv8DCEkQABoMNjM3NDIzMTgzODA1Igwje9Rqqm9pwvnytusq3ANNt3IbuVLlNmIHGPx%2BJ3aRwCReldNEeXfgbTyRz0MQTuAbxTNhRBSWzhLJ2nyZszbyYna8Ueo39b7fwpjlASULYtsdaHvcSwGSpEzUGNBVZ%2BlIvIDY6fHs3Wstm90Ft8QuQSlHm5CVHyKf4Llrh4YKUS1yBGwCA6pSIuIoWoVoWD4gqp3QD4LWGV3iYLjPn5k38Ly1v7Z73mz68TsYptQ%2BV9r25LeFhxTRQMWlOluzlTpmkWfQiL08VFEENThFD3v92zcFMMjWZfxeg%2FdLNOIGfszin3azQL5lI0shJi4xQvpgnMKDarXMNqEuHcpB1hCbwF0Z4UW2u4St3ayOUwfkut0uG%2FYywQi0SOPQJFXji%2FQCPIoCbAyl3HKat8SchYZo4IrD3pqcGg7DZzGkbr%2BSwH8fHyhyRGY%2Fwo0kQGvETwvMRRJ3NDfmh4l%2BZdr0C35vWdpQZJdrSSu9uDO0yPdhhZla6E01si90QoxBbe9lz%2FDblKAoi9q9UsTFroSYXpHx7A1DS6pcMttNY4DDY%2BS6D5xNXlgWrJxEKVCn0KSOCA536okD7rCZXUeTcsvKP3nqjSKbv8r4CZz8fZl%2Fxs1aaYWzuWE8X1oSe9Bsqy5yiWYnnVn2PxuOt148FDC93MbJBjqkAejFdvSbziUrNudHLx2%2Bb3ruq9JgXS4aVyg66qgthiAVmq0enzDeOGpTq9803I0Xl7tmNSPWzyhg3XZ%2FEOL35Df3lKgLawzWF61we288VNUEa53aHMF%2BQGmGu9Jn6a6ZKaqPXmBejKLDn5aSYLRtGbus0t7Mz%2BNRO9670o%2FqwPDFFUhqiYtxFzeSR9NtE6fvf2nA9fVsmEPF625150v3nsfD1%2FxS&X-Amz-Signature=e5292526923fc1f0487e0971e15d81fc198cff36adb2d28530427ac4dfe1c054&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

