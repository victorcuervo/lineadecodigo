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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VHZKIYCK%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T082352Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQNIKSUwtBqz8TBVz0lNLj7akCp2weZ6zqj2qHI7RlmgIgJlnuUJHCy9rGlZlDC%2BwAXzcrmJ5c6jin0SvpDXZflP8qiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDDLhKF%2BchCwBqfcVOSrcA1kIK12bEYPD5bpfvGe2xtQNuBOF%2BVk6BGqwVseNB38dS7lN3FTC94PER5SPDb99CG14HA50Mc473At0Vvwm7uwRx%2BNUpdMJ70XmbLpDPCua%2F7hgy1jPOUxefGnkRILc2KRRJ3LquARPFZ%2FEGSX9jw5AvhCEa89Bqvz9ChVyWPiXfAjbdZdodU9SD5RWxvOWcAZvc%2B4pCl26FhIT7q5d2wLIbDijP280mU6BFrVgpFdjjeqYeBhMH9eOM5h8RBsv2uLSKxKchyhAy%2B3VBOmP%2F%2FKXh17%2FoPk29eHYDBNZoBYvieB9owIs6E%2BVBUimqhFGQWs6zfz4M3TBUYQOe6kUHtxlGOOqX7y0wF53Kp1%2FTrLBV9JvF1YznNiNIXCvKqZQTA9soW7U9x%2B%2B1R39G8wt0e%2BQCHfjFJ68sHOdLDMiXAGupUIZCa4NljQgfawaEu4%2FoCEwxDtWwAQty9vreLirTQOHOrgx61hOoBYp2EZJCFYDDskK9gbGuz8DTe1uYDbcAhZW0aWwNuUdIElBW0BRQuarDMgvQUy%2FEUn9f3c8ah1qli8UM0GQYjPGPBdVivsWuiR%2BNEWmL1yBO7fMxt%2Bycv2zdgmHKRn6eztMX072AvwTzWBA2DJPGNWk%2BmtiMMGZ1MkGOqUBA2eqo%2FatzDIe5fSu2y9JKFo%2FRWu6nOgpCaAyELUv%2BT0HijB4vVso29Zb%2F%2BtbtSQDPmu8y5cEamBCzJXov4rVZ1BLu%2BygbtT7WvNStUAjyDoi7V8ThJDVgvDQIujnuaOHI%2FqtR3nuktBkFuGzHnXBS2PC8kFcaOEsQG1gw0JTTypkQ%2B1svtomcVoRmoeRIEmaLHHNq%2F0rZZucbnZFDAFVegOQ%2BVEW&X-Amz-Signature=3d494aa6dd11d70ddcf221509df6cdf3ab6cc1e9ef7c388d139aacb74e20e91e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

