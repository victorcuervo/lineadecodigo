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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SRZMJJAK%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T104331Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD8J%2BXN9YqVDXdKB%2FWLjL9oSMq2eNJnTww5%2B1sNzmg0ugIhAIFGv1gl0vRfSC%2FuEDgvzFA3wgpMqt9ZK1oRNevznuvPKv8DCHQQABoMNjM3NDIzMTgzODA1Igyd7DSgvRRtbvaQF4kq3APNpfprUsfz2KWurH0HhdittwlYTMqwf9TFRnqr7wxRUzlHykzVg0UcEAUI7Lnb6jgd7v%2BY%2F4vbjUO70%2FsnItmNt9hyqxx5JgVgJWPGcigR5wdlfw%2FQ%2FEQ9jIfj1irGPcjBqFpa6OJW47tcQmXSMnBLlsuxZsPJqZ4vL%2FQrn55bMb4ducAVbBuWKj4d5dRZ7YYGopOggwNPoeJrwBnUYF%2BwFoYFua2mvdLz4t%2BI1ZGyiqsmSybN%2BNR1hIMC8RfdfQOQiRF3GrZNyZcMXiEPGAEOi6UAOwW%2Bydr6EaVDKxNGp9FVBKjdf5vEjG5YAOPsRI5OBUy74b2bU%2BvZpN%2FCRoEyScseY9uDOBUQD7sfmJ71%2FY4Psv2eP%2FPon1fdOmMF4PgytU%2FfyQiRmEswszmTRS3Iw1Kh%2FEQ0eFGbRc3QaWrSf9qALsfUXnn1lHIJ3kETXb33YwlYcVpalgQXvd7bf9Ftl9BUZDhperga%2F7xdoHr7KAJmqt3wcOsjkXlro24bckLiAMpClKHvW96ba24uzM7LPoynnkWXeL2cndf6X%2B%2FxR2JjX02Ww82okfOiG7QtNaEoXHUSmIlPDKnQVjx1RQjP%2FEhke93ZL7vq2rSVmMvErjnY9Dp4ES4G2174xjCcidDJBjqkAVL%2F6KpX5CSds5zDaJixbuKqPwECC2d70BKfsMptEfp1BycBaMDRsmy4nhqX0hPWYb6vz%2FBKrE8JJfU1VtirOqKJe57w0jN6ueicU87b0z26GVYKaG5bCySPj4fkw9kd%2F5YShADZ8D1uydePh%2BbA%2BNLStPpQmArBxWsyLGvKnlnsZ0Pxgn%2FgrdZKqPxcXVxqAXpU8hQAfsW%2FdNKqb6K28swfwnxF&X-Amz-Signature=26cee0fa32f801506268eb0de9aa9154175edf730e790b450b61809dbe70d492&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

