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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPULLQOS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9mW6dP7G3Q51BJURn9BWgNXj0Mr5ldpCk%2BjaUGm1N3AIgdbwzMJeImm1TWHsA6ugNsDx6EAgr0vz1JC1mT4tybvIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDElSMc13a%2B8lvU%2FIQircA5KMexBk9GAeBWeZFsRjvQKj8f%2BwTGbRq9qy6AHz05H3etVCuTQZrZwwGAMQqFYcHR45NqDP6Hnxe0ggfa%2BZHVbyAbBxF2XR%2FkMDUqYeEZEWGb%2FNSfMdSg%2B5kTCb2Kb3XdMbjWUfbnoWWticpLHwkmYvI3nW6wmnOcdkYyJViF5gDfbtUPsu5fCfQDZdwrvzLTilt2FaCOjpUlcZenEeeIjcGNZKHlu0iC1I%2FdGrPd6ncHfDhqTpMNT6EV6p14Q7U6Cn8TJTuFoYzweDsUrmO9y92UGJo4WVeKKGAoZ5hddfVX4aLFWqf0m0dYRs%2Bu8BMjwLlG78KlZ05O%2FoeYaMF5MLEBry7FSq%2B3EOwQ3r7Pyuv10GSBEivgYl9%2BGm3aiqLmavq6zUVQt0xzyKArZhYFTnO8EPhzAzZecrktXJdUsfSXsj4EvXcA4KsutJScTQcMk0Lk1PBWJXW%2BLfVTZApsIvF6EOV8zlA33i3IpFN4S8OH%2BqaaOxJV9v97zUA8DDFGe7pNb4jJBaFF0DG5eYMSrXNeCarAVK7NUaskbingQCnwGnSJAMv2G8ByUP%2FdbRYxVmGYxTStPPksWjO7CVsorzL3XnjofK%2BMOLb46cIBe93mFwbw2ENG%2FHvEunMICPisoGOqUB3ln%2FLO%2Fr5VV4WbR57YwXXnfMozlJQTtVox1ZdlHPMEPMeo%2FO72Ft7r38ga%2F%2FBe35MvyoabCt80cFpBtq9uQnzwpfOB4yXE3yl0%2B5LjRLQKwyHQDRbO0qld2palZ9nTkSNKbMZ8wxpwewdRnHV1h0PfsiLVQM0pwikU9bESO3K%2B8n7t819tV3nBPrHeKmFKl4y%2B3P9IWVWOcnqHV7DggMahF4eOoW&X-Amz-Signature=41129b3ed5a54c226682fdf8289ee147473349c2aed7d48a5c667af8964ad822&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YPULLQOS%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T105138Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELP%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIQD9mW6dP7G3Q51BJURn9BWgNXj0Mr5ldpCk%2BjaUGm1N3AIgdbwzMJeImm1TWHsA6ugNsDx6EAgr0vz1JC1mT4tybvIq%2FwMIfBAAGgw2Mzc0MjMxODM4MDUiDElSMc13a%2B8lvU%2FIQircA5KMexBk9GAeBWeZFsRjvQKj8f%2BwTGbRq9qy6AHz05H3etVCuTQZrZwwGAMQqFYcHR45NqDP6Hnxe0ggfa%2BZHVbyAbBxF2XR%2FkMDUqYeEZEWGb%2FNSfMdSg%2B5kTCb2Kb3XdMbjWUfbnoWWticpLHwkmYvI3nW6wmnOcdkYyJViF5gDfbtUPsu5fCfQDZdwrvzLTilt2FaCOjpUlcZenEeeIjcGNZKHlu0iC1I%2FdGrPd6ncHfDhqTpMNT6EV6p14Q7U6Cn8TJTuFoYzweDsUrmO9y92UGJo4WVeKKGAoZ5hddfVX4aLFWqf0m0dYRs%2Bu8BMjwLlG78KlZ05O%2FoeYaMF5MLEBry7FSq%2B3EOwQ3r7Pyuv10GSBEivgYl9%2BGm3aiqLmavq6zUVQt0xzyKArZhYFTnO8EPhzAzZecrktXJdUsfSXsj4EvXcA4KsutJScTQcMk0Lk1PBWJXW%2BLfVTZApsIvF6EOV8zlA33i3IpFN4S8OH%2BqaaOxJV9v97zUA8DDFGe7pNb4jJBaFF0DG5eYMSrXNeCarAVK7NUaskbingQCnwGnSJAMv2G8ByUP%2FdbRYxVmGYxTStPPksWjO7CVsorzL3XnjofK%2BMOLb46cIBe93mFwbw2ENG%2FHvEunMICPisoGOqUB3ln%2FLO%2Fr5VV4WbR57YwXXnfMozlJQTtVox1ZdlHPMEPMeo%2FO72Ft7r38ga%2F%2FBe35MvyoabCt80cFpBtq9uQnzwpfOB4yXE3yl0%2B5LjRLQKwyHQDRbO0qld2palZ9nTkSNKbMZ8wxpwewdRnHV1h0PfsiLVQM0pwikU9bESO3K%2B8n7t819tV3nBPrHeKmFKl4y%2B3P9IWVWOcnqHV7DggMahF4eOoW&X-Amz-Signature=b64079d58428d589307e2d20b1d5e9f31106d1ecad3d87746f448909f3fa5288&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

