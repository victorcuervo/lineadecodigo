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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBT35RCY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsCqfrP4UWlZRBhY4L70d0EtPsa08UzvDpz2pnC9YpvQIhAMc4QqsWHbUTALHBiqn5fVij7HZEc26WH4QfXjEp9UcbKv8DCH4QABoMNjM3NDIzMTgzODA1IgzoHNbgtBUuddHJq%2Fsq3AOSB0hVsuC4R6qNcQEpFKwkP0Qq7fYXopVAT6jxrFXEmETE7cbZKDQ1Q1bMccISUd2euob5jzKc7kEU6%2Be8MnGKaw3POnBoaVbTppi65qGfi40qhaW4KROv0qLl9iBSUGIMUrVAXMHzF71jqvR%2F5RGZselx5DJpRpiSgTvZ0ThJAudcTRQus0w9zO2P%2BScU8wFC06%2B2mDdOsBTQ%2FCy9qjqjSdLsWMrh5bxpXKRtfR3ebvLIzbZTV56N9VwxF0YzedgNwUtWJASmJtzm6ZHIXmlr3zhUfl87z6VkGM24c%2BtSkQ4RU4nwGdQYMmPLjfBng6%2FEr6%2B%2Bn8iQLRDccbRwCFJ%2Bxl2ndwbnCFCrMCVu8mYq6SFIr0kotPL%2BDIj9O1VQg1tVCsf43fi9DA4Szx8kh87V76B6KwJx1B%2F%2BL%2BU2%2Fcw4jMNGqnM1GI4w5p1odkIKUQjYpvNVaSbflDI7is7bKwUKq81a2Oi6vUj3TVMP3Qc8ulbYHg5e3dS4m7BDwLj3mlaz5W48uSbHJlFqgoXQm5WPPSMInyvmepAY09qieqhVwCJHUN%2FHMWjk6%2BuQs3ks%2BdvjvrS9nDBziCE0BDDMByjpNfFyfHGCnXTQCVFlzMdsJzSozxnwf3WwZypxUzDxxYrKBjqkAXk6AUJZQS0nBCbh9J86C654uB0xq9xQsigbuuNF8%2BQUU%2BPYn5U8Arw%2F1GRKNTa2vEKIH4Dlr30T7ZoKdwiY5jSSy6c7uBTZquDgVN68qTAzLK5kW3w2gCyCNR%2Br6t4oQUSO3fOXmChum59qo%2FSMU4uk2Zbp8cUSd7QPuoqzPATRpHyMgx4j5P881T8QK9gtGnAEGHxql8mbFXJXtfWT6wZrveet&X-Amz-Signature=34734cf44be8ce4440770559884db259e765557affbd74c9deabca3c86460ceb&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZBT35RCY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T132350Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELX%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQDsCqfrP4UWlZRBhY4L70d0EtPsa08UzvDpz2pnC9YpvQIhAMc4QqsWHbUTALHBiqn5fVij7HZEc26WH4QfXjEp9UcbKv8DCH4QABoMNjM3NDIzMTgzODA1IgzoHNbgtBUuddHJq%2Fsq3AOSB0hVsuC4R6qNcQEpFKwkP0Qq7fYXopVAT6jxrFXEmETE7cbZKDQ1Q1bMccISUd2euob5jzKc7kEU6%2Be8MnGKaw3POnBoaVbTppi65qGfi40qhaW4KROv0qLl9iBSUGIMUrVAXMHzF71jqvR%2F5RGZselx5DJpRpiSgTvZ0ThJAudcTRQus0w9zO2P%2BScU8wFC06%2B2mDdOsBTQ%2FCy9qjqjSdLsWMrh5bxpXKRtfR3ebvLIzbZTV56N9VwxF0YzedgNwUtWJASmJtzm6ZHIXmlr3zhUfl87z6VkGM24c%2BtSkQ4RU4nwGdQYMmPLjfBng6%2FEr6%2B%2Bn8iQLRDccbRwCFJ%2Bxl2ndwbnCFCrMCVu8mYq6SFIr0kotPL%2BDIj9O1VQg1tVCsf43fi9DA4Szx8kh87V76B6KwJx1B%2F%2BL%2BU2%2Fcw4jMNGqnM1GI4w5p1odkIKUQjYpvNVaSbflDI7is7bKwUKq81a2Oi6vUj3TVMP3Qc8ulbYHg5e3dS4m7BDwLj3mlaz5W48uSbHJlFqgoXQm5WPPSMInyvmepAY09qieqhVwCJHUN%2FHMWjk6%2BuQs3ks%2BdvjvrS9nDBziCE0BDDMByjpNfFyfHGCnXTQCVFlzMdsJzSozxnwf3WwZypxUzDxxYrKBjqkAXk6AUJZQS0nBCbh9J86C654uB0xq9xQsigbuuNF8%2BQUU%2BPYn5U8Arw%2F1GRKNTa2vEKIH4Dlr30T7ZoKdwiY5jSSy6c7uBTZquDgVN68qTAzLK5kW3w2gCyCNR%2Br6t4oQUSO3fOXmChum59qo%2FSMU4uk2Zbp8cUSd7QPuoqzPATRpHyMgx4j5P881T8QK9gtGnAEGHxql8mbFXJXtfWT6wZrveet&X-Amz-Signature=8449c5cce65ec30ac161d61c7e14fa108057bfd70f900aa9479f82483f89c627&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

