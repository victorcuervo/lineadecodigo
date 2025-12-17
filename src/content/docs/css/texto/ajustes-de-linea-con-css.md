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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JEFMWZL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJ8vWziasBUShNT9TmM5yO2zh%2Fkb0bRo0rMH1Pq%2BjZkAiAj5iNnam4EE8KFY8m3KnZlvjYljScZTDT4zhbSW2lf%2BSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM91yvtKjrMyv%2BVBWrKtwDRcb%2FggMRxUyYjL8FquAmuYKqD3ap2%2BuWqwZ6rGN9cIh9Khz5IP1GZAVK%2BGxU6JAH1XW7vwvUqU%2F079BdVkBD0yh5KA70b5nW9FC0czxh4NoxgFOZfrhL85vQWLfQwzwkHMwKrIj4pz8WTfJ4s0tLTxl1R6nxMzyGa40DtQZU9yZWvJLv55PO4b1CIvrEgdCzBCAULz7YaIdlZEw%2F12H3yYR3hwM1jcV3uD0KKbmtphH2joRbFFzUt8iBAowkk6j9DMI8YJXx9JeLq6RPu2j2mczIlJitgzDgfB%2BZBYaEg6PMlmYyhWCw8mL7Y9GlIhtTk8K749IHJgLwmQGb8Etnz8olENZ%2BcENZCLk35brSOjR8Vp6pXRk4MrWAXkxX0z8ByIkwI%2Fe5f1Dh25GEa%2FP%2B3raXhE0fDIrk4L%2ByV1XMNI7UsLCPT%2FMofQi00I3bn%2BsvVN3lGTjeRPzM9Ry3MAnMsWvhcViL8y3rYkbNUmTSyjWPLb9ktIGGp5P2pO5bo8g6eS5TCzNnvtxhv0tx0ghfbO5npK%2BYN4sWl6dATT7%2FZFhf1JLSPK1OPOoQYnlCl2lIBfZC6mO%2FyzkHOKaXFiS6Faz0%2BoEpIXdzl7byKSK5TqursEb3CsC1iHfpNxgwn%2FuHygY6pgFsAb2%2Bfiy68snvE5tGlBJuWqn10gcmANUW5WOsvYcG2XMOB4UdAuMbspqP%2BB072DZ9VXsl38AvPQmPxtyf3c%2BrkYk1I1%2F4pYfzUTN1wcfN1gpicdbrMQuvYPcghztYQj1%2BsLhgufkGGaBakvlWzcOKety3JPO%2Fww%2BjtXpDl4aD97NxjTDrFbjk0t%2B3dQ%2F6w3ogmNq2xm%2Fj5ZG54qrOQ55eZjq2b%2BHK&X-Amz-Signature=37f433a388e0ff9ebbf06f9f62166b22b81f580a770a1a7846bdf219122d2e35&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666JEFMWZL%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012410Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICJ8vWziasBUShNT9TmM5yO2zh%2Fkb0bRo0rMH1Pq%2BjZkAiAj5iNnam4EE8KFY8m3KnZlvjYljScZTDT4zhbSW2lf%2BSr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIM91yvtKjrMyv%2BVBWrKtwDRcb%2FggMRxUyYjL8FquAmuYKqD3ap2%2BuWqwZ6rGN9cIh9Khz5IP1GZAVK%2BGxU6JAH1XW7vwvUqU%2F079BdVkBD0yh5KA70b5nW9FC0czxh4NoxgFOZfrhL85vQWLfQwzwkHMwKrIj4pz8WTfJ4s0tLTxl1R6nxMzyGa40DtQZU9yZWvJLv55PO4b1CIvrEgdCzBCAULz7YaIdlZEw%2F12H3yYR3hwM1jcV3uD0KKbmtphH2joRbFFzUt8iBAowkk6j9DMI8YJXx9JeLq6RPu2j2mczIlJitgzDgfB%2BZBYaEg6PMlmYyhWCw8mL7Y9GlIhtTk8K749IHJgLwmQGb8Etnz8olENZ%2BcENZCLk35brSOjR8Vp6pXRk4MrWAXkxX0z8ByIkwI%2Fe5f1Dh25GEa%2FP%2B3raXhE0fDIrk4L%2ByV1XMNI7UsLCPT%2FMofQi00I3bn%2BsvVN3lGTjeRPzM9Ry3MAnMsWvhcViL8y3rYkbNUmTSyjWPLb9ktIGGp5P2pO5bo8g6eS5TCzNnvtxhv0tx0ghfbO5npK%2BYN4sWl6dATT7%2FZFhf1JLSPK1OPOoQYnlCl2lIBfZC6mO%2FyzkHOKaXFiS6Faz0%2BoEpIXdzl7byKSK5TqursEb3CsC1iHfpNxgwn%2FuHygY6pgFsAb2%2Bfiy68snvE5tGlBJuWqn10gcmANUW5WOsvYcG2XMOB4UdAuMbspqP%2BB072DZ9VXsl38AvPQmPxtyf3c%2BrkYk1I1%2F4pYfzUTN1wcfN1gpicdbrMQuvYPcghztYQj1%2BsLhgufkGGaBakvlWzcOKety3JPO%2Fww%2BjtXpDl4aD97NxjTDrFbjk0t%2B3dQ%2F6w3ogmNq2xm%2Fj5ZG54qrOQ55eZjq2b%2BHK&X-Amz-Signature=1be9e0eaef262373ccb1eee08e2a6c216fe11eaf31443404fe70ac805f5d1a09&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

