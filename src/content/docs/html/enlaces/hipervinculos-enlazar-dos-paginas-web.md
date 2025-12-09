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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WALZCH4E%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T230156Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGBrksScEyqF5rcLomU0fOPzSmm98ddSAZg91S6oj1F%2FAiBpNWgNIrQwFIO5eLNI6Vta5A2Y1emzOEKa98ZZOv0d6SqIBAjI%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMHoGZg1jrBe5vpeobKtwD0xoaPXdwD5ZAJE4twVGzsasZsReluJcOsHxTJYLfQCBaoh5HpFpeMwh%2BInQZ%2FU4PJJh%2FsU9vDgSsghutsmVTHyYRGYo2BkjTcXiUEDsFpJL8qkNnRlzlhVXHixra1xRCw8Ri0naypMWCjAyN7GePqIae7aIntTvwuTZ6ABHSNFhfrHk7etB3Abkhglzk6S7y5jhlIkcHEyq30PuPUSwHAFK1msG5NVWPK2IxIRPPqbR1rJnd%2FcslWpgxZW%2BDa4k9KsxEYV0as8wI9NEViDssbfDjH5%2BTt2izd8Mq0LF6jUv4vekwF0dmUihupz4x%2B66xv%2B1WLdynURWVnMv%2F6vt9Auy%2FoARI8QVv8rCuSVhy7CX3w0ltr0fO9%2B%2FBFR1woi3Hp3pZtz7GlgwZeptugMoxZQUTAlK5AIF%2FT%2FFNKOaPZkVygQTKTlvU9D8URzQorYAShjtCPVJ8Dw3bI%2BaulGXQGXdmWfmbsnXpiVJ9wYOl1xB0FscttlHZWU%2BNcHburl7yBLv4wP9PDYzO9LKB4BU2%2BPB6agRL2AKmB27%2FTuLHajqq%2BzJ9EvTg5PUGoTxhnaCxtYmIFUfA7oPlS4oEKrQyhBUN6m93%2FsE0UJWzHD5Aa%2F%2FHDFqV7n1nzcvoc14wosTiyQY6pgEMRZhGenIi0gWuN%2Fjbn9AAh5vxKHPBSyVzEABTyRNFJLHi0JYLt2HzN5aIUkgHz9Gt6UHrHhAh3r1wLiSCpK2m%2BOTz9jV%2BuA7E7Cuwjcita3rTm9YxnflMj3xKKsXJZOjL88EBJVun7FQs79PlT4Su2i2bhYim%2BH%2Ff5vWwN%2BO9RgE6MfF3RXOSK%2BtBeidA%2F9omxLAQgW6WpzqAukh21d388VIWzFLc&X-Amz-Signature=11a96d664f2dc948afe9708b9d376a08bf68a7f56e92cbfb8b810289ea891839&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

