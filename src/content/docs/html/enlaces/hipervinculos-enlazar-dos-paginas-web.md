---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2025-12-09
slug: html/hipervinculos-enlazar-dos-paginas-web
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZRN4JXA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T170912Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCuLdra4nbhCLp2smVUlMjheL3Vw2Zxtji3o6BIl5BfdwIhANcZ13UxaeYE3Z6BtwxRLYL6%2Bt4XS1M3mERHQsswYJbuKogECMH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxEl909V9A3XYf48bsq3ANUxIJ5Nkvw0gGGy%2FV%2BzwHfUHu5w6SEeHZKxKchT8PfYCAc6%2FblAnO70OH0HOs%2F%2F3SclHTZKChTBksr3NOM%2Bf%2BAzGNjFlOiujj01%2BNVWgD1MXIxdjxqAIjD0AKgwHDq9AHbvRPgmWytiWmGP6igkaNEOG%2B2Y8V%2FX1MZy02b8q9d%2BDQEsj4mfDLNNvrcAiDgJoGemEBvsH8qIgQbCIHCNqvtLf56GQ6N3j1Da%2B26nrKLRTal9u5jXJ3hqkl7OA0mJyShdazu7%2FsSTJcZMjsMjmpCzVeiWApdlOVAs83SLM5K1lebZ6nuidoaXlQGiOzKIBHEX4IIsrPqSWj3%2BrwV8k5RtUs28EtW8%2B9ELzievGHQmsMS%2FeFYzKK3Y3vY4jC2WHdBjp5J7%2BDjulg7qh1%2Fu%2BzkgwWBOZHuI3Hm8iltgDOrHpPR7vJGJu0ra0%2Fgh5W8lJVevLt504%2FRDctj5dM3P%2FHiHuV1ZPW3qJ7Y3o5LUHe529BMw8Sa07toI1Z2SdAGkx3k%2BBzQ%2FF8Um30D4qzI2ham%2Fq2J9Kh98x94IZMyEsVyT1sOVpDZEBCiNFy%2FytHJ%2Fl4DQ90bYS%2B6Y9zUenG4byhSLZl83LSAutyL9CM9hjmwcpyyVosUninYSTsd0zC6mOHJBjqkAVSQXKyZuFswDTbThdOvhdF8622e164G6oA0bcNSnCk%2Fbxiui%2B0Tn8I6XGfmfrl28X6hyOrkqKAFGtrzKulFv%2BPA4jRfp0DPNaOi5Zze0aqrfkfr%2Fj4iBALvpnALSsUxz4mfPT6ZMGHErFmnhBRIc0xYV8EX%2FdB3NR3%2BJpuFq1mzdDBBcS5skv%2B%2BulylISIP%2B5aIYmOuzlLVCISFI%2Bz3F4PSNpq2&X-Amz-Signature=7f74ac6ba1e7ce7f4c409dbe776b0c951d64cd77b2636e3b9c269714386073be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

