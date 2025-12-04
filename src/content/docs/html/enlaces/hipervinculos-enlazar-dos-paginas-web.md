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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VUB3ZNUJ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T145953Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEH8aCXVzLXdlc3QtMiJIMEYCIQC17uonxezN%2BhV0vRMBgaG0ToOhxGXzUPq03IYykpcH6AIhAI75pOcpya1r%2BKE4sYcmeXUFTpyBiXbaPrEozLEnpkUuKv8DCEgQABoMNjM3NDIzMTgzODA1Igz%2B%2F4wjanXvgT3L8esq3APTzO%2B8vBxwHKfMF6vIJP8Wa7KCvDH5l4pWG2WFRetV1w%2BR4OqUukNtjYCBpu1LAzRc1TsBZuq%2FvCO8EtAi74JpYYTzgzFcgv3rgEu2U%2FR1keGHJLX10SNu1ZLHs4qTifqIdFDD%2B4J%2B5kYNdGMyHg%2FkRTbr%2B0j%2FGEj3WDMoyC5VhjugS0vuEGpnPpjIfLnzB2WdQdnSDjRy9TfgymnnUArNp%2FbtI2QHBVyTXe8nAiiWkQjxRJWuqV9tXiKT73cXpz7J39z8WaokTn9%2BZwse6x0xmQKCqjqjHsbWcgohpz0%2FPTRV5beUamI1ESQX04aZn4LxYqcinQibbzDjZGLjzjoLeHN87IKuRmBdGVJfizQfJuRFW7PkuGNV4B4bkJEH%2BKgwyovpTOnpzfaa%2FOpX0gcZkyWybOu58zFDNz427IHeI%2FdYlCFnBxfMQTsquDs5gZcf79PZE82%2B7r5VDTfnIb5%2FBGINkqitplxl9OljL9FnV2QH6PBjMU9zqqYVNqwLjAE1XiG89fotxsFrpmEs1rO6bLZNqnSYSg6ajNEldp8hM%2FGDP3DHwoOFPGzpghDdl0HrkdRlHnB07nDJwLYkBp4Ksts3VO%2B%2FBdGTeFtyvTiyJLAaQYpeHmY3M5x1qTD3vsbJBjqkAXfvrDUmf3uf5BEKHfPlxOdjRXDFRn%2FPUyqBNS%2Fb%2ByLBFBhOu%2F0OIwNHsZmVE9PAVjnNsBj2Y66L5arL7mtpdxVUxzArRqmhysiaTO7roQ7E3C0oppJ3ciFKc6fagvBbBNj8l%2BTdkUwn9%2FyBf3hY%2FGnv8KUOYILPgVXliRUDDDzQqZZ%2FJquOxQiWKNBJ%2FUmgYbmcf6yATazDzuYcAxl2ffdNyVRm&X-Amz-Signature=0172702b5e4bb360f11f7bfe5cfa330ee24c4959f2574e0ad531707ab30d7eae&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

