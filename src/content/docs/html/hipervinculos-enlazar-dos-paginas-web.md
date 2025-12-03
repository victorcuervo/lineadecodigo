---
title: Hipervinculos: enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastupdates: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46655S347LS%2F20251203%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251203T222249Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEG4aCXVzLXdlc3QtMiJIMEYCIQD%2BUYhIfOTFb1WPPJGul32QY6Tqmfu7OxWNRyskov20cQIhAIn%2FqBLrsRSQiWRkGhwT8qNZQi5gr0f8UCvbywctrBmHKv8DCDcQABoMNjM3NDIzMTgzODA1IgyvWFFk6uaLFy%2Fp88Eq3AM%2BobnCBf%2F1TRE%2FTHf%2BqmCzUUPm%2FntlaGeGVK5meUyRvS%2FHFGzuYT0yw6MHzPkO9S6Ex7JvwUB1drP4cNvOT17bSouPOxRFhbOvlLi8LdkCLpv6HeCnJuBWKW5CebEsoatUdI09b6g1qkB6neKeIYnOEy32ychP75g5h4HmXeKrdPxgW7sC%2B6r5SI%2B7%2BH1hYJMlACWA3kuUdydOl9NfYGP5w7OT%2Fs8v2GKhhzvvgJTJrtlZYkoaLQv%2BXXmvJM7sN8e5%2F3vEXN1mCFSAnsZ0VVFfiTRsRh8NERuhy1XX5l3uC2HwC5bQcy4hAkogPYGJB39Vl%2FOdsZvWiFs%2FLR%2BCArG0jBW0mXKbo0RF8KCevCfv5Rx7qpldcViNLxbFLW7%2BVLx9QVgDJP2POX8zvEN9Q5INtSSPDk%2FGzxoq0pP%2FCk1kBNw%2BMEmPESiIZ8kvl4Ct%2BzWPcbV57P3rfA3UhTNLSi2Oqvb9w9utiVZfULhXQcqLFL57lHhiJpLfOvhptbYsXt2ND9H%2BbT31%2BoivSdRNDCG%2F5NHjg%2FeNg1y35ZfW8WgqED7EylTCbbYB0sV2MJsabKzrmfU%2F3o04xQ%2Be7%2BCTmi1H8reauwcacigZt6WcyrX8qWwduZE%2Fq%2BvIKC6JMTC43cLJBjqkAcAfeE%2BMm1r9pPRinKwPcVmZGUYqaj1XTYi49W8%2Fio%2BvymdzwQZ4L%2B1nFQpA32J7rIYrtevhXhdHT9bjX8C3VAt7mi2LzFBgKwdLeR6pCnZLuGas9lJnDHhgjKCOnzsTAw7YmTGtKx2UtfuFH%2BwSeSUTuj2VdbgzcCBZPRHyVCbbC8cG%2F%2Fup7YpQpYG0lf3Lt%2F0Fj9biHGNRq5SfWYl3PiMywK2%2B&X-Amz-Signature=f2764d460d821aab7a83d90887c86625e5c1748f75ecf1f64d891f9639ce4b83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

