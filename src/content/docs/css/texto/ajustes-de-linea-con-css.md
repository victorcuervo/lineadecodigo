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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZBKGA3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM7nhoTuJ5xv12NNMzReG41b%2BUrZuEB%2F%2Bb7nJNLH40%2BAiEAkf1NGOf3g23%2F3OL31cnStIuxKi6pAz%2FyrOfd%2Bw6WYtIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPFHIEhkPxtcnExxEircA0iy%2BBh9QPUls05jNBV%2FNBTMwP%2Fsx2UszmWLkKG43g8aLQViNpNOClzmkhXBTHZlTwI3cM5IHnHY0dAN3AvnIQugQfXmSrPYEV%2Bcv%2Fm319p92Lv7kKiwAEllvGIGfHCq7J2KmsDlVvjRmdvKCCMutNO3j4c2T4Oh7uGL05mRSB%2BRN5QYfuCsOIq2J9p3Si%2BgKVa6JoEEnERKFRc4QaJYxRyq6tGmFGQx0uwaoAgbo9%2FTzqjHIMP4pS2ROHWDyXaP4dIhwsI4cX6pXbiBMe91nSlMaKCVrdnq%2FLG76V9c0orhhz7tdID7EJBza7FCx0UcgQtXx1zJjAaWGCxkDzoL058CMjlDP6UxSF5tuxrVh9AeEpKQryUmxfXC52BTrKVph2O8e9qfssZlFj%2FT8IOCV1MAJXFfatVjtZK87l5L1tSrlQXk5DHAP0pFRKkHCNe110fK6f%2BjFVQx7iQLugR7EFooNADaARN1clMRWR8ja%2BePu4QZNA%2BnP4oAi4evCue6Oqc%2B0p8Vp93SsS5%2F4kUcg065FFve2r%2FrI%2BTj5e9LlH3lXgl%2FrK2NZEeiX6TlVAfR0soaCfXg5VBcLIfDnenjgggMFPqdoRFtW08pU7EolBdFOoToQut7P8CHEGnZMKycicoGOqUB0zWT9x%2BFlJY9eCCn71hvbY24LpwrHXh8VN4WkvB7e7Si12wMXKShpxy5yw%2FK7S0FBc8GYxePqGy93MYoYfZFaJRoQbG54h6%2FDHt%2FhVBEnnA2RRilKPdLXVzVO8uUeBCGfbCGnRiRhQoZOX3VIvFqUrBCO0hD3ddcN3B4IWm60KwkcrGzzZsOPDwUXwqCZ%2F6YnG6ahAQEWtttzB9N8E7ZeQXpZV0Q&X-Amz-Signature=e1c5fa5fbaf46e3427a38389922d9a8eaeda4be431a5699121e5cc02bb7d2c1d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46675ZBKGA3%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T065636Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIFM7nhoTuJ5xv12NNMzReG41b%2BUrZuEB%2F%2Bb7nJNLH40%2BAiEAkf1NGOf3g23%2F3OL31cnStIuxKi6pAz%2FyrOfd%2Bw6WYtIq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDPFHIEhkPxtcnExxEircA0iy%2BBh9QPUls05jNBV%2FNBTMwP%2Fsx2UszmWLkKG43g8aLQViNpNOClzmkhXBTHZlTwI3cM5IHnHY0dAN3AvnIQugQfXmSrPYEV%2Bcv%2Fm319p92Lv7kKiwAEllvGIGfHCq7J2KmsDlVvjRmdvKCCMutNO3j4c2T4Oh7uGL05mRSB%2BRN5QYfuCsOIq2J9p3Si%2BgKVa6JoEEnERKFRc4QaJYxRyq6tGmFGQx0uwaoAgbo9%2FTzqjHIMP4pS2ROHWDyXaP4dIhwsI4cX6pXbiBMe91nSlMaKCVrdnq%2FLG76V9c0orhhz7tdID7EJBza7FCx0UcgQtXx1zJjAaWGCxkDzoL058CMjlDP6UxSF5tuxrVh9AeEpKQryUmxfXC52BTrKVph2O8e9qfssZlFj%2FT8IOCV1MAJXFfatVjtZK87l5L1tSrlQXk5DHAP0pFRKkHCNe110fK6f%2BjFVQx7iQLugR7EFooNADaARN1clMRWR8ja%2BePu4QZNA%2BnP4oAi4evCue6Oqc%2B0p8Vp93SsS5%2F4kUcg065FFve2r%2FrI%2BTj5e9LlH3lXgl%2FrK2NZEeiX6TlVAfR0soaCfXg5VBcLIfDnenjgggMFPqdoRFtW08pU7EolBdFOoToQut7P8CHEGnZMKycicoGOqUB0zWT9x%2BFlJY9eCCn71hvbY24LpwrHXh8VN4WkvB7e7Si12wMXKShpxy5yw%2FK7S0FBc8GYxePqGy93MYoYfZFaJRoQbG54h6%2FDHt%2FhVBEnnA2RRilKPdLXVzVO8uUeBCGfbCGnRiRhQoZOX3VIvFqUrBCO0hD3ddcN3B4IWm60KwkcrGzzZsOPDwUXwqCZ%2F6YnG6ahAQEWtttzB9N8E7ZeQXpZV0Q&X-Amz-Signature=58b4bb78c576207ccdc09c520a63928c3dde99e8d6f0a4869b0344ac7d4f0a8c&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

