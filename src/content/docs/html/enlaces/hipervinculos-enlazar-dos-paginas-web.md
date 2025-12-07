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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466VTKNMZKS%2F20251207%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251207T022032Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICL5sKCUsnqGgxplPTTCnui8nic5lS1M3YmmgRvulCVNAiBparaROrjs0de9VDjbkDQsL6cLB5ma6IxSY7wl6Wz70yqIBAiB%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMD%2BYJNa0nTfDxIQyDKtwD9TDYOwrS%2FQ%2BSGU3UPItyFWPa8dWIuz%2FZV8Gs%2BUuBys6IbvfUEyNXckcHdnkxtWmNuyuDtGm%2BF9jV8p4Ku4OGkNopZaaG05qzNVwnTt1GJydiPSt%2BtVgq14WsAYa2iW2aRU7%2FQOhO695XPItH7TG2jPUncRUkMZ5twEkkQsjSUKfpDQq0uigwuA8QGqicjKzI09DTCaAa7k4x8dHGuRAOBRHSMsiqkTgzN9D4Rd7AJbD4wXZdgXkqGvrIQ%2BNVMTrz5N216%2FpBBfCYUrbp2%2B1Ycu3ldR3hOujToGwYVlaxlKoDX%2Bpj5EvTKLKK8fFBY9J3YQpLe23kvgqRH2ic%2Fju1lZRce6C85%2FKcL2M2AfGdvsen0M%2FqBR5shIbnvNBSnqjTHmkfZEoRu5veCvpmYcE%2FFuEEznk9hUE7RMzzkOc959WfiFXCukSTqtY1QsWX34odDpoEMkuSUeXf1%2FHq2fUsXXHamosi5gysSmpGhqI%2BjNQxioXbSJA3rGLhKcdIvzjtRD1Yg7u03Kk%2FfytTqWHXUMI%2BdDOTYf1Pwq5J0Kt6lqSCd6VUk58DRIcAOxayGO7ywchJMBYAlfOJAJqbs1Qcyo8TFVj6kpl9toy5dVf7SoyDgb74MqPCnV2gZQ8wjf7SyQY6pgGKDq74ntI6VQqJ%2BIRDBXlhFcKHNvDHLp%2BkfnE8fzWwcyP5LXfEyMRFIZSVVcEn1t8IyvNVfPOxS92XrerQdf51VVepkQm%2FnkFwxPyuf%2F%2B7CK9PY%2BKzH%2F3Bk3o3x9MI4lEmgs2fU1LU8AA0CLL2yQpcVJdtR%2B6Z9%2FjXZLj3WIM88M6Kv%2BizOYe2cd8zTuS2VqYAY5L9bFjTygl7ukxqlU4iabf%2BtgNs&X-Amz-Signature=d82c757a03c7ba6c8c6bb90c96ac5e57b2ce14e827a969d197fc1c297906f9cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

