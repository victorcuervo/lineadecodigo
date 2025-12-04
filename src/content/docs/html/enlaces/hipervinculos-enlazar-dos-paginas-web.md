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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XC5WJDGO%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T032844Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHMaCXVzLXdlc3QtMiJIMEYCIQDeEXzgiEPz1qoTum98Mw5G6RtrsNzsflXYMXIRd%2FUItQIhAMxrUsw05%2BpVlQe7pUYYaPkAjc7iYdnfeWZs6v%2FlScZGKv8DCDwQABoMNjM3NDIzMTgzODA1IgyiTr9BkfJU2nSXTZ0q3ANegTFnyxkEZZDrD%2F%2F%2B5EsyNcnczy0pXSBsZ3tHtVIoINu8%2BQ%2BUruOV969ig0O1FqqVqGq4mjIpxVJzZ7DQu4ZADEPr7bLPp7ZD4pv5cpWSOu3%2FK%2FT0MElRmy1B2hRBeeCcSlAeMYIl5hIw1wM88NROQHXPEh%2FBhgDtY9ySV2elqWDZN2NCajIvY24x8F4qci0qz4yIAxMXhzhViV1TjLJD51IKUWhTsn0VO2DSjSCx4CvnQrBPuUlo8ld%2Fyh1wMRt%2FHU6tLKBJfZHD%2B3EV9cDA6e6yNze4%2Fg37XlijaVpfv%2Fl0WXV86Ewdp8Rn8j%2FSqHy8cE8IojN6rksL5i8QhxBUuHP66%2BegKn3RWrH83P%2Fn6aQ9n01JgRqOkovO7TGn%2BSGk9Y2eugxDEpW6tKcGSoj9UMtase%2FaPL4UZ4D0D09hsCe8Taf%2BQq8ouqg6ejg7Tq%2FAVskeapKs3y6xHLt7uPYMHwc1x2If5SXHAOzU9AeHDG0AU8BgP7YsxAZWCeEkDsasPHndXHZX1TLnHVRYa7QVsZN5Uh430dAg0XCegSudiGsKjBO3j5Vqt01CqKNwy%2F5UQnFJgrumh0cfHXcwLRWLKfR2cwMjthYXVWW4YECkDRN2JpdARXsThPr1MzDk8sPJBjqkAUhQ%2FC4H3fx2IUNZubEPAUWWnZUUk5BgTE1FFqYyaANya8vWPjachsqLjZVyrPYJPAVAQZ0yyO5HmqOHMyc4GuU2%2FxFQZGOBnXmIUlOD4bSctXg6hY5ffdPAsUA2mg6Xkj9ElUkiMIDD0BDaDjwr59xXEU9tb9SL3VDfHiCQXzdjVjUPnnMroKlTDpWVt8KeuJ6F0ceuOvfcad57mkZS9%2Bhhqa6a&X-Amz-Signature=ff3f1e29bb7c217f85fd5787745f88135e84acbe4a8c4e41c7965bacbd0d5d25&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

