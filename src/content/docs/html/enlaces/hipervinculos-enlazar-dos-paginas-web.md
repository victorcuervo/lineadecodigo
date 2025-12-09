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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667HVQVLKL%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T043635Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAk6nq2eFDhb1sNDs4AJofvYZgjeHbP8M%2FLhb1q9VPpfAiBjzGCtRz0UypjvuiN0o6be%2FVk4SLFIgcIS1p3UPkkw6iqIBAi2%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMjZQf7uP6H5GHMjnsKtwDv9Cr52%2FNIMrKst8uPdov6mX%2B0nsNJySGHXy1uh3rVs1YCsl1IO%2F%2F%2BpEdoxwCQRk62X%2Ff56rPtKdPPiwxN7JC64Jce20O8P2NteoQyLG4tgwRR%2BQk7FbDdvUZgUyOAe%2FrSzjX5li7owYRee0jsVDijE1cuz2WUUN2RQP0yXOOTF1ouPA0JIo6qOXq5xtV2%2Bp%2BNDKTtHJuhPX5QZzbQjXEMEcI1fBECxm5FoFQGuK675uHiFfya2ASodY6oJNl4tdH4mYfYN9gceOqUdkT5Y9TRXkbnBN38ZXReTKOqjZqNGs0dcYERcOYKYZuT8A9k0xlVRYJhOGNAvACjggZaopxE%2FTxxRF3iLZ8WBzptgIleMRtwdfBM0QwyDkyQlEpyOyNZsB4s9ERmBEM9SeuKccgIiKE1JU6fect97l9rzTFZiaN3GUTOU07DqqnKgky0meR1exMflt47KdGsrDqypdBhy1eBU3%2Bb6t4YQgnytp6j%2FI2rpS%2Fgzcl0%2BAmE51%2FxYb1tF6hrPXqb%2F1LFRMW%2FSWZuSl0C7auYwsd1Rkzm3AoaJv1%2BtvqQnKn3xHjaKCpeE8pTpg%2Br2Y6VuTQAFapWKFan4sHmyWnShGtiAw%2BXIH1iv7Rnu0dY%2FmvKNXa8tYwp8neyQY6pgE%2BwWPo9mYpKK21W7wNS69Z0cI%2BmvW3Bn5ALZ9Y5wfCsqqCiiZ0reK9xmHdSIewy3mSskJMHMFvpadU8Ti14u6kqEIPhKK%2FYtyX%2F2DTHpxOOI6dbWp%2BZ0R5g%2FniYiXwUJ8K3PfDVLLf10offJLWq9D6C5okXPCKLkyVaOcZ6d2F8S5Pj1wBtnvg9Lec5rJKZnmf45Z8M19lir07WaNcpTVm2LDM3%2BgC&X-Amz-Signature=0a35476701f5f0e915cae781ad7637f235370f91961fc6af71c0575f8df48f5d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

