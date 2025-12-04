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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666FVXTY5T%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T163408Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDomYJfv8nsHaUh0LHV%2F8D6tW2LkQJg77Fazwwvpfb1swIgJZ%2FsHDNLL1JIc11Z3shdMZndQ6T5XWVnQnEAyYaKFD4q%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDL%2B58duMSJQfPCe08yrcA8KTdmob%2BLMqvKC5464E8YCfGPeMqqxrjZHTqSvWx9GpSrH3V9uaiBh8vlroLVTtP5EU%2BFZ%2FXq7j3NM9ImWjp9G69Vx6T%2FjfPndKRwVjTWJ5IwUbKbxAlDGGCwwH2zVfSYY7K7gZJx10C86CEJGuMucQStD1SqmOMZelWXQX0%2Bs3gfpQwvsfWi0Pepax9J%2BUTf0SjerHSO3te9VIkQ4qqNSgOEgFGSY1pizmekP0RSwL5n5YSVLWNA8m1V8Jk%2BkoCHtaBM%2F6yTetx0EzVIv7MfZNguMCrH%2BtCroLOXQFTDX1ybwbWEH35wCLLqHikqtjIyR1afgKF%2BncVK2zR%2B5IGADB9HaDJJ1jKi7MBGsK4Kqu%2FQDR45fEv4p3s25YOBY%2FFtjQni1OD9ZfoyhSRC3mAOltzFgLP84Ng%2FiiLZLfaWugxaHjoqAN3URJk%2B637Rf%2F9eYnCLE5IFNSnvR5zivyJD%2BercUAFUFKHghC2NLqOr4mNbtQWXwotV7k3DsJCSXXIcmEEIH8c9PeCYyVxNx4XCidXj4D%2BV5yVUN%2FgGGrhuXULwh%2Bdm9Pcv0gAOJ6srquMwQk1Pwi0xz%2FajwpIVopOClb34l8UzZwAdhzpaxrr2sgdsRsQk4POHN99pa3MM3cxskGOqUB3xaLQIHH3NgV4Xfw6bFNuWo9mN8aqiAiOfkf8jqpjrpotRLTczm8%2FRCLPYyZqPKBnObRiDyhBc3axZTFBtimakd%2FCwxdWsiAG6dV3%2FZ%2BSd3LRFdQGcGKNMVvt6Xro7MaV%2FGRJ0AefGMVGOjijPpkbc9oIU9SmMGyVNH21q9lwkWQgPgc9vXfUQke2hOy3ci73zt8riQ4y0j%2B4IRAJLlC42%2BuTkOK&X-Amz-Signature=e5eb6ed8eb13a935777e5e7377051b27dd15543eec0d21eafb734f64ecc6ec19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

