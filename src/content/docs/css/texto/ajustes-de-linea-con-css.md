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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623C3ZJYM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLiBRiTwPtDADuG%2BqihfDOgpmySWiwfIVetYifwvynsAiEAlsGgO0h2AatEXMi4L9HQbQtIHJexVq9BtVxjSc%2F9jJsqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ57Tn3o9fctmM63dCrcA%2F3eZwVvFls%2B%2FEjcdQdDvxyHL8nz6RnUPqywqFyLvEUxJBUUQS9nvsdcEBqTM3AWOUJDtP1pCGtZd9jOQKq4PtCozgIAmoc9D0TarwIq661fB9ELbxDxtf8fvQSGw6pm0a7rqOkzgaNtBNBzE08bckgHLdncxBiV%2BpXUNH1crAneTiKUgXZECXlbLPpdIfVFbiPdwA8UyZA4ymL6paaGJkBRLIdpgLYNHetxo8VKIXe9llvG8MUW6oNq%2BrkK31xLT8e4d6%2BZ8%2FJSko%2FAhMbVt45QDLSQUzEzIrRqmT1v%2FLj%2F9GFoxBLgY%2BP0MDT4xTPZRxxOtN%2Fyqg2jxpiVgy2IEZfI32ThG5%2BJqr6Gct8bXxhB6sW6SKkQ2dVN4w4wl6ExcMDYDSRbhBzf2FGLZCdpHAsnOviPCPbtM5jLhyNFBFk9cDfVFyY%2B2jkpGFdSr8bXUkpfGo46PgdVTxcU5HkWUoeip76lD8gUnrqhdwAMNBN3KXVmfqiUNDnv%2F4RGRaTZ7w%2FETfKsoHK3F9amZKkoC8J5JLBMwiMY8elWgknHn%2BtWu2gbsyJtLPntRWCWy%2Ba8RIzg9yvbM9ghUmhxNuy77kMgVTVEuXbqAt0fHnEk1llgT0G2TfV1ogROOBEtMKGLjMoGOqUBd3IvaxVbqCYDJlSLMe5ja0cC8ZhLJ1b2uGSq2agX0DcB50YMovrplc3VS1%2Brk2LBqbhTWudwiv%2FDgYBPOS0PxsP5YU7is7x4tAP5RpbPMHmoM7Xuu%2BnQCcAuDDa1u6GLDQe674CytKdpe4Ksnt8TtOs7%2FuHVEBL32KX6CAhx103IroFNgcEdPgyWhIMNRJp98e8SOCyeraSG41ehfZSxFGIChuD2&X-Amz-Signature=f3b3486fc1b64328a060c40aa9d42d741f6b3d816db048a007b3965cf5270b8b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46623C3ZJYM%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T195619Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFLiBRiTwPtDADuG%2BqihfDOgpmySWiwfIVetYifwvynsAiEAlsGgO0h2AatEXMi4L9HQbQtIHJexVq9BtVxjSc%2F9jJsqiAQIhf%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDJ57Tn3o9fctmM63dCrcA%2F3eZwVvFls%2B%2FEjcdQdDvxyHL8nz6RnUPqywqFyLvEUxJBUUQS9nvsdcEBqTM3AWOUJDtP1pCGtZd9jOQKq4PtCozgIAmoc9D0TarwIq661fB9ELbxDxtf8fvQSGw6pm0a7rqOkzgaNtBNBzE08bckgHLdncxBiV%2BpXUNH1crAneTiKUgXZECXlbLPpdIfVFbiPdwA8UyZA4ymL6paaGJkBRLIdpgLYNHetxo8VKIXe9llvG8MUW6oNq%2BrkK31xLT8e4d6%2BZ8%2FJSko%2FAhMbVt45QDLSQUzEzIrRqmT1v%2FLj%2F9GFoxBLgY%2BP0MDT4xTPZRxxOtN%2Fyqg2jxpiVgy2IEZfI32ThG5%2BJqr6Gct8bXxhB6sW6SKkQ2dVN4w4wl6ExcMDYDSRbhBzf2FGLZCdpHAsnOviPCPbtM5jLhyNFBFk9cDfVFyY%2B2jkpGFdSr8bXUkpfGo46PgdVTxcU5HkWUoeip76lD8gUnrqhdwAMNBN3KXVmfqiUNDnv%2F4RGRaTZ7w%2FETfKsoHK3F9amZKkoC8J5JLBMwiMY8elWgknHn%2BtWu2gbsyJtLPntRWCWy%2Ba8RIzg9yvbM9ghUmhxNuy77kMgVTVEuXbqAt0fHnEk1llgT0G2TfV1ogROOBEtMKGLjMoGOqUBd3IvaxVbqCYDJlSLMe5ja0cC8ZhLJ1b2uGSq2agX0DcB50YMovrplc3VS1%2Brk2LBqbhTWudwiv%2FDgYBPOS0PxsP5YU7is7x4tAP5RpbPMHmoM7Xuu%2BnQCcAuDDa1u6GLDQe674CytKdpe4Ksnt8TtOs7%2FuHVEBL32KX6CAhx103IroFNgcEdPgyWhIMNRJp98e8SOCyeraSG41ehfZSxFGIChuD2&X-Amz-Signature=0935efff71b2c662b0eac515ea59108dca0147b3169b62a3d42c19a1929818c3&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

