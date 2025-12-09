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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46677IXKYSQ%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T081340Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDA1pGOZf2M%2BwNiiQsJSukbvYVZPlXWngEn6Nm2PXw3kQIhAPUj92Mdqdq%2BVAbVOiNcw6k3eS%2FDM3AigjF92a%2BKARUDKogECLn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igygol91HLyKAYZ5O6Iq3AN24lHxU%2BJcVmANJCQphHa5Un9h%2B1tW%2B77u4eLFhcdk1gBH8xQbCe%2FYora18wcv88QPtMDabqZrf40ToirfxDos7fmYrrKAy7yCiO6Ut5aw0jqrMd0RMGw%2Fe0xuLWcsS7V19STnxOdkQAkF5%2FguOMJ15LvvMsYu9yBkN7XezBwTVahehhu3YtY6ExNlSy8ZGCKIYujGXAqX7FBeYltJtvqcy06z0uQgkPANedbDRhixkMH%2BJNLMtfp9TVMokFQIIyGOvxaoFVH39H4rxinfC5rXaqxDOD020URZY8C4H4XismWe8eFJ%2BnTJK1thqUjfORneRho5X5Cx1N1o7Zz7OesX8xmYXpItHij53xaCA5%2FoH%2Bbgw6k4BaCIVJUHp%2FuyIxdMAqai0KkwUTQ07RvpHNF%2FRMdWHiTDSKrKiRAFiWNOEGHECjdf6mRVaz8oKKrJ9AeqPdfnyRViaoOAo0xj5pMlAppkJjxKXknN1t3OnwV8Wq5uZYP3MW9jxzeAea01Kowt4hnwEYs8HUlsXJIrArIdn3gut8Wi77AseGdrkaqZ0qyo49cpkKi5sGySsAKh6hFhpxjNJmzeFmwlr%2FoBcsgehstx3xHixahh7mNZNW3vQQSb0MjA5DY%2BjL6AOTD8pN%2FJBjqkAWXlsuB3Vl0nnk%2Fuq6DNQ9b3KI0SNa%2BltUxXkAzX9T1tqVbIpi5OAviC5d5QKXOlufkADtFv58jnxeAHCMRTyzW%2Bkv3hv5HP9VIN0yBZ6NCI2iDLlKF6dzGYwB6AvU32jGTKQdX38H78J9I066nXl8jFHX7GweW%2BZkEmamebxNQX4IhS3WhEmL78kcYsO9AgCbieMpf1I3VvJgIDUtttbtUYi%2Bpw&X-Amz-Signature=ffb6b6acfd8a9b4479b633e9d5932a78e5c98d39249041cb71c254e4920a794a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

