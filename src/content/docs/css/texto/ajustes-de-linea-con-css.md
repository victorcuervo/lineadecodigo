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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHBXQAJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTCdO8voYclMLiUxQmy9IjbGCTaTVaRHkD0WCho%2FdHrwIhAKwk3Fq6gWIUnb2h%2Bhqndxje%2BeBP1L1SC3vTJ%2B7PuZG9Kv8DCHcQABoMNjM3NDIzMTgzODA1IgztvxkXOW9N83WTKgwq3AOm0SiGd90TTAd8%2FTqZ0aYQhMKOuoc2JOar3jhuDApb0I%2FNjHoEWerUnlQGfSmpqNUgOhZ0oFfK5juMGPj4uT6uMtJoAd05atWsHGGQPw55F5cYFdtzSSDr8XuOo7BAmJcIoaDCBv07QFmHMsqDdO%2FUXhybPVuKJxkImoHh6gz3lSj%2BxYZwGLyvcPuUtRmz6wlyLuCujSOB1D%2FwqdsK80y2nt8e6o7n5%2FsXUJLWJZnPjFey7cpTyDUA4l7pZ1MSYFYM4XMnD0rKHgYUTnt24T4sew5CTU%2BxCayeaT4cgM4lUcJoHJJgUXmCPKwXLrIAgRIoVVSx6H9zf%2BHWEp7zzN2rfdKB5U07foc0jCLkmjw3wSyM7mwZpl3R2iuYZe8w94zlum0DruJ3JS0rv56z2kgYvN2rIPTbfGWq%2FfhEjWsbLdZOs9f7ajAt5BLnYramSDwEfOIKZ2hnxUTcn7wgnYNMSv0hABDJv7HDhQricDtC0oOFc4cr5Z%2BUR2NYv9y8WPJF7Auxutyo4pmVFpM0L5VoWGun0tm%2FovAlX5%2FNixAFkJD0oXNPyAAKX2xXGKOfZqPRIfvm8SAryCCCQBkRvaIzP%2FzBkGanZMIAzlUnDraMZuq1SZx9KHPcNiaBODCsg4nKBjqkAXvrC6iZuJBQZ2Z8If%2FRhEBhvW7mBW6o6F%2Fitasmfs%2Bel0mI8izsabWs6O2l4m%2FXMvtlfNsjidmI7WYzIAnOKwlm1O22AzMK8UqFfK17JRjAo%2BepYjWlhTfbOpKM9Xu67Z8b9e6h9XGZbDgMS8Q23y%2BJH%2FFIIsGKuvCYPxdVC%2F%2FSPpPGXmN4iHoO%2BLOCx9fvzYfCubagCAr00UJ6IFNQRnAzKhMY&X-Amz-Signature=e333cf1d84b43a6c71fc084d55c5aa904c9ae47e36ca8fcbffc2b9c1e779fcde&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665PHBXQAJ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T062307Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDTCdO8voYclMLiUxQmy9IjbGCTaTVaRHkD0WCho%2FdHrwIhAKwk3Fq6gWIUnb2h%2Bhqndxje%2BeBP1L1SC3vTJ%2B7PuZG9Kv8DCHcQABoMNjM3NDIzMTgzODA1IgztvxkXOW9N83WTKgwq3AOm0SiGd90TTAd8%2FTqZ0aYQhMKOuoc2JOar3jhuDApb0I%2FNjHoEWerUnlQGfSmpqNUgOhZ0oFfK5juMGPj4uT6uMtJoAd05atWsHGGQPw55F5cYFdtzSSDr8XuOo7BAmJcIoaDCBv07QFmHMsqDdO%2FUXhybPVuKJxkImoHh6gz3lSj%2BxYZwGLyvcPuUtRmz6wlyLuCujSOB1D%2FwqdsK80y2nt8e6o7n5%2FsXUJLWJZnPjFey7cpTyDUA4l7pZ1MSYFYM4XMnD0rKHgYUTnt24T4sew5CTU%2BxCayeaT4cgM4lUcJoHJJgUXmCPKwXLrIAgRIoVVSx6H9zf%2BHWEp7zzN2rfdKB5U07foc0jCLkmjw3wSyM7mwZpl3R2iuYZe8w94zlum0DruJ3JS0rv56z2kgYvN2rIPTbfGWq%2FfhEjWsbLdZOs9f7ajAt5BLnYramSDwEfOIKZ2hnxUTcn7wgnYNMSv0hABDJv7HDhQricDtC0oOFc4cr5Z%2BUR2NYv9y8WPJF7Auxutyo4pmVFpM0L5VoWGun0tm%2FovAlX5%2FNixAFkJD0oXNPyAAKX2xXGKOfZqPRIfvm8SAryCCCQBkRvaIzP%2FzBkGanZMIAzlUnDraMZuq1SZx9KHPcNiaBODCsg4nKBjqkAXvrC6iZuJBQZ2Z8If%2FRhEBhvW7mBW6o6F%2Fitasmfs%2Bel0mI8izsabWs6O2l4m%2FXMvtlfNsjidmI7WYzIAnOKwlm1O22AzMK8UqFfK17JRjAo%2BepYjWlhTfbOpKM9Xu67Z8b9e6h9XGZbDgMS8Q23y%2BJH%2FFIIsGKuvCYPxdVC%2F%2FSPpPGXmN4iHoO%2BLOCx9fvzYfCubagCAr00UJ6IFNQRnAzKhMY&X-Amz-Signature=ee4ba25d266a6cec7ab30485e7215da2b288bf0229205188c8f4b0e1a6645cad&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

