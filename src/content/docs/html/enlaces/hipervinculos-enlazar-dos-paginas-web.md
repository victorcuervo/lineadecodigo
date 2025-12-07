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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664YDFAKU2%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T012446Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFeAUkN1ru72jZtGZwyd2xjnV%2Fo2isVVjxrZ02KxmEe3AiEA3YJILfgXbKigAiwAAt9SpmbCkVHVKBxdumUfFg%2F4ErAqiAQIgf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDHdRzeV3Jt7bTduj%2BircAxZ8Eoma2%2BygvybKqkjzk2hALDmTPGq9S2NC7k7fj1u%2FBG1rLpgUykTRmM%2FomA8tpern2p66Xx2PbP2qTJbZwGDvz1ZMldrW%2BJxrX35JNT2Ak%2BwzF5mggB0FtbJuIKhGicWAam9Z60UCdr07E%2FEMSZebJ6h3kqeMW9Tt%2BXbNbNjwiAeP%2F5wR3draerLYmuyQxqInKerHPrQ3PxtGDK4ekGZt%2BAxWV41QkORTIGk3QgovmvQ1WuqyB43Udc5bSE3F%2B95%2FrpkWwCpmYCAlRsRuS0SuQuwoDF0JQQDGP%2Fx9CBUFuF%2FC8RmH40PNtMru%2FSfX2W0jHTtSbmEjhRjwPEx2y8nUTblmtk8eI4bGl0szP9dMhCXnmOvvVhgB34jqF%2BbTdViUoDFEDJwFuhDuz6QkaYLSalSM9lB71b9JH5HM3o%2FvmpRKTf6ApDLEwVndJKHnKoBRt9G504dPIH3XI%2FsUefONKPB%2FN96Meej3W05m0UvdGauMfDxAs0EV2c8W99AREE4T9%2BNiK564EEX76eJ13xAxkAWAawzR01wFQaexPm5tQ8ceO54d5pjxsY4qPjTQ6bV6kkSbfU6az1fdJcKy2S5kvClwEXUm%2Fbw2XpQToP5w%2FvUU6rPOOugUSpBCMLX90skGOqUB2krOB%2F8rLYqo1bpoJy8wCphdG%2FittxQtm8Jj3eb2XkOay%2FSGpXW3Q%2F27qF4x%2BYUU0g7deKUVIzxujxl7OE9iAoP%2Biba7Y5QIzBQp8%2FTXU%2BNxxt4D%2Bzzo17G7X2MQwGkMcpnKJm7Dw1AcZ4BIWPDBvj%2F5HEfhmlxeyQQrUMuU60fYxVUenU9pkNFPzPUIhMArmO%2BmY6JXuIwyLxCXJYJLL0oXst%2Fz&X-Amz-Signature=ad4b6f7db4cc2f117c5b3bd5fe299495b5fc2cc7e01bd9964d48a2ba49f97483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

