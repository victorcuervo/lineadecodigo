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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466QV3EGR2B%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T082006Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIDPCHOFJ9RnxFF8E0Edet3HizOMBXHpFU%2Fx2cXZ8G%2FLHAiEAmKUQg%2ByRrPbUEdlsa443FMhfRzVy4RV6YDZtbkx6d6cqiAQIuf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFeV8szW%2BmJeoCP06SrcA1y4%2FaBPqDcvqTgcRAqQ1NNq%2FR9WBXhEkd8VPqj8Me%2BhNV4lsuIR2TH%2BEfb2ELAWF8SluzSevKuZWLUeqEDaEUW9m6zcTgkyEkf1Na6j7gm6AQhf7DghcALtX1SNu1X74fxTsrBeYGAG9cUn5lBDFdJe0rHxiHXE4pvvUaD%2FngmFxhb4LTdQ9XyNc7uJEwI9IFrr215OlHHmrupdUpMZlyXMj1uOu%2FCes%2BTt9rqCW3LqJoAtsu%2Fgzoyf3dm1yM4pcLhoQdVGIrIxhlu3a6uvF3WCqW7Y1hYCpn%2BQ98xptvksP3GcEcorAMQiXghPH4glJ6UsWxATSG0A%2FrBViT7L%2FoaLIMu9KdMAv0XG0LvdLmaHew0Hk4frvn2hKI83fkvowBrBE13oGUyRk2S4FzxmEfN6Vwo5fUfTzOen8IcIflXVY4BnKwZxnWd15IXgjUxgTQNMOpaxX6yGPDn%2FPgPDCjJfcum9x4%2FBmC2KeUCzV9i%2BkYvvjrNMVwCFlZLDbLLPKLe6%2BBYqUxwD%2FDWy0Ote64FA9vrCy9oEVzis7GyptciPrSOPy2GcIgoNrfMyfMcof3IBekTN%2FpXY%2FHaT99YSB74nK6beHcVHuy6CzVXNxm1O0hYViO6EwDgHTj8jMLil38kGOqUBtW1pqaPZ8%2FAcNGVMpjJhy1tUYe5RRM1vz2XKukgLcZIfpOJxDGwlUitGqrQQjOiK%2F11tQxQXm9lq0cUT8GL%2BURPd5CKacbolknV61DTlDnaghxA5VAwjt4LTZMLONLfyp%2Ftmt1QdhEZXndSgj2zrK21pgUhhyLLdGf%2FCH3olYfp85HxUed6x7D%2BhUMptdyKjOyYKXLvAlhILRR7odLFbp8Oq83XJ&X-Amz-Signature=61de553f43440c3ac1c65c9cedbd6b9638997a30c3ae60f5e8a5982f081ec0f8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

