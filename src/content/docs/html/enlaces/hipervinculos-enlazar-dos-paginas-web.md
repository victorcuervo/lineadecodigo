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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466REXSA77N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T075525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA3jYIWlyDu6AxsA5OfQcj3H0%2F32i9kPru3ASaiV%2ByWWAiBasVt0STO34KA7Oq79%2BtxEhdtjIqQd5H%2FDK8VocfWLkCqIBAiH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMpTYI3fNp9xKrjihFKtwDJUGPCYLiyZPeQEYkJB8cmJTMmWV%2BafViJjbqEbZeVcVOuoVNbuRcH2AubAsM0%2B3UAnY%2Fj3ksdjPtFQCPmVMhpoTxc0OaMcwe8I8HhVj2xFnLVWMAFB6kEX7giFcjPR6EvtWLYhnwKwVTlV8e1aSIWbfSuiGh5Z9%2FLXNODPpuh0eEz%2BTb%2BVDUIrUEKJKh%2FC3TuQSNeDB2w%2FrSlrFMenuOogvu5kKZCyFWENryEpRZw6oML0A%2Bq6qUIktLURdwI%2BQRMw%2BVuH3NXK5raopVF%2Bs0%2BFu2GOmqvsvRVPK%2BrjEFEsDSmrwaYLN1z1pFmta8T1JyLK9x1ln7RxUPIWWG2wiDAJTdF00K7ubdJKq7VeFmdWLP1RxV%2BRgv55tObirIuW07tSth0K1liUWMRh0L6xehFzUS3id2%2BbTigMhISrBmV3BfJsGED5jx882srrj3kHTo%2BgbsD7S3p0PNSlQ9TYMkT1by4qBYPZ8%2BCRPqJDZpaEZbUJ%2FhN7FwtU1EW4PvraKGqIenjNZcfVSOF1Hibszuids%2FxbP8eMAfPPIhnoAchBlJo5fnrCAAEk6FLjT8864NsUrr1%2FLO1wFc%2F0qUKoxzYFaZri4h91v91OcG5HxDSdKEDe1PmSag4g676TcwrqDUyQY6pgG899zW3ybgDaOFIgK83lgorbD0a4Yye8MlEi2IMGKg%2FOebNa7DZC2lIDwfn9u2%2Ff8XZYw9GzXcfjUdqNRssJMGwS9IUBzwEA5eBuxbUNuiPaepK%2B7gj1P4I408NbV9erpes2tww1qhDC25qQ%2BSD%2BYkMVl44Pz3G0hjm%2F5LcvW1aIDNSfk5uZiuuT8MB%2FABiz%2BSz0KYy%2Fdc90NyLgSHGX7rR3ieLLaB&X-Amz-Signature=14edbc6696e4661e85b2f6720a3c432921feba3a188d35d0be59ecd69b599b79&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

