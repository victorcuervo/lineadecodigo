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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4667NF2FIZZ%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T073057Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQC4owxf%2FReOhR74vhaDCBC%2Bf2rKyVmPnPyJFhiu%2By69uwIhAOz9UqOx3QRJn5%2BZBtIAPtpxPkAAWvhob6TEgexk9TFmKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzwyVsI%2B3NT5JrHxf0q3ANblASIbxG%2B%2FN9OK4ZVMmE4dpT%2B27%2FDJeeqZMOec9HL4TcN5hnFaLBU%2F7l109fdUmt6HRd1zt8wQPjTv7t9Q81OeDArKe3UUnoqLefb1m3dpDMzF5fcbH5Slnblv8mS6Tx5%2FOqoHTQ5NCGP08xXfsZ6iAFiSPEZLeVjge0VCZKl3BOKWMUgEcGVSKWcUVcELBcpkM2FvP1YQ8FEf6xlWU5NDzCXaq0MRviyD2R1Z5rhEOO2QrRph%2FnN6CAiUyxe9J03imP5v3UU7XHiTTPf0%2BiDdFJU7%2Bso1xdwBBIYajrECMNPtQ1uflHEuEN2MNHFoy1%2FMB76NnR7ihyNI4IsjF6zzg1rL6NQfTJYsFoPlbYgKiXOrqp14qXwIVfLljlaXwy80l7PCNeGikDIQHr%2BP0A9IVzyvRgKJhI7tH0hTmuws3XjaQmaxJU44aMuMlZO7gDztntiNxQWVqV0FKi2YkqZSjjR1I17fE%2BTmoXUL2l4hs9%2Fk8XGz%2BBdQjPp0DbMwtLOdI2%2BDmhxIH9ich46d0znL9ftdHkuQbHCh9jY4WZ8aUFZhkLrKDLbM0xE6b303EAT%2FJvWFAcvEJ6HY5txIvQGePCRfbbuyKlhRa2xoktbuzW47XxOAZJlOwZuKjCh7tnJBjqkAUyOwGb0XReaV6Qg6TDJ0CHOMZrVhFPs7rDQ%2Bkd02bu3U1%2FZidDElXoUZtojuHXijAEQN1rAoD5%2BX5iohmTzJ5zDTbas3O1xvhYImoBYYiDd0G2HfTjo%2F1k42SjARa1OB%2BX4UdN6kcdRUPSkuMn4TO6FZYM0lTnepIt3U3iBKdO2FIZTAT%2BxE6rFg446DAoMD%2BeF6vWT%2FLX3BYpIPQ2abic2lViS&X-Amz-Signature=b46b53393f0b90ad738dedfaf9939e1a1096b8658580ba66ea27351ec0310986&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

