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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664GPFGUKL%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T205814Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQClYLFxN5lc9FqESHHDOUzIMWRskcyI5igiXcUDujMYSQIgdDxBI23MIkVDS%2FNgW%2FZb5qKXSLm2IVYxIkjRafzXqKUqiAQIrf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDNl3BcibgE0S5GyYXCrcA%2B9%2By963BykwkpbgRjll%2FO3uxZhUbJ1gNKAFpw9dqcLh2AhhCo9qGB51fEo7eUn4aut5OBuHxzg6AfDrpaAazKXqOmSsSSB4qyjVH7Xfrig3Tw6HQMwCnVZ9rgtjPZ7ev%2BavfnxXjDt5DlA%2BkojS7WPmvNMl8S8QSS5bATK4rhsN5G6H0Hb0s1c3KgMdcsleeuo2z%2FNCgZSFsLQEqLX6qh%2Fy%2BoxDfZFfQyvdgLChq%2BMgVaHh4D8DPTzP3ddlfm48FI1%2FXAoXUYHWw74xEmZW%2FD9U8mFyswW9HdkaHW2bcKC7ZXV5LyDuDFCsIuRW%2F66jBSqqxDEgjXDIWjERBI88SFd%2F8nAEBDfvPW%2BusKh2ZiTG4Waw2EPECKE4HZIX8mVZ%2B2alQjyyqQ%2FTnsjyuAtnUWECH0Ct28La1jvG%2BPYFkQ5LK0OZueX18f8PVwOWp1%2BUid9p8AzbGC0d2MnGliRNQXS4QHCrvryeKk0bGalDVV0HVKJV8DW%2BKA0HdARW8BSERUBl3ju6p4%2BOrUMi55wkG2hQNKLs%2FbQVUz0DDcabTRFPv0tg2O0%2F3yFiWB8Tjg%2F3CwFEBxfSmP3g1X4dXX3WK4FJX4hhUCKiWCg0AvdbhM8FnCPaEB%2FYmCe%2F3O2WMMjc3MkGOqUB7iCxif7ljVRk0%2BnBiasl1%2FJFpMgWAK6a5%2Bv8ltsOLp9i4tbjgr%2FvLCx%2BBpUuML901%2FWFKyL48y34mSWbTRcYrDmOiKxwKjNNiQw5GJaoPYhQ5rsyvE5bGLuAMjOZh8rczbOFd%2FghIt5y7DFggSoWa%2B4bajov3DRdHQ%2F7AltYUFtR0Usro%2BHg59Yq3IvUAppNvBcux1zUVahDNaU6xHzHVsx%2BEn6d&X-Amz-Signature=f1736e4007efd53600ba64cf0ea9342663fb460b2dcdff9b8631a4a5898f8a8e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

