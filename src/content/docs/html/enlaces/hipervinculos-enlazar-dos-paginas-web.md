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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YNMETOQ3%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T225904Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDxvVpVmUHv3eVI%2BGpl7Lv8uAF4qaUfrIaqJRrFvQsRMQIhAP0JtOifVpMgE4e7ykgtFA7jf4LWNereVTZc6SUteNsdKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgxCYbWzh%2FIjBaVJq3Uq3AMU5BU0VHms6OeeKfLbzbXBeVVlv0%2Fiit46A%2BARz%2B3%2B6UG7k9wKI5XMgthWvCbqZNJb65VMFrk14FCNFhfECbMxSVQ7jTh%2FMIs07vXwUiIkHwViZoLl%2B0A5FWu%2BmgEmdwlZOgrDKmEbQ3xnK9LzDaT4H5p9QEPSn8uKV%2BewmfSFj3diccI9%2FiSkJyhhiOsRqJhkFEneAf%2BSAUSNAJgApvAjpv1cqAPOYRdeANIHAB%2B7EDyNmLqnUjg5VVeiXBYiXv%2FcfjIvxZJi9Dwy7LlitSD4eKUFohRBPyMONZ%2BQ7oy%2BW9pxUCKmA06EqFze5crTnZZO9mQhL5RlHvmWzJjC8V09L8Mf6tPyC3V%2FftwmAufmJ7yz2wvG1m%2FHw46sV14vLqX4Vl5jC6OKUQA6%2FGWKPy%2BgeMZUjPZtCZO4aZ0kCG9I%2BlZzue2zlUZrnNhAMOQ1ra4f0J91u6INlm03lQ8vAWdTR3Exa2U0jdUQAQuqm8loxObmqJXgraGMms43eZ%2Fyxq3SOosaPBIRCs58nAVBjW28qjATxCq6QoBdWe%2Bss7OVTuAVfLF5E499BheEmVL%2F6b34CRv0oHgYWP6qpKlNjnBf0PUuzJ%2Bx4OXNONO6M1XkoAbEgpz3AhQGZ5unUjDhw%2BLJBjqkAfB30fysE63go0%2FM5iPUivLVK9OQ4aP349yUaoG74RZuSNAkY9ot8D%2FUeUbmgoSzT4cZ0nOieVbUnT2MetFhfpzabM5%2FJUMi%2F5sZ%2FXMlsO7C1GcPWY3aKEtYya1s4G3pZCdLlIGpFC%2FCV1EnTzSTPNOwAhiDMmse4tSMGeM%2FOhzIfdcJcELOUOv7lgI8TTl5X%2FPA9CbCXLFcw%2BsfjORY5WAGJ%2FU7&X-Amz-Signature=a2d05495854cb5888846bdb27946c95ee4b623813e1e0ea86d41f9fffc376e81&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

