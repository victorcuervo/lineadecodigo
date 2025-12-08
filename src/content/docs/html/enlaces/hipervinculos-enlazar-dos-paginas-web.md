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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PEDGYVG%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T175833Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBd%2Fud%2BTWTRYhhDiuPmRuc97c6xlGLF%2BF6eqWqCeDpKpAiAKn42lGQ3i7KvNQafnWE5pTZ82gQvMES33ScrYoGy8MCqIBAiq%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHvpe3P7RyG3fdbYFKtwDT0EAnGK4A7dDhPVzGCrJlKlKf%2FYqAjDVNEi1Z1GSRiwFMbzsiZ8I387egRO0tFBQqoWDbwpvbSxZlTwcLmevLsjCHVV%2FWPLgK%2FUWtP9hucKgq5aAPph6DMSnPfZO%2BtHKJ6vrNuYB3zejp7WKsDt0BSDh8%2FIh3hP4hliWcnWgx9YujSyuJ76xq0KTn6cpwwrvdMuHDyy1JkFGN6glYBcjdAN7%2Fbr%2BahNkAJ%2Bidg8IrOZaCUD4sKTIwWhDdVfxkP4pPG%2BoGdbnCNhOjeCE4TD52rK2VxFenGMHZ5r859qsU2HxP%2Fy8hv2D1vdmAbASsTkQf2RZwkFTLtVw7HBRwZZgVByCILRveH0nXzkjaq67g4%2BpfmlnPU%2FQxsYQP6XF6VLXeiapXrmNnegbRJGZxS%2Fq%2B4PRyQWOSqPQzM6BJcAsNg6tMMNIWmS8zfkcark3hO4kiv17%2BZNqStvOmjzmcwIpsbGhxP2zhm%2Fc3jfQKiHpnSqAyrnRRBlSEMhcmkd%2F4V8T3LllTe5CHWZ8W3A4NRFh6ftZOwyclak2s3JJHdFr7Z3ORTf6DkWrX7SoqZ96ENM0Sd15x%2FyCRL7Gwc84DEnAzivnMDDXKl5ywWBeXdRUXMleoFHBsYIOx%2B8uRqMwtobcyQY6pgHErKszVtI3QPy0N4tlu2XsGAbd79BgUHSnAMSks0BYFtlZDkkGff%2Ba8WMH6RN5G8DlkUFxEtzldVES0h8qvfrzmVzz3%2FY137qlCt9blxhTNab7rZQr6slPQ0K8PXXt7UGQyOywlmaMgGzCFAaKchQO7hHIbOGdNkDhqFgjCvAn4lGaFjaC05%2Fqp7AcAs1rCM0HFSzsHhUvq%2BIIp90%2BANR9e0zwGPrT&X-Amz-Signature=1e87dd56cc59b5d9161814890f0631494ea7a3bb96e7a0271890c57ca9aa2602&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

