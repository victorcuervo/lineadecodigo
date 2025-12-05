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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466S6A2TKLL%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T015359Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEIb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDs4VhLZC3DazlsX3CLQ2RVT58SVTQ8KkdWNEk%2Bn1vy6AIhAM0HJ3kic4lz%2BcnPl1dVQoAf5d8LUSb5QUpOhqupBfhNKv8DCE8QABoMNjM3NDIzMTgzODA1IgzG2AEQHgvGhkPMW4cq3APDuPtyMW13OKKn6tbV%2Fj8%2BxYLL2Z4zsu3uNsDrPIr2%2BrLDHswzA%2FmHZUfnwP5SXitU6HT0PDdisWPYFPFOf%2BL7QObMxA8eJA8ENMF6YaZuwHm5MUt9vcsbmZnUUybJWlE8SZf85b9LXQa3kg7ExgySKfqdZTdvEIknkAfLtmw0txWG0j2X2CrsIIbbJCojDJP1PLXjLDrikDce3F5nMHFLprhgrfW0aQa0WrSp4Y%2BsAuktDOEt0e3WUHgAEypDRiwNeaK2PLJ8M6Xkifd%2Ft9K3idxCXTxJ0y6jfn981madY70b0G%2Fja8ND5f%2FrNeNmDBzztp2gtu7wzgLRiovUMvUXXSKAkXfmoIUqdvEXf%2BriQZydKuh6JUQArcf%2F4%2FCQUsZfjiWgONL5OFJJy5ck2C3KWszsfb3c33qjSxD7lNh6A7PaeaQhLetkeos6s%2F3UAPlRBrhzMHlDyTcORjHEOyvhK4e4sbHwY3WmiPa12QaGvHAvmYJfjGf1sWOjuIV3dktVMzsd2kjlgKf%2FXyS%2BbhOoTlv2PfWxygVz7L6cEJDSATR68pcFojT%2BMt9fn1sWTDhRxAUlXrTRisCFncKGLb5KS5aR1JRHRZ%2B%2B1SAquNSY9AsMHsgrfRk%2B%2B1KbGjCUjMjJBjqkAXux4Ul%2BdIAMjbe8ewtUxg%2FcjIsYjIuRFwBlIHzfCxb%2BcTmQ%2BduMGolzgFYSM6mBQVTpyfKG3AKuSHVvlsiaY8GoNbEyahrlGz2Ce2YJrHydoi%2BBWfWg7M86kJNyPGpuwncTD2hMkz9h%2F%2F47LSur549Sqs%2FAhXluNasiPU6QrMG8M%2FHh9%2FDOI7W3I2Wd8po%2BKNNoLtz0M2GuZrp3fv6GQdica5Ln&X-Amz-Signature=6dbe77870978be43625ecbadebc70ef1ce6a7f15c2ac4e072275e8446f4a559b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

