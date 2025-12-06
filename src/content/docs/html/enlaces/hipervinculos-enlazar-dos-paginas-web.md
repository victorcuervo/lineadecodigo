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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46653YVNU26%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T070815Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCGXeYcG9Aq8LlFMfqX%2BvfX4GZbQarVshXPJ8ybTXzxYQIgDVMZmUFyph4wvVUjbn8%2FdoEYke%2BzAK%2FkdEgZ1jw9%2B1Iq%2FwMIcBAAGgw2Mzc0MjMxODM4MDUiDBHJeibRUBfv%2B28MSSrcAw2t9eGYWmOKkDvc6Zf0eOzuzzLlTLo03d6hcPhkFWTAgYNsK8bjPX2IIBqR3ztdB7iZu7uMr8xAbdMRbx5pRTt%2B3FDuulP%2FqjxXFIN9nhV5uL%2Bg8SUvoLIKCInKHW5Ad9K9%2BxEiShvdP5GHL82US3JrUZEGaK%2FEX2MTih%2FMNK%2BrqLwSSEzVesKZg4y48noD3x4JgrQrVBjTfLERW%2BY4iw%2BRkuzguAWmjjH%2BiqVgwp%2BgbjSutq8CioiQVk84ijAzq4fLZX3Hhlgu7XmnMxNMIMPDMkVW3Xe6iYAGczny0fuQ1bkpxeP0Imuln31sEtt%2Fnj76dmuaDeIrzfXeo2j3VZiXffSOlwcA77yZdlhY2Y%2FUNFNlHBX847xDi8VxNZk9aE7hc4ERzNMe9UWalNMeUF2C1lfQ7vWQ8KwKWMnafXX82asP2GWx7n0J%2FD9J04C3op617pp8kwNVSF3f238GpMc6Y76gKit0IO374N94bieplhGzhnBK4t7DcMDyKPuSHi5fMtAWjvAKhjoAVfriNivPdRjRpN7zred5coN6X8ejf7MRQfUMVCvg4WdDRlf1zMGE2s7oFzk7NKZt9lze752RmNWgS4o6V2%2B7uFP8zbijgPduyR1zwzFGlTA9MICez8kGOqUBCObJd4lwlfAKeA%2Bg%2FYWg8h14KTElN1xj7O5eqo0lQR8dB%2BIFIH8ge5oGSeAuEBzzv%2Fq9g%2BMw9W4aEokCyNA0FvfZpqNTeJ9bMRoj2s4IcCU8TSw2IZKTEtNtDgV%2FvM7DUYI1lt1qWz385LrSXufVVUHYiSQg1CezYtAK7rqrF4ZJvk7xYCfxOMBgP8YMiXNwHuOYFYYSD4pyDFAcOLih153gLsiB&X-Amz-Signature=e4fce6337d612f68d7bffc635f45e01ffcee05d0b3c45958f43eb6c3de250a96&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

