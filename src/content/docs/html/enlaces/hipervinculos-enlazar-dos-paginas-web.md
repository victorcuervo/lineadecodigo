---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662PQSZJ4V%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T200650Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC7taqQUxXdZyK7Vvv8zVPeTPjAxQI1ZaCJUj1QP%2F4DfAIgcUv1Mb3Sm7%2Fu9Io1fwLIJFFRTFwKGVx8sg3fofgIgmYqiAQIxf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDLmPaSob0xXByg8KuyrcA9NWeA7RL7GoUNQuYgWvlYBPEEguu4knQTZQVY91MS75VvSSYcqWoZZs34h6uWr97ZJrGcUftDIzcK0ts9z7tFeRbjjeaov0kLx%2B85rQSpBfy8d6aKYjZik6HM%2F%2F5uETM5gfEu5goqRuy9VmgpB5zyIGj6pKp3DBTGO%2B%2BM7RwuksazTwy6ezzzgzNBdEXxdCBlip%2BYw9Xldu5emTneIo9kh2HMhft8a89BGoj2AyszLm4HFAStHLZSFXaRC3s2qTnTV0HuONSnmmflye9jRUh5hk2piezao%2B9O8LXMN24cuMcB7Rm7Wew2eSthk48wr7uPp5B7HE8TNQMEEDH%2FM0QVj7vNBlkfnVJPV1F%2B7G3%2B4clXc4kSJ%2FHcXmULJvhloX9sqJpJktWwbzZcfh7jxkmfkCLGUx1%2Bo5h5Mtyk%2FYGQv8XeKW1pt%2F6a%2F5PkccG%2FljBGTcB0L2SiKS6G%2FNbtypoJIING6v3uYw2NzRGLcTyBixNz359Ilz3AvkeJjEiq4W1FaGH1JTvDZMp1MTlAMBKdOFiFn4Rwofsg4kNeBJT%2FElsBl%2BBQFKcpbpzSpQx4CSVyFbREdelzt7oYnd8kbWuI1fOPNBcXAlFmzzqZUvhwohzwTS8dha5Owb%2BIykMKP%2B4ckGOqUBZf81k1apAhINxPUSN3srgnO1WKdD4PIHUQUETM62ZhTUdi8O9VFWZa7pxCchyLabg2np4VsRELbT1UJAO2iXwbYkRnmwnpxA1dQvCw8Fdey08eoANIFaqMbtPXfyzscv6n%2BKUiVKP2KM8vazESTuTxt6P5SgRDWcV4fBVUUke0rGoiEZbuALY5CKfeVzdua2vFGQuavgkstO9xgJ2%2BUJAH1FxoN7&X-Amz-Signature=1811ab062a56458f7f0e46bee8a8bf23d90ef578d156e5c84e0e83819c840ebc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

