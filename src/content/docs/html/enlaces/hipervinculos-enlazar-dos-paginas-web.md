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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RHSCER6Q%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T080001Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHcaCXVzLXdlc3QtMiJIMEYCIQCa4tee8fJUdXjVrG97NH11Y4OxkvjqqAn9eKegG0vlpAIhAO8DsUKQXc51%2FUF4o0fQRDyNsAB0xtxWYRds4c%2FCGNRYKv8DCEAQABoMNjM3NDIzMTgzODA1Igxi3NTsZYwRM5Zx1vgq3AMEfSpzHu6jWaxm0%2B8umXtk3zFBYMb9ckJB2GDVO1%2BBfvaye08SjS%2Bu4cURySV2%2BsiS1dKUkzYvsQD%2FYZbvze1ieV0dYNTFXMB5BEUYkJ7Onz16erK3qJ6VcV0%2FRk4dkGo%2FWwIrjNNa4RPhVwKLG4k4YVfhyxPWC2%2FCBDMv4k3ELvzAtehdl6NfXhcTBk5X%2Fp9FJ4k6GnT7K5stfZwPiApRt%2BmJtIzwivCtTJRppgahJB5WtmXQUUZFGt1lVcPhzuPs7kuTN2YkjlpBwgNJPmecXL5t8U0zqfszLcGF9rTXkjYyLF%2FtR3aUrGR7uSUCgTF%2FkVE%2Bgt2KCcBXOCJ5Mm1D25gspn%2F4OQkc4OsG8NyVfsubbo1BzgL1sg5KngC3XLcpgEXMac63X1YrQ0rXFTQ57kEUR2%2FAxWk94iRN%2FdYJytcKzVtoBFSUMJPsC9LZoDNhbKs3qqY2ALr%2BS6t6C5raLr%2BvgfkcMxmEt%2FaFzgqI%2Bqw4aK137uww1PcfDLowygcMX8isltrUsBQh4D3BlZUgEga1ujNgIZjLhIl8z75fM2ulrziKA7v0zmVtCej3LEOqOUIwjkR31emUwJ%2Bx2mbCEBuL7MqHEaDnU%2BCib7bgfn74k9qVUm8lixAI0zC358TJBjqkATai8xVFmywhUiqNlUMFPPYmBXaZ4MyPxAz2wYDsSpQohyjA3NN9zhT68Lz1xTO8LMh0POH0sif2qVpVgEXqE9DafZApJNyqU3qS%2BoZ%2BCh%2FcH3dfTC31KruUW570WKkpgIm2sJuf1m7WgpTo1eVK9y1OxpSyaF%2BwFmHDVRshoC6NrcgFZ%2BmAiJzWTCSAsP9B6UsjgjdRndTQffmicFxyxzh076xO&X-Amz-Signature=2d7a238141e2c4f95279f229e389c4aee24ef5513e716af3dd2ec7e998f8be64&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

