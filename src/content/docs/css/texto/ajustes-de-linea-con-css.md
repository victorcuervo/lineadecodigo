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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLJEL2K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYmOfDVqA%2Bn63325WP6GtryNqIjDCItYZGsgDMpmENeAiBEAxn96%2B2X1S4Dg7xM4i3eBkE%2BUEw5fV1Up8Vdjp2kBCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMFS7L1BArdOz4nedSKtwDyL%2FEI8IhIU9tgwC6%2FVpsPilnRhaxtpkAoRlBhePC403IN%2FKykdZYeoecSP9Sx8HFrq64V0KONPINdvjsuybH0r%2F9HmL9OOYytOUDv4JX7d4RpWUjppxqn7jvcD6Vipt39Uxb7RwHGOHgq5HqIijew1sYwGjWzlO%2BJtYhfuuMMZbZxAxL9KQJmYFkcpipePXOPgUv3EpIlJ%2FDQrMiWNXtezpIGa1t0WWUnUrLiWldTpw6fRFuKfp5jBhBDwrW0Cab%2BOx9AlRtgH5ABp7riTIS6h5kNBKL2O307L%2BKwsYjMaxaO22FXVBRVVhjR5ZauTBUSMKlZz7gNx9qv8LAEl5Mr0Yd6b0f4VAdcDWgndGdnWC5QchSS93iNocA2a2TGAg3SVRFKaL9lfS532oGdpa7BPHXCJG%2BOXHiz%2BhVkNPijFWanL4kcVntcj8yeZEG3pO7MgZPLkJWHQCWKImOyIAB6BHjKYGgdAFHaVNujGpkA1tCSjYG3g6tLxhSKbealUwZyrEH%2BdhssEg66paX1q7uw%2FmUEnWDq1CuYac%2BUznc174Pjg%2Fj71dQBnDsVIMqEvHXR%2FvPPmIUZZpVCTFOwju6kPK2Etk30Uxzzc%2F4Ua94ukL7i5KFP5C6q%2FHx1owwz8aKygY6pgEX6Dqtlu5lwmNjUO4OBqrWiR%2Fq%2BCd9GM85XXjtnAuJS2uIJNE8gU1sdNb7HkOj7WWbqsBTxJxNuvUTYkpN3ePcfldRI8mSwcn5o7uL8WflwJbBkwx67hu%2FTNyBsBk6Fuh4TQ78UylMD0h5owvpSfI7UVMzkZMRuQmWwRzC2EMk0qnuQoYiR1q7154JalRhbEg%2FKM2k%2Fe39Ysu7wEvIhNsa1EJU93Se&X-Amz-Signature=3c9c5597aad20c0733ad5ffebbc398b6e5b774d46e2f8d746dd35cc91031b531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466UWLJEL2K%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T125900Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIHYmOfDVqA%2Bn63325WP6GtryNqIjDCItYZGsgDMpmENeAiBEAxn96%2B2X1S4Dg7xM4i3eBkE%2BUEw5fV1Up8Vdjp2kBCr%2FAwh%2BEAAaDDYzNzQyMzE4MzgwNSIMFS7L1BArdOz4nedSKtwDyL%2FEI8IhIU9tgwC6%2FVpsPilnRhaxtpkAoRlBhePC403IN%2FKykdZYeoecSP9Sx8HFrq64V0KONPINdvjsuybH0r%2F9HmL9OOYytOUDv4JX7d4RpWUjppxqn7jvcD6Vipt39Uxb7RwHGOHgq5HqIijew1sYwGjWzlO%2BJtYhfuuMMZbZxAxL9KQJmYFkcpipePXOPgUv3EpIlJ%2FDQrMiWNXtezpIGa1t0WWUnUrLiWldTpw6fRFuKfp5jBhBDwrW0Cab%2BOx9AlRtgH5ABp7riTIS6h5kNBKL2O307L%2BKwsYjMaxaO22FXVBRVVhjR5ZauTBUSMKlZz7gNx9qv8LAEl5Mr0Yd6b0f4VAdcDWgndGdnWC5QchSS93iNocA2a2TGAg3SVRFKaL9lfS532oGdpa7BPHXCJG%2BOXHiz%2BhVkNPijFWanL4kcVntcj8yeZEG3pO7MgZPLkJWHQCWKImOyIAB6BHjKYGgdAFHaVNujGpkA1tCSjYG3g6tLxhSKbealUwZyrEH%2BdhssEg66paX1q7uw%2FmUEnWDq1CuYac%2BUznc174Pjg%2Fj71dQBnDsVIMqEvHXR%2FvPPmIUZZpVCTFOwju6kPK2Etk30Uxzzc%2F4Ua94ukL7i5KFP5C6q%2FHx1owwz8aKygY6pgEX6Dqtlu5lwmNjUO4OBqrWiR%2Fq%2BCd9GM85XXjtnAuJS2uIJNE8gU1sdNb7HkOj7WWbqsBTxJxNuvUTYkpN3ePcfldRI8mSwcn5o7uL8WflwJbBkwx67hu%2FTNyBsBk6Fuh4TQ78UylMD0h5owvpSfI7UVMzkZMRuQmWwRzC2EMk0qnuQoYiR1q7154JalRhbEg%2FKM2k%2Fe39Ysu7wEvIhNsa1EJU93Se&X-Amz-Signature=81fcb49046d2d86870612e5efad339d12c2355cca0571022a6c0680e90b7c8db&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

