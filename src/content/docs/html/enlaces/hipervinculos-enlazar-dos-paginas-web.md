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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663QM5AKY4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T065839Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFzupswW7MxFBd4FRoo7g5niZ8SE%2B7NkBiZ1FUeSMIllAiEAm6wDxUYWqvajdh%2BX0SdUj%2BHZvhPcJIjd%2BHGEUTzz1rQqiAQIn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDK7%2FQWbKWCFQ2eeqkSrcAykItWe7V4EK4aAwr2nQGjQuDe1cP3rPeqCcZop5dr0BOaCFd4AaW0niqOJFB8NRQbi4xkuKAj3lax%2BnxJKJ14GbT1kHOTVwt%2Fp8I0Ati3WDEmdxhoN2%2FlvQOb1i3YrruAaB0%2FkzHebmX63aBavDgWDld%2FaEQPokuJQzLkG2ASN39b20qmYcv%2B%2BQGz0JAc9FbQu4Uscyn6RkmW30%2BfgAvjFOE2dso0ZoZif8KSvmCDytg%2Fhp6M4NYUglIj1%2BIIWcFIxCrD%2FJ43zjSQ8z3jtM8Z4W3Rw0i%2FnjGL0xsAu4S%2B0YXERUroVVWSxjte1iIWgr%2BAMrbx%2F3w0%2FqhOxDEwk7KuiCcWySKq8fxV84dpC7uhp8o2c5lBRB32tCI%2BxQG15ZwjyNrq1QX%2BtKbYNiLyJLN9PChIRjBceoZAuYJ54ny%2FZDK%2BuWYTs3EnRkhaEpyi69rcvTPdGBM9T7h9LONRnIQ%2B%2BnJDk2M3bYhDNc5RtZV3ImlU%2Bojky9s2FSWx%2FpV3u5NLHB3T7V4JJJ%2FV%2BewB%2ByH7m1COksmQukUseONeIpWiTX2nLSPzulL7%2FW76w1RAZSoHB8TDStSpKL5N1621%2B5xWXvA6M5nZiXfGgOxJWeB3J1YcXqIT8cvXGqwpRVMKbQ2ckGOqUBbqUlF3msyKKM8l9n8S93JmtWRmALlA%2FfTDhs%2FVcjcCa8LjLYqXtYCU3fb3Hf4w9GVjstO1IzX7HSj7AM%2Fk4y%2FM9sa%2BCcXWSu1SeAKioDQ5ebDH1BUrGX9AoBgEk6YOHWYkBBTflTq1ZXP3ihrnJoE4%2BrvpuXfKxJhXdwXFxgQk1nyS%2FidiaiXKbGy9TMdJcWqdqZqA92JIVXiQ3VFKkHmJ3faL77&X-Amz-Signature=b00532e97b255536e8366699ac5184f8a8d19f084e4042a232ea766ec55430af&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

