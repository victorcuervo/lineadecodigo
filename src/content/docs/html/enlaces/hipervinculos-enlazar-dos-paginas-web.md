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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666QHCXNBL%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T050521Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD3gvfgpYLU4S6oG%2BQ2cxOHCkfU4ip0NXYvrWFHirWaoAIhAIj96nfSJr8Gv5qVkqjCHjDPx7%2FKtTUYyhw5bRnMmk%2BnKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwZlqNYmdSrXWDrG5Mq3ANbU9zVrQozUYQon8BMP574NZ82jrU2T6QD2fSWH%2Bz9GDmlrl%2B%2FkAj%2FnmCjYHlM0ZaFCOtsMxGj2NVh2Um2RJ7cgGWM4R%2ByzVb2AuhIEJvDegRQCcuj%2BeBxx7h08S1sqaGwp4F%2B8H1CQPUQXXGzmL%2FuBP7EEcCR5J0cQiaRrV18%2Ffd1hPP7wRfApJJ6sXuvD%2BkH0rVklU3GBOGovAxVXH1DBQlVgufHkfJRXtw9eJvGRLfNQMm5S1QOWn5N5wYroNd80NXudZbqYZwr9FX7xMtYpjkFQeNZxMfF8e3jBLIU4dtt4NLFd8n947qS7mtHHzQpsjCZA1%2BppUfBxH10uzcLrnWJ6KyMQZ9F4GVsVNFAL%2BC4ZTd15CkyrO%2BDTvd0pO1nuHYJUeSORXQ64JHU%2B8oStC5bqvkNQAE1Zsc0DvblpXeuX7ZaKtgBQBdJKeW0MOqbQmQwtAqqR712wywVv1XSY4HPyrqH2R5ZsZO21jU5o6vAkWpqcz3toZa0zOUK87%2FpG3Vz7uqvt6mvFAPsGuDIOZgkpmAvF39wEg6Lrh74jtlrKCC3phCbfny4BnJBYh3VERttO%2FjbwMd83aExUxZk%2B87Y4AF%2BiIL%2Bka%2F6aRsxP0vEfzFQu1GWcGPs0zCN%2FtLJBjqkATVKxHgTRFMUWb0qQvM4Af4gYExKr2HumqfcZ8pr2dk3GkVzMEw86UHERaLe0Is%2BXFzibc1JmHUMf5e7lm0Nrkj6VVHVSJFRb0YIdGeQ4cqzFrME3gVg9e82%2BB0eLVuP4BHF2e1zCpHPhHSK6aN0nnPGoJT%2Fyq%2FUq3qsCSZUOBOf50%2FQxWHZDI5%2ByEQ1fFONmLzS2E%2Bx%2BGanATJddOOf147TxlOk&X-Amz-Signature=345ab19692d1a97d287bd084a33e0aa411fd771e5b3de2f9b1fd428a547eee8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

