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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466T4EKYHX2%2F20251205%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251205T173243Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEJf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAiET2b3iXJvDTnhG0DJzgNKuNUYZ7enCVv%2BY2CK6QgdAiBBeS0TB3N%2FRMVYkzW7fhWhC9kzGy7sx0%2FjiHDmq0dlRyr%2FAwhgEAAaDDYzNzQyMzE4MzgwNSIMDkZ5ebe3x0JpOct6KtwDFpsY20ceX%2F5ss73sA5P483zn1miOckQsG2f08%2B6%2B3ZTOrRVClb3rz2oHJpVSNhUYyy7Zpk0gF6Bcq0D3PmEC5GBet4clJBEMU6drUCs1NVgbOuYvk8uupvqFcICW2wZ66%2FuO89ircBCb5IDQwOhGo%2BU7rw0och8gwwjYcCV2dgdjeqVQZvveCQ%2FNwABUyaleU%2BCAFyJ5gUMszm68HiLYzY5nycWiGZ%2BNd2ab5mXK4AXts0c9Mit5QHPUqgA24bDUXvDwX7Tiz9uGrvH81Y0cPRpBDWGBkYOya7w1BkNzW8xRsapWVK5T%2B9%2Ff%2FOq9%2B0AaId4Fsmqcc4AwKi%2BNVcVDo1otOyuqoErfcjODhkmIAU4Wef5KYaCDYLKBNXI7UQDL2B3QVgAR47Bl%2BBuvgW%2BGpxeX7EzBxWPzpGDrRGKEoJHsptvB%2Fl%2FYsTu4VbTLZ6hYs77vpDGOk5jzfuX12KdzWj9SxiMO%2Fn86cmmUKxJoMclp3QQOCcBhoc1KTEvsef7qXH8dgXKSSyVIwRGpkksZK%2BDrrXDCoNBLjsjCqZDEXksiiFF1CufUTkNkDoP5mvllbM4AtJtkWmNWiC1O0q98qM9gTXkjbaVziVuWUc6z%2Fg496IfNcwVCHc6mwzow4%2BfLyQY6pgGuS52fhJTmXXHW0mbP2THXcprVlzRuThZwjkoGg7UwKzaYkbpnKzxZhNR9iLpcbf2DfEJFsrpP83TLIu9xQJBirgt63qavo%2B5Wq6m7LLFz3GQSvxyvT8UAS0TZ32sXMkVxYdGdB5HrbyZO1JtOcUiXtpzzn2kBzTrv4iIyxsCnAj%2FomqY96zJbk2WRhFFMRKfMRZvGsZwfbUXDHIVnxE612V5sutQ5&X-Amz-Signature=64d7f85f9110c0739483738964793fd4c896104ef663918c2e91146582a6a611&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

