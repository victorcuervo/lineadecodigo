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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46637PWOS4N%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T035002Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDSuA5unzBm7trY1U3sK4wgSd2g5tIJ3ZRnlKi%2FSLFhfgIhAISdFYCFEnH7ehuCuTW30EvNCHbFrbdkbaa8NJg7jGLHKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwI0vX6AhxAxkyOjUq3AOijtRS3CcVVFQpRzM9nBLk41bCqoXfSR1ALOgrxiTAW4HopM0Kxan96s53PD6WnBfzPJZvXehf3c3Do%2BVoKFWENx6%2Bax5KorDiZ6fla7ptUTQaiZ6Pd8TPZkGrcByVMAZRH80cAQRSRZNNn44GftRJh8ooy7sU01I0pKL4LWFo%2B%2BFzYQ5FUcCp48LzIXbyUc%2FYXSjf%2BjPy%2BPgko9aayLqXTbXo9j63AHzbS3Q3Pw%2Bp6sDYGZpOyJfTlBLVC0LiEx98hiYvRqaIZU1CrSYS3eOQz5ocYgx3D4oIWLPlb3pwx6T%2B6H%2B9uxXiL7atYCdZfooCLrc9GD5uilGGZ11o%2BGinX9ddRJy08tOq9v%2FSr2JZ%2BHF7iWPeYEoPOdTTy0MZILh6RLOMq7qLuZdXp7ZcIpXcBO4LOPnBqKuRkiCNfCAMoQ3TsFyw1Dlo0vN2ouv9rONCPxA0xGPMJOLWKZxPyBYYxNTldK3cbp3zf925WQRVDF%2BfgOM6m8MiIrcBNHkJo69ASZ4pPQht3F9sU6B0DGJfmO46OWuExCszMErND5LxIGLW3hCQ1fG5TscOioLcs2z3ezkrRT0lHM4zzhMAZ6s97JhJOQHPL8UDlFp8tzvPsfdyx4QBT2dxHicuLjD4%2FdLJBjqkAeM4hCLW4sbvmXPOEp4CHCl%2Fy2M9EOBrIFZWfujGEGxnEmfIdQ9lELe5vMBFPCpzIz8J6GLFXHCn3squq%2BO%2B4KHgUOYsoBMkVwhvh8qlRgq%2Bn495fYYJ6yt9%2Byj7XM16BTCtd7TQ31hULrL3kAdrqH1vGqkhvBv8svLhNPniqJ3%2F9llYFZTtf8lnmIeKGKuQmXyCTbRb2lI5uYtSDSXTuhTr4Okp&X-Amz-Signature=ddbcf2c0cd44db903d06c7ee3a88f9f40ea18f0fea92f200bc33cfb0ca7017e3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

