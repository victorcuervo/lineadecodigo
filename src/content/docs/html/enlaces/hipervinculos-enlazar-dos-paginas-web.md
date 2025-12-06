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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666LPB6Z6H%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T220827Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAy77IMUUPQaGw6rKqUWCs%2BcG%2Bk3qPK8JLNzXWl8XQQhAiAgCPAFC9mnUlNVwjzbymGphqCrPxvr19P%2F1H1XtniZwSr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM4TVr49f4otnhPK0NKtwDzsELERmfJMj9HQ%2Fti90PuZMkMem4poRVfe6rcUyQk%2FHTrvNYyszIV8xzQW0a9cAhp8SOWWRjz5AOe6BweF%2BxOvQ%2FUZLhapy95iTQ8ElZQxj3ERgaxhQ2sSBtA1Om9t0xrEsv6LUDK4NP1HC1vIsVYip3WxVSjBR%2FK63dmIye%2FobXLOon2Zbd7c9e5wJc%2FTzlwIdAgme81C9lOWDB4c%2FegMGVwDbNJcCpWzOhDENTO9wFtqpLRUkYui54wlN4G%2FWq9AybE1oC%2Frpvqd6Kd4htVVvPN18ERRmHyk%2Bwv1RDKxTfo8fn4iYNljbW7YJKSwp1AiR5GfCqj6vVRIYKl%2FIo%2Bg%2By6HkmMmvtXoSWNkzhAgwdZ1aw0F6AekdLClweySBJTBXq2Wl%2Bglqr00o%2F8czXKOYQPYGhLHjqf%2FM3BoAAoXHsji4xEf09npI4CYrAfT8%2FN4tfNfqvNE1UEkmzB17AG3yKr5%2Bb%2BPljxGP%2FWV18JVNYsttL9NGuDSgMKgw1h%2F0%2B5YeOPfr5ueOOx6jV1SFsyCVoHZlgRRVhy7eBSIKibM%2Bu1fnAvY8ZHaJzFq25ir68HJ5fHJDZQqsBqsOBLRdaPXCE7a2cb72kdF1ePrMAy8ziJZy5cZWAj6cc%2FhEwhaLSyQY6pgFlyg6fpt57xI87XRf%2B27tWud6T1fGf7k7MI8eLGi6sRGRJqU2M5K16%2FwM0mpu%2Fb7gs81yqMn3VaMoM20vdomQaSL6edj3gpmnbjVhxmY7ozrlnAhjtTMtZokHMp7exPj7bw07G%2FxXFZ5VhWVD%2B64uKBzGFT%2F3f5rg%2FgUekicjDpeUTAfeWktdYXrwGndRCXh6pP4DsAJBR6NUdA1WJP%2Bj8lnheeonw&X-Amz-Signature=3b60c5c1fbbca62e4ee2842292e95bb18dc602cc64fef151d5a7735bacf28e68&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

