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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SIRBNXM6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T090321Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIA4VW54%2FSQnt119fXj0aaRzVLD3tRQAX3gPJ7etLTxXoAiEA7IEliQytVQrCXZPlfmz4vuUAiJEz4USRs3%2F84cMzA4YqiAQIuv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDL9Q4CcOZrINL6MaPyrcAxBmREXQT7KlX25TcgqkLhSvvfKYUNa3u%2BiAbZgztYQlYHiUsMH8WuW%2FXZSvOcvEXeoPjokjB4yn7CWEd7H%2FmzrbjQMl2MqewpFDqqa0EGrPz1Al3fFTCHuKKtKFuG8%2F8D4sTjqyvtMFOsrkvxx7mOmdKc25PnbiVb59py1%2Fy6oTDWiBQm1xsWPfDBT7EKwgl6NCtJTJyp%2BZbXS0sXhFwidHpsnaFw4iD4300CP%2BydGtCJ5NCKXvyL9YBgbXUccLMofq%2FYN828FnP0afzhnauf4aV7wqs3LzH52LvkJsik3CCGr68ppKhLRhkr7lxXk1nsHKpl7g9TdhPAUpGi5ZKDZr9REIxvDja4xhUmutZOKOC%2BxKuugH94I3JLU3LqgpnSZz7E9k3of4Vl9I0Fg3Cd74iKeFbN6rur5SRizLWGD914b9cybsaELmrAFiBWds7oX5GCANZGeUFcHnjrGINTv%2FEndIkPeJXP6XvM%2BQQbKPHzWd2fUhSIqFw9DQLwWQfj8sZ4DspN5uPF0QgvKqQ6BP6v5s2kpmRB60BGIjJUvW9BIs0Ii3kktq5AQu980gI0g2qT3vP59SWN61qTMX02cK8dFsmaROGPZJEJAlQdispE6uh7GCfLGxqmbJMIjE38kGOqUBp7fmx%2FzMH018j9L8QmTy3wFpFLeAJ55Pic15JUAlX6bMiPArM2v2x6YTM5Q1kNSNCuN3NJGD05yb6Zs4UJHjvYYq4BqV%2B6THNYSU3fVxCW6VswsF083d29KgWji78afMJvlK5dTZm72Y9hk5KHVRqxzXaHgTSETmaptYCaTZsxTiscD1BBg%2BQVIamCYPLa8lCjsFi47jd4hYcpdiMG%2Bk4%2Bz8V%2F1x&X-Amz-Signature=0e358b9c88a6fbad662dacb3c60219859680bf33e078652c3683677ba0277736&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

