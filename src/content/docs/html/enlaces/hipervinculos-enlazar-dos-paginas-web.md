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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663P4MBMVW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T232552Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCkDXTq7GpMrF3I%2FsDorht%2FTUBkNrnDk1hDl8tVGREdIgIhAMd6kvAyR%2BrMp3A2m9POQHQmTTqoTU67h1tsoXuylKVxKogECMj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1Igz5WP22gUr0VSvTWMoq3AP8YRztw73myx3fOh0SQTB1q2EWxD1A8b69b2EEB4niDWkKKWrNI0WQKpKwtRR%2FSYfWzkmIdvCwWotdmn%2FA1C7VfPdrIjTTet5M2om2VS%2FOJqvBItbylLt0744XW28YbycZhgEctWjyOdU%2Fyabl3Rh0a6C9pfOjqkqq%2BJDD29bb8yWiKdwzMP%2FuDyRKa40O%2F1MnvBRxwJuU97GartDjC3zSeq9AraLK4XVsZ6IrFIgoQvpDdUlbcZ4BJavaJg7oT%2B6OVGGasA10r5b1aPWuV8ViJXmRaZqhNEkk%2FjoEXCaTvl5DdFZQch60Du4QhjnHE7Eal5Z7jqg%2FQz0ifvii6NapSDmmImPmEeeyi0ii9awC0p2l6I7AD2ZX6MPu6f%2BzYN%2F%2BcHNpHVRwgiMjdONx2U3HW1oiCDcAc%2FXK%2F3ikzc5372SnDAMmPL7uHiH8%2FjZohiOv%2Bp0omnQmYrCQ4kxV1Zy6YJFF%2BgvrsrSfEzAh0%2Bg6Qr%2B2M67yeurpnAAN8MasBBQ%2BY0RAjKjV305LSTsSkHe00WCATwKPzy7KpgaNE%2BOUSbrt4M1tNDQTFDE3yJiRJrkmAqw7J5e37k2wNSNM1k5BzTd2lxYl%2Fd26Dg7H2QJBnM6K7cm8l875Z%2FmcgDCexOLJBjqkASBvJEqp3MWvS7LpFkW5dg%2FBEYFJNbdhWTuq0ShJ%2BrygK6pjv2%2B2R8SJGHGsX2%2Fsi7wRmoYbODZwj8geSWbo%2B520mG17Njytpf6j5X5akXp%2FNHQdu6RNwyBWIUMrSUUIguUxJeGkkjqhiiWtFp5MHf2cfvg4OHVJYy5F3fzfQecimKWXw6wcaqKDIm3OWo99%2BQFGzGnzJqRHhvRUZB7kExk8FDDQ&X-Amz-Signature=f8b97524f821451e534ee4e303280b3aacd69485fe125b9bf34d34e234279c8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

