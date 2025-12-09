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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667UHLBBVA%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T221129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDyaE9QDfQiywBubEXGfRkJ9UCtpMII9dou1EIVdT8%2FQwIhAJXJOgMv60jnO684coMRuqLsQp4lgWEK4sYzo%2F%2F%2Bt4%2BaKogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz0P1%2B%2FheTPsURLsKIq3APABEGjB1FdGrvM2U%2FO3sKp92CQZ%2FAFWvjLwYRfiUemEB%2BlXvwKOR9PCLBEYDBzlC%2FCd92rt8SKQetInr5I%2FK%2F0kmkBzWUMbl35G8Qh8UqhK4sy7hlpk8f6laOekPxIxaGCl7Hyu35nFDGbm4o62M9Vjz%2B%2BiAIGrp8JYNTOPxsytVyE6rOCIIO%2FS8tpQlAS1USCpQxtUG6bGOrFGWdCQ0AxjT6RW8uoNQR98VL4XQYQ2IeizVNXzAvcwUH951TwIFfN6uIDp0WpHY5o1AZ1sV%2Fo7xRAVhadWDbrA9au69sb2Nhgqif7tftV81YwORHkWaXVfa%2Fmn3r3sQHAx8%2Bs9OvrlJYYE05%2F3RGY9FEJwd3mWubvGC%2FwvP33m%2Boq4wzed4Yw17%2FBn%2FL7YPtm%2FX7JDoulqHLD71VjIi3Pp0QoUZyPlYbmITHYMrOkCwFC7TUaV%2BIWR4PF8zhFlNhqUaPLsAcv82TKLxd5Dar5HRWMfNgAUl3CpEinr%2FBV0ppClThkS60aCkKj5gjSvNVZ9W1FCiWjgBj4uWbSCPWZm9PKY0B3EPNZkae3jokr%2FC%2BDyDMrrTognV8XW6IinEiR1iM2Pmm6yAAeZNKe7jSe6dRx8w7oq2twE87lHyRTG%2FxDljDmnuLJBjqkAZYVVCugFBCJ6%2FcXILw3Fix%2BCwVLSttE%2BLhmFPmU9fEacuRBmWU7nrPy9%2FMa%2FvWklUS%2FE3ahCjDGvPXJVPuIu5EDbN0qEdffOzEvSD7CtbD7Zc1atMaL%2BzdczWtX2fLh5G8X0WexZG%2F6V%2FL8jLz1%2F2CoDHiBy8du6v8YGkYzNNajtTn11%2Bcq3Pu4AeZXy62cZyHwsvcn5EJio8BiCzIF1hl1bDAP&X-Amz-Signature=495c1674e412d6dc633ff5eed6d28473cd2f5925a78a3c77d461e4fe8532ffc3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

