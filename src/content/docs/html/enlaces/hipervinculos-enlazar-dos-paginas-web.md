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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XDITWABO%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T085904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAdHgQzoU9OhjmoH4uq%2BPTT2fcVwam2spz9xkq5DXtKsAiEAklaMJpOsXsN4HtLyCdYZ8irUGbqQrBK6wq0y8C85cG4qiAQIoP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDOG2AmRY3fiHdhqO1CrcAxOSEe13iRUGEb0S8eGWOzdg1Oqh1R%2BXzSpL5bXywtG%2FYNB%2BPs%2FWhtiCW9DksfGkW40%2B61v305GcxMX%2BHiiWRNjalCbNVgvNQ1NYqzgY85t2wDURYCzOqGY8OXRXpHhd80ZvbJaDbY3sB%2BvsFUNf%2BmQMXG7laSqTvForyqKl873TCoW9eNdOaKEA9mDPEOodvooJ6MCBzW%2BhZ485tKYcSY9FfromVc%2Bjv6N1uOpJEmwwmNSb5mOPaFiHat1gI4RcNbjLvA%2Bk9FbiHlyt0u%2F5hCQsBrlAwrltZqIOsP%2BCHELjF2WEA3BVlFuT%2FnmYdB6TkHkYjxy6lQ5naDd5ZZvSV1%2BkVaeCJACEG%2F1f2Svxo6R3g7pzmtmvm8p1A9iRhKi0Qknogcohm0oem81R6NDxInJKVqsmE3aBZqO8uqscEQTDkBf2jELsLvq%2FvvXNvBUw30lyqfjN2uV%2BNWz9nNcYAyPMpufkGN1vvxvqNsuOaqp%2BofAblmmeYZmeWbT4lwSIhZcQT9TKtW5aBv%2FksC2VxfL%2FCs87duMxxOU1CR61z4rqIjVZmJ79VvWwjVFtyBJFJQhSKRKe93dGuzW%2FljBhWHubTb992FrMnJbHyCMe3xYW4Fh4H06fAqxpLVmcMI%2Fu2ckGOqUBSHG2l2UDcrY%2BHpRWZZgGK0KYoS3A3JPfVmEvV91O9IlLppb3tHYTCOy082PVfaL4V1tPKMuyWVGOwO7n3GwtPi%2BpKJ48gMiIDAQS%2BhjdZPP0%2Fpg1yg%2B%2FwOPcKHkONENCcN14ljC3eOfivsVg6ZTx%2FYyn5YSpIuTnBP%2FaxLBbKkXyIDMVjmZE64Ki6UgE6UZDQ75ax9QGfxHnFpe%2FT8Vnds%2BaBfvH&X-Amz-Signature=e2250355b5ca2e0597bce97d792eedc1b79293d063ad02bc04c9e35206ff1cfc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

