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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466W2O3UQUQ%2F20251204%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251204T064254Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEHYaCXVzLXdlc3QtMiJHMEUCIQD%2BffJ9VGW5XatFzQkMyCixfdd4Rx73O%2BqCEc4rwE3O0gIgbR0eYdfF5%2F0aNszIVxQsedAms4zb2T1FxDtCcjylH%2FAq%2FwMIPxAAGgw2Mzc0MjMxODM4MDUiDFfYZYowD51FeuoGwircA8GwDVwaSjXwF1T5YhRWbrEdTek6tMTJ330LttYxqKdLFBhm7zovIcI57iK%2FTyLaNJHKVg91voXkaL%2Bbxus%2B66wtUYnvrVxXUFkmAD0J7hP1hNzrG4%2F5JFW%2BVQP7L7cp6uPTjwXKOF1poz7A6hxu72m5C5nXaR1zXOJNfr%2B85NbC3vmv%2B0mw4W8vNhJZzMRFHd7mv4CfcDG3B8rT%2FFRUf69kY1Bg1%2BlMinqT0zJEG5MGt3wgpFeWwUxjubZFyLWY%2Bv9yRyySZcgJOQoeiOfUZ%2BdPTbZjflttokvIHOfHBcogSIzjvks6ZGe4fpVPVrvttoqm5XCCKm%2BQ7oFRCnekjSjNZ6%2Fp%2FVhMqLU1cxLdt0XwI7w2IELcgGojfDG8IxG7lL%2BhgtOKHErgrsMRq7UBHlciKiynQx%2Fv%2Bhm94GfRKXODtXDG1nxBF0POXRD2cfV1Moq3MC0RW0LgiuylYdf4iC3Df6ifTBKoYR6dJ2kUyFBYfMUntIQ7n9q%2FlrBMBoi8vLfPVRZ6RFN8p0nM3SxhOUI9MgHBd3HIqq2cBe09yQ%2BliAh1na1u8Kq%2F6VBXCGymcQrsWsj6xaUANX0ZDnITNfe6qnv9wzp%2BRjws%2BwXZVNrjVCErDqHiHii%2FhK8%2FMJ7KxMkGOqUB2ckSzbBRAA6ipMybgrPmAwRttQahyPL%2BJAYa7JRFqkOmvzpKIrqtQuXpoFLp5sRGO4HTjJ1VOmbgreY41EXEt1pp7Sh%2BWjGDIF5KHgjRwnVd8L5tm4J7XUtqgB3z1UR%2F4ytI03a9JaJHO3nAxQmspVlp5H4g4pGKgEkNiCLjAv7lFsKliIjcXl4V1vmircFg%2BZzsrNh8UGkL4T%2FhVNQGF%2FXmkTtZ&X-Amz-Signature=e82912efbcfb40b341e4075b93a407a5958ec9767c6bbdc13e2f6b0e5a18a94e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

