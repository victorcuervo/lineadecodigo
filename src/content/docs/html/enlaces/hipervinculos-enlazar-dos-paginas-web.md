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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W7SCAPJM%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T192432Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCTEu%2B29ehQlpblDHAIHdnQBv3UMguzqfcukbtWuG%2BYagIhAI153G%2FSEkv9iMyW2Jhn88UiXUy7TuX%2FcIX9hUsnLX%2B4Kv8DCHoQABoMNjM3NDIzMTgzODA1IgxH6WSpa8w5LEyZmqMq3APeWVJ%2BJ1p5SxQbRvLiyWNj65%2BkhLbwbFsUHLIC2ueZIn5QP6Dt8Metshe4rTSkMYPTJCV3lkdRF4um3tsUP7rEiXzHNRH8NnshN9mjoN293pm%2FuiccdO5eq273CeOdjGMHtZXa1YOUbNodMoqKUqmqKt2T8rxwsWQfsazKSHe%2BKycPOoNBNXxfH0JRGO1%2BTNUu%2BGTvoo1pT691gkuBEEEUb8o%2F7PxP%2F6O1Y%2FWDiKWaRlcubcekvPG7gmlnPSHREeLY5%2FLTPOITQwSlZr0v80jXy5euPNdkrJZG4u%2Bnqu%2BSOnRieAMSiwYgnpsC46BGCO1KiP5f1u6YKdRZUCEX5F%2BQEPdrdqQ7bJwravv995svQS9z0dSqahEGurl3k7uwYIKCu%2B29T0brtMcAKvV93WoTyHv7J89d4X3j1OIY1VeorhlmkQEqQokxZzmXuKxrULgGKSOu6N4f2ncw2D2ByHHM%2B4eXchf7VX52S5DWGPDpI5X%2BD3U4n7WIeajeU0aqtKKe2eWmFdMxTLRoXBNZKtVMILxTRSDr1CrPcLw7c9ZkRfEKEIC8CJBUCnhxkWDPYW5mDOVarzJwEMShAmZtYjXChKkaqER9LfmFmyBe4wSzM2KBMoJVD6%2BDTjof3zDxzNHJBjqkAZdpOYHPqkZ%2BuFlOuSl7hERTbi752v6VXTCfYtA0yxPrGPfQomLQEnmgtcnjUvOrkJq3Ds1VIrRwhTsmpVXaAhGAMDTopZCBFYl5T3mutlRszrt%2FhUjjD%2BWyuK8krUEarR8xtKop90OXepouQZhB8ShJxPlh7hiBA3TCojvv5dWd1%2FwpD8KWbBzmV3jDM5YgeAuK8MLG394Be%2BBdCRrfnAcDhJh6&X-Amz-Signature=c544d8409d62fd27fbd60a9f2b80ae9d3fa15a1ad6e6ef838107223a3d251c4e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

