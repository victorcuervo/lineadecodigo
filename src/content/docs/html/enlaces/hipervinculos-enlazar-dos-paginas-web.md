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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653FGX2CE%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T183128Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCHxYoNGq8dfW4lQ%2FXZmQAoDvaiT3q4xzDeAT4P0MveE8CIB4Nq3Vr%2BiG%2Bp52lEQoY34vaLXRGy1ZU5rqll5OKV05RKogECKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzk4YLIJ9KoRXwG29sq3ANJvTe7tc%2FAm3xJr63oZpBYdemQm8x2%2BRWyjjlXq8yl9sj0pWgGpkMulfFaviRoI7sLLnZ6nHbLTIuC2seLVieRx4Ock9nUv3eNL4wZ7J17KVCt60cPlK0qLcPqNCB8ZsbXz0hXKq5eLzFDUtLpPYyuQX9T6OOunCXOBlIxGiADLqfwec5tgfu%2FtASRgUHdH1th9r%2BF2pZHwrz5FcrKHOpy0OW4vIzcLMcQeXq6hI6jP2Qe1q7FsWLEJbjolR1ZXWihSZTDQIB1sISNtAQsq8yT2ToBnyvkX7EZbmv2EnV7WGc%2BQo%2BBBcKrhLxMupAxYl8ALsT4ZrbIzBhFNnbMaOmYpd2GACwgoQEkAlO9uOE%2FHVedNINnH%2BmNwdtV%2FgutvZS66NjCwHLqnBBJXfenQWR1eTYji0Q286N6s1aK0kc9%2B7S4iwmqOIoVULCpCbPxqq8amEi9wEHRvGXrio0z0CdDr%2B4TO%2B5zWqYmcK8KAsOuO7WGbtI8iItuGskgnvC6p%2FKJNTCL66Rem19QmfDGFhW6W9N7nBnlHcgkiW7RDbVsa8OAkfHrExkqjcHed5tkaHZBAQj0VWRG49PBLej3V7mTaRMyFiQbFuUR%2BduBIfheW78Eb07wgv9EcIyLtTDQh9zJBjqnAUGDAKTGXs8mMRwmqRHN3fE%2F9wYBlhVMh0I6iH%2F4IyXpJa5v9chjLoVJSR63tF57oSt5fPPvuGlOTwQgHkoiFF8B4Irut%2FOYj3wopDizBLzusT6zEalJyEWkxAZ%2B7dO3aG4stBjqKIVjAp4RXFhltUCJqIx3pCKmGLvhBAsciwPzSKR0c6bgjadlm9k7ax6bIj5oYFoXcGwdlpvYmC66PvUt6SSJTHPE&X-Amz-Signature=94b2557ae2d26b930f5851577b14f682ba2c2eaa4423c523e4a2d15f70433b0a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

