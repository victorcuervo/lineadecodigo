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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663UTDTXUA%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T143648Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICWDTiOOzFpjfLYaw36euThsQDU9sXotCa6Z160WXaTxAiASy4xtYCt6qgRG3%2FItMwLYF5gJtVydmLvT6ELU8ImY7yr%2FAwhbEAAaDDYzNzQyMzE4MzgwNSIMbmOT%2FA7iOWd5MFaaKtwDI7pZJLxMV3cpRRzLmGK4JNmKXKpzT4MIjHZc3Z0A49smeSl5nN7khlly7ZvDvLLkcJZQxRgUH9cE18CAqsDSwP%2B92i%2FecpVFcOEJ%2FIMNS8P%2Fp9tcYs4%2BpiJL9YN9vxowXb3GlH3Z38sTf3IMCQCqjO%2FQNgiFdKHJS2GZZ8jmARdL9zrmZjELpC%2B5uN8oKoFxIrbbnLfiL21dNBAaRre%2FhXVUJB8sd8QFFY%2FUOCwvpegbfY3PmOj0LMzeXQ8Z659nyqgye6PuqXbUfffbFd2stLN5BilquC7weoPL9azuaUVO6e6cHRWwBGl05S2YGX68XTZwfmowqtlEk%2F7RNvw%2Fm%2B9xPFGi3iZ0yVLPzDyW%2FeunMFj67C7gog9SCMAZT1g%2B6Ec37fk5AxStK1UPNV8ZoGmW05k4kwu30A9noZJmsC0LorapFxaRthU6lgMAtTfq1l8eki3Xrm78tyBX%2FYczZTwGqbyLelrItN2lMj2ZQsU6E59C2kpwEH%2Fg7qkiBQKetzYoLmzMdpUYc3ZJI%2FtDWKp1Axxz%2FayI%2BT9MEs2FfLASGt60hgiDHRk6pkZgZFQR8xmSoxyop0sNWHp1%2BD%2BOrm2yqS71cVkgf2FIdckQDSNV3ItIjs7%2BfuLM4zsw483KyQY6pgGG0GdYC3bSXIxqe7pgh9HVGZSWubE901l2wVL8A51gIMsHyMzNfpoxjuNIulYkcb6aoC2%2FHSSO4FK46Grl2NHEExR%2FIKhV3X9QkQWryXK1TWCF7UTFo8WFrwyoXsWxXBpy1sqUi0ytTaUrert1m%2BkkigyYy%2F5quQMsiJPUzH3YpzluE%2B3wreMskx9pi%2BgWI%2FvKt%2Bq6uUBBv4qhQhkUXL37jTsox9gz&X-Amz-Signature=cb3c3c84c075264306317942781bddf7e09449027149fb0aaebf1fc9782c5eb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

