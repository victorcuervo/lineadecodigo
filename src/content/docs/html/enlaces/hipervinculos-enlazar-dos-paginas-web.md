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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VOWMCNRH%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T155846Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICymmFvJAQHhkzFvuC%2Bc0uaMuc%2FejSGHePS8cb4DQP8oAiEApDUyjOYnhIuqu0%2FSQ0o0bJoKHYGX2%2FImP5FdCGDcpT8qiAQIqf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDGnaXTZALO2uUJ4gnCrcA1BlK62A3F7XCf%2Bf0OV40d%2B9od%2BW9VVwxm5AI7CmgML2FMiJX8dTIvvqrQ0RLNbj6CCskgqc3qp7pIyBR0HjyjXfvj81wAt52muPBxuvD7S3dyFhbUToLVjutczL9Id08fSDU%2F72wdSnXFJEN%2B3CEo9xnpJ7v4ggSZ51hW5kM5l71xKnSxGM2fmcNBQ3FlomYE0trxlUeglvnBfWUxJJwRqzv0RyQL4GmQCXelpto%2BMYwgwdJOVcbEvYCC3a%2FRhO06yczIBQPEmt%2FmhHcrgVdtXpV7vMUgcsRVqAyPcvJjkDPNKHLGS765Kht1brDCI8QNERYE%2B2n%2BQy5h%2BRhm0eczpSV3V30ylHB1s4hj239bUrkSOHzsq25TbWbu6LerPVcc3o1P2ujDBQpUvVlGUtaJineVy1EHwSYiJCGLSwH6PxCn9jdlU5wyc2UsE41xn%2F%2BhNOGsbSObdO07MAKp75u0YzG3RKyg39FtfslDBcqp3Vq%2BV4f%2BN8YaMzkexim%2F6nz7xnmDytcQFW%2BOdQkczO%2BfMljWqTfntx8NbQtnm3702myaTdwYoypf%2FHnAlbI%2FdOXOyZIsyvnOSFQXlx0jF7wo1HStRi7or7whupmqqAMU%2BxYuIqbvsUsNrRdn5GMLzl28kGOqUBZ6WoS%2BKhYP2T2GTqfIFtyGoWXXQlPTi9Ou0atHB9jrZt9YoAbxs%2Bjnn2G4E0RoIhvXvQLeW1cydta2EA4XnOjqlXak0THfIPBP5kcptPqmGt7IUuLlpSIymc5BrwTAL3s8RkhbJJeDtNlreTUvrzimGDx2XSLtYY3idUzY8GMFbjdXavDkcTg2XsRDSAkuMe2t1%2BAXdDoPduH1I21zCwpOnxNHnD&X-Amz-Signature=afdfbc273b5b28b5911edf41100b0b20bef5cc1de32f11af952a7d256c43c447&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

