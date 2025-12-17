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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RB5GFYW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA46BnQxYL2KJIqFJmVWiAs9lDTpeiMdGsj2UZCft2euAiAd2brJDVJ0Zj3ua9KwP5ZMoMszEEwZ3EEN4LvXxdbmTyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMc%2BiUni58K806ntJmKtwDudcagfi7cWkOliSs2YYiKKS%2BQadKLbfz0BWd8VTABaWXK%2BpvliSCl%2BTbL65xbHRFVFMf0gAAhkRILE7a5dqKvE8DTsrPEPoahVwfGV%2FpFWr3Mubp0elH4GrObtnmWUU9mhTpdBQWzhf0zD02AjwYL8EVaPY9%2BQhNHIFW5Nomlj5mhpUtgV5IyK17juzsd7XVSbqf54RwaLgS4jcNJoNuN0CEohOTB18hXrhTTOHSfIwlV%2FagAsg1Z32%2Bbnw541Wc9uy7i%2Fh%2BycrLbD9zQymRBwMzJNsBw0aL3wlazfeFlaNWaRj9%2BRLz0aBIwDblI19UR1azmwBDuZ1%2B6O9gt0ta8yaaUgJC3JOZ0PnOb9cjSvFdilnD9EAEnIDatuMomxx%2Bh%2FJ2iwKXgCB%2BcQWqTwMTlSwqJn%2FaBCIV1Py4g1%2B6Ayh2vpoV3VfAEHuLYV%2B0y7wyN4I%2BavKkO7xjFtt%2BWV6h4ChHPtFeMWSMIToidFt9Rc6flgP7Ha3VYVLeBai%2Fat%2FMpnpKWNrdIMGmi4OuzIVLnaPjEDAq2U1cmmceOX2QuKrWScROLJf697sOSXYIKh6J%2FaEaaoAvhhbKRBRswyVDpA7TFR6ywBmW1e8sdRI8gJhucVw0Ektf16N8Q1Yw4JeIygY6pgFPFn8thVifZe0jzCq9a%2BAri55NtyI84ZSC0%2B%2B8e6PTcouzKkj9BPQuJvNW0LakSBba%2FqnzzfyE7gqurSUnpDlNeGbF324PrsmsJ8Jt7Y1%2FHXGCQgil646MrOFNKu%2BPQLDuysL5pY7G3zIkFtxFqTBZHE4BVzKimDPGvGxvvO0pRSu%2FA%2FsKRo9lte6YS3Fpb3JCLuCBCTzUC1GqH2GDuQw3mErV8%2F21&X-Amz-Signature=19a8a0a8918f80942da5543945541abd00e5f305fb164d06f8dd4d6afa437e13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666RB5GFYW%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020506Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIA46BnQxYL2KJIqFJmVWiAs9lDTpeiMdGsj2UZCft2euAiAd2brJDVJ0Zj3ua9KwP5ZMoMszEEwZ3EEN4LvXxdbmTyr%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMc%2BiUni58K806ntJmKtwDudcagfi7cWkOliSs2YYiKKS%2BQadKLbfz0BWd8VTABaWXK%2BpvliSCl%2BTbL65xbHRFVFMf0gAAhkRILE7a5dqKvE8DTsrPEPoahVwfGV%2FpFWr3Mubp0elH4GrObtnmWUU9mhTpdBQWzhf0zD02AjwYL8EVaPY9%2BQhNHIFW5Nomlj5mhpUtgV5IyK17juzsd7XVSbqf54RwaLgS4jcNJoNuN0CEohOTB18hXrhTTOHSfIwlV%2FagAsg1Z32%2Bbnw541Wc9uy7i%2Fh%2BycrLbD9zQymRBwMzJNsBw0aL3wlazfeFlaNWaRj9%2BRLz0aBIwDblI19UR1azmwBDuZ1%2B6O9gt0ta8yaaUgJC3JOZ0PnOb9cjSvFdilnD9EAEnIDatuMomxx%2Bh%2FJ2iwKXgCB%2BcQWqTwMTlSwqJn%2FaBCIV1Py4g1%2B6Ayh2vpoV3VfAEHuLYV%2B0y7wyN4I%2BavKkO7xjFtt%2BWV6h4ChHPtFeMWSMIToidFt9Rc6flgP7Ha3VYVLeBai%2Fat%2FMpnpKWNrdIMGmi4OuzIVLnaPjEDAq2U1cmmceOX2QuKrWScROLJf697sOSXYIKh6J%2FaEaaoAvhhbKRBRswyVDpA7TFR6ywBmW1e8sdRI8gJhucVw0Ektf16N8Q1Yw4JeIygY6pgFPFn8thVifZe0jzCq9a%2BAri55NtyI84ZSC0%2B%2B8e6PTcouzKkj9BPQuJvNW0LakSBba%2FqnzzfyE7gqurSUnpDlNeGbF324PrsmsJ8Jt7Y1%2FHXGCQgil646MrOFNKu%2BPQLDuysL5pY7G3zIkFtxFqTBZHE4BVzKimDPGvGxvvO0pRSu%2FA%2FsKRo9lte6YS3Fpb3JCLuCBCTzUC1GqH2GDuQw3mErV8%2F21&X-Amz-Signature=85dc5b5e56075bb809b7abee138522eb979da1ff7727e62104b403426b79eb76&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

