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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY4FIPRH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8C67GwgO%2FLua5Y%2BqAJH%2B43IboOrw9xw7WegGw4ASfZAiEAplY2Iv7RLjxVeBASWgrMa5M5C1GqYMvwUmuBKwBfn7Qq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFsclgxI7QMkzrTPoyrcAywICRyO9iGsTY0aD2BlBcUvpPBVTamEoc5%2BxN9tkmOImjQPbG9WhbjFnWr66l44QPBYl9Y4bvnrW2uuHp7gJ%2FVvK82E5kl3O%2Bn920fTDXFksqoF8Ff5%2Fv4UuDf60Dh19Zt09ZLfmIzOp3UQjVr9rCKfchBrzRD4AmWJtuShM8xZYNZiWrUgO0cpw1qfdbI0ohb6A0A%2FXdoa4ikXn02%2Fd7oQHDu734GFU4NOsiwBs6LLJJ1F%2BjwvhuUxFOV45IIz5LfFhB0Pie0Wg2F9Ab1%2FxD%2BHXkxNrGZrBEIUfZkm4KQzp86FepKezA%2FDjzKgB1vmAsPO3DFPAGTe%2F08RUUtHyR3qd6%2F69iolc9pjXUHAb8R2dFVpPA2NudXtRmJZJcJhMT29kx5CzJg0hnKkJJ9noxu59kBphvufnbzdnkscqxman1B3pXIs%2FmooD8AhzdWVjWKnDI%2BrvRmcpctsgfzq8xXZZjrBdT6K75bgnLbTRVkz7rY%2BFeKikZmdYruY9R8PLL1XFDH8OzcKUvCTscXIF%2FT%2BS0JbbNoEYuyyXu6e17uvhWkxeDQXpa4CT9aIzIwJMyGhKr9zMIKYqvJ4sh%2FjBytc85qyIP72io%2BN1n9e8pwvTfyp1RKymBX9ggQAMOrhisoGOqUB1REpVF1s3nGrqtvJAuF4RK%2FcifRdWPO2uJwdP6tO5cQkoE6Pu%2BYmf4TcghXBoVRNaSj6vHOwKoGFZ%2Bl8ABsS4V7ala%2BgmJxLiGALyfTZj8cRFWkVu7S%2BEeZZlwiPebQYMiPDN%2FxCh1DO00qhUsVOpaCkGsOrcF6XVXYjvkpAno8nn1XWR9EkLTfRsxtHkr5EDDIKeRr9azEqon0%2F8Elzs53sGvGj&X-Amz-Signature=5c961cc1c662e282752a7b0ac7b8238ac29b5837b05f2f768ffb2f24dd1a116d&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466YY4FIPRH%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T135129Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELb%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJHMEUCIC8C67GwgO%2FLua5Y%2BqAJH%2B43IboOrw9xw7WegGw4ASfZAiEAplY2Iv7RLjxVeBASWgrMa5M5C1GqYMvwUmuBKwBfn7Qq%2FwMIfxAAGgw2Mzc0MjMxODM4MDUiDFsclgxI7QMkzrTPoyrcAywICRyO9iGsTY0aD2BlBcUvpPBVTamEoc5%2BxN9tkmOImjQPbG9WhbjFnWr66l44QPBYl9Y4bvnrW2uuHp7gJ%2FVvK82E5kl3O%2Bn920fTDXFksqoF8Ff5%2Fv4UuDf60Dh19Zt09ZLfmIzOp3UQjVr9rCKfchBrzRD4AmWJtuShM8xZYNZiWrUgO0cpw1qfdbI0ohb6A0A%2FXdoa4ikXn02%2Fd7oQHDu734GFU4NOsiwBs6LLJJ1F%2BjwvhuUxFOV45IIz5LfFhB0Pie0Wg2F9Ab1%2FxD%2BHXkxNrGZrBEIUfZkm4KQzp86FepKezA%2FDjzKgB1vmAsPO3DFPAGTe%2F08RUUtHyR3qd6%2F69iolc9pjXUHAb8R2dFVpPA2NudXtRmJZJcJhMT29kx5CzJg0hnKkJJ9noxu59kBphvufnbzdnkscqxman1B3pXIs%2FmooD8AhzdWVjWKnDI%2BrvRmcpctsgfzq8xXZZjrBdT6K75bgnLbTRVkz7rY%2BFeKikZmdYruY9R8PLL1XFDH8OzcKUvCTscXIF%2FT%2BS0JbbNoEYuyyXu6e17uvhWkxeDQXpa4CT9aIzIwJMyGhKr9zMIKYqvJ4sh%2FjBytc85qyIP72io%2BN1n9e8pwvTfyp1RKymBX9ggQAMOrhisoGOqUB1REpVF1s3nGrqtvJAuF4RK%2FcifRdWPO2uJwdP6tO5cQkoE6Pu%2BYmf4TcghXBoVRNaSj6vHOwKoGFZ%2Bl8ABsS4V7ala%2BgmJxLiGALyfTZj8cRFWkVu7S%2BEeZZlwiPebQYMiPDN%2FxCh1DO00qhUsVOpaCkGsOrcF6XVXYjvkpAno8nn1XWR9EkLTfRsxtHkr5EDDIKeRr9azEqon0%2F8Elzs53sGvGj&X-Amz-Signature=d6b658967bd35cf2399a3ca576dc96b85426494d619898190e37bb94f205976e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

