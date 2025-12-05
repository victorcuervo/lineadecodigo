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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662MG3GIPJ%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T231213Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJ%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHExE2QVDpbjVHCNL21HEmQNO6GSKDJiV4IZ%2Bt4wbsTLAiAzz5DPZqDPwnwe5ojlcA%2BVu0T9ViQXHfpxyjU9XlCkNSr%2FAwhoEAAaDDYzNzQyMzE4MzgwNSIMB1GxEz3y1I3v4VQvKtwD7IbixaNFHSfHBh5xe2aZ9NyQ6Q6m4REIfQ1RolTBB%2FGqLgZseLRCc3bUEz8pFxdxBsifsK1b2%2B9hbfL4tI4orGxz8vZ%2F2sT3%2FDLhT2VSCmAjzpEgnihMN1qofiUy6CGTQlyvGGRminj7NMRJgqsTV1RApyiVLft%2Bw2xmlMRrvPv3Zf33B7kwKsB0FYaJqjbl6XSe2KzpKOW2PFIumT9elG5wqV5TcSmiGyFTNS1SVUgMo7OCBn%2FIQcg%2BbfQcIQ%2Bz0wYQYUF7pyFZKlyQSzuZHH9qxtbBslyvCVWxVstF0tJfrcqAN%2FvIFKece%2FiKql6D2uSStMr34xDL5Ti%2FmPj2qeZKdqisJSLkRsIxShQ9we3NvILqZ4u21W%2BbhkQZlULd3ZzhuxNmU2GPwnMtlH03saSC25DDj5iJIonKuZl1P%2BS4NWbda3j9HM4Ro74n9WiIuGG4w4bNeSx4%2F9SEO6KRw346buX9mFq0WPc7BcYtgZoITCMNpL%2FHp4x%2BDnk%2BH9udEt1JOTpc2LyMSZzo2EdDsSu6vslt0B1ADBtUlkabYkI0P4AlRrriC%2FMHTP0Hc1DwuAOAkHG%2BDPRHIL13P8gLHbRJKu13KOKIhiWwee91fYK7P%2FbzqGvCa7L353ww2cbNyQY6pgH2Xxhil7F3Guwhqhnq1WgtsfoJSKty6HmBcaNvjhZjH7Scob%2Bpt%2FgYbXE8ERihgOhOEId2R2yO%2BY0UZmAVvrm1dtk9%2FLexX58IX7qfmsnmy%2B%2Bx%2B%2FLHQweHhQuNFYlT5fJ5Sw4iItx%2BXf3ICvhcfaqaB%2F%2BHaICG0GtOaAEr4uvm7O928y0fr7Dj57rLJEqKD5I52opi1wqUwcwtjAefEe8pRJS%2BYZY6&X-Amz-Signature=deb3cddab188445d78d0d339de6b7593cc04b8622caf17f66bb4497b5f1cfc2c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

