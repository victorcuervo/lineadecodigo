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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3YGMSG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9d%2BF6zkgjHcoYSnRQ9ZZ4RBabOHrWNn7oqBWzEXjj%2FAiEAz6ACejrlIVOPg6mXBR2QnDdms7V%2FAJvNUSAmuTs5hAkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPZGx%2FPyUswVsb6rFyrcAyhaphWn74yknM2rTQdKsDBSmjNIXHJ1TAM3nEelnOnYzE3w0oXR9wICksdM2uI9RpBbKtF6Q69Zhoz3HBx9JQsx1QBVV4JnVr%2FiybKAmpFIUVHD9rKNn7k1nru9lLx3J%2BH0gdNOoA8vE%2F1%2BBBKOqtpyv3IBwtY639DgPgq3GDICHl3vZPYgjh8O9Aj212eZIRkzJB72tbu01%2BD4LugdC0v3eNaZIsgv6ff1bt77%2FEy9%2BQlt3GF7q89qXx4F8G4qGjDl9fem5Bo5BWlITRmAl0ZAPdr1b%2Flh22QVqWaVfJWY%2B61lGJWa1liMOBglswpWJ%2B0GLHlVrrSxqQP8X8tDOx%2FoKJ9EOF4w9oXVBe5MQcxy6nb8PCuEigVmX4ldLOmipdNAaqZSZGtQDUvkmuMM8EJq6tmPcWekupZgj1VHWySl490lbeaGWxMBuZDtncDoSpLfeJZCtui6eCg8z4ZHezhxq0dYAmKYg7BuqVdXm3DKUQEaFyu%2F9vquGx88%2FAx3f1qEXJvs2yi0nonPdHlsLo3Ag%2B2s%2BjZq7bSQSbvjNQBTj6qPMUHszfuYTeH2LLkU0WDxXT2i5P8dIw2cGsmmv19hbJvw7joGp35S6Ik%2B5%2BU7%2FHy9Ybzzt5Ml%2FXk3MOb7h8oGOqUBduRjna7YUhekvmH%2F8wuyfkn7LuKF9UbwWvkKz%2BznibDZ8vprjE4a%2FoOjB7clshGZPg6iG2DB%2FLcfdIerYWRRQ1IvmIVSCZdEoCYkMea8lsOQxSucJ4s6jXDkkBUN2Kggl%2B%2FqqaxNxNEDqLeIm4bK5imY6hIaeRRfhYFYZ%2BvUpaIH8TwbKBemF3NZsWUO5o6CRlxNCAUE%2B9f5NOinnPCHvrUj1Cz9&X-Amz-Signature=f3c821b3d4df8d88fefc7c9ece36f493fd155163a322506daeaa387199db8911&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466RI3YGMSG%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T014723Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKn%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIB9d%2BF6zkgjHcoYSnRQ9ZZ4RBabOHrWNn7oqBWzEXjj%2FAiEAz6ACejrlIVOPg6mXBR2QnDdms7V%2FAJvNUSAmuTs5hAkq%2FwMIchAAGgw2Mzc0MjMxODM4MDUiDPZGx%2FPyUswVsb6rFyrcAyhaphWn74yknM2rTQdKsDBSmjNIXHJ1TAM3nEelnOnYzE3w0oXR9wICksdM2uI9RpBbKtF6Q69Zhoz3HBx9JQsx1QBVV4JnVr%2FiybKAmpFIUVHD9rKNn7k1nru9lLx3J%2BH0gdNOoA8vE%2F1%2BBBKOqtpyv3IBwtY639DgPgq3GDICHl3vZPYgjh8O9Aj212eZIRkzJB72tbu01%2BD4LugdC0v3eNaZIsgv6ff1bt77%2FEy9%2BQlt3GF7q89qXx4F8G4qGjDl9fem5Bo5BWlITRmAl0ZAPdr1b%2Flh22QVqWaVfJWY%2B61lGJWa1liMOBglswpWJ%2B0GLHlVrrSxqQP8X8tDOx%2FoKJ9EOF4w9oXVBe5MQcxy6nb8PCuEigVmX4ldLOmipdNAaqZSZGtQDUvkmuMM8EJq6tmPcWekupZgj1VHWySl490lbeaGWxMBuZDtncDoSpLfeJZCtui6eCg8z4ZHezhxq0dYAmKYg7BuqVdXm3DKUQEaFyu%2F9vquGx88%2FAx3f1qEXJvs2yi0nonPdHlsLo3Ag%2B2s%2BjZq7bSQSbvjNQBTj6qPMUHszfuYTeH2LLkU0WDxXT2i5P8dIw2cGsmmv19hbJvw7joGp35S6Ik%2B5%2BU7%2FHy9Ybzzt5Ml%2FXk3MOb7h8oGOqUBduRjna7YUhekvmH%2F8wuyfkn7LuKF9UbwWvkKz%2BznibDZ8vprjE4a%2FoOjB7clshGZPg6iG2DB%2FLcfdIerYWRRQ1IvmIVSCZdEoCYkMea8lsOQxSucJ4s6jXDkkBUN2Kggl%2B%2FqqaxNxNEDqLeIm4bK5imY6hIaeRRfhYFYZ%2BvUpaIH8TwbKBemF3NZsWUO5o6CRlxNCAUE%2B9f5NOinnPCHvrUj1Cz9&X-Amz-Signature=a0726f4d46a48c624885c7fea1a5e38f38fb8b759449a457aac5d09b1b9171be&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

