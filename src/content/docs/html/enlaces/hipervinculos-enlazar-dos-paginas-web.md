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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466X6UYN7IM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T102230Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyqEzCdIhjXophwdh9bQG5%2F0zmvK1A5oMgnrsR%2Fw1pdgIhAKTmErK5J1qtDQFEaQBoxK1VXbDOiW4P3IF9D2UMrnu5Kv8DCHIQABoMNjM3NDIzMTgzODA1IgyMNFkStLStVKvZ%2F%2F4q3APNcumWUPCiaFkvvNM5VOGal9HTnDUWnMqZo%2BA5MgQobAq8hhNWpaobJHTaxJPvoIXIphsxSnqdjWo43PTytwiTv6IgKSKqZwkXjdEYYleP74bhVdtZXWmx3hOq%2Bv442Flax%2Bya7lDGjKI4kZbmgfS6Fsns0g%2BYBiUc6%2F8hKPZvtL4KIetMrdUPeUNX%2FBkJOYgUQLS4XYrOehRI5zja6BjJvOaUEAVRirjBFRbdEDEwn356N2ycqwasgSmavbCjmHLPCqE9OHna%2FkI8eX37sYHZ4gjnNUj8sG2X1yigNDWqzsiQuG5ktme%2BmEOgefJKPqARzziyRvaATk6ZQYR4bTVjpbaLYkD9wWzyj7UzIJ67tY4amvl4g8EqOr1bKAodhh58lmqMGOsZ2paTCi7eCSuAIoy3ycVZyLm8xYAao1QIKTt3DIAgQ%2FOV18D8Mbcyi0RznNp8Nd4OoDYDaQjgknBZc0GeBKFmT%2BZMRqyrKV3pfn7oAy%2BIzMdTpYb%2BzD2oNQJ7nVTCaLmQjXVYx0wH7uSpOxcHhPZehs0kAuOyp6J%2F3RMIsk2%2FRtDAEseqVuqZ4cUvMiOAGwgSbQKVg0iNxOEnj%2FrXmcTzETNtSeEJB8bWsvoC7l%2FdhxITbSZZJDDT68%2FJBjqkAcTh5VebbtuTLcSDmALgHjwWcE%2FdxFvGhSZNOzgdASqThp1ZcKhCcEJgILUvSFtdLSavMe3Zczv9S0RdPVS46QShOxX%2BwmYnBXGs%2F%2BWukRTe37IITUqb73gNPI5l%2Bh8Lql109DohsU3AqMa5Ks6VoHb4vFmCqx9Exk1lzTL5W4F%2FxFf6u8SMrWREafvFoCa1F0xDzmmUVmVhNItt6z5StkQmE3%2Bk&X-Amz-Signature=38938ca8c95d2ba6ad859bb492d8755b5cc1b356f9f229388414359af27fba83&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

