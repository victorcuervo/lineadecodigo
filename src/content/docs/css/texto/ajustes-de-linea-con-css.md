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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYWHGKZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4eXJI5wTQgqw%2FS0ckHr5mD%2FvnbUJEuiH%2BfKKwKuFkTAiBquS9jUWE2XZo%2FTGiUll%2BauAHQvQLZbs%2F8gPUNahQymir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMJ%2F2QRMKoz0tcEk0YKtwD3oOpACVyJHOjua9wffoLxz5vM5ozCKZIHlQ8cc8jgK05Jys9GAMQMiM12MScT9G%2BPUS74IYPk5r9kpaCgDXYBj%2F4dOGbPU4cqJ%2Fk1U4UYyRKdVZIWNH7k4vabprawUJh4k4s3LH9GcJjWU9aGDPci4gDfMiKlcvqfpv5ejAHNq9QXSiJzxsh2e730Qk5vPeJuayRdCPK1kSq%2BMTtVQ1dMd7%2By8Oud4FWy6RHVxExdWUOcVgWLGhuclSbf6b17p6gUpj0g%2BjaN35Gq42IhZtw3Fao3GPfmmRr7KD7M2jLQmnS40Zl3qbaBy2nEH1MCJtq31Glne6tQP8ptY0cjdgSYA3dDuxWHNsjlBoJ48ZiON3vwqdZUY5OsYPMJsCNXWmdGE82lfOzBLU4j2lV86drk5RJGkk5NK9Yf9imNLevsWir8WyXEoWt5MJq9WgpvgEDG%2BahS8DFuDXarKdfbNWSMFR60rhnrLY0CzqXJ0tGV17u8D5X0sd1Yje69zDAakahFo9jLhzDwGwlqBRWYDW14nq0cmaBMvFLO3XJPx%2Fcrf7H8Bgol0PK2K9H%2BeMT5V2DUq5L6zG%2FaXItxtn%2FonLjnYSUqJit%2F8%2BPv4jF1Mr%2B6m0wGCA6bHAwNBpxmCkw0Z2JygY6pgHvTSu6IHzKx52t28u0vxs5e1%2FFe9K%2BPT0HBMpclAY0fLEBPKd9yT2%2B%2FHKW3g7g3vTYIAB8PTIUYAkXUUlcSFfUWR0bbpV24PXYkTNTcLumEVU9G88ZUuESMc2tKYm3NGp%2BMJj1nspuR1XXSn9JWeZTU%2BX7xvIPpjAyOoQopaB1yDlP4r%2BmgF0myPrnNN0aVlWTBV53TrNo5jiPurp0IHo%2F7ysARO%2Fv&X-Amz-Signature=e7ac8d47722e2cf6ab308eab21581ae1c51be726fd3d155d35645dc142846a53&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466WVYWHGKZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065835Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIG4eXJI5wTQgqw%2FS0ckHr5mD%2FvnbUJEuiH%2BfKKwKuFkTAiBquS9jUWE2XZo%2FTGiUll%2BauAHQvQLZbs%2F8gPUNahQymir%2FAwh4EAAaDDYzNzQyMzE4MzgwNSIMJ%2F2QRMKoz0tcEk0YKtwD3oOpACVyJHOjua9wffoLxz5vM5ozCKZIHlQ8cc8jgK05Jys9GAMQMiM12MScT9G%2BPUS74IYPk5r9kpaCgDXYBj%2F4dOGbPU4cqJ%2Fk1U4UYyRKdVZIWNH7k4vabprawUJh4k4s3LH9GcJjWU9aGDPci4gDfMiKlcvqfpv5ejAHNq9QXSiJzxsh2e730Qk5vPeJuayRdCPK1kSq%2BMTtVQ1dMd7%2By8Oud4FWy6RHVxExdWUOcVgWLGhuclSbf6b17p6gUpj0g%2BjaN35Gq42IhZtw3Fao3GPfmmRr7KD7M2jLQmnS40Zl3qbaBy2nEH1MCJtq31Glne6tQP8ptY0cjdgSYA3dDuxWHNsjlBoJ48ZiON3vwqdZUY5OsYPMJsCNXWmdGE82lfOzBLU4j2lV86drk5RJGkk5NK9Yf9imNLevsWir8WyXEoWt5MJq9WgpvgEDG%2BahS8DFuDXarKdfbNWSMFR60rhnrLY0CzqXJ0tGV17u8D5X0sd1Yje69zDAakahFo9jLhzDwGwlqBRWYDW14nq0cmaBMvFLO3XJPx%2Fcrf7H8Bgol0PK2K9H%2BeMT5V2DUq5L6zG%2FaXItxtn%2FonLjnYSUqJit%2F8%2BPv4jF1Mr%2B6m0wGCA6bHAwNBpxmCkw0Z2JygY6pgHvTSu6IHzKx52t28u0vxs5e1%2FFe9K%2BPT0HBMpclAY0fLEBPKd9yT2%2B%2FHKW3g7g3vTYIAB8PTIUYAkXUUlcSFfUWR0bbpV24PXYkTNTcLumEVU9G88ZUuESMc2tKYm3NGp%2BMJj1nspuR1XXSn9JWeZTU%2BX7xvIPpjAyOoQopaB1yDlP4r%2BmgF0myPrnNN0aVlWTBV53TrNo5jiPurp0IHo%2F7ysARO%2Fv&X-Amz-Signature=09c89bf4e7e426228ab9778f60cb0affd2045bd234c436cb63f805269f618842&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

