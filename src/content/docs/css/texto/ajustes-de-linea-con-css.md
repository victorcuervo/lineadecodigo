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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBDTVWIE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFKpkP9ahjsQ7HuPS4YacbPH4HLucCH1OCYOZCB4bwkgIhAP%2FXFBXANqJwKgzzHw4oXJT5Xmhf1%2FkPgjpl20StP2CWKv8DCHMQABoMNjM3NDIzMTgzODA1Igx97x3ad53WTWjDRXoq3AMQhSbcK6M5YL8nCkeaAzdb5HFXFmULmIfh2LhbSHxnsXf1gxbHenmLNV4IcB%2BA0lDw8gO%2BNESZcsETp2CvW192LzM0Bhzt%2BGadlnwn46R63Wt%2BoDMxX3CXAm82m1%2FX7sZ%2FIha5duRCqCECE%2FBSj6GaBq8nQzI%2F8avfeSWN8OrS85TlLVLpa540U%2Fdpt2bqyW6jg%2BPeXVxToXwxF1rlDeXs5YNnueSTN5xXW5vB5ou6Ye7cDB2v1SFsl0%2B%2BMR%2FTlCeki3OuXRlV1NYydKM%2Bwc4r7n%2BEKs7ro6sd6JxxhHon3h3fDCzO7sFPEfnDfvjALre%2B3OAh1%2Fv75TO4YH8qJYzXQURd6bJ1N0qqFi2BOZDm%2BBMy23KnV95%2FLLhc0GqV2m8jHCH56gOpK%2F2QM3E9b3YojNvogS68yScTxI4cd9R7HzYQcFiHBxVcaOudIcma9zkCZ1FdBrlcp4rTESg1VbjudN0WR2pDao%2BvZC6mHhvQui1nY9pJnEd8rT7%2BHKMxFnRwfwVx2dMTmCuQgKwmK%2Bp8UsIIMFPwKZGuFwWmqTH8a%2BH6iDfeI4SIlTLH2mZSfiKyeobYB5uI44DrJRvbcVD8vl%2FyDKdc7c6m0vivDGwBLGcJDEiBrZw4KtFB3zDol4jKBjqkAZbHrf2hxKwydBJLzNNWXKxNslYjwFN27wvWEZfy3XGy%2Fs1DvUQjLAEp8uitaesfyEc2DankCll7mWwOpyxL9mhTym6wpO8AJU0z6P2RhqlBjIYNN77%2Bo%2FgOUYaZOAhj9Wb8LCEiSxU%2F888xb%2FKFcLRS9lWifXUGCnwD7xg%2FAVCA7bWhwiT7HHxU3jWfyqliJK4YrFuk%2BJb2YdBXU%2BUvN64xV%2F5s&X-Amz-Signature=90093aad8514232176569251387aad971c5f24bef9c7b63f30c635c28c56fddd&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SBDTVWIE%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T015208Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCFKpkP9ahjsQ7HuPS4YacbPH4HLucCH1OCYOZCB4bwkgIhAP%2FXFBXANqJwKgzzHw4oXJT5Xmhf1%2FkPgjpl20StP2CWKv8DCHMQABoMNjM3NDIzMTgzODA1Igx97x3ad53WTWjDRXoq3AMQhSbcK6M5YL8nCkeaAzdb5HFXFmULmIfh2LhbSHxnsXf1gxbHenmLNV4IcB%2BA0lDw8gO%2BNESZcsETp2CvW192LzM0Bhzt%2BGadlnwn46R63Wt%2BoDMxX3CXAm82m1%2FX7sZ%2FIha5duRCqCECE%2FBSj6GaBq8nQzI%2F8avfeSWN8OrS85TlLVLpa540U%2Fdpt2bqyW6jg%2BPeXVxToXwxF1rlDeXs5YNnueSTN5xXW5vB5ou6Ye7cDB2v1SFsl0%2B%2BMR%2FTlCeki3OuXRlV1NYydKM%2Bwc4r7n%2BEKs7ro6sd6JxxhHon3h3fDCzO7sFPEfnDfvjALre%2B3OAh1%2Fv75TO4YH8qJYzXQURd6bJ1N0qqFi2BOZDm%2BBMy23KnV95%2FLLhc0GqV2m8jHCH56gOpK%2F2QM3E9b3YojNvogS68yScTxI4cd9R7HzYQcFiHBxVcaOudIcma9zkCZ1FdBrlcp4rTESg1VbjudN0WR2pDao%2BvZC6mHhvQui1nY9pJnEd8rT7%2BHKMxFnRwfwVx2dMTmCuQgKwmK%2Bp8UsIIMFPwKZGuFwWmqTH8a%2BH6iDfeI4SIlTLH2mZSfiKyeobYB5uI44DrJRvbcVD8vl%2FyDKdc7c6m0vivDGwBLGcJDEiBrZw4KtFB3zDol4jKBjqkAZbHrf2hxKwydBJLzNNWXKxNslYjwFN27wvWEZfy3XGy%2Fs1DvUQjLAEp8uitaesfyEc2DankCll7mWwOpyxL9mhTym6wpO8AJU0z6P2RhqlBjIYNN77%2Bo%2FgOUYaZOAhj9Wb8LCEiSxU%2F888xb%2FKFcLRS9lWifXUGCnwD7xg%2FAVCA7bWhwiT7HHxU3jWfyqliJK4YrFuk%2BJb2YdBXU%2BUvN64xV%2F5s&X-Amz-Signature=54e2b9006075011c644fb2f3019eb470ccf2aeec3a9dd45b719c88f7bbe68a1e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

