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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WNCF34IG%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T025617Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0gmHk8UrBHZiE7zMPU3ZOHOTeEfBzbo5%2FAR4ccAf%2BqwIhAJth4K9bkgl4K0Sx4kvgoRfuvsRGMup6cmKx2C9Il8p8KogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igyy57sQAUnZVFF83Wcq3ANVvwZxaSQwuyHv6dbyg0L13TFbt7ii%2FdG9iaHIyOAy5ngmyGmb5Qs89mi%2Fjv8cAxk9%2BdMWWBOtZ4n%2FhVC7MQGJ9Hq%2FDXw0%2F9m0ZldT7rLdNCNdgz1XjAAIM71%2FS4A1rcn11lQDPcnuR7NX2LcHcttrpaOvWFVvT8JMQe2QGZKBSjndgUBoNZXMOtRqtN50M9ihFoYiaVwr%2BZAPboF%2B%2Fq5xKZUwZyoIk0Ajgoid46obYgHNgfN%2BVVUGBiFCqkpHGttKTMjic2hYaYT5RAeNx9HSnMhXbIB24jyIkHGoz%2BZDyJw4E6nm%2F%2Bl2FPGsqZkopNg%2BR629%2B21b1NHnMu8k%2F7oXFB5rKam64D9Je2wPzyScPnFpuERV2%2FY4GtC%2FgM5s4GICm7xI%2FF1HfKRf%2FRiaitDOEbvOvS3kVMpVrHX3H8xig%2FWj6Oco8n5kRIw5mtzzsBnoc8MhzXAUp1zKuApPY5OXXEVdOIJSKhBuhyai5icBa2qEexamlw2xKBhHtGEvvl6oaXXDNZY4TR8JjXKt1EvmZIeKrapIfr2NsGMWBW1vy82GUY0cIj06HrTvJOwuLY7tNEo6THpfBiG9XK5Hm9xqMYO8CgPA8lMGkjCTBci3tah%2FjveQ8AWLNgaLVzCN%2FtLJBjqkAQWyvDeJT9HQfiZdMsRQJ9JQ%2F%2FObcSnT05QikXKdOIs29tq79HdcAf0zb1GMmXuZtEsYKTc5d1jcFueCvWXCzdCQRicysc5nv%2Bk8uNfwR2T5u7q0W1LGRcVpaNBUPCOqiKyq6Cc5RP%2F%2BwTAwTWdOoI1NKwVl94V8G%2FwnqM1IIVqKwMNhUudv3T8IElQXALY98IdrcOoiW0VlzJk7zamvKzc6jqjY&X-Amz-Signature=4f62819c0c9b42e45d4a767814c6fca19844d891de94da2d7e449916179081e4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

