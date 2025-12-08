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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664D4L4DAV%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T214759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICkxpz5PfXXpwHbRBFEg96JmzLzNnOPjGc7iGyqOT3llAiEAna57hawtWM5FP1PYDL39q%2FhAWL46UTCAaXBT6RrsGgYqiAQIrv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDD4EZzzy9SucPZt4pCrcA7VtH33Rb7ZSpqg8PVnAR9HIqjIgXOXH4s4zlF3fD4%2BaOmE%2F6wT29k3T9qcSTn8sVMJwOhvFrquVQj%2BHLvgfzDYYQJ6bGT69NHJ%2Fm7KVSA3q7tSAYb4qzMPl0lqOT1uogPdU3eVTWtnsmZXQWPYnFlFgvNiqvu%2F4%2FrRyu%2Fuk1cEYmyrn3fvPmsF2WirR%2B4jt8KDRfMXBF8q1IlOGCjG0DPHPjuwMqQwcasTkNftWaCDYK543ayP3LV5kzkWewC27K4vMJwVrgqVQ1ZhZTIIFqVjtnlJmUtrLY348Y4A36atQvIbQ7OSj0kTyhJtLvCaI5IpH6%2F4qF052qgL6X2NIya7uyzoqKwafSNt26gz9m6WfhEgQHC66p7q5e2L%2BWoTETk%2FCV3hUzXU4u46unoStPzfsj5itXsYXXMUMSCS6ydpf7F0wRaycAkDis%2FrUmwZum0sQLt%2FwXpLL2kGNWRw1%2B8HwP%2F216Q%2FFdny3NZHS%2BJXKPc%2BPEy%2FUCJNaq5%2BNyMExoMaPqvELcEO18hPC0LCrhFWWOMr85DR1GLn9mikbnibjTVt3y%2Fqef2vx7awAQpMl04Yqi6%2BoYEqcL8PBJTjW9yhQAp8QOfhkpJUFk8SF9EPp%2BfcyRFBx4Ncw6X62MKiA3ckGOqUBI%2BijJBtGWwI5hNOGqF2Yfu4d%2FWbCtkp9Ix895%2FOqXSmg4IhV5ZsL91I8jpRPFsG%2FXzt%2Bcy71t4NN260hQdRwIxykDDym%2FvJ9QrGfrVX72ecDCVTu6UBDSuFE21De4%2FDpfngf8T0uR3n8GztiBLdzfJIbYdND3rATR3CzLHTicQ55ruCU%2BB1iS6cS135kyp1ynwkhd8jwJ0qgfVUYn0TkdA1LSxLl&X-Amz-Signature=36896df752d03127487f28fd06895e5a79ce399fa4c0b0428dcfa9906645a050&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

