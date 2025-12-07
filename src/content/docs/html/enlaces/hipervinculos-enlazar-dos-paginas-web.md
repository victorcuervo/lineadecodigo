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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666Q6WC6JU%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T132504Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmRiCsGH6O7oAbgh6besJxALlZniKE9%2BhZtQIWy4NRdQIhANGFC0CmGW4l5qk5Qk2iW2jYtv8rojbFc4gfNSjtCDK4KogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz9E2h15IF6aNCeYXIq3APiHPr9CnJW4RKdjHl9I6iCcdykcYmR7uusNXdCI8ep5L126UUKdD4wMSBUXoqJ3dSHXwZm0zzrQ1TpPIwONbD75223mBm4211JyyaEDPyi5vOcKY2zpRKdZKlUIDj4SHI%2FGU7xytMiGzxGDLE8iCI3Ga3QyTBsnXliYFt75kYJePOA%2FKyYLIo8Pg1ruJhHM5kGkY25KLUEJNzJT96Tp%2BK7%2BwWyitDRTiWCkkyzDOlvH12faWsxvkdE14XFwKtyXVybufp90ZU%2FlstrBHTsf0qwBoWARjHiO0yBNUkIfCdvPKAILWEmU0X76XR2%2Fs4elaUak6UcOn0jirqsQoj%2BCmQoeRRv8%2Byv8aeCtL1f9dOID68W1f6zS%2Bi4XlbvoB7hFLIc15OpLazlFQJQXBkIityVNl6NYdfa8oIp1xO4Ulncz%2B5tIlLRPyToYrl%2BTpoCYQw9IN9POQKxooMuZbf2ZWWeJLJ5r%2BvcKxiOoIIpm7IpfMc1wHkxTkcsJPUSyGQ4fbonazZSXFeIaK%2FMM5PYsJ54cxmXeeBb8xGAz%2Bwab%2BCLzhMrY11quyQdUbimLj3h7fRz%2FuILZM3z%2Bd1KY15kN6ZFXMxEpl44pNhe9HEXJE7xdJggr0yr%2BB3%2FotqcuzDNmtXJBjqkAXZw23t8dJncZOSTFnHJs8JGxde272AZMoMzv12o7FIzoGPH1%2F2ZuJuaa9Cxz8zf5dUSqP4GeHjLkUIOGzjTmTzZ3pw%2FIqHBimKhXTIXcNnEMt8x7vFtt%2BG11%2F3rSDU1W8fLHe8rbEG8AG1O6E4EsJDmZSvFKaIJQvLWK7Uxg5xAFWEcmqLgfvljVy7E4Hxw98%2FdEFlDvpUJq52kYy7HgFsA6hAb&X-Amz-Signature=60d276aab3efcbecd90bbecfd2e9717da2e71b34af29d6cd1a2e19b5f31fa37b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

