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

![](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/a0be91f0-862e-48bd-a413-50b461568f90/elemento-a-html.webp?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XGMLY5KW%2F20251209%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251209T212759Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEP3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDVvchrEGoQrIZiTKHfS0PZZe4ksP%2B0WBDD6PXZagBXdgIhALpkE7zayFTcUan%2Fo%2FUnoibPjfwIlt%2BgLd1qDf2dTcy4KogECMb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgzYi1bloJgc6COAsMwq3AM5RNrTESaIS90IeD59I1mc5S5C1CDKLr3aw6ME9EFr7uCLjlpFjc29CwpzS2chGWfghYdFO94P8%2FeF%2BMNaK02Gi%2F9FtYmieo0iYEOtpIt863QR6reBTVTVSDLE9Z6y8I%2BMqKud99Fa%2Fe6PkmVuPjdtp4F7urNQwXrd9qsMSCepiDIdWMun96l3R7xD92ug97CDDxzWUyU3HMwa8RBKo2f%2BZT7u%2FMtgKNIR1xdac8AapS4h7bkyI5SjsqYYTBmzHaM839encZo3TgtjgWH3jdD6BDCBO1g7UAvZLK%2FG5cPP%2FJTBa4LjHZOLupMbfRKMzGp8%2BRqrIUnUXYHWpFLfhwUzexyy8U8EKHyDit3lcELzxh6CNz67KcLgh4pL2YN3smbLlt7ypO7NlcXu1ZFTphDpFczsDkqK3ElOXDhyIqfNqIMhIo%2FuPAM8dUH3YRTemch5eZW6B4NDpkZ2rUR4IIzqWEDw4a89xi30eEoOpjgBMTfQV3RyQ9pNMCIFYcnhieYC6RwkYv8%2FC1pfih6aJsL%2BAnybf182yADUR11qIjNy405c1TTrwlqjvQRf9n%2B82aEXTb7h6nuAPwHO3qEULQGq%2Br5%2Bf5u8mYLxBD8B4sM8OL6La%2BwGE164vHA%2FezDknuLJBjqkAa7kvaGvUtwb2oyXD%2FFWjbHuQKkGFfMO9dIIGKyi%2BeG0TH34pXvBD5R87TdenJB09X1lRq%2BsBomVJuJY%2F5FbkNXQp6caILmfYrtjr5FktZfeQHM%2Bv1c%2BeMVX%2BK1dpCmtU464alHcLlA5s2RCosnzi788K6tsF4ecqAQobBABQgIU4PgGY9pPxqIzI7NTivO3JQVfzcoA6pDFRCEdhdP8IMIRePRO&X-Amz-Signature=6d254cb96eee9d556037e84b6b0a08689bce97209f135031a71a8dae53191cb8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


### Código para enlazar las páginas


Ahora ya nos ponemos manos a la obra para poder escribir nuestro [código HTML](https://lineadecodiogo.com/categoria/html/) para ello asumimos que estamos en la _paginaA.htm_ y queremos enlazar y por lo tanto abrir la _paginaB.htm._ En [código HTML](https://lineadecodiogo.com/categoria/html/) será algo así:


```html
<a href="paginaB.htm" title="Mi enlace">Mi enlace</a>
```


De esta forma tan sencilla hemos conseguido enlazar dos páginas web mediante [HTML](http://www.manualweb.net/html) y así seguir tejiendo esta inmensa red que es la WWW.

