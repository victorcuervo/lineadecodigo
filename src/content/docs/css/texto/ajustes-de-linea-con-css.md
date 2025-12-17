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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672PLUNZ4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQgPnVR4DoOgAcG7IpLQi9AYH3Iq%2B1n3A9CkGnp6xtMAiBcBgiAVQMfoNGglRmv8W10oACAdO%2BmybVQJIpv9t8Stir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7sUEQCsODqNVkyP5KtwDZRXPaWhSmaEzhhk5Ami%2Bj0tLqonA6460Tk09cVv1sqK1hpkZOqYJfeFIMQ5sHmbULGuBazUYiSwu7nGG0tT6E%2F2apA90Ak2Sx861F%2F%2FP6wB%2Fk1PU4zi%2FS8ZD%2FcwEi%2BCjygsL4owK4oZQMeawA1fdn7zE667n8lr8oGOnBJUker4GPezu0IZH07UH%2FkXfh73%2BY%2FIoMu%2Fv%2F2NbF69X5QUCedrTpSY5jz2yn0qRqa0YVC7OspFm0J6zKCw69Rpjt1ug8coa2wdjYnBuRkLshanFm%2FiQ7zrggkcOe41If%2FGFc5Pvbh3Ejy%2BJO4n31%2F7ZX9MzIvp6YEKh8BIRFreRTic%2BNBwwRWtCTggRhEEiDdwaC6Nwstw%2F5WFk2mki3ZKmsZKUkTxLMMEMFY0yvhj81C%2Fd9xDtCynpfaStT0GP5mYojmXMSArDaNZJRZtkp9D86v8aRCxPRB9pVPdb4uCsSp2AZDA9WFzUFo9n%2BnbxO76jX8w7UlKBNt%2BlJYHualHpK7dHy%2BVO2yhCKFuOinfznMZvWYq0uM9UeO7INIz1ScWzbI7uA%2FY82IZ1KBtG%2FzkrW%2FiwEm0jnT0qGxI2KaOCjO4QtEAubu9UWEtxfZKu3FSY9keCxgVEtoj2129FZocw9oOJygY6pgFeqGyLxrsWIR0VJFRarcLQCg1crh9uMdNsMQOKeyfb90chddRMnJZdTK0ca4w5Lkbx2M5eHW7fJSKzE70f5OVNDpaTDANgA5urlmvmFiJOKyvw4YU9d1jxkgwGWsNm%2B9lbuyQ9xUWqg0Qi%2Fyq8dX5TAYHvkzpQjz0USYxBHwDQrYyE7%2BsfSHfuNt%2FUK4HvEHPghh%2BVPOGAptzbt4GBsMYQhZWDUH11&X-Amz-Signature=67ea0be177a7e6cac91cb81baf1d6ed5687f29a7ea58b393192a467cd2c5b5fc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46672PLUNZ4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T055421Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIGQgPnVR4DoOgAcG7IpLQi9AYH3Iq%2B1n3A9CkGnp6xtMAiBcBgiAVQMfoNGglRmv8W10oACAdO%2BmybVQJIpv9t8Stir%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIM7sUEQCsODqNVkyP5KtwDZRXPaWhSmaEzhhk5Ami%2Bj0tLqonA6460Tk09cVv1sqK1hpkZOqYJfeFIMQ5sHmbULGuBazUYiSwu7nGG0tT6E%2F2apA90Ak2Sx861F%2F%2FP6wB%2Fk1PU4zi%2FS8ZD%2FcwEi%2BCjygsL4owK4oZQMeawA1fdn7zE667n8lr8oGOnBJUker4GPezu0IZH07UH%2FkXfh73%2BY%2FIoMu%2Fv%2F2NbF69X5QUCedrTpSY5jz2yn0qRqa0YVC7OspFm0J6zKCw69Rpjt1ug8coa2wdjYnBuRkLshanFm%2FiQ7zrggkcOe41If%2FGFc5Pvbh3Ejy%2BJO4n31%2F7ZX9MzIvp6YEKh8BIRFreRTic%2BNBwwRWtCTggRhEEiDdwaC6Nwstw%2F5WFk2mki3ZKmsZKUkTxLMMEMFY0yvhj81C%2Fd9xDtCynpfaStT0GP5mYojmXMSArDaNZJRZtkp9D86v8aRCxPRB9pVPdb4uCsSp2AZDA9WFzUFo9n%2BnbxO76jX8w7UlKBNt%2BlJYHualHpK7dHy%2BVO2yhCKFuOinfznMZvWYq0uM9UeO7INIz1ScWzbI7uA%2FY82IZ1KBtG%2FzkrW%2FiwEm0jnT0qGxI2KaOCjO4QtEAubu9UWEtxfZKu3FSY9keCxgVEtoj2129FZocw9oOJygY6pgFeqGyLxrsWIR0VJFRarcLQCg1crh9uMdNsMQOKeyfb90chddRMnJZdTK0ca4w5Lkbx2M5eHW7fJSKzE70f5OVNDpaTDANgA5urlmvmFiJOKyvw4YU9d1jxkgwGWsNm%2B9lbuyQ9xUWqg0Qi%2Fyq8dX5TAYHvkzpQjz0USYxBHwDQrYyE7%2BsfSHfuNt%2FUK4HvEHPghh%2BVPOGAptzbt4GBsMYQhZWDUH11&X-Amz-Signature=290becee7fe785246d24b1b16641d0a18a101b0a6614ea686a19ce9e2d583621&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

