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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXVLB4HK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYjER1V0nq2p8sBVErP7vFEPEH3XpYgh9hCbzS0rQj8AiATQPFtLzIKolNEpxL%2Bkl8lQvdAcHSi4parnuBO05XVziqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZoKIi6sh0t8jtFVNKtwDwNhX768Vi41%2FKQqRk31gHoGjubwCS7pwvVd8Z%2BF6ClQglI27ZW2XcVOb9eYGjvKpAMM1RIyjUa9Pb2i0z6rEOECs7IR4uKCYaaeTAiP5NXMZjRI6B74JLl1uuRAjpJ7w9W2DU%2FwEUxjsZR%2FV28bjFLW79M7OOJqNN%2FCEpUrjhUHXuAPGgNVmriDZ59Kl1pHyjE0ESyzKOmV4k1y2VYhbJtJfZkbVwfyZYBvIOKPWHNAZ%2FUkM4V%2FLtl0IcVCqToiCr10mblcvB8lGeHD99mYpluS%2BVvtpEILvGo4oZEQVO%2Fod0qkqAbmCjQhzbJpuLfUucWUDLPMtVvq95r7x5%2Bp9o8hjm08YhzC4zasIGN6ihHKJF%2BBxr%2BocNWLEpaqoKw8Ra2JlbkYKzy%2FBD8ksjvZQ%2FvKT3PuZpVBLRQZ7VenOqeN6hJCLJdyqFylaOm8C5mT73Kn3uzj%2FK28lIkpYKh2L4ZC%2BDXiiI5lBOgKuUlGhV9XIywjVX2ecFPckbJlzgDREURgtZNyARaEWVish%2FWYkKWQCg9T%2BVQwh4EBc32EPRh9bzs524PLfLUBuUI6wGqVqmp5axLoif2T4dGvcB9cpTmo4dzLWl6B077VJrIxeg%2BJqENuiTwcNe2MipJMwz4uMygY6pgHcP1sVkZ8E%2FMFXyMw2mz%2Ff6smBiZF3pyYNZvwIW4pW7ePj8CgDKBb5Z0aUpTZkA5IafxFalhfJ2bA0raQSAmCg9TsbASx6qytz0G4kTrW5i%2Fa4z2hPxjInsoKcW8xhSE3hWGYUK0R8xmzGGwIsZaiYUaJodzYvh7L7ee3hWkduzWY4msu%2FI0bUistWEeHPdmRrUjKikvJTHHSOgPen9CcYNg8FHNTH&X-Amz-Signature=6a1248a0334f030255fda09db673ebe8a19ec667b9e26a799f7ba0ca8b6a2483&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YXVLB4HK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T200136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAYjER1V0nq2p8sBVErP7vFEPEH3XpYgh9hCbzS0rQj8AiATQPFtLzIKolNEpxL%2Bkl8lQvdAcHSi4parnuBO05XVziqIBAiF%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F8BEAAaDDYzNzQyMzE4MzgwNSIMZoKIi6sh0t8jtFVNKtwDwNhX768Vi41%2FKQqRk31gHoGjubwCS7pwvVd8Z%2BF6ClQglI27ZW2XcVOb9eYGjvKpAMM1RIyjUa9Pb2i0z6rEOECs7IR4uKCYaaeTAiP5NXMZjRI6B74JLl1uuRAjpJ7w9W2DU%2FwEUxjsZR%2FV28bjFLW79M7OOJqNN%2FCEpUrjhUHXuAPGgNVmriDZ59Kl1pHyjE0ESyzKOmV4k1y2VYhbJtJfZkbVwfyZYBvIOKPWHNAZ%2FUkM4V%2FLtl0IcVCqToiCr10mblcvB8lGeHD99mYpluS%2BVvtpEILvGo4oZEQVO%2Fod0qkqAbmCjQhzbJpuLfUucWUDLPMtVvq95r7x5%2Bp9o8hjm08YhzC4zasIGN6ihHKJF%2BBxr%2BocNWLEpaqoKw8Ra2JlbkYKzy%2FBD8ksjvZQ%2FvKT3PuZpVBLRQZ7VenOqeN6hJCLJdyqFylaOm8C5mT73Kn3uzj%2FK28lIkpYKh2L4ZC%2BDXiiI5lBOgKuUlGhV9XIywjVX2ecFPckbJlzgDREURgtZNyARaEWVish%2FWYkKWQCg9T%2BVQwh4EBc32EPRh9bzs524PLfLUBuUI6wGqVqmp5axLoif2T4dGvcB9cpTmo4dzLWl6B077VJrIxeg%2BJqENuiTwcNe2MipJMwz4uMygY6pgHcP1sVkZ8E%2FMFXyMw2mz%2Ff6smBiZF3pyYNZvwIW4pW7ePj8CgDKBb5Z0aUpTZkA5IafxFalhfJ2bA0raQSAmCg9TsbASx6qytz0G4kTrW5i%2Fa4z2hPxjInsoKcW8xhSE3hWGYUK0R8xmzGGwIsZaiYUaJodzYvh7L7ee3hWkduzWY4msu%2FI0bUistWEeHPdmRrUjKikvJTHHSOgPen9CcYNg8FHNTH&X-Amz-Signature=e484c645e772acc72f9d2c6b8fce44b43c557a1ae7a9e3f74ce543e46da65531&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

