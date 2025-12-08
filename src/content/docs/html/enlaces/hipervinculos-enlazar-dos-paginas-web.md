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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675X7U4OF%2F20251208%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251208T112829Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjENf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDwrdPwblI9sMOmer4Ip8dkgIA9sykLvUERYUnUzrDLzwIhAMgFBYbAX%2Bprsj3dF%2FZEgVUH9Hm45b7NX2Q4lV8PHNnvKogECKD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgwbuuhraUKo7oOGaagq3AOXxCKn1iKmEmkT6jT%2F8IDTiECxSVLaBsX7iOfvnEzGEUhx2hQpsQWj7dwm61h1ioWhPm0DyhQ%2BQJ9PfCSL0d6bKYDABQQtHMIOpanZXypQTmI%2FgNinCuJ2bdyMZVXxZ9S%2FWo%2FjpJYolhl8P1xy60JIH7%2BfCDYKIGVCQSLP4FqrOi8FMmFiuLLgNaB6nc175%2BO3El8guAzaeTVr6gi31OaKM06EWcBFoOMqDwq1tGDwyfQEGhRfz5MoBeA9qAem%2FUd6BZPcs%2ByA%2BspvXDddoyVzolp5heGEj56SwdFyuZuJxQIcCvHXkHy1h4Ei%2BR%2BS%2Ff9U4x1YH5%2FizyG8qNSoEZmQQhu%2FWwRiSZ9i%2BKtBO2N5IKTAGz9QlnEl%2FhGXI8%2Bnj8%2Ft%2FO2iANvQYUg4ilt9Bjjiee73vWo%2Fe4T9UihBZukkPPc25DaWr5YgXuWHL9Fw%2BbcaTWC9EBlUDwBt8ZpZEPNgQeFEDikgRrHl%2BBEwT80%2BJqY%2FxMgxMM9QKZJ1mMsNHAfqCdM4S%2FWveHQ3VYIzghAHzIS1dGI9OX3CRxwfLLLutWcUV%2BQ56zEVpKsuVoLJaRJFbxNAICkq%2B%2Bn40WKd9X5dQq%2F5bbk%2FxSikIY1xoCcAyuMH4%2BAi2OJt84%2B9vTCC7tnJBjqkAYVMxwupr51wisLHgatfD4DkSGDBO0LRKtabBqwzZpgjt3tgINBKk7Lxr%2F3pPdkinCEAThaaDcWrTtLkraceASlxBPV4n8p9nc5wE6bsOPaNJE%2F1Ls1iik3%2BRetClxcpwsOYn2eKuCMxMAlqufvHVesfJobAKkc1bLN0NeT6jwW2W2l2gTojUu1egk8BxOCQeP5a6d44RWgypw0fp0%2BVFWryYVZY&X-Amz-Signature=7da96c0dc514977bc3ef62321684f79118d126a47aafbc3245ad5fe54865d3f9&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

