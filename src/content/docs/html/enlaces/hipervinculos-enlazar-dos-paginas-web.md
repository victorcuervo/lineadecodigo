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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466TID4LDSS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T234604Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEND%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDHr2Vtay7k0jR%2FxhP5Sq6p3MTzmLB6tgSUD9x4d%2BhfJgIhAOQhiAtJaDfplZHhSRuf40ciuMViN%2BsEzj9cbAQRAMbiKogECJn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzvCHKeY11smErafa4q3APmrYhAhLVJ4yoRNFXWXEMnAXdBK9vZnZ%2Fqyxd8nAewnFpw2wP4wcb0cxbWCNhxAGw2ElpI2NDMb5ZLmV1PV2CSa%2BZySoi2jMb8PvNYv9u56lJXFVlgIYX9BgGo9h3IUn4oMZ%2BQsaI3he5zU97iR8hVX2RUwCEOlJ060HdkCci7GesKITLc67H8bGl8H%2BZxAqtEBW1iBkiMIyH5hSqCSTBwitludrLZXmPhvjO%2BdICSnzPIgsQhxdX48bPrTqHb23Ku%2Bd96fAebPvqrXcFzzOz0eXHysGh7qTiCIxWf3mGnEhIGsQuAoI6iuW%2B%2FU7fVKVjW9DsuLj7qYw2zsgiKAadjNnonKDDdEiQpoTVhqIXPooJQVnZniVugtkLOVsWbyEiQ8%2FIHpxLr6O0Tgjp2oUm%2BILtvPcukwXcMv%2FqHlUjeNfzhU2tO6lfL6fWezPszEZYBTs0OT5cX%2FnBMsP%2FC2i8xqr1wBz%2BIr8eqEYOjNh8KoAYIZDohQL6a6%2Fgqh3sKcPp5V1Wn9XJvu0an6UtTeA3QVvd0vtV7bBeVMqEGWx4tXBhw8O1E%2FLqik3NLkaqJi4TI2HlSCWOXc57hOTbTeTxW6XMYf1c%2FeHciWBKBXYol1m%2Fhq16xo5bfBcKj2zDrodjJBjqkASLxS2h5X46xpdqN8mU5UM5FxstIj6oSuGukFcYSNWd13%2Bp1CUXb7cg4eI6dGATIsKgodIAxwZnHBJWk0YNNT5dir64nddbloIRgweaZAh5Zeu5JlRWN%2Fb7xCckx1pT0uVEyGpTkcygCig4FMyNe3%2BkH7qoXOhB%2FQNCAox7dUz1LGfcH3QER%2FSsqyTc%2BZS6X4903sTHrAu%2FBNL3HaBRRmRvugeGl&X-Amz-Signature=a8a1fc3b00ee778972048dd363b912b092e922ae0d5af451e91abfa825291d19&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

