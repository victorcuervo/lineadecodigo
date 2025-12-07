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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZUTKVHJR%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T194958Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEMz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCMtEtNNm8rykL0ma4gvx5yl7WZOuQfdKdPVjr%2BEHam4AIhAJsp1UNiBI%2FBSq%2FOysuhelj%2BDhc5iLTROyibxvTZmi%2FSKogECJT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzt1P%2Bssc9YNhhvRioq3AMZTJ3%2Be5L5wdCXowt3MzZ7luaSI8JsSEwneRbpOwHFVHwv8My20XanMRdGwa%2FE1os%2BEGDa5rLsX3z4hQcJLbI%2BJnMb%2BWs21CwV8lPHbZMOC1uAtE%2BvqTB8iv6LtrwYSqTUGsL5PW6xSKKDO5jm5h%2B5ehyX1k4mnS8cp1chiKOEy9PrsGf9qN2BHg8jZ33Q%2BMhDYBsfe5GYxpEi2zlx94u%2F2NRfBPHFgnAQM8H8xZgkdzWkdJSbL3NQ2Ob553Nh1Rdb2wi7VqucOnzwruj%2Fo75fiE8M9sNu0yvAXfsNSkHVF7C1Dpx8G1%2BFF2tElS6IJ4VXhV%2BEhr%2FZsa7pJryot794PJWG4XDb7BY196P1i%2BBN4PlAzdGRO9PkM0neB1dd3qLtdhKr0VvGXXiaM3hp7hbPEebC9FvmJL4vzN7GxdfviB25UGwCGpMaLqEJYJwYGHog%2F7wttBCgnujZmYQAfRkeWjJrCu0IqYRHRee2UkIelUhdAmh7u%2F1FPr%2F8sdnjv7rzERlHsu72jiDAGyeq9QF5BAF6mz9wgR6KhEuTWDuqUWwMA%2BeTEReHBs3bePBN0rAzcfk27f5jkuFyzwOa7MX4M97Sn%2FU9otvYV9U2Gl55pye02FMUfAlbER2PGjCEqNfJBjqkAVIC1goahL2hojriv5MPHlAIRV3fZV%2BM15UudypfjTs8WKObC6GxTNzvcuMgdanWLTsUZcVYmEDBTYInyUsJ5MCNueHo%2BidIQA8e9loU09iK1Zxh3tY%2BXyCdsNmfEidzvdpGAmWkaNpittymZYLzW36t0BAtyUyZFgLT4ujJzD6%2FQGkvFCVu%2BZYKlu5zlafCVPmtoEYuWleZZp7WMP37CkL4C1kM&X-Amz-Signature=e341addfd2394ec22c6a949d847b3df28a32158fb554d537900df816cafe1249&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

