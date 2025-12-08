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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YSMCBADS%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T220025Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDmmYOXyi%2FWV8%2Bs9UKnN0HnB43DItrY4YnY6fdBG%2FRkFAIhAMTh%2FSkGXRtqB8Tp2DkbLK%2Fyo9Qc1sEq%2FjiOGNbITibdKogECK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyazOE7EKnxNXRYAHUq3ANrar8iOG26kNAkijwztOlUPfWDGM%2BTeNxQNLuEvu4rv7mMKyq1D0%2BaoaoB9qQGl6yX4P5583eM4ppoFotknjRK%2BVI4sgQVUqnyx0%2FHRhZM%2BEB9E0veH58g6iwLxheWAmoxbzJnuMvEI3NtCKxR7O3QSiLmKFUq1AMzdllBGf3u2VGAAXC9SY9jmrsaeZn%2Ffgc2WKoX5KruxXf3Tb4cR%2FGNuQE8PmBABlwWCquGEAa6mnHZq9uY2D3ApBuFPTgoOKMQXDQkBRiXKeIwNwyTV%2FHSeH1ht%2FFNTxHg0Z3NHodpRu8JuIXLeEvog9WpYjZ8YOkhNyo0kv9VXze7WM7Q8HF7QjTFwLNtcdL5qbHTGz2AOc9TOzZ2QqJEdaSrpqhJJs1la9dbed47v8KWD8RsiKL3ftaPXjEfex1E3MonrlX9T%2Fn7v4yhX8fKnU2EOOuFnWAXLhKutjy6kHUkDD1rDyGeVFNTaJqzciZo7ghbUN6TVzp6Ph5WKMsNaRVEMdVkJiIjHaxHNqfdRndWtETgjpWbxElm4sszJnC789xHFa3HHbSxaWD5JxGAm3wtvWd4qjrtZGTeFMuFtwWOvs0yTIiiEI1FNqbCE4dW%2BDvXR%2BY5PDlVj4cfDplOcj%2F4vDD1%2F9zJBjqkAbiKVVwlm3fC6Q0THYt5d7Wtw%2FJfhF%2FOr5ub8k%2BgfPcCRX4g2d6IspodyiTdY%2FMKUhEGtNnuSyKsc0oY0xiePCZQdZoJScM%2FwjFYn4RtIRgTtUigc%2FzEXmC%2FBHV7lJnfpT0454uRK2h4cGXznMiQmzpO5Q9og0R%2BdL2WfZHi%2FHrIFYzoYNP%2B5fapl5YEbF6LQ9M4NgcgVg0P%2F4Rdlr3%2FyUB%2F3UeT&X-Amz-Signature=ab735d967ad589fcf328e98337cd79b6afc2fa8de6ca54800b8ea0cae227f6b3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

