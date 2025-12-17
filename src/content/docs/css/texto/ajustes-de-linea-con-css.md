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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K6YFIRY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0LTg2Krd6FXKyVxXEJIG84vyt6VsVQd01mD8W8TUE0AiAfhbbUIF4FSOTTMxbsR1OrSR0ZbJp47R0zmf8l5%2F5LESr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMbqr4T1U1ArSkGQfeKtwDag7fU8uzhcM%2BbQnWvd4TVhK6kW2ORIXKavZExBs1liWmAe%2FDxKzNUvJbQ1CYTMlGdUm9OErqmc%2FrUP6KJ6yF4XgnLQEbkSek0wHthwbGC7m7HjgZY8x3XM7VHCkn%2FDFtorVVlopgLeqZOA%2FQDj1aYqpDDsXHsuu0eAXX6ROMQp6MOHMPUohOGJLt5irhKDAFqe6l%2BAHJzWJv%2Fc8KQJgZb1%2FRU9wqQl76IkeYwOWRbUhNCLxp14uDuTT8Y5oskSQmuG7%2FuLJGd%2FgLE6f%2BIRzjVaJRiqmgkvCj%2Fcx7doN6gxc9IADca1cTyWijz6vboQC2%2Fq98dxU7sLtfPO2YdudF6hNH3NsK3SOMNu6Whwxnkrp%2BUBhhV2e0OOKh2LMay%2BuKAT7mpZ6WC%2FRyFB7plBjkYBZtdXx6bZQdt714T6MJHGVxSNFnaVW3u67piNug79IDwxvVM6%2FH9V5AMCbP1Bq0RXSJUnzsttqOQ6JVLggKnZhiJojGh2fMLCMViNaGK%2B01Aa6Q7GA%2BcW6Km9kDsny3ID2bECRNwVyXbQm22CCvrf%2BFiLevWUIA3gixJmqGdwwDzeJL2Xetsv4cBcCB9KR4%2B738o1CX0dnoMoczR232awQkUBbtHeVLsjytPsYwqvuHygY6pgFCGK%2BkPmF3xGO4O4qQmBLmBSYv%2Fv8dBoY%2BucJ5poiQXlqBgepLBIewIo34t3HgB5VYVRF0NDfC6SCx11RmShrHDjsF%2F83CuNLLLSdwWbJh3rfhUCvybHNSmFMqwJuThUbBwhH0lR72ghYwHyo21QFisZH5u3hCFkeQeZHL30MdLX7m4CDZby8TtimkdZQUSEgIo8wGtkYbFikUkWXHMRYh2%2FN%2BhvyT&X-Amz-Signature=0bf97d64a0b9424afbfc1ca1d7da9f0869e8292d8cde0c9e026f52135c012742&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4666K6YFIRY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T012717Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIH0LTg2Krd6FXKyVxXEJIG84vyt6VsVQd01mD8W8TUE0AiAfhbbUIF4FSOTTMxbsR1OrSR0ZbJp47R0zmf8l5%2F5LESr%2FAwhyEAAaDDYzNzQyMzE4MzgwNSIMbqr4T1U1ArSkGQfeKtwDag7fU8uzhcM%2BbQnWvd4TVhK6kW2ORIXKavZExBs1liWmAe%2FDxKzNUvJbQ1CYTMlGdUm9OErqmc%2FrUP6KJ6yF4XgnLQEbkSek0wHthwbGC7m7HjgZY8x3XM7VHCkn%2FDFtorVVlopgLeqZOA%2FQDj1aYqpDDsXHsuu0eAXX6ROMQp6MOHMPUohOGJLt5irhKDAFqe6l%2BAHJzWJv%2Fc8KQJgZb1%2FRU9wqQl76IkeYwOWRbUhNCLxp14uDuTT8Y5oskSQmuG7%2FuLJGd%2FgLE6f%2BIRzjVaJRiqmgkvCj%2Fcx7doN6gxc9IADca1cTyWijz6vboQC2%2Fq98dxU7sLtfPO2YdudF6hNH3NsK3SOMNu6Whwxnkrp%2BUBhhV2e0OOKh2LMay%2BuKAT7mpZ6WC%2FRyFB7plBjkYBZtdXx6bZQdt714T6MJHGVxSNFnaVW3u67piNug79IDwxvVM6%2FH9V5AMCbP1Bq0RXSJUnzsttqOQ6JVLggKnZhiJojGh2fMLCMViNaGK%2B01Aa6Q7GA%2BcW6Km9kDsny3ID2bECRNwVyXbQm22CCvrf%2BFiLevWUIA3gixJmqGdwwDzeJL2Xetsv4cBcCB9KR4%2B738o1CX0dnoMoczR232awQkUBbtHeVLsjytPsYwqvuHygY6pgFCGK%2BkPmF3xGO4O4qQmBLmBSYv%2Fv8dBoY%2BucJ5poiQXlqBgepLBIewIo34t3HgB5VYVRF0NDfC6SCx11RmShrHDjsF%2F83CuNLLLSdwWbJh3rfhUCvybHNSmFMqwJuThUbBwhH0lR72ghYwHyo21QFisZH5u3hCFkeQeZHL30MdLX7m4CDZby8TtimkdZQUSEgIo8wGtkYbFikUkWXHMRYh2%2FN%2BhvyT&X-Amz-Signature=ae82628288800383f80de9c6351f2ea821292b94223ea91c99a32a633eea23a8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

