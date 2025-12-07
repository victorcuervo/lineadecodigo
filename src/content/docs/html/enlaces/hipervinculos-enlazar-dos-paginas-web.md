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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665Y4AIO7Y%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T150536Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEML%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi80NcNDn0AT5qyDGUa54lhsh22t8IUvv9OihAVOPogwIhAOmn4rwx1PUe5vOqbuPmL%2BroprnCfZpp1AXLdNZ%2BvpUtKogECIv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYiI3uv%2FDwKyYjg4Iq3AM9NSWbKa59%2BxmLG0tPNNyUaVBhJ86IqVfa%2FZkIsmGtGEiyaoFHzF1kAgc85AiTY8CILm5qWf2sngGAkN5kCUG4y27lL%2B1bS2ZPSQUwAWPCvduRvSoCkoVCaMxhrTC0fOinHXduqBNque73lQnQf7WxgdvCjlmlCieti9nWFaZUdYiTPi97T69HR6rNh61ELuLqXWypu3edQOvLnDRRDRvIuecbtMPnc9IvxKZBup26TWW6G%2BEEFac57yEM%2FHaQZdsY96fUwS3xUgY8ymZ1oxk%2F58JXAFhlpWuBepK3yCTbg9yieYNbGIkQksydSGSBOWCfDZhk2CsnN0aVzp4hjgxw%2BBRk60hfIHYYNonf2T1UpT7x7l1pUxErN0006ifZpyH4ra%2F82JXffAth%2FNEWpJ0gUr36vVO306%2FpI%2FFzN7gtLFFFSF7LADuwATG%2BpR%2BtAJs7vwDmDOD%2F0P%2FiwqjaMUohiSXiCv5H0g5DT8yeIEghrxj%2FEDDcx9pS%2FufwYN9i%2BeKycMQDx0QIG1jtMUYLJWM%2Fc3mCwu%2F%2FWHDzpH%2BcRY9J8nTGzv%2BHTy7MFk5kTf%2Fd7b4qcaXffWEnOku4oPEpyMe4SkmhWW9PG84c%2BLnIzlHSQ76ko8kk3eFeV6tXFzDhmdXJBjqkAShRpVfStY9zuhuL0VUwSirtOMZtm4BjRUvUTtu5qbXtUMUvj3m7HZe3gngTBTwRVJCWfpR%2FQlv7e4ZwTCBtAEBF5p1kYvi2Ia1uKd5BN8xX%2F941IQDhGy2nGnyzsVIh4oLCUiXYVNTlBkI%2BP2WfWxLB0MwMlRikM6b4msforMfDvIBzSTVVKqcOdJ5P13FOAx1Z0vGbgnBNqu%2BsQYXXpUJiSsYf&X-Amz-Signature=734847d8fbd2cbf2f49af302503c8e1b5c2f7ec1a78f8263f597be346d4d3135&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

