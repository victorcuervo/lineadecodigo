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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666SE4KWIC%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T080351Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrOm1CD7IOy1C4vHEPClmljZ35E7RmxFYT3C6P9u5OVAiA0%2BAVehG81JOdOt0zuOXOcSnQqGr0zy86ijgeDj9WMqCqIBAig%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMtD6YnXst3q7Y6Tf9KtwDn8OTPck3imMzzd%2BSEHd9Qeurnk%2FtDEHAgEuXz0oPYzdLvODoiiJHsM2UT9pJQccAYT9DFKt2XHkVhT30mwrMPOTn1ow4%2Fx2M%2FpLzOhlnfMf8iFL%2FI9COgQtDrIDkPOdtHTBlU8fnGx%2FroWhLHFFjGoBsimW49Vib2ZTHmBDIUE7F7Jws85lSy0TUSIvskiFjoN82AHMmuAJYhm5cfi7XNN3F8fnqumEq3jFiBL%2B8bS%2FmeM%2BObPwbTl5oAT4SRYuRJO6s7rkwwkHsrl52UiBeDtUBPT0FX2kK5%2F0Y3WfMd26aF4qz9xU970HKEwiiOxgmc2dKALUfwrokNS8EYb6zyqu9esbXV5%2BtblFBQvT7z9krIA2ysLJA9h9NMobQWUYNx71UeT2m8us3rXKNxCD8EvJndNWB8icL7iOekJxLkRR7colZmhLABxOX447zzSLgADtAVf5D73oXet7Ru3Y5ouLCt7OouwcdjjXClHQRHx8mK4VsHMWf0rHDHpL6qErxic5YUjPQYhDMvNf2ktJGh0fB9PbLHP6eU8VjsYl2zbqdDdwSSYy%2FShWQSfusLatX3CQUYugK%2Fo3vd40D0F2FJj%2FsERDOHmW5wp%2F8LMdHIJZWDybIys9bCeC7l8Eww%2B3ZyQY6pgGuZwlJSJSnozzecOoFgzDeClQ6bl0aLiJUDCyYv2hZ8Jnj7OuG9k3FiuDCvlvBg%2Blr%2FEXCrMhskq9%2FkhyN26On48AMpSKyAC%2BKZeNikcf3cUMspvatBJuoPMBi27cg9zeGdrPwl4l7jWqrQNA8Oqe7gjNvZ8MiEuxJ7DKCBFIhmNqGqb8I1BVuU5iw%2FuCKnIyv7aqf5QaELKP0iHRPMHbMgeab%2FBcl&X-Amz-Signature=72180aac69bfdb290567098e9619c4ca8725f59d1da05b088166d28046c4eb9c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

