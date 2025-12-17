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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644SOVWEZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwEpq%2Bdy%2BSixaz4FNHPMB4regBLsVylXXIx5nnAxPQCAIgakR22Ar1EQJNci4xeKqunHGxII2XMkCRHtmA7LzTTgQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDE1r9w4HC5Z4BM5g8CrcAwUveI5kU76rPSDVenNAej6oj%2F2H25rLvqBMXayDBrke4i1QhzgiwYZcTlU6SCtQ9PnvD7KdlYCntbiY6KqcuylddI9jlSbzxx5MXn4WmdCOJ0fIhO%2BD0wMoAGDfhHnRZ7LX%2BGjSZeytTrXuhYY%2B5kb7FHLzdwdLc6HOdmetwyGVM4ND7ESXifQ5eZhT9MIYfgWFjUc7ARFWFplPvwZr7vqz4%2BUveePOeV5uKlw4egat6sh0wZrvyfbCx9PxmVsx4Pc3Wya4PSSPPfgZe%2FU4Qn4JhYQGWqUsKR%2FBYYq%2BzR7eJ3rVgPVZUo7LSGJ73O36PwcenRO%2Bi0t7iwjWMRLLhlv2DFlJuGsEv06oxRMOZHG%2BdQTyZG%2FfroiuSgWs6bRHjltTjXM6kiwsnXJUWFSySSgdtvN1WBAdZdk4kAb6tHwF0ccoP1UciKbzXtnotZAo0xAdawnldfeFJJcYrzPDl%2FMj6KYb4zqcOHLJNZdV8%2BD0LXA4%2B0LrzMZBQM9dElB0aZsBwxIZoXMZQj28Sx3peSzQoZAfhLHD35eVldmZCtTnoVooooZyWtMz%2BGGTVquS18LTW9KbXWnTiJJ4gYbEB4GZtAGK%2Bvn8YXTNPLGEZWRKjoJAm2pLNatLTIPGMLudicoGOqUBqBMcbY%2FSZLWcaZbd5Dp%2BUI75k1%2F03%2FsIbPVDAUqJ0%2FlSCeVKdYIxpgQp%2FyelIm05bwQ636jd16wwKSJ%2F53gdQ1cHVDvvYAn4OmUPyGLn5UdW8uiV0O%2B12tMt9uCJuy61R%2BowEHjgPnH2K1qradQKXZvZq0Z484ALjbwBP8i3eHA4GLPYQp0IqcWpKhtLOop6Y0qhIsevA4jEx3xA1IdFGlceSDb6&X-Amz-Signature=e9236f57fab8651608402dc49302a45eb6d8d0511fec88103d708b03af54ba7e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB46644SOVWEZ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T064125Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEK%2F%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQDwEpq%2Bdy%2BSixaz4FNHPMB4regBLsVylXXIx5nnAxPQCAIgakR22Ar1EQJNci4xeKqunHGxII2XMkCRHtmA7LzTTgQq%2FwMIeBAAGgw2Mzc0MjMxODM4MDUiDE1r9w4HC5Z4BM5g8CrcAwUveI5kU76rPSDVenNAej6oj%2F2H25rLvqBMXayDBrke4i1QhzgiwYZcTlU6SCtQ9PnvD7KdlYCntbiY6KqcuylddI9jlSbzxx5MXn4WmdCOJ0fIhO%2BD0wMoAGDfhHnRZ7LX%2BGjSZeytTrXuhYY%2B5kb7FHLzdwdLc6HOdmetwyGVM4ND7ESXifQ5eZhT9MIYfgWFjUc7ARFWFplPvwZr7vqz4%2BUveePOeV5uKlw4egat6sh0wZrvyfbCx9PxmVsx4Pc3Wya4PSSPPfgZe%2FU4Qn4JhYQGWqUsKR%2FBYYq%2BzR7eJ3rVgPVZUo7LSGJ73O36PwcenRO%2Bi0t7iwjWMRLLhlv2DFlJuGsEv06oxRMOZHG%2BdQTyZG%2FfroiuSgWs6bRHjltTjXM6kiwsnXJUWFSySSgdtvN1WBAdZdk4kAb6tHwF0ccoP1UciKbzXtnotZAo0xAdawnldfeFJJcYrzPDl%2FMj6KYb4zqcOHLJNZdV8%2BD0LXA4%2B0LrzMZBQM9dElB0aZsBwxIZoXMZQj28Sx3peSzQoZAfhLHD35eVldmZCtTnoVooooZyWtMz%2BGGTVquS18LTW9KbXWnTiJJ4gYbEB4GZtAGK%2Bvn8YXTNPLGEZWRKjoJAm2pLNatLTIPGMLudicoGOqUBqBMcbY%2FSZLWcaZbd5Dp%2BUI75k1%2F03%2FsIbPVDAUqJ0%2FlSCeVKdYIxpgQp%2FyelIm05bwQ636jd16wwKSJ%2F53gdQ1cHVDvvYAn4OmUPyGLn5UdW8uiV0O%2B12tMt9uCJuy61R%2BowEHjgPnH2K1qradQKXZvZq0Z484ALjbwBP8i3eHA4GLPYQp0IqcWpKhtLOop6Y0qhIsevA4jEx3xA1IdFGlceSDb6&X-Amz-Signature=62c6df094aba97c4dcd3952da19496a6634b9fc737a49647f8e380932b2a782b&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

