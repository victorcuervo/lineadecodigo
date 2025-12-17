---
title: Ajustes de línea con CSS
description: "Uso de las propiedades overflow-wrap y word-wrap para poder realizar ajustes de línea con CSS y evitar texto desbordado."
lastUpdated: 2025-12-17
slug: css/ajustes-de-linea-con-css
author: victor_cuervo
---

Cuando estamos trabajando con bloques e insertando texto dentro de ellos, tenemos que estar al tanto de qué sucede con nuestro texto. Saber si nuestro texto se desborda en el bloque, o el contenedor se ajusta al tamaño del texto. Es por ello que vamos a ver cómo podemos controlar los ajustes de línea con [CSS](https://www.manualweb.net/css/).


Pero vayamos por partes. Lo primero es crear un bloque o una capa mediante el típico elemento [`div`](https://www.w3api.com/HTML/div/) de [HTML](https://www.manualweb.net/html/). Dentro del elemento [`div`](https://www.w3api.com/HTML/div/) vamos a colocar el texto que queremos que se visualice.


```html
<div class="columna">
  Puede que la tarea que me he impuesto de escribir una historia completa
  del pueblo romano desde el comienzo mismo de su existencia me recompense
  por el trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


Lo siguiente será darle un tamaño a este bloque. Para ello jugamos con los estilos de CSS y en concreto con la propiedad [`with`](https://www.w3api.com/CSS/width/) la cual utilizaremos para dar un tamaño pequeño a la columna que nos ayude con la visualización del ejemplo.


```css
.columna {
  width: 50px;
  background-color: lightcoral;            
  margin: auto;
}
```


Hemos aprovechado que habíamos definido la clase “columna” mediante el atributo [`class`](https://www.w3api.com/HTML/class/) para poder aplicar el estilo sobre el bloque. De igual manera hemos incorporado otras propiedades dentro de la clase, no necesarias para el ejemplo, pero que nos ayudan para la estética del mismo, como son [`background-color`](https://www.w3api.com/CSS/background-color/) que nos ayuda a poner un color al fondo del bloque y [`margin`](https://www.w3api.com/CSS/margin/) que nos permite ajustar los márgenes alrededor del bloque, en este caso centrándolo.


Si  lo cargamos en el navegador veremos que las líneas, al haber definido un bloque muy pequeño, desbordan el contenido de las palabras fuera del contenedor. Dejando un efecto no deseado.


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SFPVPEJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTlT3h9NpVChmzgmA0cBrMwGYbtkQtRjVudFzek9rBEAiBYXB%2FetwsMArSLIjmqqfiOZKHjaQ0yis7gfZNriYrP3CqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9zXpPBDKCgfkKrj6KtwDrzjo0fZ5VS%2FgXADTfkAyLwe9NoekJCrV8j%2F7Wj3lpNlDixv%2BdOOYzAY8KP12rIiZfkO8znO44RXBEUeTDrDlosw1GgLZghtBPPFlFCBiN1PnMcaj830eRmHMcqK0RLTA45eEYh7fnuXDEM%2BeuGmxFGEzimAL26%2FfPF9anIzrEjtGkQcI804J1YWng%2B4KdA4f6M5M6p%2Fn1sWMkqYVb%2FbE7BQt78ZPfg2W1ATNIDRFRyHzD5QHf2C74RcOg5whq7VK%2FVbd3Td8WBxroJgnz%2Bwr05QrcbidzXlCP89LtxEOxwEVzf2gfDqfqYJo2F6L5NdS4E61cj0EDcpfArbaY34JU9iIZdYRBrVJmSYtt%2F1ziO0conqOcrfXq2iYYfTvZsDpUnjdzTlJqnqVzwzsNCyXaLjMjbTNslbuhl9%2Fnh3Qmr00wevxEXvi1szerZL4JetKUd2cS3GaH48KASEeQRXgNQoxioIO3fmRzSRKQXAJ0EOxbY3jXzGhlR5bAbK7yZ%2F63tpRbFClcfn9By5%2FhCMlI%2BIQ9FWa8Ur2GgJgTI7hXt4tIp6Ax7TXQXNVa0LESIZykUi9bToU28LeZFZ7UU0ChtjKrjQlPggScgA3MR0o3QxGh5McoCuccsCfoXQws4CLygY6pgHtp0SUBXnSBKgYA6ghBaHyV5i0d1QpGN9VOzS2I1GXUlWVCtqRj9jCv8Q5l30C6Wxakykjfk24jyCCSbLCg01DszakC5C%2BDqU3zFW89hPaOkvCd2es%2BI8hmw%2B04XNqDWam4I4Zwhut%2F%2BfvivDn1Pfg%2BE%2BkzDXXJb%2BWtdokKh%2Bm0RPNJBLYnosGX%2B1BpqzIhjMYEkmBNWlV7ujj2Vj%2F2Cgt%2F41X%2BzII&X-Amz-Signature=ed2e9c8a3ecdc6a8cd6de9fee0e3fb7b499e9c979414e8b2c230e41f4176e91a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Para poder solucionar esto tenemos que recurrir a la propiedad [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/), cuyo valor por defecto es **“normal”** y lo que está generando el anterior efecto. Y lo que tenemos que hacer es asignarle un valor de “break-word” que lo que hará será el dividir las palabras (cortarlas) cuando lleguen al borde de nuestro bloque.


Puede ser que el efecto sea raro en las palabras, pero gráficamente no veremos que se desbordan las líneas por fuera del contenedor.


Para ello definimos una nueva clase que la hemos llamado “texto-ajustado” de la siguiente forma:


```css
.texto-ajustado {
  overflow-wrap: break-word;
}

.texto-sinajustar {
  overflow-wrap: normal;
}
```


Ahora aplicamos estas clases sobre el bloque de texto, asignado la nueva clase en el atributo [`class`](https://www.w3api.com/HTML/class/) :


```html
<div class="columna texto-sin-ajustar">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>

<div class="columna texto-ajustado">
  Puede que la tarea que me he impuesto de escribir una historia completa del
  pueblo romano desde el comienzo mismo de su existencia me recompense por el
  trabajo invertido en ella, no lo sé con certeza, ni creo que pueda
  aventurarlo.
</div>
```


El efecto que veremos en el navegador será el siguiente:


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665SFPVPEJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T150439Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFTlT3h9NpVChmzgmA0cBrMwGYbtkQtRjVudFzek9rBEAiBYXB%2FetwsMArSLIjmqqfiOZKHjaQ0yis7gfZNriYrP3CqIBAiA%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIM9zXpPBDKCgfkKrj6KtwDrzjo0fZ5VS%2FgXADTfkAyLwe9NoekJCrV8j%2F7Wj3lpNlDixv%2BdOOYzAY8KP12rIiZfkO8znO44RXBEUeTDrDlosw1GgLZghtBPPFlFCBiN1PnMcaj830eRmHMcqK0RLTA45eEYh7fnuXDEM%2BeuGmxFGEzimAL26%2FfPF9anIzrEjtGkQcI804J1YWng%2B4KdA4f6M5M6p%2Fn1sWMkqYVb%2FbE7BQt78ZPfg2W1ATNIDRFRyHzD5QHf2C74RcOg5whq7VK%2FVbd3Td8WBxroJgnz%2Bwr05QrcbidzXlCP89LtxEOxwEVzf2gfDqfqYJo2F6L5NdS4E61cj0EDcpfArbaY34JU9iIZdYRBrVJmSYtt%2F1ziO0conqOcrfXq2iYYfTvZsDpUnjdzTlJqnqVzwzsNCyXaLjMjbTNslbuhl9%2Fnh3Qmr00wevxEXvi1szerZL4JetKUd2cS3GaH48KASEeQRXgNQoxioIO3fmRzSRKQXAJ0EOxbY3jXzGhlR5bAbK7yZ%2F63tpRbFClcfn9By5%2FhCMlI%2BIQ9FWa8Ur2GgJgTI7hXt4tIp6Ax7TXQXNVa0LESIZykUi9bToU28LeZFZ7UU0ChtjKrjQlPggScgA3MR0o3QxGh5McoCuccsCfoXQws4CLygY6pgHtp0SUBXnSBKgYA6ghBaHyV5i0d1QpGN9VOzS2I1GXUlWVCtqRj9jCv8Q5l30C6Wxakykjfk24jyCCSbLCg01DszakC5C%2BDqU3zFW89hPaOkvCd2es%2BI8hmw%2B04XNqDWam4I4Zwhut%2F%2BfvivDn1Pfg%2BE%2BkzDXXJb%2BWtdokKh%2Bm0RPNJBLYnosGX%2B1BpqzIhjMYEkmBNWlV7ujj2Vj%2F2Cgt%2F41X%2BzII&X-Amz-Signature=6369553fd71cd515a2e605b0a3a2e12012b097a36a7793abe7eba974d3926dd2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

