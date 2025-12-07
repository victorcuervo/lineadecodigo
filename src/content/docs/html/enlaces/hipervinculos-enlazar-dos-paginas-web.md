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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WLXDZYLQ%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T205751Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEM3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDy1Ric27n7fe9QjyOlMwHyFrPd0sJA7%2F8qEYznFWP1vwIgOF2Qk1KqrxXm0YzmG0zrElV5dMQHs9Sbf3sz1wjDlTUqiAQIlv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJS2XPC0vOiO6cz1cSrcA5zDVzjzbQkJBZBITxHvTHVbAaGpNSEQfMf01bbxd%2BaGGrj3xohvvzDiPCeU7dnKzFxAsuhHC5WzkED%2BhzTgMC0Abqjh9LvMvDjDSyrwDLC%2Fsk10MLo5HDbIesvNgCC7LFdCQgZaAHhcv8JmvUZzBUzqfk9MH72zjzo5A%2FXT2uMGV027guJZT7mtOaVO%2BiHl4fjjvhEsjEz5rMn8e5%2BEj3DmZs6vpNQUyBZiz03AuQ4ZKzGcKsAVrgduor03NgziVPV62SLhI8bHxAya3kRqsFH91kS4u1cNC%2FT2nY%2BRjbLgHPySc4Zdm%2F4CEj5OsEfdtyCwvxX6iWxKdnFVDGi%2BQk8VcZKEWRV4u3UmQPRQQ02YpgbgIl4c8EyxTLAmlxUB9IQLH%2F6uaw%2BTcujjM0BunMoEYGGnQHnWpIEM17Z5K0FyFQOkdJcLK%2FXWe3MmHW8udT6mipJPNgOgSlQpWe4CWW9hyKldoo1kRL9Kx1EV8yl31%2BMuA20WN9nRvZg88BeN163jPAYZaV1oJTVFVaXB3dGydX%2BIWBao52D9Hj0fhXYQyBn7t13DLvhNweWqaYNAo3a%2FWqqYvaSR1N4hmpQm2uDEylTnUZbAess%2BeExVPUfvzjpKfQocqnOV4amRMPvG18kGOqUBdPVrvvFWGrFjyiDNSVF1eaqHOgFtPh5YNsvRtaOpRVxkUbvyZSHH37nycKDAxSpTDWD1iTWvUov2V3dwmVW95lsOB1gWeAEwG4hR%2BAAILgLPc%2F1RKDhECeHHjApdgZawmWv1X387VU1oHB4fwqmlVSTZ2VbEume3cLVkW0DiTyn9ujz67Fa2O8OaBkig9KqcwN5Tvq7PZhmDUwgx83pKjFQnVnCQ&X-Amz-Signature=9b1f238ca04ab7ee13ce3f6eab2e16f9780ce73fb5a795c8687dd58b8049e79e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

