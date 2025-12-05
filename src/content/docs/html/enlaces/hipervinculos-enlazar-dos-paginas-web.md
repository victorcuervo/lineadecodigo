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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46646UFAVYI%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T144611Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDKL1jU53DR71WIc%2Bkb7MOimelBWWQ6Wje9QhSs0OTUCQIgXg5FJQmnTdlalGDd%2FpfrNDD0cP69PlOqNqV8VbGP6U8q%2FwMIWxAAGgw2Mzc0MjMxODM4MDUiDOy5HwmRkQaMgYCEXSrcA9KQAKSe1UflQS2fmmHIvMSBUPD9cqZoIGNlSJVSs8okojNP%2F1i8xZDcgAszdxm1wwPG%2Bi0dh7kg5Evy9303L4%2FEck%2FOXxzSDzAtRgfj5B9prQQeP7HYp9XqWnp7iuOgC6ZhpWDfw2lfbsBcy%2BdC%2BJtHGmkt2L4oYsy7PW5pOesI1kdjnodBal09tOkDiZ%2FrVKK06zEfsyi2q84LenEtvytaan9FKvN6AEpUGzBztjlQ8lx0veoX4uGw6cwyAaXTmW5Lh2t%2BstXoYaah9p2y2tt7ieWBxLWm4o8ah1eLBCGMU4JM1kDYLWr1N92PHEvsUe%2Fc7WgOxOd2VKWQMI3FYrY0F09VzQC3zsiz2ka124OyocVMaCCDmTdXj6b4poXJSHpANgEIHWkHAEAUtfdgB6BOTDDKnfdvVvp%2BoBxQJhFfcQ2PMvfaTAIXoV8kVlXWYfZ5wzJ81jXHklnUMR%2FLO2lgk6LLcbZQ%2B6vR%2FCQP1Ss7zbMd6NUY24NlK9L%2FfR3%2FoVuswX99scB%2Bine0HvpB0fONteVgyHBp9OvuLVXoYQ02Km8wTB7B30a0NrS3y%2FifNw803sJeUF4%2FbVeXQB2%2BRhKMgCt5Py6PcOTAYGchFYehadu9HN3hpKfI66nYMJLPyskGOqUBbSXc0D1nht%2BxpQibWPAYCf8cE7sTTC3FF2X1h3%2BXV8xX3yPfa8a%2Fo4OORjOAAFPVRFY%2F2bPvdML2cHZTwSsogxmgQneEe9QSLMEmhAXvv4OwG%2BQtjHpi2Sk8GqR2mTiGTN71Q%2FKn9WqX%2Bhi%2B1763Q0miIV4ZZI9h56sx0O7%2B2D8rEah%2B9SUB3lG8kxXgM9Et9nKOkwv8loRVgtoQ0NqWbzimOK%2FH&X-Amz-Signature=cec2ed12352968d149f3db28376f43817c97f764548029128e7ef5ec372d0b9b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

