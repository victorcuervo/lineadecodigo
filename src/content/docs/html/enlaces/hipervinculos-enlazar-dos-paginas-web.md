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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VC3Y2RV7%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T135306Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHMUR9Kt%2FNILomdRqHkzByI6QCXcXx%2Fj%2BitgrKCyccErAiB0Vur4H7bTuTNoJZfZ9xfv3CHmZGWf1ssHsA5%2FI3JecSr%2FAwhZEAAaDDYzNzQyMzE4MzgwNSIM390aNJqMAuH5%2FW4bKtwD9Mry77wYBlzHfj9KKp4xkhk0D5Ogr3pD9EGV81iXm00ijTGwhaXHk%2FZMCt3GcFBaww9HfH89%2F51YH%2B3hbd0iKEHnBmK7gMGvXo89FM%2FvR8wzHys8Uo3NySD3MP1CFmTpjGUcsCjAekH6JoperN1ZPysXmLeRSfXnm3oTv%2FjbTwqOcG%2B%2BFKtvb7KcRtBDl3fKrwLRfrNdnXiOvfBzTa0AatsRaBxYNNRwuuRNBbJOYoOdRId1d%2BKI8udHwD%2FGBCTNEYzj1R996VEPOZfpLPF6gDW1WAxrKpiOlrpP3iJ9U7BzntLKqw9DvPFYUZMgu3GKzmRLKi8F5vLG09uKbk8w7srwgz%2BHSnth7ZZBmediwyh1kRhna%2FvpdCXq27%2B9l0mdqvOgnI9X0sRb6fLROIk%2BDJ1IJkwO%2FLs8WejxAWvamvPQh0NrprhS5ddAcnsoCgKOhdmekqcdZP437wSjvUUVToZDmqbDEi7ZyDtxGL2GLfffZv9OTEEfKKLMs87VYtYIhmmWqFHFYGiB2FLclEtocR4PkAX%2F4e0sMuj%2B6E1FMByb2KO5Fil3gRL%2BMbgRk0ApDuBpvcWmccWsvEGGRn7X1PMtN%2FhdZGJLLeZQdYZWUVki7De8OYgchwGqQqwws6jKyQY6pgH%2BlcLUcdnAF7nqnfHXujFbyLbqAm3eednRfA1m1W7fyJ4Llh5sIfVWZOo1cJotN9ICB9X48vHnZbdOOPUUpUiMaBhlY27B6HlcBW49vjcCBhCWsh2iYFPkphQcSmHUkrF%2FgcCYSQWLCZPq8Aun16AHRp8K6%2F3NLCTP3ctW1KCQ1%2Ftmrd%2F0aZcmK%2BiIf1L5z2SFJpJirrm6n2IhQPXx6otJDGouC7sS&X-Amz-Signature=d7688b266b7cb60e47fc6a108c1907fe761b38dd7b66191a2f6cd43a8ae41243&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

