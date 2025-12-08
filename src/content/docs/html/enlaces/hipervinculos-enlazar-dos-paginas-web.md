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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W3FKRJUW%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T195458Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEOP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIAnAcCbReqNYoeRl%2BcilTPRgADVbepAPh9ucfPfHXAj9AiEA%2BxeKRS3L%2FT%2Bzp4hrbvGGpqBihMJmJrxHapjcsOpFXpYqiAQIrP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDB85ieMn0zqpQ3GTSCrcA3z6GKmBdpt5WiY%2F5knyekXmZ0uKVXINkXDxvyUO8M%2Bl9shOmDZqjEJNjpgqWzokXEmwJ2%2Bzleeh9IE3rz%2B7iu6BVRvMOKJFyP9G7tNesvYXplY1ljDkKn3KGiOOUMLk8XQnvC4OjMlnB83NZw7yQOipWUwhDlwSaA%2BD6Yc%2FqAVMWrYQGBL7vti8tysPhh0FX3TU1HVEhqLrDq4rZoeOyUvpZTFdgE3LW9YVJQj6uEWUPe2G3XHd05akrygjzO3ATn1fv1%2FFZv2meZFTLydXloxixgYOHrkgNIuFBLeg48WUJ80YMf22BAFm%2FYTp1SOAv8z3Tq3YzbVbh8WpEsHo77OA7ChEt8zJ0KFa8sTwYQnBdpaFZG0fwoLwXuQInCKoIdNS%2BxizaSZJ%2FN6CVl%2F%2BkDkFb5wLAgj5p%2BTiwQvKKCPsb%2F5yGF9VI7TK7qyjnqZVRgYVyVogmiRWOjWLjPdETJVTKNxdCSG%2BO7elHr5dIEWz6mgAbEF8oXCj5rD6doOwN6adt2f%2FMJhjQemxTQYHDb2%2B3C1UhHMIGKHOjt95IWmbqbIUxr75kF1la3mZG7NwvzLu7d0rg51zMmH04AYHNQ26oeb8733oo2uoF8ur5gL%2Ffr3TWqE%2Flkc%2FOgmAMOa03MkGOqUBQJOy4SEQBdn1oSwB%2Fqdrse89arfHc4nOjIu634LCQImo5iBVaHffEwe1LzhBAXTdT18Xl%2Bh9DrfPoqWDyneiLKb6vF2mAdS0DlS4ZsCFom871cX4Eh8T%2FwGeyJ6I7FB1HQhjmcKAGkAWJzQaPTFtoVV8QR1MPyd8B8u2A7rZZMr6AQipDHTnXMW7DcCLWKEF83ZWDOhJsIoBoMPkdfROnMX7yAHr&X-Amz-Signature=4cedee7629b6205ccd626551ce7a56b55abf9510ba8947833dff5e40cd3d31f1&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

