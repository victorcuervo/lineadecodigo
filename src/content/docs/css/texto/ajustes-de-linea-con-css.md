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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZOKIUTO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaXPgtP%2BIM6ESIzKWW24M7ZPo%2BXoX7YyHwG7VYOWxOlQIgIaCzDr4skdwsf26qSeFsQriKVswEaO3%2FTuK9oV6y9tYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGIrPCvg062sj%2F5rOSrcA8SLmfGoefFuKFUlBY7FgV%2BthA4T2WYzFBHnGvNDG4KsiW6BqotawtuhYofecrquSI9j2q5RskLmzfTK41U89mTdBWWmrbgYHYsMZNsWB5mypBcBw4MjiW3TaKx3D76%2BahQsOPcnFXCVF0d3%2FkCYAgJYl6ZojxdO%2BcGlJdsE%2FWQsTBVhXkN6lU5ni6RodboJ%2BT9UOr5xQRKRYBdoDK5UeXhuiVI6I%2FOdxpUqoVeMV4wLrjFwszCQIfQjWZtiYYF31wgbAn7u%2BGU2aO8v9UTtKT034lbw7kusi3bI2iZC3AvRY2FzK8B%2Fzg3Ricu8KobWBn3ru5HZEXfMJq64XP29eZFZ6gqc5DyQcEF1DJVkidundPcZEgRhsvH%2Fwczduvoeavz%2B4u%2F6WOJ1JU8JbmliTR7%2F%2FMd6c8on4dYCNocawQr%2FVwiHvnk1czqAeA9yN0ld3AnZj%2BiJN%2B%2Bf8nt3A9dcHLqZoy5cYSAzlSBnDMVni5l%2FipQGsgOmQ7PXyl8tVRL%2FDBIWO6X4IqXYacMIDXSQADUuHy2xJL0KCVqmKQyH9kTxGYcGyOfe%2B%2Bg8tdyQv%2BX%2FRJrLrzWYmnkzkcUpdFfePj%2FJdnxV6T%2B6NL%2Fw%2Fr1cfSrLT8UyydgKcnDFPc7OMMmViMoGOqUB%2FEJcY6b4JDiQW4djNBi7L5bPO4SzIrcpVTAXGeUS%2B9qTsi52w8eFSFGCdE7OexvYvXLTcr95qOHK%2FyWVbglWt4EDZoM3UcXyefL73GU1kyrXCjR3RW9OWUbsfgh9UM5IeYnrVumbpXIvn%2FGoWbyWP9IWpHhRlgedaHATwLILmDTbAqzXlmPQFKVsagUdtyfJwU4DT67%2FeOYU3Iqn34xYg78qZnGR&X-Amz-Signature=b7bdc00220b0b8eb1dda968b7c18422e9241f9ba029ef2929da4f2291382aa04&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZOKIUTO%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T022029Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDaXPgtP%2BIM6ESIzKWW24M7ZPo%2BXoX7YyHwG7VYOWxOlQIgIaCzDr4skdwsf26qSeFsQriKVswEaO3%2FTuK9oV6y9tYq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDGIrPCvg062sj%2F5rOSrcA8SLmfGoefFuKFUlBY7FgV%2BthA4T2WYzFBHnGvNDG4KsiW6BqotawtuhYofecrquSI9j2q5RskLmzfTK41U89mTdBWWmrbgYHYsMZNsWB5mypBcBw4MjiW3TaKx3D76%2BahQsOPcnFXCVF0d3%2FkCYAgJYl6ZojxdO%2BcGlJdsE%2FWQsTBVhXkN6lU5ni6RodboJ%2BT9UOr5xQRKRYBdoDK5UeXhuiVI6I%2FOdxpUqoVeMV4wLrjFwszCQIfQjWZtiYYF31wgbAn7u%2BGU2aO8v9UTtKT034lbw7kusi3bI2iZC3AvRY2FzK8B%2Fzg3Ricu8KobWBn3ru5HZEXfMJq64XP29eZFZ6gqc5DyQcEF1DJVkidundPcZEgRhsvH%2Fwczduvoeavz%2B4u%2F6WOJ1JU8JbmliTR7%2F%2FMd6c8on4dYCNocawQr%2FVwiHvnk1czqAeA9yN0ld3AnZj%2BiJN%2B%2Bf8nt3A9dcHLqZoy5cYSAzlSBnDMVni5l%2FipQGsgOmQ7PXyl8tVRL%2FDBIWO6X4IqXYacMIDXSQADUuHy2xJL0KCVqmKQyH9kTxGYcGyOfe%2B%2Bg8tdyQv%2BX%2FRJrLrzWYmnkzkcUpdFfePj%2FJdnxV6T%2B6NL%2Fw%2Fr1cfSrLT8UyydgKcnDFPc7OMMmViMoGOqUB%2FEJcY6b4JDiQW4djNBi7L5bPO4SzIrcpVTAXGeUS%2B9qTsi52w8eFSFGCdE7OexvYvXLTcr95qOHK%2FyWVbglWt4EDZoM3UcXyefL73GU1kyrXCjR3RW9OWUbsfgh9UM5IeYnrVumbpXIvn%2FGoWbyWP9IWpHhRlgedaHATwLILmDTbAqzXlmPQFKVsagUdtyfJwU4DT67%2FeOYU3Iqn34xYg78qZnGR&X-Amz-Signature=b612c199f0e3c55096982f1f0626d6924622d475939be17e3970703a5e4dc7da&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

