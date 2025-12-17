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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXPRYMGQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBc5RJWf3Kf0sK1pqDLYCxGCLEpMbDv3T1gDm8s%2BFgjwAiAl8lJW7Qoo%2Fpz5OTQ4f%2BuwCNXBmbu5XcXEAsY5xCKjdyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM7kTv%2Ftq3i9UUUAI1KtwDyJkvZPhqTxed1VFAVDWxu4Gqo%2BNaERGpMnZWiHOIUMdeGq7sAIfetlERR3zezeuJXVvgpScU215P5HkNqSRQ3Jj5BwSnBJQpFAFCsNJZF5SJqnXYOaqP2II2qoDm4RbAbJfBa7UPKvAaP5UZz2gsXGIoDktwv%2FDSXanwzWvak9MaQu8iIEOBH%2F1Mu4Jcvzv3L6rhX5BM2g6zh9Qhpv9RZm9Y5bS%2Bi9MJenxV%2B2HyayaSPOgPPCh%2F%2Bh0NfTBKc1D1fpD%2BZ7ZrReccr9TA2BJ%2F%2FUvekA7xvnjiQ5JMYTa6ltltpKrj3wyUT9YlTEFG3BQCMaz5oS5CnvCncTSTQYZIf5RvxzMlbxUi28fyOMDj%2FIYXtdlh9bJHdLQiGSDtBGxg8lMzUoYOOY9kLlKu5Gzcz3bXYT8gTguXOu7u48tWGdAalrdoxZZBnUieWySaEp4wLNNt9YrZcLNbj0q4OIqcwUXhDAtkawzuVkG7nt0pKrm8c2j7TJj6bkIi31GADMO1VaIfJVf2jr3IMiyxqar86sOKtUQ4X49qOULgzER6oQOLNxUc1XSjzFggaarFhDAOssw1BfMimliZmXHTwkHNxrlhYp8C8Af0F5hdSLhYmAtsCinjVnApHNBdm0cwo6qKygY6pgH4kcSX27F0nrUbNwQ3scYR3yGsvRFujYpuryU0EXi3cOHxPBTC%2Be0UI2e%2BMj0%2BHXSddV%2B5o0WLjA2vEZMZVuvJbEds65xctwhlwle4lof1pzMXqPl3J86iH8avuRGxYD2e2I4Cd8ngZCxuU9SRggK9QUolu3a5RIPDC527BUj7KE2CDV8IJFAmliGtxVOPA0x48OZTOzwGIfgZXA7VOHDEv%2BSImtJL&X-Amz-Signature=f622a68bd1cff3b252acc6616bcfdf2b5b4817667d54a4139287ba0f9f62216e&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB466ZXPRYMGQ%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T121131Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjELT%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJGMEQCIBc5RJWf3Kf0sK1pqDLYCxGCLEpMbDv3T1gDm8s%2BFgjwAiAl8lJW7Qoo%2Fpz5OTQ4f%2BuwCNXBmbu5XcXEAsY5xCKjdyr%2FAwh9EAAaDDYzNzQyMzE4MzgwNSIM7kTv%2Ftq3i9UUUAI1KtwDyJkvZPhqTxed1VFAVDWxu4Gqo%2BNaERGpMnZWiHOIUMdeGq7sAIfetlERR3zezeuJXVvgpScU215P5HkNqSRQ3Jj5BwSnBJQpFAFCsNJZF5SJqnXYOaqP2II2qoDm4RbAbJfBa7UPKvAaP5UZz2gsXGIoDktwv%2FDSXanwzWvak9MaQu8iIEOBH%2F1Mu4Jcvzv3L6rhX5BM2g6zh9Qhpv9RZm9Y5bS%2Bi9MJenxV%2B2HyayaSPOgPPCh%2F%2Bh0NfTBKc1D1fpD%2BZ7ZrReccr9TA2BJ%2F%2FUvekA7xvnjiQ5JMYTa6ltltpKrj3wyUT9YlTEFG3BQCMaz5oS5CnvCncTSTQYZIf5RvxzMlbxUi28fyOMDj%2FIYXtdlh9bJHdLQiGSDtBGxg8lMzUoYOOY9kLlKu5Gzcz3bXYT8gTguXOu7u48tWGdAalrdoxZZBnUieWySaEp4wLNNt9YrZcLNbj0q4OIqcwUXhDAtkawzuVkG7nt0pKrm8c2j7TJj6bkIi31GADMO1VaIfJVf2jr3IMiyxqar86sOKtUQ4X49qOULgzER6oQOLNxUc1XSjzFggaarFhDAOssw1BfMimliZmXHTwkHNxrlhYp8C8Af0F5hdSLhYmAtsCinjVnApHNBdm0cwo6qKygY6pgH4kcSX27F0nrUbNwQ3scYR3yGsvRFujYpuryU0EXi3cOHxPBTC%2Be0UI2e%2BMj0%2BHXSddV%2B5o0WLjA2vEZMZVuvJbEds65xctwhlwle4lof1pzMXqPl3J86iH8avuRGxYD2e2I4Cd8ngZCxuU9SRggK9QUolu3a5RIPDC527BUj7KE2CDV8IJFAmliGtxVOPA0x48OZTOzwGIfgZXA7VOHDEv%2BSImtJL&X-Amz-Signature=7a9404f170bbd61511eab7e947ccd69473197791f64800c4193bfbe7b5317841&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

