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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466V3C4WOIT%2F20251206%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251206T084111Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICp1mj2KMa3tlwwdzZsa3QxtSgALd5pBDVUjTzhaRcB2AiAwY823UBNwaVHB53FbY3Zn0tK7d3eIiCLv%2BHUqPPlkYir%2FAwhxEAAaDDYzNzQyMzE4MzgwNSIMHdouqDCdH6n%2BmRWsKtwDEO0PQw7fafyflhEcyGfsLBOIO70B%2FPKEevd8OCVnhTbPswSg0FrgJNdav8Ihc8viQAWeTENqZG12qIyh2RWuvwdpVQXR41DuQ71h8zxrUXydH6i%2BX04tOg87rRrvDtsKO0N7IbI3%2BPqd%2B%2B14K24TfXiKQnM0xyrW2OjoZiBys%2BL%2BtDTKzENqtJY3z4OKRZhFgmaVYnHBkypDl4FGGNH03LoT1Jci13fEANu%2F2PWqaFseEKQykECGa4f2mAmLv3EeTAe2nKNGAK9m%2B%2BwS9ocbuhBddLR7eXamJR70IKx0lNpYN%2BBeF2OnNtazhDDAf%2BXull5Fs0P4P%2BWdqMCNj917vrGRTDTeGTJq9FRK0Y4XjZBWsB5gaxnPbdTQIC9qwCo2LRzrfitaZ1J21IJduyV3hqdnF7UoOewWhVoNrcDQpuoEHdc95RpBsw4YIHLDapphVIYlDHShsmmqSdCgLLK5ctN63QbPs4vsdmI0t2o%2BJznFx7mGBzCmgIfA9J4lvu2t9KUAemkLsT6X%2BQ8zl5%2FpxxtjwbDJVenMgx0B5eh%2Fu3SxI5%2F4DGU6OtYKMyFbBfXvzhGkNHQMuYG9sSM4zKewMlFuHK2RrHriFOt5kdTr4hoB7MjdQmG4sivvfeAwhLzPyQY6pgGVO2hLc5DgDgEkNZCgBpFbFI%2FU7gOqNNy%2B%2Bsvp23M2VYfd1s2ten0ANI4hrBDi2N1kvbKNCh8E5YjyveI%2BbVhZWbyaeY6bcGgJhaIeU%2BN7f0q%2FvqB3fJs2qOPCTLy4LI8D%2Bv2LxDwhmcFza8F2ltvbS8yF53P754fZPjWiqKoDTW0We7PyPWXz%2Bzzrye8h5eCGqP3m9oBrmYqQG925jeLjcpVEd7js&X-Amz-Signature=65ff9ba1c1e989e7e72f1a65baede90945d6501b4b07b42a854fa45c116c1122&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

