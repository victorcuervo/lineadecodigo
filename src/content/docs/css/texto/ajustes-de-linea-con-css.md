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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQU3Q7NC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F0%2FWot9RwVS%2B0Ui4gIqhphjhDPsHJ5zU76g%2BTHVdmZQIgNI6cq%2FACS0t6pWPd0gv%2FRLOAdzOTA8HZ819Hl1Xb6nYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBJp2XL%2BpAwY%2BL61LCrcA5bTRAbOd71nJyiELM9nYclbw%2BdBpzuzsrj8wYsWF5DXISvkNWZdU8JHqCnxer4Revj4MKVvPY1MyjHB%2Fg8ttKzGDonv1zo6jNi8PpOavqzX2YIxkG2ZJTfTXcIJZONnWFmQw2fiAzJTK98IOORkbasCPIjqLqp6%2FRslL7HisaxxM1yghPwnAuMfiVTKDvAXwhIvlxIyWvlOLNuEiMJ6cpyP%2FmeStOSD16i4ALt9JL%2FvYFM9OZDjKM83iXLIsSL%2Bm4Zt47re5CcnPeSnird7IGvZR%2Bo4ycuLmXnRrIWVcNqIlKogKtz3iHpOk2UhvJAjbAvvdg6igZPHrKA7S1SYw%2Bc9wsK0UZZI9n%2BH5%2BKOirC%2FGxmp8PnhLQXf3WtulXPJZpSY8vJg1fva1qWVIR%2FfzsEwj6LoD1ra7geBKktHkwPgEmKt9UILG799%2FrCu4nIUPL7EUvfuQBkpcjJ4OZIWQoww1X89dWob1%2BW91wv020ptaf74NRi7pYdPqdOyVm4wp7dOqWWbCFd5HVQ3%2FIq9W1H30RUcw56xbhPZheljvYLxeT5aSn%2F0FDxUA%2FeytmQ9kA1ABf8Jiz3666u%2Bl%2BAZI3dshG1nJo5f1bqr%2BHM1znzpZa3%2Fb4MAHoaXQ1%2FyMIOCicoGOqUB7xEnZVl6XoGi2b1xWdIyo4I0UOjNIAxrw7ksuXG2NFIoIUMIPr2WTf0m2lxoP96zlorgEoHUxNlnnhfWMFBAKJU07Ebd6JvlDP2uZ3NZgkJTNNpl8wLTPLXv%2Bnz6a29f6i52ahdyrryM144oTLd10J9Gb3gXtX%2B2c1ZoNZamZXopd%2Fr3vppiBJOSRph%2FjvlRFO4AQLfVNbBglqFn9nkFNIh20hkJ&X-Amz-Signature=75ecfc0b6d2361d565a8aa45d49d393ede68203c522d8e6b0ee370ff8e457ba7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RQU3Q7NC%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T054349Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQC%2F0%2FWot9RwVS%2B0Ui4gIqhphjhDPsHJ5zU76g%2BTHVdmZQIgNI6cq%2FACS0t6pWPd0gv%2FRLOAdzOTA8HZ819Hl1Xb6nYq%2FwMIdxAAGgw2Mzc0MjMxODM4MDUiDBJp2XL%2BpAwY%2BL61LCrcA5bTRAbOd71nJyiELM9nYclbw%2BdBpzuzsrj8wYsWF5DXISvkNWZdU8JHqCnxer4Revj4MKVvPY1MyjHB%2Fg8ttKzGDonv1zo6jNi8PpOavqzX2YIxkG2ZJTfTXcIJZONnWFmQw2fiAzJTK98IOORkbasCPIjqLqp6%2FRslL7HisaxxM1yghPwnAuMfiVTKDvAXwhIvlxIyWvlOLNuEiMJ6cpyP%2FmeStOSD16i4ALt9JL%2FvYFM9OZDjKM83iXLIsSL%2Bm4Zt47re5CcnPeSnird7IGvZR%2Bo4ycuLmXnRrIWVcNqIlKogKtz3iHpOk2UhvJAjbAvvdg6igZPHrKA7S1SYw%2Bc9wsK0UZZI9n%2BH5%2BKOirC%2FGxmp8PnhLQXf3WtulXPJZpSY8vJg1fva1qWVIR%2FfzsEwj6LoD1ra7geBKktHkwPgEmKt9UILG799%2FrCu4nIUPL7EUvfuQBkpcjJ4OZIWQoww1X89dWob1%2BW91wv020ptaf74NRi7pYdPqdOyVm4wp7dOqWWbCFd5HVQ3%2FIq9W1H30RUcw56xbhPZheljvYLxeT5aSn%2F0FDxUA%2FeytmQ9kA1ABf8Jiz3666u%2Bl%2BAZI3dshG1nJo5f1bqr%2BHM1znzpZa3%2Fb4MAHoaXQ1%2FyMIOCicoGOqUB7xEnZVl6XoGi2b1xWdIyo4I0UOjNIAxrw7ksuXG2NFIoIUMIPr2WTf0m2lxoP96zlorgEoHUxNlnnhfWMFBAKJU07Ebd6JvlDP2uZ3NZgkJTNNpl8wLTPLXv%2Bnz6a29f6i52ahdyrryM144oTLd10J9Gb3gXtX%2B2c1ZoNZamZXopd%2Fr3vppiBJOSRph%2FjvlRFO4AQLfVNbBglqFn9nkFNIh20hkJ&X-Amz-Signature=d3a63aff59c27a7020fecdb6ad32eef35ac1c417515d49833d5fba18104890f7&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

