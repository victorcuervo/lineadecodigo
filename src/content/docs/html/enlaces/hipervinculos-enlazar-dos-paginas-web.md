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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XQNCFX67%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T035224Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4EValr%2BqiBE31mCE3sofPzc15L6YQlgK0cFD12LHuswIhAIvtcBaOSA3Mq59f9K1e1CmAf9bNJYo9RY35SseYbhVjKogECLX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgySzqXcP4g%2FqqL95MAq3AMJde3FQIuTqnkeGBSlsfNm9DNVtxORnrwdRILl%2F2tUhZmj6X7fUuXED%2Bkq6hiLcltlxRUKkM%2BCgtvTsaNf%2Bsx1vEmPKVVmWH4wsgQ5xkAUyiTF9Wt22IVjyhs3nktFiT0UJxeF7Za%2FPRz2P%2FqneCE%2FAC%2Fw%2BRSQgBW84coMIuOcU71M9WXxQ3LkdHZchd7CTEwufeegv5FR3l8WSHFl4uZkHbhUC0qOiv8QBBt0ylSUMkrEp24UdX%2BzTw1c3p%2Fu3h2GziWSI%2FXlldWYwNH222d51pBNbR4QFr0qi6gWpFLhB4EzhBKxwKWdTlOBtaB4NnHrw632pTPRLoeibeHeWmNN1QYfYOoO8%2BGWXj4FwSMnJfBq7zVN1ZnDNtMXxZiErQRCn1%2BuQ5ffY%2Bay2%2BCxa3EWo8kKbjpAQakd9wfPqAmyEux8x87eIxIdhfqUL2pVX2P5%2FrN25frUf4q2wx9Hmbm2%2FE6HQKKc3RIciNzLsRb4Cdk4iE%2FM9PO4noLhACoLgbWO50k6b0Fxpdah4EDmiAZIFHvHmNQENrVejf4oOEAEah3lCE0Xjo0Rvu34zZUffUZArQBYGxHykZQkWXSDPF4S7hrP4D9PSE%2FzmfMn8bdwCcCBFJONgf57NucnpzD7rd7JBjqkAdwSIs8CxzeI4pbebyfrbpIIVqkx1o3c4uU8AIPFkKYpfkXl8F6w%2FvD6CAuG1cO3RAqO%2BTF72rr1kMAqTHXkJwHBlD2VNEhm9KKY07otClcvEtqYnFak%2B0jgMt4QYaXAvaII%2BsczfebxE%2BHF6Ca8IJmlxkLtARgxdF9LxWJp%2FX0j9R3LEGCoKyKeE%2F6hoXVTwBBpuB6qWEufoAvzA6N5GzlEdH17&X-Amz-Signature=f29e7537382e78f754da670db99db7c380e7cfa095d0947b285e97513deec8a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

