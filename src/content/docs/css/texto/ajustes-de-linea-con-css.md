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


![Línea de texto no ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/00b7d033-ea8f-404f-bfd0-426bd0c88f77/Untitled.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C7MHJZY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIHLXooEsWHjXusC%2BJZKR9E%2BVKhNpIq4fL18mBunpCkqCAh8daD9xgE5JAHD2hpbmC%2FmNLBW6qNMd4gjVFI4e1ce0Kv8DCHUQABoMNjM3NDIzMTgzODA1IgzvKjCoHc8tlkwKWvkq3AO3PocmjRi0XJaz4lYTNapbwwzfksdd06ZvPPZdpY5bBoL8yV%2FDjp%2FcCj17kgIPa%2FtnT%2FEBDnabR%2B6hhD2Uy3XT7oJVpor20DbGJrJ6%2FBiZMJ8qX3aU1g7cXGqKnqOwaHhXoVTmUw0S%2FoPEl5IbdlvyAXp6yMROE8vj%2FnrJSjdUjphp1kayAzJ3mYYclFYyAMzINh%2FvEciiztTR2zoVmW4A9RD3NjfR6gHT2s%2FMzB22qRFCSXqC0TF5ULIDYx8cO%2FqcaqTrUlkqqQ95it%2F4HJ5BVgbUBVM1jLCvj0OKGjbSi6ur74JBVHQNrJ9Leh9aITDAvFF7tXVSUuuTgUAbFv7BWND6ZMquixkAQK8zoKhq2xVI2BuyYrKjHBeTfo4F77wYsuisbj32DHoIFyMWCIk95csXbvLjWwEozS%2BnubSfqDYgE4r%2Bw1xBYuHxDz8NgsisT7hfZ1cuYhZe%2BaV1RuSHWBPsS%2BvvUrnAbLTMXlZFrtRrCYYlyc%2Fwl0SLGWF0O5bQ8ljs8hAhduimpEoyTAz770MBczqemtlxbScbhueNaOxgPsjLBqKpbfKd%2BhMs4Lglg04d2Al95%2FmTR19fXa2Om54JSBgsCeqMoxTeEAiGKYBmfJ3vs%2FK3vuEUwjCXz4jKBjqnAT8nEen5ryX5cLKyRNqc8%2FhZNpd4LeLtKm%2BK8HrnG8as3ay7eEa9%2BSEZe0i6UtNnyP0sqD88PdiFR1Octkt02hVJBmPpD26A6TDiO06D5NY0xOKGZYhXVS5tnXTytynyNsaUwSIB6%2BCsv4ZUODbfH1lQLKUYFghMgUGiluE%2Fs3sqKCzSLRcOUYLoMDpRgIROm5WU9Daeru3FpAUHJWiVk07vJSnpF7C5&X-Amz-Signature=68758ef12a0abc1629cf5a43f29327704399a91bc26060b7662161dc61b7b9f5&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


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


![Línea de texto ajustada.](https://prod-files-secure.s3.us-west-2.amazonaws.com/b44a5280-94c4-4879-b28a-2a22c936909b/6898574d-0348-40be-8c47-13db09d6d56f/ajuste-linea-correcto.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Content-Sha256=UNSIGNED-PAYLOAD&X-Amz-Credential=ASIAZI2LB4664C7MHJZY%2F20251217%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20251217T041015Z&X-Amz-Expires=3600&X-Amz-Security-Token=IQoJb3JpZ2luX2VjEKz%2F%2F%2F%2F%2F%2F%2F%2F%2F%2FwEaCXVzLXdlc3QtMiJFMEMCIHLXooEsWHjXusC%2BJZKR9E%2BVKhNpIq4fL18mBunpCkqCAh8daD9xgE5JAHD2hpbmC%2FmNLBW6qNMd4gjVFI4e1ce0Kv8DCHUQABoMNjM3NDIzMTgzODA1IgzvKjCoHc8tlkwKWvkq3AO3PocmjRi0XJaz4lYTNapbwwzfksdd06ZvPPZdpY5bBoL8yV%2FDjp%2FcCj17kgIPa%2FtnT%2FEBDnabR%2B6hhD2Uy3XT7oJVpor20DbGJrJ6%2FBiZMJ8qX3aU1g7cXGqKnqOwaHhXoVTmUw0S%2FoPEl5IbdlvyAXp6yMROE8vj%2FnrJSjdUjphp1kayAzJ3mYYclFYyAMzINh%2FvEciiztTR2zoVmW4A9RD3NjfR6gHT2s%2FMzB22qRFCSXqC0TF5ULIDYx8cO%2FqcaqTrUlkqqQ95it%2F4HJ5BVgbUBVM1jLCvj0OKGjbSi6ur74JBVHQNrJ9Leh9aITDAvFF7tXVSUuuTgUAbFv7BWND6ZMquixkAQK8zoKhq2xVI2BuyYrKjHBeTfo4F77wYsuisbj32DHoIFyMWCIk95csXbvLjWwEozS%2BnubSfqDYgE4r%2Bw1xBYuHxDz8NgsisT7hfZ1cuYhZe%2BaV1RuSHWBPsS%2BvvUrnAbLTMXlZFrtRrCYYlyc%2Fwl0SLGWF0O5bQ8ljs8hAhduimpEoyTAz770MBczqemtlxbScbhueNaOxgPsjLBqKpbfKd%2BhMs4Lglg04d2Al95%2FmTR19fXa2Om54JSBgsCeqMoxTeEAiGKYBmfJ3vs%2FK3vuEUwjCXz4jKBjqnAT8nEen5ryX5cLKyRNqc8%2FhZNpd4LeLtKm%2BK8HrnG8as3ay7eEa9%2BSEZe0i6UtNnyP0sqD88PdiFR1Octkt02hVJBmPpD26A6TDiO06D5NY0xOKGZYhXVS5tnXTytynyNsaUwSIB6%2BCsv4ZUODbfH1lQLKUYFghMgUGiluE%2Fs3sqKCzSLRcOUYLoMDpRgIROm5WU9Daeru3FpAUHJWiVk07vJSnpF7C5&X-Amz-Signature=649c264cabc31a61cc9ae7b149323ed4e52348fb54650748063f8e7ce31126a4&X-Amz-SignedHeaders=host&x-amz-checksum-mode=ENABLED&x-id=GetObject)


Puede que para los ajustes de línea con [CSS](https://www.manualweb.net/css/) te sonase más la propiedad [`word-wrap`](https://w3api.com/CSS/word-wrap/) que este [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/). Y es que las dos funcionan exactamente igual y con los mismos valores, si bien, en el estándar, se está imponiendo más la segunda sobre la primera, es por ello que los ajustes de línea con [CSS](https://www.manualweb.net/css/) los haremos con [`overflow-wrap`](https://www.w3api.com/CSS/overflow-wrap/).

