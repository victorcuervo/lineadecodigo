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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDM67C7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDThIxhNxrmDjs21FOT0EfQc814ZOglajx2aoFTwnNH8gIhAN7SodFBEALfH633gI77834aTYF%2F4Sv4mF5Qrmb8LaYoKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPqy51ACaF222EBmMq3AM4KNQPJsiegnPvjhFYhQ2AyDIq5a5hB9ApeeQk%2FipFvETYu4xV2uakYqSa6cbPNmXBNUTgrbP1ylMHgQzHGjhgoPUc3vTPAjHqbg8mw4iabiKQS%2BpwC3AIcTwsL%2FuWkAfMaSr9l%2BhdYMZwgq5aYJxHvxfoWz%2Fcmf68NpIU%2F13duk52qsCMisIbX1epVUoU8PvcOGAeipM7yyy1RGPA26YC5D2QpYvzKW8jx1ZTiO5dGyNPC%2BRBgD3GAlxlhjykWCWIWG7SonJhawJo0POhJATT1%2FmsDfYRRkyOtfw3ToqsUO8XtweqUYMxxpNahxM%2Fo1sC2RaeIvDUh9YHg0EW9JdR5d9%2BCVkWq%2F6UdZ%2B%2BP0Pym29dDUAn6RQP3Exf498%2FPwevQ6feT4ZkJe%2Bg7v0gH7JNOoCG1aP6Aa78f%2Bx1OutWR3tvVNKJ%2FO%2FEGV3UbOjr7e2y9PHXAbJmO8VOSryhg5aS8CTy%2BmoQcGQF5FTWVCECzosJYe6WZE7C0fi%2Bs%2FIA3BgG%2BafzZECoqKx48JJuJbKdv1NRZGzwBBY9r54SyweIRdWBYd1wf7AearsP9mhWEF%2FONRK7K5YEUEU7p3VIxn7EoJNOE%2FxWVXYsoSgWerVrn2QLK8KMwQpYMEW0BTDdoIvKBjqkAejMdFuAiX7iFj1C8UUQJkXHljYhV12YCs%2B295DTjkNdrl1Uxj%2BLiv9L60%2F%2FCTN5wcEm6vPPZsXV7qHghphhFabsWlbuFw%2Bp39ss5NL8C1HL7IWJce%2F8YYa6eu%2FsJ6ZZ1spR7VwGSMvRNdkXLaD3ejGRiCNdL6%2FQ2F1v%2BaUSF%2FIPI8OQK9H30Pw8y%2FZyB1WHpZSZq%2FbSntASad7DFv3ceppQDv4p&X-Amz-Signature=2f91382451ad24d97b7b7a49ab58e2c720a4ea5710491dee75436ee9bf9dccc4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XSDM67C7%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T191606Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELj%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDThIxhNxrmDjs21FOT0EfQc814ZOglajx2aoFTwnNH8gIhAN7SodFBEALfH633gI77834aTYF%2F4Sv4mF5Qrmb8LaYoKogECIH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEQABoMNjM3NDIzMTgzODA1IgyPqy51ACaF222EBmMq3AM4KNQPJsiegnPvjhFYhQ2AyDIq5a5hB9ApeeQk%2FipFvETYu4xV2uakYqSa6cbPNmXBNUTgrbP1ylMHgQzHGjhgoPUc3vTPAjHqbg8mw4iabiKQS%2BpwC3AIcTwsL%2FuWkAfMaSr9l%2BhdYMZwgq5aYJxHvxfoWz%2Fcmf68NpIU%2F13duk52qsCMisIbX1epVUoU8PvcOGAeipM7yyy1RGPA26YC5D2QpYvzKW8jx1ZTiO5dGyNPC%2BRBgD3GAlxlhjykWCWIWG7SonJhawJo0POhJATT1%2FmsDfYRRkyOtfw3ToqsUO8XtweqUYMxxpNahxM%2Fo1sC2RaeIvDUh9YHg0EW9JdR5d9%2BCVkWq%2F6UdZ%2B%2BP0Pym29dDUAn6RQP3Exf498%2FPwevQ6feT4ZkJe%2Bg7v0gH7JNOoCG1aP6Aa78f%2Bx1OutWR3tvVNKJ%2FO%2FEGV3UbOjr7e2y9PHXAbJmO8VOSryhg5aS8CTy%2BmoQcGQF5FTWVCECzosJYe6WZE7C0fi%2Bs%2FIA3BgG%2BafzZECoqKx48JJuJbKdv1NRZGzwBBY9r54SyweIRdWBYd1wf7AearsP9mhWEF%2FONRK7K5YEUEU7p3VIxn7EoJNOE%2FxWVXYsoSgWerVrn2QLK8KMwQpYMEW0BTDdoIvKBjqkAejMdFuAiX7iFj1C8UUQJkXHljYhV12YCs%2B295DTjkNdrl1Uxj%2BLiv9L60%2F%2FCTN5wcEm6vPPZsXV7qHghphhFabsWlbuFw%2Bp39ss5NL8C1HL7IWJce%2F8YYa6eu%2FsJ6ZZ1spR7VwGSMvRNdkXLaD3ejGRiCNdL6%2FQ2F1v%2BaUSF%2FIPI8OQK9H30Pw8y%2FZyB1WHpZSZq%2FbSntASad7DFv3ceppQDv4p&X-Amz-Signature=5ba0bb224328e62d3e92565aa15b839e625694fd6d4113a4c9d88866d3e44be8&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

