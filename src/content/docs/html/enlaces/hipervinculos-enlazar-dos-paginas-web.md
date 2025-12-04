---
title: Hipervinculos - enlazar dos páginas web
description: "Ejemplo básico de HTML que nos enseña a enlazar dos páginas web. Base con la que funciona Internet y que son conocidos como hipervínculos."
lastUpdated: 2023-09-17
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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466U4LSSMI2%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T002920Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHAaCXVzLXdlc3QtMiJIMEYCIQDlu39sTwthDyzLxH28SMpar9FUlSvuFiNFmbR3KGJNvAIhANikwmcooy2D6JdrUGUQXxyn7aZDu9qfxgoDRjbdGKVsKv8DCDkQABoMNjM3NDIzMTgzODA1Igx%2FwOYWMY5yhLcpXNIq3ANZr4lL32JBkswwixQBbAtDelHH9%2FBtHkCJbyQks%2F8CTLSVI1UTv%2FjT0AL4DKnwcoCrUwi17DiVPzotRlUEymaxxEPSxWVAAp0gCWIvW%2BSL0TYWjo5knf1tO0M8vTbSeG7LFg3v4PVpyKZwc7fFj6djgBmrtMR7yVRaPjdkq0S7wgVl8TrA4CN7RKhq6xBzyMBCqvyZyxURs4yiPrOn9doC9YGRZy8uCtnzxTH%2BzScR%2FRL8uja6HeZQdjX2JIkqR0tfldNG0p%2F4k8ihh13MSMZL0JU%2ByEwIqDeW%2B9yAF40FzRTctXc%2FLOd59j2IdK9yD4Zm5ZxSMWopnqGihUn%2FWLRqx4NGaN8In6i0PgH%2BQu63dm0ZSseznFqOkPnLivgUp7JroyAU0PYBchXd5DMluPaLdqeM5xDFgxegG3Mx5c5Eju2gy26NRGr0TjDa1vA9iyUnkUEaPiMS%2B766FamxddxV98BpG85B35Xk3HMOv30DMpMp2vbqlQ%2Boa2NNXISNZ0FqBWdAiYjDKjCn8ADXXNe8xJu3asfnVyVr1PdMXZV3cddvequQ5zr2FwbJkBp4PihadpAzOEkdClWGYp5TSm31kUo5tUzShKMYhchILB1NpzG67nekCdO3Ou0h%2BDCylcPJBjqkATFdFOG8QiFZ59dx91Oo1HI6LPVymnwdbr7lRnTzAl5q2qmxHV7mfFKr%2F%2FLJZMjr8%2BPp%2FhCCQjMqMo0iNy1UiwaVlOAf4bksGos63LnK29DvtJTKWgvxuxDCE5MZdPejZRmNljwbkURXNImdygHcRFqszf8Q%2B7JMBzgI6Dqb3y4RGEbZtn%2B5muMtCySKkT29dhrJzRkPFAHRd8NFzZdBBjekB6bV&X-Amz-Signature=3acdc15a86dde6a49796e531aa114ad49da27aa4c701cbed62ac1c1706e37098&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

