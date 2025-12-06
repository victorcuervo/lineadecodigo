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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZDRO4WIJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T092837Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCVT9taOeDG%2Byz%2FW1ZTsSA0DRxiQQBMPx41cChwQSe%2FnQIhANhx6ydgS1O6PMPWO9095OkZUiByGGgSeEokJrvO4TbCKv8DCHIQABoMNjM3NDIzMTgzODA1IgwC9I2hHp4NXH537Asq3ANnSFzit6PlhvKw%2FdJMie54f6mtl1gbJwEWKsJFEbx62EnSiZaSbwDv%2FJ4CPaJfJYkARXT6Lb%2F3d9z3xmfhC0PNTS95M4qvE0rb3FeYY4X9IIKCMPK4V6K%2FJ1bSb1sLL%2FVBqL42DFbEbn4wansmjlQ14lc%2FsytO6sylNcQKtzv%2B8XwB9yj93l9ap%2BS68FgOLYQqCsy5TmKGlld6XxB2u48pd5tLP1YLznyz6z51NWepqcFDRkx6UHRI9DDhvOsAWJPx1WjETE2AyxZZBVZuYkWD00I5FGddYQXSgN9%2Fsm%2BzBwGfWRtgSdMZiOvwOgYk0fy9GGk0wlW%2Fw%2FVF9TRTp6Ke7iSBxJBVOdbhkHK%2FW%2FAxZzcDTyjnwQVkGtJiRDLL1j%2Br9Vk2NbC3pgTOXwY27MeKbky4wyRKsM99QVHoojaCHhGThNQAk%2Bm9nB8Iqt5GAL%2BLLYxSYtNx6k2eOucCrewWhAmOTX3%2Ft3FbL0zJA1zXJdHDwmXYxpzFBYTP75jDfok%2FzwecM8PKgDql6kN1VaIwPbvXGWMBqMHwjzLTd%2BgEf8azRqeVn1bWPuLa%2BjHCE18AuIiuBP4mr%2BDGS%2FmYQuiyoXfbZsoZRpek0N0tGRIjTCwOxB8e85vf7H6SNDC868%2FJBjqkAa0Za%2FVhI9azpkNNlVpDSZQj59mNnEitpa97IBHFUPvqGVc8qxPtNW5LkFoOCdOM1zfa%2BB4%2BYKMP9tXF77Qju0t11SRaLxcVauD%2BuMq%2FcHAz3QA%2FOqDJb0F%2F5YzKso0kN4P6Umg40ZMpJNg4nEAchs9sTCxoS%2BIRE98amb8on8Ltt3cx0qjCPckgEOe8JZMkqcAaDaTgtsDEohUW1GbGjUpQwTw5&X-Amz-Signature=64465048bbadd9b36bc9bad9dc0445db321ea3b7e17d6cdec14d1debc8ba5432&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

