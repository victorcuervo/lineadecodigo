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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIBUJXFW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDexxGMN1%2Bwa1PLUhXxZ5%2Fv2908wZJRC2qtNpDLcu5tNAIhAJK93tCOpzNSdp%2Fvq4%2FGe0kqfYd0ovarNzhRmIpI4SsFKv8DCHkQABoMNjM3NDIzMTgzODA1Igypkv70nZ1CsGrZaaoq3APw5b6a2glucAuNUMA6Wd%2FwaGPDXJNLywtxcF4XEJ5v49fPrd4IZOLYh%2FYFF%2BjZzY8mx2iwY2t%2FCD6KgHRKJhzoOjAVgFaXYyCkLuJVmVUm1Lk%2BrXIR54GXM%2BfySQ%2BGwtJjkMtNsU9EWEvLY2wjXwyzj%2FFVZbcKBGnHfZf85tYm1qL3fdvQx3jxiv5HO%2FN0tak2MmkcKFRhZDCNVe3O5m3wGsfxgRnn77ebDYJ7xOItWCqRD%2FVFCHLB9N6ikCWdJH8kuGyrVRhoJnd5FWMSkrO%2FPcdRMvDQvt7HJvaMeMEfGgePqnWld5vOyB2l0v%2FywY6ag1He1PNSTw0Uc4eS8b8IK9w4RzEOiSXiGzQ2o5e8glugJgdwwQWtzNEjceAMiVLOQ4u%2FZoSLg8hNL0FpcYSUmr2zXxn7k5PD2%2BgJx8Guz6Bj5StPDlkkgr7ntLZHMyxwLShCzfcAuNhkKes0v81%2FqW%2BMsbr4eZ4TFpMAaXIf9N2Orlgxs9hsSOiG3BjIKUjocGKyPxfd%2FTqvb%2F6jiljw0P%2F4aw79ufEBrtS6ZgdBen21hsc0%2FB%2FMYQeD3ULNX9ttxRvDz574DZwWK2Lxj6tABNueO4m7b0YhssnOH0yl%2Fr7gYQRDYBF4guHznjCRuInKBjqkAUHHH9qREZhau5asFeCr9eZmzGaCXHbY%2BdGChD35G5K8jPfcq%2FxYx8Pz0bbUKs5hMMMiGLB8vr%2Fl9nq%2BT4LfZksqn%2FxxGdV6qrBRlBUBV2%2BD0s1fItu%2BdaGhIUeZqbJ7Ioe3q1USRySDU1zpmg1Wffy6zPWBCB1K5wOCAfEiTsHaYSFzXxLMg0ngc1cGLiv7FqeyQvMwJnNNHHODe6DvuVW%2BPAeU&X-Amz-Signature=bc4de1767a89b17f370e21b9adc6d0e5f8bbebf5c180114ba62f8464814d6af0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WIBUJXFW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073309Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDexxGMN1%2Bwa1PLUhXxZ5%2Fv2908wZJRC2qtNpDLcu5tNAIhAJK93tCOpzNSdp%2Fvq4%2FGe0kqfYd0ovarNzhRmIpI4SsFKv8DCHkQABoMNjM3NDIzMTgzODA1Igypkv70nZ1CsGrZaaoq3APw5b6a2glucAuNUMA6Wd%2FwaGPDXJNLywtxcF4XEJ5v49fPrd4IZOLYh%2FYFF%2BjZzY8mx2iwY2t%2FCD6KgHRKJhzoOjAVgFaXYyCkLuJVmVUm1Lk%2BrXIR54GXM%2BfySQ%2BGwtJjkMtNsU9EWEvLY2wjXwyzj%2FFVZbcKBGnHfZf85tYm1qL3fdvQx3jxiv5HO%2FN0tak2MmkcKFRhZDCNVe3O5m3wGsfxgRnn77ebDYJ7xOItWCqRD%2FVFCHLB9N6ikCWdJH8kuGyrVRhoJnd5FWMSkrO%2FPcdRMvDQvt7HJvaMeMEfGgePqnWld5vOyB2l0v%2FywY6ag1He1PNSTw0Uc4eS8b8IK9w4RzEOiSXiGzQ2o5e8glugJgdwwQWtzNEjceAMiVLOQ4u%2FZoSLg8hNL0FpcYSUmr2zXxn7k5PD2%2BgJx8Guz6Bj5StPDlkkgr7ntLZHMyxwLShCzfcAuNhkKes0v81%2FqW%2BMsbr4eZ4TFpMAaXIf9N2Orlgxs9hsSOiG3BjIKUjocGKyPxfd%2FTqvb%2F6jiljw0P%2F4aw79ufEBrtS6ZgdBen21hsc0%2FB%2FMYQeD3ULNX9ttxRvDz574DZwWK2Lxj6tABNueO4m7b0YhssnOH0yl%2Fr7gYQRDYBF4guHznjCRuInKBjqkAUHHH9qREZhau5asFeCr9eZmzGaCXHbY%2BdGChD35G5K8jPfcq%2FxYx8Pz0bbUKs5hMMMiGLB8vr%2Fl9nq%2BT4LfZksqn%2FxxGdV6qrBRlBUBV2%2BD0s1fItu%2BdaGhIUeZqbJ7Ioe3q1USRySDU1zpmg1Wffy6zPWBCB1K5wOCAfEiTsHaYSFzXxLMg0ngc1cGLiv7FqeyQvMwJnNNHHODe6DvuVW%2BPAeU&X-Amz-Signature=05bc3cbe4623af33726d4c0ef5f0760d477c90d36982ac037fa1c8501c64156b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

