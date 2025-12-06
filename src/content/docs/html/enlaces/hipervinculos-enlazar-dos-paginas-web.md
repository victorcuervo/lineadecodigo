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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663WN7B5UJ%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T064323Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCawpdommbX%2B0F%2F4xjwNm2Ho808utCCwvbtZCwMrqiVTwIhAJRiVexHYTjf1Y1mwgZXlhwLszU7PMeySldF2YBimY48Kv8DCHAQABoMNjM3NDIzMTgzODA1IgxIkNnsr8TETbHgXBsq3AOu4Wp%2BEHmaWMIPs%2BJeQ%2BKn0IR6H1MFPLei9pyQzt%2FEPbKY6b8%2FIVo%2FBAQS8sQvSRLDBDRFllPuHGmrL%2B6dXa5ds5iO34cdZMUAwGbexsQhC8878aJdHkjqUln%2FKJLqc0SX3sLyXtZcecmpqOvT5oRoofoV5oSFFjQ6OogSskZsaWWtD8kWCzHBo5sYO8CT%2BNDI0CvmWxtGN5RBNjC5HQhuwisds8fm2P59eoGo%2FHUAsKtodJdWDe81IhwiwBFtbKpw3TrShzn4unTqlTs0Ql8ZYMINvCb6L6Fptmxa4HCGfJ3zozYmrLTE6uHqDQOJ4ZtTUdMmN9XzPQBxKyNXxNgy0B5ZZHh7gLWOTebQBOoSyoqy1%2BjzQTFDjBfP4n%2FApW8%2FA05xw%2BbbYVFktTfKXELeBbvavwYwASQRJ0csV1nvuipK9XKJ%2FCKx9z0db4vgFKuMyx3vxns5cXuaYxMnxohqqFsTmWgC3l9TyepMuauuuIhs8BlV%2F9Te0fISFjFlt5Th%2B2NI0HFB9flPocIe8KS2w6PsRekkPF41eOh44EYIUkFbkvIUH0T%2BvqQuf5oSIfF5yqxKT7T1LtMggy1%2Fdj6VaPZS7wXYR7fs0GK99AKMWOsGVfggyO6%2FVJPEezDfns%2FJBjqkAZsrYhZZFb5RqiPelqGIOE9XzmF%2BpDzYg%2FX8NF3WfrjiA8sm3I0GIAH9ZFUudIVWcXs3TruqvG9pOrmJtVrzfJFlz%2Bmp3HFwTLoojgIwaQLqORELKprsb68eRwNVERj5FR5rGu%2BJoyQjtks5Nl2hUqKSSESPJnXobRvkjzXngrYL6v1y5IW3gsTLYsrPUgQbzJ0Xtq%2BKVsfMo87J3BYG1Lp1geVL&X-Amz-Signature=efcbae0881e365149fecf9dd4347c70ca7c5a63e599df40d506e4be19122ce54&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

