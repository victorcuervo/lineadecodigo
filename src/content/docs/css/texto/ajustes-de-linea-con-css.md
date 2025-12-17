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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRWTWTI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQeUVvXEi%2BoVv3msF059cRKuVRyfxySP%2By4ov3KKWeEwIgdftuFAHofsQdZBf0vpzSf5GWqOMLZ%2F%2BeqoaJ3Pzy4nQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B38HoFI9UvPfDBayrcA1tWe4rUc8%2FwVMEwXaR%2FdBd5RZUrAtgYcFPxms3sGIFUeXSNX57Q4Pr9KCp9dDe4FeKbVVTtIM0HOHIgwi6tN9pEM0yV2Uxzgws1FmXoachBGk5UoQSCD4vwPyBDC1EiquUMi4EkJVsets%2BC08mJylm%2FSHcIgscDV3axK7hK9S1cf0mG%2Bia5lQodqnmmCLS7Ed25QQ%2FCfVnwiaGRRcey4LXrnLvEKBmlKrSPM%2FQ5HA8DwvopjWeGbPbFx6UBUQNzXJr5SLsGMkhS6jeZLx5OPawGTtoRzneLaMchQ1f2nyDuN1bD2K9Blr%2F8AvXwbTuwWJJBU6asM4HlMOy%2BzFIems5ZEcQan4Ioy7hwH6kom2jrm1RZTx8qWT7wmPEmbSbeF7sMHCwKvkt8SiaAAWLxkzMEXz0BRKdq7rAiNQsBYfaKVjNcrIvhOrL0kWiS3ZPwDB7yogTApN5kuhYMMsHkp%2FdFeILFFK%2F2RZSo5wsZe%2Fxrf4AXrhNLqki17FEbYSgilms1EO9dLrkeSuvpxSVvwHz1xqyiMJhFSMqzvoMMf49tBhX3fW5j4UuUqn9m2%2BghtrWbwqJcqJjB05umqOh%2Bm6NK2ZsBJu1NPlqj4qRvs1fzIhf3%2FcmlZ7rj1w%2FHMJyujMoGOqUBrYDF1snpkOnemVpPMSdFe4mDH83q5li16hfd%2Fk5NIdOKNk4PL15yKfr2mfmm8JCUmsQDM%2FsRMGzuq61GApfKIvEGKIxCLN9Iw80skLJVYyL%2BWlDBv5l9xx%2B6mMEY7KH45iv04oyETWiBLR0VUwDGEF1v788YQZgQBjbrd9q%2F5%2BP4RyNxhkVQMpUlPD0twMisRlZsEsTvi681CayNrvJT0XLXYZci&X-Amz-Signature=8072492f94246aea133f2c9099fecd27a57f3fe092c32a156b06ab25981dbb13&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RDRWTWTI%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T212831Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEL3%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDQeUVvXEi%2BoVv3msF059cRKuVRyfxySP%2By4ov3KKWeEwIgdftuFAHofsQdZBf0vpzSf5GWqOMLZ%2F%2BeqoaJ3Pzy4nQqiAQIhv%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FARAAGgw2Mzc0MjMxODM4MDUiDM%2B38HoFI9UvPfDBayrcA1tWe4rUc8%2FwVMEwXaR%2FdBd5RZUrAtgYcFPxms3sGIFUeXSNX57Q4Pr9KCp9dDe4FeKbVVTtIM0HOHIgwi6tN9pEM0yV2Uxzgws1FmXoachBGk5UoQSCD4vwPyBDC1EiquUMi4EkJVsets%2BC08mJylm%2FSHcIgscDV3axK7hK9S1cf0mG%2Bia5lQodqnmmCLS7Ed25QQ%2FCfVnwiaGRRcey4LXrnLvEKBmlKrSPM%2FQ5HA8DwvopjWeGbPbFx6UBUQNzXJr5SLsGMkhS6jeZLx5OPawGTtoRzneLaMchQ1f2nyDuN1bD2K9Blr%2F8AvXwbTuwWJJBU6asM4HlMOy%2BzFIems5ZEcQan4Ioy7hwH6kom2jrm1RZTx8qWT7wmPEmbSbeF7sMHCwKvkt8SiaAAWLxkzMEXz0BRKdq7rAiNQsBYfaKVjNcrIvhOrL0kWiS3ZPwDB7yogTApN5kuhYMMsHkp%2FdFeILFFK%2F2RZSo5wsZe%2Fxrf4AXrhNLqki17FEbYSgilms1EO9dLrkeSuvpxSVvwHz1xqyiMJhFSMqzvoMMf49tBhX3fW5j4UuUqn9m2%2BghtrWbwqJcqJjB05umqOh%2Bm6NK2ZsBJu1NPlqj4qRvs1fzIhf3%2FcmlZ7rj1w%2FHMJyujMoGOqUBrYDF1snpkOnemVpPMSdFe4mDH83q5li16hfd%2Fk5NIdOKNk4PL15yKfr2mfmm8JCUmsQDM%2FsRMGzuq61GApfKIvEGKIxCLN9Iw80skLJVYyL%2BWlDBv5l9xx%2B6mMEY7KH45iv04oyETWiBLR0VUwDGEF1v788YQZgQBjbrd9q%2F5%2BP4RyNxhkVQMpUlPD0twMisRlZsEsTvi681CayNrvJT0XLXYZci&X-Amz-Signature=066535f0ea2f6e1726a2d93bb24da015609c53f9cddf21406a59be9ebab2e8c2&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

