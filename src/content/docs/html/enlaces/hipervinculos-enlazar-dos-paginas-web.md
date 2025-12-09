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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SHP2J4VW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T225039Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIE90OudPmHwhmrJ5VDWcaUkJLo%2F5KruI7eJYAjam8UpfAiBs77r2BzNEZLJAMP72lNGspu7Ewi9bv62fqUXaJtWaeSqIBAjH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM610LQZ7dZNUMrcn%2BKtwDxCO3t2yGif4Q3PfV9n6rQgu7o6ZhwRhBUDAq02wD808fsYGSXOM55bUH0yC2xt3n%2BgE%2FgASdb9J%2BqPSQiBNxA3wzGJ9Bko9P6%2Bg37E%2B8RoUhcrOJk3a%2Fja9pMx6fNxCWplGDsJt3StOKOYjrWPCBctX98YJ4WdRZIGkl0Y%2Fp%2Foyp3HWENxLB%2FNsYR78NCpQAWt4NacsKUYWq4EYuTQ8PlxjrGFs8ZKQeI%2BGo9%2BXM9iQ0jrQluLYnqXk0HQyvNEDggYmMb0PXUH1AYZt7snEtgr66Mm4LuvvvCkISqMzUsfWkueZPCPM2Rt11SlLb7zHRFd7CiUUixnoZBwHVxUOdWGJXa%2BD8hR0HqPeqx2Yim2Gj7YiZgKXZKZW3FXidt1FvKiKGeBG%2BRC5aqHunkZfyKBrxVVTQG44bizjZwgEl1RmdOBOHrnz0Btzm5eqOu3AsW4kkXtBwZMx9MrtEU6J%2FJtxAzu0CG1oBhWf%2Bs4Bgp7ejB8dDqVKmHKiPWRCfe%2BMgLySQfTykJjPPsonopsT0aG8jdyD012w4EOfjtSKNQYVjaGAd1FxphTTa4XL5INL%2Fonu%2BKAJ34p2NyMOeTQ78pbXGLQC%2BIejJl%2BDy6FbUTYmXNIFuthFyFE6DuPYwhMPiyQY6pgGncOZdAt4Vnrtth7uZGlHIVWGEfMKPfdGTXCAyxefpvely2T64Qnmzzjo%2FCQTpFdDmwq5xG4b0eBMTIDSv8EVzgDGR9mt4Axt28P4kg12ReqoTcuzptCGj%2FUyKexZ0MH72G%2FrmY4YQIKIh5lRur52ujokCJELPE3T9bUzXjk9paJqjiUfgLOusM0HBrak2eZlg5XhKfKraumJSVK7hj18axGIJZpxg&X-Amz-Signature=f4df188293f85a5b446efdaef7dc2ad404b661dde4d7424d99046f71ab8cd7ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

