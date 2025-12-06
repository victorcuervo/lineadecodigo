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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667JNFWH2D%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T214952Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELL%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCICyibRDwUJzv2snwCQ6rfQtBOIkVf0S7FIW83ehJUqzVAiEA%2BjACLFOt3QSD%2FQMjrBN7uqYtH%2BTqSvarvhWP3MjTY78q%2FwMIehAAGgw2Mzc0MjMxODM4MDUiDF39ce6fD0RFp7A9CCrcA8hUQMigsT4dQOUNS02A1SeKnI7NF24a90UPegV5jo87OOn1ChO1LQ%2F2opy3OHtuasaJdUoiXR0EHfb4a6MuQDFSRf5JrLog4FoRNzBHvedk%2Bwxi2PyDMOS%2B8aG0TGtUkwEXT2OA1QJ0nVYver8tjO5bCret1p1MDh7jghIjW116FNpoNVXNPIZ6S2YGU9CIFUe8vLuC0GbpjL5em%2FvMq8ou7XzkLuyGQar0qSr4svzq6e%2BExXq6alxRqHrjELGy%2Fk9qHOqn%2BaKDduYKhQCWe720LYWU9TAfCWY8zWkB3KP97gswE%2FW0A47D7FzUI6r3r7%2F3NefFKAwSCyYHdb8rWdm42icxy%2B8UOZcLfFnaVRRoAft8t7mNhgz1rB%2FtAoeBkXOVXdZ8SMvog8enkJ%2F1rKVPaCIEqli66Yi1YeOBIh3nLDbVyiaO3AtjnIT9iVDqd8YX7mgMGx%2FrQk4sCT3bwgDR2PPHUtSeghMX4U5PAaoO8xKjbF32xVvbffiV1R5RgF38sApeI5Mb%2FdvJnIK816OwtwSW3czcc%2FU5c0sM3HF3KcIlZiKNL%2BYmnRakP2yxp8GQ0sKTJWCICXH9TGU37UsSgt3j%2BP5n9ud5eFJfDXiqZZbBVPethyN6rWYxML7L0ckGOqUBkHkhwmcxxsolwqn7CjnCAwhd4scpITkJTRLItE0B9RpQuZaEBuhVfPH%2Bdg7a60Busf6pii8k%2FNQiwKGIo0%2F0TiiZZuOXfGDYftRhMtlD9YhFlAbGIvC%2FzXAmAgdkCjqIhCJ7tgVJNb0AQ2LKs1m5RyObE1PWAS2u859hw2NFSq27tCEyRN2DoJ8%2B8H1A2oU4MV02%2FUHWY40sPWt%2Bfi6YANs9dkmj&X-Amz-Signature=5a3e29f23152be7ee18da9c16d3bba77fdf5032df955385f722ceb12e919caee&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

