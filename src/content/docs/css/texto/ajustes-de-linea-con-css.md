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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645BEW5QH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxmlF293YlTLmYWV1rHfjSgN0oUBblv2VmxtaUyo8VrgIgN2rVjN3BlTwClaNmNsZa0ZsfkrJhesC%2FSq3CsNINSxgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNL%2Bm5WWxABZdXM7KyrcA28Cw3wZWcdloHYRKgKy6pXg5y5sm7Wi2XVK9uF789r6ikptpmV1UZITpJVr%2FAhF1L9efRNM42liqgVyE38CYiPTxDSe7xTkZy5s4O1A6YxPNyOxIt23Wj7sTPZ4TWQCHf%2Bc5On5r9b59KofyMbGsH8sCTyhDcGna%2BeLri5IAw5Wh1NBWYedq%2BP7UcuLtLRCRjTtNCtIPuiWyClIBOBxeMPxXXkuFPN7e9wQztV4oIn%2FezP%2Bra3bHzjtLM4oLlFZNXmHga54Jh%2BQ77k7J%2F1h3O6SSD5PreyB5SZwt2aNeVztC1kUyNHBPCDwIJck2v%2BOklF%2BeQlnup5ijbSSwRZ%2Flylfp8aQA8fHNp%2BBznmWDpNuvYdcukCbkNW5ujQIYS69Z7ARWUfx5ki%2FBYcKP85VAZ80L58oGyyHkSk1wnDcSvHVp1R2wuYnZGrsvWvC6Z7LijTMZVCF%2B8QPuhr9nXthSsiT81e7XlFoZMFlibF6M57iCBETFVbP4iv2PacmztH4dE3u42iZiNuhruTIUIGv5WY%2Fz1SE9vK5ZTmMBstRmDKubs2m29WUyASoskE48yJQZh9TeRrn38n2YaKmuZb%2BauPIiNs8bXPMuiNfXQmnVT6j3eXdSfs4qc6RuA2ZMObFisoGOqUBpU0qOXzQ6C5zZSggVoNKBzP9h3u1cQk1ke9WTy8wCy18igBtEXsea%2FfiKGph1AtccOhFBmBIMXhQL0YokHkNPwTgsnAsS4hKQCIzBbt53g8tz6T6Nr2QoEVE%2BeY%2B1jIi3kvPL36S8xzaFfUXAkUWVzi4x41Dy3udzbVzhwcBzLCr%2BkdJlgpAMT2ykfo2i6f0foHCAWnE%2FQsrJORGy9OxrXTRJ2gy&X-Amz-Signature=32fd4a37193cf40f151532e8f86163f314564ff525423780f6557cf0aacdacba&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46645BEW5QH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T130848Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDxmlF293YlTLmYWV1rHfjSgN0oUBblv2VmxtaUyo8VrgIgN2rVjN3BlTwClaNmNsZa0ZsfkrJhesC%2FSq3CsNINSxgq%2FwMIfhAAGgw2Mzc0MjMxODM4MDUiDNL%2Bm5WWxABZdXM7KyrcA28Cw3wZWcdloHYRKgKy6pXg5y5sm7Wi2XVK9uF789r6ikptpmV1UZITpJVr%2FAhF1L9efRNM42liqgVyE38CYiPTxDSe7xTkZy5s4O1A6YxPNyOxIt23Wj7sTPZ4TWQCHf%2Bc5On5r9b59KofyMbGsH8sCTyhDcGna%2BeLri5IAw5Wh1NBWYedq%2BP7UcuLtLRCRjTtNCtIPuiWyClIBOBxeMPxXXkuFPN7e9wQztV4oIn%2FezP%2Bra3bHzjtLM4oLlFZNXmHga54Jh%2BQ77k7J%2F1h3O6SSD5PreyB5SZwt2aNeVztC1kUyNHBPCDwIJck2v%2BOklF%2BeQlnup5ijbSSwRZ%2Flylfp8aQA8fHNp%2BBznmWDpNuvYdcukCbkNW5ujQIYS69Z7ARWUfx5ki%2FBYcKP85VAZ80L58oGyyHkSk1wnDcSvHVp1R2wuYnZGrsvWvC6Z7LijTMZVCF%2B8QPuhr9nXthSsiT81e7XlFoZMFlibF6M57iCBETFVbP4iv2PacmztH4dE3u42iZiNuhruTIUIGv5WY%2Fz1SE9vK5ZTmMBstRmDKubs2m29WUyASoskE48yJQZh9TeRrn38n2YaKmuZb%2BauPIiNs8bXPMuiNfXQmnVT6j3eXdSfs4qc6RuA2ZMObFisoGOqUBpU0qOXzQ6C5zZSggVoNKBzP9h3u1cQk1ke9WTy8wCy18igBtEXsea%2FfiKGph1AtccOhFBmBIMXhQL0YokHkNPwTgsnAsS4hKQCIzBbt53g8tz6T6Nr2QoEVE%2BeY%2B1jIi3kvPL36S8xzaFfUXAkUWVzi4x41Dy3udzbVzhwcBzLCr%2BkdJlgpAMT2ykfo2i6f0foHCAWnE%2FQsrJORGy9OxrXTRJ2gy&X-Amz-Signature=dcedfbaba2af587ef2ede6c8e5561537f61fa0b4a850de5d75c0129222531fb0&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

