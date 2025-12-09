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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QFK2NOCC%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T044845Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEO3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCi9vvBmSKp8jm3wlqD0ug3tmN0kdfu3eMFxoDVzLylEwIhAIRdAIcWuqKglx4WgUrZATX%2FS%2BKdLGDUcAcFDUsU6u3LKogECLb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzEabqkC6BO3bdV0TAq3AMHanun%2FChfD95H%2FvM%2Fwx%2FooX7RoAYMxYrTFA7ThfjlGLPCKEVTSZptAS3DQ3Fd5zHpiMoKH2dVCEni%2B%2Fn6gbiczEJr6lioOakYsSiJ4HZPTUZsl6sVMH2Sd0r9PqX3uMlhbOEwzC5S5v%2BbPR809EScQ2A0EZ5CXT0SKGwMDr4eNX9yqz%2FPms9xeUDUxOvao9f9tGgzfRM53TL6ghAUGoKDbWklx0HWPhIlJstEte1TkhdNYYpggSDX7Y1mcmiIahr3NQ%2B5dz5fQ3NXl9DHG%2BvngjqX%2F2%2BDvb0gkbWiY9sM2duFaCfE2pZKz6BsfWAtXYHQtEKdZdvGVqNYSuDohpWTpozeinVlLiufBTSktEw4zbS2oNXLJsGhCObL9ky2dol2tpWgSyx4cs0H7ntzD4E0fqEENx4Dt5c5QnW6URL2wBEiXWZI%2B%2FEMdQEoS26%2Bx3FDucIVizD6Q%2FCfRCrzggwFsW%2BlIN7vTbcJ5sOIiGgm47XWJXdA8RIEFuDuSTWMi4JswRXkgzeuQezLsGzBrTmo40wHjM4pr0dOJ7MWTgWCcv3GlxfUmXPzrcGpyfDoCu5VAEerh%2FrNLT3O8hV%2FizHPQkTibmtemHGuDdwhlMXARmVxg9LKNliQRxbiQTC9yt7JBjqkAacvOWsrOdRbU1KmDg%2FtxPq9MGfww8AVkFG%2FBf1gipS6xJY6nlEtg4pyLjJCagcKmpBGZM00Uz7yzU4FOYqqcHbXfMh18Dy0rJBViTBNaFISpjx23mwqOhcGlTy7cENXE%2FwvrnzKfNLPav7Y5ScDyC36jv9uZL0JhOXV2zWrq%2B6buzERRTAy3ewB6tcjxKGetspCjCG782uR21vLBnmNyZRuvAjN&X-Amz-Signature=20d28681155b95f5a7556db00ed0f47ac4c8ba19a647a32e9bd9c55f91428562&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

