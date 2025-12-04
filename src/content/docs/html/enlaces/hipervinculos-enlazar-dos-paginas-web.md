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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XIMVRJ4B%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T052409Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHUaCXVzLXdlc3QtMiJIMEYCIQDzciyQeC54YR%2FjJ%2FBvrfwtiHMwfw2tu91i6IPEsvUNywIhAMY9le4or%2BFTypQIjS7mQVA%2BkAtVtt9covqM%2BGCuPfC4Kv8DCD4QABoMNjM3NDIzMTgzODA1IgyKZ0u%2Fogm%2BgCSOnIUq3AMO%2BEHdaC2FRc07qF%2B9nxCzu9kw1mwfNvjp0aC9%2FUvllvrWOMl2p9v9dECD3vlDVxiq%2B%2Bxf%2Fko4V5dSH0y7jPDP7ipCjpm2YUG%2BIptjtX7wVCR1d9HYuaVaB4PJhyZHil9djE8r5aM5acQ0Z3aCpQ21PrZH3QYIghE5sHUvbg4K40BfrWevSz6w%2B5BOdsQUCd0XJiyeq%2Bqeav2zTEP%2FwTA%2FW5qfViA2pO4AN%2BiVnIWEtp0kTk8lXxxCTscwiuXU632nhxDkP7Mv057Zzs5UN6vos6VYtxn544bDjYxS7irWWB6DaG0sO8HsMOm3wiNBMrz31J61GuZwKqm5RB3QCTUlia5X9%2B1YaYTnRYAUrd0IWQl7bEVrmG17DwwWBhBXj7MB5YlBBbl%2FvG2W58%2FeZa1qXZ4V7rpNB7C%2FfXOSJ5UYk6dinmK0K9R7TjCy7lUeWPl7vJHhpl5B6ZNMWPj8eZdt6tvqvlkWc17GjsMSi%2BBvcYm7jyPdNIyEgYptzmHN5slRNSg8sIXgnL%2BJP9SeYrVLdsqlyMPthkp6A42GeQGZNkQVDDlgVSjTLy58DwqRvUn8HLDlP9eFI7ep347gR%2BZMwtP6v88sQrE07%2BhPWVAq17uQEAc2I1orbsGk4zCqrsTJBjqkASxPD%2FpEKlhZkO5guQPiznpuw7jkvAvg8jv2olqei3373TREi8Z0lwzBjOdKbjTOSmRdGlupmsv%2Fj9ZBA2Hb8XZXM7GI8ykE%2B9XZvOgXh%2BJDRTEAkz21OSFs4CWW7qSmkigOSVOgIzvCaoCMk8fKleYXt3wlYr4y8OotBfIG6CuiBnF797jrveLIgNUtYZUeDcETffl5i%2B0ueShpENx99tMpxfhg&X-Amz-Signature=415e3b6f839f25919a0a36989e46cf813e6a049ea3c33dc6ad7ed8412f7ac062&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

