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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SL6DGF4Y%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T230942Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCYJfotKDMMhBd96bbbGe6tIhfSXHuNqNLuJz%2FGuxkIqwIhAIzU6ogCLePGrfj1cy7hh9Gwi7Nd6aRYv2Se9nfwtRTRKogECMf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igzn8JdXjiClwxwXvyIq3AMyahYxV3MRbTQrj9poo9Gbg6evaR%2BGThWxbrS3YYZM21URAgM5lmo9PbJ98fHdS9VLe2G%2BS5mQ4CALMFdXW4KySW5lG8TxcmXPDN2vUAaJdNgFAVW2i%2Fkxs4vcz2OuULf9gUMLChPw4B1cxCr36Gj%2Ba0I7C4DwzczJujvU%2BgcYK9UoOrIeZFqaue3jn4VTCiYQ7gIZr8BM6GPPbrtOn5A8jxckKnVcQhIAWaGDAkPOvUBmm6IaH7K3EY7hnUTDhZRJCSmBBngaKdCLHWY2XBxli2Z3glq9d2XekaQ3%2FPI2%2F%2Bb%2BxEIdBdvTXA5onKvqZ2EI9rhPtz3JpBf6Ob3sTurm6YbOIFTs6GLJd0XSADTTd5yirxbIuh%2B3DtpXLaPiJwl0MUzkqrKvZdCmfC5ssOL5h0kUmYpVjjXDEQMexKGCoXsAQu4OmHlNjlMvwuwwPyAbecVo%2FTwXD8yWm5f5SashvTKbmDLunPo8nKJCdx8oa3QenjnSz7Pejncol24FBMH2yqv%2Btk%2FVdjZjmNvDS%2FigglNaRjW73yHoP0Ppx4KBZlq3hHQzVzMdWAtJcE05A9bx5y2VBGFhIzywAKqU6qAR6pTYGEFze8bQ1%2FRGmmwSm1D9b9IYiaQ1kGEEqTDMw%2BLJBjqkAQKNszjVKW16MSG5uJ8Vwkd6dzDPLGDK4jrkzcbs4ckCGN7QaHAzwmJXS2ERW6CsPG%2Bb%2FXKBMQMaxfS%2F3ZkIYfABZFY15Dk%2BcvWdhSdwh5v7%2BarOCeZ9EtTqV3o13U%2Bz%2FhqV%2BqPx50V5pj1v6SvaJaFkyB3zvfHiJoBpe%2BSXGRPke3%2BYU%2Bs1uJDM%2FMO7nP1mpDO2VAiyftdQItmFrWlYJjut7QEn&X-Amz-Signature=2cb629baa8d3081a2a2e0ea48f1b882323293938c03e697ff46f0491861b9c08&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

