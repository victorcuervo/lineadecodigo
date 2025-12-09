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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666M2V6MCP%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T024519Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIBbMPhmQsx6rgwcr50yAxK%2BxI5gV1vf3wG%2F0PG2o799HAiEAkkCcAbscjFKqUn6diwiwxjSA36jTV8wXmD%2Busui4%2FLsqiAQIs%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFUbJaQaS1tdFOiwfyrcA4%2BXuT01k1P23TLdwTMvMx%2B9CnPfpKOa2Ei%2FHbgr%2BL%2FYjLahJt1aDoKSWILt3fv2GLTjBxuOSmR7HOJcSmabaKbyNj5wRBsxla%2BrOvoc%2B3okkLTGtbJYDUMGXjZdb4Z7P4PrJutkeE22Hh8EqDw9Hf5Qqi9NwsT9sloNZMEblymPripnqAOvzO9cabVWd3EG4oRNglKu9lQQXacVHEbrjFlDZF1ytDIKKUx%2B%2ByWAw8gYhdDAmPa8Cp3fbfLfduHeWj7V1kzAbcv6IRSB40VlAG%2F9qpTJvD63BtI5oEUtu6AbutHbPQvqx4I8Ii8NFfO4Hc5y6oovPYU0g19o%2Bmi7ObuJmbg87xzvh6BSgqTC8iFXcz1%2F%2B8nyCJGRx9K9xFSfpOwTWGdjJHA1DZohaLlgRmZbc%2FZkhyd%2BFyT0Qz8kHEctjz5Nk9gVHfDv9UUgWIiRFzoZj%2FkbdHmNqw9fsrL1x%2FxI248XcOOYcfEnAoE7w4b6l2M08PjqX4f5ldJod7Wak4646DTLtDCpp9a7AyARpBnpgafMiXUxNfpQGYu6PamhdMEf%2FM%2FJ8NEHlr9cYlg3aMJ3aCZuGW9EcZc955Tx4y8G4W2yK7ZATDJw5Fg88masNzXpeSzLh8JugbwOMPqO3skGOqUBPwXiDZQ1MPq2AhjlsO6tv0WPurc4rQ%2FrGOBdec%2FfKuGqq5PYDuMVN8v6ue5t8bEt2h0ZVZHHLowcLcuofHrI5k5Y87f9sTxRcR3r6XKrjq8VFwVM4%2F9Q9I4cfZzUrFL3ej6ZFKEhjsYpJOEPaH3fwTPS7enr8zmwp08BKi42z3ezXjV%2Fdlsc19oNyiRVGGTFS0ZTYjGJb5CQUajHt%2FFU%2FKBy5CtA&X-Amz-Signature=d8af7384a373656b37b227f1cf4af2cbd701e4fceeb462807c4de0ac9832a191&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

