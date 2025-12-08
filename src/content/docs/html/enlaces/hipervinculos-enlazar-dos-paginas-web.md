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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VIQWJDQ4%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T230525Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD6COnyZ1Y%2BLRtIqyUBCx%2BXcPqXxAVNqseu1nTTC4S4PgIgAuxnVxeYUMK6oV%2FCdjRklnBJbC0mnl9Y6oI5y1Uml%2BAqiAQIsP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDMn6nqbfi8yWcbzrZyrcA8pUr8c5WLiEV%2FNKRGjfGcb8PK3wviKEQ7fSLZc4%2Fp71zWbrjJVJ%2FB0PaFWn%2FFUVbg02hrpGDCyFRAP3Dp%2FbFl2YN%2FFjVYYSgdJJxDzXTPLD6UY3gb0BcyjdO9jyKNSyZVshaJnjn4hqsEsCGQq7lAeP%2BnF1W8PmoLciuZ1HBuGFKfuhEFqzzGtU6sT2M%2FziksCNiY26mUaS2MZi7rfuYLwoKBKT6Cr2cui4NoeXNPNKW%2BU9UHUNE4WIJkK1fgH4v%2BRVwR0tDIFLkTByNcXx%2BV88Y%2BpRUdxsGPk0Uehs9ZTSBI62%2FhmgbVxvKukd%2FUSo6zV%2BRLgnSWT7oKfdCOmICHUj%2BL432cEzelS1ia2r7hizTV65mml31cFK2QK1l%2BDgD%2FUg13VyTqZqaJoAL%2BbqEPb7EWhu%2FGnYjkan1vOsk7e85pMqhYDoORwPToqzBLf3vODWPt8VCt5qXPHovryaE1WcMj21O6PxXq8OnytJBMfw8azDTiuHZTFazvwg1XQSEhCAsn6PDWDCWB32Fze5ewZWVw6mfKRRvr4vtnibNNhPu%2F%2FCVmlPAKS4zxa0BEdXeUtHYzszExP%2FnFBX8yG7%2BaQY2qZhT6U3SPdXvA2jnVS0x4c1aVrGE3WOYsuMMK2i3ckGOqUBwqGeIajCCo7a224kOnKlfQd9EwMigeVvPP02PMDJhzgwoQfW3%2FeTf0dms3KBPTn2K3Rz3NzMkUfvjBjJejzbz8PzLHQ1dLwEt8O4sYvVIfRIeMsdz35LwpwVxDcvADrAGFlcTTaBFImsq8bl7iZSYqCSzDSRfB7D16837l0ncUqkJUWfHPhaSn%2BdC8OvwmD%2BV4U5Vb5pV1fZIvOy1yPORVKCpUkC&X-Amz-Signature=aa1ceb77dcd4e4b851741bd0f492dbefe509b29d470ec5d0fdd6fb0434d1c6b6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

