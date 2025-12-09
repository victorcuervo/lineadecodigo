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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S7C4JLW6%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T010149Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF8jJcNoxhREps4rYoCa6yL7njJx%2FYsYP4Q14ZtHZ%2F7CAiAf0U3Wr%2Ba3B9PpYNfg9WadmvozcraI536LalRYsyDVcyqIBAiy%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMOsKyCvwAKsawOR4aKtwDs8D7ucOaQ64Rp%2F9VkgXvaZv5juUMywXUm12T4in0PQ5t8mnjWaKSbYB%2FrlEa4HCHW9SJYRyysXcqtx1YkoeJME2bHI6Uhwyrfi1sk5iB9EYmpJEkhGBGo814AbTLgiPEFDMpA%2F%2BjRxKqk%2B0As1qjZTqa%2Fy1n7%2FxSZtPFMXmRNoIMXWWVZXYmk3ZnXXI1bF9pWxT%2BmQ4f20vjbHlxxw8zapW%2Fue3MFl6VmOKYAbg%2FIwln3LcgrT5%2BkigjqAcjQyl8D0wYw6LuVvNlMgW1vFkIOwiJaNwNc4FQljgwglXqBTvxaWfRGdmyOyiR4Gjc7gx%2FiuX8yINmRJyWUGMBNwxYc8q0ugT7Uv3xLhA4HMliAPAtTJQDM%2BfujpcZmjW6%2FWaDPF9wJNc9EHJLEsJ4WphO4mBphrzoQFwwHxXiojLAZJxBL0idXjuE%2F52M%2B%2Fge7303PFd1Ug8wqpZLBlHJTlUtQAdJCiJJV4A%2B0h3ymi0%2FfcLmSjd0Sa2xnkFmJRtE17O5J8WsKjbFpYy1z4wn3A04GNHxzz3nDK8zAy4caElkdDSzh8x1KxUDot2qFCJkDb8Ml9xzsBJbqaHkQDM2uUcB%2FlUdI9WzJJKWh8lCbc4KWbvkid8VKvsTl1HcVMowiundyQY6pgF58O%2FMa5BEA4vjb4MLWepqMX4eeHpPnFPuw9wcDIXOm4wrUqx1vdzGpcJjBdfNnfJTgYRL4J0BXaVZ1%2FCpZHwhsECo%2Bs4JYy1CJraZ3aXZnfGjiBbkA3%2BLvaeJFXXgU4pLidqWx2g7vA12DcInuZKHC7qdJU2JW9nzdXgyHg6ULLw7SaCzAEM4TRctBYnOvTKn9G0H2q2qBZK8EauRjNqiJz83cY5G&X-Amz-Signature=c5bf37135ad521c0f935cabeb1659eff8165fde325a209039d0756041cb0d407&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

