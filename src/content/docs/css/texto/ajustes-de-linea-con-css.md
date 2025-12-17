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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJRH5SZ4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0%2BXCzr7KCEn8jP%2BkMdG2JvEEkFHHwdh9eNw0ZQnR47QIhAKhnLnaNDZIAidp90oqIoEkITNkwWWhsjI7X8X7VsU12Kv8DCHMQABoMNjM3NDIzMTgzODA1IgxjYx%2FWkXQ7uvHD1twq3AOW%2FwtwaZ%2FLeRezGhkNc2xfwTid0AT6v1AEi8RgX9ejxpXZQVOiUSFUutmqr5cLsUnSD%2BX5%2FYVYgU7AcFrh%2Ft54kRsEXWru8pXMJpH49UDSkZLVg9vrtJC5pqJtvXQawHC0LYCDi94IEvQM%2FGtoKCpXbu3Sv32IEAadtdOJjbTFsSTMQBjMbe9JHZansgoxS6hKJ5MnUBFPjdtysCEPk4IVz%2FBbz7zY9AHlMJAcjMGddnZ8Qp7Si9z8S6qEv%2BSHBD2gD3HWL754bnPc6XGFpvo45Ahy43ZKskh2%2BB6ZDTWpgcvvDHjtY9TGB7qgvW1dVy9%2F%2BdcjnyJR95Mkz5nwHnlbHHVnSwq0%2FayEg5LAK9e%2FQppzph2kUfyJqwDbbDCs5xguLMXe8Y4DGnl8xpezCt4gvO5D1n3kdO11yufxyXq9qFgJO1v3fgpNt02Ctkr3g0a9RKAUvvneBN9PtjBNDeq9bbiSfg2k5c4tcWPIBekY2oB8Akzb9bImfE02DbKimgpAIR1%2Bw1fA0NgyohpGPLuZoz6zDqni5%2B%2BZELkhZsdC%2BSLv86LBrOEgzzry6%2FqdGMCkr4kpbhmxE0%2Brkc6ap6hl4PuQ9fJnIjurblQNU0P0cy1ITNnA%2BCdVdjM2fDDulojKBjqkAVCusfSQlOIUh3JNqPtncAm5pX2JUEoKIFYHD5FSsU9gMvx2vArQU4BcwcOvQ6cpRAwGFHufv4DjL7jIqObKoQ13ASgBJOlBb3ooETF%2F4x%2Bal8J14N0IO5ie4mu4xOboMFFvPiTChByEEw7PLI%2Fs8ZUANS12vNa1JNjWlDizBBjDmOMz2CRPnZJczUYQtaNEjwD56Z1rDn7X0fOyMzx4lzXUZ3RT&X-Amz-Signature=2ad448663598ef2d6803e255083e4b7575c6a5b02c91313958f553b3fcc8e3be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YJRH5SZ4%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024356Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQD0%2BXCzr7KCEn8jP%2BkMdG2JvEEkFHHwdh9eNw0ZQnR47QIhAKhnLnaNDZIAidp90oqIoEkITNkwWWhsjI7X8X7VsU12Kv8DCHMQABoMNjM3NDIzMTgzODA1IgxjYx%2FWkXQ7uvHD1twq3AOW%2FwtwaZ%2FLeRezGhkNc2xfwTid0AT6v1AEi8RgX9ejxpXZQVOiUSFUutmqr5cLsUnSD%2BX5%2FYVYgU7AcFrh%2Ft54kRsEXWru8pXMJpH49UDSkZLVg9vrtJC5pqJtvXQawHC0LYCDi94IEvQM%2FGtoKCpXbu3Sv32IEAadtdOJjbTFsSTMQBjMbe9JHZansgoxS6hKJ5MnUBFPjdtysCEPk4IVz%2FBbz7zY9AHlMJAcjMGddnZ8Qp7Si9z8S6qEv%2BSHBD2gD3HWL754bnPc6XGFpvo45Ahy43ZKskh2%2BB6ZDTWpgcvvDHjtY9TGB7qgvW1dVy9%2F%2BdcjnyJR95Mkz5nwHnlbHHVnSwq0%2FayEg5LAK9e%2FQppzph2kUfyJqwDbbDCs5xguLMXe8Y4DGnl8xpezCt4gvO5D1n3kdO11yufxyXq9qFgJO1v3fgpNt02Ctkr3g0a9RKAUvvneBN9PtjBNDeq9bbiSfg2k5c4tcWPIBekY2oB8Akzb9bImfE02DbKimgpAIR1%2Bw1fA0NgyohpGPLuZoz6zDqni5%2B%2BZELkhZsdC%2BSLv86LBrOEgzzry6%2FqdGMCkr4kpbhmxE0%2Brkc6ap6hl4PuQ9fJnIjurblQNU0P0cy1ITNnA%2BCdVdjM2fDDulojKBjqkAVCusfSQlOIUh3JNqPtncAm5pX2JUEoKIFYHD5FSsU9gMvx2vArQU4BcwcOvQ6cpRAwGFHufv4DjL7jIqObKoQ13ASgBJOlBb3ooETF%2F4x%2Bal8J14N0IO5ie4mu4xOboMFFvPiTChByEEw7PLI%2Fs8ZUANS12vNa1JNjWlDizBBjDmOMz2CRPnZJczUYQtaNEjwD56Z1rDn7X0fOyMzx4lzXUZ3RT&X-Amz-Signature=a6e181a886a2e0700f8f3d85e199d4e5843a01e77fc13699d5e74277fbf8739d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

