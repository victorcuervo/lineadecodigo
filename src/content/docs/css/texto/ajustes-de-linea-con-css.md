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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TF6ZTJB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnGf4H7Frsea1NEUwmbhonr4CjyGd4wKCTM2z4tvV1tgIhAJu3SyAtCd0F5MZHGeRW7VRuQ4PrfVh6om%2Fj8%2BfRn%2FktKv8DCHUQABoMNjM3NDIzMTgzODA1Igza1XR4C8FHn%2FAO1eAq3AMttMuUWcprQt3zDiC6QlJEYaKR4H3KJcGYzLrdtV%2Bg8efl7iOGnKL%2BusDNeCPxn7%2FJwh3TSdI5wysasSlOJVNuO5T2KTayc1y38Va%2BWyMdKxsTcCdpMXEpOyg7fr%2BcFFZqs4YqWIiqDTGywUj9KsKOPwCcJEvaFc88uaWJWX3dSYbJtZKUjVwREih5WT3XVAdaigz08Sdv%2BDgKEhlAvfbHU%2BENKdkMtiFykCSeGGi8JuHt0F22YLR8iySUwywpOUwxGPoZEWo7o4GdTe%2F1bW%2FDKIxKv0ogflNgrsROdZsPCJ1b6zVLMKDZ1kUugekbZTjZOmKUKAxuBRJBJigIslZlz3KtDOjH8ZxwuOq9DQRJnTLP0qirk58kPIwUR%2FqrfLSvu4yRwVaxVBPU1sjz98dXrll693UqFbuQvvnscA7PK%2BVZwIhfb80jULzB9uhRVivec3DBVtSqImOQzzdzu7GFLetWQIYMjr24xLKZo27Wb0g7dfEw2ELLDft4Gh6TwHguDj7uD5zNXP67DnhMKFxP07FlnXCxpuy3tMP8wRYBvgaPmv2%2F9q5UqL0voqoqdbu5tlbZ%2BX1tykchGDL0l%2BR0k8KbhAZGGATw3UnynZ3o%2BWShVtjF13kedQYJJzCEzojKBjqkAZMIPPdBHqBOTDehAZsglVVMSc3w2VK4GNA3X1yaYp26%2F5dHU29JjaSvSvW9JuYN8OoMsn5lM8kVhaKGz0HWATZauwCl1G8PE9tEWc%2FrgajQK8ji55rUw6T5wKgFR7C%2BJduUxH3BQ6ecGRvM8b62%2FBeDDuaN6fm4kZtJkKDblpGPpofs9UftVQzJAAbgT5lFmItgclVQHSrwhG%2BBxC%2FB%2BMfcErvt&X-Amz-Signature=e2a901d8a91a0e2d984c5ea61f11b522bbe425bc130bcef99fbae3e586853016&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4665TF6ZTJB%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T035836Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCnGf4H7Frsea1NEUwmbhonr4CjyGd4wKCTM2z4tvV1tgIhAJu3SyAtCd0F5MZHGeRW7VRuQ4PrfVh6om%2Fj8%2BfRn%2FktKv8DCHUQABoMNjM3NDIzMTgzODA1Igza1XR4C8FHn%2FAO1eAq3AMttMuUWcprQt3zDiC6QlJEYaKR4H3KJcGYzLrdtV%2Bg8efl7iOGnKL%2BusDNeCPxn7%2FJwh3TSdI5wysasSlOJVNuO5T2KTayc1y38Va%2BWyMdKxsTcCdpMXEpOyg7fr%2BcFFZqs4YqWIiqDTGywUj9KsKOPwCcJEvaFc88uaWJWX3dSYbJtZKUjVwREih5WT3XVAdaigz08Sdv%2BDgKEhlAvfbHU%2BENKdkMtiFykCSeGGi8JuHt0F22YLR8iySUwywpOUwxGPoZEWo7o4GdTe%2F1bW%2FDKIxKv0ogflNgrsROdZsPCJ1b6zVLMKDZ1kUugekbZTjZOmKUKAxuBRJBJigIslZlz3KtDOjH8ZxwuOq9DQRJnTLP0qirk58kPIwUR%2FqrfLSvu4yRwVaxVBPU1sjz98dXrll693UqFbuQvvnscA7PK%2BVZwIhfb80jULzB9uhRVivec3DBVtSqImOQzzdzu7GFLetWQIYMjr24xLKZo27Wb0g7dfEw2ELLDft4Gh6TwHguDj7uD5zNXP67DnhMKFxP07FlnXCxpuy3tMP8wRYBvgaPmv2%2F9q5UqL0voqoqdbu5tlbZ%2BX1tykchGDL0l%2BR0k8KbhAZGGATw3UnynZ3o%2BWShVtjF13kedQYJJzCEzojKBjqkAZMIPPdBHqBOTDehAZsglVVMSc3w2VK4GNA3X1yaYp26%2F5dHU29JjaSvSvW9JuYN8OoMsn5lM8kVhaKGz0HWATZauwCl1G8PE9tEWc%2FrgajQK8ji55rUw6T5wKgFR7C%2BJduUxH3BQ6ecGRvM8b62%2FBeDDuaN6fm4kZtJkKDblpGPpofs9UftVQzJAAbgT5lFmItgclVQHSrwhG%2BBxC%2FB%2BMfcErvt&X-Amz-Signature=a352db4ba10c68d130ff06304c7cf8ff03840d61880b885ead64beae6b4259cb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

