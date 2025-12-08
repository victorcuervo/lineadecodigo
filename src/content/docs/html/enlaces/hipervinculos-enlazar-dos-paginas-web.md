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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QRCBRSWR%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T055645Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIEPrRK%2B48AtDfzQqHAckraac2VF5pPIpsBfCtH%2F3p6PtAiEAvdyAqXmVWQLzQp50S1X1deslxgo6XTvg94ufTT69lBsqiAQInv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDBaRh8bR%2Bec%2BYiK5KCrcA4hRbsMw0OkK5LRXUs7ukrekbEdUbCsPVFgDG941%2B9OXWOaBe5fgdmwYUx1iVmYo1tTrM9tBUMe%2FO%2FDxVP%2BilLp3PJWP98a2RFgUg8yCtJ9Eq%2BYomAzO20WA2D1PPiFfb%2FRMbQfyXfqyPVBcUBdc3m50qA4HImoqDMJASgE0K96HAgro7IPZ3Lea41XsW4A2UJLPPVQaNiKKN%2B4PyEozAtzaamqs%2BB1pM01gtz9Z3TebXS0GRRfIAZvDEyYwvaY%2Fuq5pb05oI91bdpIYnNyQkZbLR9xM3KEwuXRcmH4sLxzP95eJx8MgVGihsCJtpBADKpTF2S4VuEDok3YsVAD7vykej1jbA6dLI%2BVas7SC4D%2Fu1o1HSuyXOL2zr87DlLPu6Kzb%2FfUJhNfTbcx6IlLWk8x5C9VqQN2aVTORwngkoqsIKIeik8XZhF3LkvGk4Yk3%2FK%2Fzwm5P%2Bc4Z4Bj0uI%2FYp%2Bk3gVrSQXt%2F%2FG1h1NCVAOiN54nMsv88%2Bl9YmrrS2pTc1vryB2UiI%2Bq9tPF9b7qepksTt2JaCaIxJdC5hohbEifNcbGfbBs3NzFwerNxZqottOfOrwUbNgHfblDdJe8BAriOQ%2F%2BN1PJt2IdWKvmzXWxm%2FnagbBUZMkUyFqWeMPqz2ckGOqUBPm32i9a8SwPrRCjrQRfgTWLfMJrOKZi8PFmeJSjq04SidifHkxjMyxNqH%2Fl0rO%2Fmtcr%2Fx4%2FZf3uNcVg%2BZ40juWdweYV91R350Rz4ywQkUSBX%2FuxEWQlDUHgnZr%2BzNQrulAQprBbTqFe3xxa8w673DuhUUdIKwoHTxuLSQX6mCheF5LW70vh47X%2BlinmHHnwD9lXgPXkNpRQe0ue0mw3UOGE0kNVP&X-Amz-Signature=8482e00a09317381b667b4f676ab15f3587a9ebf6d3163cca17ab77ce5933e75&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

