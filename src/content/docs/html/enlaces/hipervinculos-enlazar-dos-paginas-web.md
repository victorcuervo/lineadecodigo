---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666WQ4PPIX%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T162052Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEID%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCk1rqUkFqYADIxUbOWI2DiApxxfysYhE4mUYE5o4PvYQIgNUF3oKKFLlwf8nGlYSqul5ifjQMxmjB1pKbucYom%2BtMq%2FwMISRAAGgw2Mzc0MjMxODM4MDUiDOOf%2F6zLwYyxTXH9WSrcA7Mff5%2Fl2DmXSSelrj46fo5INNCBA2qj2xFp847pNtSkUHzEmv0pxX7yb08KiD30pqa3a8Q3UrV9H9%2BriTb5TlrcIVmGTX5HyLzcsIPm0cQvt4CoMLJ843x3jgigrd9BqABqArBy5j0QjHLF9ZW7fMKzS6yPaPOVWtM%2F8TlXSQfQDTXdvHN%2Fg4gtlS6iqs%2FnuEd35Qc5ZpialGCH76hrKjCbqlBO99ye7Oiq81xAuDKJghklAN7wPf6VO8iKk82Tb5dkU2Ra4Lz4dZ85AgId9kT8Bzp6HBrDZnc7WnnUm2iCt8amztIhMUA%2FCpArpJIPZwAmb8qYIQlL6S65o50kZVtsq8BBZRaaXuFyDEFiQR5aUgAUyPcBLz2Oe6U927gbwPb6rFqOtlPeCJwpm4Vt9UQ7DTQ8qe77YWHA1%2BxI%2Fags14rRpipY%2FPAo1gRwgySliUsgKVMv25WwqXTuTlg%2FXul7uw1FfHb1kmoo6dkW3uCeZ6CxtsQ6EichKhIDsn4a%2FwECi%2FBy81VgyjXkO0y4D4AxbHNTmeDKgSOyudA62X%2Br1WbzLpB21RBopArqFMZuoij21Dq0aYkroSCFnwdyJMT48yEO5vxMk4UfPDsEpY56YsyuKkhAyY%2Bf36EAMOrbxskGOqUBR2KVXjA%2FpCmVx8OZchz7EJIR2hjhzYv46sN9iMWR69SfKEIT1odsZHs%2BsLj5h3QJar8fxwm96%2BhcIlAoqIN87qY8IoVng2h9CkKN9AM3a%2FygXA2KZJkNAcpJmo5SYYm51xvbm8XuIOYIjaqcXUoXRJX0uC1v%2F32iUJfNpcY5XPvaS%2Beu4ODT5QqGHl1dZT9Wscn4Hj29%2BS1aVGH%2FjROiqkcGegtG&X-Amz-Signature=7e6229474a6776aad6bae0c77c18e6aacc07ddd284e774f7293dbba3d517b4d6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

