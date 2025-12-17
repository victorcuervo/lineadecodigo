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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQC7S4NZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiH8L97nflFN%2BOFWUtK4gDH4I82b%2FYsoFgVzbsNTM1WQIhANeAht%2BO%2BNMsFmLdlB2VQwvVeMtBQrGKlMToEVQTDSPVKv8DCHQQABoMNjM3NDIzMTgzODA1IgxybncJQLs89I6%2Fl3Uq3AMJWfJsSCRSMaxasPDSINALYuG4nhBBKWWjgiD24%2F7S1Z3QDFL1as%2FOsNoNBiQw%2FS9qfUCieQxYuT8agc3e5norNHoG3EEJvghAeOZkL1BZMxy4pd2L7qsEUqXn16%2F13olqk1cafejW88NzlXvrvq4R4FljbIGkSyFg2Pxv8STQ%2FhRoPiw51KK3I7fTkYqI5dva6hgIwQkJA00p%2FdCwkVggaEnO%2Bzg1sJUvDJWSfsw%2FrpGI%2F9tFQy3%2B%2FuBPr9cghXmY%2BhcaqXU1eV%2B9HWXZ4l69hlelFWSqf%2BmCG2q0o8genCpkDTKNB0b6T1TFLFQU%2FvA2qOUy7faKhU8%2BI6gb%2Fb1WRO0beqdMm9Um9mx13EL7zx0KSSk4DhkCu6gChyHJnGw2cYm5RK%2BocxxBMdYXExHlxX43WBC9U%2FgDInGHQm63t8tQujLOS77KtK11nMErLjW3EwxvTvryxzaVa8r2mWltd1gzmbVaVsK93ImlZ48INPPBJZkCq3%2FmM48moIklOX4NZ%2Bkqw1WG73BYU09Wm74qhqYpPpl3bBYTnKaxXQ7IttPoLjsoLjME%2FwskhTdn2JgNcK2YUqyyEnly4QBvU5j%2F4AoFgmqwvwCNPliu3bvR7rqmzkmClm6SVhWihjD8sojKBjqkAXfz7iYspc32Iuj8%2FxEExzYEsw24mT3NEZUFgQ%2B0kZmwOS6LhrD2wNj%2BPqHPa2AD5jdH4ySZreJNnG7W2qrUBV33C6eqkFFN3j6ElbjpKqvP0dVqLqU6VGUHUi%2BGMWXz4BmcG4ZSLZPxR9PGyUYNHuuNN72vZEn3ifMwZGnLEr5F9qGF9gQlnSdqvk5j7EUoOOMTwTbLHdITHNMpTIDd21ZjJuaL&X-Amz-Signature=c35a813c8aa41a0d7d8ef353022461fdc1b39c5a8b005b331b64a26ce5db9587&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WQC7S4NZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T032444Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDiH8L97nflFN%2BOFWUtK4gDH4I82b%2FYsoFgVzbsNTM1WQIhANeAht%2BO%2BNMsFmLdlB2VQwvVeMtBQrGKlMToEVQTDSPVKv8DCHQQABoMNjM3NDIzMTgzODA1IgxybncJQLs89I6%2Fl3Uq3AMJWfJsSCRSMaxasPDSINALYuG4nhBBKWWjgiD24%2F7S1Z3QDFL1as%2FOsNoNBiQw%2FS9qfUCieQxYuT8agc3e5norNHoG3EEJvghAeOZkL1BZMxy4pd2L7qsEUqXn16%2F13olqk1cafejW88NzlXvrvq4R4FljbIGkSyFg2Pxv8STQ%2FhRoPiw51KK3I7fTkYqI5dva6hgIwQkJA00p%2FdCwkVggaEnO%2Bzg1sJUvDJWSfsw%2FrpGI%2F9tFQy3%2B%2FuBPr9cghXmY%2BhcaqXU1eV%2B9HWXZ4l69hlelFWSqf%2BmCG2q0o8genCpkDTKNB0b6T1TFLFQU%2FvA2qOUy7faKhU8%2BI6gb%2Fb1WRO0beqdMm9Um9mx13EL7zx0KSSk4DhkCu6gChyHJnGw2cYm5RK%2BocxxBMdYXExHlxX43WBC9U%2FgDInGHQm63t8tQujLOS77KtK11nMErLjW3EwxvTvryxzaVa8r2mWltd1gzmbVaVsK93ImlZ48INPPBJZkCq3%2FmM48moIklOX4NZ%2Bkqw1WG73BYU09Wm74qhqYpPpl3bBYTnKaxXQ7IttPoLjsoLjME%2FwskhTdn2JgNcK2YUqyyEnly4QBvU5j%2F4AoFgmqwvwCNPliu3bvR7rqmzkmClm6SVhWihjD8sojKBjqkAXfz7iYspc32Iuj8%2FxEExzYEsw24mT3NEZUFgQ%2B0kZmwOS6LhrD2wNj%2BPqHPa2AD5jdH4ySZreJNnG7W2qrUBV33C6eqkFFN3j6ElbjpKqvP0dVqLqU6VGUHUi%2BGMWXz4BmcG4ZSLZPxR9PGyUYNHuuNN72vZEn3ifMwZGnLEr5F9qGF9gQlnSdqvk5j7EUoOOMTwTbLHdITHNMpTIDd21ZjJuaL&X-Amz-Signature=77f9a07c1e4dd3763579b45e89597ef55b6d0069fcc31152ec5b41ee8918dabb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

