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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDIIS7M4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAy4fRrgO%2FD3t9qc9yYsh1F4H2IP9pNSjG80H4y0V%2BoKAiBIaY3TiITfR3dm4I3WQvElWmiQZac%2BX32S1zN8%2FR%2FmkCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMURyxVEzRJ%2BDKHYtqKtwDVfprISu2p%2FJq0vX6HrZrCa3yFnKsEdPXX2Qr3%2FQ761Au7W8DY3IzumvqY0NHjD%2FYAYf4uDLv86WQMhR%2BkEQBrX44r7oNuK9vQ63mrl1qZ6UCNlHaf%2BYqP6ehSwAjL8%2FcjydmGmHhewGCzLNehCDH42N6H8yJD4bP%2BJDNu5%2B%2B7jdpuCnvdgWOXpL8qDo0hAUILXPKG9LvHJwuxNiaUrkydWwNMIelxyxIlObQcv5E7FAlIoKw7zvpmg%2BqDjGR8RMSyPkVrSbF7ghCh%2Fxe2QHekcSHuz4AFzTI02Sripm2r8g%2FGPRtATSqHdvEoZ0JTkLe1xsBVDLyYmsBLp%2BzjMh3vQH4O9kIs1DcjTVDCOwFF1DomH33c9KnvA7a1nplHC%2FeKY4gJppvyCbKqkiY37aLnk%2FXvaEQszEJau5jCFIB3feDcr5AOnkGfDYVxkPq2sEnLVxj8fZeXFOw8fFTo0qsVJc6jWIw3Pzf7UIZbsAV5V2sd9UwNFUs99GceAOS1UZq4TO5dpjbZ6J11huvwz%2BlL8JvJMjT8kc9C9fOW6Ha2zTupj03fXVuouQCdJIHznO92vOm5RoytW184t%2B5yRuAm6%2F3hRfZrL9csw152Dc3m88QBer817NSgrhADJsw8OGKygY6pgFqiDjKCN0W68r9cf63sbr1pHjjyP6IvEzImQiBzmQcvqSgYPssbr8bjUoHB50ZPEfqVASkgDW0ZT5JC5MvtdVfhkg4pB2hIRX6nVdjj%2BPV5cafAAMJTv%2FVT01hg8ZaBGrjVn0nnzBEoCnipMVvN470RkUlA1THD4hLjjXwEbYxM7hFXcCl4CQB%2BKpXqJzggbD9RP1u4%2BSJ%2Fx%2Ba9jADX9RJsOSbv9w6&X-Amz-Signature=f195aa565d8ab35a1b87e2bdbbf1645d058f3352ec6921fca7c1bc0795aeaf66&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YDIIS7M4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T141141Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAy4fRrgO%2FD3t9qc9yYsh1F4H2IP9pNSjG80H4y0V%2BoKAiBIaY3TiITfR3dm4I3WQvElWmiQZac%2BX32S1zN8%2FR%2FmkCr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMURyxVEzRJ%2BDKHYtqKtwDVfprISu2p%2FJq0vX6HrZrCa3yFnKsEdPXX2Qr3%2FQ761Au7W8DY3IzumvqY0NHjD%2FYAYf4uDLv86WQMhR%2BkEQBrX44r7oNuK9vQ63mrl1qZ6UCNlHaf%2BYqP6ehSwAjL8%2FcjydmGmHhewGCzLNehCDH42N6H8yJD4bP%2BJDNu5%2B%2B7jdpuCnvdgWOXpL8qDo0hAUILXPKG9LvHJwuxNiaUrkydWwNMIelxyxIlObQcv5E7FAlIoKw7zvpmg%2BqDjGR8RMSyPkVrSbF7ghCh%2Fxe2QHekcSHuz4AFzTI02Sripm2r8g%2FGPRtATSqHdvEoZ0JTkLe1xsBVDLyYmsBLp%2BzjMh3vQH4O9kIs1DcjTVDCOwFF1DomH33c9KnvA7a1nplHC%2FeKY4gJppvyCbKqkiY37aLnk%2FXvaEQszEJau5jCFIB3feDcr5AOnkGfDYVxkPq2sEnLVxj8fZeXFOw8fFTo0qsVJc6jWIw3Pzf7UIZbsAV5V2sd9UwNFUs99GceAOS1UZq4TO5dpjbZ6J11huvwz%2BlL8JvJMjT8kc9C9fOW6Ha2zTupj03fXVuouQCdJIHznO92vOm5RoytW184t%2B5yRuAm6%2F3hRfZrL9csw152Dc3m88QBer817NSgrhADJsw8OGKygY6pgFqiDjKCN0W68r9cf63sbr1pHjjyP6IvEzImQiBzmQcvqSgYPssbr8bjUoHB50ZPEfqVASkgDW0ZT5JC5MvtdVfhkg4pB2hIRX6nVdjj%2BPV5cafAAMJTv%2FVT01hg8ZaBGrjVn0nnzBEoCnipMVvN470RkUlA1THD4hLjjXwEbYxM7hFXcCl4CQB%2BKpXqJzggbD9RP1u4%2BSJ%2Fx%2Ba9jADX9RJsOSbv9w6&X-Amz-Signature=1dd362ecc6bc29d7e09dff881b42f0c720ac339eecf948296415994a10f9903e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

