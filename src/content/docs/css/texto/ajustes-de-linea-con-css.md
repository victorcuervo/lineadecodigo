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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWH2GKCR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFciCXb2u3Z%2F8YqBK4RkhW4qz%2FxsBRXPLXWST%2B33ktPJAiA863nNH0MfY0seslgPBKiowoHS4ijkpag%2FHzj5zNlxSir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMFhtaZ5qKz0TG51utKtwDzF2FAh7a34ApJju0RV3Ax0QzJV3ryPr%2BlJce5j%2FbaxuILD8Byx9yQAOKQdWx3JjH7D%2BYFCeDv3%2FAggLLcvEBTSQeiuRXiTOmBkVYK4Ixw9ZBGYa81GYHMpNa79eePo6hZJFuTWdQPimGtM7NMB7xenkyT7yNHZLK3stmOMx6MWo86z4n%2BSB9my6JPRD3h7ed4unWn994xzm8IIGReVO6MLSiQ3w2rFvZ1C%2FQ8D07r%2F0b3kOpnwRMQCB5Yq2p3Letg1%2BRqcwEMnLHWBtq6WX0AF6r3V5VSVnB0ltZAJUVur3ch810YkKa%2FGPek%2Bw8Vwxo9nsFlOiss%2FylFtZHsOI9xSYkZK%2BJBYbEU4q5%2BoxGOqcCz%2F3O27c4Pml%2FYmaRkLkjz7Jh9aGy7hBqRPYt2aKqXZfm0APqKVRaZEV8OmwqNfBGeFyeRLDGSdQLEykLXWpPf%2Fb8TsEvFKLbw2O0QqCYDkTQaUweVtN%2FXJCxGd2klK8DwrFkiec%2BcweuV04Z3ZUwxGM9f1tzOzovTRkeEyK0l2ybAVq%2FOLYyJokFQe4ZqOySwtpBXOx6SHEKqy5OBj7o%2FVRG5F5jv61Pa8IBwh9HwypXnXuHduTOsULPOl1%2BSNaECZMSvTJMStDWg%2FIwuZaIygY6pgF8cZuII6YXZ5OQQ3U8S7pbFgimAQabXgiGkJ4bhj1rU5lM384gK3Ey3YVidxnwiIRL58ZxNzQQLXxWEh7u3WG1%2BKPse2fXiBIgRQVRSahwWMTtkiRCG4gDSNVmmxypJbkhBB8AH57z2tMcuDTJHh05YHRnqGRh%2Fgu26thFuo75Bn2gdniNoLOo8UDVKVT1KaPo2bvm23ys3rZt7V33ojh7Np%2FvBAfY&X-Amz-Signature=c08f904aed5d8485cc4eeb371d15cc4d30ccbf47382eb66b43b57ccc39f4e162&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466XWH2GKCR%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T024136Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKr%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIFciCXb2u3Z%2F8YqBK4RkhW4qz%2FxsBRXPLXWST%2B33ktPJAiA863nNH0MfY0seslgPBKiowoHS4ijkpag%2FHzj5zNlxSir%2FAwhzEAAaDDYzNzQyMzE4MzgwNSIMFhtaZ5qKz0TG51utKtwDzF2FAh7a34ApJju0RV3Ax0QzJV3ryPr%2BlJce5j%2FbaxuILD8Byx9yQAOKQdWx3JjH7D%2BYFCeDv3%2FAggLLcvEBTSQeiuRXiTOmBkVYK4Ixw9ZBGYa81GYHMpNa79eePo6hZJFuTWdQPimGtM7NMB7xenkyT7yNHZLK3stmOMx6MWo86z4n%2BSB9my6JPRD3h7ed4unWn994xzm8IIGReVO6MLSiQ3w2rFvZ1C%2FQ8D07r%2F0b3kOpnwRMQCB5Yq2p3Letg1%2BRqcwEMnLHWBtq6WX0AF6r3V5VSVnB0ltZAJUVur3ch810YkKa%2FGPek%2Bw8Vwxo9nsFlOiss%2FylFtZHsOI9xSYkZK%2BJBYbEU4q5%2BoxGOqcCz%2F3O27c4Pml%2FYmaRkLkjz7Jh9aGy7hBqRPYt2aKqXZfm0APqKVRaZEV8OmwqNfBGeFyeRLDGSdQLEykLXWpPf%2Fb8TsEvFKLbw2O0QqCYDkTQaUweVtN%2FXJCxGd2klK8DwrFkiec%2BcweuV04Z3ZUwxGM9f1tzOzovTRkeEyK0l2ybAVq%2FOLYyJokFQe4ZqOySwtpBXOx6SHEKqy5OBj7o%2FVRG5F5jv61Pa8IBwh9HwypXnXuHduTOsULPOl1%2BSNaECZMSvTJMStDWg%2FIwuZaIygY6pgF8cZuII6YXZ5OQQ3U8S7pbFgimAQabXgiGkJ4bhj1rU5lM384gK3Ey3YVidxnwiIRL58ZxNzQQLXxWEh7u3WG1%2BKPse2fXiBIgRQVRSahwWMTtkiRCG4gDSNVmmxypJbkhBB8AH57z2tMcuDTJHh05YHRnqGRh%2Fgu26thFuo75Bn2gdniNoLOo8UDVKVT1KaPo2bvm23ys3rZt7V33ojh7Np%2FvBAfY&X-Amz-Signature=10c22088d244c1d4db55f70949786f01a9ef745bac84ba567e9ccb37a23371ac&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

