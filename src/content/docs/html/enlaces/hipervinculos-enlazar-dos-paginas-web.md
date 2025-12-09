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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663IEA46ZH%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T181703Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG9G0%2FgyN7wTJEPxX2%2Fmo2Ss1hw1O6%2FhkW8oaP9iGWKYAiAVbJkdoY7nvMcp2JBNUN5lH1zB3qGUsNkbQ90CRDPJfSqIBAjD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM%2FOqyOrGRzKkFWpK7KtwD4IfPqBl201xpqRt3IroQ34f08%2Bx5WiVDwICl%2FOTP36YRH53Gp7ZwpWyq5VFjwkKbeBInB53Psv1zmNlSnpl%2FonWSuUBdJKkikiPiLJNywivO%2BT7sVeFe5GObB4NE4LudQTYxsUbdR7eoUAhVsId03m6XeuzdloCqD3i9eM2rhkHlRltI%2Fv9NGSmR4s%2B5nKjHofr7cyLRTcKYNmKzDlNrfBzRpbBHf%2Bcc4BnEz7fTeb8nXmRyk1OQpFQ8npqHoLfppGfEszaqElqFdoOFO%2FPJ2tBLlz4Bli3u4bnTxzIDKS3hdBxIHh69JmgEdAfk3POa3Gkkkoi7FYQx0YfkDSalCCiwJDztkvym2I0Ck2WUqYC6lbRF3%2Fr%2BPcW7sY3xRJ9YMhUD1sKkgQzTNmUNnitPWulrRAwszh7btYIDGagCFl1gYSz%2FPgJaoMH7BGS9y13GYT6Tf7pxV1kQrIRKldkIhKymD%2FDsT8VBhy%2Fjany6k91xUNOHtEpI5QpRlLMUxLhls94%2BNd3uRKqR3zudFlObfMDsCS9mqvcLA88Zf9nSvWWu9BSUOZ36dZMBikL8uGUETfWbWJiFBcinhKq5utmhLK2g7qPT7E9Ccmqw7vfOy%2BsmqLCsXaR9Ybtu5%2Fgwi73hyQY6pgH%2BfJvZ6SOSoJF2c2AerGPOeK1UUxKwgcKMDg39Ce1dpiGQlk2tzthC0ggPEgFsZVAdKXZiTHmyWIS%2BkN%2FE7flxuemUYIVaX%2BCum%2BdLl0f7FCof%2FcYAbZmg6pzHsENGLNJ4nSb%2FMCtyRtj%2FGy1CxYNgykbwPv%2BQt1idXnb7DVIJEzABQs%2FPeJxSGAO%2BrkEOXn0iXWC6ZJTaR5CrVMjFMcqa23SO7zHZ&X-Amz-Signature=f68e1933610f453972cbd246c59e3ed71b5c58de603c7f26e5f9ff1e8f5d4a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

