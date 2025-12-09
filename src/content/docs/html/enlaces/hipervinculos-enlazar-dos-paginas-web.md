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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466USIU3DK5%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T232838Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9SjQgV%2FGcpa8yf%2BvYXzSTPc%2FE8cVX5cRhOhqXIE9w4gIgO5oDIJvZYIKs0usJvewA9HyfxbvhG6hyDIoyI4qnXnYqiAQIyP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDFXhmPULz6799fWvDyrcA3mzCbm%2BoZUti9Nle5v313zKWoHlYCM35YOEPh9DoHoJUkcklpOiYFHjH%2B1THGk%2Fw8OUZwJfwySxI9%2FrI2R%2BAQcFJvhK5Be1Mq8snyS95M5tUajfjnxoqaAPYZV7eGJ9AM3mq5WSL3FOFgElYH5rRbF3e45Te3bvOLHiaJGICvBfNQQnrwMkuzpTrzFe1yJTJvtNSUI7YwsRwLM2qVcCRyaLtGsSEVSVPeGG3pGfWVL9b1yUkgwHOEJrcQ1WIOJ1aFzxHQggI2A0FggJ8kDQUpvXbNwjglnC6WIl8dvPZWc7PTTSX11%2BuALCXwj3psu9WhnUYhDkA1NpEXXh4iBYoyxT7n16Xv83qAm199v6aHwvcKM5JddMgsWdiu73zDCJz8evaaujT8F0bprIAoDllxy3u0CGbr450n2ZrY2zo%2Frd%2BO%2FkZeKiGJFctKoU0es0vP3Ng9m0iYdJAyzPZMtA1Ysbq029oqymNvq1T4EoNq%2FrSFkmnc8Pch%2BXR6DDDbz2yozjfz0cFWLMGQN%2FVaX6iyxGCGT0gLeLczg2cRklg%2B8VmFonTc5TCxWjtSfvx4xlscte3lh8tHG5wzFbrrIjvLnE6Qa5u4dMJwaLUDm%2FpQqmUnZmB6%2BDHk8hHFshMJzE4skGOqUBAyHfCglg57pSh2IlzlVTqXXwQjcqC7j7m4HQcYoTufsyGZnouupJKuE%2BYnKB8uI45ufIU1mghfQ%2BS%2B9a2gw0SjKPuC4OEa1S0DeVvgNgjX%2F%2F2mdMm8U0O9dS184igqvzU%2FM4JahG5ibkSS8%2F6reJrAYGpC7XIMSg9sLGrwJt3gJvB7IPe0b%2BtkPQga84lcnux3Q%2BcBIVkU3PSq6FzUik5ecPZuA6&X-Amz-Signature=28cb5cd445598678b427ba9182afe6e646b5508cb7e3299413403e5999f16896&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

