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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662MYUCLK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6POFoGDfUJ%2Bta33spltOQ0dzFRScHHPYEwJ0Dsa1i%2FAiAFboRaudALLUvjPTgF5BEGBj7mtQTVwY2cNY2vM4U4MSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMvcUd95hKPAM7mDY2KtwDSpmDagSgZ2q5t%2FV0IBSJffUAqBTSJgF0BRK89AObArFwbTZDbsDzAiyBldMAUpga1GomIeMa8cgiSABxeQTCXP4STLI3RGf2uFMlYI5llwcicwbJIe3ETp92b1WwqWnmDCFxkZ7soK%2FnkIFdf%2B1grXZ1Vj1e9bnk2GDAE8yBaeT6CGaNb8kjKtrHHy1ImAEGac2A%2FYsV%2BgJPjRwPpoz%2FOVudeYNcXEnDjdJqM3Jy%2BPfHeVrG9ldw218lNT%2F8kren%2FBmy0cZGLsqpxWYiBJhOAkUtHiIB9aZqNXn4PgPbnJlJq5gcWva%2Bo9gTiGcoYpsPrwxSK729F1pjeWOLwZFH7PgGdhm4I%2F%2BkV21LuUtDZbxeXIrCv%2B%2F%2Feiq6vKbtktav%2F0uK77bTAA1YMCWFBMaeDi4IiHoQ3vMW5t0RvEbuPrH7KQwThI%2FqSy8vR4OZkoJaGr6JC%2FMqsFRCO3wUoCqw7P9hrY1qz%2FQrLZ%2BgvlyszK5RJtXnA1T7toSpsJJSswA127Z9WoebRp7AyXmJKICD6mBGVxueMuiHfOZ3v4Yz3vsYWd%2FrNcJCdUlaNfSR1Ao0yAmanaIfQFEBPmNm5UgjCj021fEMehQh20DPGynIPsNPF8S9sEIVedtwmNcwtIKJygY6pgEp8LWE320jXUwkWxjQ2c4hvK4rNneurwAhcH3uXqJ0c1qBpK5p9MQ0cIEdxv6F5LVfo%2BD9a6%2B3wV9LVyjIdPeYLddu28xiu3WEz%2FMfrvi7QhvKUNYVdc9b7qE3ROayzGz49Zx5m7YUIGTtI9uenyhHlkEeTjgNjhmtKzzhZKScvlsmYaPMS9Z9cO1JL6uOD44ennsIcpeqSL1EbprTL2IPoJskpi9T&X-Amz-Signature=e75980c48923b836f3494b228209432304a3ffe3d5d1e4e0fa7b8c41395d2fd6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46662MYUCLK%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T061702Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK7%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIF6POFoGDfUJ%2Bta33spltOQ0dzFRScHHPYEwJ0Dsa1i%2FAiAFboRaudALLUvjPTgF5BEGBj7mtQTVwY2cNY2vM4U4MSr%2FAwh3EAAaDDYzNzQyMzE4MzgwNSIMvcUd95hKPAM7mDY2KtwDSpmDagSgZ2q5t%2FV0IBSJffUAqBTSJgF0BRK89AObArFwbTZDbsDzAiyBldMAUpga1GomIeMa8cgiSABxeQTCXP4STLI3RGf2uFMlYI5llwcicwbJIe3ETp92b1WwqWnmDCFxkZ7soK%2FnkIFdf%2B1grXZ1Vj1e9bnk2GDAE8yBaeT6CGaNb8kjKtrHHy1ImAEGac2A%2FYsV%2BgJPjRwPpoz%2FOVudeYNcXEnDjdJqM3Jy%2BPfHeVrG9ldw218lNT%2F8kren%2FBmy0cZGLsqpxWYiBJhOAkUtHiIB9aZqNXn4PgPbnJlJq5gcWva%2Bo9gTiGcoYpsPrwxSK729F1pjeWOLwZFH7PgGdhm4I%2F%2BkV21LuUtDZbxeXIrCv%2B%2F%2Feiq6vKbtktav%2F0uK77bTAA1YMCWFBMaeDi4IiHoQ3vMW5t0RvEbuPrH7KQwThI%2FqSy8vR4OZkoJaGr6JC%2FMqsFRCO3wUoCqw7P9hrY1qz%2FQrLZ%2BgvlyszK5RJtXnA1T7toSpsJJSswA127Z9WoebRp7AyXmJKICD6mBGVxueMuiHfOZ3v4Yz3vsYWd%2FrNcJCdUlaNfSR1Ao0yAmanaIfQFEBPmNm5UgjCj021fEMehQh20DPGynIPsNPF8S9sEIVedtwmNcwtIKJygY6pgEp8LWE320jXUwkWxjQ2c4hvK4rNneurwAhcH3uXqJ0c1qBpK5p9MQ0cIEdxv6F5LVfo%2BD9a6%2B3wV9LVyjIdPeYLddu28xiu3WEz%2FMfrvi7QhvKUNYVdc9b7qE3ROayzGz49Zx5m7YUIGTtI9uenyhHlkEeTjgNjhmtKzzhZKScvlsmYaPMS9Z9cO1JL6uOD44ennsIcpeqSL1EbprTL2IPoJskpi9T&X-Amz-Signature=175c6f523df08f005605bc7d5abedf0c09ae78384b59ce66fa36974e7f14f86e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

