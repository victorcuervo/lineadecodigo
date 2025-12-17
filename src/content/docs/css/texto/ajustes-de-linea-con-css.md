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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q56DT7Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXu2zXjhzXal5lCMh1uobn%2BCfS9m7EVuCPSWyzJQyHmAIhAK8epGI5ICUhYGjrDqZlgivY6C97T0fhiqC7FCrx%2BDEvKv8DCHkQABoMNjM3NDIzMTgzODA1IgzXncXy44IjytWwTCAq3AN7YTtuOPDp38jkhwz5M0N6GFRZann3rcLkISYzZJUMzTCQ8lb2xC5Mf24Ue56DjZOS111RBp3IKlHPhlfF7DN8Kah88gjaovW2ttVyNF6%2FKEEmI7mIQ08ElAk8O%2Fwxy7AmCaBzKuiZ6Qk7pqu5vGeE7TJ5agIvtf6H5o831aVzDs8DjHMEqQQbQMASa70Hp3paJADswPxzHI%2FRgWLDOrTYuhQyQ0jLZsWDDILYt3VoI0v%2F1mWJghk%2BGGlQhtugom4DscEvy1A8akkHZDa5pky6E8qJ0mmZu2tUcX5mvmdM7wnx79deAC1wa8bBSwtCg7W188zt6O0S2yHQRzdYQBlqfcf%2BTmKA46XFQyYbQ3uLqpgXr44fgRaKmYbb3skblAnEoec7whVUU%2FxRMol3FBlSLx2mrnpLUgjt%2BkXviretabOG5vcqwQio%2FgDATqWt5nAxJMkNrf70HeutEUkzOYNtqGo6%2F6ElY7Gwgm6P63HTaA0vx7znVioKqzLsaO8v3yioxNPWuQJ7%2BFxeCJ6WQDNHIcoOR%2Fpeuk0GOCGMn2urzsKWEy%2Bvtp88YR7LuZAxuPHyBCNosxccLnqCmdjQdO1DrPEMRNE9g4vuK8J%2Fa9I58hI%2BMFy3SXAMJagMEzC%2B0YnKBjqkAXlsBiBs6JcCtwE9Jbo%2Brbq3opbwWPBFeYEbH7RKka5LIGPIw%2FqQbTvaOXvefze8gnCC9LeswrFBPLHqhYCsZqWa3x4FRmp8WQzbfehq3sNqIly2%2B2dkz9iPUVYll9R1sptRDBrFZV9NxsvqlDL1ebnI1ix1WKEq4bUW3ETdUY8VohEB4g9%2BbHPZGdluiI7EgOA9027v8z0Cf2jkKKkelxT5DYjo&X-Amz-Signature=50dced1d1079ab267e1b9e7d3cd8e7a3a39aa7cb59d1dbc450b509e38a116a23&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4662Q56DT7Z%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T092541Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELH%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJIMEYCIQCXu2zXjhzXal5lCMh1uobn%2BCfS9m7EVuCPSWyzJQyHmAIhAK8epGI5ICUhYGjrDqZlgivY6C97T0fhiqC7FCrx%2BDEvKv8DCHkQABoMNjM3NDIzMTgzODA1IgzXncXy44IjytWwTCAq3AN7YTtuOPDp38jkhwz5M0N6GFRZann3rcLkISYzZJUMzTCQ8lb2xC5Mf24Ue56DjZOS111RBp3IKlHPhlfF7DN8Kah88gjaovW2ttVyNF6%2FKEEmI7mIQ08ElAk8O%2Fwxy7AmCaBzKuiZ6Qk7pqu5vGeE7TJ5agIvtf6H5o831aVzDs8DjHMEqQQbQMASa70Hp3paJADswPxzHI%2FRgWLDOrTYuhQyQ0jLZsWDDILYt3VoI0v%2F1mWJghk%2BGGlQhtugom4DscEvy1A8akkHZDa5pky6E8qJ0mmZu2tUcX5mvmdM7wnx79deAC1wa8bBSwtCg7W188zt6O0S2yHQRzdYQBlqfcf%2BTmKA46XFQyYbQ3uLqpgXr44fgRaKmYbb3skblAnEoec7whVUU%2FxRMol3FBlSLx2mrnpLUgjt%2BkXviretabOG5vcqwQio%2FgDATqWt5nAxJMkNrf70HeutEUkzOYNtqGo6%2F6ElY7Gwgm6P63HTaA0vx7znVioKqzLsaO8v3yioxNPWuQJ7%2BFxeCJ6WQDNHIcoOR%2Fpeuk0GOCGMn2urzsKWEy%2Bvtp88YR7LuZAxuPHyBCNosxccLnqCmdjQdO1DrPEMRNE9g4vuK8J%2Fa9I58hI%2BMFy3SXAMJagMEzC%2B0YnKBjqkAXlsBiBs6JcCtwE9Jbo%2Brbq3opbwWPBFeYEbH7RKka5LIGPIw%2FqQbTvaOXvefze8gnCC9LeswrFBPLHqhYCsZqWa3x4FRmp8WQzbfehq3sNqIly2%2B2dkz9iPUVYll9R1sptRDBrFZV9NxsvqlDL1ebnI1ix1WKEq4bUW3ETdUY8VohEB4g9%2BbHPZGdluiI7EgOA9027v8z0Cf2jkKKkelxT5DYjo&X-Amz-Signature=8c0326952418a9258bffcb2217ed9dabfd6d9242bd66171c0099aa85efb85b67&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

