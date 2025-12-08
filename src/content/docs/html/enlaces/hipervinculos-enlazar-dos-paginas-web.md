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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666UT2TLH6%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T150610Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEN%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDB%2Bo0KANRKA3hUoa%2FhUUfzVFTFn9JoCzDjhbW%2FYvsk7wIgENdDTBLlqIkMVTjIY3cEgeevI2pxxyf9b7iMr9IsuT4qiAQIqP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDPTeiBtGIxmh7hMGtCrcA6vSVvelBL%2FjnFjsjAWrz0kwY5cv%2FfL9Ot6cg8fVlsMZ9PA5S1QzdrYHHH5z5YXpATuezVZy5FdpqfQ3dj0cCShHRnvSkVBj92DV1DRvmtK%2BIYR4AJL%2FoqJ23DGIscKutwmJA0Apczh4EjfP%2FGkZSeJ64s1ih%2B%2B3ibFFpZAlkll5%2B4%2Fj4ogmbjvmSad97SRE9szNNwy6WxoKT4K9vo0SwoOQaDSkBgoKqQ0h0dnnTV0aANFXrTQTAHr%2Fqe3LUrjU5g4EsBnup%2Fo6SYBG%2B3e92Tx94Jb7jAlgDePrkJqcgTqT0EfvJFzGrV%2FX5q6VA7BzcqRDMtiyiIy7FEslCV%2BGKle9f8BRixttyQiFPja32l65SnlzufG6gaDNaDbrNXqD2nZAA3KnDYE1lHIqir7t0%2BMBXz7GSZlcn03eyqly8WE%2FdnrPI%2Bf%2F1B619eZDQV%2BlbAl%2BlP%2FvDFJfBzSZny7m3T9jZBBAxSeZCp3lFkjUINu51YUex9zlevOx2%2Fk6G02PZ8hdmja96to9ebWn25wt7U3orR%2FqkY4ih9xzFho9ipiyMsPMMeRD8KrlrclHNg3jeeIS0jYZgKfbWe0qRPgeUPuH2wMugqkXcjhWW%2FJAg1s755qk8yQJCVjdbXkrMKDB28kGOqUBC1oh%2Bl%2B%2FxUxrgb6K4BdV1cfcZnpYY524Duo2EyTgFx0NgmL2H05o%2BDm5Hix70r4WfP%2F0W6HiFOyu5wF1xNngcV13FKfdETeiT2egQMRWKoRgXFlkHfA0j6ZlvtfQ1W8%2Bo7vn5acew8ydMCYDQ3oEB55V%2BO8OIynKbisIPYjs%2BEHMqxT9VAwZvlF65UPDPsWWVF%2F2XAOUbdYI1f6rbP9sM3YQHzM2&X-Amz-Signature=98175c17eb785f91494218f301bfaa5abeb3d2eb545478892690292ef382832f&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

