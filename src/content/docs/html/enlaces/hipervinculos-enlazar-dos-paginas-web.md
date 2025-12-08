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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665QHLBVUQ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T045401Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCJ57F1zMYGYMYq45lAFjakPTDw78OoRhbU6Wo2vLHiqgIhANI2WLNcUhR%2BFQyBAzjzaz1gRTPY53i82%2BEtJYTBaiagKogECJ3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igwxa8EtTkoxpJJJc8Aq3APM3AKnGzcWu84Ih7TIYHmAxcRKdwOASFRfIMsamZxyTyzISMEJ4QqPWX9hknHRBcEERI%2B6hCmhi00lP6JqZkiPiVZAkPLSS30f8F7gtv0b9qp9jhzV0rzUgqgLBsJhp8UDtliegEu9IDjbKT%2FQrPORrc372ziy4Ba0dSA0uizywHaBuJlqfAq5uPKaoYdZrtdGQm3E7YM2gEB0s3OOnkN6hBrzT8TerZLDGTXITI8%2Bdy21fPXLAYb%2F7h6Zm3e2mHIpcavkaqnwUcrLZ816zjnh71iPQ1UioGAX29o1vYeuZd%2BKk5dAxJMriDX%2BTpxWFv4LDBkLv288x5zxBzzBBWBROSG9xwKotJfxVrGGAjbmKeoITEsx0kZeur%2Bmtq3aI09CoDnwK8hOK18rsRVFF21f41d9o7S7jo2sz07G6h38tqunOyNcEpxkb%2BPQCKia2V35bv%2BCS09OnttnsH2XeztuKhRQXigEbCxbj6QsLaHXZ335qKH%2BcuncuFsJlFssn0M8%2Bd7sDwISWidFcTuRZ4DpjhZSClHyswRUdhVw0my9IKP31vJNVRy0%2BxzHwMowYdYU7K3UK9LdkFqiqKfVWKuei8wi9FpItd50yLKNqP5HJoBZZ%2F8LQkhSYcEwyTCUlNnJBjqkAdRWWZXUYdG0EoSEF6tIw20dD8C8bncj2a8t4K0HsAi3T7nYnIRqQv%2FQqR%2BWH%2By3aERpzOmAWNgFBvy%2B5ZkADF1RNdpIksmpx1v0bzY0TJZIH24csGHuzPh6QVOWO0EAKqyaWUexKhw6vdq3WtWTGdhvt0DCy47fpaTfhDk1YKRMabqtp%2BRBKxjx4G4LBI6bswRfCcy255rAFVVZD6WxmTnyhGOp&X-Amz-Signature=0cf27f592661f4d77a2039e386f06ec7d00be8484f952c987db0de04b08d3096&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

