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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U2C2LRQS%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T191538Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEPv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHfQyK118IOYYeX19RuqaJWePutbU%2F4LtvD7JseZMtxoAiBSFKdgfwe9jNb%2Bf62h%2FwUIm%2BT8XF9X7aCxO4hkMzKAQyqIBAjE%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMXk1fHAubBIro3CFUKtwDwT7NiP371KGPgtplle8O1hHcRvLpkugQG%2BByMVdx%2F4AlHNnFB8CB9eaAoIYtf%2BkkFXe530jxGlBeSwfQ5reLpd9Lt1ArNSIQIROROT6cLoYs4Ul2imEdR9z4HRPYbD0QmnAYtT3j6J8B%2FiKvLpPlTLjhsfmJXdrbwJ9G5evPfUP4yXI42y07Z6pwIBdHFOYgsFhA2jvwW4P5XMN%2BM9xUKkCeph5fDxqVMnQ3QKqKH6oCOjwXA3e6BsR09usOURZR0WRP6rXgjYBR4hGh4F%2BGUUGCHPf4cq5DfCEowt4Lh3LBZZtKOgwnlhMiBZUaA23oBfQQUIcFEPlwK%2BR%2BfNm0F7GQIwlTjbVCNZDN0VaqSiPK%2FV5MKi3BoTOSIkYgkeHc3rWdmuWagfr9hLZ%2BtLbzHdXMHADHXc13LYqSfMTiusQPOZoqmG7w7aw7P0BssRefI2BoIIFFXpiC4zgpfNqJ9u7D4pyrMipvaeU9z3MHHZzM5DnmXQNu0aiDccYMYVwfytnI5UB%2Bv2gVrRRNuT%2FZ7vC2gHDJ8Oh%2FYwFhWwmJgg8u0WTMMT3hkhDAbzYSgNkSdncQBOYv3cE05yFwzxZfPgGndx61qDmFWEIAJ1myGB0WKGQxnc9e%2F2jhvGkwp97hyQY6pgFpJIjCz40wySO94Z4yTVJdGGTC9JcQWjki%2FteKIqEQ9mrRY0x4wFid3elq7ocCrDySLjvaIqmU6oMKXR4NYQXpmGfUNTbaZGyiN8xgvMI4cK2LJ7uZX3c548HbCzHpi8FXHaeHvNbUmQDV8aQp%2BeoHGxCH9D6MmoPkO4qm4NyN%2Bm4E8THaCLg2HmLlLMu5OV3mOjqWpI2BZdaPXPiieiK9w2IIW0qv&X-Amz-Signature=c5b3c4c72e3760e29d0b2c0091fb2f006ec71955adcfb8a73bae63c411b7093b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

