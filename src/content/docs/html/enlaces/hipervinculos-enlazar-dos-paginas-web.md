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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S2PHFOK3%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T010725Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICV6PeY%2BDaQMKfhl8UnVqsivg5DezpKoSVqam9ZR4jAJAiAEwVUVZ8Qjm9aVS3bUiaQI4Q%2Bj%2F1DKxlQ%2BwfeDRwztDyqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMbeK7q8OAdqy%2BPx0kKtwDcCkr%2FtM1BykfoQVmT9F2zZe05%2FPsPMwOsKG87EKTh8I6D7PsNDswH4jZKExLVEnHh%2F%2BX6zqcOp0r4RaJ%2BygBZgygcMrB%2Fikd%2Br6%2B1DmfKe0aEI3E83TU%2FZ3f62nHyrUi4nkqiAzoly2N1JVVRobNpojYppR56Azg%2B%2FpzaGpNQ5%2Bdi3ldai0dT5A6LLHdT%2Bdogs1F7SHDFA8UOIe0RAivU8UkTbnHUH%2B5yLkeov5Sv%2FXxOV3K3dcNFFvMW9%2Bx4qyZLtdn%2F4ma02LKsbXwGKrhNcUccyTrv0BXqWVZkn3snPIqBllwBjsAdsTci8Dvj3B3aQOeMKqF3%2FKjWXRuateOiIMcA3sdPYfTqlAmbjZyGV0quVqpFDMWoXxWuqwbxHgu%2FsFXtC%2BmMbr6qbuubpYGflOOAvautNiVlR9ORxp8I%2FTWuSG2UIqD1PbnWz0R8dlvLJbgcL3iRfo4roPq%2BekSXVnJbieMNKm2cC9tKdC5v8MfOVUg75zKxioBhyZXxwhAeIJKaogI82lHZRsn5N6SCtdDdmzAIvBRforeLRg%2BW%2Fe3Km0YQ9R8KVgj5guxMxfV%2B8CcK4wJLoLs6Vdv6MJPNqGU3h04dS7WGtkC0A3xj8AXWV3DmqeJ7NjHtTMw2P3SyQY6pgGSNnkGVwlKJ3A2PygdgmMoGAhqyyvdW3b40Mmsn0ZGg2YnqPPdiwKufeBCVO8i7aRI7c5Bm5OzmTAREl%2BnwjA9cUVacjDUmrhxmUOk05qqdvEMP39NU6076SC3w0zX%2Baf4bXADXIxCQbpEyS1vLIHw1gSXijq4KsIf7LVfV9VltU0HiB7Z4rpVsuYyBkUbiunjm%2BMD8f1qUivYmVnnM67rNgJxeVCN&X-Amz-Signature=6c04076374983aa9215f23cd27b9f36fc16929b747aeace8058494a73810d6dc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

