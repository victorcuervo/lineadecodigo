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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BSJZ7VD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmjNMt48HrxiRelUQEKdfTJzR2pW3v74SF1QHbO6AAHAIhAKjRj1F%2FY%2FRQTqiRrfm5uCbFzMqVQHs8WkYuBtceh0qVKv8DCHMQABoMNjM3NDIzMTgzODA1Igx%2BulztfFiHV%2FSqdzsq3AOpkIE6NdSOc2M2zTjAHOtHwCGbmwXMU3D8k%2Fvyw7yTYs1qQZ0c1w9XGFErgtaxakcJLEdnnJXNSF9gw553DVQsoo62HUKtuPqkvHy%2BHzEVODTAoqe%2FmkhQ%2B6OqBx4Jhupdin4MPirKzhSFJd7uOXE1khndFdw9zf8iL%2FPRHxbn5yO5%2BvAkr8TJqlYjHJLd%2FREAryIbZWSWd5C77HqVWFFzrASEZFZeBgL7iW63Lu4y0I1hHl1SnHTI8HjofFkXC3KaUuzXtmtpPSpOL%2FRahO6tgrUokSHTtLQhqxC1gZqttWhSxtiZCF%2FZ0HXhMmeMFlAtf39X4dRb%2FWu23BJaObpLLZqFhPLbYrpHgyRlZJHCW9lX4Mnfq4TFa7w2uikxuiz8qwBdM%2F%2BvfgArnxp2zpE1XVFfRKDpY%2F0PfYRod5pU1lmR8kXHT%2BD9OE35sc07%2FVmX8kAbkRACH1BOokOGbVHymA0aeqjtfzXcOIvF3DxFBpb5Pafhlkvlz72UOHejsiSThY6ecmBP8notoOgANMT7qclOBlz%2B9%2F90vSWSOFdlRvlHvl1vLO5k%2Flp7yxdw7a4Ijr2MBgiJHXGWIfoCGeSnx0a9NIMInoXsTTzQmpStj0tuk%2B7N9yr4BZPR2zCsmIjKBjqkAe99fnlGY36tPdhzoUtUJTbYfpNCxHGYqR2YCis7g84pydIjEx0OQhkr7s9SMyp%2FbJ%2FuGL%2FkNjT9%2Fd6lAf%2Br6LV9aNYCjolZqmdgXVu47og1rPHEDZUZparXQ3aZMeRtK21vz4LghhEzWdo3%2FX0e8M7BYntdf8d7C1ITtgg3J49fJDWWKEd20Zp%2F%2Fh5VY987qFgJNfJ8URoPKSb7ewuG8FEdb27%2B&X-Amz-Signature=3980133cc92ac03276fba377ab50a90261ae70d721b3c43dbc5c68b3939a2914&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664BSJZ7VD%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T020222Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCmjNMt48HrxiRelUQEKdfTJzR2pW3v74SF1QHbO6AAHAIhAKjRj1F%2FY%2FRQTqiRrfm5uCbFzMqVQHs8WkYuBtceh0qVKv8DCHMQABoMNjM3NDIzMTgzODA1Igx%2BulztfFiHV%2FSqdzsq3AOpkIE6NdSOc2M2zTjAHOtHwCGbmwXMU3D8k%2Fvyw7yTYs1qQZ0c1w9XGFErgtaxakcJLEdnnJXNSF9gw553DVQsoo62HUKtuPqkvHy%2BHzEVODTAoqe%2FmkhQ%2B6OqBx4Jhupdin4MPirKzhSFJd7uOXE1khndFdw9zf8iL%2FPRHxbn5yO5%2BvAkr8TJqlYjHJLd%2FREAryIbZWSWd5C77HqVWFFzrASEZFZeBgL7iW63Lu4y0I1hHl1SnHTI8HjofFkXC3KaUuzXtmtpPSpOL%2FRahO6tgrUokSHTtLQhqxC1gZqttWhSxtiZCF%2FZ0HXhMmeMFlAtf39X4dRb%2FWu23BJaObpLLZqFhPLbYrpHgyRlZJHCW9lX4Mnfq4TFa7w2uikxuiz8qwBdM%2F%2BvfgArnxp2zpE1XVFfRKDpY%2F0PfYRod5pU1lmR8kXHT%2BD9OE35sc07%2FVmX8kAbkRACH1BOokOGbVHymA0aeqjtfzXcOIvF3DxFBpb5Pafhlkvlz72UOHejsiSThY6ecmBP8notoOgANMT7qclOBlz%2B9%2F90vSWSOFdlRvlHvl1vLO5k%2Flp7yxdw7a4Ijr2MBgiJHXGWIfoCGeSnx0a9NIMInoXsTTzQmpStj0tuk%2B7N9yr4BZPR2zCsmIjKBjqkAe99fnlGY36tPdhzoUtUJTbYfpNCxHGYqR2YCis7g84pydIjEx0OQhkr7s9SMyp%2FbJ%2FuGL%2FkNjT9%2Fd6lAf%2Br6LV9aNYCjolZqmdgXVu47og1rPHEDZUZparXQ3aZMeRtK21vz4LghhEzWdo3%2FX0e8M7BYntdf8d7C1ITtgg3J49fJDWWKEd20Zp%2F%2Fh5VY987qFgJNfJ8URoPKSb7ewuG8FEdb27%2B&X-Amz-Signature=5475ebba6c11037a798a4b56901c818479ff815888a592ea91f4acb43fa364cc&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

