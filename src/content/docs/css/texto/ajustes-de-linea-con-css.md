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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZRPHKEV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrw4hy6GXeBRqz0MNnvtG%2FCRpsZzIqQzJN1DX2L3c3qAiB6ycSRIdfbT2J0YQupv1FbT%2Fibmm3%2FicQ4OeQlEZ495ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMAPhXRC9kl%2FMC%2Bw4JKtwD9xI0UkgO1FwM%2BhqfYg6kz2UvnL9ROEMh74d5slX2CBVyUiXIsv4VWNThpGlP2Db1qtMvxXQm8XRRse%2FJTqH1tyigtoEK%2BmATZYQdf9E7u%2Fi3v9XWj7coqYvBQeCugxvMkWTUOq0vihG2knqrsTHvo3PvD12zCZIhKeZ%2FDpgkvisNUvdJU7U3hldSyp%2FtgPHnLZkM4vkMaHaJCHO5oUur%2BPNpt7kU%2BlLDiurUrTF1FW0L5KksHiubK2HHYQ5ajBHNqIwAE2Nzo%2F0zvmXygHMLiJST1jDBfVMgIZTO4yOHAsxe%2FCbPu7ItqttWfXAHGcouSlG7qtm1ikER7of2RcklSpTZjMLozjZHQqfC8qpmZNabFOyOl%2Br8AnFoAmEcp57Kw%2BXqXrRF2Ro708nDpsBHZfuVYdw1QbSO7H7%2F0MIrHZKUCvJQAhkxHdcfe3IrEI7FM65nMCwmIjzJ%2FUHF52Kq31fE50%2BXJs%2BxNf7xcPNOmkCgxGtjK1AJXBcxoUBAfweZ61sN%2FV3s5lnLXMn1ccjlm8gEic2tQ5HuV%2Badswlct%2BX9Wd0OeB1wYIIb58A9fDaCyCiX6gDIe1G2jPvgwLHhDYIfwW9rcZvBM3ngxUUSjqNYAgBGSse2UH9jMX0wh7eJygY6pgE67VYyiX23KigzQf0Xps%2FZIjF%2BHIt5oBKGDepcAYQLzUzrDfIO%2BGGl%2BeeWcunI70JQVRtbHW6800zNyVq9AbM5zk68IAqsYdWnfj1fbkRWQ5bbM2oDuxo980cWJeG4oPBajuu5Hpg9YSxAElx7Czn8GfjvyuheP1N2OQShpamN19b1piNRFFyL2dEfdQ1TYjA%2Bm9pMo78GKl67dlQms4246Rp5Rzea&X-Amz-Signature=a19ef541945822e824ce8610a8669a8aaf33c72bc2fb6ae455ebbfff3cfdb1e6&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4663ZRPHKEV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T073014Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELD%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCICrw4hy6GXeBRqz0MNnvtG%2FCRpsZzIqQzJN1DX2L3c3qAiB6ycSRIdfbT2J0YQupv1FbT%2Fibmm3%2FicQ4OeQlEZ495ir%2FAwh5EAAaDDYzNzQyMzE4MzgwNSIMAPhXRC9kl%2FMC%2Bw4JKtwD9xI0UkgO1FwM%2BhqfYg6kz2UvnL9ROEMh74d5slX2CBVyUiXIsv4VWNThpGlP2Db1qtMvxXQm8XRRse%2FJTqH1tyigtoEK%2BmATZYQdf9E7u%2Fi3v9XWj7coqYvBQeCugxvMkWTUOq0vihG2knqrsTHvo3PvD12zCZIhKeZ%2FDpgkvisNUvdJU7U3hldSyp%2FtgPHnLZkM4vkMaHaJCHO5oUur%2BPNpt7kU%2BlLDiurUrTF1FW0L5KksHiubK2HHYQ5ajBHNqIwAE2Nzo%2F0zvmXygHMLiJST1jDBfVMgIZTO4yOHAsxe%2FCbPu7ItqttWfXAHGcouSlG7qtm1ikER7of2RcklSpTZjMLozjZHQqfC8qpmZNabFOyOl%2Br8AnFoAmEcp57Kw%2BXqXrRF2Ro708nDpsBHZfuVYdw1QbSO7H7%2F0MIrHZKUCvJQAhkxHdcfe3IrEI7FM65nMCwmIjzJ%2FUHF52Kq31fE50%2BXJs%2BxNf7xcPNOmkCgxGtjK1AJXBcxoUBAfweZ61sN%2FV3s5lnLXMn1ccjlm8gEic2tQ5HuV%2Badswlct%2BX9Wd0OeB1wYIIb58A9fDaCyCiX6gDIe1G2jPvgwLHhDYIfwW9rcZvBM3ngxUUSjqNYAgBGSse2UH9jMX0wh7eJygY6pgE67VYyiX23KigzQf0Xps%2FZIjF%2BHIt5oBKGDepcAYQLzUzrDfIO%2BGGl%2BeeWcunI70JQVRtbHW6800zNyVq9AbM5zk68IAqsYdWnfj1fbkRWQ5bbM2oDuxo980cWJeG4oPBajuu5Hpg9YSxAElx7Czn8GfjvyuheP1N2OQShpamN19b1piNRFFyL2dEfdQ1TYjA%2Bm9pMo78GKl67dlQms4246Rp5Rzea&X-Amz-Signature=cd9886f43815c19df56d32a7e3fd7bb1298fecf6148948b717d30c84d6fe246e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

