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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7FB55N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8AFricd4f2ZWiOA1ov4j8%2BwlwvP54dSESdDY8OSoQXAiEAw%2FMcFwMUv%2F%2FL8E0YUlSqNWP9s7El1g3asMjsOhXOtJMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAIqiRzyWlJuckyIMCrcAyyapPxN8Ba7bvT7lSiYJyzAd5eOprBPx17YI03MZoIJ0o%2FmSK76doBrYz3jzUQM57aStFL4DVlRFivnTNiHm3oISzajyOxcNL7Yy99l4c9GakW3u5YJGtb2DuFnc1NLKKs6avO9PcI37VH3X00Xf%2BAXWXg%2BBr5nbnZ6CheTO1ZAME18Xp9VlnNvgmbZxc8FIHkVslvLQhHUT4r2kmjduE0PMuYZ62o9N66V8KuZ5StVQsZUfF9Thurj4PYaWR4ntCsGsKRTB19bpLjDrpERDbgCoh722n1Ln0wMYjPH2VctqrwZdAewxMvCww3n8uISC2jZnjUqrxUP%2FqlBrYbnj23xljphc5aCbhdAnGC76N7kowl6wWEt8cn3vTL8pUVLuQdXaCT9jmAgw6kqMd%2Fj0kfoEpx98ISU3AufDz%2F2FlESpycqwa4hjOO80ziS7Ey7jGl8Bwe3aZmVS7eD%2BXV4d5HE8Fmf0iK0zjxPSSb2EwDv6dA0fhSivtqOdvPxbmByH5qTNJ89RZQQt9TypPJ8BDNaUt%2FjViDD5dm0%2BSUlzuaD1kQqEsxktoRAIUpbdg8JKERv4h9YYOfm9%2FxyyE3%2Fg5K%2Fyo4ILUqebtH0zrmdWSs28fmG82swUdrvH5HhMK6XiMoGOqUBBEbUKj7Gj4FmYI%2BFub5nDBlRpVoeTBMGkWllv0aI1WfK5a0TlISI%2F5xpqNnXsimme9umvFXULgat1xOgF%2BnpXdykr%2FU1twMwrOz2aaw5zvy0f25JoVKmFI9HCkudHArXy44ychMQ5ofGiPmQkbPWj9bSzENosXwJYA6jKJAQHjsSX96YUumTGa3z9VQY6SarSGmbuV%2FEsBuUp4%2BNtSkIYkcB38ez&X-Amz-Signature=af0c20f1d46d00cd798830d10cdef7260492d84a3366bdeebb3798ccec98decc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466SU7FB55N%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T021419Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIF8AFricd4f2ZWiOA1ov4j8%2BwlwvP54dSESdDY8OSoQXAiEAw%2FMcFwMUv%2F%2FL8E0YUlSqNWP9s7El1g3asMjsOhXOtJMq%2FwMIcxAAGgw2Mzc0MjMxODM4MDUiDAIqiRzyWlJuckyIMCrcAyyapPxN8Ba7bvT7lSiYJyzAd5eOprBPx17YI03MZoIJ0o%2FmSK76doBrYz3jzUQM57aStFL4DVlRFivnTNiHm3oISzajyOxcNL7Yy99l4c9GakW3u5YJGtb2DuFnc1NLKKs6avO9PcI37VH3X00Xf%2BAXWXg%2BBr5nbnZ6CheTO1ZAME18Xp9VlnNvgmbZxc8FIHkVslvLQhHUT4r2kmjduE0PMuYZ62o9N66V8KuZ5StVQsZUfF9Thurj4PYaWR4ntCsGsKRTB19bpLjDrpERDbgCoh722n1Ln0wMYjPH2VctqrwZdAewxMvCww3n8uISC2jZnjUqrxUP%2FqlBrYbnj23xljphc5aCbhdAnGC76N7kowl6wWEt8cn3vTL8pUVLuQdXaCT9jmAgw6kqMd%2Fj0kfoEpx98ISU3AufDz%2F2FlESpycqwa4hjOO80ziS7Ey7jGl8Bwe3aZmVS7eD%2BXV4d5HE8Fmf0iK0zjxPSSb2EwDv6dA0fhSivtqOdvPxbmByH5qTNJ89RZQQt9TypPJ8BDNaUt%2FjViDD5dm0%2BSUlzuaD1kQqEsxktoRAIUpbdg8JKERv4h9YYOfm9%2FxyyE3%2Fg5K%2Fyo4ILUqebtH0zrmdWSs28fmG82swUdrvH5HhMK6XiMoGOqUBBEbUKj7Gj4FmYI%2BFub5nDBlRpVoeTBMGkWllv0aI1WfK5a0TlISI%2F5xpqNnXsimme9umvFXULgat1xOgF%2BnpXdykr%2FU1twMwrOz2aaw5zvy0f25JoVKmFI9HCkudHArXy44ychMQ5ofGiPmQkbPWj9bSzENosXwJYA6jKJAQHjsSX96YUumTGa3z9VQY6SarSGmbuV%2FEsBuUp4%2BNtSkIYkcB38ez&X-Amz-Signature=c531e73a1e47f68a7077801c4ac7cfb57a2abb5a8a1b0604ea3330d253a6c155&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

