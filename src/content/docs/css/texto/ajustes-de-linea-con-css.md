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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBED2SA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbVqQGLpR%2BG%2FkvfJffrzkw1Kjh1iNpDnVYAQ1d1Zu35QIgK0%2BbDYSxLyRw3KCRTLrFcTKai4Ga%2F8eqy516k%2FUJf%2BQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDO%2FSeDzdqE4u%2BWi4TSrcA05IhCSDJief97hLj4%2FHP%2BmyVv19S8n6pxweD7jXVsYgFXDJu0k7Y7Xdss7lrNnJZwsTLmZPAO3iHUR2d8Fh2a31ZAAngAdqOZ2l2c%2FSTpIfTb0ET8B%2B0HFqcQM61SB5SfFrbpORrEYjSIalpOfWF%2FHkbfDMWuBWqP5dfErSJHeZcwvhFyfIAfxjH%2FWpq3N%2FZgtYSFNeLJby%2FZ4HLQW7VPFAI%2FQ4HkIds6s1yd6053MYqMRorAzdwEdUFRWMkRKD9TMxgMwGRkjCjMUJCoG6WS3vGt6354FFQYzDF5phvnM9N8m2O2iNC4Hv9EAqWVM1j61WCPpHLhcBz%2B%2BrIGPkYUJKtIGz0JnFmQIEC1AJ9e0umS93EacVkxLAhsa61fZmY36ZD5hRVy%2FKMO%2BWH5b2uWBiI9i1oPMAE3NhPX86ar%2FOJEMljofDUy5iTzq5915HmtyfsnAx0BHLDTI8GAHxdgWv5WiFNZQU2i4B%2Fi1%2Bne9mivwAUxBU0HBq9QlBM2QDkDKsgNT7XtXk27zrE7S5NGjG7ZYqHwdBkabPcI0SOVVmkNSHMlNKN5gEL7SaCYTtvGJ3Ll2om9DNjLJNbyvuI0IAAr8DsJCwYNleeAsnWDJuCiZXqOvbXFf3MDXKMPzOiMoGOqUBTH%2FEQykSwQd2vFgmO9p7MB5o5sD4gcQHJaTZxtlvvUFt9ilzz%2BhTpfqF8ajt5daAVwZgZ5x4g0JB%2FVE01UE65DLWzR05pg9b%2BkFDEP66%2B7g8ibevX0ciWSkzgYdgD0arIZdCnCUDEMIQkVBkY9vda%2Fk0dXk3%2F6YvPntqNWce%2BYdtUHuNShQ8SPwjgSwjGRKCnrNPaqnSt6WQFTW%2Bx%2BnyPYRHDOqz&X-Amz-Signature=738ff3f4a50b2757c9e00a8655b6153dec3f8a69f43b99c5dac5ba885066a33a&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664EBED2SA%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035646Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQCbVqQGLpR%2BG%2FkvfJffrzkw1Kjh1iNpDnVYAQ1d1Zu35QIgK0%2BbDYSxLyRw3KCRTLrFcTKai4Ga%2F8eqy516k%2FUJf%2BQq%2FwMIdRAAGgw2Mzc0MjMxODM4MDUiDO%2FSeDzdqE4u%2BWi4TSrcA05IhCSDJief97hLj4%2FHP%2BmyVv19S8n6pxweD7jXVsYgFXDJu0k7Y7Xdss7lrNnJZwsTLmZPAO3iHUR2d8Fh2a31ZAAngAdqOZ2l2c%2FSTpIfTb0ET8B%2B0HFqcQM61SB5SfFrbpORrEYjSIalpOfWF%2FHkbfDMWuBWqP5dfErSJHeZcwvhFyfIAfxjH%2FWpq3N%2FZgtYSFNeLJby%2FZ4HLQW7VPFAI%2FQ4HkIds6s1yd6053MYqMRorAzdwEdUFRWMkRKD9TMxgMwGRkjCjMUJCoG6WS3vGt6354FFQYzDF5phvnM9N8m2O2iNC4Hv9EAqWVM1j61WCPpHLhcBz%2B%2BrIGPkYUJKtIGz0JnFmQIEC1AJ9e0umS93EacVkxLAhsa61fZmY36ZD5hRVy%2FKMO%2BWH5b2uWBiI9i1oPMAE3NhPX86ar%2FOJEMljofDUy5iTzq5915HmtyfsnAx0BHLDTI8GAHxdgWv5WiFNZQU2i4B%2Fi1%2Bne9mivwAUxBU0HBq9QlBM2QDkDKsgNT7XtXk27zrE7S5NGjG7ZYqHwdBkabPcI0SOVVmkNSHMlNKN5gEL7SaCYTtvGJ3Ll2om9DNjLJNbyvuI0IAAr8DsJCwYNleeAsnWDJuCiZXqOvbXFf3MDXKMPzOiMoGOqUBTH%2FEQykSwQd2vFgmO9p7MB5o5sD4gcQHJaTZxtlvvUFt9ilzz%2BhTpfqF8ajt5daAVwZgZ5x4g0JB%2FVE01UE65DLWzR05pg9b%2BkFDEP66%2B7g8ibevX0ciWSkzgYdgD0arIZdCnCUDEMIQkVBkY9vda%2Fk0dXk3%2F6YvPntqNWce%2BYdtUHuNShQ8SPwjgSwjGRKCnrNPaqnSt6WQFTW%2Bx%2BnyPYRHDOqz&X-Amz-Signature=af2858c5c6e0acb6b1d77dc5cfbce9d385b4c35c011b538467777e3a35f02026&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

