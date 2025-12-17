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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ATFYZV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkJApa793FgJH%2B26DHaM3gPMCbcKHl369RINOMN0TuzAiBb%2Fqy6ZE7zUZYDDmTjKKVnTDR%2BFeb1%2FXsv18OoSoLPuSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMB2X0vf66KG6CrahyKtwD4mTC0GIPGKhNXqIcaKlfj8kgty9lp79SzjLshsppVvrgPnsEw%2B7MN7rN91cBnm8XdkmNXd6%2Fjmnw6u5%2Fr3W%2Ff5OvoBAaRAVR5l7KFs%2FwSnf3t4saS1eR9tkf9%2FA7acsEMgGXTQPI8JVR6rJq7zJv7PiRLER2q%2FLXUYFOZAz8xOMdEDvIM3AZo9hGYN3ve9WVzZ1mCY3rbl%2FOL8NEHXAW3ANZ6GXTCXJkmr7qP9XRADg0QeFRnPtD1HSwdTyN1CveH5COfiT8hF5xKqymU6WEchAThnMQZqMOvMhvjDQlOAVXSBjaJGzBcOQeUS2v7VcBuMRe8C7JbnQ1ogc9F7HJD9JZ%2FLnDouhd52V2pr2dvqvOOtxvyLaO5DZ6a1rkxgLiRbPAXzvG3wHv88oMHPjFCTXSUKQlcB4vUCL5pACBTySZtTL%2FLGhHWcsx6JbTvMiyfF9Cfj4KPF5reS9YnVmp2b6Dvd%2FABGrRG94k4rTRs3A06hubjuENmhU%2BFiPWaJV6vzsC9qIGpxvQHKvULcU4K%2B%2B0e%2BA3j3N1gPjxIX9Ku%2FjwHoVIbEXM6ntPnqBw82E9s8vjl7t0o%2Ft68NFnTFLM8V9FS94vzEcYVZZ1tapTRpCceMcq%2BDsGudfAX4Mwj%2BGKygY6pgEa%2FEsAihYXG8SqbLH0lLY%2B6IHAIriqTbgviQPCdCNYrSaGcS7XRa89h9vAyAvw7%2FjNOFoY5S9zpDkYUFu%2FPh16cKXLKA0g0qa4oXTK2D%2B3AhzY2de5U36A9ydEZItrKGSUgcAQV0NX8duM%2F10JtG%2BB9y0A7pufBvXtEcS3Wa5OBA9DS2feWOHLh5L50c24DUhYoQ8Se4h3dw3IIOC4yxViVDfB%2BVrc&X-Amz-Signature=e41de80883705fa0ab66fe9f0fad11bdf1e3fb7d35a793287c14525862f838d4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466Z6ATFYZV%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T133355Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIAkJApa793FgJH%2B26DHaM3gPMCbcKHl369RINOMN0TuzAiBb%2Fqy6ZE7zUZYDDmTjKKVnTDR%2BFeb1%2FXsv18OoSoLPuSr%2FAwh%2FEAAaDDYzNzQyMzE4MzgwNSIMB2X0vf66KG6CrahyKtwD4mTC0GIPGKhNXqIcaKlfj8kgty9lp79SzjLshsppVvrgPnsEw%2B7MN7rN91cBnm8XdkmNXd6%2Fjmnw6u5%2Fr3W%2Ff5OvoBAaRAVR5l7KFs%2FwSnf3t4saS1eR9tkf9%2FA7acsEMgGXTQPI8JVR6rJq7zJv7PiRLER2q%2FLXUYFOZAz8xOMdEDvIM3AZo9hGYN3ve9WVzZ1mCY3rbl%2FOL8NEHXAW3ANZ6GXTCXJkmr7qP9XRADg0QeFRnPtD1HSwdTyN1CveH5COfiT8hF5xKqymU6WEchAThnMQZqMOvMhvjDQlOAVXSBjaJGzBcOQeUS2v7VcBuMRe8C7JbnQ1ogc9F7HJD9JZ%2FLnDouhd52V2pr2dvqvOOtxvyLaO5DZ6a1rkxgLiRbPAXzvG3wHv88oMHPjFCTXSUKQlcB4vUCL5pACBTySZtTL%2FLGhHWcsx6JbTvMiyfF9Cfj4KPF5reS9YnVmp2b6Dvd%2FABGrRG94k4rTRs3A06hubjuENmhU%2BFiPWaJV6vzsC9qIGpxvQHKvULcU4K%2B%2B0e%2BA3j3N1gPjxIX9Ku%2FjwHoVIbEXM6ntPnqBw82E9s8vjl7t0o%2Ft68NFnTFLM8V9FS94vzEcYVZZ1tapTRpCceMcq%2BDsGudfAX4Mwj%2BGKygY6pgEa%2FEsAihYXG8SqbLH0lLY%2B6IHAIriqTbgviQPCdCNYrSaGcS7XRa89h9vAyAvw7%2FjNOFoY5S9zpDkYUFu%2FPh16cKXLKA0g0qa4oXTK2D%2B3AhzY2de5U36A9ydEZItrKGSUgcAQV0NX8duM%2F10JtG%2BB9y0A7pufBvXtEcS3Wa5OBA9DS2feWOHLh5L50c24DUhYoQ8Se4h3dw3IIOC4yxViVDfB%2BVrc&X-Amz-Signature=8899179305d230cc52f5fdb2cc4effc642f3f496361ec53b94b30b3ca3d9cfd4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

