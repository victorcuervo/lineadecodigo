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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665S3EWVHX%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T190701Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBd7MaVAiMhukvkfDDPwNjciu11%2BkIARC9Xm%2BO2CulDKAiEAub0QtqTOeQfSXIntCjjoHfhG4mHDxI%2BmLYqCm7ZM5PAqiAQIxP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDAdmeBO5lThyXdzlbCrcA1fB%2ByfJ7pYTZGguttHXnZ55erid8nEFAISQQv%2BDa6qox2wzrpdwfD%2BbhBRKElxXIOGlrUqfmJoEP%2FDx9GS%2FqoYDLbzvEieeIAzMgDixZ1xztvxagF2xkb3Ogg4eTbWDkJazfry2AptYdudVQaoq4xhSrj7p%2BJfE2KiV%2B0vIKmjk0dfKZtoNY0hD4h%2F5%2BTAdT6NvrH1wRlp2u4X21SrfGfbxWKEJbREszdDfIkjGPWKD%2B01U1Hzy4Fx45y8zQ4aMz1pD7It%2F8%2F3FyLJ00T7ZvXdPs1uVlIsF6ehWv9ZK5a6np5L57gUe8B4toqrgnrEyipu6G9%2FUHoVkYow80X0%2F3cpZeVkh4s5wfudJ981jW7lgtTdI9RCS50rNy1X0fqznE6jIWHLH47oumaxVad3Xsjai3k%2Bo8xci2b4mkJsghgpbgzkX5x6PfLYbfin1ddrKN5us2zpYo7E6srb8foAQcKzQGsmtuVm6MDUSdVfzAtEZex63%2BYI3oyP2iYbo4RJHZ4IWcDzw0anX%2B1yl73fsSI2A2ZRa0oloHWG4rQhMduCJcF%2BsZjYphecriOi9yU4kRkYVdwPgv1OaL%2BwKLUkxC0dsUUpYUonZZpNb286jSe2kz9RiMZxyjroP9lqvMJ7e4ckGOqUBkNDsD9qlXHolBinhFpSUCEHduTLe74YN8U4w9xsaUZM4tT5Oo8Et8NBTBknw5ejKOOPq%2BywMlAvq4c7DyEEhwhXZclORJJmhmAWEET1RptrsCDmA5FSPfUj23fMJyhnEKq0%2F%2FCm%2BFW9Poq5Lm1trOeHwLZl3l91u7czFeoeb1CzTmk%2BZ2j8l38uBwlnobdAVprToWG7N8AxKxXaNIN9dVll5lSRh&X-Amz-Signature=1b13bcc4e1211e003288a3944d4c645e4a31c8ff51c6493821237834b9b9d0bd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

