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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VZGVJTNU%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T150111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxofUf%2BPfxbnz2Ey8hFt3Ero3Tt%2BUUumvHLHYWRZcYyQIgZf0BHLA%2FQQ2v%2BIW%2F8EhUP6h6WhdHI41k4nmNQB9rTdgq%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDHXl2%2BJmyw9twNpYpCrcAxjhyZTCTccBs6Sb7iOwg08pi3QN9wdbZDc43Mm7a1%2BRIpt2%2F4g1EJfMGFZtgLYkUwQgstK48wbf4DShqPhmISaPcUvVGPyPJub1Czlw%2FjZE%2B9FCPXTrSfKQNmte92nMw1FvVZBafizeDLTjtVYdSaAAJFlGVFAqkh84ik8BsaFG0CvphycZpEtfs1wokyIQ1WdK8v1u4zD%2Bn25mNU2M7wCqn8npSD2NiZr3d6hfT%2BMzEg5BeyuNhBFFdPKs%2B1tYGdkAC%2FnMWWb5NhJIb0hcwa0L6nmLzj1RDW1a2q7ZFvHyN0pEjlOlF06dXyNLogxtwJbZovNZ443EhIMW77KTJ%2B%2BKk4rk%2BRBX5IDKBXtCbcpVSI8FKXoic%2BWST9BojE0ps8jQEhvrVtt2iBW35ui6CgxUTKND9%2BQi7m8uaYsZdg0Mls9YcuW9omWWIC5yiHN%2BPlx3gQHsEU5CqwM3JEEQXnQ1SOLRvUIaYXQfpRwIK0dBNkwYB7i3FloSgLgLCrjzcw8Txdspv5D9uVj3twM7Hhqd9MvmwVKfNo6dhQuzrg5dhAczI9rfiV1u7rPyIfdajaJSmKof2x42zkDvc0ezNE9e%2BDCVdGa7qSCA3VMqOYn6TfwVXGfYkdqU4gBhMIDJyskGOqUB9g2m7GWKFP%2Bd4BeD4Pj67Z9PXJMdr8ggsRq7WmqbxKWonMbSs1WQ%2FbM482mPV5prqC%2BbQfnvxn7e4fhqo7K0GvP5O3wCA5dU5q0kI7OKL8hGOb0xWv4qCexFrq1EvjqRqpGEdVGhkje0cFVqb%2BzeVZXl%2BVxgYyJYTvxrz9DdXjUKsyK6bjJyaemvcBSWNIoz4f3Wc7uqmjgRvdVRswJWK6URfZmn&X-Amz-Signature=6dc5023746de826b1ca31037b9f13d22b003f3bba3c798864de4555237452c23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

